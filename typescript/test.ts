type TupleToUnion<T> = T extends [infer Left, ...infer Right] ?
    Right extends never ? never : TupleToUnion<Right> | Left : never

type UnionToTuple<T> = T extends infer Left | infer Right ?
    Right extends [] ? never : [Left, ...UnionToTuple<Right>] : never
type Te = TupleToUnion<[1, 2, 3]>
type Te3 = 1 | 2 | 3
type Te2 = `${Te3}`
const test: Te = 2
const test2: Te2 = [1, 2, 3]