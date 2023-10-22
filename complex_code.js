/* 
 * Filename: complex_code.js
 * Description: This code demonstrates a complex and elaborate implementation of a shopping cart system. 
 *              It includes various functions and classes to manage products, customers, and orders.
 */

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    if (quantity <= 0) {
      throw new Error("Quantity should be a positive number.");
    }
    this.items.push({ product, quantity });
  }

  removeItem(id) {
    const index = this.items.findIndex(item => item.product.id === id);
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (const item of this.items) {
      totalPrice += item.product.price * item.quantity;
    }
    return totalPrice;
  }
}

class Customer {
  constructor(id, name, address) {
    this.id = id;
    this.name = name;
    this.address = address;
  }
}

class Order {
  constructor(id, customer, cart) {
    this.id = id;
    this.customer = customer;
    this.cart = cart;
    this.date = new Date();
    this.isPaid = false;
  }

  calculateTotalPrice() {
    return this.cart.getTotalPrice();
  }

  pay() {
    this.isPaid = true;
    // code to process payment
  }
}

// Create some products
const product1 = new Product("P001", "Shirt", 25.99);
const product2 = new Product("P002", "Jeans", 59.99);
const product3 = new Product("P003", "Shoes", 89.99);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 2);
cart.addItem(product2, 1);
cart.addItem(product3, 3);

// Remove an item from the cart
cart.removeItem("P001");

// Create a customer
const customer = new Customer("C001", "John Doe", "123 Main St, City");

// Create an order
const order = new Order("O001", customer, cart);

// Output order details
console.log(`Order ID: ${order.id}`);
console.log(`Customer Name: ${order.customer.name}`);
console.log(`Total Price: $${order.calculateTotalPrice().toFixed(2)}`);

// Process payment
order.pay();

// Output payment status
console.log(`Payment Status: ${order.isPaid ? "Paid" : "Pending"}`);
console.log(`Order Date: ${order.date.toISOString()}`);