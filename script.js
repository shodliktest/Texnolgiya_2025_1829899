// ===== PAROL TIZIMI =====
const AUTH_KEY = 'SHodlik_test_texlaog_markazi_authenticated';
const VALID_CREDENTIALS = {
    username: 'Texnologiya2025',
    password: 'test1221'
};

// ===== TEST SAVOLLARI (400 TA) =====
const questionsData = [
  {
    question: "Papye-mashye qanday maqsadlarda ishlatiladi?",
    options: [
      "Qurilish materiallari",
      "Dekorativ san'at",
      "Elektronika ishlab chiqarish",
      "Tibbiyot asboblari"
    ],
    correctAnswer: "Dekorativ san'at"
  },
  {
    question: "Papye-mashye mahsulotlarini bezash uchun qanday materiallar ishlatiladi?",
    options: [
      "Rangli bo'yoqlar va lak",
      "Qum va tsement",
      "Metall va plastmassa",
      "Yog'och va shisha"
    ],
    correctAnswer: "Rangli bo'yoqlar va lak"
  },
  {
    question: "Papye-mashye so'zi qanday ma'noni anglatadi?",
    options: [
      "Yog'ochdan yasalgan",
      "Shishadan tayyorlangan",
      "Qog'oz va kley bilan qoplangan",
      "Tovush chiqaruvchi"
    ],
    correctAnswer: "Qog'oz va kley bilan qoplangan"
  },
  {
    question: "Qaysi jarayon papye-mashye tayyorlashda eng muhim?",
    options: [
      "Yelimlash",
      "Qoplash",
      "Quruqlash",
      "Bo'yash"
    ],
    correctAnswer: "Quruqlash"
  },
  {
    question: "Papye-mashye mahsulotlarida asosiy material sifatida ishlatiladigan qog'oz turi qaysi?",
    options: [
      "Karton",
      "Gazeta qog'ozi",
      "Fotopapir",
      "Shisha qog'oz"
    ],
    correctAnswer: "Gazeta qog'ozi"
  },
  {
    question: "Papye-mashye san'atida ishlatiladigan kley qanday holatda bo'lishi kerak?",
    options: [
      "Suyuq",
      "Qattiq",
      "Quruq",
      "Jel"
    ],
    correctAnswer: "Suyuq"
  },
  {
    question: "Papye-mashye mahsulotlari odatda qanday maqsadlar uchun ishlatiladi?",
    options: [
      "Og'ir yuklarni tashish",
      "Dekorativ buyumlar yaratish",
      "Elektr energiyasini saqlash",
      "Suv o'tkazish"
    ],
    correctAnswer: "Dekorativ buyumlar yaratish"
  },
  {
    question: "Papye-mashye tayyorlashda ishlatiladigan asosiy vositalardan biri nima?",
    options: [
      "Bolg'a",
      "Cho'tka",
      "Elektr arra",
      "Tegirmon"
    ],
    correctAnswer: "Cho'tka"
  },
  {
    question: "Papye-mashye tayyorlash uchun qog'oz qanday tayyorlanadi?",
    options: [
      "Suvda ivitiladi",
      "Quritiladi va maydalaydi",
      "Yog'lanadi",
      "Eritiladi"
    ],
    correctAnswer: "Suvda ivitiladi"
  },
  {
    question: "Papye-mashye san'atida qog'oz va kleydan tashqari yana nima ishlatiladi?",
    options: [
      "Lak va bo'yoqlar",
      "Metall va plastmassa",
      "Shisha va g'isht",
      "Suv va havo"
    ],
    correctAnswer: "Lak va bo'yoqlar"
  },
  {
    question: "Papye-mashye mahsulotlarining mustahkamligini oshirish uchun nima qo'llaniladi?",
    options: [
      "Qo'shimcha qog'oz qatlami",
      "Metall arqonlar",
      "Plastik tarkibiy qismlar",
      "Yog'och karkas"
    ],
    correctAnswer: "Qo'shimcha qog'oz qatlami"
  },
  {
    question: "Boshlang'ich ta'limda iqtisodiy tarbiya nima uchun muhim?",
    options: [
      "Faqat pulni tejash uchun",
      "O'quvchilarning iqtisodiy bilimlarini oshirish uchun",
      "Faqat katta yoshdagilar uchun kerak",
      "Shaxsiy maqsadlar uchun"
    ],
    correctAnswer: "O'quvchilarning iqtisodiy bilimlarini oshirish uchun"
  },
  {
    question: "\"Tejamkorlik\" nima?",
    options: [
      "Pul sarflash",
      "Resurslarni oqilona ishlatish",
      "Juda ko'p xarid qilish",
      "O'zini cheklash"
    ],
    correctAnswer: "Resurslarni oqilona ishlatish"
  },
  {
    question: "\"Xarajat\" tushunchasini tushuntirib bering.",
    options: [
      "Mahsulot yaratish jarayoni",
      "Resurslarni sarflash yoki sotib olish",
      "Faqat tejash jarayoni",
      "Pul ishlash"
    ],
    correctAnswer: "Resurslarni sarflash yoki sotib olish"
  },
  {
    question: "Tejamkorlikning asosiy foydasi nima?",
    options: [
      "Juda ko'p narsalarni sotib olish",
      "Pulni tejab qolish va kelajakda foydalangan holda ishlatish",
      "Har kuni barcha pullarni sarflash",
      "Barcha narsalarni bepul olish"
    ],
    correctAnswer: "Pulni tejab qolish va kelajakda foydalangan holda ishlatish"
  },
  {
    question: "\"Ishlab chiqarish vositalari\" deganda nimani tushunasiz?",
    options: [
      "Faqat inson qo'li bilan ishlab chiqariladigan narsalar",
      "Ishlab chiqarish jarayonida ishlatiladigan asbob-uskunalar, texnika va resurslar",
      "Faqat poyabzal va kiyim",
      "Pul tejash vositasi"
    ],
    correctAnswer: "Ishlab chiqarish jarayonida ishlatiladigan asbob-uskunalar, texnika va resurslar"
  },
  {
    question: "Iqtisodiy tarbiyada \"qarz\" tushunchasi nimani anglatadi?",
    options: [
      "Faqat pul berish",
      "Boshqalardan vaqtincha foydalanish uchun pul yoki resurs olish",
      "Faqat sotib olish",
      "Hech kimga yordam bermaslik"
    ],
    correctAnswer: "Boshqalardan vaqtincha foydalanish uchun pul yoki resurs olish"
  },
  {
    question: "Tejamkor bo'lish qanday foyda keltiradi?",
    options: [
      "Faqat ko'proq xarid qilish imkoniyati",
      "Kelajakda muhim narsalarga pul tejash imkoniyati",
      "Pulni har doim ishlatish",
      "Har kuni hamma narsani sotib olish"
    ],
    correctAnswer: "Kelajakda muhim narsalarga pul tejash imkoniyati"
  },
  {
    question: "Qo'l mehnatiga o'rgatishda qo'llaniladigan asosiy usullar tizimiga kirmaydigan usulni aniqlang.",
    options: [
      "Bilim va ko'nikma",
      "Og'zaki bayon qilish.",
      "Tushuntirish va hikoya qilish.",
      "Suhbat."
    ],
    correctAnswer: "Bilim va ko'nikma"
  },
  {
    question: "Bu usulda materialni jonli va obrazli bayon qilinadi va yangi bilimni o'qituvchining oʻzi beradi.",
    options: [
      "Suhbat usuli",
      "Og'zaki bayon qilish usuli",
      "Tushuntirish va hikoya qilish usuli",
      "Labaratoriya ishlari"
    ],
    correctAnswer: "Tushuntirish va hikoya qilish usuli"
  },
  {
    question: "Qaysi jarayonda o'quvchilarning idroklarini faollashtirish maqsadida tushuntirilayotgan material yuzasidan ularga bir-ikkita savol berish mumkin.",
    options: [
      "Hikoya qilish jarayonida",
      "Suhbat jarayonida",
      "Og'zaki bayon qilish jarayonida",
      "Tushuntirish jarayonida"
    ],
    correctAnswer: "Tushuntirish jarayonida"
  },
  {
    question: "Qaysi usul turli o'quv maqsadlarda, ya'ni yangi dastur materialini bayon qilish, bilimlarni rejalashtirish va chuqurlashtirish uchun takrorlash jarayonida, o'quvchilarning bilimini tekshirish uchun qo'llanishi mumkin?",
    options: [
      "Suhbat usuli",
      "Og'zaki bayon qilish usuli",
      "Tushuntirish va hikoya qilish usuli",
      "Labaratoriya ishlari"
    ],
    correctAnswer: "Tushuntirish va hikoya qilish usuli"
  },
  {
    question: "Ko'rgazmali qurollarni o'quvchilar tomonidan bajarilishini qaysi ishga kiritish mumkin?",
    options: [
      "Suhbat",
      "Mashq",
      "Ekskursiya",
      "Amaliy ish"
    ],
    correctAnswer: "Amaliy ish"
  },
  {
    question: "Qo'l mehnati mashg'ulotlarida ayrim bo'limlarni oʻrganish, kasblar, materiallarni tayyorlash texnologiyasi, xavfsizlik texnikasi qoidalarini tanishtirish munosabati bilan qo'llaniladi.",
    options: [
      "Texnik vositalar",
      "Ekskursiya",
      "Kitob bilan ishlash",
      "Mustaqil ishlar"
    ],
    correctAnswer: "Ekskursiya"
  },
  {
    question: "Tasvirlash texnikasining turli formalarini qirqish va ularni fon tarzida qabul qilingan materiallar hisobiga mustahkamlashga asoslanuvchi turi-.....?",
    options: [
      "Applikatsiya",
      "Mozaika",
      "Kviling",
      "Toshlar bilan ishlash"
    ],
    correctAnswer: "Applikatsiya"
  },
  {
    question: "ijodni rivojlantirishda katta yordam beradi, tasavvurni boyitadi, kuzatuvchanlik va diqqatni faollashtiradi, irodani tarbiyalaydi, chamalash va rangni sezishni o'stiradi.",
    options: [
      "Applikatsiya",
      "Mozaika",
      "Kviling",
      "Toshlar bilan ishlash"
    ],
    correctAnswer: "Applikatsiya"
  },
  {
    question: "Applikatsiya ishini bajarishda asosiy e'tibor nimaga qaratilishi kerak?",
    options: [
      "Kompozitsiyaga",
      "Rangiga",
      "Umumiy ko'rinishiga",
      "Sifatga"
    ],
    correctAnswer: "Kompozitsiyaga"
  },
  {
    question: "Yaxshi o'ylangan kompozitsiya, ya'ni tasvirlash lozim bo'lgan narsalarni joylashtirish qaysi ish turning muvaffaqiyati garovi hisoblanadi?",
    options: [
      "Applikatsiya",
      "Mozaika",
      "Kviling",
      "Toshlar bilan ishlash"
    ],
    correctAnswer: "Applikatsiya"
  },
  {
    question: "Monumental dekorativ san'at turlaridan biri..?",
    options: [
      "Applikatsiya",
      "Mozaika",
      "Kviling",
      "Toshlar bilan ishlash"
    ],
    correctAnswer: "Mozaika"
  },
  {
    question: "Turli davrlarda va turli mamlakatlarda qaysi ish turi qo'llaniladigan materialiga ko'ra ham, naqsh va rasmlariga ko'ra ham o'ziga xos xususiyatlarga ega boʻlgan?",
    options: [
      "Kviling",
      "Toshlar bilan ishlash",
      "Mozaika",
      "Applikatsiya"
    ],
    correctAnswer: "Mozaika"
  },
  {
    question: "O'rta Osiyo madrasalari, machitlar, hukmdorlarning saroylari qaysi ish turi bilan bezatilgan?",
    options: [
      "Kviling",
      "Rangli toshlar bilan",
      "Mozaika",
      "Applikatsiya"
    ],
    correctAnswer: "Mozaika"
  },
  {
    question: "Mozaika ishlarida nimalardan foydalaniladi?",
    options: [
      "oyna, sopol, plita.",
      "tosh, taxta",
      "sopol idish, qog'oz",
      "karton, oyna"
    ],
    correctAnswer: "oyna, sopol, plita."
  },
  {
    question: "... bu rasm sathida ayrim-ayrim parchalar (qog'oz, oyna, sapo, gul tojibarglari, tuxum po'sti va shu kabilar) qo 'yib chiqishdir.",
    options: [
      "Kviling",
      "Toshlar bilan ishlash",
      "Mozaika",
      "Applikatsiya"
    ],
    correctAnswer: "Mozaika"
  },
  {
    question: "Qaysi buyumdan mozaika qilishda shunday tasvirni tanlash kerakki, ularning konturlari mumkin qadar tekis va mayda egri-bugrilari bo'lmasligi kerak?",
    options: [
      "Tuxum po'stidan",
      "Toshdan",
      "Qog'ozdan",
      "Oynadan"
    ],
    correctAnswer: "Tuxum po'stidan"
  },
  {
    question: "Turli meva va sabzavot, poliz ekinlarining urug'lari, danak, baliq tangalari, chig'anoq, mayda toshlar bilan xilma-xil qaysi turdagi ishlarini bajarish mumkin?",
    options: [
      "Applikatsiya",
      "Mozaika",
      "Kviling",
      "Toshlar bilan ishlash"
    ],
    correctAnswer: "Applikatsiya"
  },
  {
    question: "Dars maqsadining qaysi turi dars jarayonida oʻquvchilarda shakllantiriladigan bilim, ko'nikma va malakalar asosida belgilanadi?",
    options: [
      "Tarbiyaviy maqsad",
      "Ta'limiy maqsad",
      "Rivojlantiruvchi maqsad",
      "Axloqiy maqsad"
    ],
    correctAnswer: "Ta'limiy maqsad"
  },
  {
    question: "Dars maqsadining qaysi turi dars natijasida o'quvchilarda qaysi bilimlar va axloqiy fazilatlar rivojlantirilishi asosida belgilanadi?",
    options: [
      "Rivojlantiruvchi maqsad",
      "Tarbiyaviy maqsad",
      "Axloqiy maqsad",
      "Ta'limiy maqsad"
    ],
    correctAnswer: "Rivojlantiruvchi maqsad"
  },
  {
    question: "Dars maqsadining qaysi turi dars jarayonida o'quvchilarda axloqiy sifatlar shakllantirilishi asosida belgilanadi?",
    options: [
      "Rivojlantiruvchi maqsad",
      "Tarbiyaviy maqsad",
      "Axloqiy maqsad",
      "Ta'limiy maqsad"
    ],
    correctAnswer: "Tarbiyaviy maqsad"
  },
  {
    question: "Qanday malaka ko'p marotaba takrorlanadigan mashqlar natijasida hosil boʻladi?",
    options: [
      "Mehnat madaniyati malakasi",
      "Yozma nutq malakasi",
      "Tinglab tushunish malakasi",
      "Anglash malakasi"
    ],
    correctAnswer: "Mehnat madaniyati malakasi"
  },
  {
    question: "Bolalar qaysi ish turi bilan ishlaganda nostandart ijodiy usullardan foydalanish va materiallar bilan tajriba o'tkazishda chalkashlik kuzatiladi?",
    options: [
      "Kviling",
      "Toshlar bilan ishlash",
      "Mozaika",
      "Applikatsiya"
    ],
    correctAnswer: "Applikatsiya"
  },
  {
    question: "Bolalar qaysi ish turi bilan ishlaganda ijodkorlikni ifoda etishdagi qiyinchiliklar kuzatiladi?",
    options: [
      "Applikatsiya",
      "Kviling",
      "Toshlar bilan ishlash",
      "Plastilin bilan ishlash"
    ],
    correctAnswer: "Kviling"
  },
  {
    question: "Applikatsiyaning qaysi turida nosimmetrik tasvirlar uchun kerakli oʻlchamdagi kvadrat yoki to'rtburchak qog'ozni yarmiga buklab chizib olamiz, uni buklov joyidan ushlab turamiz va tasvirning yarmini kesamiz.",
    options: [
      "Lentali applikatsiya",
      "Simmetrik applikatsiya",
      "Nosimmetrik applikatsiya",
      "Tasvirli applikatsiya"
    ],
    correctAnswer: "Simmetrik applikatsiya"
  },
  {
    question: "Applikatsiyaning qaysi turida bu usul bir yoki ikkita emas, balki tarqoq yoki o'zaro bog'langan ko'plab bir xil tasvirlarni olish imkonini beradi?",
    options: [
      "Lentali applikatsiya",
      "Simmetrik applikatsiya",
      "Nosimmetrik applikatsiya",
      "Tasvirli applikatsiya"
    ],
    correctAnswer: "Lentali applikatsiya"
  },
  {
    question: "Applikatsiyaning qaysi turida tasvirning to'qimasini (momiq tovuq, jingalak bulut) yetkazish uchun yaxshi variant hisoblanadi?",
    options: [
      "Qiyqim applikatsiya",
      "Lentali applikatsiya",
      "Modulli applikatsiya",
      "Somondan applikatsiya"
    ],
    correctAnswer: "Qiyqim applikatsiya"
  },
  {
    question: "Applikatsiyaning qaysi turida g'ayrioddiy jozibali, ular oltin kab porlaydi?",
    options: [
      "Qiyqim applikatsiya",
      "Lentali applikatsiya",
      "Modulli applikatsiya",
      "Somondan applikatsiya"
    ],
    correctAnswer: "Somondan applikatsiya"
  },
  {
    question: "Applikatsiyaning qaysi turida koʻplab bir xil shakllarni yopishtirish orqali tasvir hosil qilinadi?",
    options: [
      "Qiyqim applikatsiya",
      "Lentali applikatsiya",
      "Modulli applikatsiya",
      "Somondan applikatsiya"
    ],
    correctAnswer: "Modulli applikatsiya"
  },
  {
    question: "Applikatsiyaning qaysi turi juda mashhur bo'lib, unga boʻlgan qiziqish \"momiqlik\"ning g'ayrioddiy ta'siri va uni bajarishning oson usuli bilan bog'liq.",
    options: [
      "Qarama-qarshi applikatsiya",
      "Qiyqim applikatsiya",
      "Lentali applikatsiya",
      "Modulli applikatsiya"
    ],
    correctAnswer: "Qiyqim applikatsiya"
  },
  {
    question: "Darsda shakllanishi kerak bo'lgan aniq bilim, ko'nikma va malakalarning namunasi?",
    options: [
      "Darsning vazifasi",
      "Darsning maqsadi",
      "Dars tamoyili",
      "Dars usullari"
    ],
    correctAnswer: "Darsning vazifasi"
  },
  {
    question: "Qog'ozning uzun va qisqa tasmalarini spiral shaklida burab yupqa yoki hajmli kompozitsiyalar yasash san'ati-...?",
    options: [
      "Kviling",
      "Applikatsiya",
      "Plastilin bilan ishlash",
      "Mozaika"
    ],
    correctAnswer: "Kviling"
  },
  {
    question: "Qaysi texnika tasviri asosida (nafis gullar bejirim naqshlar, ertak qahramonlari, hayvonlar va baliqlar, qushlar) tabriknomalarni, albomlarni, qutichalarni, rasm uchun ramkalarni bezash mumkin.",
    options: [
      "Kviling",
      "Applikatsiya",
      "Plastilin bilan ishlash",
      "Mozaika"
    ],
    correctAnswer: "Kviling"
  },
  {
    question: "Qaysi san'at turi Yevropada o'rta asrlarda (14-15-asrlar) rohiblar tomonidan ixtiro qilingan?",
    options: [
      "Applikatsiya",
      "Mozaika",
      "Kviling",
      "Toshlar bilan ishlash"
    ],
    correctAnswer: "Kviling"
  },
  {
    question: "....bu shakllar va ranglarning ko'rib chiqilgan joylashuvi bo'lib, bir tomoni ikkinchisining oyna tasviri?",
    options: [
      "Simmetriya",
      "Asssimetriya",
      "Applikatsiya",
      "Nosimmetriya"
    ],
    correctAnswer: "Simmetriya"
  },
  {
    question: "...- bu fon tasvirlariga yopishtirilgan, simmetrik tuzilish bilan kuzatilgan obyektlar.",
    options: [
      "Simmetriya",
      "Asssimetriya",
      "Simmetrik applikatsiya",
      "Nosimmetriya"
    ],
    correctAnswer: "Simmetrik applikatsiya"
  },
  {
    question: "Barglar, gullar, daraxtlar, sabzavotlar, mevalar, rezavorlar, kapalaklar siluetlari, vazalar, idishlar tasvirlari qanday shakllarga kiradi?",
    options: [
      "Nosimmetrik shakllarga",
      "Simmetrik shakllarga",
      "Assimetrik shaklga",
      "Asssimetriyaga"
    ],
    correctAnswer: "Simmetrik shakllarga"
  },
  {
    question: "Avtomobillar, qayiqlar, baliqlar, qushlar, hayvonlar va boshqalar tasvirlari qanday shaklga kiradi?",
    options: [
      "Nosimmetrik shakllarga",
      "Simmetrik shakllarga",
      "Assimetrik shaklga",
      "Asssimetriyaga"
    ],
    correctAnswer: "Nosimmetrik shakllarga"
  },
  {
    question: "Hunarmand usta har-xil oddiy mehnat qurollari yordamida xom-ashyodan turli mahsulotlar tayyorlaydigan kasblarning umumiy nomi-...?",
    options: [
      "Hunarmandchilik",
      "Kashtachilik",
      "Toʻqimachilik",
      "Zargarlik"
    ],
    correctAnswer: "Hunarmandchilik"
  },
  {
    question: "Xalq hunarmandchiligining qaysi turi kiyimlarga va boshqa uy-ro'zg'or tikuv-buyumlariga bezak berishda qo'llaniladi?",
    options: [
      "Hunarmandchilik",
      "Kashtachilik",
      "To'qimachilik",
      "Zargarlik"
    ],
    correctAnswer: "Kashtachilik"
  },
  {
    question: "Nechanchi asr kashtalari eng yaxshi saqlanib, shu kunlargacha yetib kelgan?",
    options: [
      "XIX asr",
      "XX asr",
      "XXI asr",
      "XVIII asr"
    ],
    correctAnswer: "XIX asr"
  },
  {
    question: "Qaysi hunarmandchilik turida geometrik shakllar, o'simliksimon naqsh elementlari ko'p ko'zga tashlanadi?",
    options: [
      "Ipakdo'zlik",
      "Kashtachilik",
      "Gilamdo'zlik",
      "Zargarlik"
    ],
    correctAnswer: "Kashtachilik"
  },
  {
    question: "Bezatiladigan matoning arqoq va oʻrish iplari sanab kashta tikilishi kashtachilikning qaysi turiga mansub?",
    options: [
      "Sanama kashta",
      "Erkin kashta",
      "Ipakli kashta",
      "Naqshli kashta"
    ],
    correctAnswer: "Sanama kashta"
  },
  {
    question: "Kashta tikish jarayonida gavda biroz oldinga engashgan bo'lishi, ko'z bilan ish orasidagi masofa necha sm.dan oshmasligi kerak?",
    options: [
      "25 sm dan",
      "30 sm dan",
      "35 sm dan",
      "15 sm dan"
    ],
    correctAnswer: "30 sm dan"
  },
  {
    question: "O'simlik shoxlarini va novdalari qanday chok bilan tikiladi?",
    options: [
      "Suv chok bilan",
      "Iroqisimon chok bilan",
      "popop chok bilan",
      "O'rama chok bilan"
    ],
    correctAnswer: "Iroqisimon chok bilan"
  },
  {
    question: "Qo'l mehnati darslarida og'zaki bayon qilish usulining qaysi turi tushuntirish va hikoya qilish, instruktaj ko'rinishida bo'ladi?",
    options: [
      "diologik usul",
      "monologik usul",
      "tushuntirish va hikoya qilish usuli",
      "suhbat usuli"
    ],
    correctAnswer: "monologik usul"
  },
  {
    question: "Qaychi bilan ishlash qoidasi noto'g'ri ko'rsatilgan qatorni toping?",
    options: [
      "Qaychining tig'li tomonini ochiq qoldirish mumkin emas.",
      "Qaychining tig'li tomonini yuqoriga qaratib og'zi ochiq holda ushlamaslik kerak.",
      "Qaychining tig'li tomonini bilan uzatish kerak.",
      "Qaychining tig'li tomonini yopgan holatda, band tomoni bilan uzatish lozim."
    ],
    correctAnswer: "Qaychining tig'li tomonini bilan uzatish kerak."
  },
  {
    question: "Qaychi bilan ishlash texnikasi to'g'ri ko'rsatilgan qatorni toping?",
    options: [
      "Qog'ozni qirqish vaqtida qaychini emas, qog'ozni aylantirib kesing.",
      "Qaychini chap qo'lda ushlang.",
      "Qaychining tig'li tomonini ochiq holda qoldiring.",
      "Qaychini pastki tarafi bilan uzating."
    ],
    correctAnswer: "Qog'ozni qirqish vaqtida qaychini emas, qog'ozni aylantirib kesing."
  },
  {
    question: "Yelim bilan ishlash qoidasi noto'g'ri ko'rsatilgan qatorni toping.",
    options: [
      "Mo'yaqalamni toʻgʻri ushlang.",
      "Detal bir tekis yopishishi uchun salfetkadan foydalaning.",
      "Yelim qopqog'ini ochiq qoldirmang.",
      "Ish jarayonida maxsus polimer tagliklardan foydalanmang."
    ],
    correctAnswer: "Ish jarayonida maxsus polimer tagliklardan foydalanmang."
  },
  {
    question: "Badiiy san'at asarlari yaratishning eng soda va oson usuli?",
    options: [
      "Kviling",
      "Tosh bilan ishlash",
      "Applikatsiya",
      "Mozaika"
    ],
    correctAnswer: "Applikatsiya"
  },
  {
    question: "Applikatsiya ishida asosiy material nima hisoblanadi?",
    options: [
      "Qog'oz",
      "Tosh",
      "moʻyqalam",
      "Polimer taglik"
    ],
    correctAnswer: "Qog'oz"
  },
  {
    question: "Qog'oz turi noto'g'ri ko'rsatilgan qatorni toping?",
    options: [
      "Matbaa qog'ozi",
      "Chizma qog'ozi",
      "Qurilish qog'ozi",
      "Gafri qog'ozi"
    ],
    correctAnswer: "Qurilish qog'ozi"
  },
  {
    question: "Har xil bo'laklardan shakl hosil qilish?",
    options: [
      "Kviling",
      "Applikatsiya",
      "Plastilin bilan ishlash",
      "Mozaika"
    ],
    correctAnswer: "Applikatsiya"
  },
  {
    question: "Qog'ozni buklash usuli yordamida turli xil narsalar yasash qaysi ish usuliga kiradi?",
    options: [
      "Kviling",
      "Tosh bilan ishlash",
      "Applikatsiya",
      "Mozaika"
    ],
    correctAnswer: "Kviling"
  },
  {
    question: "1-sinf Texnologiya darsligida qanday ish turi berilmagan?",
    options: [
      "Qog'oz bilan ishlash",
      "Tabiiy materiallar bilan ishlash",
      "Karton bilan ishlash",
      "Kviling"
    ],
    correctAnswer: "Kviling"
  },
  {
    question: "Qaysi ish turida tasvirning barcha detallari, hatto eng kichiklari ham qog'ozdan qirqiladi, ularni chizmaslik kerak?",
    options: [
      "Kviling",
      "Tosh bilan ishlash",
      "Applikatsiya",
      "Mozaika"
    ],
    correctAnswer: "Applikatsiya"
  },
  {
    question: "Hunarni asrobon nedkumdir oxir, Olib tuproqqamu ketgumdur oxir. Ushbu satr muallifi kim?",
    options: [
      "Alisher Navoiy",
      "Jaloliddin Rumiy",
      "Rudakiy",
      "Mashrab"
    ],
    correctAnswer: "Alisher Navoiy"
  },
  {
    question: "Bolalar qaysi ish turi bilan ishlaganda materiallar bilan tajriba oʻtkazishda chalkashlik kuzatiladi?",
    options: [
      "Kviling",
      "Tosh bilan ishlash",
      "Applikatsiya",
      "Plastilin bilan ishlash"
    ],
    correctAnswer: "Kviling"
  },
  {
    question: "...- (yap. «buklangan qog'oz») san'at va hunarmandchilikning bir turi; qog'oz buklashning qadimiy san'ati?",
    options: [
      "Origami",
      "Kollaj",
      "Applikatsiya",
      "Mozaika"
    ],
    correctAnswer: "Origami"
  },
  {
    question: "Bu applikatsiya turi noyob o'yinni taqdim etadi: u oltin kabi porlaydi. Bu rasmlar, bezakli chiziqlar, kitoblar uchun xatcho'plar, qutilar, ramkalar bo'lishi mumkin.",
    options: [
      "Qarama- qarshi applikatsiya",
      "Qiyqim applikatsiya",
      "Lentali applikatsiya",
      "Somondan applikatsiya"
    ],
    correctAnswer: "Somondan applikatsiya"
  },
  {
    question: "Bigizdan foydalanish qoidasi noto'g'ri ko'rsatilgan qatorni toping?",
    options: [
      "Bigizni oʻrinsiz ishlatmang",
      "Sirti silliq va sirpanchiq bo'lgan qattiq buyumlarni bigiz bilan teshmang",
      "Teshiladigan buyumni qo'lingizga ushlagan holda teshing",
      "Bigiz bilan ishlaganingizda ustozingiz yok iota-onangiz ko'magiga tayaning"
    ],
    correctAnswer: "Teshiladigan buyumni qo'lingizga ushlagan holda teshing"
  },
  {
    question: "Igna bilan ishlash qoidasi noto'g'ri ko'rsatilgan qatorni toping?",
    options: [
      "Ignani ishlatib bo'lgach tashlab yuboring",
      "Ignani hehc qachon og'zingizga solmang",
      "Ortiqcha ignalarni maxsus igna idishda saqlang",
      "Ish tugagandan so'ng, ignani maxsus yostiqchaga sanchib qo'ying"
    ],
    correctAnswer: "Ignani ishlatib bo'lgach tashlab yuboring"
  },
  {
    question: "Ganchkorlik namunalarini qaysi shaharlardagi go'zal tarixiy binolarda ko'rishimiz mumkin?",
    options: [
      "Toshkent, Samarqand, Buxого",
      "Navoiy, Xorazm",
      "Farg'ona, Qoraqalpog'iston",
      "Samarqand, Qashqadaryo, Jizzax"
    ],
    correctAnswer: "Toshkent, Samarqand, Buxого"
  },
  {
    question: "Qaysi ish turiga ta'rif berilganda cheksiz fantaziya deb atash mumkin?",
    options: [
      "Kviling",
      "Tosh bilan ishlash",
      "Naqqoshlik",
      "Plastilin bilan ishlash"
    ],
    correctAnswer: "Plastilin bilan ishlash"
  },
  {
    question: "Yog'ochlarga ishlov beruvchi hunar egasi?",
    options: [
      "Ganchkor",
      "Suvoqchi",
      "Duradgor",
      "Usta"
    ],
    correctAnswer: "Duradgor"
  },
  {
    question: "Qaychidan foydalanish qoidasi noto'g'ri berilgan qatorni toping?",
    options: [
      "Qaychini belgilangan joyda saqlang",
      "Qaychining uchini yuqoriga qarab ushlamang",
      "Yaroqsiz qaychini o'zingiz to'g'irlab qo'ying",
      "Qaychini yurib turganingizda ishlatmang"
    ],
    correctAnswer: "Yaroqsiz qaychini o'zingiz to'g'irlab qo'ying"
  },
  {
    question: "Maxsus ish pichog'i bilan ishlash qoidasi to'g'ri ko'rsatilgan qatorni toping?",
    options: [
      "Maxsus pichoqni o'qituvchingiz yordamida foydalaning",
      "Maxsus pichoq bilan ishlaganizda qattiq bosing",
      "Kesiladigan buyumni qo'lingizda ushlagan holda bajaring",
      "Foydalanilgandan so'ng stol ustiga qo'ymang"
    ],
    correctAnswer: "Maxsus pichoqni o'qituvchingiz yordamida foydalaning"
  },
  {
    question: "Texnologiya darslarida foydalaniladigan qo'l mehnati ish anjomlariga nimalar kiradi?",
    options: [
      "Igna va ip, rangli qalamlar",
      "Angishvona, arra",
      "Sirkul, pichoq",
      "Bigiz, tok qaychi"
    ],
    correctAnswer: "Bigiz, tok qaychi"
  },
  {
    question: "Gibs va alebastr bilan turli shakllarda naqsh soluvchi usta?",
    options: [
      "Duradgor",
      "Naqqqosh",
      "Ganchkor",
      "Suvoqchi"
    ],
    correctAnswer: "Ganchkor"
  },
  {
    question: "Hunarmandchilikning qaysi turida ranglarni mujassamlanishi muhim ahamiyatga ega?",
    options: [
      "Kashtachilik",
      "Do'ppido'zlik",
      "Gilamdo'zlik",
      "Suvoqchilik"
    ],
    correctAnswer: "Kashtachilik"
  },
  {
    question: "Turli rangdagi ip, igna, ilmoqli bigiz bilan mato trikotaj, charm, kartonga qo'lda yoki mashinada gul tasvirini tushirish?",
    options: [
      "Kulolchilik",
      "Kashtachilik",
      "Do'ppido'zlik",
      "Gilamdo'zlik"
    ],
    correctAnswer: "Kashtachilik"
  },
  {
    question: "Hunarmandchilikning qaysi turida geometrik shakllar, o'simliksimon naqsh elementlari ko'zga tashlanadi?",
    options: [
      "Kulolchilik",
      "Kashtachilik",
      "Do'ppido'zlik",
      "Gilamdo'zlik"
    ],
    correctAnswer: "Kashtachilik"
  },
  {
    question: "Texnologik jarayonning ketma-ketligi to'g'ri ko'rsatilgan qatorni toping?",
    options: [
      "Bezash, bichish, tikish, konstruksiyalash",
      "Tikish, bichish, konstruksiyalash, bezash",
      "Konstruksiyalash, bichish, tikish, bezash",
      "Bichish, konstruksiyalash, bezash, tikish"
    ],
    correctAnswer: "Konstruksiyalash, bichish, tikish, bezash"
  },
  {
    question: "Shakllarni qog'ozga tushirishda foydalaniladigan usul to'g'ri ko'rsatilgan qatorni toping?",
    options: [
      "Konvert",
      "Traf",
      "Shablon",
      "Tangen"
    ],
    correctAnswer: "Shablon"
  },
  {
    question: "Barglarni quritish jarayoniga oid noto'gri fikrni toping?",
    options: [
      "Barglarni saralab, tozalab oling",
      "Barglarni ustidan qalin qog'ozni yopib, og'ir buyum bostirib qoʻying",
      "Barglarni quritish 1 kun davom etadi",
      "Dastlab barglarni qog'ozlar orasiga qo'ying"
    ],
    correctAnswer: "Barglarni quritish 1 kun davom etadi"
  },
  {
    question: "Applikatsiyaga oid to'g'ri ma'lumot berilgan qatorni toping?",
    options: [
      "Applikatsiyada iste'mol uchun ishlatiladigan urug va donlardan foydalanmang!",
      "Monumental dekorativ san'at rularidan biri",
      "Har xil bo'laklardan shakl hosil qilish san'ati",
      "Qog'ozning uzun va qisqa tasmalarini spiral shaklida burab yupqa yoki hajmli kompozitsiyalar yasash san'ati"
    ],
    correctAnswer: "Har xil bo'laklardan shakl hosil qilish san'ati"
  },
  {
    question: "Qaysi ish turidagi shakllar rangi va tuzilishiga ko'ra bir-biridan ajralib turadi?",
    options: [
      "Kviling",
      "Tosh bilan ishlash",
      "Applikatsiya",
      "Mozaika"
    ],
    correctAnswer: "Mozaika"
  },
  {
    question: "Kichik sinf o'quvchilarini qo'l mehnatiga o'rgatishning asosiy maqsadi nimadan iborat?",
    options: [
      "Boshlang'ich mehnat elementlarini o'rgatish",
      "Hayotga tayyorlash",
      "Kasb-hunarga o'rgatish",
      "Hayotga mustaqil bo'lishga o'rgatish"
    ],
    correctAnswer: "Boshlang'ich mehnat elementlarini o'rgatish"
  },
  {
    question: "O'quvchilarni texnologiya darslarida mehnatga axloqiy tayyorlash",
    options: [
      "Bolalarga jamoada ishlashni, o'zaro do'stona yordam berishni, ijodiy tashabbuskorlikni, tashkilotchilik qobiliyatlarini namoyish qilishdan iborat",
      "O'quvchilarni Texnologiya natijalariga hurmat bilan yondashishlari nazarda tutiladi.",
      "Texnologiya ta'limi va tarbiyasi bilan o'quvchilarni Texnologiyaga tayyorlash.",
      "O'quvchilarni Texnologiya kishilariga va Texnologiya natijalariga yaxshi munosabatda bo'lish."
    ],
    correctAnswer: "Bolalarga jamoada ishlashni, o'zaro do'stona yordam berishni, ijodiy tashabbuskorlikni, tashkilotchilik qobiliyatlarini namoyish qilishdan iborat"
  },
  {
    question: "Applikatsiya nima?",
    options: [
      "Turli shakllarni qirqish va ularni fon tarzida qabul qilingan materiallar hisobiga mustahkamlashga asoslanuvchi turidir.",
      "Sa'nat asari yaratishning eng sodda va oson usuli.",
      "Qog'oz va kartondan yasaladigan maketlar.",
      "Tabiatdagi mavjud bo'lgan barcha go'zallikni, borliqni yasash"
    ],
    correctAnswer: "Turli shakllarni qirqish va ularni fon tarzida qabul qilingan materiallar hisobiga mustahkamlashga asoslanuvchi turidir."
  },
  {
    question: "Texnologiya fanidan sinfdan tashqari ishlarning shakllari.",
    options: [
      "Ommaviy ishlar, to'garak ishlari, yakka tartibdagi mashg'ulotlarga qatnashish.",
      "Darsdan tashqari bajariladigan ishlar, ommaviy ishlar, maktab ishlari.",
      "Ommaviy ishlar, maktab ishlari, yakka tartibdagi mashg'ulotlarga qatnashish.",
      "Ommaviy ishlar, yakka tartibdagi ishlar."
    ],
    correctAnswer: "Ommaviy ishlar, to'garak ishlari, yakka tartibdagi mashg'ulotlarga qatnashish."
  },
  {
    question: "Boshlang'ich sinflarda qo'l mehnati turlari qaysi qatorda to'g'ri ko'rsatilgan?",
    options: [
      "Turli materiallar bilan ishlash, gazlama va ip turlari bilan ishlash, loyihalash va modellash ishlari, qishloq xo'jalik ishlari, qog'oz va karton bilan ishlash.",
      "Turli materiallar bilan ishlash, loyihalash va modellash ishlari, qishloq xo'jalik ishlari, qog'oz va karton bilan ishlash.",
      "Turli materiallar, gazlama bilan ishlash, qishloq xo'jalik ishlari.",
      "Applikatsiya va mozaika ishlar, qog'oz va karton bilan ishlash."
    ],
    correctAnswer: "Turli materiallar bilan ishlash, gazlama va ip turlari bilan ishlash, loyihalash va modellash ishlari, qishloq xo'jalik ishlari, qog'oz va karton bilan ishlash."
  },
  {
    question: "Turli materiallar bilan ishlash ish turi qaysi qatorda ko'rsatilgan?",
    options: [
      "Applikatsiya va mozaika, loy va plastilin, turli tabiiy materiallar bilan ishlash.",
      "Applikatsiya va mozaika, pape-mashe, qog'oz va karton bilan ishlash.",
      "Tabiiy materiallar, loy va plastilin, qog'oz va karton bilan ishlash.",
      "Applikatsiya, mozaika va turli materiallar bilan ishlash."
    ],
    correctAnswer: "Applikatsiya va mozaika, loy va plastilin, turli tabiiy materiallar bilan ishlash."
  },
  {
    question: "Qog'ozdan maketlar yasaganda nimalarga e'tibor berish kerak?",
    options: [
      "Qog'ozning rangiga va sifatiga, buklash chiziqlariga, qog'ozning shakliga, to'g'ri buklashga.",
      "Qog'ozning sifatiga, buklash chiziqlariga, shakliga.",
      "Qog'ozning sifatiga,buklash chiziqlariga.",
      "Qog'ozning shakliga, buklash chiziqlariga, to'g'ri buklashga va yelimlashga."
    ],
    correctAnswer: "Qog'ozning rangiga va sifatiga, buklash chiziqlariga, qog'ozning shakliga, to'g'ri buklashga."
  },
  {
    question: "Maketlar yasashda ishlatiladigan ish qurollari va materiallari qaysilar?",
    options: [
      "Rangli qog'oz, qaychi, yelim, qalam, chizg'ich, yozuv qog'ozi.",
      "Yozuv qog'ozi, rangli qog'oz, yelim.",
      "Rangli qog'oz, rangli karton, qaychi, yelim, qalam, chizg'ich.",
      "Qaychi, rangli qog'oz, rangli karton, yelim,"
    ],
    correctAnswer: "Rangli qog'oz, rangli karton, qaychi, yelim, qalam, chizg'ich."
  },
  {
    question: "Texnologiya darslarida kartondan nimalar yasaladi?",
    options: [
      "Ko'rgazmali qurollar",
      "Dekupaj",
      "Mozaika",
      "Kvilling"
    ],
    correctAnswer: "Ko'rgazmali qurollar"
  },
  {
    question: "Dekupaj san'ati qanday ma'noni bildiradi?",
    options: [
      "yog'och o'ymakorligi",
      "to'qimachilik san'ati",
      "metallga ishlov berish san'ati",
      "qog'oz va tasvirlar yopishtirish san'ati"
    ],
    correctAnswer: "qog'oz va tasvirlar yopishtirish san'ati"
  },
  {
    question: "Dekupaj texnikasida qaysi turdagi yelim ishlatiladi?",
    options: [
      "PVA yelim",
      "super yelim",
      "epoksi qatroni",
      "metall yelimi"
    ],
    correctAnswer: "PVA yelim"
  },
  {
    question: "Dekupajda qaysi yuzalar ko'proq ishlatiladi?",
    options: [
      "yog'och va shisha",
      "Metall va plastmassa",
      "Teridan yasalgan buyumlar",
      "To'qimachilik matolari"
    ],
    correctAnswer: "yog'och va shisha"
  },
  {
    question: "Qog'ozni buklab turli shakllar yasash qanday nomlanadi?",
    options: [
      "Applikatsiya va mozaika ishlari deb nomlanadi.",
      "Pape-mashe ishlari deb nomlanadi.",
      "Maket yoki origami deb nomlanadi.",
      "Kvilling deb nomlanadi."
    ],
    correctAnswer: "Maket yoki origami deb nomlanadi."
  },
  {
    question: "Dekupaj uchun qaysi qog'oz turi eng mos?",
    options: [
      "gazeta qog'ozi",
      "salfetka va maxsus dekupaj qog'ozi",
      "karton qog'ozi",
      "fotopapka"
    ],
    correctAnswer: "salfetka va maxsus dekupaj qog'ozi"
  },
  {
    question: "Yuzani dekupaj uchun tayyorlashda birinchi qadam nima?",
    options: [
      "Yuzani bo'yash",
      "Yuzani tozalash va silliqlash",
      "Qog'ozni kesish",
      "Yelimni surtish"
    ],
    correctAnswer: "Yuzani tozalash va silliqlash"
  },
  {
    question: "Dekupajda lakning vazifasi nima?",
    options: [
      "Yelimni quritish",
      "Tasvirni mustahkamlaydi va himoya qiladi",
      "Rang berish",
      "Tasvirni o'chiradi"
    ],
    correctAnswer: "Tasvirni mustahkamlaydi va himoya qiladi"
  },
  {
    question: "Dekupaj qaysi san'at turiga kiradi?",
    options: [
      "Grafika san'ati",
      "Amaliy san'at",
      "Haykaltaroshlik",
      "Foto san'ati"
    ],
    correctAnswer: "Amaliy san'at"
  },
  {
    question: "Dekupaj texnikasida qo'llaniladigan tasvirlar qaysi holatda bo'lishi kerak?",
    options: [
      "Yangi bosilgan",
      "Qattiq qog'ozda",
      "Ingichka va silliq qog'ozda",
      "To'q rangli qog'ozda"
    ],
    correctAnswer: "Ingichka va silliq qog'ozda"
  },
  {
    question: "Tasvirni joylashtirgandan so'ng qaysi bosqich amalga oshiriladi?",
    options: [
      "Quritish",
      "Yelimni qayta surtish",
      "Lak bilan qoplash",
      "Yuzani bo'yash"
    ],
    correctAnswer: "Lak bilan qoplash"
  },
  {
    question: "Dekupaj loyihalarida nechta lak qatlami tavsiya etiladi?",
    options: [
      "1 qatlam",
      "2-3 qatlam",
      "5-f qatlam",
      "10 qatlam"
    ],
    correctAnswer: "2-3 qatlam"
  },
  {
    question: "Qanday qilib dekupaj loyihasida nozik qog'oz bilan ishlashda yirtilishdan saqlanish mumkin",
    options: [
      "Qog'ozni namlash",
      "Qog'ozni qattiq yopishtirish",
      "Yelimni qalin surtish",
      "Qog'ozni avval qattiq yuzaga yopishtirish"
    ],
    correctAnswer: "Qog'ozni namlash"
  },
  {
    question: "Dekupajni qaysi bosqichda amalga oshirish kerak?",
    options: [
      "Loyihaning oxirida",
      "Loyihaning boshida",
      "Yelimlangan yuzaning quritilishidan keyin",
      "Tasvirni joylashtirishdan oldin"
    ],
    correctAnswer: "Yelimlangan yuzaning quritilishidan keyin"
  },
  {
    question: "Ayris-folding texnikasi qaysi turdagi san'atga kiradi?",
    options: [
      "Qog'oz san'ati",
      "Yog'och o'ymakorligi",
      "Rassomlik",
      "Haykaltaroshlik"
    ],
    correctAnswer: "Qog'oz san'ati"
  },
  {
    question: "Ayris-folding texnikasida qanday materiallar ishlatiladi?",
    options: [
      "Yog'och va bo'yoqlar",
      "Rangli qog'oz va karton",
      "Mato va iplar",
      "Metall va sim"
    ],
    correctAnswer: "Rangli qog'oz va karton"
  },
  {
    question: "Ayris-foldingning asosiy maqsadi nima?",
    options: [
      "Yuzaga haykal yaratish",
      "Rang berish texnikasi",
      "Tasvirlar va naqshlarni qog'oz qatlamlari orqali hosil qilish",
      "Matolarni biriktirish"
    ],
    correctAnswer: "Tasvirlar va naqshlarni qog'oz qatlamlari orqali hosil qilish"
  },
  {
    question: "Ayris-folding naqshini yaratish uchun qaysi vosita muhim?",
    options: [
      "Naqsh sxemasi",
      "Rangli bo'yoq",
      "Qalam",
      "Kley"
    ],
    correctAnswer: "Naqsh sxemasi"
  },
  {
    question: "Ayris-foldingda qaysi qog'oz turi koʻproq qo'llaniladi?",
    options: [
      "Gazeta qog'ozi",
      "Ingichka rangli qog'oz",
      "Karton qog'oz",
      "To'q rangli karton"
    ],
    correctAnswer: "Ingichka rangli qog'oz"
  },
  {
    question: "Qanday qilib Ayris-folding naqshi hosil qilinadi?",
    options: [
      "Ranglarni bir-biriga aralashtirib",
      "Qog'ozlarni muayyan tartibda qatlab joylashtirish orqali",
      "Naqshni boʻyab chiqish orqali",
      "Yelim va dekorativ buyumlar bilan ishlash"
    ],
    correctAnswer: "Qog'ozlarni muayyan tartibda qatlab joylashtirish orqali"
  },
  {
    question: "Ayris-folding texnikasi asosan qaysi yuzada qo'llaniladi?",
    options: [
      "Shisha yuzalar",
      "Karton yoki qattiq qog'oz yuzasi",
      "Yog'och yuzalar",
      "Metall yuzalar"
    ],
    correctAnswer: "Karton yoki qattiq qog'oz yuzasi"
  },
  {
    question: "Ayris-foldingda qog'ozni qaysi tartibda joylashtirish kerak?",
    options: [
      "Markazdan chetga qarab",
      "Chetlardan markazga qarab",
      "Yondan yonga qarab",
      "Tepadan pastga qarab"
    ],
    correctAnswer: "Chetlardan markazga qarab"
  },
  {
    question: "Ayris-folding naqshlari qanday yaratiladi?",
    options: [
      "Rangli bo'yoqlar bilan",
      "Oldindan belgilangan naqsh sxemasi boʻyicha",
      "Rangli matolar bilan",
      "O'zaro biriktirilgan yog'och bo'laklari orqali"
    ],
    correctAnswer: "Oldindan belgilangan naqsh sxemasi boʻyicha"
  },
  {
    question: "Qaysi vosita Ayris-foldingda qog'ozni joylashtirish uchun kerak bo'ladi?",
    options: [
      "Stapler",
      "Tikuv mashinasi",
      "Yelim yoki ikki tomonlama lenta",
      "Taxta"
    ],
    correctAnswer: "Yelim yoki ikki tomonlama lenta"
  },
  {
    question: "Ayris-folding naqshlari qanday ko'rinishda bo'ladi?",
    options: [
      "Realistik portretlar",
      "Spiral yoki geometrik shakllar",
      "To'qimalar va matolar",
      "3D haykallar"
    ],
    correctAnswer: "Spiral yoki geometrik shakllar"
  },
  {
    question: "Ayris-folding texnikasida ranglarni qanday tanlash muhim?",
    options: [
      "Faqat bitta rangdan foydalanish",
      "Faqat yorqin ranglar ishlatish",
      "Kontrast va muvofiqlikka e'tibor berish",
      "Tabiiy ranglarni tanlash"
    ],
    correctAnswer: "Kontrast va muvofiqlikka e'tibor berish"
  },
  {
    question: "Ayris-foldingda ishlatiladigan qog'ozlar qanday kesiladi?",
    options: [
      "Oldindan o'lchab va belgilab",
      "Qog'ozni buklab",
      "Har qanday shaklda kesib",
      "Ranglarga qarab tasodifiy kesib"
    ],
    correctAnswer: "Oldindan o'lchab va belgilab"
  },
  {
    question: "Qanday qilib Ayris-foldingda yaxshi natijaga erishish mumkin?",
    options: [
      "Ranglarni qorishtirib",
      "Sxemaga aniq rioya qilish va qog'ozlarni to'g'ri joylashtirish",
      "Naqshlarni tasodifiy tanlash",
      "Yelimni ko'p ishlatish"
    ],
    correctAnswer: "Sxemaga aniq rioya qilish va qog'ozlarni to'g'ri joylashtirish"
  },
  {
    question: "Ayris-folding texnikasining asosiy xususiyati nima?",
    options: [
      "Rangli bo'yoqlar orqali tasvir yaratish",
      "Qog'oz qatlamlari orqali chuqurlik va naqsh yaratish",
      "Matolarni yopishtirish orqali tasvir yaratish",
      "Yog'och oʻymakorligi orqali tasvir yaratish"
    ],
    correctAnswer: "Qog'oz qatlamlari orqali chuqurlik va naqsh yaratish"
  },
  {
    question: "To'qishda \"halqa\" qanday vazifani bajaradi?",
    options: [
      "Boshlang'ich nuqtani belgilaydi",
      "Tugallangan mahsulotni o'rab turadi",
      "Yopish uchun ishlatiladi",
      "Yakunlash uchun ishlatiladi"
    ],
    correctAnswer: "Boshlang'ich nuqtani belgilaydi"
  },
  {
    question: "To'qish ignalarining qalinligi qanday o'lchanadi?",
    options: [
      "Millimetrda",
      "Dyumda",
      "Santimetrda",
      "Metrda"
    ],
    correctAnswer: "Millimetrda"
  },
  {
    question: "Makrame texnikasi uchun asosiy material nima?",
    options: [
      "Elastik ip",
      "Qalin ip",
      "To'qilgan jun",
      "Aralash ip"
    ],
    correctAnswer: "Qalin ip"
  },
  {
    question: "Qanday qilib to'qish naqshini o'qish mumkin?",
    options: [
      "Diagramma va ramzlar orqali",
      "Rasm va ko'rsatmalar orqali",
      "Boshqa odamlarning yordami bilan",
      "To'qish naqshi o'qilmaydi"
    ],
    correctAnswer: "Diagramma va ramzlar orqali"
  },
  {
    question: "Spiral to'qish texnikasi qaysi mahsulotlarda qo'llaniladi?",
    options: [
      "Gilam va pardalarda",
      "Yostiqlar va hayvonchalarda",
      "Sharf va shapkalarda",
      "Uy-ro'zg'or buyumlarida"
    ],
    correctAnswer: "Yostiqlar va hayvonchalarda"
  },
  {
    question: "To'qishda qaysi turdagi iplar eng ko'p ishlatiladi?",
    options: [
      "Jun iplar",
      "Paxta iplar",
      "Sintetik iplar",
      "Tolali iplar"
    ],
    correctAnswer: "Jun iplar"
  },
  {
    question: "Qanday qilib to'qishni mustahkamlash mumkin?",
    options: [
      "Tugunlarni mustahkamlash orqali",
      "Qo'shimcha iplar qo'shish orqali",
      "Har bir satrni qayta to'qish orqali",
      "Naqsh chiqarish orqali"
    ],
    correctAnswer: "Tugunlarni mustahkamlash orqali"
  },
  {
    question: "To'qish ignalarining uzunligi nima uchun muhim?",
    options: [
      "Qulaylik va mahsulot o'lchami uchun",
      "Faqat bezak uchun",
      "Yopish uchun kerak",
      "Qatorlarni aralashtirib yubormaslik uchun"
    ],
    correctAnswer: "Qulaylik va mahsulot o'lchami uchun"
  },
  {
    question: "Bisser bilan ishlashning eng muhim asbobi nima?",
    options: [
      "Maxsus igna",
      "Qalin ip",
      "To'qish ignasi",
      "Mato"
    ],
    correctAnswer: "Maxsus igna"
  },
  {
    question: "Bisser bilan naqsh qanday yaratiladi?",
    options: [
      "Rang va shakl tanlash orqali",
      "Maxsus dasturlar yordamida",
      "Qo'lda",
      "Qog'ozlarni buklash orqali"
    ],
    correctAnswer: "Rang va shakl tanlash orqali"
  },
  {
    question: "Bisser naqshlari qaysi materiallarga ko'proq mos keladi?",
    options: [
      "Matoga",
      "Shisha buyumlarga",
      "Yog'och mahsulotlarga",
      "Metall yuzaga"
    ],
    correctAnswer: "Matoga"
  },
  {
    question: "Bisser naqshlarini qanday qilib mustahamlash mumkin?",
    options: [
      "Tugmalar bilan mustahkamlash orqali",
      "Maxsus elimlar yordamida",
      "Qo'shimcha iplar bilan",
      "Qog'ozlar bilan"
    ],
    correctAnswer: "Qo'shimcha iplar bilan"
  },
  {
    question: "Bisser bilan ishlashda naqsh o'lchamini qanday aniqlash mumkin?",
    options: [
      "Bisserlarning o'lchamiga qarab",
      "Naqshning murakkabligiga qarab",
      "Ipning qalinligiga qarab",
      "Ninaning turiga qarab"
    ],
    correctAnswer: "Bisserlarning o'lchamiga qarab"
  },
  {
    question: "Qanday qilib bisserlarni to'g'ri tanlash mumkin?",
    options: [
      "Rang va o'lchamga qarab",
      "Ish jarayoniga qarab",
      "Qo'shimcha aksessuarlarga qarab",
      "Matoga qarab"
    ],
    correctAnswer: "Rang va o'lchamga qarab"
  },
  {
    question: "Bisser naqshlarida qaysi texnika ko'proq qo'llaniladi?",
    options: [
      "Kvadrat tikuv",
      "Gorizontal tikuv",
      "Vertikal tikuv",
      "Aralash tikuv"
    ],
    correctAnswer: "Kvadrat tikuv"
  },
  {
    question: "Bisser bilan ishlashda naqshlarni qanday qilib o'zgartirish mumkin?",
    options: [
      "Ranglarni o'zgartirish orqali",
      "Naqshning shaklini o'zgartirish orqali",
      "Yangi bisserlarni qo'shish orqali",
      "igna turini o'zfartirish orqali"
    ],
    correctAnswer: "Ranglarni o'zgartirish orqali"
  },
  {
    question: "To'qish va bisser bilan ishlashda qanday farqlar mavjud?",
    options: [
      "Texnika va materiallarda",
      "Natijaviy mahsulotlarda",
      "Asbob-uskunalarda",
      "Bir-biriga o'xshab ketadi"
    ],
    correctAnswer: "Texnika va materiallarda"
  },
  {
    question: "To'qish va bisser bilan ishlashni birlashtirish mumkinmi?",
    options: [
      "Ha, maxsus usullar bilan",
      "Yo'q, alohida texnikalar",
      "Faqat alohida ishlab, yelimlanadi",
      "Ha, yelimlash orqali"
    ],
    correctAnswer: "Ha, maxsus usullar bilan"
  },
  {
    question: "To'qish va bisser naqshlarini qanday qilib birlashtirish mumkin?",
    options: [
      "Iplarni va bisserlarni moslashtirish orqali",
      "Har xil materiallarni ishlatib",
      "Qo'shimcha naqshlar qo'shish orqali",
      "Yelimlash orqali"
    ],
    correctAnswer: "Iplarni va bisserlarni moslashtirish orqali"
  },
  {
    question: "Qaysi mahsulotlar to'qish va bisser bilan ishlashda keng tarqalgan?",
    options: [
      "Sharf va bilaguzuklar",
      "Gilam va ko'ylaklar",
      "Bezak va devor naqshlari",
      "Tufli va o'yinchoqlar"
    ],
    correctAnswer: "Sharf va bilaguzuklar"
  },
  {
    question: "Qanday qilib to'qish va bisser naqshlarining sifatini oshirish mumkin?",
    options: [
      "Yangi texnikalarni qo'llab",
      "Sifatli materiallardan foydalanib",
      "Ko'proq vaqt ajratib",
      "Yelimlash orqali"
    ],
    correctAnswer: "Sifatli materiallardan foydalanib"
  },
  {
    question: "To'qish va bisser bilan ishlashda qanday rang uyg'unliklariga e'tibor berish kerak?",
    options: [
      "O'zaro mos va kontrast ranglarga",
      "Monoton ranglarga",
      "Faqat yorqin ranglarga",
      "Ranglar farqlanmaydi"
    ],
    correctAnswer: "O'zaro mos va kontrast ranglarga"
  },
  {
    question: "Qaysi bosqichda to'qish va bisser naqshlarini tugatish kerak?",
    options: [
      "Naqsh to'liq bajarilganda",
      "Yarim yo'lda to'xtatilganda",
      "Qo'shimcha bezaklar qo'shilganda",
      "Iplar va bisserlar tugaganida"
    ],
    correctAnswer: "Naqsh to'liq bajarilganda"
  },
  {
    question: "Tugmalarni matoga biriktirish uchun eng yaxshi usul qaysi?",
    options: [
      "Yelim bilan yopishtirish",
      "Tikish ignasi va ip bilan tikish",
      "Maxsus kliplar yordamida",
      "To'quv iplari bilan"
    ],
    correctAnswer: "Tikish ignasi va ip bilan tikish"
  },
  {
    question: "Qanday qilib tugma uchun to'g'ri ipni tanlash mumkin?",
    options: [
      "Tugmaning rangiga qarab",
      "Tugmaning o'lchamiga qarab",
      "Matoning turiga qarab",
      "Matoning holatiga qarab"
    ],
    correctAnswer: "Matoning turiga qarab"
  },
  {
    question: "Qaysi turdagi tugmalar asosan pardoz uchun ishlatiladi?",
    options: [
      "Plastik tugmalar",
      "Metall tugmalar",
      "Bezakli tugmalar",
      "00 rangli tugmalar"
    ],
    correctAnswer: "Bezakli tugmalar"
  },
  {
    question: "Qanday qilib tugmalarni mustahkam biriktirish mumkin?",
    options: [
      "Qo'shimcha iplar bilan mustahkamlash orqali",
      "Tugmalarni qalin iplar bilan tikish orqali",
      "Faqat maxsus tikuv mashinalaridan foydalanib",
      "Bisser qo'shish orqali"
    ],
    correctAnswer: "Tugmalarni qalin iplar bilan tikish orqali"
  },
  {
    question: "Qanday qilib tugmalarni to'g'ri joylashtirish mumkin?",
    options: [
      "O'lchov lenta yordamida joylashuvni belgilab",
      "Ko'z bilan hisoblab joylashtirib",
      "Matoni burab joylashtirib",
      "Rangiga qarab"
    ],
    correctAnswer: "O'lchov lenta yordamida joylashuvni belgilab"
  },
  {
    question: "Tugmani matoga joylashtirishda qaysi tikuv turi ko'proq ishlatiladi?",
    options: [
      "Zig-zag tikuv",
      "To'g'ri tikuv",
      "Tugma tikish uchun maxsus tikuv",
      "Suv chok"
    ],
    correctAnswer: "Tugma tikish uchun maxsus tikuv"
  },
  {
    question: "Qanday qilib tugmalarni matodan olib tashlash mumkin?",
    options: [
      "Qaychi bilan kesib olish orqali",
      "Tikish ignasi yordamida iplarni bo'shatib",
      "Qayta tikib olib tashlash orqali",
      "Matoni kesish orqali"
    ],
    correctAnswer: "Tikish ignasi yordamida iplarni bo'shatib"
  },
  {
    question: "Tugma va ilgaklar qanday qilib birgalikda ishlatiladi?",
    options: [
      "Faqat dekorativ maqsadda",
      "Kiyimlarni mahkamlash uchun",
      "Faqat maxsus matolar bilan",
      "Faqat maxsus iplar bilan"
    ],
    correctAnswer: "Kiyimlarni mahkamlash uchun"
  },
  {
    question: "Qaysi materialdan tayyorlangan tugmalar ko'proq chidamlidir?",
    options: [
      "Yog'och",
      "Plastik",
      "Metall",
      "Ipli"
    ],
    correctAnswer: "Metall"
  },
  {
    question: "Qanday qilib tugmalarni yuvish paytida shikastlanishdan saqlash mumkin?",
    options: [
      "Ularni yuvishdan oldin olib tashlash orqali",
      "Yuviladigan kiyimlarni maxsus qoplarga solib",
      "Juda qattiq bosimda yuvib",
      "Past haroratda yuvish orqali"
    ],
    correctAnswer: "Yuviladigan kiyimlarni maxsus qoplarga solib"
  },
  {
    question: "Izonit texnikasi qanday materiallardan foydalanishni talab qiladi?",
    options: [
      "Mato va jun",
      "Karton va ip",
      "Yog'och va elim",
      "Qog'oz va bo'yoq"
    ],
    correctAnswer: "Karton va ip"
  },
  {
    question: "Izonit texnikasida qaysi asbob eng muhim?",
    options: [
      "Qaychi",
      "Tikish ignasi",
      "Qalam",
      "Maxsus igna"
    ],
    correctAnswer: "Maxsus igna"
  },
  {
    question: "Izonit texnikasida naqsh qanday yaratiladi?",
    options: [
      "Iplarni to'g'ri kesib joylash orqali",
      "Iplarni oldindan belgilangan chizilgan chiziqlar bo'ylab o'rash orqali",
      "Naqshni elim bilan yopishtirib",
      "Rasm chizib, iplarni joylashtirib"
    ],
    correctAnswer: "Iplarni oldindan belgilangan chizilgan chiziqlar bo'ylab o'rash orqali"
  },
  {
    question: "Izonit texnikasida naqsh qaysi turdagi iplar bilan chiroyli chiqadi?",
    options: [
      "Qalin iplar",
      "Rangli ipak iplar",
      "Paxta iplar",
      "Sintetik iplar"
    ],
    correctAnswer: "Rangli ipak iplar"
  },
  {
    question: "Qanday qilib izonit naqshini mustahkamlash mumkin?",
    options: [
      "Qo'shimcha iplar qo'shib",
      "Naqsh ustiga elim surib",
      "Iplarni zichroq o'rab",
      "Maxsus lak bilan yopib"
    ],
    correctAnswer: "Iplarni zichroq o'rab"
  },
  {
    question: "Izonit texnikasida naqsh chizishdan oldin qaysi qadamni bajarish kerak?",
    options: [
      "Iplarni tanlash",
      "Kartonni belgilash va igna teshiklarini ochish",
      "Naqshning ranglarini tanlash",
      "Kartonni rangli qilib bo'yash"
    ],
    correctAnswer: "Kartonni belgilash va igna teshiklarini ochish"
  },
  {
    question: "Izonit texnikasida qanday naqshlar eng ko'p ishlatiladi?",
    options: [
      "Geometrik shakllar",
      "Hayvon shakllari",
      "Portretlar",
      "Abstrakt san'at"
    ],
    correctAnswer: "Geometrik shakllar"
  },
  {
    question: "Qanday qilib izonit texnikasida naqshni o'zgarishsiz saqlash mumkin?",
    options: [
      "Naqsh ustiga maxsus qoplama qo'shib",
      "Har safar yangidan naqsh yasab",
      "Naqshni ramkaga joylashtirib",
      "Naqshni shaffof plyonka bilan yopib"
    ],
    correctAnswer: "Naqshni ramkaga joylashtirib"
  },
  {
    question: "Izonit texnikasida naqshni qaysi o'lchamdagi teshiklar orqali o'rash maqsadga muvofiq?",
    options: [
      "Juda katta teshiklar",
      "Juda kichik teshiklar",
      "O'rtacha kattalikdagi teshiklar",
      "Naqshga qarab o'zgaruvchan teshiklar"
    ],
    correctAnswer: "O'rtacha kattalikdagi teshiklar"
  },
  {
    question: "Izonit texnikasida naqsh yaratishda qaysi xususiyatga e'tibor berish muhim?",
    options: [
      "Ranglarning uyg'unligi",
      "Iplarning uzunligi",
      "Teshiklarning soni",
      "Naqshning simmetriyasi"
    ],
    correctAnswer: "Ranglarning uyg'unligi"
  },
  {
    question: "Izonit texnikasida naqshning murakkabligini qanday oshirish mumkin?",
    options: [
      "Ko'p rangli iplar qo'llash orqali",
      "Iplarni qalinroq ishlatib",
      "Ko'p qatlamli naqshlar yaratib",
      "Har xil materiallarni birlashtirib"
    ],
    correctAnswer: "Ko'p qatlamli naqshlar yaratib"
  },
  {
    question: "Izonit texnikasida qanday qilib iplar to'g'ri o'rashga yordamlashadi?",
    options: [
      "Teshiklarni o'lchab joylashtirish orqali",
      "Iplarni qattiq tortib o'rash orqali",
      "Yopishqoq elim bilan mustahkamlash orqali",
      "Naqsh bo'yicha qadam-baqadam o'rash orqali"
    ],
    correctAnswer: "Naqsh bo'yicha qadam-baqadam o'rash orqali"
  },
  {
    question: "Izonit texnikasida naqshlar asosan qaysi joylarda qo'llaniladi?",
    options: [
      "Kiyim-kechaklarda",
      "Uy bezaklarida",
      "Kitob va jurnallarda",
      "Avtomobil bezaklarida"
    ],
    correctAnswer: "Uy bezaklarida"
  },
  {
    question: "Izonit texnikasida naqshni to'ldirish uchun qanday iplar ishlatiladi?",
    options: [
      "Mat iplar",
      "Qalin to'qish iplar",
      "Yaltiroq ipak iplar",
      "Barcha iplar turli naqshlarga mos keladi?"
    ],
    correctAnswer: "Yaltiroq ipak iplar"
  },
  {
    question: "Izonit texnikasida yangi boshlovchilar uchun eng qulay naqsh qaysi?",
    options: [
      "Oson va sodda geometrik naqshlar",
      "Murakkab va katta naqshlar",
      "Portret va figura naqshlari",
      "Abstrakt san'at naqshlari"
    ],
    correctAnswer: "Oson va sodda geometrik naqshlar"
  },
  {
    question: "Epoksi smola nima uchun ishlatiladi?",
    options: [
      "Yog'och mahsulotlarni bezash uchun",
      "Oziq-ovqat saqlash uchun",
      "Suv o'tkazmaydigan qoplama yaratish uchun",
      "Elektr asboblarini saqlash uchun"
    ],
    correctAnswer: "Suv o'tkazmaydigan qoplama yaratish uchun"
  },
  {
    question: "Epoksi smola bilan ishlashda qaysi asbob eng muhim?",
    options: [
      "Qaychi",
      "Aralashtiruvchi tayoqcha",
      "Mix",
      "Brushka"
    ],
    correctAnswer: "Aralashtiruvchi tayoqcha"
  },
  {
    question: "Epoksi smola qanday materiallardan iborat?",
    options: [
      "Epoksi qatroni va polimer",
      "Epoksi qatroni va qattiqlashtiruvchi",
      "Yelim va rangli bo'yoqlar",
      "Yog'och va elim"
    ],
    correctAnswer: "Epoksi qatroni va qattiqlashtiruvchi"
  },
  {
    question: "Epoksi smola qachon to'liq qotadi?",
    options: [
      "2-3 soatda",
      "12-24 soatda",
      "1 haftada",
      "30 daqiqada"
    ],
    correctAnswer: "12-24 soatda"
  },
  {
    question: "Epoksi smolani qanday qilib bir xil aralashmasiga ega bo'lish mumkin?",
    options: [
      "Faol ravishda aralashtirib",
      "Sekin aralashtirib",
      "O'zi aralashib qotguncha kutib",
      "Yelim qo'shib aralashtirib"
    ],
    correctAnswer: "Faol ravishda aralashtirib"
  },
  {
    question: "Epoksi smola qaysi sharoitda ishlatilganda yaxshiroq natija beradi?",
    options: [
      "Sovuq va quruq joyda",
      "Issiq va nam joyda",
      "Iliq va quruq joyda",
      "Quyosh nurida"
    ],
    correctAnswer: "Iliq va quruq joyda"
  },
  {
    question: "Epoksi smolani qanday qilib to'g'ri surtish mumkin?",
    options: [
      "To'g'ridan-to'g'ri quyib",
      "Brushka yoki spatula yordamida",
      "Qaychi bilan kesib surib",
      "Maxsus sprey yordamida"
    ],
    correctAnswer: "Brushka yoki spatula yordamida"
  },
  {
    question: "Epoksi smola bilan ishlashda pufakchalardan qanday qutulish mumkin?",
    options: [
      "Tezda sovutib",
      "To'g'ri aralashtirib va issiqlik manbai bilan chiqarib",
      "Qo'shimcha qatlamlar qo'shib",
      "Yuqori bosim ostida saqlab"
    ],
    correctAnswer: "To'g'ri aralashtirib va issiqlik manbai bilan chiqarib"
  },
  {
    question: "Epoksi smola qanday shaffoflik darajasiga ega bo'lishi mumkin?",
    options: [
      "Faqat yarim shaffof",
      "To'liq shaffof",
      "Faqat rangli",
      "To'liq oq"
    ],
    correctAnswer: "To'liq shaffof"
  },
  {
    question: "Epoksi smolani qaysi maqsadlar uchun ishlatish mumkin emas?",
    options: [
      "Mebelni bezash",
      "Bezak va zargarlik buyumlari",
      "San'at asarlari yaratish",
      "Uylarni qurishda"
    ],
    correctAnswer: "Uylarni qurishda"
  },
  {
    question: "Epoksi smola bilan ishlashda qaysi rang qo'shimchalari ishlatiladi?",
    options: [
      "Yog'och bo'yoqlar",
      "Rangli kukunlar yoki suyuq bo'yoqlar",
      "Suv asosidagi bo'yoqlar",
      "Mat bo'yoqlar"
    ],
    correctAnswer: "Rangli kukunlar yoki suyuq bo'yoqlar"
  },
  {
    question: "Epoksi skola ustiga qo'shimcha qatlamni qachon qo'llash kerak?",
    options: [
      "Birinchi qatlam to'liq qotganidan keyin",
      "Birinchi qatlam hali nam bo'lganida",
      "Birinchi qatlam biroz qotganida",
      "Istalgan vaqtda"
    ],
    correctAnswer: "Birinchi qatlam to'liq qotganidan keyin"
  },
  {
    question: "Epoksi smola bilan ishlashdan keyin asbob-uskunalarni qanday tozalash kerak?",
    options: [
      "Sovunli suv bilan yuvib",
      "Spirt yoki maxsus tozalovchi vositalar bilan",
      "Yelim ketkazuvchi bilan",
      "Quruq artib"
    ],
    correctAnswer: "Spirt yoki maxsus tozalovchi vositalar bilan"
  },
  {
    question: "Mehnat-bu nima?",
    options: [
      "Maqsadga yo'naltirilgan aqliy va jismoniy faoliyat.",
      "Texnologiya odam uchun kerakli va zarur faoliyat.",
      "Tabiatga ta'sir qilib undan o'ziga kerakli maqsadda foydalanish.",
      "Texnologiya moddiy ehtiyojlarini qondirish"
    ],
    correctAnswer: "Maqsadga yo'naltirilgan aqliy va jismoniy faoliyat."
  },
  {
    question: "Texnologiya darslarida mehnatga amaliy tayyorlash qanday amalga oshiriladi?",
    options: [
      "Asbob va uskunalardan foydalana bilish, materialga ishlov bera olish, xatoni o'z vaqtida aniqlash va to'g'irlay olishga o'rgatish.",
      "Texnologiya ta'limining muhim omillaridan biridir.",
      "Asbob va uskunalardan foydalana bilish.",
      "Texnologiya malaka va ko'nikmalarini shakllantirish."
    ],
    correctAnswer: "Asbob va uskunalardan foydalana bilish, materialga ishlov bera olish, xatoni o'z vaqtida aniqlash va to'g'irlay olishga o'rgatish."
  },
  {
    question: "Texnologiya fanining vazifasi.",
    options: [
      "Mehnatga axloqiy, ruhiy va amaliy tayyorlash. Texnologiyaga muhabbat ruhida, Texnologiya madaniyatini, do'stlik, birodarlik, umumlashish, jamoatchilik kabi fazilatlarni shakllantiradi.",
      "Iroda, axloqiy sifatlarni, intizomlilik, burch hissini tarbiyalab, aqliy va jismoniy o'sishiga yordam beradi.",
      "Mehnatga muhabbat ruhida, Texnologiya madaniyatini, do'stlik, birodarlik, umumlashish, jamoatchilikni shakllantiradi.",
      "Texnologiyaga axloqiy, ruhiy va amaliy tayyorlaydi."
    ],
    correctAnswer: "Mehnatga axloqiy, ruhiy va amaliy tayyorlash. Texnologiyaga muhabbat ruhida, Texnologiya madaniyatini, do'stlik, birodarlik, umumlashish, jamoatchilik kabi fazilatlarni shakllantiradi."
  },
  {
    question: "Qo'l mehnatiga o'rgatishdagi usullar.",
    options: [
      "Og bayon qilish, tushuntirish va hikoya qilish, ko'rgazmalilik, suhbat, mashqlar, amaliy ishlar, laboratoriya ishlari, mustaqil ish, ekskursiya, kitob bilan ishlash, kino (ta'limning texnik vositasi).",
      "Tushuntirish va hikoya qilish, og'zaki bayon qilish, suhbat, kitob bilan ishlash, laboratoriya ishlari, amaliy ishlar, mashqlar, ekskursiya, ta'limning texnik vositalari, mustaqil ish.",
      "Og bayon qilish, tushuntirish va hikoya qilish, instruktaj, suhbat, mashqlar, amaliy ishlar, laboratoriya ishlari, mustaqil ish, ekskursiya, kitob bilan ishlash, kino, ta'limning texnik vositasi, ko'rgazmalilik.",
      "Amaliy ishlar, laboratoriya ishlari, ta'limning texnik vositalari, og'zaki bayon qilish, mustaqil ishlar."
    ],
    correctAnswer: "Og bayon qilish, tushuntirish va hikoya qilish, instruktaj, suhbat, mashqlar, amaliy ishlar, laboratoriya ishlari, mustaqil ish, ekskursiya, kitob bilan ishlash, kino, ta'limning texnik vositasi, ko'rgazmalilik."
  },
  {
    question: "Texnologiya fani o'qituvchisining vazifasi.",
    options: [
      "O' Texnologiya malaka va ko'nikmalarini shakllantirish, kasb-hunarga qiziqtirish ishlarini amalga oshirish.",
      "O'quvchilarni jamoada ishlashga o'rgatish.",
      "O'quvchilarni kasb tanlashga o'rgatish.",
      "Amaliy Texnologiya ko'nikmalarini shakllantirish."
    ],
    correctAnswer: "O' Texnologiya malaka va ko'nikmalarini shakllantirish, kasb-hunarga qiziqtirish ishlarini amalga oshirish."
  },
  {
    question: "Texnologiya ta'limining maqsadi nima?",
    options: [
      "O'quvchilarni axloqiy, estetik, iqtisodiy-ekologik, aqliy va jismoniy rivojlantirish",
      "O'quvchilarni mustaqil hayotga tayyorlash.",
      "O'quvchilarni kasb-hunarga o'rgatish.",
      "O'quvchilarni Texnologiya bilan ishlashga o'rgatish"
    ],
    correctAnswer: "O'quvchilarni axloqiy, estetik, iqtisodiy-ekologik, aqliy va jismoniy rivojlantirish"
  },
  {
    question: "Qaychi ish stolining qaysi tomonida turishi kerak?",
    options: [
      "Ish stolining o'ng tomonida",
      "Ish stolining old tomonida",
      "Ish stolining chap tomonida",
      "Ish stolining yon tomonida"
    ],
    correctAnswer: "Ish stolining o'ng tomonida"
  },
  {
    question: "Texnologiya darslarida axloqiy tarbiyalash nima?",
    options: [
      "Ijodiy, tashabbuskorlik, tashkilotchilik qobiliyatlarini namoyish qilish.",
      "Bolalarga jamoada ishlashni o'rgatish;",
      "O'zaro do'stona yordam berishni o'rgatish;",
      "tashkilotchilik qobiliyatlarini namoyish qilish."
    ],
    correctAnswer: "Bolalarga jamoada ishlashni o'rgatish;"
  },
  {
    question: "Texnologiya darsi jarayonidagi psixologik komponentlar.",
    options: [
      "Sezib- anglash, emotsional idrok, diqqat, xotira, tafakkur.",
      "Diqqat, xotira.",
      "Fikrlash, tasavvur hosil qilish",
      "Idrok, e'tibor, eshitish."
    ],
    correctAnswer: "Sezib- anglash, emotsional idrok, diqqat, xotira, tafakkur."
  },
  {
    question: "Qog'oz qaysi mamlakatda ixtiro qilingan?",
    options: [
      "Xitoyda",
      "Yunonistonda",
      "Amerikada",
      "Yaponiyada"
    ],
    correctAnswer: "Xitoyda"
  },
  {
    question: "Boshlang'ich sinfda texnologiya darslarida qaysi ish turiga ko'p soat ajratilgan?",
    options: [
      "Qog'oz va karton bilan ishlashda",
      "Gazlama va ip turlari bilan ishlashda",
      "Plastillin va loy bilan ishlashda",
      "Turli tabiiy materiallar bilan ishlashda"
    ],
    correctAnswer: "Qog'oz va karton bilan ishlashda"
  },
  {
    question: "Plastlinning asosiy tarkibiy qismi nima?",
    options: [
      "Suv",
      "Neft mahsuloti",
      "Tuz",
      "Yog'"
    ],
    correctAnswer: "Neft mahsuloti"
  },
  {
    question: "Plastlin qanday haroratda ishlatiladi?",
    options: [
      "Sovuqda",
      "xona haroratida",
      "Yuqori haroratda",
      "Muzlatilgan holatda"
    ],
    correctAnswer: "xona haroratida"
  },
  {
    question: "Plastlin bilan ishlab bo'lgandan so'ng qo'llarni ...",
    options: [
      "Sovun bilan yuvish",
      "Yog'lash",
      "Quruq holda qoldirish",
      "Suvga botirish"
    ],
    correctAnswer: "Sovun bilan yuvish"
  },
  {
    question: "Plastilin qaysi yoshdagi bolalar uchun xavfsiz?",
    options: [
      "Faqat kattalar",
      "3 yoshdan yuqori",
      "10 yoshdan yuqori",
      "Faqat chaqaloqlar"
    ],
    correctAnswer: "3 yoshdan yuqori"
  },
  {
    question: "Plastlin bilan ishlash qaysi san'at turiga kiradi?",
    options: [
      "Rangtasvir",
      "Haykaltaroshlik",
      "Siluet",
      "Grafika"
    ],
    correctAnswer: "Haykaltaroshlik"
  },
  {
    question: "Plastlin bilan ishlashning asosiy maqsadi nima?",
    options: [
      "Ovqat tayyorlash",
      "Haykallar yaratish",
      "Ranglar bilan o'ynash",
      "Suv bilan o'ynash"
    ],
    correctAnswer: "Haykallar yaratish"
  },
  {
    question: "Plastlinning ranglari qanday olinadi?",
    options: [
      "Ranglarni aralashtirish",
      "Rasm chizish",
      "Qog'ozdan yasaladi",
      "Bo'yash"
    ],
    correctAnswer: "Ranglarni aralashtirish"
  },
  {
    question: "Plastlin bilan qaysi material yaxshi mos keladi?",
    options: [
      "Yog'och",
      "Plastmassa",
      "Kauchuk",
      "Loy"
    ],
    correctAnswer: "Loy"
  },
  {
    question: "Plastlinni qanday qattiqlashtirish mumkin?",
    options: [
      "Sovutish orqali",
      "Qizdirish orqali",
      "Suv bilan aralashtirish",
      "Tuz qo'shish"
    ],
    correctAnswer: "Sovutish orqali"
  },
  {
    question: "Plastilin bilan ishlash bolalarda qanday hususiyatlarni shakllantiradi?",
    options: [
      "Hayolotni rivojlantiradi",
      "Badanni chiniqtiradi",
      "Uyquni yaxshilaydi",
      "Ijtimoiy ko'nikmalarni oshiradi"
    ],
    correctAnswer: "Hayolotni rivojlantiradi"
  },
  {
    question: "Polietilen qanday xususiyatlari bilan ajralib turadi?",
    options: [
      "Juda qattiq va mo'rt",
      "Elastik va suzib yuruvchi",
      "O'tkazuvchan va issiqdan chidamli",
      "Suv oʻtkazmaydi va yengil"
    ],
    correctAnswer: "Suv oʻtkazmaydi va yengil"
  },
  {
    question: "Polietilenning asosiy qo'llanilish sohalari qaysilar?",
    options: [
      "Qurilish va avtomobilsozlik",
      "Oziq-ovqat o'ramlari va idishlar",
      "Elektronika va tibbiyot",
      "Metallurgiya va kimyo"
    ],
    correctAnswer: "Oziq-ovqat o'ramlari va idishlar"
  },
  {
    question: "Polietilen qaysi holatda ishlov berilmaydi?",
    options: [
      "Past haroratda",
      "Yuqori bosimda",
      "Nam muhitda",
      "Kuchli quyosh nuri ta'sirida"
    ],
    correctAnswer: "Kuchli quyosh nuri ta'sirida"
  },
  {
    question: "Rangli qog'ozdan maketlar yasashda qanday ishlar amalga oshiriladi?",
    options: [
      "Buklash, yasash, qirqish.",
      "Qog'ozni buklab yasash.",
      "Shakl berish, buklash, yelimlash.",
      "Qirqish, buklash, yelimlash."
    ],
    correctAnswer: "Qirqish, buklash, yelimlash."
  },
  {
    question: "Boshlang'ich sinflarda o'quvchilar qanday mehnat turi bilan shug'ullanadi?",
    options: [
      "Qo'l mehnati turi bilan shug'ullanadi.",
      "Texnik Texnologiya turi bilan shug'ullanadi",
      "Maishiy mehnat turi bilan shug'ullanadi",
      "Amaliy san'at bilan shug'ullanadi"
    ],
    correctAnswer: "Qo'l mehnati turi bilan shug'ullanadi."
  },
  {
    question: "Qog'ozni ketma-ket buklash usulida nimalar yasash mumkin?",
    options: [
      "Uycha, paraxod, pirpirak, qo'shqayiq, yelkanli qayiq, qushcha, samalyot, baliqcha.",
      "Baliqcha, qayiqcha, ayiqpolvon, olma",
      "Samolyot, kiyik, kitob, paraxod, pirpirak, qo'shqayiq, yelkanli qayiq, qushcha, samalyot, kuchukcha.",
      "Uycha, svetafor, samalyot, olmaxon, stul, stakan, ruchka, parovoz, baliqcha."
    ],
    correctAnswer: "Uycha, paraxod, pirpirak, qo'shqayiq, yelkanli qayiq, qushcha, samalyot, baliqcha."
  },
  {
    question: "O'qituvchi Texnologiya darsning yakuniy qismida qanday ishlarni amalga oshiradi?",
    options: [
      "Savol-javob o'tkazadi va mustahkamlaydi.",
      "O'quvchilarni dars jarayonidagi faoliyatini mustahkamlaydi va baholaydi",
      "Uyga vazifa beradi va ish joyini tozalaydi.",
      "O'quvchilarni amaliy faoliyatini baholaydi, uyga vazifa beradi."
    ],
    correctAnswer: "O'quvchilarni dars jarayonidagi faoliyatini mustahkamlaydi va baholaydi"
  },
  {
    question: "\"Bayram tabriknomasi tayyorlash\" mavzusi qaysi ish turiga kiradi?",
    options: [
      "Qog'oz va karton bilan ishlash turiga kiradi",
      "Karton va rangli qog'oz bilan ishlash turiga kiradi",
      "Applikatsiya va mozaika ishlari turiga kiradi",
      "Konstruktorlik va modellashtirish ishlar turiga kiradi"
    ],
    correctAnswer: "Applikatsiya va mozaika ishlari turiga kiradi"
  },
  {
    question: "Darsga qo'yiladigan maqsadlarini belgilang?",
    options: [
      "Ta'limiy, tarbiyaviy, rivojlartiruvchi maqsad",
      "Ta'limiy, tashkiliy, yakuniy maqsad",
      "Ta'limiy, tarbiyaviy, innovatsion maqsad",
      "Ta'limiy, tarbiyaviy, tashkiliy maqsad"
    ],
    correctAnswer: "Ta'limiy, tarbiyaviy, rivojlartiruvchi maqsad"
  },
  {
    question: "Qaychidan foydalanish talablari to'g'ri belgilangan qatorni aniqlang",
    options: [
      "Qaychini uzatganda teskarisini qilib uzat, harakatlanganingda ishlatma.",
      "Qaychini harakatlanganingda ishlatma.",
      "Qaychini o'z o'rnida ishlat",
      "O'tmas qaychidan foydalanma"
    ],
    correctAnswer: "Qaychini uzatganda teskarisini qilib uzat, harakatlanganingda ishlatma."
  },
  {
    question: "Texnologiya ta'limini rejalashtirishda nimalarga e'tibor berish kerak?",
    options: [
      "Darsni tashkil etilishiga, kirish, joriy va yakuniy qismlarida",
      "O'quv jarayonini aniq tashkil etishdan iborat bo'lishi kerak",
      "DTS talablariga, o'quv dasturiga, o'quv rejaga.",
      "Davlat ta'lim standartlariga e'tibor berish kerak."
    ],
    correctAnswer: "DTS talablariga, o'quv dasturiga, o'quv rejaga."
  },
  {
    question: "Amaliy darsning so'ngi bosqichi nima?",
    options: [
      "Ish o'rnini tartibga solish.",
      "Mustahkamlash.",
      "Savol-javob o'tkazish.",
      "O'quvchilarni baholash."
    ],
    correctAnswer: "Ish o'rnini tartibga solish."
  },
  {
    question: "Dars nima?",
    options: [
      "O'quv ishlarining asosiy shakli va metodi",
      "O'quv ishlarining bajarilish",
      "Bevosita o'qituvchining rahbarligida muayyan o'quvchilar guruhi bilan olib boriladigan ta'lim mashg'uloti",
      "O'quvchilarning mavzudagi muhim masalalarni chuqur o'rganish yuzasidan mustaqil ishlash"
    ],
    correctAnswer: "Bevosita o'qituvchining rahbarligida muayyan o'quvchilar guruhi bilan olib boriladigan ta'lim mashg'uloti"
  },
  {
    question: "Boshlang'ich sinflarda Texnologiya darslari qanday shaklda olib boriladi?",
    options: [
      "Amaliy shaklda olib boriladi",
      "Ma'ruza shaklda olib boriladi",
      "Semenar shaklda olib boriladi",
      "Aralash shaklda olib boriladi"
    ],
    correctAnswer: "Amaliy shaklda olib boriladi"
  },
  {
    question: "Texnologiya ta'limi darslarida ko'rgazmali qo'llanmalardan foydalanishning samarasi nimaga bog'liq?",
    options: [
      "Ko'rgazmali qurollarni namoyish qilish vaqtida ularning barcha o'quvchilarga yaxshi ko'rinadigan bo'lishini ta'minlash zarur, estetik jihatdan talab darajasida bo'lishi kerak.",
      "Ko'rgazmali qurollar o'quv materiali mazmunining eng muhim mazmunini aks ettirishi lozim.",
      "Ko'rgazmali qo'llanmalar o'quv materiali mazmunining eng muhim belgilarini aks ettirishi lozim, ortiqcha kuzatish ob'ektlari bo'lmasligi lozim.",
      "O'qituvchi ko'rsatayotgan narsaning o'quvchilar tomonidan idrok etilishi jarayoniga aniq rahbarlik qilishi lozim."
    ],
    correctAnswer: "Ko'rgazmali qo'llanmalar o'quv materiali mazmunining eng muhim belgilarini aks ettirishi lozim, ortiqcha kuzatish ob'ektlari bo'lmasligi lozim."
  },
  {
    question: "O'quvchilardagi qaysi fazilatlari texnologiya darslarida muhim sanaladi?",
    options: [
      "Tejamkorlik, vatanparvarlik fazilatlari.",
      "Tejamkorlik, ijodkorlik fazilatlari.",
      "Mustaqillik, irodaviylik fazilatlari.",
      "Ijodkorlik, tashkilotchilik fazilatlari."
    ],
    correctAnswer: "Ijodkorlik, tashkilotchilik fazilatlari."
  },
  {
    question: "Boshlang'ich sinf Texnologiya xonasida nimalarga amal qilish kerak?",
    options: [
      "Ish joyini to'g'ri tashkil etishga, sanitariya-gigienik talablarga rioya qilishga, texnika xavfsizligi qoidalariga amal qilishga.",
      "Ish joyini to'g'ri tashkil etishga, texnika xavfsizligi qoidalariga amal qilishga.",
      "Sanitariya-gigienik talablarga rioya qilishga va ish joyini to'g'ri tashkil etishga.",
      "Ish joyini to'g'ri tashkil etishga, sanitariya-gigienik talablarga rioya qilishga, texnika xavfsizligi qoidalariga amal qilishga, navbatchilik qilishga."
    ],
    correctAnswer: "Ish joyini to'g'ri tashkil etishga, sanitariya-gigienik talablarga rioya qilishga, texnika xavfsizligi qoidalariga amal qilishga."
  },
  {
    question: "Qog'ozdan qanday amaliy ishlar bajariladi?",
    options: [
      "Applikatsiya va mozaika ishlari va qog'ozdan maketlar yasaladi.",
      "Applikatsiya",
      "Applikatsiya va mozaika ishlari, maketlar yasash, pape-mashe ishlari bajariladi.",
      "Ko'rgazmali qurollar va maketlar yasaladi"
    ],
    correctAnswer: "Applikatsiya va mozaika ishlari, maketlar yasash, pape-mashe ishlari bajariladi."
  },
  {
    question: "Texnologiya amaliy darslarida asosan nimalarga e'tibor berish kerak?",
    options: [
      "Ish joyini tayyorlashga.",
      "Aniqlik va tozalikka rioya qilishga.",
      "Ish sifatini ta'minlovchi omillarga",
      "Ishlov berishda olingan aniqlik va tozalikka rioya qilishga."
    ],
    correctAnswer: "Ishlov berishda olingan aniqlik va tozalikka rioya qilishga."
  },
  {
    question: "Texnologiya darslarida amaliy mashg'ulotlarni bajarish uchun nimalarga e'tibor berish kerak?",
    options: [
      "Jamoa bo'lib ishlashga xavfsizligi qoidalariga",
      "Texnika xavfsizligi qoidalariga",
      "Kerakli materiallarni to'g'ri tanlashga.",
      "bolalar jamoasini to'g'ri shakllantirishga"
    ],
    correctAnswer: "Texnika xavfsizligi qoidalariga"
  },
  {
    question: "3-sinflarda Texnologiya ta'limi darsi necha soatni tashkil etadi?",
    options: [
      "32 soat",
      "33 soat",
      "34 soat",
      "24 soat"
    ],
    correctAnswer: "34 soat"
  },
  {
    question: "Somon bilan ishlash darslarida qanday ish qurollaridan foydalaniladi?",
    options: [
      "Maxsus pichoq, dazmol, igna",
      "Dazmol, yelim, qaychi",
      "Yelim, qaychi, ip va nina",
      "Maxsus pichoq, yelim, qaychi, dazmol"
    ],
    correctAnswer: "Maxsus pichoq, yelim, qaychi, dazmol"
  },
  {
    question: "Ish fartugidan qaysi ish turlarida foydalaniladi?",
    options: [
      "Turli materiallar va plastilin bilan ishlashda",
      "Qog'oz va karton bilan ishlashda",
      "Gazlama bilan ishlashda",
      "Savatcha yasashda"
    ],
    correctAnswer: "Turli materiallar va plastilin bilan ishlashda"
  },
  {
    question: "1-sinf Texnologiya darslarida texnika xavfsizligi qoidalari nechanchi soatda o'rgatiladi?",
    options: [
      "12-mavzuda o'rgatiladi.",
      "23-mavzuda o'rgatiladi.",
      "1-mavzuda o'rgatiladi.",
      "30-mavzuda o'rgatiladi."
    ],
    correctAnswer: "1-mavzuda o'rgatiladi."
  },
  {
    question: "3-sinf Texnologiya darslarida texnika xavfsizligi qoidalari nechanchi soatda o'rgatiladi?",
    options: [
      "5-mavzuda o'rgatiladi.",
      "1-mavzuda o'rgatiladi.",
      "7-mavzuda o'rgatiladi.",
      "9-mavzuda o'rgatiladi."
    ],
    correctAnswer: "1-mavzuda o'rgatiladi."
  },
  {
    question: "3-sinf Texnologiya darslarida eng ko'p soat qaysi ish turiga ajratilgan?",
    options: [
      "Applikatsiya va mozaika ish turiga",
      "Qog'oz va karton bilan ishlash turiga",
      "Tabiiy va turli materiallar bilan ishlash turiga",
      "Modellash va konstruktorlik ish turiga"
    ],
    correctAnswer: "Qog'oz va karton bilan ishlash turiga"
  },
  {
    question: "Texnologiya darslarida ninani saqlash qoidasi qaysi qatorda to'g'ri ko'rsatilgan?",
    options: [
      "Maxsus nina yostiqchada quriq holda saqlash",
      "Quriq holda saqlash",
      "Nina qutida saqlash",
      "Mato orasida saqlash"
    ],
    correctAnswer: "Maxsus nina yostiqchada quriq holda saqlash"
  },
  {
    question: "Pape-mashe ish turida qanday materiallardan foydalaniladi?",
    options: [
      "Karton, yelim, ip",
      "Yelim, qog'oz, ip",
      "Qog'oz bo'laklar, yelim, suv, vazelin",
      "Gazlama, yelim, vazilen"
    ],
    correctAnswer: "Qog'oz bo'laklar, yelim, suv, vazelin"
  },
  {
    question: "4-sinflarda Texnologiya ta'limi darsi necha soatni tashkil etadi?",
    options: [
      "16 soat",
      "34 soat",
      "38 soat",
      "40 soat"
    ],
    correctAnswer: "34 soat"
  },
  {
    question: "Shardan archa o'yinchoqlarini yasashda nimalardan foydalaniladi?",
    options: [
      "Yelim, nina, ip, mato",
      "Shar, yelim, zar",
      "Shar, yelim, qaychi, ip, nina",
      "Qog'oz, shar, yelim, turli materiallar"
    ],
    correctAnswer: "Shar, yelim, qaychi, ip, nina"
  },
  {
    question: "Svetafor maketini yasashda qanday materiallar ishlatiladi?",
    options: [
      "Karton, rangli qog'oz, qaychi, yelim, qalam, chizg'ich",
      "Turli qutilar, qog'oz, yelim, qaychi",
      "Karton, ip, nina, yelim",
      "Qaychi qog'oz, karton"
    ],
    correctAnswer: "Karton, rangli qog'oz, qaychi, yelim, qalam, chizg'ich"
  },
  {
    question: "Yumshoq o'yinchoqlar yasashda qanday materiallardan foydalaniladi?",
    options: [
      "Paxta, mato, ip",
      "Qaychi, paxta, mato",
      "Ip, mato, paxta, qaychi",
      "Mato, ip, igna, qaychi, paxta"
    ],
    correctAnswer: "Mato, ip, igna, qaychi, paxta"
  },
  {
    question: "Paraxod modelini yasashda qanday ish materiallaridan foydalaniladi?",
    options: [
      "Karton, rangli qog'oz, qaychi, yelim, ip, nina",
      "Rangli qog'oz, karton, qaychi",
      "Karton, qaychi, yelim",
      "Qaychi, yelim, ragli qog'oz, ip"
    ],
    correctAnswer: "Karton, rangli qog'oz, qaychi, yelim, ip, nina"
  },
  {
    question: "Avtomobil modelini yasashda qaychi ish materiallaridan foydalaniladi?",
    options: [
      "Rangli qog'oz, qaychi",
      "Karton, qaychi, yelim",
      "Karton, rangli qog'oz, qaychi, yelim",
      "Qaychi, yelim, ragli qog'oz, ip"
    ],
    correctAnswer: "Karton, rangli qog'oz, qaychi, yelim"
  },
  {
    question: "Plastillin qanday materiallar hisoblanadi?",
    options: [
      "Su'niy",
      "Tabiiy",
      "Ximiyaviy",
      "Su'niy va tabiiy"
    ],
    correctAnswer: "Su'niy"
  },
  {
    question: "Texnologiya ta'limi darslarida qog'ozdan stakancha yasash mashg'uloti qanday amalga oshiriladi?",
    options: [
      "Buklash orqali",
      "Qirqish orqali",
      "Qog'ozni qirqish va yelimlash orqali",
      "Yelimlash orqali"
    ],
    correctAnswer: "Buklash orqali"
  },
  {
    question: "Applikatsiya ishida qanday materiallardan foydalaniladi?",
    options: [
      "Qog'oz va karton, urug'lardan",
      "Gazlama va barglardan",
      "Rangli qog'oz, karton, gazlamalardan",
      "Turli tabiiy materiallar, turli qog'ozlar, gazlama turlaridan"
    ],
    correctAnswer: "Turli tabiiy materiallar, turli qog'ozlar, gazlama turlaridan"
  },
  {
    question: "2-sinflarda Texnologiya ta'limi darsi necha soatni tashkil etadi?",
    options: [
      "30 soat",
      "32 soat",
      "34 soat",
      "22 soat"
    ],
    correctAnswer: "32 soat"
  },
  {
    question: "Buzoqcha maketini yasashda nimalardan foydalaniladi?",
    options: [
      "Rangli qog'oz, qaychi, gazlama bo'laklari",
      "Rangli qog'oz, qaychi, yelim, qalam",
      "Qog'oz turlari, gazlama bo'laklari",
      "Qaychi, yelim, qalam, ip"
    ],
    correctAnswer: "Rangli qog'oz, qaychi, yelim, qalam"
  },
  {
    question: "4-sinf Texnologiya darslarida texnika xavfsizligi qoidalari nechanchi soatda o'rgatiladi?",
    options: [
      "1-mavzuda o'rgatiladi.",
      "22-mavzuda o'rgatiladi.",
      "25-mavzuda o'rgatiladi.",
      "14-mavzuda o'rgatiladi."
    ],
    correctAnswer: "1-mavzuda o'rgatiladi."
  },
  {
    question: "Amaliy dars jarayonida qanday yelimdan foydalanish tavsiya etiladi?",
    options: [
      "PVA yelimidan",
      "Gelli yelimdan",
      "Oddiy suyuq yelimdan",
      "Turli yelimlardan"
    ],
    correctAnswer: "PVA yelimidan"
  },
  {
    question: "Rasm ramkasini yasashda asosiy material nima?",
    options: [
      "Karton va rangli qog'oz",
      "Rangli qog'oz",
      "Karton",
      "Karton, qaychi"
    ],
    correctAnswer: "Karton va rangli qog'oz"
  },
  {
    question: "Mozaika ish turida nimalardan foydalaniladi?",
    options: [
      "Qog'oz bo'laklari",
      "Tabiiy urug'lar",
      "Tuxum po'choqlari",
      "Qog'oz bo'laklari, tabiiy urug'lar po'choqlari"
    ],
    correctAnswer: "Qog'oz bo'laklari, tabiiy urug'lar po'choqlari"
  },
  {
    question: "Yong'oq po'chog'idan plastillin yordamida qaysi hayvonni yasash mumkin?",
    options: [
      "Qurbaqa",
      "Kuchukcha",
      "Toshbaqa",
      "Ayiqcha"
    ],
    correctAnswer: "Toshbaqa"
  },
  {
    question: "Xona gullarini parvarishlashda qandan asboblardan foydalaniladi?",
    options: [
      "Suv purkagich, qaychi, ketmon",
      "Qaychi, cho'p, xaskash",
      "Suv purkagich, qaychi, latta, cho'p",
      "Latta va suv"
    ],
    correctAnswer: "Suv purkagich, qaychi, latta, cho'p"
  },
  {
    question: "Angishvonadan qaysi ish turida foydalaniladi?",
    options: [
      "Gazlama va ip turlari bilan ishlashda",
      "Applikatsiya va mozaika ish turida",
      "Qog'oz va karton bilan ishlashda",
      "Plastillin bilan ishlashda"
    ],
    correctAnswer: "Gazlama va ip turlari bilan ishlashda"
  },
  {
    question: "Texnologiya darslarida harakatlanuvchi ayiq modelini yasashda qanday materialdan foydalaniladi?",
    options: [
      "Qog'oz",
      "Gazlama",
      "Plasitlin",
      "Karton"
    ],
    correctAnswer: "Karton"
  },
  {
    question: "Kitob uchun muqova yasashda asosiy ish materiali nima hisoblanadi?",
    options: [
      "Karton qog'ozi",
      "Karton, yelim, qaychi, chizg'ich, qalam",
      "Qog'oz, qaychi",
      "Qog'oz, karton, qaychi"
    ],
    correctAnswer: "Karton, yelim, qaychi, chizg'ich, qalam"
  },
  {
    question: "Tabiiy urug'lardan nimalar yasash mumkin?",
    options: [
      "Origamilar",
      "Texnik modellar",
      "Parrandalar, uy hayvonlari, turli gullar",
      "Maketlar"
    ],
    correctAnswer: "Parrandalar, uy hayvonlari, turli gullar"
  },
  {
    question: "Yo'lsimon naqshli applikatsiya nimalardan tayyorlanadi?",
    options: [
      "Barglardan",
      "Plastillindan",
      "Qovun va tarvuz urug'idan",
      "Qog'oz bo'laklaridan"
    ],
    correctAnswer: "Qog'oz bo'laklaridan"
  },
  {
    question: "Geometrik shakllardan robotni qurish-yasashda qanday figuralardan foydalaniladi?",
    options: [
      "Doira, uchburchak, to'g'ri to'rtburchak, kvadrat",
      "Kvadrat, uchburchak, doira",
      "Uchburchak, to'g'ri to'rtburchak, kvadrat",
      "Doira, to'g'ri to'rtburchak, kvadrat"
    ],
    correctAnswer: "Doira, uchburchak, to'g'ri to'rtburchak, kvadrat"
  },
  {
    question: "Applikatsiya usulida tabriknoma yasashda nimalardan foydalaniladi?",
    options: [
      "Rangli qog'oz, karton, chizg'ich, qalam, yelim, qaychi, yelim uchun cho'tka",
      "Rangli qog'oz, yelim",
      "Karton, yelim, qaychi, yelim uchun cho'tka",
      "Qog'oz, yelim, qaychi cho'tka"
    ],
    correctAnswer: "Rangli qog'oz, karton, chizg'ich, qalam, yelim, qaychi, yelim uchun cho'tka"
  },
  {
    question: "Bisser bilan ishlashda asosiy ish qurollari nimalar?",
    options: [
      "Nina, jilka",
      "Maxsus nina, turli bisserlar",
      "Turli bisserlar",
      "Maxsus nina, ip, turli bisserlar"
    ],
    correctAnswer: "Maxsus nina, ip, turli bisserlar"
  },
  {
    question: "Paralondan texnologiya darslarida nimalar yasash mumkin?",
    options: [
      "Yumshoq o'yinchoqlar",
      "Suvinerlar",
      "Texnik modellar",
      "Applikatsiyalar"
    ],
    correctAnswer: "Yumshoq o'yinchoqlar"
  },
  {
    question: "To'qish ishida asosiy ish quroli nima?",
    options: [
      "Nina, spitsa",
      "Bigiz, kruchok",
      "Qaychi, bigiz",
      "Spetsa, ilgak (kruchok)"
    ],
    correctAnswer: "Spetsa, ilgak (kruchok)"
  },
  {
    question: "Qog'ozni buklashda nimaga ahamiyat berish kerak?",
    options: [
      "Kesishga",
      "Qirqish va chizishga",
      "To'g'ri va tekis buklashga",
      "To'g'ri buklash va kesishga"
    ],
    correctAnswer: "To'g'ri va tekis buklashga"
  },
  {
    question: "Chiqindi materiallari bilan ishlash nimaga o'rgatadi?",
    options: [
      "Tejamkorlikka",
      "Ehtiyotkorlikka",
      "To'g'ri o'lchashga",
      "Yelimlash va buklashga"
    ],
    correctAnswer: "Tejamkorlikka"
  },
  {
    question: "Badiiy kashtachilik sinfdan tashqari ishlarning qaysi turiga kiradi?",
    options: [
      "Ommaviy ishlar",
      "Ekskursiya",
      "To'garak ishlariga",
      "Turli tadbirlarga"
    ],
    correctAnswer: "To'garak ishlariga"
  },
  {
    question: "Amaliy texnologiya jarayonida qanday pichoqlardan foydalanish tavsiya etiladi?",
    options: [
      "O'tmas pichoq",
      "O'tkir pichoq",
      "Uchi yumoloq maxsus pichoq",
      "Uchi to'mtoq pichoq"
    ],
    correctAnswer: "Uchi yumoloq maxsus pichoq"
  },
  {
    question: "Qaysi ish turida haykaltaroshlik sa'nati elementlari o'rgatiladi?",
    options: [
      "Gazlama va ip turlari bilan ishlashda",
      "Applikatsiya va mozaika bilan ishlashda",
      "Plastillin va loy bilan ishlashda",
      "Konstruktorlik va modellashtirish ish turlarida"
    ],
    correctAnswer: "Plastillin va loy bilan ishlashda"
  },
  {
    question: "Baxya chokdan qaysi jarayonda foydalaniladi?",
    options: [
      "Matoni bezashda",
      "Matolarni biriktirishda va bezashda",
      "Matoni biriktirishda",
      "Matoni tikishda"
    ],
    correctAnswer: "Matolarni biriktirishda va bezashda"
  },
  {
    question: "Gazlama bilan ishlaganda qanday asboblardan foydalanilanilmaydi?",
    options: [
      "Qaychi, igna",
      "Qaychi, igna, kley",
      "O'tkir pichoq spitsa, ilgak",
      "Qaychi va ip"
    ],
    correctAnswer: "O'tkir pichoq spitsa, ilgak"
  },
  {
    question: "Plastillin va loy bilan ishlashda qaysi sa'nat elementlari o'rgatiladi?",
    options: [
      "haykaltaroshlik",
      "mozaika",
      "grafika",
      "tasviriy san'at"
    ],
    correctAnswer: "haykaltaroshlik"
  },
  {
    question: "Spitsa va kruchokdan foydalaniladigan amaliy ish turi qaysi qatorda to'g'ri ko'rsatilgan?",
    options: [
      "Bisser bilan ishlash",
      "To'qish",
      "Mozaika",
      "Ayris-folding"
    ],
    correctAnswer: "To'qish"
  },
  {
    question: "Maxsus nina, ip, turli mo'nchoqlardan foydalaniladigan amaliy ish turi?",
    options: [
      "Mozaika",
      "Ayris-folding",
      "Bisser bilan ishlash",
      "To'qish"
    ],
    correctAnswer: "Bisser bilan ishlash"
  },
  {
    question: "Texnologiya darslarida harakatlanuvchi o'yinchoqlar modelini yasashda qanday materialdan foydalaniladi?",
    options: [
      "Karton",
      "Qog'oz",
      "Gazlama",
      "Plasitlin"
    ],
    correctAnswer: "Karton"
  },
  {
    question: "Xitoyda kelib chiqqan va qog'ozni maydalab yelimlash orqali bajariladigan san'at turi qaysi qatorda berilgan?",
    options: [
      "Papye-mashye",
      "Mozaika",
      "Ayris-folding",
      "Bisser bilan ishlash"
    ],
    correctAnswer: "Papye-mashye"
  },
  {
    question: "Origami bu",
    options: [
      "Qog'ozni buklab turli shakllar yasash",
      "qog'ozni ketma-ket joylashtirish.",
      "plastlin va loy bilan ishlash",
      "nina va ip bilan ishlash"
    ],
    correctAnswer: "Qog'ozni buklab turli shakllar yasash"
  },
  {
    question: "Qog'oz qaysi tabiiy materiallardan tayyorlanadi?",
    options: [
      "Plastmassa",
      "Yog'och",
      "Metall",
      "Shisha"
    ],
    correctAnswer: "Yog'och"
  },
  {
    question: "Pilla (ipak qurti) mahsuloti nima maqsadda ishlatiladi?",
    options: [
      "Shisha tayyorlash",
      "Matolar ishlab chiqarish",
      "Plastmassa ishlab chiqarish",
      "Metall quvurlar tayyorlash"
    ],
    correctAnswer: "Matolar ishlab chiqarish"
  },
  {
    question: "Paxtadan olinadigan mahsulotlarni toping",
    options: [
      "Yopishqoq tasma",
      "Kiyim-kechak",
      "Temir buyumlar",
      "Plastik idishlar"
    ],
    correctAnswer: "Kiyim-kechak"
  },
  {
    question: "Jun qanday mahsulot tayyorlashda ishlatiladi?",
    options: [
      "Plastik ramkalar",
      "Matolar va kiyimlar",
      "Shisha buyumlar",
      "Metall idishlar"
    ],
    correctAnswer: "Matolar va kiyimlar"
  },
  {
    question: "Gilam qaysi tabiiy materialdan tayyorlanadi?",
    options: [
      "Plastik",
      "Shisha",
      "Temir",
      "Jun va ipak"
    ],
    correctAnswer: "Jun va ipak"
  },
  {
    question: "Tabiiy materiallardan ishlangan mahsulotlarni saqlashda qaysi omil muhim?",
    options: [
      "Havo aylanishi",
      "Elektr toki",
      "Yuqori bosim",
      "Ruxsatnoma"
    ],
    correctAnswer: "Havo aylanishi"
  },
  {
    question: "Tabiiy bo'yoqlar asosan qaysi manbalardan olinadi?",
    options: [
      "Metall rudalar",
      "O'simliklar va hayvonlar",
      "Plastik chiqindilar",
      "Shisha parchalar"
    ],
    correctAnswer: "O'simliklar va hayvonlar"
  },
  {
    question: "Jun mahsulotlarini qaysi usul bilan qayta ishlashadi?",
    options: [
      "Suvda eritish",
      "Tikish va to'qish",
      "Metallga qo'shish",
      "Quyma qilish"
    ],
    correctAnswer: "Tikish va to'qish"
  },
  {
    question: "Modulli origami nima?",
    options: [
      "bir nechta qog'oz bo'laklaridan (modullardan) iborat shakllar yasashning maxsus turi.",
      "bir necha qog'oz bo'laklarini ketma-ket yopishtirish yo'li bilan yasashning bir shakli",
      "qog'ozni ivitib undan mahsulotlar yaratish",
      "ma'lum qolip ustiga qog'oz bo'laklarini yopishtirib yasash shakli"
    ],
    correctAnswer: "bir nechta qog'oz bo'laklaridan (modullardan) iborat shakllar yasashning maxsus turi."
  },
  {
    question: "Bir nechta qog'oz bo'laklaridan (modullardan) iborat shakllar yasashning maxsus turi nima deb ataladi?",
    options: [
      "applikatsiya",
      "modulli origami",
      "papye-mashye",
      "ayris-folding"
    ],
    correctAnswer: "modulli origami"
  },
  {
    question: "O'quvchilar modulli origami san'ati bilan shug'ullanishlari natijasida",
    options: [
      "diqqatni jamlash va sabr-toqatni oshiradi, ijodkorlikni rivojlantiradi, matematik va geometrik bilimlari mustahkamlanadi.",
      "bolalar sabrni o'rganadilar.",
      "bolalar badiiy tasavvuri kengayadi, ijodkorlik rivojlanadi.",
      "dunyoni badiiy anglash, chamalash, o'lcham olish qobiliyatlari o'sadi"
    ],
    correctAnswer: "diqqatni jamlash va sabr-toqatni oshiradi, ijodkorlikni rivojlantiradi, matematik va geometrik bilimlari mustahkamlanadi."
  },
  {
    question: "Modulli origamining o'ziga xos xususiyati nimada?",
    options: [
      "qog'ozlarni yopishtirishda",
      "modullarni bir-biriga ulab yigʻishda",
      "qog'ozlarni kesmasdan yig'ishda",
      "qog'ozlarni buklab bajarishda"
    ],
    correctAnswer: "modullarni bir-biriga ulab yigʻishda"
  },
  {
    question: "Asosan kiyimni o'lchabko'rishga, mashina choklariga tayyorlashda, buyumlar hosil qilishda va boshqalarda detallarni vaqtincha biriktirish va mustahkamlash uchun ishlatiladigan qo'l choki turi qaysi qatorda ko'rsatilgan?",
    options: [
      "qiyq qaviq",
      "iroqisimon qaviq",
      "halqasimon qaviq",
      "to'g'ri qaviq"
    ],
    correctAnswer: "to'g'ri qaviq"
  },
  {
    question: "Ular to'g'ri, qiya, iroqisimon va qayiqsimon bo'ladi. Bu yerda nimaning turlari to'grisida fikr yuritilyapti?",
    options: [
      "origamining turlari",
      "applikatsiya turlari",
      "qo'l choklari turlari",
      "do'ppi turlari"
    ],
    correctAnswer: "qo'l choklari turlari"
  },
  {
    question: "Ikki teshikli tugmalar odatda nechta qaviq bilan tikiladi?",
    options: [
      "2-i ta qaviq bilan",
      "4-5 ta qaviq bilan",
      "10-12 ta qaviq bilan",
      "1-2 ta qaviq bilan"
    ],
    correctAnswer: "4-5 ta qaviq bilan"
  },
  {
    question: "Tugma qadashda eng birinchi qadam nima?",
    options: [
      "Tugmani joylashtirish",
      "Igna va ipni tayyorlash",
      "Tugmani teshikka joylashtirish",
      "Ipni tugish"
    ],
    correctAnswer: "Igna va ipni tayyorlash"
  },
  {
    question: "Tugma teshiklari nechta bo'lishi mumkin?",
    options: [
      "2 yoki 4",
      "1 yoki 3",
      "5 yoki 6",
      "2 yoki 6"
    ],
    correctAnswer: "2 yoki 4"
  },
  {
    question: "Tugma qadash uchun qanday ip turlari mos keladi?",
    options: [
      "Yopishqoq iplar",
      "Zig'ir yoki paxta iplar",
      "Elastik iplar",
      "Yaxshi ko'rinadigan rangli iplar."
    ],
    correctAnswer: "Zig'ir yoki paxta iplar"
  },
  {
    question: "Tugmani tikishda qanday uzunlikdagi ip ishlatiladi?",
    options: [
      "Juda qisqa",
      "Juda uzun",
      "O'rtacha uzunlik",
      "Iplarning uzunligi muhim emas"
    ],
    correctAnswer: "O'rtacha uzunlik"
  },
  {
    question: "Tugmani qanday usulda tikish tugmani mustahkam ushlashga yordam beradi?",
    options: [
      "Teshiklardan bir marta o'tkazish",
      "Teshiklardan ko'p marta o'tkazish",
      "Faqat bitta teshikdan o'tkazish",
      "Ikkita teshikni to'ldirish"
    ],
    correctAnswer: "Teshiklardan ko'p marta o'tkazish"
  },
  {
    question: "Tugma qadashda teshiklar orasidagi masofa qanday bo'lishi kerak?",
    options: [
      "Juda yaqin",
      "O'rtacha masofa",
      "Juda uzoq",
      "2-mm bo'lishi"
    ],
    correctAnswer: "2-mm bo'lishi"
  },
  {
    question: "Tugmani tikishda ip qanday holatda bo'lishi kerak?",
    options: [
      "Ip tarang bo'lishi kerak",
      "Ip bo'sh bo'lishi kerak",
      "Ip chiziqli bo'lishi kerak",
      "Ipning holati ahamiyatsiz"
    ],
    correctAnswer: "Ip tarang bo'lishi kerak"
  },
  {
    question: "Tugma qadagandan keyin ipni qanday tugish kerak?",
    options: [
      "Faqat tugmani qoldirish",
      "Iplarni kesib olish",
      "Ipni tugma ostida tugish",
      "Iplarni o'z holida qoldirish"
    ],
    correctAnswer: "Ipni tugma ostida tugish"
  },
  {
    question: "Tugma qadashda ipning oxirgi uchini qanday mustahkamlanadi?",
    options: [
      "Tugma ostida bog'lab qo'yish",
      "Kesib tashlash",
      "Iplarni bir-biriga bog'lab tashlash",
      "Ipning oxirgi uchini yashirish"
    ],
    correctAnswer: "Tugma ostida bog'lab qo'yish"
  },
  {
    question: "Tugmani tikishda igna qanday qilib olib boriladi?",
    options: [
      "Bir marta tikish kifoya",
      "Qayta-qayta tikiladi",
      "Ipni igna orqali o'tkazish kifoya",
      "Ignani faqat bir tomonga o'tkazish kerak"
    ],
    correctAnswer: "Qayta-qayta tikiladi"
  },
  {
    question: "Qanday qilib tugma tikilganidan so'ng uni mustahkamligini tekshirish mumkin?",
    options: [
      "Uni tortib ko'rish",
      "Uni qimirlatish",
      "Iplarni uzib ko'rish",
      "Qo'lda silash"
    ],
    correctAnswer: "Uni tortib ko'rish"
  },
  {
    question: "Tugma qadashda eng muhim asbob nima?",
    options: [
      "O'roq",
      "Igna",
      "Qaychi",
      "Tikiq mashinasi"
    ],
    correctAnswer: "Igna"
  },
  {
    question: "Tugmaqadashda qaysi usuldan foydalangan ma'qul?",
    options: [
      "Iroqi usuli",
      "Zanjir usuli",
      "Qaytarma usuli",
      "Qayta bog'lash usuli"
    ],
    correctAnswer: "Qaytarma usuli"
  },
  {
    question: "Tugma qadashda ipning oxirgi qismi qanday bo'lishi kerak?",
    options: [
      "tugishsiz qolishi kerak",
      "tugilgan bo'lishi kerak",
      "kesilgan bo'lishi kerak",
      "uzoq bo'lishi kerak"
    ],
    correctAnswer: "tugilgan bo'lishi kerak"
  },
  {
    question: "Urug'lardan applikatsiya qilish uchun qaysi materiallar kerak?",
    options: [
      "Faqat urug'lar",
      "Yelim va qog'oz",
      "Urug'lar, yopishtiruvchi vosita, va fon materiali",
      "Bo'yoqlar va cho'tkalar"
    ],
    correctAnswer: "Urug'lar, yopishtiruvchi vosita, va fon materiali"
  },
  {
    question: "Urug'larni applikatsiyada ishlatishdan oldin nima qilish kerak?",
    options: [
      "Ularni yuvish va quritish",
      "Ularni bo'yash",
      "Ularni maydalash",
      "Ularni ivitish"
    ],
    correctAnswer: "Ularni yuvish va quritish"
  },
  {
    question: "Qaysi urug'lar applikatsiya uchun eng mos hisoblanadi?",
    options: [
      "Katta urug'lar",
      "Rangi yorqin urug'lar",
      "Faqat qora urug'lar",
      "Yopishqoq urug'lar"
    ],
    correctAnswer: "Rangi yorqin urug'lar"
  },
  {
    question: "Applikatsiya jarayonida fon materiali sifatida qaysi biri ishlatiladi?",
    options: [
      "Plastik",
      "Karton yoki mato",
      "Metall plastinka",
      "Shisha"
    ],
    correctAnswer: "Karton yoki mato"
  },
  {
    question: "Urug'larni qanday tartibda joylashtirish kerak?",
    options: [
      "Beparvo tarqatish",
      "Oldindan rejalashtirilgan dizayn bo'yicha",
      "Random tarzda joylashtirish",
      "Urug'larni bir-biriga yopishtirish"
    ],
    correctAnswer: "Oldindan rejalashtirilgan dizayn bo'yicha"
  },
  {
    question: "Qaysi yelim turi qaysi biri applikatsiya uchun eng yaxshi?",
    options: [
      "Suvli yopishtiruvchi",
      "PVA yopishtiruvchi",
      "Moment yopishtiruvchi",
      "Qog'oz yopishtiruvchi"
    ],
    correctAnswer: "PVA yopishtiruvchi"
  },
  {
    question: "Applikatsiyada rang uyg'unligini ta'minlash uchun nima qilish kerak?",
    options: [
      "Faqat bir xil rangli urug'lar ishlatish",
      "Turli rangli urug'larni aralashtirish",
      "Rangli bo'yoqlar ishlatish",
      "Hech qanday e'tibor bermaslik"
    ],
    correctAnswer: "Turli rangli urug'larni aralashtirish"
  },
  {
    question: "Applikatsiyada urug'lar qanday vositalar yordamida joylashtiriladi?",
    options: [
      "Qo'llar",
      "Pichoq va qaychi",
      "Pinset va cho'tka",
      "Qalam va ruchka"
    ],
    correctAnswer: "Pinset va cho'tka"
  },
  {
    question: "Urug'lar bilan applikatsiya jarayoni bajarib bo'lingandan so'ng qanday bosqich bajariladi?",
    options: [
      "Quritish va muhrlash",
      "Bo'yash",
      "Tashlash",
      "Yuvish"
    ],
    correctAnswer: "Quritish va muhrlash"
  },
  {
    question: "Urug'lar applikatsiyasini mustahkam qilish uchun qanday vosita kerak?",
    options: [
      "Yelim",
      "Lak",
      "Sprey bo'yoq",
      "Sham"
    ],
    correctAnswer: "Lak"
  },
  {
    question: "Urug'lar qanday qilib turli shakllarga keltiriladi?",
    options: [
      "Qirqish yoki sindirish",
      "Eriitish",
      "Qayta ishlash",
      "Bosim ostida qoldirish"
    ],
    correctAnswer: "Qirqish yoki sindirish"
  },
  {
    question: "Applikatsiya jarayonida qanday holatlar ishning samarasiz, sifatsiz chiqishiga sabab bo'ladi?",
    options: [
      "Urug'larni tekis joylashtirish",
      "Juda ko'p yopishtiruvchi ishlatish",
      "Rang uyg'unligiga e'tibor berish",
      "Rangli bo'yoqlar ishlatish"
    ],
    correctAnswer: "Juda ko'p yopishtiruvchi ishlatish"
  },
  {
    question: "Urug'lar appliqatsiyasi qaysi uslubda tayyorlanishi mumkin?",
    options: [
      "Minimalistik, abstrakt, realistik",
      "To'g'ri va qiyshiq",
      "Rangli va rangsiz",
      "simmetrik va assimmetrik"
    ],
    correctAnswer: "Minimalistik, abstrakt, realistik"
  },
  {
    question: "Bisser bilan ishlashda qaysi asboblar eng kerakli hisoblanadi?",
    options: [
      "Qaychi va pichoq",
      "Igna va ip",
      "Yelim va cho'tka",
      "Pinset va pensen"
    ],
    correctAnswer: "Igna va ip"
  },
  {
    question: "Bisser bilan ishlashda qaysi ip turi ko'proq ishlatiladi?",
    options: [
      "Paxta ipi",
      "Neylon ip",
      "Yopishqoq ip",
      "Matkap ipi"
    ],
    correctAnswer: "Neylon ip"
  },
  {
    question: "Bisserni naqshga joylashtirishda eng ko'p qaysi usul qo'llaniladi?",
    options: [
      "Tikuvchilik",
      "To'quv",
      "Yopishtirish",
      "Qo'lda tikish"
    ],
    correctAnswer: "To'quv"
  },
  {
    question: "Bisser naqshlarini yaratishda qaysi qadam birinchi bo'lishi kerak?",
    options: [
      "Ranglarni tanlash",
      "Bisserlarni joylashtirish",
      "Dizayn yaratish",
      "Ipni tayyorlash"
    ],
    correctAnswer: "Dizayn yaratish"
  },
  {
    question: "Bisser naqshlarida rang uyg'unligini ta'minlash uchun nima muhim?",
    options: [
      "Bitta rang ishlatish",
      "Kontrast ranglardan foydalanish",
      "Faqat yorqin ranglarni ishlatish",
      "Ranglarni bir xil darajada ishlatish"
    ],
    correctAnswer: "Kontrast ranglardan foydalanish"
  },
  {
    question: "Bisserdan qanday turdagi buyumlar yaratilmaydi?",
    options: [
      "Zargarlik buyumlari",
      "Sumkalar",
      "Uy bezaklari",
      "Qoshiqlar"
    ],
    correctAnswer: "Qoshiqlar"
  },
  {
    question: "Bisser naqshlarini mustahkam qilish uchun qaysi usul ishlatiladi?",
    options: [
      "Yopishtirish",
      "Lak bilan qoplash",
      "Dubling ishlatish",
      "Qo'shimcha ip bilan mustahkamlash"
    ],
    correctAnswer: "Qo'shimcha ip bilan mustahkamlash"
  },
  {
    question: "Bisser naqshlarida qaysi igna turi ishlatiladi?",
    options: [
      "Oddiy tikuv ignasi",
      "Katta teshikli igna",
      "Nozik igna",
      "Qurilish ignasi"
    ],
    correctAnswer: "Nozik igna"
  },
  {
    question: "Bisser bilan ishlashda ipni qaysi uzunlikda kesish tavsiya etiladi?",
    options: [
      "Juda uzun ip",
      "Juda qisqa ip",
      "O'rtacha uzunlikdagi ip",
      "juda qalin iplar"
    ],
    correctAnswer: "O'rtacha uzunlikdagi ip"
  },
  {
    question: "Qaysi texnika bisser naqshlarini yanada chiroyli koʻrsatadi?",
    options: [
      "Tekis tikuv",
      "Spiral tikuv",
      "To'g'ri tikuv",
      "Simmetrik tikuv"
    ],
    correctAnswer: "Spiral tikuv"
  },
  {
    question: "Bisser bilan ishlashda naqshning to'g'ri chiqmasligiga nima sabab bo'ladi?",
    options: [
      "Faqat bisser sifatiga e'tibor berish kerak",
      "Igna va ipning to'g'ri tanlanishi",
      "Faqat to'g'ri naqsh ishlatish",
      "bisserlarning shakli va razmeri har-xil bo'lishi"
    ],
    correctAnswer: "bisserlarning shakli va razmeri har-xil bo'lishi"
  },
  {
    question: "Bisser naqshlarini yakunlashda qanday qadam oxirgi bo'ladi?",
    options: [
      "Iplarni bog'lash va yashirish",
      "Bisserlarni bo'yash",
      "Naqshni quritish",
      "Naqshni ramkaga joylashtirish"
    ],
    correctAnswer: "Iplarni bog'lash va yashirish"
  },
  {
    question: "Bisser bilan ishlaganda uning mustaxkamligini ta'minlovchi jarayon qaysi?",
    options: [
      "Iplarni bog'lash va yashirish",
      "Bisserlarni bo'yash",
      "Naqshni quritish",
      "Naqshni ramkaga joylashtirish"
    ],
    correctAnswer: "Iplarni bog'lash va yashirish"
  },
  {
    question: "To'qishning qaysi turi an'anaviy ravishda qalin materiallardan tayyorlanadi?",
    options: [
      "Makrame",
      "Amigurumi",
      "Fillet to'qish",
      "An'anaviy to'qish"
    ],
    correctAnswer: "Makrame"
  },
  {
    question: "Amigurumi to'qishda eng ko'p foydalaniladigan texnika qaysi?",
    options: [
      "Aralash iplar",
      "Spiral to'qish",
      "Kvadrat shakllar",
      "Gullar"
    ],
    correctAnswer: "Spiral to'qish"
  },
  {
    question: "Jun iplar qaysi amaliy san'at turida eng ko'p ishlatiladi?",
    options: [
      "to'qishda",
      "tikishda",
      "zardo'zlikda",
      "do'ppido'zlikda"
    ],
    correctAnswer: "to'qishda"
  },
  {
    question: "Qanday ishlarni amalga oshirganimizda to'qilgan mahsulot mustahkam bo'ladi?",
    options: [
      "Tugunlarni mustahkamlash orqali",
      "Qo'shimcha iplar qo'shish orqali",
      "Har bir satrni qayta to'qish orqali",
      "toq'ishni boshlashda mustahkamlab olinadi"
    ],
    correctAnswer: "Tugunlarni mustahkamlash orqali"
  },
  {
    question: "Qulaylik va mahsulot o'lchami uchun nima muhim?",
    options: [
      "to'qish ignalarining uzunligi",
      "naqshlarning to'g'ri tanlanishi",
      "o'lchov olishni bilish",
      "iplarning o'lchami"
    ],
    correctAnswer: "to'qish ignalarining uzunligi"
  },
  {
    question: "Bisser bilan ishlashda nimadan foydalaniladi?",
    options: [
      "Maxsus ignadan",
      "Qalin ipdan",
      "To'qish kancasidan",
      "Har hil o'lchamli iplardan"
    ],
    correctAnswer: "Maxsus ignadan"
  },
  {
    question: "Bisser bilan naqsh yaratishda nimaga e'tibor beriladi?",
    options: [
      "Rang va shakl tanlashga",
      "Bisserning turiga",
      "naqsh turiga",
      "Bisser rangiga"
    ],
    correctAnswer: "Rang va shakl tanlashga"
  },
  {
    question: "Bisser naqshlari bilan asosan qaysi materiallarda ishlanadi ?",
    options: [
      "Qog'ozda",
      "Shisha buyumlarga",
      "Yog'och mahsulotlarda",
      "Matoda"
    ],
    correctAnswer: "Matoda"
  },
  {
    question: "Bisser naqshlari nima bila mustahkamlanadi?",
    options: [
      "Tugmalar bilan mustahkamlash orqali",
      "Maxsus yelimlar yordamida",
      "Qo'shimcha bisser bilan",
      "Qo'shimcha iplar bilan"
    ],
    correctAnswer: "Qo'shimcha iplar bilan"
  },
  {
    question: "Bisser bilan ishlashda bisserlarning o'lchamiga qarab nimani aniqlash mumkin?",
    options: [
      "Naqsh o'lchamini",
      "Naqsh narxini",
      "Naqsh shaklini",
      "Naqsh elementlarini"
    ],
    correctAnswer: "Naqsh o'lchamini"
  },
  {
    question: "Bisserlarni to'gri tanlashda nima muhim ahamiyatga ega?",
    options: [
      "Iplar",
      "Yasaladigan buyum",
      "Qo'shimcha aksessuarlar",
      "Rang va o'lchami"
    ],
    correctAnswer: "Rang va o'lchami"
  },
  {
    question: "Bisser naqshlarida eng ko'p qo'llaniladigan tikuv turi berilgan qatorni toping",
    options: [
      "Kvadrat tikuv",
      "Aralash tikuv",
      "Vertikal tikuv",
      "Gorizontal tikuv"
    ],
    correctAnswer: "Kvadrat tikuv"
  },
  {
    question: "Bisserlarni ishlatib bo'lgandan so'ng qayerga qo'yish tavsiya qilinadi?",
    options: [
      "Maxsus qutilarga solish",
      "Sumkada saqlash",
      "Plastmassa qoplarga solib",
      "Stol ostida saqlanadi"
    ],
    correctAnswer: "Maxsus qutilarga solish"
  },
  {
    question: "To'qish va bisserni qaysi mahsulotlarda birlashtirish mumkin?",
    options: [
      "shimlarda",
      "ofis buyumlarida",
      "kiyimlar va xo'jalik buyumlarida",
      "yotoqxona buyumlarida"
    ],
    correctAnswer: "kiyimlar va xo'jalik buyumlarida"
  },
  {
    question: "To'qish va bisser naqshlarini birlashtirish jarayoni qanday amalga oshiriladi?",
    options: [
      "Iplarni va bisserlarni moslashtirish orqali",
      "Har xil materiallarni ishlatib",
      "Qo'shimcha naqshlar qo'shish orqali",
      "Qo'shimcha aksessuarlar qo'shish orqali"
    ],
    correctAnswer: "Iplarni va bisserlarni moslashtirish orqali"
  },
  {
    question: "Sharf va bilaguzuklarda qaysi amaliy san'at turlarini bir vaqtni o'zida birlashtirib foydalanish mumkin?",
    options: [
      "To'qish va bisser",
      "Bisser va tikish",
      "Kesish va tikish",
      "Kashta va tikish"
    ],
    correctAnswer: "To'qish va bisser"
  },
  {
    question: "To'qish bilan ishlashda qanday maxsus asboblar kerak?",
    options: [
      "Ip, spitsa, bisser",
      "Ip va bisser qutilari",
      "Ip, kruchok, spitsa",
      "Ip, qaychi, bisser"
    ],
    correctAnswer: "Ip, kruchok, spitsa"
  },
  {
    question: "Qanday qilib to'qish va bisser naqshlarining sifatli bo'lishi nimaga bog'liq?",
    options: [
      "Yangi texnikalarni qo'llashga",
      "Sifatli materiallardan foydalanishga",
      "Ko'proq vaqt ajratishga",
      "Materiallarni to'g'ri tanlashga"
    ],
    correctAnswer: "Sifatli materiallardan foydalanishga"
  },
  {
    question: "To'qish va bisser bilan ishlashda ranglar qanday tanlanadi?",
    options: [
      "Ranglar tanlanmaydi",
      "Monoton ranglar",
      "Faqat yorqin ranglar",
      "O'zaro mos va kontrast ranglar"
    ],
    correctAnswer: "O'zaro mos va kontrast ranglar"
  },
  {
    question: "To'qish va bisser bilan ishlashda qachon ishni yakunlasnadi?",
    options: [
      "Qachon tugatilishi axamiyatli emas",
      "Yarim yo'lda to'xtatilganda",
      "Qo'shimcha bezaklar qo'shilganda",
      "Naqsh to'liq bajarilganda"
    ],
    correctAnswer: "Naqsh to'liq bajarilganda"
  },
  {
    question: "To'qish va bisser mahsulotlarini qanday sharoitda saqlash kerak?",
    options: [
      "Quruq va issiq joyda",
      "Nam va iliq joyda",
      "Yopiq qutilarga solib",
      "Salqin va qorong'u joyda"
    ],
    correctAnswer: "Salqin va qorong'u joyda"
  },
  {
    question: "Odatda tugmalar matoga qanday biriktiriladi?",
    options: [
      "Yelim bilan yopishtirib",
      "Bisserlar bilan",
      "Maxsus kliplar yordamida",
      "Ip va igna orqali"
    ],
    correctAnswer: "Ip va igna orqali"
  },
  {
    question: "Odatda tugma uchun ipni qanday tanlanadi?",
    options: [
      "Tugmaning rangiga qarab",
      "Tugmaning o'lchamiga qarab",
      "Matoning turiga qarab",
      "Rang tanlanmaydi"
    ],
    correctAnswer: "Matoning turiga qarab"
  },
  {
    question: "Tugmalarni mustahkam biriktirish uchun qanday jarayon amalga oshiriladi?",
    options: [
      "Qo'shimcha iplar bilan mustahkamlash orqali",
      "Tugmalarni qalin iplar bilan tikish orqali",
      "Faqat maxsus tikuv mashinalaridan foydalanib",
      "Yelimlash orqali"
    ],
    correctAnswer: "Tugmalarni qalin iplar bilan tikish orqali"
  },
  {
    question: "Kiyimga tugmalarni qanday joylashtiriladi?",
    options: [
      "Matoning holatiga qarab",
      "Ko'z bilan hisoblab joylashtirib",
      "Matoni burab joylashtirib",
      "O'lchov lenta bilan belgilab"
    ],
    correctAnswer: "O'lchov lenta bilan belgilab"
  },
  {
    question: "Tugma qadashda qaysi tikuv turi ko'proq ishlatiladi?",
    options: [
      "Zigzag tikuv",
      "To'g'ri tikuv",
      "Tugma tikish uchun maxsus tikuv",
      "Tikuv mashinasidagi tikuv"
    ],
    correctAnswer: "Tugma tikish uchun maxsus tikuv"
  },
  {
    question: "Tugmalar matodan qanday olib tashlanadi?",
    options: [
      "Qaychi bilan kesib olish orqali",
      "Tikish ignasi yordamida iplarni bo'shatib",
      "Qayta tikib olib tashlash orqali",
      "Sindirib olinadi"
    ],
    correctAnswer: "Tikish ignasi yordamida iplarni bo'shatib"
  },
  {
    question: "Eng chiqamli tugma turi qaysi materialdan ishlangan bo'ladi?",
    options: [
      "Yog'och",
      "Plastik",
      "Ip",
      "Metall"
    ],
    correctAnswer: "Metall"
  },
  {
    question: "Yuvish jarayonida tugmalar shikastlanmasligi uchun nima qilish kerak?",
    options: [
      "Ularni yuvishdan oldin olib tashlash orqali",
      "Yuviladigan kiyimlarni maxsus qoplarga solib",
      "Juda qattiq bosimda yuvib",
      "Past haroratda yuvib"
    ],
    correctAnswer: "Yuviladigan kiyimlarni maxsus qoplarga solib"
  },
  {
    question: "Karton yoki mato applikatsiyada qanday vazifani bajaradi?",
    options: [
      "Yelimlash vazifasini",
      "Fon vazifasini",
      "Siluet vazifasini",
      "Pardoz vazifasini"
    ],
    correctAnswer: "Fon vazifasini"
  },
  {
    question: "Mozaika qaysi san'at turiga kiradi?",
    options: [
      "Haykaltaroshlik",
      "Monumental dekoratsiya",
      "Grafika",
      "O'ymakorlik"
    ],
    correctAnswer: "Monumental dekoratsiya"
  },
  {
    question: "Naqsh shemasi qaysi san'at turi uchun o'ta muhim hisoblanadi?",
    options: [
      "Dekupaj",
      "Ayris-folding",
      "Epoksi smolasi",
      "Grafika"
    ],
    correctAnswer: "Ayris-folding"
  },
  {
    question: "Oldindan belgilangan naqshlarni teshib, rangli ipak iplar bilan ishlanadigan texnika bu-...",
    options: [
      "Ayris- folding",
      "Izonit",
      "Dekupaj",
      "Epoksi smola"
    ],
    correctAnswer: "Izonit"
  },
  {
    question: "Kashtachilik san'atining eng muhim jihati nimada?",
    options: [
      "Ranglar uyg'unligi",
      "Matoni to'g'ri tanlanishi",
      "Naqshning hajmli bo'lishi",
      "Iplarning to'g'ri tanlanishi"
    ],
    correctAnswer: "Ranglar uyg'unligi"
  },
  {
    question: "Mozaika san'at turida ...",
    options: [
      "ranglar uyg'unlashtiriladi",
      "turli materiallarning turlicha shakllaridan yaxlit naqsh xosil qilinadi",
      "qog'ozni kesmasdan buklash orqali shakllar hosil qilinadi",
      "ingichka tasmalarni o'rab yaxlit shakllar hosil qilinadi"
    ],
    correctAnswer: "turli materiallarning turlicha shakllaridan yaxlit naqsh xosil qilinadi"
  },
  {
    question: "Duradgor qanday vazifani amalga oshiradi?",
    options: [
      "metal buyumlarga ishlov berdi",
      "uy qurish bilan shug'ullanadi",
      "yog'ochga ishlov beradi",
      "daraxtlarga ishlov beradi"
    ],
    correctAnswer: "yog'ochga ishlov beradi"
  },
  {
    question: "Yuzani tozalash va silliqlash jarayonlari bilan boshlanadigan texnika bu ...",
    options: [
      "mozaika",
      "dekupaj",
      "ganchkorlik",
      "do'ppido'zlik"
    ],
    correctAnswer: "dekupaj"
  },
  {
    question: "Rangli bo'laklardan surat yig'ish texnikasi bu",
    options: [
      "mozaika",
      "dekupaj",
      "ganchkorlik",
      "do'ppido'zlik"
    ],
    correctAnswer: "mozaika"
  },
  {
    question: "Gips yoki loydan bezakli shakllar yaratish texnikasi",
    options: [
      "mozaika",
      "dekupaj",
      "ganchkorlik",
      "do'ppido'zlik"
    ],
    correctAnswer: "ganchkorlik"
  },
  {
    question: "Matoga naqsh tikish ishlari bilan bog'liq texnika bu...",
    options: [
      "mozaika",
      "dekupaj",
      "ganchkorlik",
      "do'ppido'zlik"
    ],
    correctAnswer: "do'ppido'zlik"
  },
  {
    question: "Qog'oz yoki salfetka rasmlarini buyumga yopishtirish texnikasi",
    options: [
      "mozaika",
      "dekupaj",
      "ganchkorlik",
      "do'ppido'zlik"
    ],
    correctAnswer: "dekupaj"
  },
  {
    question: "Mayda keramika yoki shisha bo'laklari bilan ishlanadigan texnika bu...",
    options: [
      "mozaika",
      "dekupaj",
      "ganchkorlik",
      "do'ppido'zlik"
    ],
    correctAnswer: "mozaika"
  },
  {
    question: "Qog'oz bilan ishlanadigan texnika bu...",
    options: [
      "mozaika",
      "dekupaj",
      "ganchkorlik",
      "do'ppido'zlik"
    ],
    correctAnswer: "dekupaj"
  },
  {
    question: "Loydan geometrik yoki o'simliksimon naqshlar ishlanadigan texnika bu",
    options: [
      "mozaika",
      "dekupaj",
      "ganchkorlik",
      "do'ppido'zlik"
    ],
    correctAnswer: "ganchkorlik"
  },
  {
    question: "Ipak va matolardan ishlangan bosh kiyim bezagi texnikasi ...",
    options: [
      "mozaika",
      "dekupaj",
      "ganchkorlik",
      "do'ppido'zlik"
    ],
    correctAnswer: "do'ppido'zlik"
  },
  {
    question: "Mozaika texnikasida ishlatiladigan asosiy material",
    options: [
      "mayda bo'laklar (shisha, keramika)",
      "bo'yoq",
      "ip",
      "salfetka"
    ],
    correctAnswer: "mayda bo'laklar (shisha, keramika)"
  },
  {
    question: "Dekupaj texnikasida ishlatiladigan asosiy vosita",
    options: [
      "bo'yoq",
      "qog'oz yoki salfetka",
      "ip",
      "yog'och"
    ],
    correctAnswer: "qog'oz yoki salfetka"
  },
  {
    question: "Ganchkorlikka oid ishlarda nima ishlatiladi?",
    options: [
      "shisha bo'laklar",
      "salfetka",
      "gips yoki loy",
      "mato"
    ],
    correctAnswer: "gips yoki loy"
  },
  {
    question: "Do'ppido'zlikda naqshlar qanday hosil qilinadi?",
    options: [
      "yopishtirish orqali",
      "bo'yash orqali",
      "gips bilan",
      "tikish orqali"
    ],
    correctAnswer: "tikish orqali"
  },
  {
    question: "Qaysi texnikada \"lak bilan qoplash\" oxirgi bosqich hisoblanadi?",
    options: [
      "mozaika",
      "dekupaj",
      "ganchkorlik",
      "do'ppido'zlik"
    ],
    correctAnswer: "dekupaj"
  },
  {
    question: "Mozaikada mayda bo'laklar nima bilan biriktiriladi?",
    options: [
      "maxsus yopishtiruvchi (yoki sement)",
      "igna-ip",
      "lak",
      "gips"
    ],
    correctAnswer: "maxsus yopishtiruvchi (yoki sement)"
  },
  {
    question: "Dekupaj texnikasi qaysi ishlar uchun qo'llanadi?",
    options: [
      "shisha kesish",
      "bezakli buyumlar yaratish",
      "naqsh tikish",
      "loy shakllar yasash"
    ],
    correctAnswer: "bezakli buyumlar yaratish"
  },
  {
    question: "Ganchkorlikning milliy namunasi qayerda keng tarqalgan?",
    options: [
      "Xitoyda",
      "Yaponiyada",
      "O'zbekistonda",
      "Rossiyada"
    ],
    correctAnswer: "O'zbekistonda"
  },
  {
    question: "Do'ppi bezaklarida ishlatiladigan elementlar",
    options: [
      "ganch",
      "salfetka",
      "shisha",
      "ip, atlas"
    ],
    correctAnswer: "ip, atlas"
  },
  {
    question: "Qaysi texnikada ish \"silliqlash→ yopishtirish→ laklash\" tartibida bo'ladi?",
    options: [
      "mozaika",
      "dekupaj",
      "ganchkorlik",
      "do'ppido'zlik"
    ],
    correctAnswer: "dekupaj"
  },
  {
    question: "Qaysi texnika qurilish va bezak san'atida keng qo'llaniladi?",
    options: [
      "dekupaj",
      "do'ppido'zlik",
      "ganchkorlik",
      "tikuvchilik"
    ],
    correctAnswer: "ganchkorlik"
  },
  {
    question: "Qog'ozni burab, qatlamlar hosil qilish texnikasi bu",
    options: [
      "Ayris-folding",
      "Dekupaj",
      "Mozaika",
      "Ganchkorlik"
    ],
    correctAnswer: "Ayris-folding"
  },
  {
    question: "Ayris-folding texnikasida ishlatiladigan asosiy material bu...",
    options: [
      "Qog'oz",
      "Gips",
      "Yog'och",
      "Matolar"
    ],
    correctAnswer: "Qog'oz"
  },
  {
    question: "Ayris folding texnikasi orqali nima yaratiladi?",
    options: [
      "Spiral yoki geometrik naqshli kompozitsiyalar",
      "Shisha mozaikalar",
      "Tikilgan naqshlar",
      "Bo'yalgan suratlar"
    ],
    correctAnswer: "Spiral yoki geometrik naqshli kompozitsiyalar"
  },
  {
    question: "Ayris folding usuli qayerda paydo boʻlgan deb taxmin qilinadi?",
    options: [
      "Gollandiya",
      "Yaponiya",
      "Xitoy",
      "Hindiston"
    ],
    correctAnswer: "Gollandiya"
  },
  {
    question: "Qaysi texnikada qog'ozlar ketma-ketlikda joylashtiriladi?",
    options: [
      "Ayris folding",
      "Dekupaj",
      "Ganchkorlik",
      "Tikuv"
    ],
    correctAnswer: "Ayris folding"
  },
  {
    question: "Ayris folding texnikasida qanday vositalar ishlatiladi?",
    options: [
      "Rangli qog'oz, yelim, pichoq yoki qaychi",
      "Bo'yoq, cho'tka, rasm daftar",
      "Matolar, igna, ip",
      "Gips, spatula, qum"
    ],
    correctAnswer: "Rangli qog'oz, yelim, pichoq yoki qaychi"
  },
  {
    question: "Qog'ozni qatlaydi, markaz tomon joylashtiradi - bu qaysi texnika?",
    options: [
      "Ayris folding",
      "Dekupaj",
      "Mozaika",
      "Ganchkorlik"
    ],
    correctAnswer: "Ayris folding"
  },
  {
    question: "Ayris folding texnikasi ko'proq nima uchun ishlatiladi?",
    options: [
      "Sovg'a bezaklari yaratish",
      "Devorni ganch bilan bezash",
      "Tikuv mashqlarida",
      "Yog'ochdan haykaltaroshlikda"
    ],
    correctAnswer: "Sovg'a bezaklari yaratish"
  },
  {
    question: "Qog'oz san'atining turlari qaysilar?",
    options: [
      "Origami, Ayris folding, Dekupaj",
      "Ganchkorlik, haykaltaroshlik, rassomlik",
      "Tikuvchilik, silliqlash, yelimlash",
      "Yog'och o'ymakorligi, sopolchilik, metallga ishlov"
    ],
    correctAnswer: "Origami, Ayris folding, Dekupaj"
  },
  {
    question: "Ayris folding texnikasining asosiy elementi nima?",
    options: [
      "Spiral markaz atrofida joylashgan qog'oz bo'laklari",
      "Har xil iplar bilan tikilgan naqshlar",
      "Bo'yalgan naqshlar",
      "Yelimlangan shisha bo'laklar"
    ],
    correctAnswer: "Spiral markaz atrofida joylashgan qog'oz bo'laklari"
  },
  {
    question: "Qog'oz san'atida geometrik naqshlar qanday hosil qilinadi?",
    options: [
      "Turli burchak ostida joylashtirish orqali",
      "O'ymakorlik bilan",
      "Suvga solish orqali",
      "Matoni burish orqali"
    ],
    correctAnswer: "Turli burchak ostida joylashtirish orqali"
  },
  {
    question: "Qog'oz san'atining eng keng tarqalgan turi bu",
    options: [
      "Origami",
      "Ganchkorlik",
      "Mozaika",
      "Metallga ishlov berish"
    ],
    correctAnswer: "Origami"
  },
  {
    question: "Ayris folding ishini boshlashda avval nima qilinadi?",
    options: [
      "Shablon chiziladi yoki olinadi",
      "Yelim surtiladi",
      "Rasm bo'yaladi",
      "Ip tikiladi"
    ],
    correctAnswer: "Shablon chiziladi yoki olinadi"
  },
  {
    question: "Ayris foldingda naqsh qanday tuziladi?",
    options: [
      "Rangli qatlamlar ketma-ket markazga qarab joylashtiriladi",
      "Shisha bo'laklar yopishtiriladi",
      "Naqsh ip bilan tikiladi",
      "Gips quyiladi"
    ],
    correctAnswer: "Rangli qatlamlar ketma-ket markazga qarab joylashtiriladi"
  },
  {
    question: "Qog'oz san'atining dekorativ turlaridan biri bu ...",
    options: [
      "Ayris folding",
      "Ganchkorlik",
      "Yog'och o'ymakorligi",
      "Rassomlik"
    ],
    correctAnswer: "Ayris folding"
  },
  {
    question: "Ayris folding texnikasida qanday shakllar ko'p qo'llaniladi?",
    options: [
      "Aylana, yurak, yulduz, kvadrat",
      "Hayvonlar haykali",
      "Qadimiy naqshlar",
      "Realist rasm chizish"
    ],
    correctAnswer: "Aylana, yurak, yulduz, kvadrat"
  },
  {
    question: "Ayris folding texnikasida qatlamlar qanday bo'ladi?",
    options: [
      "Tartibli va muvozanatli",
      "Qalin va notekis",
      "Burama va to'qilgan",
      "Silliqlangan va oʻyilgan"
    ],
    correctAnswer: "Tartibli va muvozanatli"
  },
  {
    question: "Qog'oz san'atining dekorativ maqsadga xizmat qiluvchi turi ...",
    options: [
      "Ayris folding",
      "Origami (faqat shakl yasash uchun)",
      "Metall oʻyish",
      "Haykaltaroshlik"
    ],
    correctAnswer: "Ayris folding"
  },
  {
    question: "Origami san'ati deganda nima tushuniladi?",
    options: [
      "Qog'ozni buklash orqali shakl yasash san'ati",
      "Qog'ozga rasm chizish",
      "Qog'ozdan haykallar yasash",
      "Qog'ozni yoqish orqali bezak qilish"
    ],
    correctAnswer: "Qog'ozni buklash orqali shakl yasash san'ati"
  },
  {
    question: "Papye-mashe texnikasi qanday materialdan tayyorlanadi?",
    options: [
      "Matodan",
      "Qog'oz va yopishtiruvchi aralashmasidan",
      "Plastmassa",
      "Shisha bo'laklaridan"
    ],
    correctAnswer: "Qog'oz va yopishtiruvchi aralashmasidan"
  },
  {
    question: "Origami qayerda paydo boʻlgan?",
    options: [
      "Yaponiya",
      "Xitoy",
      "Hindiston",
      "Misr"
    ],
    correctAnswer: "Xitoy"
  },
  {
    question: "Dekupaj texnikasida eng muhim element nima?",
    options: [
      "Qog'ozdan kesilgan naqshlar",
      "Gipsdan quyma detallar",
      "Tikilgan naqshlar",
      "O'yilgan yog'och"
    ],
    correctAnswer: "Qog'ozdan kesilgan naqshlar"
  },
  {
    question: "Papye-mashe tayyorlashda birinchi bosqich nima?",
    options: [
      "Qog'ozni mayda bo'laklarga ajratish",
      "Naqsh chizish",
      "Bo'yoq tanlash",
      "Ipni tayyorlash"
    ],
    correctAnswer: "Qog'ozni mayda bo'laklarga ajratish"
  },
  {
    question: "Origamida buyumlar qanday usul bilan yaratiladi?",
    options: [
      "Qog'ozni burish va buklash",
      "Yelim bilan yopishtirish",
      "Ip bilan tikish",
      "Gips bilan quyish"
    ],
    correctAnswer: "Qog'ozni burish va buklash"
  },
  {
    question: "Ayris foldingda geometrik shakllar qanday hosil qilinadi?",
    options: [
      "Raqamlangan shablon asosida qatlamli joylash",
      "Ip bilan tikish",
      "Qo'lda chizish",
      "Bo'yoq bilan bezash"
    ],
    correctAnswer: "Raqamlangan shablon asosida qatlamli joylash"
  },
  {
    question: "Dekupaj qaysi buyumlarni bezashda qo'llaniladi?",
    options: [
      "Yog'och qutilar, idishlar, mebel",
      "Yostiqlar",
      "Poyabzallar",
      "Oshxona qurollari"
    ],
    correctAnswer: "Yog'och qutilar, idishlar, mebel"
  },
  {
    question: "Papye-mashe texnikasi asosan nima uchun ishlatiladi?",
    options: [
      "Hajmli buyumlar va niqoblar yasash",
      "Kiyim tikish",
      "Rasm chizish",
      "Yog'och o'ymakorligi"
    ],
    correctAnswer: "Hajmli buyumlar va niqoblar yasash"
  },
  {
    question: "Qog'oz san'ati bolalarda nimani rivojlantiradi?",
    options: [
      "Mayda motorika va tafakkurni",
      "Eshitish qobiliyatini",
      "Sport qobiliyatini",
      "Texnika bilimini"
    ],
    correctAnswer: "Mayda motorika va tafakkurni"
  },
  {
    question: "Ayris folding texnikasida markaz qanday bo'ladi?",
    options: [
      "Spiral yoki naqsh markazi",
      "Katlamli chuqurcha",
      "Gipsli boʻlak",
      "Bo'yoqli sirt"
    ],
    correctAnswer: "Katlamli chuqurcha"
  },
  {
    question: "Origamida qush yasash uchun kerakli narsa nima?",
    options: [
      "Kvadrat shakldagi qog'oz",
      "Gipsli qolip",
      "Paxta va ip",
      "Bo'yoq va cho'tka"
    ],
    correctAnswer: "Kvadrat shakldagi qog'oz"
  },
  {
    question: "Dekupaj texnikasida ishning oxirgi bosqichi nima?",
    options: [
      "Lak bilan qoplash",
      "Gips quyish",
      "Rasm chizish",
      "Qog'ozni yoqish"
    ],
    correctAnswer: "Lak bilan qoplash"
  },
  {
    question: "Qaysi texnikada qog'oz bo'laklar elim bilan biriktiriladi?",
    options: [
      "Papye-mashe",
      "Origami",
      "Haykaltaroshlik",
      "Ganchkorlik"
    ],
    correctAnswer: "Papye-mashe"
  },
  {
    question: "Qog'oz san'atida spiral uslubdagi ishlanmalar qaysi texnika orqali tayyorlanadi?",
    options: [
      "Ayris folding",
      "Dekupaj",
      "Quilling",
      "Tikuv"
    ],
    correctAnswer: "Quilling"
  },
  {
    question: "Papyer-mashe texnikasida yuzaga qanday material surtiladi?",
    options: [
      "Qog'oz va yelim aralashmasi",
      "Lak",
      "Gips",
      "Suv"
    ],
    correctAnswer: "Qog'oz va yelim aralashmasi"
  },
  {
    question: "Origami qanday shakllarni yasashda qo'llaniladi?",
    options: [
      "Hayvonlar, gullar, buyumlar",
      "Yog'och detallar",
      "Gips figurkalar",
      "Naqshli matolar"
    ],
    correctAnswer: "Hayvonlar, gullar, buyumlar"
  },
  {
    question: "Ayris foldingda ishlatiladigan qog'ozlar qanday bo'lishi kerak?",
    options: [
      "Ingichka, rangli, egiluvchan",
      "Qalin va qora",
      "Yelimlangan",
      "Silliq plastik"
    ],
    correctAnswer: "Ingichka, rangli, egiluvchan"
  },
  {
    question: "Dekupaj san'atining asosi nimaga quriladi?",
    options: [
      "Yelim bilan qog'oz yopishtirish",
      "Tikish",
      "Gips bilan ishlash",
      "Chizish"
    ],
    correctAnswer: "Yelim bilan qog'oz yopishtirish"
  },
  {
    question: "Qog'oz san'atining murakkab, hajmli turlaridan biri bu ...",
    options: [
      "Papye-mashe",
      "Dekupaj",
      "Kvilling",
      "Ganchkorlik"
    ],
    correctAnswer: "Papye-mashe"
  },
  {
    question: "Origami so'zining ma'nosi nima?",
    options: [
      "Ori - buklash, gami san'at",
      "Ori - yelim, gami - shakl",
      "Ori - qog'oz, gami - yondirish",
      "Ori-rang, gami - chizish"
    ],
    correctAnswer: "Ori - buklash, gami san'at"
  },
  {
    question: "Ayris folding texnikasida shablon nima uchun kerak?",
    options: [
      "Qog'oz qatlamlarini to'g'ri joylashtirish uchun",
      "Bo'yoq tanlash uchun",
      "Ip o'lchash uchun",
      "Gips quyish uchun"
    ],
    correctAnswer: "Qog'oz qatlamlarini to'g'ri joylashtirish uchun"
  },
  {
    question: "Dekupajda ishlatiladigan salfetkalar qanday bo'lishi kerak?",
    options: [
      "Rangli, nozik, naqshli",
      "Qalin, oq, cho'miladigan",
      "Ipakli, ogʻir",
      "Suvga chidamli"
    ],
    correctAnswer: "Rangli, nozik, naqshli"
  },
  {
    question: "Papyer-mashe texnikasida qog'oz bo'laklari nima bilan aralashtiriladi?",
    options: [
      "Yelim va suv",
      "Gips va bo'yoq",
      "Neft",
      "Choy"
    ],
    correctAnswer: "Yelim va suv"
  },
  {
    question: "Origami texnikasida yelim ishlatiladimi?",
    options: [
      "Yo'q",
      "Ha",
      "Faqat oxirida",
      "Faqat asosda"
    ],
    correctAnswer: "Yo'q"
  },
  {
    question: "Ayris folding texnikasi qaysi ishga mos?",
    options: [
      "Sovg'a qutisi bezash",
      "Tikuv mashinasi tuzatish",
      "Idish yuvish",
      "Qattiq gips quyish"
    ],
    correctAnswer: "Sovg'a qutisi bezash"
  },
  {
    question: "Dekupaj texnikasini boshlashdan oldin nima qilinadi?",
    options: [
      "Yuzani tozalash va silliqlash",
      "Bo'yash",
      "Qog'ozni yirtish",
      "Suv quyish"
    ],
    correctAnswer: "Yuzani tozalash va silliqlash"
  },
  {
    question: "Qaysi texnika hajmli niqoblar yasashga mos?",
    options: [
      "Papye-mashe",
      "Origami",
      "Dekupaj",
      "Ayris folding"
    ],
    correctAnswer: "Papye-mashe"
  },
  {
    question: "Qaysi texnikada iplar, igna, mato kerak bo'lmaydi?",
    options: [
      "Origami",
      "Do'ppido'zlik",
      "Tikuv",
      "Kashtachilik"
    ],
    correctAnswer: "Origami"
  },
  {
    question: "Ayris foldingda naqshlar qanday joylashtiriladi?",
    options: [
      "Spiral asosida qatlamli",
      "Gorizontal iplar bilan",
      "Matoga tikilgan",
      "Silliqlangan gipsli"
    ],
    correctAnswer: "Spiral asosida qatlamli"
  },
  {
    question: "Dekupaj qanday buyumlarda chiroyli ko'rinadi?",
    options: [
      "Yog'och qutilar, ko'zoynak futlyarlari",
      "Oyna, gilam",
      "Tikilgan kiyim",
      "Gips haykallar"
    ],
    correctAnswer: "Yog'och qutilar, ko'zoynak futlyarlari"
  },
  {
    question: "Papye-mashe tayyorlashda material qurigach nima qilinadi?",
    options: [
      "Bo'yaladi",
      "Yelimlanadi",
      "Yanchiladi",
      "Yuviladi"
    ],
    correctAnswer: "Bo'yaladi"
  },
  {
    question: "Origami texnikasida yasalgan buyumlarni qanday saqlash kerak?",
    options: [
      "Quritilgan, buklanmagan holda",
      "Nam holda",
      "Yelimlangan",
      "Qattiq yopilgan"
    ],
    correctAnswer: "Quritilgan, buklanmagan holda"
  },
  {
    question: "Qog'oz san'ati turlariga misol bo'la oladigan texnika:",
    options: [
      "Ayris folding",
      "O'yma yog'och",
      "Tikuv",
      "Haykaltaroshlik"
    ],
    correctAnswer: "Ayris folding"
  },
  {
    question: "Dekupajda naqshni silliq yopishtirish uchun nima kerak?",
    options: [
      "Maxsus cho'tka yoki karton",
      "Qo'l bilan bosish",
      "Qalam bilan chizish",
      "Rasm bo'yash"
    ],
    correctAnswer: "Maxsus cho'tka yoki karton"
  },
  {
    question: "Papye-mashe materialini ishlatishda nima muhim?",
    options: [
      "Quritish va mustahkamlash",
      "Yelimdan qochish",
      "Faol burish",
      "Qaynab turgan suv"
    ],
    correctAnswer: "Quritish va mustahkamlash"
  },
  {
    question: "Origamida murakkab shakllar nima deb ataladi?",
    options: [
      "Modular origami",
      "Spiral origami",
      "Ko'p qatlamli qog'oz",
      "Yelimli shakl"
    ],
    correctAnswer: "Modular origami"
  },
  {
    question: "Ayris folding ishlari odatda nimaga joylanadi?",
    options: [
      "Karton asosga",
      "Matoga",
      "Plastmassa listga",
      "Shishaga"
    ],
    correctAnswer: "Karton asosga"
  },
  {
    question: "Qog'oz san'atining eng soddasi va o'quvchilar uchun mos turi:",
    options: [
      "Origami",
      "Papyer-mashe",
      "Yog'och oʻymakorligi",
      "Metallga ishlov"
    ],
    correctAnswer: "Origami"
  },
  {
    question: "Dekupaj texnikasining yakuniy ko'rinishini chiroyli qilish uchun nima zarur?",
    options: [
      "Lak bilan yopish",
      "Gips quyish",
      "Naqsh tikish",
      "Burab qo'yish"
    ],
    correctAnswer: "Lak bilan yopish"
  }
];


// ===== GLOBAL O'ZGARUVCHILAR =====
const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('nextBtn');
const summaryResultsSpan = document.getElementById('summaryResults');
const resultModal = document.getElementById('resultModal');
const continueBtn = document.getElementById('continueBtn');

let shuffledAllQuestions = [];
let currentQuestionIndex = 0;
let totalAttempts = 0;
let correctCount = 0;
let questionAnsweredThisTurn = false;

// 20 ta savollik blok uchun
let blockCorrectCount = 0;
let blockTotalCount = 0;
let blockStartIndex = 0;

// ===== YORDAMCHI FUNKSIYALAR =====
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateResults() {
    let percentage = 0;
    if (totalAttempts > 0) {
        percentage = (correctCount / totalAttempts) * 100;
    }
    summaryResultsSpan.textContent = `Urinish: ${totalAttempts}, To'g'ri: ${correctCount}, Foiz: ${percentage.toFixed(0)}%`;
}

function loadQuestion() {
    quizContainer.innerHTML = '';
    questionAnsweredThisTurn = false;
    nextButton.disabled = true;

    if (shuffledAllQuestions.length === 0) {
        shuffledAllQuestions = [...questionsData];
        shuffleArray(shuffledAllQuestions);
        currentQuestionIndex = 0;
    }

    if (currentQuestionIndex >= shuffledAllQuestions.length) {
        currentQuestionIndex = 0;
        shuffleArray(shuffledAllQuestions);
    }

    const q = shuffledAllQuestions[currentQuestionIndex];
    const questionBlock = document.createElement('div');
    questionBlock.classList.add('question-block');

    const questionText = document.createElement('p');
    questionText.classList.add('question-text');
    questionText.textContent = `${totalAttempts + 1}. ${q.question}`;
    questionBlock.appendChild(questionText);

    const optionsList = document.createElement('ul');
    optionsList.classList.add('options-list');

    const shuffledOptions = [...q.options];
    shuffleArray(shuffledOptions);

    shuffledOptions.forEach((option, optionIndex) => {
        const listItem = document.createElement('li');
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'question';
        radioInput.value = option;
        radioInput.id = `q-option${optionIndex}`;

        const label = document.createElement('label');
        label.htmlFor = `q-option${optionIndex}`;
        label.textContent = option;

        radioInput.addEventListener('change', (event) => {
            if (questionAnsweredThisTurn) return;

            const selectedValue = event.target.value;
            const allLabels = questionBlock.querySelectorAll('label');
            
            totalAttempts++;
            blockTotalCount++;

            if (selectedValue === q.correctAnswer) {
                // To'g'ri javob
                label.classList.add('selected-correct');
                correctCount++;
                blockCorrectCount++;

                let feedbackDiv = questionBlock.querySelector('.feedback');
                if (feedbackDiv) feedbackDiv.remove();
                
                feedbackDiv = document.createElement('div');
                feedbackDiv.classList.add('feedback', 'correct');
                feedbackDiv.textContent = 'To\'g\'ri!';
                questionBlock.appendChild(feedbackDiv);
            } else {
                // Noto'g'ri javob
                label.classList.add('selected-wrong');
                
                // To'g'ri javobni ko'rsatish
                allLabels.forEach(lbl => {
                    const radio = document.getElementById(lbl.htmlFor);
                    if (radio && radio.value === q.correctAnswer) {
                        lbl.classList.add('show-correct');
                    }
                });

                let feedbackDiv = questionBlock.querySelector('.feedback');
                if (feedbackDiv) feedbackDiv.remove();
                
                feedbackDiv = document.createElement('div');
                feedbackDiv.classList.add('feedback', 'incorrect');
                feedbackDiv.textContent = `Noto\'g\'ri. To'g'ri javob: "${q.correctAnswer}"`;
                questionBlock.appendChild(feedbackDiv);
            }

            updateResults();

            const radioButtons = questionBlock.querySelectorAll('input[type="radio"]');
            radioButtons.forEach(radio => {
                radio.disabled = true;
            });

            questionAnsweredThisTurn = true;
            nextButton.disabled = false;
        });

        listItem.appendChild(radioInput);
        listItem.appendChild(label);
        optionsList.appendChild(listItem);
    });

    questionBlock.appendChild(optionsList);
    quizContainer.appendChild(questionBlock);
}

function showResultModal() {
    const modalCorrect = document.getElementById('modalCorrect');
    const modalWrong = document.getElementById('modalWrong');
    const modalPercent = document.getElementById('modalPercent');
    const modalVerdict = document.getElementById('modalVerdict');
    const modalIcon = document.querySelector('.modal-icon');

    const wrongCount = blockTotalCount - blockCorrectCount;
    const percentage = blockTotalCount > 0 ? (blockCorrectCount / blockTotalCount) * 100 : 0;

    modalCorrect.textContent = blockCorrectCount;
    modalWrong.textContent = wrongCount;
    modalPercent.textContent = percentage.toFixed(0) + '%';

    // Baholash (70% o'tish bali)
    if (percentage >= 70) {
        modalVerdict.textContent = '🎉 Tabriklaymiz! Siz imtihondan muvaffaqiyatli o\'tdingiz!';
        modalVerdict.className = 'modal-verdict pass';
        modalIcon.textContent = '🎉';
    } else {
        modalVerdict.textContent = '😔 Afsuski, siz imtihondan o\'ta olmadingiz. Yana harakat qiling!';
        modalVerdict.className = 'modal-verdict fail';
        modalIcon.textContent = '😔';
    }

    resultModal.style.display = 'block';
}

function handleNextQuestion() {
    currentQuestionIndex++;
    
    // Har 20 ta savoldan keyin modal ko'rsatish
    if (blockTotalCount > 0 && blockTotalCount % 20 === 0) {
        showResultModal();
        return;
    }

    loadQuestion();
}

// ===== HODISA TINGLOVCHILAR =====
nextButton.addEventListener('click', handleNextQuestion);

continueBtn.addEventListener('click', () => {
    resultModal.style.display = 'none';
    
    // Blok statistikasini tiklash
    blockCorrectCount = 0;
    blockTotalCount = 0;
    blockStartIndex = currentQuestionIndex;
    
    // Yangi savol yuklash
    loadQuestion();
});

// ===== LOGIN TIZIMI =====
window.addEventListener('DOMContentLoaded', function() {
    const isAuthenticated = localStorage.getItem(AUTH_KEY);
    
    if (isAuthenticated === 'true') {
        document.getElementById('loginScreen').classList.add('hidden');
        document.body.classList.remove('login-active');
        startTimer();
        updateResults();
        loadQuestion();
    } else {
        document.body.classList.add('login-active');
        document.getElementById('loginScreen').style.display = 'flex';
    }
});

document.getElementById('loginBtn').addEventListener('click', function() {
    checkCredentials();
});

document.getElementById('password').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkCredentials();
    }
});

document.getElementById('username').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('password').focus();
    }
});

function checkCredentials() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const loginBtn = document.getElementById('loginBtn');
    const btnText = document.getElementById('btnText');

    if (!username || !password) {
        errorMessage.textContent = '⚠️ Iltimos, barcha maydonlarni to\'ldiring!';
        errorMessage.classList.add('show');
        return;
    }

    loginBtn.disabled = true;
    btnText.innerHTML = 'Tekshirilmoqda<span class="loading"></span>';
    errorMessage.classList.remove('show');

    setTimeout(() => {
        if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
            localStorage.setItem(AUTH_KEY, 'true');
            errorMessage.classList.remove('show');
            
            btnText.textContent = '✓ Muvaffaqiyatli!';
            loginBtn.style.background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
            
            setTimeout(() => {
                showMainContent();
            }, 500);
        } else {
            errorMessage.textContent = '❌ Login yoki parol noto\'g\'ri!';
            errorMessage.classList.add('show');
            loginBtn.disabled = false;
            btnText.textContent = 'Kirish';
            
            document.getElementById('password').value = '';
            document.getElementById('password').focus();
        }
    }, 500);
}

function showMainContent() {
    const loginScreen = document.getElementById('loginScreen');
    
    loginScreen.style.animation = 'fadeOut 0.5s ease-out';
    
    setTimeout(() => {
        loginScreen.classList.add('hidden');
        document.body.classList.remove('login-active');
        startTimer();
        updateResults();
        loadQuestion();
    }, 500);
}

function logout() {
    if (confirm('Rostdan ham tizimdan chiqmoqchimisiz?')) {
        localStorage.removeItem(AUTH_KEY);
        location.reload();
    }
}

console.log('%c💡 Tizimdan chiqish uchun:', 'color: blue; font-size: 14px; font-weight: bold;');
console.log('%clogout()', 'color: green; font-size: 12px; background: #f0f0f0; padding: 5px;');

// ===== TAYMER =====
let startTime;
let timerInterval;

function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsedTime = Date.now() - startTime;
    const totalSeconds = Math.floor(elapsedTime / 1000);
    
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = 
        String(minutes).padStart(2, '0') + ':' + 
        String(seconds).padStart(2, '0');

    document.getElementById('timer').textContent = formattedTime;
}