webfontsGenerator = require 'webfonts-generator';
svgMap = require '../svg/svg-map.json';

webfontsGenerator
  files: svgMap
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
