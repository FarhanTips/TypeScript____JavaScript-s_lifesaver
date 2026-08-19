


class Animal {
    private _name;

    constructor(name:string) {
        this._name = name
    }


    makeSound():void {
        console.log("Animal can make sound")
    }
}


class Cat extends Animal {

   makeSound():void {
       console.log("Meowwwwwwww")
   }   

}

// const cat = new Cat("Billu")
// cat.makeSound()


class Dog extends Animal {

   makeSound():void {
       console.log("Whoof whoof!")
   }   

}

// const dog = new Dog("Dog")
// dog.makeSound()


//// Example 2:

 abstract class Shape{
    abstract area():number
    
    describe() {
        console.log("This is a shape")
    }
    
}



class Circle extends Shape {
    radius:number

    constructor(radius:number) {
        super()

        this.radius = radius
    }

    area(): number {
        return 3.1416 * this.radius * this.radius
    }

}


class Rectangle extends Shape {
    height:number
    width:number
    constructor(height:number, width:number) {
        super()
        this.height = height
        this.width = width
    }

    area():number {
        return this.height * this.width
    }
}

// এখানে একই method area(), কিন্তু দুইটা class-এ দুইভাবে কাজ করছে। এটাই polymorphism-এর মূল idea: One interface/method, many forms/behaviors.

const circle = new Circle(5)
// console.log(circle.area())

// const reactangle = new Rectangle(4, 5)
// console.log(reactangle.area())


// Math.floor()
// Math.ceil()
// Math.random()

// const d = new Date() 
// console.log(d)


