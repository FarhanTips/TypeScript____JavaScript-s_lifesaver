

/**
 * name
 * email
 * age 
 * marks
 */

class Student {
    name:string
    email:string
    age:number
    marks:number

    //constructor ---> special method
    constructor(name:string, email:string, age:number, marks:number) {
        this.name = name
        this.email = email
        this.age = age
        this.marks = marks
    }

    getInfo():string {
        const info = `Name: ${this.name}\nEmail: ${this.email}`
        return info
    }

}

//instantiate
//instance
// const rafi = new Student("Rafi", "rafi@gmail.com", 16, 100)
// const sadia = new Student("Sadia", "sadia@gmail.com", 17, 200)

// console.log(sadia)


/**
 * title
 * soldItems
 */

class ChaShop{
    title:string
    soldItems:any = []    // you can declare type AND value. You don't have to write only the type.


    constructor(title:string) {
        this.title = title
    }


    buy(name:string, price:number) {
      this.soldItems.push({name, price})
    }

    totalSold() {
        const total = this.soldItems.reduce((acc, item) => acc+item.price, 0)
        return total
    }


}


const shop1 = new ChaShop("Tea Shop")
const shop2 = new ChaShop("Cofffe Shop")

shop1.buy("Tea", 10)
shop1.buy("Cake", 15)
shop2.buy("Coffee", 35)

console.log(shop1.totalSold())
console.log(shop2.totalSold())




/**
 * 
 * shop1
 ├── title: "Tea Shop"
 └── soldItems: []       ← Array #1


shop2
 ├── title: "Coffee Shop"
 └── soldItems: []       ← Array #2


 They are not sharing the same array. Every instance gets its own array.
 Every time you do: new ChaShop(...) -- JavaScript creates a new soldItems array for that object.



 Visualize:
                  ChaShop class
                      │
             ┌────────┴────────┐
             ↓                 ↓
          shop1              shop2
             │                 │
       soldItems #1       soldItems #2
             │                 │
       Tea, Cake             Coffee
 */

