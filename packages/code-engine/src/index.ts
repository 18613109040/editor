const babel = require("@babel/core")

const { ast } = babel.transformSync("return a + b", { ast: true, code: false })

console.dir(ast)
