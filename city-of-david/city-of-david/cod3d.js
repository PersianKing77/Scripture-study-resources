/* <cod-scene> — 3D view of the ridge. Terrain is a 1:1 metre heightfield built from the
   longitudinal crest profile in COD_ELEV plus modelled valley flanks; buildings come from
   COD_ELEV.buildings at their real footprint and height. No vertical exaggeration.
   Attributes: period, visible (comma-separated ids), ctxop, modernop, labels. */
(function () {
  var THREE = null;
  /* Default cross-ridge placement (metres east of the crest line): the Iron Age quarters and the
     eastern wall stood on terraces over the Kidron flank, monumental buildings on the crown,
     the street and drain in the Tyropoeon to the west. */
  var CAT_Z = { fort: 26, water: 22, monument: -4, domestic: 27, street: -2, agri: 12, destruction: 27, excav: 20, modern: 4, find: 26 };
  var CAT_D = { monument: 24, fort: 16, water: 14, domestic: 11, agri: 8, destruction: 18, excav: 22, modern: 11, find: 4, street: 8 };

  /* Two schemes for the same scene: a night-lit rock model, and a daylight paper model.
     Keyed by hex so the 2D views and this one flip together. */
  var LIGHT = {
    '#0f0d0a': '#e9e4d8', '#2e2820': '#cfc7b4', '#3a332a': '#c3b9a3',
    '#c3b9a6': '#3a3323', '#6b6152': '#6e6455', '#8f8b7d': '#57534a',
    '#cbbda3': '#3b3322', '#9d8f78': '#4a412f', '#d8cbb2': '#332c1c',
    '#b6a385': '#4d4432', '#efe2c6': '#5b5140', '#f6efe0': '#3d382e',
    '#b9b3a4': '#eef0f2', '#1c1508': '#cfc7b2', '#ffdfa4': '#fff3dc',
    '#9fb0bd': '#dfe6ec', '#efe6d3': '#7a6a4e', '#f0e7d5': '#2a251c',
    '#8a7f6d': '#564c3d', '#a6d3e6': '#2f6d84', '#5aa6d4': '#2b6c94',
    '#8fd0e8': '#2c6d85', '#f0c877': '#8a6510'
  };
  function TH(mode, hex) { return mode === 'light' ? (LIGHT[hex] || hex) : hex; }

  function smooth(t) { t = Math.max(0, Math.min(1, t)); return t * t * (3 - 2 * t); }

  /* Cross-ridge model, driven by measured elevations rather than a generic ramp.
     Anchors: Temple Mount 740 m; Ophel end of the ridge c. 725 m falling to c. 624 m at the
     southern tip; Gihon Spring 636 m on the eastern flank; Pool of Siloam 635.7 m (the tunnel
     between them drops only 30 cm in 533 m); the Kidron and Tyropoeon floors fall southwards to
     meet at c. 600 m; Mount Zion / Western Hill 765 m; the Silwan slope east rises past 700 m.
     The Tyropoeon shown here is the BEDROCK floor — today it is buried under many metres of fill. */
  function axis(x) { return -4 + 14 * smooth(x / 700); }   // crest drifts east towards the south
  function ez(east) { return -east; }                        // metres east  ->  scene z

  function terrain(x, z, V) {
    x = Math.max(0, Math.min(700, x));
    var crest = V.ground(x), a = (-z) - axis(x), d = Math.abs(a);
    var hw = 32 - 0.023 * x;                       // flat crown, 32 m half-width north to 16 m south
    if (d < hw) return crest - 2.4 * Math.pow(d / hw, 2);
    if (a > 0) {
      var kb = V.kidron(x), kd = 104;              // Kidron bed c. 104 m east of the crest line
      if (d <= kd) return crest - (crest - kb) * smooth((d - hw) / (kd - hw));
      // Silwan slope, climbing towards the Mount of Olives — keeps rising, never plateaus
      return kb + 88 * smooth((d - kd) / 130) + Math.max(0, d - kd - 130) * 0.28;
    }
    var tb = V.tyro(x), td = 92;                   // Tyropoeon bedrock floor c. 92 m west
    if (d <= td) return crest - (crest - tb) * smooth((d - hw) / (td - hw));
    // Western Hill / Mount Zion, c. 765 m at the summit — also keeps climbing
    return tb + 108 * smooth((d - td) / 120) + Math.max(0, d - td - 120) * 0.22;
  }

  class CodScene extends HTMLElement {
    connectedCallback() {
      if (this._boot) return;
      this._boot = true;
      this.style.cssText = 'position:relative;display:block;width:100%;height:100%;background:' + this.c('#0f0d0a') + ';overflow:hidden;cursor:grab';
      this.innerHTML = '<div data-tip style="position:absolute;left:12px;bottom:12px;max-width:min(300px,calc(100% - 24px));padding:10px 13px;background:' + (this.mode === 'light' ? 'rgba(250,248,242,0.94)' : 'rgba(13,11,9,0.93)') + ';border:1px solid ' + this.c('#2e2820') + ';border-radius:4px;font:11.5px/1.5 \'IBM Plex Mono\',monospace;color:' + this.c('#c3b9a6') + ';display:none;pointer-events:none"></div>'
        + '<div style="position:absolute;right:12px;bottom:12px;font:9.5px/1.5 \'IBM Plex Mono\',monospace;letter-spacing:0.1em;text-transform:uppercase;color:' + this.c('#6b6152') + ';pointer-events:none;text-align:right">drag to orbit · wheel to zoom · shift-drag to pan<br /><span data-vex>1:1</span> · solid = excavated, open frame = uncertain</div>'
        + '<div data-hud style="position:absolute;left:12px;top:10px;display:flex;align-items:center;gap:9px;font:9.5px/1 \'IBM Plex Mono\',monospace;letter-spacing:0.12em;text-transform:uppercase;color:' + this.c('#8f8b7d') + ';pointer-events:none">'
        + '<svg data-compass width="40" height="40" viewBox="-20 -20 40 40"><circle r="18" fill="' + (this.mode === 'light' ? 'rgba(250,248,242,0.8)' : 'rgba(13,11,9,0.75)') + '" stroke="' + this.c('#3a332a') + '"/><g data-rose><path d="M0 -15 L4.4 -2 L0 -4.6 L-4.4 -2 Z" fill="' + this.c('#cbbda3') + '"/><path d="M0 15 L2.6 3 L0 4.6 L-2.6 3 Z" fill="' + this.c('#6b6152') + '"/><text x="0" y="-16.5" text-anchor="middle" font-size="7" font-family="IBM Plex Mono, monospace" fill="' + this.c('#cbbda3') + '">N</text><text x="16.5" y="2.6" text-anchor="middle" font-size="6" font-family="IBM Plex Mono, monospace" fill="' + this.c('#8f8b7d') + '">E</text></g></svg>'
        + '</div>';
      this.tip = this.querySelector('[data-tip]');
      this.init();
    }
    disconnectedCallback() { if (this._raf) cancelAnimationFrame(this._raf); }
    static get observedAttributes() { return ['period', 'visible', 'ctxop', 'modernop', 'vex', 'xray', 'theme']; }
    get mode() { return this.getAttribute('theme') === 'light' ? 'light' : 'dark'; }
    c(hex) { return TH(this.mode, hex); }
    get vex() { return Math.max(1, parseFloat(this.getAttribute('vex') || '1.6')); }
    get xray() { var v = parseFloat(this.getAttribute('xray')); return isNaN(v) ? 1 : Math.max(0.08, Math.min(1, v)); }
    applyXray() {
      const o = this.xray, m = this.terrainMesh && this.terrainMesh.material;
      if (m) { m.opacity = o; m.transparent = o < 0.995; m.depthWrite = o > 0.985; m.needsUpdate = true; }
      if (this.terrainMesh) this.terrainMesh.receiveShadow = o > 0.985;
      (this.contours || []).forEach(c => { if (c.material) { c.material.opacity = c.userData.baseOp * (0.35 + 0.65 * o); c.material.needsUpdate = true; } });
    }
    attributeChangedCallback(n) {
      if (!this.ready) return;
      if (n === 'xray') { this.applyXray(); return; }
      if (n === 'theme') { this.applyScheme(); }
      if (n === 'vex' || n === 'theme') { this.scene.remove(this.terrainMesh); this.contours.forEach(c => this.scene.remove(c)); this.labelSprites.forEach(l => this.scene.remove(l)); this.buildTerrain(THREE); }
      this.build();
    }

    async init() {
      if (!THREE) {
        try {
          const srcEl = document.getElementById('cod-three-src');
          if (srcEl && srcEl.textContent) {
            const blobUrl = URL.createObjectURL(new Blob([srcEl.textContent], { type: 'text/javascript' }));
            THREE = await import(blobUrl);
            URL.revokeObjectURL(blobUrl);
          } else {
            THREE = await import('./vendor/three.module.js');
          }
        } catch (e) { this.innerHTML = '<div style="padding:24px;font:12px \'IBM Plex Mono\',monospace;color:#8a7f6d">3D view failed to load its renderer.</div>'; return; }
      }
      // window.COD_ELEV/window.COD are set by sibling <script src> tags lower in the document;
      // guard against connecting before they have run (e.g. a persisted 3D view on reload).
      for (let tries = 0; !window.COD_ELEV && tries < 100; tries++) await new Promise(r => setTimeout(r, 30));
      if (!window.COD_ELEV) { this.innerHTML = '<div style="padding:24px;font:12px \'IBM Plex Mono\',monospace;color:#8a7f6d">3D view failed to load its renderer.</div>'; return; }
      const T = THREE;
      this.scene = new T.Scene();
      this.scene.background = new T.Color(this.c('#0f0d0a'));
      this.scene.fog = new T.Fog(this.c('#0f0d0a'), this.mode === 'light' ? 900 : 520, this.mode === 'light' ? 2600 : 1500);

      this.cam = new T.PerspectiveCamera(42, 1, 1, 3000);
      this.renderer = new T.WebGLRenderer({ antialias: true });
      this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
      this.renderer.toneMapping = T.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = this.mode === 'light' ? 1.02 : 1.0;
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = T.PCFSoftShadowMap;
      this.renderer.domElement.style.cssText = 'display:block;width:100%;height:100%';
      this.insertBefore(this.renderer.domElement, this.firstChild);

      this.hemi = new T.HemisphereLight(this.c('#b9b3a4'), this.c('#1c1508'), this.mode === 'light' ? 0.55 : 0.5);
      this.scene.add(this.hemi);
      const sun = new T.DirectionalLight(this.c('#ffdfa4'), this.mode === 'light' ? 1.55 : 2.05);
      this.sun = sun;
      sun.position.set(-120, 240, -430);
      sun.castShadow = true;
      sun.shadow.mapSize.set(2048, 2048);
      sun.shadow.camera.left = -420; sun.shadow.camera.right = 420;
      sun.shadow.camera.top = 300; sun.shadow.camera.bottom = -300;
      sun.shadow.camera.far = 1600;
      sun.shadow.bias = -0.0009;
      this.scene.add(sun);
      const fill = new T.DirectionalLight(this.c('#9fb0bd'), this.mode === 'light' ? 0.22 : 0.3);
      this.fillLight = fill;
      fill.position.set(260, 140, 340);
      this.scene.add(fill);

      this.buildTerrain(T);
      this.group = new T.Group();
      this.scene.add(this.group);

      // orbit state
      this.orb = { az: 2.55, el: 0.60, r: this.clientWidth && this.clientWidth < 620 ? 900 : 720, tx: 0, ty: -10, tz: -6 };
      this.bindInput();
      this.ready = true;
      this.build();

      const loop = () => { this._raf = requestAnimationFrame(loop); this.frame(); };
      loop();
    }

    applyScheme() {
      if (!this.ready) return;
      const lightOn = this.mode === 'light';
      this.style.background = this.c('#0f0d0a');
      this.scene.background = new THREE.Color(this.c('#0f0d0a'));
      this.scene.fog = new THREE.Fog(this.c('#0f0d0a'), lightOn ? 900 : 520, lightOn ? 2600 : 1500);
      if (this.hemi) { this.hemi.color.set(this.c('#b9b3a4')); this.hemi.groundColor.set(this.c('#1c1508')); this.hemi.intensity = lightOn ? 0.55 : 0.5; }
      if (this.sun) { this.sun.color.set(this.c('#ffdfa4')); this.sun.intensity = lightOn ? 1.55 : 2.05; }
      if (this.fillLight) { this.fillLight.color.set(this.c('#9fb0bd')); this.fillLight.intensity = lightOn ? 0.22 : 0.3; }
      const tip = this.querySelector('[data-tip]');
      if (tip) { tip.style.background = lightOn ? 'rgba(250,248,242,0.94)' : 'rgba(13,11,9,0.93)'; tip.style.borderColor = this.c('#2e2820'); tip.style.color = this.c('#c3b9a6'); }
      const rose = this.querySelector('[data-compass]');
      if (rose) {
        const circ = rose.querySelector('circle');
        if (circ) { circ.setAttribute('fill', lightOn ? 'rgba(250,248,242,0.8)' : 'rgba(13,11,9,0.75)'); circ.setAttribute('stroke', this.c('#3a332a')); }
        const paths = rose.querySelectorAll('path'), txts = rose.querySelectorAll('text');
        if (paths[0]) paths[0].setAttribute('fill', this.c('#cbbda3'));
        if (paths[1]) paths[1].setAttribute('fill', this.c('#6b6152'));
        if (txts[0]) txts[0].setAttribute('fill', this.c('#cbbda3'));
        if (txts[1]) txts[1].setAttribute('fill', this.c('#8f8b7d'));
      }
      const hud = this.querySelectorAll('[data-hud], [data-vex]');
      hud.forEach(el => { el.style.color = this.c('#8f8b7d'); });
    }

    buildTerrain(T) {
      const vex = this.vex, Y = (e) => (e - 600) * vex, lightOn = this.mode === 'light';
      const V = window.COD_ELEV, NX = 249, NZ = 141, LX = 720, LZ = 400;
      const geo = new T.PlaneGeometry(LX, LZ, NX - 1, NZ - 1);
      geo.rotateX(-Math.PI / 2);
      const pos = geo.attributes.position, col = [];
      for (let i = 0; i < pos.count; i++) {
        const wx = pos.getX(i), wz = pos.getZ(i);
        const station = wx + 350, e = terrain(station, wz, V);
        pos.setY(i, Y(e));
        // pale bedrock on the crest, darker soil and terrace fill in the valleys
        const t = Math.max(0, Math.min(1, (e - 596) / 180));
        const k = lightOn ? 0.24 + 0.44 * Math.pow(t, 1.7) : 0.055 + 0.40 * Math.pow(t, 1.7);
        col.push(k * 1.04, k * 0.99 + 0.012 * (1 - t), k * 0.86 + 0.022 * (1 - t));
      }
      geo.setAttribute('color', new T.Float32BufferAttribute(col, 3));
      geo.computeVertexNormals();
      const mesh = new T.Mesh(geo, new T.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0 }));
      mesh.receiveShadow = true;
      this.scene.add(mesh);
      this.terrainMesh = mesh;
      this.contours = []; this.labelSprites = [];

      // 10 m contour lines draped on the surface — the standard way to read a landform
      const cm = new T.LineBasicMaterial({ color: this.c('#efe2c6'), transparent: true, opacity: lightOn ? 0.58 : 0.2 });
      for (let lev = 600; lev <= 760; lev += 10) {
        const segs = [];
        for (let st = 0; st <= 700; st += 5) {
          for (let zz = -LZ / 2; zz < LZ / 2; zz += 5) {
            const e1 = terrain(st, zz, V), e2 = terrain(st, zz + 5, V);
            if ((e1 - lev) * (e2 - lev) < 0) {
              const f = (lev - e1) / (e2 - e1);
              segs.push(new T.Vector3(st - 350, Y(lev) + 0.5, zz + 5 * f));
            }
          }
        }
        if (segs.length) {
          const pts = new T.Points(new T.BufferGeometry().setFromPoints(segs), new T.PointsMaterial({ color: this.c('#efe2c6'), size: 1.5, transparent: true, opacity: lightOn ? 0.62 : 0.3, sizeAttenuation: true }));
          this.scene.add(pts); this.contours.push(pts);
        }
      }
      const crestPts = [];
      for (let st = 0; st <= 700; st += 4) crestPts.push(new T.Vector3(st - 350, Y(V.ground(st)) + 0.7, ez(axis(st))));
      const crestLine = new T.Line(new T.BufferGeometry().setFromPoints(crestPts), new T.LineBasicMaterial({ color: this.c('#f6efe0'), transparent: true, opacity: lightOn ? 0.75 : 0.4 }));
      this.scene.add(crestLine);
      this.contours.push(crestLine);
      this.contours.forEach(c => { if (c.material && c.userData.baseOp == null) c.userData.baseOp = c.material.opacity; });
      this.applyXray();
      this.addLabels(T, V, Y);
    }

    addLabels(T, V, Y) {
      const mk = (text, size, colour) => {
        const c = document.createElement('canvas'), pad = 12, f = 46;
        const cx = c.getContext('2d');
        cx.font = f + "px 'IBM Plex Mono', monospace";
        c.width = Math.ceil(cx.measureText(text).width) + pad * 2;
        c.height = f + pad * 2;
        const g = c.getContext('2d');
        g.font = f + "px 'IBM Plex Mono', monospace";
        g.fillStyle = colour; g.textBaseline = 'middle';
        g.shadowColor = 'rgba(0,0,0,0.85)'; g.shadowBlur = 10;
        g.fillText(text, pad, c.height / 2);
        const tex = new T.CanvasTexture(c);
        tex.colorSpace = T.SRGBColorSpace;
        const sp = new T.Sprite(new T.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
        sp.scale.set(size * c.width / c.height, size, 1);
        return sp;
      };
      const put = (text, station, east, up, size, colour) => {
        const s = mk(text, size || 15, this.c(colour || '#cbbda3'));
        const z = ez(east);
        s.position.set(station - 350, Y(terrain(station, z, V)) + (up || 14), z);
        this.labelSprites.push(s); this.scene.add(s);
      };
      put('OPHEL · TEMPLE MOUNT 740 m', 15, 0, 26, 17, '#d8cbb2');
      put('KIDRON VALLEY', 300, 150, 8, 17, '#b6a385');
      put('TYROPOEON VALLEY (buried today)', 330, -132, 8, 16, '#b6a385');
      put('WESTERN HILL · 765 m', 240, -212, 12, 16, '#9d8f78');
      put('SILWAN SLOPE', 430, 208, 12, 16, '#9d8f78');
      put('Gihon Spring · ' + (V.spring ? V.spring.elev : 636) + ' m', 298, 79, 9, 12, '#a6d3e6');
      put('Pool of Siloam · ' + (V.pool ? V.pool.elev : 635.7) + ' m', 655, 10, 12, 12, '#a6d3e6');
      put('SOUTHERN TIP · c. 624 m', 698, 4, 16, 15, '#9d8f78');
    }

    build() {
      const T = THREE, V = window.COD_ELEV, PS = (window.COD || {}).periods || [];
      if (!T || !V) return;
      while (this.group.children.length) {
        const c = this.group.children.pop();
        if (c.geometry) c.geometry.dispose();
        if (c.material) c.material.dispose();
      }
      this.picks = [];
      const vex = this.vex, Y = (e) => (e - 600) * vex;
      const active = this.getAttribute('period');
      const vis = (this.getAttribute('visible') || '').split(',').filter(Boolean);
      const ctxop = parseFloat(this.getAttribute('ctxop') || '0.4');
      const mop = parseFloat(this.getAttribute('modernop') || '0.6');
      const colOf = id => this.c(((PS.find(p => p.id === id) || {}).c || '#c8b99c'));

      const add = (b, isActive, periodId) => {
        const col = colOf(periodId);
        let op = isActive ? 1 : ctxop;
        if (periodId === 'modern' || periodId === 'medott') op = isActive ? Math.max(0.15, mop) : Math.min(ctxop, mop);
        if (op < 0.04) return;
        const buried = b.elev != null;
        const mat = new T.MeshStandardMaterial({
          color: col, roughness: 0.72, metalness: 0.05,
          transparent: op < 1 || buried, opacity: buried ? Math.min(op, 0.62) : op,
          emissive: col, emissiveIntensity: isActive ? 0.14 : 0.05
        });
        if (b.line) {
          const w3 = b.w3 || b.th || 2, z = b.z3 != null ? b.z3 : (CAT_Z[b.cat] || 8);
          const zz = ez(z);
          for (let i = 1; i < b.line.length; i++) {
            const a = b.line[i - 1], c = b.line[i];
            const dx = c[0] - a[0], dy = c[1] - a[1], len = Math.hypot(dx, dy) || 1;
            const g = new T.BoxGeometry(len, Math.max(b.th || 2, 1.6) * vex, w3);
            const m = new T.Mesh(g, mat);
            m.position.set((a[0] + c[0]) / 2 - 350, Y((a[1] + c[1]) / 2), zz);
            m.rotation.z = Math.atan2(dy * vex, dx);
            m.userData.b = b;
            this.group.add(m); this.picks.push(m);
          }
          return;
        }
        const d = b.d3 || CAT_D[b.cat] || 10;
        const z = b.z3 != null ? b.z3 : (CAT_Z[b.cat] || 8);
        const zz = ez(z);
        const base = buried ? b.elev : terrain(b.x + b.w / 2, zz, V) + (b.dz || 0);
        const g = new T.BoxGeometry(b.w, b.h * vex, d);
        const m = new T.Mesh(g, mat);
        m.position.set(b.x + b.w / 2 - 350, Y(base + b.h / 2), zz);
        m.userData.b = b;
        if (!buried) { m.castShadow = true; m.receiveShadow = true; }
        this.group.add(m); this.picks.push(m);
        const unsure = b.conf === 'debated' || b.conf === 'conjectural';
        if (unsure) { m.material.opacity = Math.min(m.material.opacity, isActive ? 0.34 : 0.2); m.material.transparent = true; m.castShadow = false; }
        if (isActive || unsure) {
          const ed = new T.LineSegments(new T.EdgesGeometry(g), new T.LineBasicMaterial({
            color: unsure ? col : this.c('#f6efe0'), transparent: true,
            opacity: unsure ? (isActive ? 0.95 : 0.5) : (buried ? 0.35 : 0.62)
          }));
          ed.position.copy(m.position);
          this.group.add(ed);
        }
        if (b.shape === 'basilica') {
          const r = new T.Mesh(new T.ConeGeometry(d * 0.62, b.h * 0.4 * vex, 4), mat);
          r.position.set(m.position.x, Y(base + b.h) + b.h * 0.2 * vex, zz);
          r.rotation.y = Math.PI / 4;
          this.group.add(r);
        }
      };

      V.buildings.forEach(bd => {
        const isActive = bd.per === active;
        const shown = isActive || vis.indexOf(bd.per) >= 0;
        // the modern map overlay stands in for the present-day village whatever period is selected
        const asOverlay = !shown && mop > 0.02 && (bd.per === 'modern' || bd.per === 'medott') && (bd.cat === 'modern' || bd.cat === 'excav');
        if (!shown && !asOverlay) return;
        add(bd, isActive, bd.per);
      });

      // Hezekiah's Tunnel — traced as a bright thread inside the rock, with the
      // inscription's find spot marked, so the 533 m route reads at a glance.
      const tun = V.buildings.filter(b => b.line && /hezekiah/i.test(b.n || ''));
      const tunLive = active === 'ir2bc' || vis.indexOf('ir2bc') >= 0;
      if (tun.length) {
        tun.forEach(b => {
          const zz = ez(b.z3 != null ? b.z3 : (CAT_Z[b.cat] || 8));
          const pts = b.line.map(p => new T.Vector3(p[0] - 350, Y(p[1]) + 0.4, zz));
          const glow = new T.Line(new T.BufferGeometry().setFromPoints(pts),
            new T.LineBasicMaterial({ color: this.c('#8fd0e8'), transparent: true, opacity: active === 'ir2bc' ? 0.95 : (tunLive ? 0.45 : 0.22) }));
          this.group.add(glow);
          const end = b.line[b.line.length - 1];
          const mk = new T.Mesh(new T.SphereGeometry(2.6, 14, 10),
            new T.MeshStandardMaterial({ color: this.c('#f0c877'), emissive: this.c('#f0c877'), emissiveIntensity: 0.65, roughness: 0.4 }));
          mk.position.set(end[0] - 350 - 26, Y(end[1]) + 1.2, zz);
          mk.userData.b = { n: 'Siloam Inscription — where the two crews met', conf: 'secure', per: 'ir2bc', note: 'The tunnellers cut their account of the meeting into the wall a few metres inside the southern end.' };
          this.group.add(mk); this.picks.push(mk);
        });
      }

      // 1.7 m human figures, so the scale of everything else is instantly readable
      const skin = new T.MeshStandardMaterial({ color: this.c('#efe6d3'), roughness: 0.65, emissive: this.c('#efe6d3'), emissiveIntensity: 0.1 });
      [[180, 6], [330, 20], [470, -4], [640, 8]].forEach(pp => {
        const g2 = new T.Group();
        const body = new T.Mesh(new T.CapsuleGeometry(0.26, 0.92, 4, 8), skin);
        body.position.y = 1.02; body.castShadow = true;
        const head = new T.Mesh(new T.SphereGeometry(0.22, 10, 8), skin);
        head.position.y = 1.62;
        g2.add(body); g2.add(head);
        g2.scale.y = vex;
        g2.position.set(pp[0] - 350, Y(terrain(pp[0], ez(pp[1]), V)), ez(pp[1]));
        this.group.add(g2);
      });

      // the spring, as a marker
      const vl = this.querySelector('[data-vex]');
      if (vl) vl.textContent = vex === 1 ? 'true 1:1 scale' : 'heights \u00d7' + vex.toFixed(1) + ' (plan distances true)';
      const sp = new T.Mesh(new T.SphereGeometry(3.4, 16, 12), new T.MeshStandardMaterial({ color: this.c('#a6d3e6'), emissive: this.c('#5aa6d4'), emissiveIntensity: 0.5, roughness: 0.4 }));
      sp.position.set(V.spring.x - 350, Y(V.spring.elev), ez(V.spring.z || 79));
      this.group.add(sp);
    }

    bindInput() {
      const el = this;
      let drag = null;
      el.addEventListener('mousedown', e => { drag = { x: e.clientX, y: e.clientY, o: Object.assign({}, this.orb), shift: e.shiftKey }; el.style.cursor = 'grabbing'; });
      window.addEventListener('mouseup', () => { drag = null; el.style.cursor = 'grab'; });
      el.addEventListener('mousemove', e => {
        if (drag) {
          const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
          if (drag.shift) {
            this.orb.tx = drag.o.tx - dx * this.orb.r * 0.0016;
            this.orb.tz = drag.o.tz - dy * this.orb.r * 0.0016;
          } else {
            this.orb.az = drag.o.az - dx * 0.006;
            this.orb.el = Math.max(0.05, Math.min(1.45, drag.o.el + dy * 0.005));
          }
          return;
        }
        this.hover(e);
      });
      el.addEventListener('mouseleave', () => { this.tip.style.display = 'none'; });
      el.addEventListener('wheel', e => {
        e.preventDefault();
        this.orb.r = Math.max(45, Math.min(1500, this.orb.r * (1 + Math.sign(e.deltaY) * 0.11)));
      }, { passive: false });
    }

    hover(e) {
      if (!this.ready || !THREE) return;
      const T = THREE, r = this.getBoundingClientRect();
      this._ray = this._ray || new T.Raycaster();
      const m = new T.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
      this._ray.setFromCamera(m, this.cam);
      const hit = this._ray.intersectObjects(this.picks, false)[0];
      if (!hit) { this.tip.style.display = 'none'; return; }
      const b = hit.object.userData.b;
      this.tip.style.display = 'block';
      this.tip.innerHTML = '<div style="color:' + this.c('#f0e7d5') + ';font-size:13px;margin-bottom:4px">' + b.n + '</div>'
        + '<div style="color:' + this.c('#8a7f6d') + '">' + (b.line ? 'underground · about ' + (b.th || 2) + ' m across' : b.w + ' × ' + b.h + ' m' + (b.elev != null ? ' · floor at ' + b.elev + ' m asl' : ''))
        + ' · ' + b.conf + '</div>';
    }

    frame() {
      const w = this.clientWidth, h = this.clientHeight;
      if (!w || !h) return;
      if (this._w !== w || this._h !== h) {
        this._w = w; this._h = h;
        this.renderer.setSize(w, h, false);
        this.cam.aspect = w / h; this.cam.updateProjectionMatrix();
      }
      const o = this.orb;
      this.cam.position.set(
        o.tx + o.r * Math.cos(o.el) * Math.sin(o.az),
        o.ty + 60 + o.r * Math.sin(o.el),
        o.tz + o.r * Math.cos(o.el) * Math.cos(o.az)
      );
      this.cam.lookAt(o.tx, o.ty + 40, o.tz);
      const rose = this.querySelector('[data-rose]');
      if (rose) rose.setAttribute('transform', 'rotate(' + (-o.az * 180 / Math.PI - 90) + ')');
      this.renderer.render(this.scene, this.cam);
    }
  }

  if (!customElements.get('cod-scene')) customElements.define('cod-scene', CodScene);
})();
