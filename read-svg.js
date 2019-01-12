const fs = require("fs");
const SvgPath = "./svg/";
const OutputFileName = "svg-map.json";
const OutputFilePath = `${SvgPath}${OutputFileName}`;

function formatFile(arr) {
  return arr.filter(item => /(.svg)$/.test(item)).map(item => `svg/${item}`);
}

fs.readdir(SvgPath, (err, files) => {
  if (err) {
    console.warn("read error");
    return;
  } else {
    const filePathArr = formatFile(files);

    fs.writeFile(
      OutputFilePath,
      JSON.stringify(filePathArr, null, "\t"),
      err => {
        if (err) {
          return console.warn("Write file error: ", err);
        } else {
          return console.log(
            `Enter ${filePathArr.length}/${files.length} SVG files in ${OutputFilePath}`
          );
        }
      }
    );
    return;
  }
});
