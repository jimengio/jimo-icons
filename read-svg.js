const fs = require("fs");
const SvgPath = "./svg/";
const OutputFileName = "svg-map.json";
const OutputFilePath = `${SvgPath}${OutputFileName}`;

function formatFile(arr) {
  return arr.map(item => `svg/${item}`);
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
          return console.warn("OutputFileName：", err);
        } else {
          return console.log(
            `Enter ${filePathArr.length} SVG files in ${OutputFilePath}`
          );
        }
      }
    );
    return;
  }
});
