---
title: AST
order: 4
group:
  path: /
nav:
  title: 设计文档
  order: 3
  path: /design
---

# 抽象语法树

## 什么是抽象语法树

抽象语法树（Abstract Syntax Tree，AST），或简称语法树（Syntax tree），是源代码语法结构的一种抽象表示。它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。之所以说语法是“抽象”的，是因为这里的语法并不会表示出真实语法中出现的每个细节。

![图片描述](https://cdn.jsdelivr.net/gh/18613109040/editor/public/images/07.png)

[在线AST转换工具](https://astexplorer.net/)

## 解析过程

### 分词

将整个代码字符串分割成语法单元数组

Js中语法单元包括:

- 关键字：const、let、var等
- 标识符：可能是一个变量，也可能是 if、else 这些关键字，又或者是 true、false 这些常量
- 运算符
- 数字
- 空格
- 注释

![图片描述](https://cdn.jsdelivr.net/gh/18613109040/editor/public/images/05.png)

### 语法分析

建立分析语法单元之间的关系(简单来说语法分析是对语句和表达式识别)

![图片描述](https://cdn.jsdelivr.net/gh/18613109040/editor/public/images/06.png)
