import { IVariableData, IFuncTree } from './interface';

export const TYPE_DATA_TAG = {
  '[object String]': {
    type: '文本',
    color: 'magenta',
  },
  '[object Object]': {
    type: '对象',
    color: 'gold',
  },
  '[object Array]': {
    type: '数组',
    color: 'blue',
  },
  '[object Number]': {
    type: '数字',
    color: 'purple',
  },
  '[object Date]': {
    type: '时间',
    color: '#87d068',
  },
};

export const VARIABLE_DATA: IVariableData[] = [
  {
    title: '页面变量',
    key: '$page',
    props: [
      {
        key: '$page.productName',
        title: '产品名称',
        value: '衣服',
      },
      {
        key: '$page.productId',
        title: '产品ID',
        value: '123',
      },
    ],
  },
  {
    title: '系统变量',
    key: '$system',
    props: [
      {
        key: '$system.userName',
        title: '用户名',
        value: '张三',
      },
    ],
  },
];

export const FUNCTION_TREE: IFuncTree[] = [
  {
    key: '0',
    title: '常用函数',
    children: [
      {
        key: '0-1',
        title: 'SUM',
        name: "FX.SUM()",
        description: `
SUM函数可以获取一组数值的总和
用法：SUM(数字1,数字2,...)
示例：SUM(语文成绩,数学成绩, 英语成绩)返回三门课程的总分
`,
      },
      {
        key: '0-2',
        title: 'GETUSERNAME',
        name: "FX.GETUSERNAME()",
        description: `
GETUSERNAME函数可以获取当前用户的昵称
用法：GETUSERNAME()
示例：略
`,
      }
    ],
  },
];
