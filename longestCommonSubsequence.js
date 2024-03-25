function lcs(text1, text2) {
  let n = text1.length;
  let m = text2.length;
  let len = Array(n + 1).fill(Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (text1[i - 1] == text2[j - 1]) {
        len[i][j] = len[i - 1][j - 1] + 1;
      } else {
        len[i][j] = Math.max(len[i - 1][j], len[i][j - 1]);
      }
    }
  }
  return len[n][m];
}

let text1 = "abcde";
let text2 = "ace";
console.log(lcs(text1, text2));

text1 = "abc";
text2 = "abc";
console.log(lcs(text1, text2));

text1 = "abc";
text2 = "def";
console.log(lcs(text1, text2));

/*

 Time Complexity: O(n*m) where n is the length of text1 and m is the length of text2
 Space Complexity: O(n*m) where n is the length of text1 and m is the length of text2
 
*/
