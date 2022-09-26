/*

type Partial<T> = {
    [P in keyof T]?: T[P];
};

* */
type testOne = {
    attr: string
    property: number
}

/*
type testRst = Partial<testOne>
type testRst = {
    attr?: string
    property?: number
}
* */

