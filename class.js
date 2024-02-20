// let product1 = {
//     name: "Apple",
//     price: 10000
//     setPrice(harga) {
//         this.price = price
//     }
// }

class Product { // template object
    #defaultPrice = 0
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    setPrice(harga) {
        this.#defaultPrice = this.price
        this.price = harga
    }
    resetPrice() {
        this.price = this.#defaultPrice
    }
}

let product1 = new Product("Apple", 10000) // { name: "Apple", price: 10000 }
let product2 = new Product("Banana", 20000)
let product3 = new Product("Melon", 30000)
product1.setPrice(15000)
product1.resetPrice()

class Transaction {
    cart = []
    #total = 0

    addToCart(item, qty) { // { name: "melon", price: 30000, qty: 2}
        item.qty = qty
        this.cart.push(item)
    }

}

const transaction = new Transaction()
transaction.addToCart(product3, 2)
transaction.addToCart(product2, 3)

console.log(transaction)


const std = {
    name: "John",
    age: 20
}

std.hobby = "coding"

console.log(std);