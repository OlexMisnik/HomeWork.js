function alphabetPosition(text) {
  var alf = {
    'A': '0', 'B': '1', 'C': '2', 'D': '3', 'E': '4', 'F': '5', 'G': "6", "H": '7', 'I': "8", 'J': "9", 'K': "10", 'L': "11", 'M': "12", 'N': "13", 'O': "14", 'P': "15", 'Q': "16", 'R': "17", 'S': "18", 'T': "19", 'U': "20", 'V': "21", 'W': "22", 'X': "23", 'Y': "24", 'Z': "25"
  };
  const newtext = text.toUpperCase();
  if (newtext.length == 1) return alf[newtext] || " ";
  // console.log(alf);

  return newtext.split("").map(alphabetPosition).join(" ");
}

console.log(alphabetPosition("j"));
console.log(alphabetPosition("abc"));
console.log(alphabetPosition("The sunset sets at twelve o' clock."));