function logDescription (description) {
  console.log(`%c ${description}`, 'font-weight: bold;')

  $('#output-tests li:last-child')
    .addClass('text-light')
    .append(`
    <h6 class="font-bold">${description}</h6>
  `)
}

function logResult (actual, expected) {
  if (actual !== expected) {
    console.log(
      `%c -- Incorrect | actual: ${actual} | expected: ${expected}`,
      'background-color: #290000',
    )

    $('#output-tests li:last-child')
      .addClass('bg-danger')
      .append(`
      <p>Incorrect | actual: ${actual} | expected: ${expected}</p>
    `)
  } else {
    console.log('%c -- passed!', 'background-color: green')

    $('#output-tests li:last-child').addClass('bg-success')
  }
}

const tests = [
  function () {
    logDescription('convertToPigLatin(): Returns a blank string if a blank string is provided')

    const actual = convertToPigLatin('')
    const expected = ''

    logResult(actual, expected)
  },

  function () {
    logDescription('convertToPigLatin(): It correctly works with "a" at the beginning')

    const actual = convertToPigLatin('away')
    const expected = 'awayway'

    logResult(actual, expected)
  },

  function () {
    logDescription('convertToPigLatin(): It correctly works with "e" at the beginning')

    const actual = convertToPigLatin('energy')
    const expected = 'energyway'

    logResult(actual, expected)
  },

  function () {
    logDescription('convertToPigLatin(): It correctly works with "i" at the beginning')

    const actual = convertToPigLatin('in')
    const expected = 'inway'

    logResult(actual, expected)
  },

  function () {
    logDescription('convertToPigLatin(): It correctly works with "o" at the beginning')

    const actual = convertToPigLatin('out')
    const expected = 'outway'

    logResult(actual, expected)
  },

  function () {
    logDescription('convertToPigLatin(): It correctly works with "u" at the beginning')

    const actual = convertToPigLatin('under')
    const expected = 'underway'

    logResult(actual, expected)
  },

  function () {
    logDescription('convertToPigLatin(): It correctly works with a single consonant at the beginning')

    const actual = convertToPigLatin('count')
    const expected = 'ountcay'

    logResult(actual, expected)
  },

  function () {
    logDescription('convertToPigLatin(): It correctly works with a different single consonant at the beginning')

    const actual = convertToPigLatin('balloon')
    const expected = 'alloonbay'

    logResult(actual, expected)
  },

  function () {
    logDescription('convertToPigLatin(): It correctly works with a multiple consonants at the beginning')

    const actual = convertToPigLatin('plot')
    const expected = 'otplay'

    logResult(actual, expected)
  },

  function () {
    logDescription('convertToPigLatin(): It correctly works with "qu" at the beginning')

    const actual = convertToPigLatin('queen')
    const expected = 'eenquay'

    logResult(actual, expected)
  },

  function () {
    logDescription('convertToPigLatin(): It should convert everything to lowercase')

    const actual = convertToPigLatin('aPPLe')
    const expected = 'appleway'

    logResult(actual, expected)
  },

  function () {
    logDescription('convertToPigLatin(): It should work when vowels are capitalized')

    const actual = convertToPigLatin('Array')
    const expected = 'arrayway'

    logResult(actual, expected)
  },

  function () {
    logDescription('convertToPigLatin(): It should work when consonants are capitalized')

    const actual = convertToPigLatin('PHone')
    const expected = 'onephay'

    logResult(actual, expected)
  },

  function () {
    logDescription('convertToPigLatin(): It should work when "qu" are capitalized')

    const actual = convertToPigLatin('QUeen')
    const expected = 'eenquay'

    logResult(actual, expected)
  },

  function () {
    logDescription('convertToPigLatin(): It should ignore any numbers')

    const actual = convertToPigLatin('he42llo')
    const expected = 'ellohay'

    logResult(actual, expected)
  },

  function () {
    logDescription('convertToPigLatin(): It should ignore non-characters such as periods')

    const actual = convertToPigLatin('he.l,l!o')
    const expected = 'ellohay'

    logResult(actual, expected)
  },

  function () {
    logDescription('convertToPigLatinMultiple(): It returns correctly with a single word')

    const actual = convertToPigLatinMultiple('hello')
    const expected = 'ellohay'

    logResult(actual, expected)
  },

  function () {
    logDescription('convertToPigLatinMultiple(): It returns correctly with multiple words')

    const actual = convertToPigLatinMultiple('hello there apple')
    const expected = 'ellohay erethay appleway'

    logResult(actual, expected)
  },
]

function runTests () {
  tests.forEach(test => {
    $('#output-tests').append(`
      <li class="list-group-item" />
    `)

    test()
  })
}

runTests()