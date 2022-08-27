let activeCategory = 'nouns';
const title = document.querySelector('.word-block h2');
const actionList = document.querySelector('.action-list');
const wordBlock = document.querySelector('.word-block');
const rusWord = wordBlock.querySelector('.rus-word');
const izWord = wordBlock.querySelector('.iz-word');
const categories = document.querySelectorAll('.sorting__order-tab button');
const languages = document.querySelectorAll('.language button');
const nextWord = document.querySelector('.next-word');
const translateBtn = document.querySelector('.translate-btn');

const rusBtn = document.querySelector('.rus');
const izBtn = document.querySelector('.iz');

const nouns = [{
  rusWord: 'Армия',
  izWord: 'צָבָא'
},
{
  rusWord: 'Больница',
  izWord: 'בֵּית חוֹלִים'
},
{
  rusWord: 'Вечер',
  izWord: 'עֶרֶב'
},
{
  rusWord: ' Вечеринка',
  izWord: 'מְסִיבָּה'
},
{
  rusWord: 'Вино',
  izWord: 'יַיִן'
},
{
  rusWord: 'Вода',
  izWord: 'מַיִם'
},
{
  rusWord: 'Врач',
  izWord: 'רוֹפֵא'
},
{
  rusWord: 'Глава правительства',
  izWord: 'רֹאשׁ-מֶמְשָׁלָה'
},
{
  rusWord: 'Год',
  izWord: 'שָׁנָה'
},
{
  rusWord: 'Город',
  izWord: 'עִיר'
},
{
  rusWord: 'День',
  izWord: 'יוֹם'
},
{
  rusWord: 'Деньги',
  izWord: 'כֶּסֶף'
},
{
  rusWord: 'Директор',
  izWord: 'מְנַהֵל'
},
{
  rusWord: 'Дом',
  izWord: 'בַּיִת'
},
{
  rusWord: 'Женщина',
  izWord: 'אִישָּׁה'
},
{
  rusWord: 'Житель',
  izWord: 'יוֹשֵׁב'
},
{
  rusWord: 'Зелень',
  izWord: 'יַרְקוּת'
},
{
  rusWord: 'емля',
  izWord: 'אֶרֶץ'
},
{
  rusWord: 'Инженер',
  izWord: 'מְהַנְדֵּס'
},
{
  rusWord: 'Карандаш',
  izWord: 'עִיפָּרוֹן'
},
{
  rusWord: 'Картофель',
  izWord: 'תַּפּוּחַ אֲדָמָה'
},
{
  rusWord: 'Квартира',
  izWord: 'דִּירָה'
},
{
  rusWord: 'Класс',
  izWord: 'כִּיתָּה'
},
{
  rusWord: 'Книга',
  izWord: 'סֵפֶר'
},
{
  rusWord: 'Комната',
  izWord: 'חֶדֶר'
},
{
  rusWord: 'Курица',
  izWord: 'עוֹף'
},
{
  rusWord: 'Магазин',
  izWord: 'חֲנוּת'
},
{
  rusWord: 'Мальчик',
  izWord: 'יֶלֶד'
},
{
  rusWord: 'Мебель',
  izWord: 'רָהִיט'
},
{
  rusWord: 'Место',
  izWord: 'מָקוֹם'

}, {
  rusWord: 'Месяц',
  izWord: 'חוֹדֶשׁ'

}, {
  rusWord: 'Молоко',
  izWord: 'חָלָב'

}, {
  rusWord: 'Мужчина/человек',
  izWord: 'אִישׁ'
}, {
  rusWord: 'Музей',
  izWord: 'מוּזֵיאוֹן'
}, {
  rusWord: 'Мясо',
  izWord: 'בָּשָׂר'
}, {
  rusWord: 'Неделя',
  izWord: 'שָׁבוּעַ'
}, {
  rusWord: 'Ночь',
  izWord: 'לַיְלָה'
}, {
  rusWord: 'Овощ',
  izWord: 'יָרָק'
}, {
  rusWord: 'Окно',
  izWord: 'חַלּוֹן'
}, {
  rusWord: 'Парламент',
  izWord: 'כְּנֶסֶת'
}, {
  rusWord: 'Пассажир',
  izWord: 'נוֹסֵעַ'
}, {
  rusWord: 'Письмо',
  izWord: 'מִכְתָּב'
}, {
  rusWord: 'Полдень',
  izWord: 'צוֹהֳרַייִם'
}, {
  rusWord: 'Поликлиника',
  izWord: 'קוּפַּת-חוֹלִים'
}, {
  rusWord: 'Посылка',
  izWord: 'חֲבִילָה'
}, {
  rusWord: 'Почта',
  izWord: 'דּוֹאַר'
}, {
  rusWord: 'Президент',
  izWord: 'נָשִׂיא'
}, {
  rusWord: 'Проблема',
  izWord: 'בְּעָיָה'
}, {
  rusWord: 'Профессия',
  izWord: 'מִקְצוֹעַ'
}, {
  rusWord: 'Работа',
  izWord: 'עֲבוֹדָה'
}, {
  rusWord: 'Ресторан',
  izWord: 'מִסְעָדָה'
}, {
  rusWord: 'Рис',
  izWord: 'אוֹרֶז'
}, {
  rusWord: 'Родственник',
  izWord: 'קָרוֹב'
}, {
  rusWord: 'Ручка',
  izWord: 'עֵט'
}, {
  rusWord: 'Рыба',
  izWord: 'דָּג'
}, {
  rusWord: 'Рынок',
  izWord: 'שׁוּק'
}, {
  rusWord: 'Сад',
  izWord: 'גַּן'
}, {
  rusWord: 'Салат',
  izWord: 'סָלָט'
}, {
  rusWord: 'Семья',
  izWord: 'מִשְׁפָּחָה'
}, {
  rusWord: 'Служащий',
  izWord: 'פָּקִיד'
}, {
  rusWord: 'Сок',
  izWord: 'מִיץ'
}, {
  rusWord: 'Солдат',
  izWord: 'חַייָּל'
}, {
  rusWord: 'Стол',
  izWord: 'שׁוּלְחָן'
}, {
  rusWord: 'Сыр',
  izWord: 'גְּבִינָה'
}, {
  rusWord: 'Тетрадь',
  izWord: 'מַחְבֶּרֶת'
}, {
  rusWord: 'Улица',
  izWord: 'רְחוֹב'
}, {
  rusWord: 'Утро',
  izWord: 'בּוֹקֶר'
}, {
  rusWord: 'Ученик',
  zWord: 'תַּלְמִיד'
}, {
  rusWord: 'Учитель',
  izWord: 'מוֹרֶה'
}, {
  rusWord: 'Фильм',
  izWord: 'סֶרֶט'
}, {
  rusWord: 'Фрукт',
  izWord: 'פְּרִי'
}, {
  rusWord: 'Хлеб',
  izWord: 'לֶחֶם'
}, {
  rusWord: 'Шкаф',
  izWord: 'אָרוֹן'
}, {
  rusWord: 'Школа',
  izWord: 'בֵּית סֵפֶר'
}, {
  rusWord: 'Яйцо',
  izWord: 'בֵּיצָה'
},
];

const verbs = [
  {

      rusWord: "Видеть",
      izWord: "לִרְאוֹת",
      read: "лоръОт",
  },
  {
      rusWord: "Вставать",
      izWord: "לָקוּם",
      read: "лакУм",
  },
  {
      rusWord: "Говорить",
      izWord: "לְדַבֵּר",
      read: "ледабЕр",
  },
  {
      rusWord: "Гулять",
      izWord: "לְטַייֵּל",
      read: "летайЕль",

  },
  {
      rusWord: "Делать",
      izWord: "לַעֲשׂוֹת",
      read: "лаасОт",
  },
  {
      rusWord: "Ездить",
      izWord: "לִנְסוֹעַ",
      read: "линсОа",
  },
  {
      rusWord: "Есть",
      izWord: "לֶאֱכוֹל",
      read: "леэхОль",

  },
  {
      rusWord: "Жить",
      izWord: "לָגוּר",
      read: "лагУр",

  },
  {
      rusWord: "Знать",
      izWord: "לָדַעַת",
      read: "ладаАт",
  },
  {
      rusWord: "Идти",
      izWord: "לָלֶכֶת",
      read: "лалЕхет",
  },
  {
      rusWord: "Изучать",
      izWord: "לִלְמוֹד",
      read: "лильмОд",
  },
  {
      rusWord: "Лететь",
      izWord: "לָטוּס",
      read: "латУс",
  },
  {
      rusWord: "Любить",
      izWord: "לֶאֱהוֹב",
      read: "леэhОв",
  },
  {
      rusWord: "Мочь",
      izWord: "לִיכוֹל",
      read: "лихОль",
  },
  {
      rusWord: "Отдыхать",
      izWord: "לָנוּחַ",
      read: "ланУах",
  },
  {
      rusWord: "Писать",
      izWord: "לִכְתּוֹב",
      read: "лихтОв",
  },
  {
      rusWord: "Пить",
      izWord: "לִשְׁתּוֹת",
      read: "лиштОт",
  },
  {
      rusWord: "Покупать",
      izWord: "לִקְנוֹת",
      read: "ликнОт",
  },
  {
      rusWord: "Понимать",
      izWord: "לְהָבִין",
      read: "леhавИн",
  },
  {
      rusWord: "Приходить",
      izWord: "לָבוֹא",
      read: "лАво",
  },
  {
      rusWord: "Работать",
      izWord: "לַעֲבוֹד",
      read: "лаавОд",
  },
  {
      rusWord: "Сидеть",
      izWord: "לָשֶׁבֶת",
      read: "лашЕвет",
  },
  {
      rusWord: "Сказать",
      izWord: "לוֹמַר",
      read: "ломАр",
  },
  {
      rusWord: "Стоять",
      izWord: "לַעֲמוֹד",
      read: "лаамОд",
  },
  {
      rusWord: "Хотеть",
      izWord: "לִרְצוֹת",
      read: "лирцОт",
  },
  {
      rusWord: "Хотеть пить",
      izWord: "לִצְמוֹא",
      read: "лимцО",
  },
  {
      rusWord: "Читать",
      izWord: "לִקְרוֹא",
      read: "ликрО",
  },
];

const adjectives = [
  {
      rusWord: "Близкий",
      izWord: "קָרוֹב",
      read: "кАров",

  },
  {
      rusWord: "Большой",
      izWord: "גָּדוֹל",
      read: "гАдоль",
  },
  {
      rusWord: "Быстро",
      izWord: "מַהֵר",
      read: "маhЕр",
  },
  {
      rusWord: "Важный",
      izWord: "חָשׁוּב",
      read: "хашУв",
  },
  {
      rusWord: "Вкусный",
      izWord: "טָעִים",
      read: "таИм",
  },
  {
      rusWord: "Голодный",
      izWord: "רָעֵב",
      read: "раЭв",
  },
  {
      rusWord: "Далекий",
      izWord: "רָחוֹק",
      read: "рахОк",

  },
  {
      rusWord: "Закрытый",
      izWord: "סָגוּר",
      read: "сагУр",
  },
  {
      rusWord: "Интересный",
      izWord: "מְעַנְייֵן",
      read: "меанйЕн",
  },
  {
      rusWord: "Красивый",
      izWord: "יָפֶה",
      read: "яфЕ",
  },
  {
      rusWord: "Легкий",
      izWord: "קַל",
      read: "кАль",
  },
  {
      rusWord: "Маленький",
      izWord: "קָטָן",
      read: "катАн",
  },
  {
      rusWord: "Мало",
      izWord: "מְעַט",
      read: "меАт",
  },
  {
      rusWord: "Медленно",
      izWord: "לְאַט",
      read: "леАт",
  },
  {
      rusWord: "Много",
      izWord: "הַרְבֵּה",
      read: "hарбЕ",
  },
  {
      rusWord: "Немного",
      izWord: "קְצָת",
      read: "кцАт",
  },
  {
      rusWord: "Необходимо",
      izWord: "צָרִיךְ",
      read: "царИх",
  },
  {
      rusWord: "Новый",
      izWord: "חָדָשׁ",
      read: "хадАш",
  },
  {
      rusWord: "Нужный",
      izWord: "נָחוּץ",
      read: "нахУц",
  },
  {
      rusWord: "Открытый",
      izWord: "פָּתוּחַ",
      read: "патУах",
  },
  {
      rusWord: "Плохой",
      izWord: "רַע",
      read: "рА",
  },
  {
      rusWord: "Последний",
      izWord: "אַחֲרוֹן",
      read: "ахарОн",
  },
  {
      rusWord: "Свежий",
      izWord: "טָרִי",
      read: "тарИ",
  },
  {
      rusWord: "Следующий",
      izWord: "בָּא",
      read: "бА",
  },
  {
      rusWord: "Старый",
      izWord: "יָשָׁן",
      read: "яшАн",
  },
  {
      rusWord: "Старый, древний",
      izWord: "עַתִּיק",
      read: "атИк",
  },
  {
      rusWord: "Трудный",
      izWord: "קָשֶׁה",
      read: "кашЕ",
  },
  {
      rusWord: "Хороший",
      izWord: "טוֹב",
      read: "тОв",
  },
];

const other= [
  {
      rusWord: "Где?",
      izWord: "אֵיפֹה",
      read: "Эйфо",
      other: "-> ...ב"
  },
  {
      rusWord: "Да",
      izWord: "כֵּן",
      read: "кЕн",
      other: ""
  },
  {
      rusWord: "До / Перед",
      izWord: "לִפְנֵי",
      read: "лифнЕй",
      other: ""
  },
  {
      rusWord: "Есть",
      izWord: "יֵשׁ",
      read: "йЕш",
      other: ""
  },
  {
      rusWord: "За / После",
      izWord: "אַחַר",
      read: "ахАр",
      other: ""
  },
  {
      rusWord: "И",
      izWord: "ו",
      read: "вЭ",
      other: ""
  },
  {
      rusWord: "Или",
      izWord: "אוֹ",
      read: "О",
      other: ""
  },
  {
      rusWord: "Когда?",
      izWord: "מָתַי",
      read: "матАй",
      other: "-> ...ב"
  },
  {
      rusWord: "Кто?",
      izWord: "מִי",
      read: "мИ",
      other: ""
  },
  {
      rusWord: "Куда?",
      izWord: "לְאָן",
      read: "леАн",
      other: "-> ...ל"
  },
  {
      rusWord: "На",
      izWord: "עַל",
      read: "Аль",
      other: ""
  },
  {
      rusWord: "Напротив",
      izWord: "מוּל",
      read: "мУль",
      other: ""
  },
  {
      rusWord: "Нет",
      izWord: "לֹא",
      read: "лО",
      other: ""
  },
  {
      rusWord: "Нет/не",
      izWord: "אֵין",
      read: "Эйн",
      other: ""
  },
  {
      rusWord: "Но",
      izWord: "אֲבָל",
      read: "авАль",
      other: ""
  },
  {
      rusWord: "Откуда?",
      izWord: "מְאַייִן",
      read: "меАйин",
      other: "-> ...מ"
  },
  {
      rusWord: "Почему?",
      izWord: "לַמָּה",
      read: "лАма",
      other: "-> ...כי"
  },
  {
      rusWord: "Рядом",
      izWord: "עַל יַד",
      read: "Аль 'яд",
      other: ""
  },
  {
      rusWord: "Сейчас",
      izWord: "עַכְשָׁיו",
      read: "ахшАв",
      other: ""
  },
  {
      rusWord: "Сколько?",
      izWord: "כַּמָּה",
      read: "кАма",
      other: ""
  },
  {
      rusWord: "Там",
      izWord: "שָׁם",
      read: "шАм",
      other: ""
  },
  {
      rusWord: "Тоже",
      izWord: "גַּם",
      read: "гАм",
      other: ""
  },
  {
      rusWord: "Тут",
      izWord: "פֹּה",
      read: "пО",
      other: ""
  },
  {
      rusWord: "Что?",
      izWord: "מַה",
      read: "мА",
      other: ""
  }
];


function removeCategoryActive() {
  categories.forEach(category => {
      category.classList.remove('active');
  })
}

function removeLanguageActive() {
  languages.forEach(language=> {
    language.classList.remove('active');
  })
}

categories.forEach(category => {
  category.addEventListener('click', () => {
    removeCategoryActive();
    category.classList.add('active');

    title.style.display = 'none';
    actionList.style.display = 'flex';

    const categoryData = category.getAttribute('data-category');
    activeCategory = categoryData;

    switch (categoryData) {
      case 'nouns':
        init(nouns);
        nextWord.addEventListener('click', randomNoRepeats(nouns));
        break;
      case 'verbs':
        init(verbs);
        nextWord.addEventListener('click', randomNoRepeats(verbs));
        break;
      case 'adjectives':
        init(adjectives);
        nextWord.addEventListener('click', randomNoRepeats(adjectives));
      break;
      case 'other':
        init(other);
        nextWord.addEventListener('click', randomNoRepeats(other));
      break;
    }
  });
});

languages.forEach(language => {
  language.addEventListener('click', () => {
    removeLanguageActive();
    language.classList.add('active');

    const languageActive = language.getAttribute('data-language');
    const rusElement = document.querySelector('.rus-word');
    const izElement = document.querySelector('.iz-word');

    switch (languageActive) {
      case 'rus':
        izElement.classList.add('iz-word--hide');
        izElement.classList.remove('iz-word--active');
      
        rusElement.classList.remove('rus-word--hide');
        rusElement.classList.add('rus-word--active');
        break;
      case 'iz':
        izElement.classList.remove('iz-word--hide');
        izElement.classList.add('iz-word--active');
      
        rusElement.classList.add('rus-word--hide');
        rusElement.classList.remove('rus-word--active');
        break;
    }
  });
});

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

function init(wordsArray) {
  const randomIntex = getRandomInteger(0, wordsArray.length - 1); // Получаем случайное число
  let randomElement = wordsArray[randomIntex];

  const rusElement = document.querySelector('.rus-word');
  const izElement = document.querySelector('.iz-word');

  rusElement.innerHTML = randomElement.rusWord;
  izElement.innerHTML = randomElement.izWord;

  return randomElement;
}

function randomNoRepeats(array) {
  const rusElement = document.querySelector('.rus-word');
  const izElement = document.querySelector('.iz-word');
  var copy = array.slice(0);

  return function() {
    if (copy.length < 1) { 
      rusElement.innerHTML = 'Слова закончились' ;
      // copy = array.slice(0); 
    }

    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];

    rusElement.innerHTML = item.rusWord;
    izElement.innerHTML = item.izWord;

    if(rusBtn.classList.contains('active')) {
      izElement.classList.add('iz-word--hide');
      izElement.classList.remove('iz-word--active');

      rusElement.classList.remove('rus-word--hide');
      rusElement.classList.add('rus-word--active');
    }

    if(izBtn.classList.contains('active')) {
      rusElement.classList.add('rus-word--hide');
      rusElement.classList.remove('rus-word--active');

      izElement.classList.remove('iz-word--hide');
      izElement.classList.add('iz-word--active');
    }

  
    copy.splice(index, 1);
    return item;
  };
}


translateBtn.addEventListener('click', () => {

  const rusElement = document.querySelector('.rus-word');
  const izElement = document.querySelector('.iz-word');

  if(rusElement.classList.contains('rus-word--active')) {
    rusElement.classList.add('rus-word--hide');
    rusElement.classList.remove('rus-word--active');
  } else {
    rusElement.classList.remove('rus-word--hide');
    rusElement.classList.add('rus-word--active');
  }

  if(izElement.classList.contains('iz-word--active')) {
    izElement.classList.add('iz-word--hide');
    izElement.classList.remove('iz-word--active');
  } else {
    izElement.classList.remove('iz-word--hide');
    izElement.classList.add('iz-word--active');
  }
});

