import ProxySandbox from "./proxySandbox"
import { IOptions } from "./interfaces"

export default function createSandbox(context: any, options: IOptions) {
  if(window.Proxy) context = new ProxySandbox(context, options = {}).proxy
  const sandbox = (script: string) => {
    try {
      return new Function('context', `with (context) { return (function(){ return ${script}})()}`)(context)
    } catch (error) {
      return error
    }
  }
  sandbox.context = context
  sandbox.exec = sandbox
  return sandbox
}
