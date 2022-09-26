module.exports = {
  rules: {
    "vue-component": {
      create: function(context) {
        return {
          MemberExpression: (node) => {
            // console.log(node)
            // console.log(node.loc.start,node.object.name,node.property.name,node.property.loc.end)
            if(node.object.name === 'Vue' && node.property.name === 'component'){
              context.report({
                loc: {
                  start:node.loc.start,
                  end:node.property.loc.end
                },
                node,
                message: "禁止使用 Vue.component 全局方法",
              });
            }
          }
        }
      }
    }
  }
}
