const fs = require('fs')

const path = './assets/icons/'
fs.mkdirSync(path + 'formatted', { recursive: true })

const files = fs
  .readdirSync(path)
  .map((file) => (file.slice(-4) === '.svg' ? file : null))
  .filter(Boolean)

function getUnicode(index) {
  return '"\\EA' + ('0' + index.toString(16)).slice(-2) + '"'
}

fs.readFile('./assets/scss/_icons.scss', 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }

  const start = data.indexOf('$fontIcons:')
  const end = data.indexOf(';', start)
  const cutRemove = data.slice(start, end + 1)

  const newData =
    '$fontIcons:\n' +
    files
      .map(
        (file, index) =>
          '\x09' + file.slice(0, -4) + ' ' + getUnicode(index + 1)
      )
      .join(',\n') +
    ';'

  const result = data.replace(cutRemove, newData)

  fs.writeFile('./assets/scss/_icons.scss', result, 'utf8', function (err) {
    if (err) {
      return console.log(err)
    }
  })
})
