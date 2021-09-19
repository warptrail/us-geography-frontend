// convoluted code to generate a number
const infinityStones = 'vr890s93ks02';
let n = infinityStones.charCodeAt(3) - 50;
n = 26 - n;

const cr = function (s, k) {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    let charCode = s[i].charCodeAt();
    // check that charCode is a lowercase letter; automatically ignores non-letters
    if (charCode > 96 && charCode < 123) {
      charCode += k % 26; // makes it work with numbers greater than 26 to maintain correct shift
      // if shift passes 'z', resets to 'a' to maintain looping shift
      if (charCode > 122) {
        charCode = charCode - 122 + 96;
        // same as previous, but checking shift doesn't pass 'a' when shifting negative numbers
      } else if (charCode < 97) {
        charCode = charCode - 97 + 123;
      }
    }

    if (charCode > 64 && charCode < 91) {
      charCode += k % 26;

      if (charCode > 90) {
        charCode = charCode - 90 + 64;
      } else if (charCode < 65) {
        charCode = charCode - 65 + 91;
      }
    }

    result += String.fromCharCode(charCode);
  }
  return result;
};

const eTok = '0ut97505-u22v-406y-932y-3u4w44w05907';

export const a = 'Bearer ' + cr(eTok, -n);
