

#### css 功能扩展
+ 嵌套功能
+ 父选择器 
```sass
a {
    body.firefox & { font-weight: normal; }
}

body.firefox a { font-weight: normal; }
```
+ 属性嵌套
```sass
.funky {
  font: {
    family: fantasy;
    size: 30em;
    weight: bold;
  }
}

.funky {
  font-family: fantasy;
  font-size: 30em;
  font-weight: bold; 
}

```

#### sass 脚本
+ 变量：$
+ 插值语句 #{}

#### @-Rules 指令
+ @import 导入文件按
    + 导入多个 @import "rounded-corners", "text-shadow";
    + 分音 (Partials)  _colors.sass 不会被编译成 colors.css
+ @extend 引用其他央视
+ @at-root 退回上一层
```sass
.parent {
  @at-root .child { ... }
}

.parent { ... }
.child { ... }
```
+ @use "src/corners" as c/* 应用其他文件并使用函数
+ 

#### 流程控制语句
+ @if 1 + 1 == 2 { border: 1px solid; }
+ @else if $test = 1 {}
+ @else {color: black;}
+ @for $i from 1 through 3 {.item-#{$i} { width: 2em * $i; }}
+ @each $animal in puma, sea-slug, egret, salamander {.#{$animal}-icon {background-image: url('/images/#{$animal}.png');}}

#### 混合
+ @mixin compound{}
+ @mixin sexy-border($color, $width){}
+ 向混合样式中导入内容  @content;
```sass
@mixin apply-to-ie6-only {
  * html {
    @content;
  }
}
@include apply-to-ie6-only {
  #logo {
    background-image: url(/logo.gif);
  }
}

* html #logo {
  background-image: url(/logo.gif);
}
```

#### 函数指令
+ @function grid-width($n) { @return $n }



























