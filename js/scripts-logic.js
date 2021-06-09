const vowels = ['a', 'e', 'i', 'o', 'u']

function convertToPigLatin (text) {
  let vowelIndex = vowels.indexOf(text[0])

  if (vowelIndex > -1) {
    return `${text}way`
  }

  const beginningConsonant = text.match(/^[^aeiou]+/)

  if (beginningConsonant) {
    return '' +
      text.slice(beginningConsonant.length) +
      beginningConsonant.join('') +
      'ay'
  }

  return text
}