export function formatPrice(price) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'EUR',
  });
}

export const foodItems = [
  {
    name: 'Pizza Cheese',
    img: '/img/pizza-cheese.jpg',
    section: 'Pizza',
    price: 1,
  },
  {
    name: 'Pizza Pepperoni',
    img: '/img/peperoni.jpg',
    section: 'Pizza',
    price: 1.5,
  },
  {
    name: 'Pizza Chicken',
    img: '/img/pizza-chicken.jpg',
    section: 'Pizza',
    price: 2,
  },
  {
    img: '/img/pizza-veggie.jpg',
    name: 'Pizza Veggie',
    section: 'Pizza',
    price: 2,
  },
  {
    img: '/img/capricciosa.jpg',
    name: 'Pizza Capricciosa',
    section: 'Pizza',
    price: 2,
  },
  {
    img: '/img/hawaiian-pizza.jpg',
    name: 'Pizza Hawaii',
    section: 'Pizza',
    price: 2,
  },
  {
    img: '/img/normal-burger.jpg',
    name: 'Burger',
    section: 'Sandwich',
    price: 3,
  },
  {
    img: '/img/vege-burger.jpg',
    name: 'Vege Burger',
    section: 'Sandwich',
    price: 3,
  },
  { img: '/img/doner.jpg', name: 'Doner', section: 'Sandwich', price: 4.5 },
  {
    img: '/img/chicken-salad.jpg',
    name: 'Chicken Salad',
    section: 'Sandwich',
    price: 6,
  },
  {
    img: '/img/chips.jpg',
    name: 'Chips',
    section: 'Sides',
    price: 1,
  },
  {
    img: '/img/nachos.jpg',
    name: 'Nachos',
    section: 'Sides',
    price: 1,
  },
  {
    img: '/img/soda.jpg',
    price: 1,
    name: 'Soda',
    section: 'Drinks',
    choices: ['Sprite', 'Pepsi', 'Fanta', 'Coke'],
  },
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
