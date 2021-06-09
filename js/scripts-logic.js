

function convertToPigLatin (word) {
  word = word
    .toLowerCase()
    .replace(/[^a-z]/g, '')

  if (/^[aeiou]/.test(word)) {
    return `${word}way`
  }

  if (word.startsWith('qu')) {
    return `${word.slice(2)}quay`
  }

  const beginningConsonant = word.match(/^[^aeiou]+/)

  if (beginningConsonant) {
    return '' +
      word.slice(beginningConsonant[0].length) +
      beginningConsonant.join('') +
      'ay'
  }

  return word
}

function convertToPigLatinMultiple (sentence) {
  sentence = sentence.trim().replace(/ +/g, ' ')

  return sentence
    .split(' ')
    .map(convertToPigLatin)
    .join(' ')
}