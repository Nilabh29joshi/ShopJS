var express = require('express');
var router = express.Router();
const userModel = require('../models/users');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/cart', (req, res) => {
  const cart = req.session.cart || [];
  
  // Pass the cart to the EJS template
  res.render('cart', { cart });
});


router.get('/dishes', function(req, res, next) {

  const dishes = [
    { id: '1', name: 'Dairy, Bread & Eggs', price: 10, image: '/images/imgd1.jpg', eye: '/item1' },
    { id: '2', name: 'Fruits & Vegetables', price: 103, image: '/images/imgd2.jpg', eye: '/item2' },
    { id: '3', name: 'Bakery & Biscuits', price: 104, image: '/images/imgd3.jpg', eye: '/item3' },
    { id: '4', name: 'Snacks & Munchies', price: 109, image: '/images/imgd4.jpg', eye: '/item4' },
    { id: '5', name: 'Tea, Coffee & Health Drinks', price: 109, image: '/images/imgd5.jpg', eye: '/item5' },
    { id: '6', name: 'Atta, Rice & Dal', price: 109, image: '/images/imgd6.jpg', eye: '/item6' },

  ];
  res.render('dishes', { dishes });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/menu', function(req, res, next) {
  const menu = [
    { id: '1', name: 'Bread', price: 10, image: '/images/imgm1.jpg' },
    { id: '2', name: 'Maggi', price: 10, image: '/images/imgm2.jpg' },
    { id: '3', name: 'Cookies', price: 10, image: '/images/imgm3.jpg' },
    { id: '4', name: 'Pasta', price: 10, image: '/images/imgm4.jpg' },
    { id: '5', name: 'Hide&Seek', price: 10, image: '/images/imgm5.jpg' },
    { id: '6', name: 'Chips', price: 10, image: '/images/imgm6.jpg' },
    { id: '7', name: 'Snacks', price: 10, image: '/images/imgm7.jpg' },
    { id: '8', name: 'Milk', price: 10, image: '/images/imgm8.jpg' },
    { id: '9', name: 'Choclate', price: 10, image: '/images/imgm9.jpg' },
  ]
  res.render('menu', { menu });
});

router.get('/item1', function(req, res, next) {
  const item1 = [
    { id: '1', name: 'dosa', price: 10, image: '/images/imgm1.jpg' },
    { id: '2', name: 'dosa', price: 10, image: '/images/imgm2.jpg' },
    { id: '3', name: 'dosa', price: 10, image: '/images/imgm3.jpg' },
    { id: '4', name: 'dosa', price: 10, image: '/images/imgm4.jpg' },
    { id: '5', name: 'dosa', price: 10, image: '/images/imgm5.jpg' },
    { id: '6', name: 'dosa', price: 10, image: '/images/imgm6.jpg' },
    { id: '7', name: 'dosa', price: 10, image: '/images/imgm7.jpg' },
    { id: '8', name: 'dosa', price: 10, image: '/images/imgm8.jpg' },
    { id: '9', name: 'dosa', price: 10, image: '/images/imgm9.jpg' },
  ]
  res.render('item1', { item1 });
});

router.get('/item2', function(req, res, next) {
  const item2 = [
    { id: '1', name: 'dosa', price: 10, image: '/images/imgm1.jpg' },
    { id: '2', name: 'dosa', price: 10, image: '/images/imgm2.jpg' },
    { id: '3', name: 'dosa', price: 10, image: '/images/imgm3.jpg' },
    { id: '4', name: 'dosa', price: 10, image: '/images/imgm4.jpg' },
    { id: '5', name: 'dosa', price: 10, image: '/images/imgm5.jpg' },
    { id: '6', name: 'dosa', price: 10, image: '/images/imgm6.jpg' },
    { id: '7', name: 'dosa', price: 10, image: '/images/imgm7.jpg' },
    { id: '8', name: 'dosa', price: 10, image: '/images/imgm8.jpg' },
    { id: '9', name: 'dosa', price: 10, image: '/images/imgm9.jpg' },
  ]
  res.render('item2', { item2 });
});

router.get('/item3', function(req, res, next) {
  const item3 = [
    { id: '1', name: 'dosa', price: 10, image: '/images/imgm1.jpg' },
    { id: '2', name: 'dosa', price: 10, image: '/images/imgm2.jpg' },
    { id: '3', name: 'dosa', price: 10, image: '/images/imgm3.jpg' },
    { id: '4', name: 'dosa', price: 10, image: '/images/imgm4.jpg' },
    { id: '5', name: 'dosa', price: 10, image: '/images/imgm5.jpg' },
    { id: '6', name: 'dosa', price: 10, image: '/images/imgm6.jpg' },
    { id: '7', name: 'dosa', price: 10, image: '/images/imgm7.jpg' },
    { id: '8', name: 'dosa', price: 10, image: '/images/imgm8.jpg' },
    { id: '9', name: 'dosa', price: 10, image: '/images/imgm9.jpg' },
  ]
  res.render('item3', { item3 });
});

router.get('/item4', function(req, res, next) {
  const item4 = [
    { id: '1', name: 'dosa', price: 10, image: '/images/imgm1.jpg' },
    { id: '2', name: 'dosa', price: 10, image: '/images/imgm2.jpg' },
    { id: '3', name: 'dosa', price: 10, image: '/images/imgm3.jpg' },
    { id: '4', name: 'dosa', price: 10, image: '/images/imgm4.jpg' },
    { id: '5', name: 'dosa', price: 10, image: '/images/imgm5.jpg' },
    { id: '6', name: 'dosa', price: 10, image: '/images/imgm6.jpg' },
    { id: '7', name: 'dosa', price: 10, image: '/images/imgm7.jpg' },
    { id: '8', name: 'dosa', price: 10, image: '/images/imgm8.jpg' },
    { id: '9', name: 'dosa', price: 10, image: '/images/imgm9.jpg' },
  ]
  res.render('item4', { item4 });
});

router.get('/item5', function(req, res, next) {
  const item5 = [
    { id: '1', name: 'dosa', price: 10, image: '/images/imgm1.jpg' },
    { id: '2', name: 'dosa', price: 10, image: '/images/imgm2.jpg' },
    { id: '3', name: 'dosa', price: 10, image: '/images/imgm3.jpg' },
    { id: '4', name: 'dosa', price: 10, image: '/images/imgm4.jpg' },
    { id: '5', name: 'dosa', price: 10, image: '/images/imgm5.jpg' },
    { id: '6', name: 'dosa', price: 10, image: '/images/imgm6.jpg' },
    { id: '7', name: 'dosa', price: 10, image: '/images/imgm7.jpg' },
    { id: '8', name: 'dosa', price: 10, image: '/images/imgm8.jpg' },
    { id: '9', name: 'dosa', price: 10, image: '/images/imgm9.jpg' },
  ]
  res.render('item5', { item5 });
});

router.get('/item6', function(req, res, next) {
  const item6 = [
    { id: '1', name: 'Atta', price: 10, image: '/images/imgit6e1.jpg' },
    { id: '2', name: 'Atta', price: 10, image: '/images/imgit6e2.jpg' },
    { id: '3', name: 'Rice', price: 10, image: '/images/imgit6e3.jpg' },
    { id: '4', name: 'Long Rice', price: 10, image: '/images/imgit6e4.jpg' },
    { id: '5', name: 'Sattu', price: 10, image: '/images/imgit6e5.jpg' },
    { id: '6', name: 'Sooji', price: 10, image: '/images/imgit6e6.jpg' },
    { id: '7', name: 'Poha', price: 10, image: '/images/imgit6e7.jpg' },
    { id: '8', name: 'Besan', price: 10, image: '/images/imgit6e8.jpg' },
    { id: '9', name: 'Toor Dal', price: 10, image: '/images/imgit6e9.jpg' }
  ]
  res.render('item6', { item6 });
});

router.get('/order', function(req, res, next) {
  res.render('order');
});

router.post("/order", async (req, res) => {
  try {
    const { name,
      order1,
      number,
      howmuch,
      date,
      address,
      message} = req.body;
      

    // Save the form data to MongoDB
    const newForm = new userModel({ name, order1, number, howmuch, date, address, message });
    await newForm.save();

    console.log("Form data saved:", newForm);

    // Redirect to the form page
    res.redirect("/order");
  } catch (err) {
    console.error("Error saving form data:", err);
    res.status(500).send("An error occurred while saving the data.");
  }
});

router.post('/add-to-cart', (req, res) => {
  const { id, name, price, image } = req.body;

  // Check if item already exists in cart
  const existingItem = req.session.cart.find(item => item.id === id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    req.session.cart.push({ id, name, price, quantity: 1, image});
  }

  res.redirect('/cart'); // Redirect to cart page
});

router.post('/remove-from-cart', (req, res) => {
  const { id } = req.body;

  // Filter out the item with the given ID
  req.session.cart = req.session.cart.filter(item => item.id !== id);

  res.redirect('/cart'); // Redirect back to cart page
});

router.post('/checkout', (req, res) => {
  const { paymentMethod } = req.body;

  if (!req.session.cart || req.session.cart.length === 0) {
    return res.redirect('/cart');
  }

  // Save order details (In a real app, you’d store this in a database)
  const order = {
    cart: req.session.cart,
    paymentMethod,
    total: req.session.cart.reduce((total, item) => total + item.price * item.quantity, 0),
  };

  // Clear cart after checkout
  req.session.cart = [];

  res.render('order-confirmation', { order });
});

router.post("/update-cart", (req, res) => {
  const { itemId, action } = req.body;
  let cart = req.session.cart || [];

  cart = cart.map(item => {
      if (item.id === itemId) {
          if (action === "increase") item.quantity++;
          if (action === "decrease" && item.quantity > 1) item.quantity--;
      }
      return item;
  });

  req.session.cart = cart;
  res.json({ success: true, cart });
});







module.exports = router;
