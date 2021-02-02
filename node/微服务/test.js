class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }

    setNext(next) {
        this.next = next
    }

}

const first = new Node(1)
const next1 = new Node(4)
const next2 = new Node(8)

next1.setNext(next2)
first.setNext(next1)
console.log(first)
