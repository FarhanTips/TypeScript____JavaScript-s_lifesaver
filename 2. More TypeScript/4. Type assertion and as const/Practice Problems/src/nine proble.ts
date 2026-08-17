


const appConfig = {
    theme: "dark",
    version: 2
} as const;

// Cannot assign to 'theme' because it is a read-only property.
// appConfig.theme = "light"; // Error


// Derive a union type from an array
const colors = ["red", "green", "blue"] as const;

type Color = typeof colors[number];

// Color = "red" | "green" | "blue"

const myColor: Color = "red"; // ok

