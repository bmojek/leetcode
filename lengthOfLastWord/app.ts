function lengthOfLastWord(s: string): number {
  const x = s.trim();
  for (let index = x.length; index > 0; index--) {
    if (x[index] === " ") return x.length - index - 1;
  }
  return x.length;
}

console.log(lengthOfLastWord("Hello World"));
