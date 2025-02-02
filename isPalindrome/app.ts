function isPalindrome(s: string): boolean {
  const x = s.replace(/[^0-9a-z]/gi, "").toLocaleLowerCase();

  for (let index = 0; index < x.length; index++) {
    if (x[index] !== x[x.length - 1 - index]) return false;
  }
  return true;
}

console.log(isPalindrome("raceacar"));
