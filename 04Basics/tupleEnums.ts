let user4: [string, number];
user4 = ["abc", 12];

let rgb: [number, number, number];
rgb = [255, 122, 1333];

type data4 = [number, string ,boolean];
const user5: data4 = [122, "dd", true];

user5[1] = "er"; // bad behaviour as it overrides user5 even after decalring as const
user5.push(true); // not following the order of the datatypes
user5.push("bcx"); 

console.log(user5);