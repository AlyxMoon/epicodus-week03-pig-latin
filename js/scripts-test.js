function logDescription (description) {
  console.log(`%c ${description}`, 'font-weight: bold;')
}

function logResult (actual, expected) {
  if (actual !== expected) {
    console.log(
      `%c -- Incorrect | actual: ${actual} | expected: ${expected}`,
      'background-color: #290000',
    )
  } else {
    console.log('%c -- passed!', 'background-color: green')
  }
}

const tests = [
  function () {
    logDescription('Returns a blank string if a blank string is provided')

    const actual = convertToPigLatin('')
    const expected = ''

    logResult(actual, expected)
  },

  function () {
    logDescription('It correctly works with "a" at the beginning')

    const actual = convertToPigLatin('away')
    const expected = 'awayway'

    logResult(actual, expected)
  },

  function () {
    logDescription('It correctly works with "e" at the beginning')

    const actual = convertToPigLatin('energy')
    const expected = 'energyway'

    logResult(actual, expected)
  },

  function () {
    logDescription('It correctly works with "i" at the beginning')

    const actual = convertToPigLatin('in')
    const expected = 'inway'

    logResult(actual, expected)
  },

  function () {
    logDescription('It correctly works with "o" at the beginning')

    const actual = convertToPigLatin('out')
    const expected = 'outway'

    logResult(actual, expected)
  },

  function () {
    logDescription('It correctly works with "u" at the beginning')

    const actual = convertToPigLatin('under')
    const expected = 'underway'

    logResult(actual, expected)
  },

  function () {
    logDescription('It correctly works with a single consonant at the beginning')

    const actual = convertToPigLatin('count')
    const expected = 'ountcay'

    logResult(actual, expected)
  },

  function () {
    logDescription('It correctly works with a different single consonant at the beginning')

    const actual = convertToPigLatin('balloon')
    const expected = 'alloonbay'

    logResult(actual, expected)
  },

  function () {
    logDescription('It correctly works with a multiple consonants at the beginning')

    const actual = convertToPigLatin('grape')
    const expected = 'apegray'

    logResult(actual, expected)
  },
]

function runTests () {
  tests.forEach(test => test())
}

runTests()