module.exports = {
  // 定制格式化要求
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json'
      }
    }
  ],
  printWidth: 150, // 指定每行代码的最大长度，超过该长度将自动换行。
  tabWidth: 4, // 指定一个制表符等于的空格数。
  semi: true, // 行尾需要有分号
  singleQuote: true, // 使用单引号而不是双引号
  useTabs: false, // 指定是否使用制表符进行缩进，如果设置为true，则使用制表符进行缩进，如果设置为false，则使用空格进行缩进。
  quoteProps: 'preserve', // 指定对象属性是否始终使用引号，可选值为as-needed、consistent、preserve。
  jsxSingleQuote: false, // 在 JSX 中使用单引号而不是双引号
  trailingComma: 'none', // 指定是否在多行结构的最后一行添加逗号，可选值为none、es5、all。
  bracketSpacing: true, // 大括号内的首尾需要空格
  bracketSameLine: false, // 将多行 HTML（HTML、JSX、Vue、Angular）元素反尖括号需要换行
  arrowParens: 'always', // 指定箭头函数的参数是否始终使用括号，可选值为 avoid、always。
  rangeStart: 0, // 每个文件格式化的范围是开头-结束
  rangeEnd: Infinity, // 指定要格式化的代码范围的结束位置。
  requirePragma: false, // 指定是否需要在文件顶部添加特殊注释来触发格式化。
  insertPragma: false, // 指定是否在格式化后的文件顶部插入特殊注释。
  proseWrap: 'preserve', // 指定是否将Markdown文本视为折行文本，可选值为 always、never、preserve。
  htmlWhitespaceSensitivity: 'css', // 指定HTML文件中空格敏感度的处理方式，可选值为css、strict、ignore。
  vueIndentScriptAndStyle: false, //（默认值）对于 .vue 文件，不缩进 <script> 和 <style> 里的内容
  endOfLine: 'lf', // 指定换行符的类型，可选值为"auto"、"lf"、"crlf"、"cr"。
  embeddedLanguageFormatting: 'off' //指定对嵌入式语言（如HTML、CSS）的格式化方式，可选值为"auto"、"off"。
};
