var user4;
user4 = ["abc", 12];
var rgb;
rgb = [255, 122, 1333];
var user5 = [122, "dd", true];
user5[1] = "er"; // bad behaviour as it overrides user5 even after decalring as const
user5.push(true); // not following the order of the datatypes
user5.push("bcx");
console.log(user5);
