const { writeFileSync } = require('fs')
const { YaddaEnso } = require('./themes')
const getColors = require('./getColors')
const getTokenColors = require('./getTokenColors')
const palette = require('./palette')

const themeMeta = Object.assign(palette, YaddaEnso)
const colors = getColors(themeMeta)
const tokenColors = getTokenColors(themeMeta)

const content = {
  colors,
  tokenColors,
}

writeFileSync('./themes/yaddaenso.json', JSON.stringify(content))
