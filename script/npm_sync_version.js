const version = process.env["VERSIONS"];
if (!version || !/^\d+(.\d+)*/ig.test(version)) {
  throw new Error("version is not legal");
  process.exit(1)
} else {
  const fs = require("fs")
  const package = JSON.parse(fs.readFileSync("package.json"))
  package.version = version;
  fs.writeFileSync("package.json", JSON.stringify(package, null, 4))
  console.log(package)
}