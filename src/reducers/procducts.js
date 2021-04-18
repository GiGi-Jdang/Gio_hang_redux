const initialState = [
  {
    id: 1,
    name: "Iphone 7 Plus",
    img:
      "https://tse2.mm.bing.net/th?id=OIP.A0G3jK7RfqlRrp9EawwnIgHaHa&pid=Api&P=0&w=300&h=300",
    description: "Do apple sản xuất",
    price: 500,
    inventory: 10,
    rating: 3,
  },
  {
    id: 2,
    name: "Samsung galaxy",
    img: "https://nl.letsgodigital.org/uploads/2020/12/galaxy-s21-ultra.jpg",
    description: "Do samsung sản xuất",
    price: 600,
    inventory: 15,
    rating: 4,
  },
  {
    id: 3,
    name: "Xiaomi Redmi Note 10",
    img:
      "https://specifications-pro.com/wp-content/uploads/2020/06/Xiaomi-Redmi-Note-10.jpg",
    description: "Do Tàu khựa sản xuất",
    price: 1000,
    inventory: 20,
    rating: 5,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
