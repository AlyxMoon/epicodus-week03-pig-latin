const main = () => {
  $('button').on('click', () => {
    const input = $('textarea').val()
    const output = convertToPigLatinMultiple(input)

    $('#output').text(output)
  })
}

$(main)