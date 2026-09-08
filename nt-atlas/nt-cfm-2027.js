/* ——— CFM 2027: the official lessons ————————————————————————————
   The atlas's 53 weeks were built on the New Testament reading blocks, which the
   2027 manual keeps almost unchanged — but the manual's own lesson titles, date
   ranges and URLs are what a teacher actually works from, so they are folded in
   here rather than hard-coded into the schedule.

   One wrinkle worth recording: the 2027 manual numbers Easter week as segment 14
   and the week after it as 13, because Easter moves. The atlas keeps calendar
   order (week 13 is Easter), so those two segments are crossed below. Everything
   else is a straight week-for-segment match.

   Verified against the published manual contents, 2 September 2026. ————————— */

/* The reading blocks and the week dates are facts, and facts are free to state.
   The manual's own 51 lesson titles are the one place the atlas echoes someone
   else's editorial expression. Set MANUAL_TITLES to false and the atlas shows
   only blocks and dates; the links stay, and nothing else changes. See
   LICENSES.md § 3. */
const MANUAL_TITLES = false;

const CFM_2027_BASE = 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-new-testament-2027/';

/* week: [manual segment, date range, the manual's own lesson title] */
const CFM_2027 = {
  0:  ['00a', 'Introductory materials',      'Conversion Is Our Goal'],
  1:  ['01',  'December 28–January 3',       '“Be It unto Me According to Thy Word”'],
  2:  ['02',  'January 4–10',                'We Have Come to Worship Him'],
  3:  ['03',  'January 11–17',               '“We Have Found the Messiah”'],
  4:  ['04',  'January 18–24',               '“Prepare Ye the Way of the Lord”'],
  5:  ['05',  'January 25–31',               '“The Spirit of the Lord Is upon Me”'],
  6:  ['06',  'February 1–7',                '“Ye Must Be Born Again”'],
  7:  ['07',  'February 8–14',               '“Blessed Are Ye”'],
  8:  ['08',  'February 15–21',              '“He Taught Them as One Having Authority”'],
  9:  ['09',  'February 22–28',              '“Thy Faith Hath Saved Thee”'],
  10: ['10',  'March 1–7',                   '“These Twelve Jesus Sent Forth”'],
  11: ['11',  'March 8–14',                  '“I Will Give You Rest”'],
  12: ['12',  'March 15–21',                 '“What Is the Kingdom of God Like?”'],
  13: ['14',  'March 22–28',                 '“O Grave, Where Is Thy Victory?” — Easter week'],
  14: ['13',  'March 29–April 4',            '“Be Not Afraid”'],
  15: ['15',  'April 5–11',                  '“Thou Art the Christ”'],
  16: ['16',  'April 12–18',                 '“What Shall I Do to Inherit Eternal Life?”'],
  17: ['17',  'April 19–25',                 '“I Am the Good Shepherd”'],
  18: ['18',  'April 26–May 2',              '“Rejoice with Me; for I Have Found My Sheep Which Was Lost”'],
  19: ['19',  'May 3–9',                     '“What Lack I Yet?”'],
  20: ['20',  'May 10–16',                   '“Behold, Thy King Cometh”'],
  21: ['21',  'May 17–23',                   '“The Son of Man Shall Come”'],
  22: ['22',  'May 24–30',                   '“In Remembrance”'],
  23: ['23',  'May 31–June 6',               '“Continue Ye in My Love”'],
  24: ['24',  'June 7–13',                   '“Not My Will, but Thine, Be Done”'],
  25: ['25',  'June 14–20',                  '“It Is Finished”'],
  26: ['26',  'June 21–27',                  '“He Is Risen”'],
  27: ['27',  'June 28–July 4',              '“Ye Shall Be Witnesses unto Me”'],
  28: ['28',  'July 5–11',                   '“What Wilt Thou Have Me to Do?”'],
  29: ['29',  'July 12–18',                  '“The Word of God Grew and Multiplied”'],
  30: ['30',  'July 19–25',                  '“The Lord Had Called Us for to Preach the Gospel”'],
  31: ['31',  'July 26–August 1',            '“Be of Good Cheer … : Thou Hast Testified of Me”'],
  32: ['32',  'August 2–8',                  '“The Power of God unto Salvation”'],
  33: ['33',  'August 9–15',                 '“Overcome Evil with Good”'],
  34: ['34',  'August 16–22',                '“Be Perfectly Joined Together”'],
  35: ['35',  'August 23–29',                '“Ye Are the Body of Christ”'],
  36: ['36',  'August 30–September 5',       '“In Christ Shall All Be Made Alive”'],
  37: ['37',  'September 6–12',              '“Be Ye Reconciled to God”'],
  38: ['38',  'September 13–19',             '“God Loveth a Cheerful Giver”'],
  39: ['39',  'September 20–26',             '“Walk in the Spirit”'],
  40: ['40',  'September 27–October 3',      '“Gather Together in One All Things in Christ”'],
  41: ['41',  'October 4–10',                '“I Can Do All Things through Christ Which Strengtheneth Me”'],
  42: ['42',  'October 11–17',               '“Perfect That Which Is Lacking in Your Faith”'],
  43: ['43',  'October 18–24',               '“Be Thou an Example of the Believers”'],
  44: ['44',  'October 25–31',               '“Come Boldly unto the Throne of Grace”'],
  45: ['45',  'November 1–7',                '“An High Priest of Good Things to Come”'],
  46: ['46',  'November 8–14',               '“Be Ye Doers of the Word, and Not Hearers Only”'],
  47: ['47',  'November 15–21',              '“Rejoice with Joy Unspeakable and Full of Glory”'],
  48: ['48',  'November 22–28',              '“God Is Love”'],
  49: ['49',  'November 29–December 5',      '“Glory, and Power, Be unto … the Lamb for Ever”'],
  50: ['50',  'December 6–12',               '“They Overcame … by the Blood of the Lamb”'],
  51: ['51',  'December 13–19',              '“He That Overcometh Shall Inherit All Things”'],
  52: ['52',  'December 20–26',              '“Good Tidings of Great Joy”']
};

/* the manual's two orientation essays, offered on the weeks they precede */
const CFM_2027_ASIDES = {
  32: ['31a', 'Thoughts to keep in mind: reading the Epistles'],
  49: ['48a', 'Thoughts to keep in mind: reading the book of Revelation']
};

(function(){
  const A = window.NTATLAS;
  if(!A || !A.CFM){ console.error('CFM 2027 layer loaded before nt-cfm-data.js'); return; }
  A.CFM_YEAR = '2027';
  A.CFM.forEach(w => {
    const e = CFM_2027[w.week];
    if(!e) return;
    w.lessonTitle = MANUAL_TITLES ? e[2] : null;
    w.lessonDates = e[1];
    w.manualUrl = CFM_2027_BASE + e[0] + '?lang=eng';
    const a = CFM_2027_ASIDES[w.week];
    if(a){ w.asideUrl = CFM_2027_BASE + a[0] + '?lang=eng'; w.asideTitle = a[1]; }
  });
})();
