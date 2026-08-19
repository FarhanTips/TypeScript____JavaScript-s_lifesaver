


class User {
    private _name: string;  // The underscore does NOT make the variable private. name is private because the keyword private. using underscore is convention.
    private _age: number;
    private _email: string;

    constructor(name: string, age: number, email: string) {
        this._name = name;
        this._age = age;
        this._email = email;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value < 0 || value > 100) {
            throw new Error("Age is not valid!");
        }

        this._age = value;
    }
}

const user = new User("Abul", 27, "abul@kabul.com");

user.age = 30;

console.log(user.age);




// A getter is used when we want to read/access a value. We use it like a normal property. A getter cannot take arguments. Getter → must return a value.

// A setter is used when we want to change/update a value. A setter can take exactly one parameter. A setter cannot return a value.


