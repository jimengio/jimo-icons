webfontsGenerator = require 'webfonts-generator';
fs = require 'fs'
path = require 'path'

icons = require './icons'

srcFile = path.join __dirname, '../src/jimo-icon.tsx'
sourceCode = fs.readFileSync srcFile, 'utf8'
separator = '\n  // icons list\n'
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

webfontsGenerator
  files: icons.map((x) -> "svg/#{x}.svg")
  dest: 'src/fonts/'
  cssDest: 'src/fonts/jimo.css'
  html: true
  htmlDest: 'src/fonts/index.html'
  types: ["eot", "woff", "woff2", "ttf", "svg"]
  fontName: 'jimo'
  templateOptions:
    classPrefix: 'jimo-'
    baseSelector: '.jimo'
, (error) ->
  if error
    console.log('Fail!', error);
  else
    console.log('Done!');

