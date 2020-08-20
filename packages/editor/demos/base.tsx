import React, { ReactElement } from 'react'
import CodeEditor from '@hy/code-editor';


const Home: React.FC = (): ReactElement => {

  return <CodeEditor
    value= "function add(a, b){ return a+b };"
    mode="javascript"
    hintOptions={{
      completeSingle: false,
      keywords: ['zs', 'lis']
    }}
  />
}
export  default Home
