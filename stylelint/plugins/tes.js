// Abbreviated asynchronous example
const stylelint = require("stylelint")
const utils = require('./utils')

const ruleName = "plugin/foo-bar-async"
const messages = stylelint.utils.ruleMessages(ruleName, {
  expected: "Expected ..."
})
const meta = {
  /* .. */
}
const rule = stylelint.createPlugin(
  ruleName,
  (primaryOption) => {
    return (postcssRoot, postcssResult) => {
      const validOptions = stylelint.utils.validateOptions(postcssRoot, postcssResult, {
        actual: primaryOption
      })
      if (!validOptions) {
        return
      }

      postcssRoot.walkRules(ruleNode => {
        utils.check(ruleNode, stylelint.utils.report, ruleName, postcssResult)
      })
    }
  }
)

rule.ruleName = ruleName
rule.messages = messages
rule.meta = meta

module.exports = rule
