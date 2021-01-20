// O(n) time (?) | O(n) space
function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}