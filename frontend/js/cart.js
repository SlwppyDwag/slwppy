import { db } from "./firebase.js";
import { collection, addDoc } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

let cart = [];

export function addToCart(name, price){
  cart.push({ name, price });
  alert("Added to cart");
}

export async function placeOrder(){
  await addDoc(collection(db, "orders"), {
    items: cart,
    time: new Date()
  });
  alert("Order placed successfully!");
  cart = [];
}
