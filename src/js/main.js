import {
  asd
} from './func.js';
asd();

const starAll = document.querySelectorAll('[data-star]');
const starOne = document.querySelector('#star-1');
const starTwo = document.querySelector('#star-2');
const starThree = document.querySelector('#star-3');
const starFour = document.querySelector('#star-4');
const starFive = document.querySelector('#star-5');
// console.log(starAll);

if (!!starAll) {
  starAll.forEach(function (item) {
    item.addEventListener('change', function () {

      if (this.id == 'star-5') {
        console.log('Ура!!!');
        starOne.checked = true;
        starTwo.checked = true;
        starThree.checked = true;
        starFour.checked = true;

      } else if (this.id == 'star-4') {
        starOne.checked = true;
        starTwo.checked = true;
        starThree.checked = true;
        starFive.checked = false;
        console.log('star-4');
      } else if (this.id == 'star-3') {
        starOne.checked = true;
        starTwo.checked = true;
        starFour.checked = false;
        starFive.checked = false;
        console.log('star-4');
      } else if (this.id == 'star-2') {
        starOne.checked = true;
        starThree.checked = false;
        starFour.checked = false;
        starFive.checked = false;
      } else if (this.id == 'star-1') {
        starTwo.checked = false;
        starThree.checked = false;
        starFour.checked = false;
        starFive.checked = false;
      }

    })
  });
};

// menu-burger

const menuBurger = document.querySelector('.menu-burger__btn');
const menu = document.querySelector('.menu');
const menuBurgerClose = document.querySelector('.menu-burger__icon--close');
const menuBurgerIcon = document.querySelector('.menu-burger__icon');

if (!!menuBurger) {
  menuBurger.onclick = () => {
    menu.classList.toggle('active');
    menuBurgerClose.classList.toggle('active');
    menuBurgerIcon.classList.toggle('hidden');
  }
}

// Indicators
const fio = document.querySelectorAll('[data-name="fio"]');
const indicator = document.querySelectorAll('.info-page__indicator');
if (!!fio) {
  fio.forEach(function (item) {
    item.addEventListener('focus', function () {
      indicator.forEach(function (item, index) {
        if (index == 0) {
          item.classList.add('info-page__indicator--orange');
        }
      })
    })
  })
}

const patron = document.querySelector('.form__patron');

if (!!patron) {

  patron.addEventListener('change', function () {

    indicator.forEach(function (item, index) {

      if (index == 0) {
        item.classList.remove('info-page__indicator--orange');
        item.classList.add('info-page__indicator--green');
      }
    })

  })
}



// radio

const radioFake = document.querySelectorAll('.radio__fake');
console.log(radioFake);

if (!!radioFake) {
  radioFake.forEach(function (item) {
    item.addEventListener('change', function () {
      indicator.forEach(function (item, index) {

        if (index == 1) {
          item.classList.remove('info-page__indicator--green');
          item.classList.add('info-page__indicator--orange');
        }
      })
    })
  })
}

const select = document.querySelector('.select-box__select')
if (!!select) {

  select.addEventListener('change', function () {

    indicator.forEach(function (item, index) {

      if (index == 1) {
        item.classList.remove('info-page__indicator--orange');
        item.classList.add('info-page__indicator--green');
      }
    })
  })
}

//citizenship

const citizen = document.querySelector('.country__citizenship');

if (!!citizen) {
  citizen.addEventListener('focus', function () {

    indicator.forEach(function (item, index) {

      if (index == 2) {
        item.classList.add('info-page__indicator--orange');
      }

    })
  })
}

if (!!citizen) {
  citizen.addEventListener('change', function () {

    indicator.forEach(function (item, index) {

      if (index == 2) {
        item.classList.remove('info-page__indicator--orange');
        item.classList.add('info-page__indicator--green');

      }

    })
  })
}

// select date

const day = document.querySelectorAll('[data-name="birthday"]');

if (!!day) {

  day.forEach(function (item) {
    item.addEventListener('focus', function () {
      indicator.forEach(function (item, index) {

        if (index == 3) {
          item.classList.add('info-page__indicator--orange');
          item.classList.remove('info-page__indicator--green');

        }
      })
    })
  })

}

// location
const location = document.querySelector('.location__place');
if (!!location) {

  location.addEventListener('focus', function () {

    indicator.forEach(function (item, index) {

      if (index == 3) {
        item.classList.remove('info-page__indicator--orange');
        item.classList.add('info-page__indicator--green');

      } else if (index == 4) {
        item.classList.add('info-page__indicator--orange');
      }

    })
  })

  location.addEventListener('change', function () {

    indicator.forEach(function (item, index) {

      if (index == 4) {
        item.classList.remove('info-page__indicator--orange');
        item.classList.add('info-page__indicator--green');
      }

    })
  })

}

// button-prev
const btnprev = document.querySelector('.button-prev');
if (!!btnprev) {
  btnprev.onclick = function () {
    indicator.forEach(function (item) {
      item.classList.remove('info-page__indicator--green');
      item.classList.remove('info-page__indicator--orange');
    })
  }
}