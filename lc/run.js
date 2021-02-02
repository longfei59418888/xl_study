var generateTrees = function (n) {
    n = new Array(n).fill(1);
    n = n.map((item, index) => index + 1)
    let lists = []

    function run(n, root, roots) {
        let b = [].concat(n), len = b.length
        for (let i = 0; i < len; i++) {
            let target = b[i]
            b.splice(i, 1)
            if (!root) {
                root = {val: target}
                run(b, root, root)
            } else {
                if (target > root.val) {
                    root.left = {val: target}
                    run(n, root.left, roots)
                    root.left = null
                } else {
                    root.right = {val: target}
                    run(n, root.right, roots)
                    root.right = null
                }
            }
        }
    }


};
//
// function chunk(list, length) {
//     let lists = [], item = []
//     while (list.length > 0) {
//         item.push(list.shift())
//         if (item.length == length) {
//             lists.push(item)
//             item = []
//         }
//     }
//     item.length > 0 && lists.push(item)
//     return lists
//
// }


// console.log(generateTrees(3))
// console.log(reverseBetween({
//     val: 1,
//     next: {
//         val: 3,
//         next: {
//             val: 2,
//             next: {
//                 val: 4,
//                 next: {
//                     val: 5,
//                     next: {
//                         val: 8,
//                         next: {
//                             val: 3,
//                             next: null
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }, 1, 2))
// console.log(inorderTraversal({
//     val: 1,
//     left: {
//         val: 2,
//         left: {
//             val: 4,
//             left: {
//                 val: 4,
//                 right: {
//                     val: 6
//                 }
//             }
//         },
//         right: {
//             val: 5
//         }
//     },
//     right: {
//         val: 3,
//         left: {
//             val: 4,
//             right: {
//                 val: 6
//             }
//         }
//
// }))



