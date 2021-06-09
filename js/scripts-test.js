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
]

function runTests () {
  tests.forEach(test => test())
}

runTests()