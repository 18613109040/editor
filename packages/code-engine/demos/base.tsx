import React, { ReactElement } from 'react'
import { parse } from '@babel/parser'
import traverse from '@babel/traverse'
import generate from '@babel/generator'
import { transform, transformFromAstAsync } from "@babel/core"
const axios = require('axios')
import "whatwg-fetch"
// import "core-js/stable"
// import "regenerator-runtime/runtime"

const Base: React.FC =  (): ReactElement => {
  const getUserId = async () => {
    const res = await axios.get("https://s.igola.com/web-gateway/api-data-service/data/find-oversea-hot/EN")
    return res.data.resultCode
  }
  const getUserId1 = async () => {
    const res = await axios.get("https://s.igola.com/web-gateway/api-data-service/data/find-oversea-hot/EN")
    return res.data.result.hot[0].a
  }
  const log = (str: any) => console.log(str)
  window.HY = {
    getUserId,
    getUserId1,
    log
  }
  const code = `(async function() {
    if(HY.getUserId() === 200) { console.log("xxxx"); return HY.getUserId() + "200" + HY.getUserId1() }
    else { return "xxxxx" }
  })()`
  const ast = parse(code)
  const visitor = {
    enter(path: any) {
      if(path.node.type === "FunctionDeclaration") {
        path.node.async = true
      }
      if(path.node.type === "MemberExpression") {
        // @ts-ignore
        path.node.object.name = `await ${path.node.object.name}`
      }
      if(path.node.type === "CallExpression") {
        // @ts-ignore
        path.node.callee.name =  `await ${path.node.callee.name}`
      }
    }
  }
  traverse(ast, visitor)
  const output = generate(ast, {
    comments: false
  }).code;
  const es5code = transform(output, {
    presets: [
      [require("@babel/preset-env"), {
        "modules": false
      }]
    ],
    // plugins: [
    //   require("@babel/plugin-transform-runtime")
    // ]
  })?.code
  console.dir(es5code)
  eval(es5code!).then((res: any) => console.dir(res))
  // const res = new Function('context', `with (context) { ${es5code} }`)({HY: window.HY})
  // console.dir(res)
  return (<div> ss</div>)
}
export default Base
