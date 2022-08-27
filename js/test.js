const wordBlock = document.querySelector('.word-block');
const rusWord = wordBlock.querySelector('.rus-word');
const izWord = wordBlock.querySelector('.iz-word');
const categories = document.querySelectorAll('.sorting__order-tab button');

let cat = 'nouns';

function removeCategoryActive() {
  categories.forEach(category => {
      category.classList.remove('active');
  })
}

categories.forEach(category => {
  category.addEventListener('click', () => {
    removeCategoryActive();
    category.classList.add('active');

    const categoryData = category.getAttribute('data-category');
    cat = categoryData;

    switch (categoryData) {
      case 'nouns':
        createElementNouns();
        break;
      case 'verbs':
        createElementVerbs();
        break;
    }
  });
});



const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generateVerbs = () => {
  const verbs = [
    {
      rusWord: 'Видеть',
      izWord: 'לִרְאוֹת',
    },
    {
      rusWord: 'Вставать',
      izWord: 'לָקוּם',
    },
    {
      rusWord: 'Говорить',
      izWord: 'לְדַבֵּר',
    },
    {
      rusWord: 'Гулять',
      izWord: 'לְטַייֵּל',
    },
    {
      rusWord: 'Делать',
      izWord: 'לַעֲשׂוֹת',
    },
  ];

  const randomIntex = getRandomInteger(0, verbs.length - 1);
  return verbs[randomIntex];
};

const generateNouns= () => {
  const nouns = [
    {
      rusWord: 'Вечер',
      izWord: 'עֶרֶב',
    },
    {
      rusWord: 'Вечеринка',
      izWord: 'מְסִיבָּה',
    },
    {
      rusWord: 'Вино',
      izWord: 'יַיִן',
    },
    {
      rusWord: 'Вода',
      izWord: 'מַיִם',
    },
    {
      rusWord: 'Глава правительства',
      izWord: 'רֹאשׁ-מֶמְשָׁלָה',
    },
  ];

  const randomIntex = getRandomInteger(0, nouns.length - 1);
  return nouns[randomIntex];
};




const createElementNouns = () => {
  const rusElement = document.querySelector('.rus-word');
  const izElement = document.querySelector('.iz-word');
  let test = generateNouns();

  rusElement.innerHTML = test.rusWord;
  izElement.innerHTML = test.izWord;

  izWord.classList.add('iz-word--hide');
  izWord.classList.remove('iz-word--active');

  rusWord.classList.remove('rus-word--hide');
  rusWord.classList.add('rus-word--active');
  
  return test;
};


createElementNouns();


const createElementVerbs = () => {
  const rusElement = document.querySelector('.rus-word');
  const izElement = document.querySelector('.iz-word');
  let test = generateVerbs();

  rusElement.innerHTML = test.rusWord;
  izElement.innerHTML = test.izWord;

  izWord.classList.add('iz-word--hide');
  izWord.classList.remove('iz-word--active');

  rusWord.classList.remove('rus-word--hide');
  rusWord.classList.add('rus-word--active');

  return test;
};



const nextWord = document.querySelector('.next-word');

nextWord.addEventListener('click', () => {
  switch(cat) {
    case 'nouns':
        createElementNouns();
        break;
      case 'verbs':
        createElementVerbs();
        break;
  }
});


const translateBtn = document.querySelector('.translate-btn');

translateBtn.addEventListener('click', () => {

  izWord.classList.remove('iz-word--hide');
  izWord.classList.add('iz-word--active');

  rusWord.classList.add('rus-word--hide');
  rusWord.classList.remove('rus-word--active');
});