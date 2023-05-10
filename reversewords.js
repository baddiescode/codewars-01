// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
    str = str.split(' ');
    str = str.map(x => x.split('').reverse());
    str = str.map(x => x.join(''));
    return str.join(' ');
    }


    function reverseWords(str) {
        // Go for it
        //split words into seperate arrays
        return str.split("").reverse().join("").split(" ").reverse().join(" ");
      }
