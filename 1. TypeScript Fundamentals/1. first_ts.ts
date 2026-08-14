// TS file node দিয়ে run করলে node file-এর js অংশটুকু রেখে বাকি ts এর অংশ ফেলে দিয়ে run করে, তাই ts এর সঠিক behavior পাওয়া যায় না। তাই সবসময় tsc দিয়ে compile করে js-এ convert করে, js-এর file টা node দিয়ে run করা উচিৎ।

let userName = "Farhan";
userName = "Saumik";
userName = 58;
console.log(userName);

