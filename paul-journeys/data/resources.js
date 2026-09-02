/* Background resources for each Come, Follow Me week, from Taylor Halverson's
   New Testament 2027 Resource Hub: https://insights.taylorhalverson.com/p/new-testament-resources
   Links are the hub's own; kinds: video, free (Saturday newsletter / free reading),
   circle (Teacher's Circle), plus (Insights+), article (blog / Exodus Tours), book. */
window.CFM_HUB = "https://insights.taylorhalverson.com/p/new-testament-resources";
const V = (t, u) => ({ t, u, k: "video" });
const F = (t, u) => ({ t, u, k: "free" });
const C = (t, u) => ({ t, u, k: "circle" });
const PL = (t, u) => ({ t, u, k: "plus" });
const A = (t, u) => ({ t, u, k: "article" });
const BK = (t, u) => ({ t, u, k: "book" });
const yt = (id) => "https://www.youtube.com/watch?v=" + id;
const ins = (s) => "https://insights.taylorhalverson.com/p/" + s;
const prod = (s) => "https://insights.taylorhalverson.com/products/" + s;
const th = (s) => "https://taylorhalverson.com/" + s;
const ex = (id) => "https://exodustours.com/?p=" + id;

const GREEK = BK("Beautiful Greek Words to Enhance Your New Testament Study", prod("beautiful-greek-words-to-enhance-your-new-testament-study"));
const INTROBOOK = BK("An Introduction to Each New Testament Book", prod("an-introduction-to-each-new-testament-book-insights-on-how-to-read-each-book-of-the-new-testament"));
const NAMES = BK("The Names of God: Fifty-Two Names in the New Testament", prod("the-names-of-god-fifty-two-names-of-god-in-the-new-testament-book-two-the-new-testament"));
const WITNESSES = BK("The Three Witnesses of Christ", prod("the-three-witnesses-of-christ-his-words-his-deeds-and-the-testimony-of-those-who-saw-him"));
const MASTER = BK("Jesus the Master Teacher: The Cultural World of Teaching in First-Century Judea", prod("jesus-the-master-teacher-the-cultural-world-of-teaching-in-first-century-judea"));
const APOC = BK("An Introduction to the Apocrypha: A Book-by-Book Guide", prod("an-introduction-to-the-apocrypha-a-book-by-book-guide"));
const PARABLES = BK("Reading the Parables of Jesus: A Method for Latter-day Saints", prod("reading-the-parables-of-jesus-a-method-for-latter-day-saints"));
const HOLINESS = BK("Distributed Holiness: How Scripture Rejects the Monopoly of Sacred Space", prod("distributed-holiness-how-scripture-rejects-the-monopoly-of-sacred-space-ed2"));
const TWENTYFIVE = BK("The Twenty-Five Minute Teacher", prod("the-twenty-five-minute-teacher-empowering-more-with-less-in-the-sunday-classroom"));
const WHOISJESUS = A("Who is Jesus and How Did He Answer This Question?", th("2019/06/19/who-is-jesus-and-how-did-he-answer-this-question/"));
const MATTMOSES = A("How Matthew Is Like Moses and What That Reveals about Jesus", th("2019/01/14/how-matthew-is-like-moses-and-what-that-reveals-about-jesus/"));
const CAPERNAUM = A("What Can You See at Capernaum?", ex(4541));
const JERICHO_LIFE = A("What Do We Learn in Jericho about Eternal Life?", th("2019/05/19/what-do-we-learn-in-jericho-about-eternal-life/"));
const CONVERSION = A("The Gospels Are Stunning Conversion Tools. How?", th("2019/01/22/how-the-gospels-are-stunning-tools-for-conversion-and-what-that-reveals-about-jesus/"));
const ECHOES = C("Literary Echoes as Ancient Footnotes", ins("literary-echoes-as-ancient-footnotes"));
const THIRTY = A("The Surprising Meaning of Thirty Shekels of Silver", th("2019/06/05/the-surprising-meaning-of-thirty-shekels-of-silver/"));
const OLIVES = A("Why Visit the Mount of Olives?", ex(4598));
const UPPER = A("Where Was the Upper Room?", ex(4484));
const GETH = A("Where Exactly Was the Garden of Gethsemane?", ex(4483));
const TRIBE = A("In the Eyes of God What Tribe Do I Belong To?", th("2019/08/11/in-the-eyes-of-god-what-tribe-do-i-belong-to/"));
const WOUNDABLE = PL("Woundable but Wise: Vulnerability Without Self-Betrayal", ins("woundable-but-wise-vulnerability-without-self-betrayal"));
const FEEDBACK = PL("You Deny the Faith When You Refuse to Give or Receive Feedback", ins("you-deny-the-faith-when-you-refuse-to-give-or-receive-feedback"));
const TEMPLE_REV = A("What Do We Learn About the Temple in the Book of Revelation?", th("2019/12/08/what-do-we-learn-about-the-temple-in-the-book-of-revelation/"));
const GALHYPO = A("See Hypocrisy in the Church? Lessons from Galatians", th("2019/09/22/see-hypocrisy-in-the-church-lessons-from-galatians/"));
const IDENTITY = A("Does Anyone Know Your True Identity?", th("2019/11/10/does-anyone-know-your-true-identity/"));
const GOOGLEEARTH = A("Teaching the Bible with Google Earth and Other Visualization Tools", th("2014/11/23/teaching-the-bible-with-google-earth-and-other-visualization-tools-sbl-presentation/"));
const MEEK = A("What Does Jesus Mean When He Asks Us to Be Meek?", th("2019/03/04/what-does-jesus-mean-when-he-asks-us-to-be-meek/"));

window.CFM_RESOURCES = {
1: { date: "Jan 3, 2027", items: [
  C("Whither Thou Goest, I Will Go — Covenant Operating System", ins("whither-thou-goest-i-will-go")),
  V("Matthew 1 — Come, Follow Me Insights (Taylor & Tyler)", yt("UuJsSkJ_h0w")),
  V("Luke 1 — Come, Follow Me Insights (Taylor & Tyler)", yt("5OoGQw2RJ94")),
  F("Why Does the New Testament Begin With a Genealogy and an Announcement?", ins("why-does-the-new-testament-begin-with-a-genealogy-and-an-announcement")),
  F("Silent Mercy, Shining Light", ins("silent-mercy-shining-light")),
  WHOISJESUS, MATTMOSES,
  A("Why Are Four Women Mentioned in the Genealogy of Matthew 1?", th("2019/01/10/why-are-four-women-mentioned-in-the-genealogy-of-matthew-1/")),
  A("Matthew 1 and Luke 1: Testimonies of Jesus", th("2015/01/07/new-article-matthew-1-and-luke-1-testimonies-of-jesus/")),
  A("The Psalm of Mary, or Mary's Magnificat", th("2014/09/07/the-psalm-of-mary-or-marys-magnificat/"))] },
2: { date: "Jan 10, 2027", items: [
  V("Luke 2; Matthew 2 — Come, Follow Me Insights", yt("pN39tVJBRhM")),
  F("Why Does God Reveal Christ to Some and Not to Others?", ins("why-does-god-reveal-christ-to-some-and-not-to-others")),
  A("Was Jesus Born in a Stable?", ex(4520)), WHOISJESUS, MATTMOSES] },
3: { date: "Jan 17, 2027", items: [
  C("How Teachers Teach Others to Find Literary Echoes in Scripture", ins("how-teachers-teach-others-to-find-literary-echoes-in-scripture")),
  ECHOES,
  V("John 1 — Come, Follow Me Insights", yt("sKSii1kywBY")),
  F("Why Does John Begin With Eternity Instead of Bethlehem?", ins("why-does-john-begin-with-eternity-instead-of-bethlehem")),
  A("No man hath seen God at any time. Has a woman?", th("2019/01/25/no-man-hath-seen-god-at-any-time-has-a-woman/"))] },
4: { date: "Jan 24, 2027", items: [
  C("I Will Establish His Kingdom For Ever — Covenant Operating System", ins("i-will-establish-his-kingdom-for-ever")),
  V("Matthew 3; Mark 1; Luke 3 — Come, Follow Me Insights", yt("sT6EAaqF7w0")),
  F("Why Does the Sinless Son of God Step Into the Waters of Repentance?", ins("why-does-the-sinless-son-of-god-step-into-the-waters-of-repentance")),
  CAPERNAUM, A("Where Was Jesus Baptized?", ex(4497)), WHOISJESUS, MATTMOSES] },
5: { date: "Jan 31, 2027", items: [
  V("Matthew 4; Luke 4–5 — Come, Follow Me Insights", yt("HQi9JEOwUzw")),
  F("Why Does Jesus Begin His Ministry With Both Healing and Calling?", ins("why-does-jesus-begin-his-ministry-with-both-healing-and-calling")),
  A("What Is Nazareth Village?", ex(4609)), A("What Is There to See in Nazareth?", ex(4608)), CAPERNAUM,
  A("The Symbolism of 40 in Scripture", th("2020/04/25/the-symbolism-of-40-in-scripture-mosiah-7-10/")),
  A("Where Was The Temple Pinnacle Jesus Resisted Jumping From?", th("2019/02/06/where-was-temple-pinnacle-jesus-resisted-jumping-from/")),
  MATTMOSES,
  A("Luke 4–6 and Matthew 10: Faithfully Responding to God's Call", th("2015/02/18/new-article-luke-4-6-and-matthew-10-faithfully-responding-to-gods-call/"))] },
6: { date: "Feb 7, 2027", items: [
  C("Forty Years of Hard School — Hard Topics", ins("forty-years-of-hard-school")),
  C("Four Obstacles Every Teacher Faces When Teaching Literary Echoes", ins("four-obstacles-every-teacher-faces-when-teaching-literary-echoes")),
  C("How to Find Literary Echoes in Scripture", ins("how-to-find-literary-echoes-in-scripture")), ECHOES,
  V("John 2–4 — Come, Follow Me Insights", yt("jtR7-caLLwg")),
  F("Why Does Jesus Begin His Ministry With Signs That Point Beyond Themselves?", ins("why-does-jesus-begin-his-ministry-with-signs-that-point-beyond-themselves")),
  A("Where Was Cana of Galilee?", ex(4640)), JERICHO_LIFE,
  A("Why Does John 4 Follow John 3?", th("2019/02/11/why-does-john-4-follow-john-3/"))] },
7: { date: "Feb 14, 2027", items: [
  V("Matthew 5; Luke 6 — Come, Follow Me Insights", yt("9ZwGt2uEBXE")),
  PL("What Jesus Really Meant by \"Fulfill\" the Law", ins("what-jesus-really-meant-by-fulfill-the-law")),
  F("Why Does Jesus Begin His Teaching With Blessings Instead of Rules?", ins("why-does-jesus-begin-his-teaching-with-blessings-instead-of-rules")),
  A("Where Was the Sermon on the Mount?", ex(4567)),
  A("The Beatitudes of Alma", th("2020/05/16/the-beatitudes-of-alma-how-the-blood-of-jesus-leads-to-blessings-and-beauty-mosiah-25-28/")),
  JERICHO_LIFE,
  A("What Are the Consequences of Putting Your Light Under a Bushel?", th("2019/03/25/what-are-the-consequences-of-putting-your-light-under-a-bushel/")),
  MEEK] },
8: { date: "Feb 21, 2027", items: [
  V("Matthew 6–7 — Come, Follow Me Insights", yt("nHdrCEJRDbs")),
  PL("When Forgiveness Had No Price — Covenant, Not Transaction", ins("when-forgiveness-had-no-price")),
  F("Why Does Jesus Link Righteousness With Trust in the Father?", ins("why-does-jesus-link-righteousness-with-trust-in-the-father")),
  F("You Cannot Serve God and Mammon", ins("you-cannot-serve-god-and-mammon")),
  A("Jesus' Revolutionary Teaching About Prayer", th("2019/02/27/jesus-revolutionary-teaching-about-prayer/")),
  A("Do Good Teachers Exaggerate?", th("2019/02/15/do-good-teachers-exaggerate/"))] },
9: { date: "Feb 28, 2027", items: [
  V("Matthew 8; Mark 2–4; Luke 7 — Come, Follow Me Insights", yt("o8b1qz_pQYk")),
  F("Why Does Jesus Show the Kingdom Through Healing and Parables?", ins("why-does-jesus-show-the-kingdom-through-healing-and-parables")),
  A("How Does Nain Relate to Jesus and the Old Testament?", ex(4647)),
  A("Matthew 11 and Luke 7; 11–13", th("2015/03/02/new-article-on-interpreter-matthew-11-and-luke-7-11-13/"))] },
10: { date: "Mar 7, 2027", items: [
  V("Matthew 9–10; Mark 5; Luke 9 — Come, Follow Me Insights", yt("2QHXbIkLUw0")),
  F("Why Does Jesus Call Imperfect People to Share His Mission?", ins("why-does-jesus-call-imperfect-people-to-share-his-mission")),
  A("Luke 4–6 and Matthew 10: Faithfully Responding to God's Call", th("2015/02/18/new-article-luke-4-6-and-matthew-10-faithfully-responding-to-gods-call/"))] },
11: { date: "Mar 14, 2027", items: [
  C("How Teachers Teach Others to Find Literary Echoes in Scripture", ins("how-teachers-teach-others-to-find-literary-echoes-in-scripture")),
  V("Matthew 11–12; Luke 11 — Come, Follow Me Insights", yt("fTTmGLHpEwg")),
  F("Why Does Jesus Offer Rest in the Middle of Rising Opposition?", ins("why-does-jesus-offer-rest-in-the-middle-of-rising-opposition")),
  A("What Is Chorazin, and Why Was It Cursed?", ex(4592)),
  A("Hippocrates, Galen, and Humoralism", th("2012/04/09/hippocrates-galen-and-humoralism/")),
  A("Matthew 11 and Luke 7, 11–13", th("2015/03/02/new-article-on-interpreter-matthew-11-and-luke-7-11-13/"))] },
12: { date: "Mar 21, 2027", items: [
  V("Matthew 13; Luke 8; 13 — Come, Follow Me Insights", yt("eIszLljmx_4")),
  F("Why Does Jesus Teach Truth in Stories That Some Understand and Others Do Not?", ins("why-does-jesus-teach-truth-in-stories-that-some-understand-and-others-do-not")),
  A("I Wish I Had What the Woman with the Issue of Blood Had", th("2019/03/18/i-wish-i-had-what-the-woman-with-the-issue-of-blood-had/"))] },
13: { date: "Mar 28, 2027", items: [
  V("Easter — Come, Follow Me Insights", yt("b1iRVD7Mv5o")),
  F("Why Is the Resurrection the Center of Christian Hope?", ins("why-is-the-resurrection-the-center-of-christian-hope"))] },
14: { date: "Apr 4, 2027", items: [
  V("Matthew 14; Mark 6; John 5–6 — Come, Follow Me Insights", yt("_ye8ByOk6XM")),
  F("Why Does Jesus Reveal His Identity Through Feeding and Rescue?", ins("why-does-jesus-reveal-his-identity-through-feeding-and-rescue")),
  A("What Is the Pool of Bethesda?", ex(4597))] },
15: { date: "Apr 11, 2027", items: [
  V("Matthew 15–17; Mark 7–9 — Come, Follow Me Insights", yt("T-hr-CDP67o")),
  F("Why Does Jesus Reveal His Glory Only After Teaching the Cost of Discipleship?", ins("why-does-jesus-reveal-his-glory-only-after-teaching-the-cost-of-discipleship")),
  A("Why Does Mount Tabor Matter?", ex(4643)), A("Where Was Bethsaida?", ex(4585)),
  A("Why Did Jesus Take His Disciples to Caesarea Philippi?", ex(4570)),
  A("Unexpected Insights on Why Jesus Asked 'Whom Do Men Say That I Am?'", th("2019/04/01/unexpected-insights-on-why-jesus-asked-whom-do-men-say-that-i-am/")),
  GOOGLEEARTH] },
16: { date: "Apr 18, 2027", items: [
  V("Matthew 18; Luke 10 — Come, Follow Me Insights", yt("3wFVxsb5Q5M")),
  F("Why Does Jesus Focus So Much on Forgiveness and Compassion?", ins("why-does-jesus-focus-so-much-on-forgiveness-and-compassion")),
  CONVERSION,
  A("Matthew 18 and Luke 10: What Is the Kingdom of God?", th("2015/04/07/matthew-18-and-luke-10-what-is-the-kingdom-of-god-new-article-on-interpreter/"))] },
17: { date: "Apr 25, 2027", items: [
  V("John 7–10 — Come, Follow Me Insights", yt("163tvf70ZAc")),
  PL("Over 6,800 Ways to Find Jesus in the Old Testament", ins("over-6-800-ways-to-find-jesus-in-the-old-testament")),
  F("Why Does Jesus Reveal His Identity During the Festivals of Jerusalem?", ins("why-does-jesus-reveal-his-identity-during-the-festivals-of-jerusalem")),
  A("What Is the Pool of Siloam?", ex(4603)),
  A("Why Did Jesus Say He Is the Light of the World?", th("2019/04/29/why-did-jesus-say-he-is-the-light-of-the-world/")),
  A("John 10 and Hearing Unto Salvation", th("2015/09/12/john-10-and-hearing-unto-salvation/")),
  A("John 9 and Seeing unto Salvation", th("2015/08/30/john-9-and-seeing-unto-salvation/")), GOOGLEEARTH] },
18: { date: "May 2, 2027", items: [
  V("Luke 12–17; John 11 — Come, Follow Me Insights", yt("a3gpmKAxehM")),
  PL("Remember Lot's Wife (Luke 17:32)", ins("remember-lot-s-wife-luke-17-32")),
  F("Why Does Jesus Teach Urgency Right Before Revealing His Power Over Death?", ins("why-does-jesus-teach-urgency-right-before-revealing-his-power-over-death")),
  A("Where Is Bethany?", ex(4627)), GALHYPO,
  A("He Was Lost, and Is Found: Luke 15; 17", th("2014/08/31/he-was-lost-and-is-found-luke-15-17/"))] },
19: { date: "May 9, 2027", items: [
  V("Matthew 19–20; Mark 10; Luke 18 — Come, Follow Me Insights", yt("YPJbJeVfa0g")),
  F("Why Does Jesus Challenge Our Deepest Attachments Before Entering Jerusalem?", ins("why-does-jesus-challenge-our-deepest-attachments-before-entering-jerusalem")),
  GREEK, PARABLES] },
20: { date: "May 16, 2027", items: [
  C("Faith Beyond Features", ins("faith-beyond-features")),
  V("Matthew 21–23; Mark 11; Luke 19–20; John 12 — Come, Follow Me Insights", yt("ZPkJNaF-Z_s")),
  F("Why Does Jesus Enter Jerusalem With Boldness and Confrontation?", ins("why-does-jesus-enter-jerusalem-with-boldness-and-confrontation")),
  A("What Can You See at Jericho?", ex(4580)), THIRTY, JERICHO_LIFE, CONVERSION, GREEK, HOLINESS] },
21: { date: "May 23, 2027", items: [
  V("JS—Matthew 1; Matthew 24–25; Mark 12–13; Luke 21 — Come, Follow Me Insights", yt("rGZ6yKqO__E")),
  F("Why Does Jesus Teach So Much About Destruction, Turmoil, and Watchfulness?", ins("why-does-jesus-teach-so-much-about-destruction-turmoil-and-watchfulness")),
  OLIVES,
  A("Matthew 25: Preparing for the Kingdom of Heaven", th("2015/06/25/matthew-25-preparing-for-the-kingdom-of-heaven/")),
  PARABLES, WITNESSES] },
22: { date: "May 30, 2027", items: [
  V("Matthew 26; Mark 14; John 13 — Come, Follow Me Insights", yt("laFgEAY0HPg")),
  F("Why Does Jesus Choose Passover to Reveal the Meaning of His Death?", ins("why-does-jesus-choose-passover-to-reveal-the-meaning-of-his-death")),
  A("Where Was the House of Caiaphas?", ex(4521)), UPPER, GETH, WHOISJESUS, THIRTY,
  BK("The King Redeems His Own Garden: Eden, Gethsemane, and the Redemption of Creation", prod("the-king-redeems-his-own-garden-eden-gethsemane-and-the-redemption-of-creation")),
  WITNESSES] },
23: { date: "Jun 6, 2027", items: [
  C("Now I Know That Thou Fearest God — Covenant Operating System", ins("now-i-know-that-thou-fearest-god")),
  V("John 14–17 — Come, Follow Me Insights", yt("IUccqK7-X1g")),
  PL("That Ye May Remember I Told You (John 16:4)", ins("that-ye-may-remember-i-told-you-john-16-4")),
  F("Why Does Jesus Spend His Final Hours Teaching About Peace, Love, and Unity?", ins("why-does-jesus-spend-his-final-hours-teaching-about-peace-love-and-unity")),
  CONVERSION, GREEK,
  BK("From \"I Am\" to \"We Become\"", prod("from-i-am-to-we-become-our-seven-identities-shaped-by-the-seven-identies-of-christ"))] },
24: { date: "Jun 13, 2027", items: [
  C("How to Find Literary Echoes in Scripture", ins("how-to-find-literary-echoes-in-scripture")),
  V("Luke 22; John 18 — Come, Follow Me Insights", yt("PUnlXbWs-98")),
  PL("Always Remember Him (Moroni 4:3)", ins("always-remember-him-moroni-4-3")),
  F("Why Does Jesus Submit to Betrayal and Injustice Without Resistance?", ins("why-does-jesus-submit-to-betrayal-and-injustice-without-resistance")),
  UPPER, GETH, GREEK,
  BK("The Bible as a Written Covenant", prod("the-bible-as-a-written-covenant-how-to-read-the-bible-and-how-to-understand-the-bible-on-its-own-terms-ed2"))] },
25: { date: "Jun 20, 2027", items: [
  V("Matthew 27; Mark 15; Luke 23; John 19 — Come, Follow Me Insights", yt("GcqjIt8VppY")),
  PL("Red is the Color of Transition (Reprised)", ins("red-is-the-color-of-transition-reprised")),
  F("Why Does the Son of God Die on a Roman Cross?", ins("why-does-the-son-of-god-die-on-a-roman-cross")),
  F("Red Before White: Blood, Sacrifice, and the Covenant Pattern of Purity", ins("red-before-white-blood-sacrifice-and-the-covenant-pattern-of-purity")),
  A("Was Jesus Buried at the Garden Tomb or the Church of the Holy Sepulchre?", ex(4408)), THIRTY, GREEK, WITNESSES] },
26: { date: "Jun 27, 2027", items: [
  V("Matthew 28; Mark 16; Luke 24; John 20–21 — Come, Follow Me Insights", yt("MPdAUnxbt_4")),
  WOUNDABLE,
  PL("Known in the Breaking of Bread (Luke 24:35)", ins("known-in-the-breaking-of-bread-luke-24-35")),
  F("Why Does the Resurrection Become the Foundation of Christian Faith and Mission?", ins("why-does-the-resurrection-become-the-foundation-of-christian-faith-and-mission")),
  A("Where Was Emmaus?", ex(4644)),
  A("What Does John 20 Reveal about Why John Wrote His Gospel?", th("2019/06/17/why-did-john-write-his-gospel/")),
  INTROBOOK, GREEK] },
27: { date: "Jul 4, 2027", items: [
  ECHOES, V("Acts 1–5 — Come, Follow Me Insights", yt("KgyG7D8OiWY")),
  F("Why Does Jesus Pour Out the Spirit Before Sending the Church Into the World?", ins("why-does-jesus-pour-out-the-spirit-before-sending-the-church-into-the-world")),
  OLIVES,
  A("Where Did the New Testament Stories Happen and Why Does That Matter?", th("2019/07/01/where-did-the-new-testament-stories-happen-and-why-does-that-matter-free-tools-to-learn-more/")),
  GREEK, MASTER] },
28: { date: "Jul 11, 2027", items: [
  V("Acts 6–9 — Come, Follow Me Insights", yt("RjDcUxVBiJ8")),
  F("Why Does God Choose a Persecutor to Carry His Message Forward?", ins("why-does-god-choose-a-persecutor-to-carry-his-message-forward")),
  WITNESSES] },
29: { date: "Jul 18, 2027", items: [
  V("Acts 10–15 — Come, Follow Me Insights", yt("jw8eSlbSf0w")),
  F("Why Does God Shatter Centuries of Boundary Lines to Include the Nations?", ins("why-does-god-shatter-centuries-of-boundary-lines-to-include-the-nations")),
  A("Difficult Changes in the Early Church", th("2019/07/16/difficult-changes-in-the-early-church-how-jesus-teaches-us-to-accept-similar-change-today/")),
  A("Acts 10–15: Continuing Revelation", th("2015/08/14/acts-10-15-continuing-revelation-new-article-on-interpreter/")),
  NAMES,
  BK("What Happened Between the Old and New Testament", prod("what-happened-between-the-old-and-new-testament-four-hundred-years-that-shaped-the-world-of-jesus"))] },
30: { date: "Jul 25, 2027", items: [
  V("Acts 16–21 — Come, Follow Me Insights", yt("jbBJGDC1mGw")),
  F("Why Does the Spirit Lead Paul Toward Hardship Instead of Comfort?", ins("why-does-the-spirit-lead-paul-toward-hardship-instead-of-comfort")),
  A("Why I Can't Comprehend God — And Why I Don't Want To", th("2019/07/22/why-i-cant-comprehend-god-and-why-i-dont-want-to/")),
  A("Acts 21–28: Faithfully Witness of Christ", th("2015/10/13/acts-21-28-faithfully-witness-of-christ-new-article-on-interpreter/")),
  INTROBOOK, GREEK] },
31: { date: "Aug 1, 2027", items: [
  V("Acts 22–28 — Come, Follow Me Insights", yt("dh8ku0HErgs")),
  F("Why Does God Allow Paul to Face Arrest, Trials, and Shipwreck?", ins("why-does-god-allow-paul-to-face-arrest-trials-and-shipwreck")),
  A("Our Lives Are Like Storm-Tossed Seas. What Should We Throw Overboard?", th("2019/07/29/our-lives-are-like-storm-tossed-seas-what-should-we-throw-overboard/")),
  MASTER] },
32: { date: "Aug 8, 2027", items: [
  V("Romans 1–6 — Come, Follow Me Insights", yt("eYEkphybteo")),
  F("Why Does Romans Begin With Humanity's Brokenness and God's Gift of Righteousness?", ins("why-does-romans-begin-with-humanity-s-brokenness-and-god-s-gift-of-righteousness")),
  GREEK, MASTER] },
33: { date: "Aug 15, 2027", items: [
  C("Thy Name Shall Be Called No More Jacob — Covenant Operating System", ins("thy-name-shall-be-called-no-more-jacob")),
  V("Romans 7–16 — Come, Follow Me Insights", yt("fEV1ZB_H0H4")),
  F("Why Does Paul Move From Personal Struggle to Communal Unity in Romans?", ins("why-does-paul-move-from-personal-struggle-to-communal-unity-in-romans")),
  TRIBE, GREEK,
  BK("Scriptural Insights and Commentary: The Old Testament", prod("scriptural-insights-and-commentary-the-old-testament"))] },
34: { date: "Aug 22, 2027", items: [
  V("1 Corinthians 1–7 — Come, Follow Me Insights", yt("BsRPPAwKrYk")),
  F("Why Does Paul Confront Division Before Every Other Problem in Corinth?", ins("why-does-paul-confront-division-before-every-other-problem-in-corinth")),
  APOC, HOLINESS] },
35: { date: "Aug 29, 2027", items: [
  V("1 Corinthians 8–13 — Come, Follow Me Insights", yt("UD5-cqQM8Uk")),
  F("Why Does Paul Center Everything on Love in a Church Obsessed With Gifts and Status?", ins("why-does-paul-center-everything-on-love-in-a-church-obsessed-with-gifts-and-status"))] },
36: { date: "Sep 5, 2027", items: [
  V("1 Corinthians 14–16 — Come, Follow Me Insights", yt("_AZUGvrDWAw")),
  F("Why Does Paul Connect Spiritual Gifts With the Resurrection of Christ?", ins("why-does-paul-connect-spiritual-gifts-with-the-resurrection-of-christ")),
  NAMES, WITNESSES] },
37: { date: "Sep 12, 2027", items: [
  V("2 Corinthians 1–7 — Come, Follow Me Insights", yt("fCya5XVlg-k")),
  F("Why Does Paul Speak So Personally About Pain, Weakness, and Comfort?", ins("why-does-paul-speak-so-personally-about-pain-weakness-and-comfort"))] },
38: { date: "Sep 19, 2027", items: [
  V("2 Corinthians 8–13 — Come, Follow Me Insights", yt("dZM9ZLBW-2g")),
  F("Why Does Paul Connect Generosity With Spiritual Discernment and Weakness?", ins("why-does-paul-connect-generosity-with-spiritual-discernment-and-weakness")),
  INTROBOOK, TWENTYFIVE] },
39: { date: "Sep 26, 2027", items: [
  V("Galatians — Come, Follow Me Insights", yt("HShhGfq0Nwc")),
  F("Why Does Paul Use Such Urgent, Fiery Language With the Galatian Churches?", ins("why-does-paul-use-such-urgent-fiery-language-with-the-galatian-churches")),
  GALHYPO, INTROBOOK] },
40: { date: "Oct 3, 2027", items: [
  V("Ephesians — Come, Follow Me Insights", yt("C8Uvc8BCz6Q")),
  F("Why Does Ephesians Focus on Identity Before Behavior?", ins("why-does-ephesians-focus-on-identity-before-behavior")),
  GREEK, NAMES] },
41: { date: "Oct 10, 2027", items: [
  V("Philippians; Colossians — Come, Follow Me Insights", yt("g3mspSYyMBY")),
  PL("Cultivate \"Futurability\" — Being a Good Ancestor", ins("cultivate-futurability")), WOUNDABLE,
  F("Why Do Philippians and Colossians Emphasize Joy and the Supremacy of Christ in the Middle of Suffering?", ins("why-do-philippians-and-colossians-emphasize-joy-and-the-supremacy-of-christ-in-the-middle-of-sufferi")),
  A("Beware of Dogs and Fake Men", th("2019/10/13/beware-of-dogs-and-fake-men/")), TRIBE, GREEK, NAMES] },
42: { date: "Oct 17, 2027", items: [
  V("1 and 2 Thessalonians — Come, Follow Me Insights", yt("J8ep4_7qJPU")),
  F("Why Does Paul Emphasize Steadfastness, Sexual Holiness, and Hope in Christ's Coming?", ins("why-does-paul-emphasize-steadfastness-sexual-holiness-and-hope-in-christ-s-coming")),
  INTROBOOK, GREEK] },
43: { date: "Oct 24, 2027", items: [
  V("1 and 2 Timothy; Titus; Philemon — Come, Follow Me Insights", yt("p9G46wWUcr8")),
  F("Why Do Paul's Final Letters Focus So Much on Character, Sound Teaching, and Steadfast Leadership?", ins("why-do-paul-s-final-letters-focus-so-much-on-character-sound-teaching-and-steadfast-leadership")),
  INTROBOOK, GREEK] },
44: { date: "Oct 31, 2027", items: [
  V("Hebrews 1–6 — Come, Follow Me Insights", yt("Z_Qtf-HCtzU")),
  F("Why Does Hebrews Begin With the Majesty of the Son Before Discussing the Covenant?", ins("why-does-hebrews-begin-with-the-majesty-of-the-son-before-discussing-the-covenant")),
  F("When God Bound Himself to Us with An Eternal Covenant", ins("when-god-bound-himself-to-us-with-an-eternal-covenant")),
  A("Where Do I Find More Holiness?", th("2019/11/04/where-do-i-find-more-holiness/")),
  BK("Knowing Jesus: How the Old Testament Prepares Us for Jesus", prod("knowing-jesus-how-the-old-testament-prepares-us-for-jesus")), NAMES] },
45: { date: "Nov 7, 2027", items: [
  C("When Everyone Does What Is Right in Their Own Eyes — Hard Topics", ins("when-everyone-does-what-is-right-in-their-own-eyes")),
  V("Hebrews 7–13 — Come, Follow Me Insights", yt("Ua-eKjBJcZA")),
  WOUNDABLE, FEEDBACK,
  F("Why Does Hebrews Spend So Much Time on Priesthood, Sacrifice, and the Heavenly Sanctuary?", ins("why-does-hebrews-spend-so-much-time-on-priesthood-sacrifice-and-the-heavenly-sanctuary")),
  IDENTITY, APOC, GREEK] },
46: { date: "Nov 14, 2027", items: [
  C("The 25 Minute Teacher", ins("the-25-minute-teacher")),
  V("James — Come, Follow Me Insights", yt("A_E864MTazQ")),
  PL("Understanding Hesed as the Heart of Covenant Life", ins("understanding-hesed-as-the-heart-of-covenant-life")), FEEDBACK,
  F("Why Does James Focus So Strongly on Doing the Word, Not Just Hearing It?", ins("why-does-james-focus-so-strongly-on-doing-the-word-not-just-hearing-it")),
  A("How the Brother of Jesus Brought Jesus and Wisdom Back to the World", th("2019/11/17/how-the-brother-of-jesus-brought-jesus-and-wisdom-back-to-the-world/")),
  IDENTITY,
  A("James: Exhort and Encourage", th("2015/10/29/james-exhort-and-encourage-new-article-on-interpreter/")),
  MASTER, TWENTYFIVE] },
47: { date: "Nov 21, 2027", items: [
  V("1 and 2 Peter — Come, Follow Me Insights", yt("iBCA-WnU8Pc")),
  F("Why Do Peter's Letters Focus So Intensely on Holiness, Suffering, and Discernment?", ins("why-do-peter-s-letters-focus-so-intensely-on-holiness-suffering-and-discernment")),
  A("Finding a Sure Foundation in Jerusalem and in Jesus", th("2019/11/24/finding-a-sure-foundation-in-jerusalem-and-in-jesus/")),
  MEEK,
  A("Reading 1 Peter Intertextually With Select Passages From the Old Testament", th("2016/06/04/reading-1-peter-intertextually-with-select-passages-from-the-old-testament/")),
  APOC] },
48: { date: "Nov 28, 2027", items: [
  V("1–3 John; Jude — Come, Follow Me Insights", yt("WQ_ATjHlhus")),
  F("Why Do These Short Letters Emphasize Love, Truth, and Warnings Against Deception?", ins("why-do-these-short-letters-emphasize-love-truth-and-warnings-against-deception")),
  A("Hey Jude! Showing Thanks to God for Salvation", th("2019/11/28/hey-jude-showing-thanks-to-god-for-salvation/")),
  INTROBOOK, GREEK] },
49: { date: "Dec 5, 2027", items: [
  V("Revelation 1–5 — Come, Follow Me Insights", yt("YKH-lIWsEXg")),
  PL("Remember From Whence Thou Art Fallen (Revelation 2:5)", ins("remember-from-whence-thou-art-fallen-revelation-2-5")),
  F("Why Does Revelation Begin With a Vision of the Glorified Christ and the Throne of Heaven?", ins("why-does-revelation-begin-with-a-vision-of-the-glorified-christ-and-the-throne-of-heaven")),
  TEMPLE_REV,
  A("Revelation 5–6 and 19–22: Views and Perspectives", th("2015/12/14/revelation-5-6-and-19-22-views-and-perspectives/")),
  NAMES] },
50: { date: "Dec 12, 2027", items: [
  V("Revelation 6–14 — Come, Follow Me Insights", yt("_x2EQJPi2L0")),
  F("Why Does Revelation Portray Judgment and Conflict Before Showing Renewal?", ins("why-does-revelation-portray-judgment-and-conflict-before-showing-renewal")),
  TEMPLE_REV] },
51: { date: "Dec 19, 2027", items: [
  V("Revelation 15–22 — Come, Follow Me Insights", yt("b08Z9KXm3CI")),
  PL("How Surprise Revives a Familiar Verse (Lamentations 3:22–23)", ins("how-surprise-revives-a-familiar-verse-lamentations-3-22-23")),
  F("Why Does Revelation End With Both Final Judgment and the Healing of All Creation?", ins("why-does-revelation-end-with-both-final-judgment-and-the-healing-of-all-creation")),
  A("The Covenantal Ending of Revelation in the Bible", th("2019/12/22/the-covenantal-ending-of-revelation-in-the-bible/")),
  TEMPLE_REV,
  BK("God Dwelling With His People: From Tabernacle To Temple", prod("god-dwelling-with-his-people-from-tabernacle-to-temple-ed2")), NAMES] },
52: { date: "Dec 26, 2027", items: [
  V("Christmas — Come, Follow Me Insights", yt("UVKx9yH7LH8")),
  F("Why Is Christmas Different This Year When We Retell the Story of Christ's Birth?", ins("why-is-christmas-different-this-year-when-we-retell-the-story-of-christ-s-birth"))] }
};
