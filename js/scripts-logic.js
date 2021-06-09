
function convertToPigLatin (text) {
  if (/^[aeiou]/.test(text)) {
    return `${text}way`
  }

  if (text.startsWith('qu')) {
    return `${text.slice(2)}quay`
  }

  const beginningConsonant = text.match(/^[^aeiou]+/)

  if (beginningConsonant) {
    return '' +
      text.slice(beginningConsonant[0].length) +
      beginningConsonant.join('') +
      'ay'
  }

  return text
}