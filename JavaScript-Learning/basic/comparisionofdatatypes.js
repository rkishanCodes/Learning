console.log(0<2)// cannot perform increment (or decrement) operations directly on boolean values

console.log("0"<2)
console.log(0<"2")//JavaScript converts the string to a number.

console.log(2-"2")//JavaScript converts the string to a number.

console.log(2+"2");//concat 22

console.log(null>0);//null is treated as a special case therefore no staraight forward comparision
console.log(null==0);// does not implicitly convert null to a numeric value
console.log(null>=0); //operator performs type implicitly conversion


console.log(undefined>0);//false as no implicity conversion takes place
console.log(undefined==0);//false as no implicity conversion takes place
console.log(undefined>=0);//false as no implicity conversion takes place

console.log("2"==2)
console.log("2"===2)//strict comaprision inlcuding data type

