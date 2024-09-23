//in js valed defined but not assigned we will get undefined
//if using a not deined varaible the : ReferenceError: name is not defined

const accountName="a"
let accountId=202
var password=1234
accountCity="kar"


//accountName="n" const cannot be re assigned
accountId=203// let can be reassigned
password=12345//var cam be reassigned

console.log(`${accountName}`);
console.log(`${accountId}`);
console.log(`${password}`);

console.table([accountId,accountName]);


