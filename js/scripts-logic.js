const vowels = ['a', 'e', 'i', 'o', 'u']

function convertToPigLatin (text) {
  let vowelIndex = vowels.indexOf(text[0])

  if (vowelIndex > -1) {
    text = `${text}way`
  }

  return text
}