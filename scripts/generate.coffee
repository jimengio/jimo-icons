
fs = require('fs')

fontCarrier = require('font-carrier')
icons = require('./icons')

initialFontValue = 0x1000

String.fromCharCode(initialFontValue)

fonts = fontCarrier.create()

dict = {}

icons.forEach (icon) ->   
  initialFontValue += 1
  char = String.fromCharCode initialFontValue
  fonts.setSvg(char, fs.readFileSync("./svg/#{icon}.svg").toString())
  dict[icon] = char

fonts.output
  path: './src/fonts/jimo'

content = "module.exports = #{JSON.stringify(dict, null, 2)}\n"

fs.writeFileSync "./src/fonts.js", content
