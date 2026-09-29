function charFrequency(str) {
  const freq = {};
  for (const char of str.toLowerCase()) {
    if (char === ' ') continue; // skip spaces
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}
console.log(charFrequency('Hello World'));
