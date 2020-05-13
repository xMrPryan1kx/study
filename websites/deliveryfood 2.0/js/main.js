'use strict';
const cartButton = document.querySelector('#cart-button'),
  modal = document.querySelector('.modal'),
  close = document.querySelector('.close'),
  buttonAuth = document.querySelector('.button-auth'),
  modalAuth = document.querySelector('.modal-auth'),
  closeAuth = document.querySelector('.close-auth'),
  logInForm = document.querySelector('#logInForm'),
  loginInput = document.querySelector('#login'),
  userName = document.querySelector('.user-name'),
  buttonOut = document.querySelector('.button-out'),
  cardsRestaurants = document.querySelector('.cards-restaurants'),
  containerPromo = document.querySelector('.container-promo'),
  restaurants = document.querySelector('.restaurants'),
  menu = document.querySelector('.menu'),
  logo = document.querySelector('.logo'),
  cardsMenu = document.querySelector('.cards-menu'),
  restaurantTitle = document.querySelector('.restaurant-title'),
  rating = document.querySelector('.rating'),
  minPrice = document.querySelector('.price'),
  category = document.querySelector('.category'),
  inputSearch = document.querySelector('.input-search');

let login = localStorage.getItem('text');

let cart = [];

const getData = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Ошибка по адресу ${url}, статус ошибки: ${response.status}!`
    );
  }
  return await response.json();
};

const valid = (str) => {
  const nameReg = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
  return nameReg.test(str);
};

const toggleModal = () => {
  modal.classList.toggle('is-open');
};

const toggleModalAuth = () => {
  modalAuth.classList.toggle('is-open');
  loginInput.style.borderColor = '';
};

const authorized = () => {
  const logOut = () => {
    login = null;
    localStorage.removeItem('text');
    buttonOut.style.display = '';
    userName.style.display = '';
    buttonAuth.style.display = '';
    cartButton.style.display = '';

    buttonOut.removeEventListener('click', logOut);
    checkAuth();
  };
  console.log('Авторизован');
  userName.textContent = login;
  buttonAuth.style.display = 'none';
  buttonOut.style.display = 'flex';
  userName.style.display = 'flex';
  cartButton.style.display = 'flex';
  buttonOut.addEventListener('click', logOut);
};

const notAuthorized = () => {
  console.log('Не авторизован');
  const logIn = (e) => {
    e.preventDefault();
    if (valid(loginInput.value)) {
      login = loginInput.value;
      localStorage.setItem('text', login);
      toggleModalAuth();
      buttonAuth.removeEventListener('click', toggleModalAuth);
      closeAuth.removeEventListener('click', toggleModalAuth);
      logInForm.removeEventListener('submit', logIn);
      logInForm.reset();
      checkAuth();
    } else {
      loginInput.style.borderColor = 'red';
      loginInput.value = '';
    }
  };
  buttonAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener('click', toggleModalAuth);
  logInForm.addEventListener('submit', logIn);
};

const checkAuth = () => {
  if (login) {
    authorized();
  } else {
    notAuthorized();
  }
};

const createCardRestaurant = (restaurant) => {
  const {
    image,
    kitchen,
    name,
    price,
    products,
    stars,
    time_of_delivery: timeOfDelivery,
  } = restaurant;

  const card = `
  <a class="card card-restaurant" data-products="${products}"
  data-info="${[name, price, stars, kitchen]}">
						<img src="${image}" alt="image" class="card-image"/>
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title">${name}</h3>
								<span class="card-tag tag">${timeOfDelivery} мин</span>
							</div>
							<div class="card-info">
								<div class="rating">
									${stars}
								</div>
								<div class="price">От ${price} ₽</div>
								<div class="category">${kitchen}</div>
							</div>
						</div>
					</a>
  `;
  cardsRestaurants.insertAdjacentHTML('beforeend', card);
};

const createCardGoods = (goods) => {
  const { description, id, image, name, price } = goods;
  const card = document.createElement('section');
  card.className = 'card';

  card.insertAdjacentHTML(
    'beforeend',
    `
						<img src="${image}" alt="image" class="card-image"/>
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title card-title-reg">${name}</h3>
							</div>
							<div class="card-info">
								<div class="ingredients">${description}
								</div>
							</div>
							<div class="card-buttons">
								<button class="button button-primary button-add-cart" id ="${id}">
									<span class="button-card-text">В корзину</span>
									<span class="button-cart-svg"></span>
								</button>
								<strong class="card-price card-price-bold">${price} ₽</strong>
							</div>
						</div>
  `
  );

  cardsMenu.insertAdjacentElement('beforeend', card);
};

const openGoods = (e) => {
  const target = e.target;

  const restaurant = target.closest('.card-restaurant');
  if (restaurant) {
    if (login) {
      const info = restaurant.dataset.info.split(',');
      const [name, price, stars, kitchen] = info;
      cardsMenu.textContent = '';
      containerPromo.classList.add('hide');
      restaurants.classList.add('hide');
      menu.classList.remove('hide');

      restaurantTitle.textContent = name;
      rating.textContent = stars;
      minPrice.textContent = `От ${price} ₽`;
      category.textContent = kitchen;

      getData(`../db/${restaurant.dataset.products}`).then((data) => {
        data.forEach(createCardGoods);
      });
    } else {
      toggleModalAuth();
    }
  }
};

const addToCart = (e) => {
  const target = e.target;
  console.log('object');

  const buttonAddToCart = target.closest('.button-add-cart');

  if (buttonAddToCart) {
    const cart = target.closest('.card');
    const title = cart.querySelector('.card-title-reg');
    const cost = cart.querySelector('.card-price');
    const id = buttonAddToCart.id;
    console.log(cart, title, cost, id);
  }
};

// !Инициализация евентов



const init = () => {
  getData('../db/partners.json').then((data) => {
    data.forEach(createCardRestaurant);
  });

  cardsRestaurants.addEventListener('click', openGoods);

  logo.addEventListener('click', () => {
    containerPromo.classList.remove('hide');
    restaurants.classList.remove('hide');
    menu.classList.add('hide');
  });

  cartButton.addEventListener('click', toggleModal);

  close.addEventListener('click', toggleModal);

  inputSearch.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      const target = e.target;
      const value = target.value.toLowerCase().trim();
      target.value = '';

      if (!value) {
        target.style.backgroundColor = 'tomato';
        setTimeout(() => {
          target.style.backgroundColor = '';
        }, 2000);
        return;
      }

      const goods = [];

      getData('./db/partners.json').then((data) => {
        const products = data.map((item) => {
          return item.products;
        });

        products.forEach((product) => {
          getData(`./db/${product}`)
            .then((data) => {
              goods.push(...data);

              const searchGoods = goods.filter((item) => {
                return item.name.toLowerCase().includes(value);
              });
              cardsMenu.textContent = '';

              containerPromo.classList.add('hide');
              restaurants.classList.add('hide');
              menu.classList.remove('hide');

              restaurantTitle.textContent = 'Результат поиска';
              rating.textContent = '';
              minPrice.textContent = '';
              category.textContent = '';
              return searchGoods;
            })
            .then((data) => {
              data.forEach(createCardGoods);
            });
        });
      });
    }
  });
  cartButton.addEventListener('click', addToCart);

  checkAuth();

  new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 3000,
    },
  });
};

init();
