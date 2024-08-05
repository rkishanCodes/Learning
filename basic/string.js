console.log("1"+"2");
console.log("1"+'2');

const name="R"+"kishan"

console.log(name);

const add=1+2// exrpression can be assigned
console.log(add);

const subject="math"
const mark="100"

//this is called concatenation
console.log("Marks scored in subject "+subject+" is "+mark)//old // line breat is not possible

//new 
//template literals or strings
//`` backticks
//${} syntax allows you to embed expressions (variables, calculations, or functions)
// directly within the string. This process is known as "string interpolation."

console.log(`Marks scored in 
            subject ${subject}
            is ${mark}`) // line break is possibles but in ouput spaces of  line brakes will be calculated


//another way define String  using String constructor

const s=new String("STUDENT")

console.log(s)

// without new it will normal type conversion


console.log(s.big())
console.log(s.bold())
//The bold() method doesn't directly affect the visual representation when logged to the console.
// Its effect becomes apparent when the string is used in an HTML context.

console.log(s.toLowerCase())
console.log(s.charAt(2))
console.log(s.indexOf("U"))

console.log(s.substring(2,3))//- will be ingnored at starting
console.log(s.slice(-8,3))

let str = "    Hello,World!      ";
console.log(str.substring(7,1)) // substring, if the start index is greater than the end index, the substring method swaps the indices.

console.log(str.slice(2,7))

console.log(str.length)

console.log(str.trim().length)//trim removes spaces but the value doest change because of stack concept

// str=str.trim()
console.log(str.replace('Hello',"Hi"))// still the value of the string does not change

console.log(str);
console.log(str.includes('Hello'))
console.log(str.includes('p'))

console.log(str.split(" "))





