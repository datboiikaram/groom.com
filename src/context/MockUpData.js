import zeyad1 from "../grooms-assets/zeyad/zeyadGroom1.webp";
import zeyad2 from "../grooms-assets/zeyad/zeyadGroom2.webp";
import zeyad3 from "../grooms-assets/zeyad/zeyadGroom3.webp";
import zeyad4 from "../grooms-assets/zeyad/zeyadGroom4.webp";

export const MockUpData = [
  {
    name: "زياد كرم إبراهيم",
    images: [zeyad1, zeyad2, zeyad3, zeyad4],
    id: 0,
    features: ["عربية", "مهندس"],
    tags: "عريس جديد",
    place: "مدينة السادات",
    content:
      "شاب لسه في اول حياتو مستني مصدر دخل عشان يتجوز ، بيروح الجيم (بس ميبانش عليه) ، بيحب يسافر (بس مش لمنوف) ، ناوي ان شاء الله يستقر مادياً بس اما تفرج ويشتغل كده",
    testimonials: [
      {
        relation: "أمه",
        gender: "female",
        stars: 5,

        opinion:
          "زاياد قلبه كبير ودمه خفيف، بس بياخد وقت يلبس أكتر من العروسة نفسها!",
      },
      {
        relation: "أخته",

        gender: "female",
        stars: 4.5,

        opinion: "عنده ذوق رهيب، بس بيغير رأيه في الثانية الأخيرة!",
      },
      {
        relation: "خاله",
        gender: "male",
        stars: 5,

        opinion: "لو دخل في مود الهزار، البيت كله يتحول لبرنامج كوميدي.",
      },
      {
        relation: "ابن عمته",
        gender: "male",
        stars: 4.5,
        opinion: "لو شرب شاي من غير سكر، بيكتب عنه بوست في فيسبوك!",
      },
    ],
    filters: [
      "تحت ٢٥",

      "عنده شغل",
      "عنده شعر",
      "طويل",

      "ملتزم",
      "عنده عربية",

      "رياضي",
      "مبرمج",

      "ظروفو علي قدو",
    ],
    price: 310,
    discount: 25,
    height: 187,

    age: 20,
    hasHouse: true,
    hasHouseNote: "عنده شقة",
    readyToMarryNote: "جاهز بس مش ماديًا",
    readyToMarry: true,

    hasBeard: false,
    isMarried: false,
    romantic: true,
    reviews: 4.5,
    ratings: [
      {
        stars: 5,
        number: 45,
      },
      {
        stars: 4,
        number: 12,
      },
      {
        stars: 3,
        number: 5,
      },
      {
        stars: 2,
        number: 3,
      },
      {
        stars: 1,
        number: 2,
      },
    ],
  },
  {
    name: "عبدالرحمن ياسر جمعة",
    images: [
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
    ],
    id: 1,
    features: ["عربية", "محاسب"],
    tags: "عريس جديد",
    place: "مدينة السادات",
    content:
      "عبدالرحمن هو العريس اللي بيسيب انطباع هادي، بس جواه مولد وأراجوز مستني الفرصة يطلع.",
    testimonials: [
      {
        relation: "أمه",
        gender: "female",
        stars: 5,
        opinion:
          "عبدالرحمن ده بوصلة البيت... بس لازم تتكلمي معاه مرتين عشان يسمعك مرة!",
      },
      {
        relation: "أخوه",
        gender: "male",
        stars: 3.5,
        opinion: "شكله دايمًا مركز، بس في الحقيقة بيفكر هو أكل إيه امبارح.",
      },
      {
        relation: "خالته",
        gender: "female",
        stars: 4,
        opinion: "بيسكت كتير، بس لما يتكلم بيقول نكتة محتاجة ترجمة!",
      },
      {
        relation: "صاحبه",
        gender: "male",
        stars: 5,
        opinion: "لو قعد على القهوة، بينسى عنده فرح أصلاً.",
      },
    ],
    filters: [
      "تحت ٢٥",

      "عنده شغل",
      "عنده شعر",
      "طويل",

      "ملتزم",
      "عنده عربية",
      "بيطبخ",

      "رياضي",
      "مبرمج",

      "ظروفو علي قدو",
    ],
    price: 200,
    discount: 10,
    height: 185,

    age: 19,
    hasHouse: true,
    hasHouseNote: "عنده شقة",
    readyToMarryNote: "جاهز بس مش ماديًا",
    readyToMarry: true,
    hasBeard: false,
    isMarried: false,
    romantic: true,
    reviews: 4.5,
    ratings: [
      {
        stars: 5,
        number: 27,
      },
      {
        stars: 4,
        number: 12,
      },
      {
        stars: 3,
        number: 5,
      },
      {
        stars: 2,
        number: 6,
      },
      {
        stars: 1,
        number: 2,
      },
    ],
  },
  {
    name: "حسام محمد عمر",
    images: [
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
    ],
    id: 2,
    features: ["مبرمج", "ملتزم", "مستقر ماديًا", "بيقبض بالدولار"],
    tags: "عرض خااص",
    place: "القاهرة",
    content:
      "حسام عمر هو العريس اللي هتعيشي معاه حياة مليانة مشاهد حماسية... بس النهاية دايمًا سعيدة.",
    testimonials: [
      {
        relation: "أمه",
        gender: "female",
        stars: 5,
        opinion: "حسام بيساعد الكل، بس لما يطلب حاجة بيطلبها كأنه بيقترحها!",
      },
      {
        relation: "أخته",
        gender: "female",
        stars: 5,
        opinion: "لو لقيتيه سرحان، غالبًا بيفكر لو نسي الموبايل في التلاجة.",
      },
      {
        relation: "خاله",
        gender: "male",
        stars: 4.5,
        opinion: "يعرف يضحكك من غير ما يقول ولا كلمة.",
      },
      {
        relation: "ابن خالته",
        gender: "male",
        stars: 3.5,
        opinion: "لما بيتوتر بيبدأ يضحك عشوائي!",
      },
    ],
    filters: [
      "٢٥ - ٣٠",
      "عنده شغل",
      "عنده شعر",
      "طويل",
      "ملتحي",
      "ملتزم",

      "رياضي",
      "مبرمج",
      "جاهز من بكرة",
    ],
    price: 520,
    discount: 0,
    height: 187,
    age: 26,
    hasHouse: true,
    hasHouseNote: "عنده شقة",
    readyToMarryNote: "جاهز ",
    readyToMarry: true,
    hasBeard: true,
    isMarried: false,
    romantic: false,
    reviews: 4.5,
    ratings: [
      {
        stars: 5,
        number: 25,
      },
      {
        stars: 4,
        number: 10,
      },
      {
        stars: 3,
        number: 5,
      },
      {
        stars: 2,
        number: 3,
      },
      {
        stars: 1,
        number: 2,
      },
    ],
  },
  {
    name: "  حسام محمد جابر",
    images: [
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
    ],
    id: 3,
    features: ["جدع", "رياضي"],
    tags: "",
    place: "مدينة السادات",
    content:
      "حسام محمد هو اللي لما يقولك حاضر، فعلاً بيقصدها... بس ممكن يفكر فيها شويّة الأول.",
    testimonials: [
      {
        relation: "أمه",
        gender: "female",
        stars: 5,
        opinion: "هو سند وضهر... بس لو نسي حاجة، هيقولك: ماقولتليش!",
      },
      {
        relation: "أخوه",
        gender: "male",
        stars: 4.5,
        opinion: "شكله هادي، بس دماغه بتجري سباق في الخلفية!",
      },
      {
        relation: "عمته",
        gender: "female",
        stars: 4,
        opinion:
          "بياخد كل حاجة على محمل الجد... حتى لما تسأليه عن لون الكوباية.",
      },
      {
        relation: "صاحبه",
        gender: "male",
        stars: 5,
        opinion: "ينفع يتجوز، بس بشرط يكون فيه زرار إعادة تشغيل عند الزعل.",
      },
    ],
    filters: [
      "٢٥ - ٣٠",
      "عنده شغل",
      "عنده شعر",

      "ملتحي",

      "رياضي",

      "ظروفو علي قدو",
    ],
    price: 320,
    discount: 0,
    height: 175,
    age: 27,
    hasHouse: false,
    hasHouseNote: "بيدور علي مكان",
    readyToMarryNote: "جاهز بس مش ماديًا",
    readyToMarry: false,
    hasBeard: true,
    isMarried: false,
    romantic: true,
    reviews: 4.5,
    ratings: [
      {
        stars: 5,
        number: 35,
      },
      {
        stars: 4,
        number: 15,
      },
      {
        stars: 3,
        number: 5,
      },
      {
        stars: 2,
        number: 6,
      },
      {
        stars: 1,
        number: 2,
      },
    ],
  },
  {
    name: "  احمد ناجي",
    images: [
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
    ],
    id: 4,
    features: ["مبرمج", "مستقر ماديًا", "محامي"],
    tags: "عرض خااص",
    place: "القاهرة",
    content:
      "أحمد ناجي هو العريس المخطط لكل حاجة... حتى النكتة اللي هيقولها بعد الفرح.",
    testimonials: [
      {
        relation: "أمه",
        gender: "female",
        stars: 5,
        opinion: "احمد ابن حلال، بس ساعات بينسى يحط المفاتيح في جيبه!",
      },
      {
        relation: "أخوه",
        gender: "male",
        stars: 4.5,
        opinion: "هو دايمًا معاك، بس ممكن يتأخر وهو جاي من الأوضة!",
      },
      {
        relation: "خالته",
        gender: "female",
        stars: 3.5,
        opinion: "عنده رزانة، بس في دماغه سكتشات!",
      },
      {
        relation: "صاحبه",
        gender: "male",
        stars: 5,
        opinion: "لو دخل سوبرماركت، ممكن ينسى يشتري الحاجة اللي رايح لها!",
      },
    ],
    filters: [
      "٢٥ - ٣٠",
      "عنده شغل",
      "عنده شعر",

      "رياضي",
      "مبرمج",
      "جاهز من بكرة",
    ],
    price: 520,
    discount: 0,
    height: 177,
    age: 28,
    hasHouse: true,
    hasHouseNote: "عنده شقة",
    readyToMarryNote: "جاهز ",
    readyToMarry: true,
    hasBeard: false,
    isMarried: false,
    romantic: true,
    reviews: 4.5,
    ratings: [
      {
        stars: 5,
        number: 30,
      },
      {
        stars: 4,
        number: 20,
      },
      {
        stars: 3,
        number: 5,
      },
      {
        stars: 2,
        number: 6,
      },
      {
        stars: 1,
        number: 2,
      },
    ],
  },
  {
    name: "  محمد مدحت",
    images: [
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
    ],
    id: 5,
    features: ["محاسب", "ملتزم", " متجوز"],
    tags: "خبرة",
    place: "مدينة السادات",
    content:
      "محمد مدحت هو العريس اللي ممكن يقعد جنبك بالساعات... بس يكون بيحاور نفسه في صمت.",
    testimonials: [
      {
        relation: "أمه",
        gender: "female",
        stars: 5,
        opinion: "مدحت ملاك، بس بيتحول لكائن فضائي لو الجرس رن وهو نايم.",
      },
      {
        relation: "أخته",
        gender: "female",
        stars: 3.5,
        opinion: "بيحب القعدة، بس لما بيقوم... بيتوه في السكة للصالون!",
      },
      {
        relation: "خاله",
        gender: "male",
        stars: 4.5,
        opinion: "بيتفلسف في أبسط الحاجات... زي ليه الكرسي ليه أربع رجلين!",
      },
      {
        relation: "صاحبه",
        gender: "male",
        stars: 5,
        opinion: "لو شرب بيبسي، يحكي عنه كأنه تجربة روحانية!",
      },
    ],
    filters: [
      "٢٥ - ٣٠",
      "عنده شغل",
      "عنده شعر",
      "طويل",
      "ملتحي",
      "ملتزم",

      "بيطبخ",
      "بيكتب شعر",

      "جاهز من بكرة",

      "متجوز اصلا",
    ],
    price: 600,
    discount: 20,
    height: 185,
    age: 27,
    hasHouse: true,
    hasHouseNote: "عنده شقة",
    readyToMarryNote: "مش جاهز",
    readyToMarry: false,
    hasBeard: true,
    isMarried: true,
    romantic: true,
    reviews: 4.5,
    ratings: [
      {
        stars: 5,
        number: 40,
      },
      {
        stars: 4,
        number: 15,
      },
      {
        stars: 3,
        number: 5,
      },
      {
        stars: 2,
        number: 6,
      },
      {
        stars: 1,
        number: 2,
      },
    ],
  },
  {
    name: " محمد السيد ",
    images: [
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
    ],
    id: 6,
    features: ["مصمم", "ملتزم"],
    tags: "",
    place: "مدينة السادات",
    content:
      "محمد السيد هو العريس اللي تحسي إنك معاه في عرض مسرحي مرتب... بس النص التاني ارتجال.",
    testimonials: [
      {
        relation: "أمه",
        gender: "female",
        stars: 5,
        opinion:
          "محمد ابن ناس وهادئ، بس لو سمع ضحك في الأوضة، بيحب يعرف التفاصيل!",
      },
      {
        relation: "أخته",
        gender: "female",
        stars: 5,
        opinion: "نضيف زيادة عن اللزوم... ممكن يعقم الريموت!",
      },
      {
        relation: "خاله",
        gender: "male",
        stars: 5,
        opinion: "لو اتحط في موقف محرج، بيحول الموضوع لدرس حياتي.",
      },
      {
        relation: "صاحبه",
        gender: "male",
        stars: 3.5,
        opinion: "بيحب يشرح الحكاية من أولها... حتى لو كانت عن سندويتش.",
      },
    ],
    filters: [
      "٢٥ - ٣٠",
      "عنده شغل",
      "عنده شعر",

      "ملتحي",
      "ملتزم",

      "بيطبخ",

      "رياضي",

      "ظروفو علي قدو",
    ],
    price: 320,
    discount: 10,
    height: 177,
    age: 25,
    hasHouse: true,
    hasHouseNote: "عنده شقة",
    readyToMarryNote: "جاهز بس مش ماديًا ",
    readyToMarry: false,
    hasBeard: true,
    isMarried: false,
    romantic: false,
    reviews: 4.3,
    ratings: [
      {
        stars: 5,
        number: 15,
      },
      {
        stars: 4,
        number: 30,
      },
      {
        stars: 3,
        number: 5,
      },
      {
        stars: 2,
        number: 6,
      },
      {
        stars: 1,
        number: 2,
      },
    ],
  },
  {
    name: "  محمد حافظ",
    images: [
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
    ],
    id: 7,
    features: ["متجوز", "مهندس", "مستقر ماديًا"],
    tags: "عريس جديد",
    place: "مدينة السادات",
    content:
      "محمد حافظ هو العريس اللي هتحسي إنه ساكت... لحد ما يقول جملة واحدة تقلب الجو.",
    testimonials: [
      {
        relation: "أمه",
        gender: "female",
        stars: 5,
        opinion: "محمد أهدى من البحر، بس عنده موج مفاجئ لما يتعصب!",
      },
      {
        relation: "أخوه",
        gender: "male",
        stars: 4.5,
        opinion: "ساكت طول الوقت، بس بيرد بجملة تخلي الكل يضحك.",
      },
      {
        relation: "خالته",
        gender: "female",
        stars: 4.5,
        opinion: "عايش في دماغه فيلم، بس نهايته happy إن شاء الله.",
      },
      {
        relation: "صاحبه",
        gender: "male",
        stars: 3.5,
        opinion: "لو قعد مع حد، بيسمعه كأنه بودكاست!",
      },
    ],
    filters: [
      "٢٥ - ٣٠",
      "عنده شغل",
      "عنده شعر",

      "ملتحي",

      "عنده عربية",

      "بيكتب شعر",

      "متجوز اصلا",
    ],
    price: 400,
    discount: 10,
    height: 177,
    age: 27,
    hasHouse: true,
    hasHouseNote: "عنده شقة",
    readyToMarryNote: "مش جاهز ",
    readyToMarry: false,
    hasBeard: true,
    isMarried: true,
    romantic: true,
    reviews: 4.0,
    ratings: [
      {
        stars: 5,
        number: 20,
      },
      {
        stars: 4,
        number: 15,
      },
      {
        stars: 3,
        number: 5,
      },
      {
        stars: 2,
        number: 6,
      },
      {
        stars: 1,
        number: 2,
      },
    ],
  },
  {
    name: "معاذ محمد عمر",
    images: [
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
      "https://placehold.co/260x260",
    ],
    id: 8,
    features: ["جيمر", "مش ملتزم", " رابر"],
    tags: " خدامك ",
    place: "القاهرة",
    content:
      "معاذ هو العريس اللي تحسي إنه في عالم موازي... بس برضو بيحبك من هناك.",
    testimonials: [
      {
        relation: "أمه",
        gender: "female",
        stars: 4.5,
        opinion: "معاذ جامد، بس كل ما أطلب منه حاجة يقوللي: بعدين يا ماما.",
      },
      {
        relation: "أخته",
        gender: "female",
        stars: 3.5,
        opinion: "لو ناديت عليه، بيرد بعد ما تزهقي... وهو واقف جنبك!",
      },
      {
        relation: "خاله",
        gender: "male",
        stars: 2,
        opinion: "لو دخلت دماغه، هتلاقي هناك حفلة أفكار بدون تنظيم!",
      },
      {
        relation: "صاحبه",
        gender: "male",
        stars: 0.5,
        opinion: "معاذ عبقري في كل حاجة... إلا في الرد على الرسايل!",
      },
    ],
    filters: ["تحت ٢٥", "عنده شعر", "ظروفو علي قدو"],
    price: 20,
    discount: 100,
    height: 170,
    age: 17,
    hasHouse: false,
    hasHouseNote: "عايش مع اهله",
    readyToMarryNote: "مش جاهز ",
    readyToMarry: false,
    hasBeard: false,
    isMarried: false,
    romantic: false,
    reviews: -3.7,
    ratings: [
      {
        stars: 5,
        number: 0,
      },
      {
        stars: 4,
        number: 0,
      },
      {
        stars: 3,
        number: 2,
      },
      {
        stars: 2,
        number: 6,
      },
      {
        stars: 1,
        number: 20,
      },
    ],
  },
];
