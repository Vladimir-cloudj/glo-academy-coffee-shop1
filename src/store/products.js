import { v4 as uuidv4 } from "uuid";

const products = {
  state: {
    bestsellers: [
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        image: "coffee-1.jpg",
        price: 10.73,
      },
      {
        id: uuidv4(),
        name: "Presto Coffee Beans 1kg",
        image: "coffee-2.jpg",
        price: 15.99,
      },
      {
        id: uuidv4(),
        name: "AROMISTICO Coffee 1kg",
        image: "coffee-3.jpg",
        price: 6.99,
      },
    ],
    goods: [
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        image: "coffee-3.jpg",
        price: 10.73,
      },
      {
        id: uuidv4(),
        name: "Presto Coffee Beans 1kg",
        image: "coffee-2.jpg",
        price: 15.99,
      },
      {
        id: uuidv4(),
        name: "AROMISTICO Coffee 1kg",
        image: "coffee-3.jpg",
        price: 6.99,
      },
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        image: "coffee-3.jpg",
        price: 10.73,
      },
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        image: "coffee-3.jpg",
        price: 10.73,
      },
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        image: "coffee-3.jpg",
        price: 10.73,
      },
    ],
    pleasureCoffee: [
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        image: "coffee-3.jpg",
        price: 10.73,
      },
      {
        id: uuidv4(),
        name: "Presto Coffee Beans 1kg",
        image: "coffee-2.jpg",
        price: 15.99,
      },
      {
        id: uuidv4(),
        name: "AROMISTICO Coffee 1kg",
        image: "coffee-3.jpg",
        price: 6.99,
      },
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        image: "coffee-3.jpg",
        price: 10.73,
      },
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        image: "coffee-3.jpg",
        price: 10.73,
      },
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        image: "coffee-3.jpg",
        price: 10.73,
      },
    ],
  },
  getters: {
    getBestsellers: (state) => state.bestsellers,
    getGoods: (state) => state.goods,
    getPleasureCoffee: (state) => state.pleasureCoffee,
  },
};

export default products;
