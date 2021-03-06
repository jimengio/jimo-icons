fontCarrier = require('font-carrier')
fs = require 'fs'
path = require 'path'
{ difference } = require 'lodash'

# check icons

icons = require './icons'
currentIcons = fs.readdirSync(path.join(__dirname, '../svg/'))
  .filter (x) -> x.endsWith('.svg')
  .map (x) -> x.replace(".svg", "")

added = difference currentIcons, icons
lostOnes = difference icons, currentIcons
if added.length > 0
  console.warn "Icons found in svg/ but not indexed:", added
  process.exit 1
if lostOnes.length > 0
  console.warn "Icons not found in svg/ folder:", lostOnes
  process.exit 1
console.log "ok, SVG files matche icons list"

# generate types

srcFile = path.join __dirname, '../src/jimo-icon.tsx'
sourceCode = fs.readFileSync srcFile, 'utf8'
newlineChar = require('os').EOL
separator = "#{newlineChar}  // icons list#{newlineChar}"
chunks = sourceCode.split(separator)

getName = (x) ->
  camelName = x[1..]
    .replace /\-(\w)/g, (x, y) ->
      y.toUpperCase()
  "#{x[0]}#{camelName}"

enumLines = icons
  .map (icon) -> "  #{getName(icon)} = #{JSON.stringify(icon)},"
  .join "\n"

newFile = [chunks[0], enumLines, chunks[2]].join separator

fs.writeFileSync srcFile, newFile

console.log 'ok, types are written to tsx file'

# generate fonts

initialFontValue = 0xe000

String.fromCharCode(initialFontValue)

fonts = fontCarrier.create()

dict = {}

icons.forEach (icon) ->
  initialFontValue += 1
  char = String.fromCharCode initialFontValue
  fonts.setSvg(char, fs.readFileSync("./svg/#{icon}.svg").toString())
  dict[icon] = initialFontValue

fonts.output
  path: './src/fonts/jimo'

content = "// This file is generated by script.\nexport default #{JSON.stringify(dict, null, 2)}\n"

fs.writeFileSync "./src/fonts.ts", content

console.log "ok, fonts-carrier runs well"
