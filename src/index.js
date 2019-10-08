const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    //let str = '0000101010';
let result='';

function symbol(str){

   let symbol_morse='';

   for(let i = 0; i < 10; i+=2){

            if(str[i]+str[i+1]=='10'){
               symbol_morse+='.';
      }else if(str[i]+str[i+1]=='11'){
               symbol_morse+='-';
      }else if(str[i]=='*'){
               return symbol_morse=' ';
      }

   }
   

   return MORSE_TABLE[symbol_morse];
}

   for (let j = 0; j < expr.length-1; j+=10){
      result+=symbol(expr.substr(j,10));
   }
   

   return result;
}

module.exports = {
    decode
}