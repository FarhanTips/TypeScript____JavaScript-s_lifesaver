


// Type Assertion — as
// Type assertion means: “TypeScript, I know this value better than you do. Treat it as this type.”


let value: unknown;

// value.toUpperCase();  // this will throw an error because type is unknown.
let text = value as string;

// text.toUpperCase();

// value as string tells TypeScript to treat value as a string. It doesn't convert the value. যদি value তে string না আসে তাইলে error দিবে। তাই confident হলেই এটা ব্যবহার করা উচিৎ।


let data : unknown;

interface User{
    name: string,
    email?: string
}

let userData = data as User;
// userData.name; // We can do this using type assertion.





// as const means: “Make this value as specific and readonly as possible.”

// without as const

const kamrul = {
    name : "Kamrul"
};
kamrul.name = "Bogda Kamrul";
console.log(kamrul.name)



const masum = {
    name : "Masum"
} as const;
// masum.name = "Masum Khan";  // will throw an error.
console.log(masum.name)