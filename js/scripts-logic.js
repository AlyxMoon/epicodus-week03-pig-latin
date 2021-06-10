

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

  let beginningConsonant = word.match(/^[^aeiou]+/) || []
  beginningConsonant = beginningConsonant[0] || ''
  beginningConsonant = beginningConsonant.replace(/qu$/, '')

  if (beginningConsonant) {
    if (
      beginningConsonant[beginningConsonant.length - 1] === 'q' &&
      word[beginningConsonant.length] === 'u'
    ) {
      beginningConsonant = beginningConsonant.slice(0, -1)
    }

    return '' +
      word.slice(beginningConsonant.length) +
      beginningConsonant +
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