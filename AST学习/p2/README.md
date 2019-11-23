
#### Parser API

#### 节点对象 Node
- type：节点类型：  
    Program-程序
    - 节点属性-body：陈述数组[ Statement ]
    
    Function-函数
    - 节点属性-id：Identifier | null
    - 节点属性-params：参数
    - 节点属性-defaults：表达式数组[ Expression ]
    - 节点属性-rest：Identifier | null
    - 节点属性-body：BlockStatement | Expression
    - 节点属性-generator：boolean
    - 节点属性-expression：boolean
 
    Statement-陈述(比如var a = a + 1),是一个过程  
     - EmptyStatement：空声明
     - BlockStatement：块语句声明
         - 节点属性-body：陈述数组[ Statement ]
     - ExpressionStatement：表达式声明
         - 节点属性-expression：Expression
     - IfStatement ：if声明
         - 节点属性-test：Expression
         - 节点属性-consequent：Statement
         - 节点属性-alternate：Statement 
     - LabeledStatement ：break/ continue
     - ContinueStatement：break/ continue
     - BreakStatement：break/ continue
     - WithStatement：with声明
        - 节点属性-object：Expression 
        - 节点属性-body：Statement 
     - SwitchStatement：switch声明
     - ReturnStatement：return声明
     - ThrowStatement：throw声明
     - TryStatement：try声明
     - WhileStatement ：while声明
     - DoWhileStatement ：do/while声明
     - ForStatement ：for声明
     - ForInStatement ：for/in声明
     - ForOfStatement ：for/of声明
     - LetStatement ：let声明
     - DebuggerStatement ：debugger声明  
     
     Declaration：声明(比如var),描述
     - FunctionDeclaration：函数
        - 节点属性-id 
        - 节点属性-params：参数数组[ Pattern ] 
        - 节点属性-defaults：表达式数组[ Expression  ] 
        - 节点属性-body：BlockStatement | Expression
     - VariableDeclaration：声明变量
        - 节点属性-declarations：描述[ VariableDeclarator ] 
        - 节点属性-kind："var" | "let" | "const" 
     - Expression：表达式
        - ThisExpression：this表达式
        - ArrayExpression：数组表达式
            - 节点属性-elements：表达式数组
        - Property：对象
        - FunctionExpression：函数表达式
        - ArrowExpression ：箭头函数
        - SequenceExpression  ：序列表达式
        - SequenceExpression  ：序列表达式
  
- loc：位置信息(SourceLocation )
    - source：数据源
    - start：开始位置(Position)
        - line：行信息
        - column：列信息
    - end：结束位置(Position )

