const check = (node, report, ruleName, postcssResult) => {
  /*
  * class 为 rule
  * 属性：nodes 子节点
  * 属性：selector 选择器
  * */

  const { nodes = [], type, prop, value, source } = node
  if (type === "rule") {
    nodes.forEach(child => check(child, report, ruleName, postcssResult))
  } else if (type === "decl") {
    if (prop === "align-content" && value === "center") {
      report({
        result: postcssResult,
        ruleName,
        message: "样式已经存在，请使用通用样式!",
        node,
        index: source.start,
        endIndex: source.end
      })
    }
  }
}

module.exports = {
  check
}
