// #!/usr/bin/env zx
// import {$} from 'zx'
// (async () => {
//     await $`cat package.json | grep name`
//
//     let branch = await $`git branch --show-current`
//     await $`dep deploy --branch=${branch}`
//
//     await Promise.all([
//         $`sleep 1; echo 1`,
//         $`sleep 2; echo 2`,
//         $`sleep 3; echo 3`,
//     ])
//
//     let name = 'foo bar'
//     await $`mkdir /tmp/${name}`
// })()
//
// const chartsTooltipFormatter = (
//   title,
//   params,
//   formatterValue
// ) => {
//     return params.reduce((previousValue, currentValue) => {
//         const { seriesName, color, value } = currentValue
//
//         return `${previousValue}
//     <div class='cep-charts-tooltip'><p><span style='background-color: ${color}'></span>${seriesName}</p>:
//     <p>${
//           formatterValue ? formatterValue(value, currentValue) : value
//         }</p></div>`
//     }, `<div style='font-weight: 600;line-height: 40px'>${title}</div>`)
// }
//

// console.error(chartsTooltipFormatter('tst',[{seriesName:1,color:3,value:32}]))

var Tween = {
  Linear: function(t, b, c, d) {
    return c * t / d + b
  },
  Quad: {
    easeIn: function(t, b, c, d) {
      return c * (t /= d) * t + b
    },
    easeOut: function(t, b, c, d) {
      return -c * (t /= d) * (t - 2) + b
    },
    easeInOut: function(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t + b
      return -c / 2 * ((--t) * (t - 2) - 1) + b
    }
  },
  Cubic: {
    easeIn: function(t, b, c, d) {
      return c * (t /= d) * t * t + b
    },
    easeOut: function(t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b
    },
    easeInOut: function(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t + b
      return c / 2 * ((t -= 2) * t * t + 2) + b
    }
  },
  Quart: {
    easeIn: function(t, b, c, d) {
      return c * (t /= d) * t * t * t + b
    },
    easeOut: function(t, b, c, d) {
      return -c * ((t = t / d - 1) * t * t * t - 1) + b
    },
    easeInOut: function(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b
      return -c / 2 * ((t -= 2) * t * t * t - 2) + b
    }
  },
  Quint: {
    easeIn: function(t, b, c, d) {
      return c * (t /= d) * t * t * t * t + b
    },
    easeOut: function(t, b, c, d) {
      return c * ((t = t / d - 1) * t * t * t * t + 1) + b
    },
    easeInOut: function(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b
      return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
    }
  },
  Sine: {
    easeIn: function(t, b, c, d) {
      return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
    },
    easeOut: function(t, b, c, d) {
      return c * Math.sin(t / d * (Math.PI / 2)) + b
    },
    easeInOut: function(t, b, c, d) {
      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
    }
  },
  Expo: {
    easeIn: function(t, b, c, d) {
      return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
    },
    easeOut: function(t, b, c, d) {
      return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
    },
    easeInOut: function(t, b, c, d) {
      if (t == 0) return b
      if (t == d) return b + c
      if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
    }
  },
  Circ: {
    easeIn: function(t, b, c, d) {
      return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
    },
    easeOut: function(t, b, c, d) {
      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
    },
    easeInOut: function(t, b, c, d) {
      if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b
      return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
    }
  },
  Elastic: {
    easeIn: function(t, b, c, d, a, p) {
      if (t == 0) return b
      if ((t /= d) == 1) return b + c
      if (!p) p = d * .3
      if (!a || a < Math.abs(c)) {
        a = c
        var s = p / 4
      } else var s = p / (2 * Math.PI) * Math.asin(c / a)
      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
    },
    easeOut: function(t, b, c, d, a, p) {
      if (t == 0) return b
      if ((t /= d) == 1) return b + c
      if (!p) p = d * .3
      if (!a || a < Math.abs(c)) {
        a = c
        var s = p / 4
      } else var s = p / (2 * Math.PI) * Math.asin(c / a)
      return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b)
    },
    easeInOut: function(t, b, c, d, a, p) {
      if (t == 0) return b
      if ((t /= d / 2) == 2) return b + c
      if (!p) p = d * (.3 * 1.5)
      if (!a || a < Math.abs(c)) {
        a = c
        var s = p / 4
      } else var s = p / (2 * Math.PI) * Math.asin(c / a)
      if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b
    }
  },
  Back: {
    easeIn: function(t, b, c, d, s) {
      if (s == undefined) s = 1.70158
      return c * (t /= d) * t * ((s + 1) * t - s) + b
    },
    easeOut: function(t, b, c, d, s) {
      if (s == undefined) s = 1.70158
      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
    },
    easeInOut: function(t, b, c, d, s) {
      if (s == undefined) s = 1.70158
      if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b
      return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b
    }
  },
  Bounce: {
    easeIn: function(t, b, c, d) {
      return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b
    },
    easeOut: function(t, b, c, d) {
      if ((t /= d) < (1 / 2.75)) {
        return c * (7.5625 * t * t) + b
      } else if (t < (2 / 2.75)) {
        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b
      } else if (t < (2.5 / 2.75)) {
        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b
      } else {
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b
      }
    },
    easeInOut: function(t, b, c, d) {
      if (t < d / 2) return Tween.Bounce.easeIn(t * 2, 0, c, d) * .5 + b
      else return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b
    }
  }
}

// t：timestamp，动画执行到当前帧所进过的时间
// b：begin，起始值
// c：change，需要变化的量
// d：duration，动画的总时间
function easeOutQuad(t, b, c, d) {
  var x = t / d         //x值
  var y = -x * x + 2 * x  //y值
  return b + c * y        //套入最初的公式
}

function easeInQuad(t, b, c, d) {
  var x = t / d //x值
  var y = x * x //y值
  return b + c * y //套入最初的公式
}


function BounceEaseOut(t, b, c, d) {
  if ((t /= d) < (1 / 2.75)) {
    return c * (7.5625 * t * t) + b
  } else if (t < (2 / 2.75)) {
    return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b
  } else if (t < (2.5 / 2.75)) {
    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b
  } else {
    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b
  }
}

function BounceEaseIn(t, b, c, d) {
  return c - BounceEaseOut(d - t, 0, c, d) + b
}

function BounceEaseInOut(t, b, c, d) {
  if (t < d / 2) return BounceEaseIn(t * 2, 0, c, d) * .5 + b
  else return BounceEaseOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b
}

function easeInOutQuad(t, b, c, d) {
  if (t < d / 2) { //前半段时间
    return easeInQuad(t, b, c / 2, d / 2)//改变量和时间都除以2
  } else {
    var t1 = t - d / 2 //注意时间要减去前半段时间
    var b1 = b + c / 2//初始量要加上前半段已经完成的
    return easeOutQuad(t1, b1, c / 2, d / 2)//改变量和时间都除以2
  }
}

/*
* t:当前执行到的某个时间
* b:起始值
* change:需要变化的量
* d:动画的总时间
* */
function easeOutElastic (t, b, c, d) {
  var s = 1.70158;
  var p = 0;
  var a = c;
  if (t == 0) return b;
  if ((t /= d) == 1) return b + c;
  if (!p) p = d * .3;
  if (a < Math.abs(c)) {
    a = c;
    var s = p / 4;
  }
  else var s = p / (2 * Math.PI) * Math.asin(c / a);
  return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) *
    (2 * Math.PI) / p) + c + b;
}

// function ElasticEaseOut(t, b, c, d, a, p) {
//   if (t == 0) return b
//   if ((t /= d) == 1) return b + c
//   if (!p) p = d * .3
//   if (!a || a < Math.abs(c)) {
//     a = c
//     var s = p / 4
//   } else var s = p / (2 * Math.PI) * Math.asin(c / a)
//   return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b)
// }

function getEaseOutQuad(list, duration, length, tpl, handle = easeOutElastic) {
  let result = ""
  for (let i = 0; i < length + 1; i++) {
    let point = i / length
    let time = point * duration
    let newTpl = tpl
    newTpl = newTpl.replace(new RegExp("\{[$]S\}", "g"), (time*100/duration).toFixed(2))
    list.forEach((item, index) => {
      const target = handle(time, item[0], item[1], duration)
      newTpl = newTpl.replace(new RegExp("\{[$]" + index + "\}", "g"), target.toFixed(2))
    })
    result += newTpl
  }
  return result
}



// console.log('$0% tet'.replace(new RegExp("\{[$]0\}",'gi'),'12'))

// console.log(getEaseOutQuad([[76.5, 13.5], [0, 400], [1, -.6], [1, -1]], 200, 10, " " +
//   "{$0}% {\n" +
//   "    transform: translateY({$1}px) rotateZ(15deg) scale({$2});\n" +
//   "    opacity: {$3};\n" +
//   "}\n"))

console.log(getEaseOutQuad([[0, 100], [15, -15], [0, 1], [0.3, 0.7]], 200, 10, " " +
  "{$S}% {\n" +
  "    transform: rotateZ({$1}deg);\n" +
  "}\n"))

