// Make a simple function called greet that returns the most-famous "hello world!".

function greet (){
    const helloWorld = ("hello world!")
    return helloWorld
  }




// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
// Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash (words) {
  let sentence = ""
  if(words.length === 0) return ""

  
  if(words.length === 1) return words[0]
  
  
  for( let i = 0; i < words.length; i++){
    sentence = sentence + words[i] + " "
  }  
  

   return sentence.trim()

}




// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(n){
    
  if(n % 2 === 0 ){
   return n * 8
  }
  else{
  return n * 9;
  }    
}




// This code does not execute properly. Try to figure out why.

function multiply(a, b){
  product = a * b
  return product
 }




// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

 const DNAtoRNA = dna => dna.replace(/T/g, 'U');