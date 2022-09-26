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

const chartsTooltipFormatter = (
  title,
  params,
  formatterValue
) => {
    return params.reduce((previousValue, currentValue) => {
        const { seriesName, color, value } = currentValue

        return `${previousValue}
    <div class='cep-charts-tooltip'><p><span style='background-color: ${color}'></span>${seriesName}</p>:
    <p>${
          formatterValue ? formatterValue(value, currentValue) : value
        }</p></div>`
    }, `<div style='font-weight: 600;line-height: 40px'>${title}</div>`)
}

console.error(chartsTooltipFormatter('tst',[{seriesName:1,color:3,value:32}]))
