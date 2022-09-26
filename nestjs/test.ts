import {Observable, from, of} from 'rxjs'
import {map} from 'rxjs/operators'
// import {$} from 'zx'
//
// (async () => {
//     await $`cat package.json | grep name`
//
//     let branch = await $`git branch --show-current`
//     await $`echo ${branch}`
// })()

new Observable((subscriber => {
    console.log(444)
    subscriber.next(11)
})).pipe(source => {
    source.subscribe()
    return source
}).pipe(map(value => {
    console.log(222, value)
    return value
}))







