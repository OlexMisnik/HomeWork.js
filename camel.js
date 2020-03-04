function toCamelCase(str){

const newstr = str.replace(/-/g,"");
const newstr1 = newstr.replace(/_/g,"");
return newstr1;

}

console.log (toCamelCase("the-stealth-warrior")); 

console.log(toCamelCase("The_Stealth_Warrior"));
