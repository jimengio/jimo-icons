webfontsGenerator = require 'webfonts-generator';
fs = require 'fs'

webfontsGenerator
  files: fs.readdirSync('svg').sort().map((x) -> "svg/#{x}")
  dest: 'src/fonts/'
  cssDest: 'src/fonts/jimo.css'
  html: true
  htmlDest: 'src/fonts/index.html'
  types: ["eot", "woff", "woff2", "ttf", "svg"]
  fontName: 'Jimo'
  templateOptions:
    classPrefix: 'jimo-'
    baseSelector: '.jimo'
, (error) ->
  if error
    console.log('Fail!', error);
  else
    console.log('Done!');
