function start() {
    const buffer = []
    let total = 10
    function wait(prod) {
        if (total < 0) return
        buffer.push(prod)
        total--
    }
    function signal(prod) {
        if (total >= 10) return
        total++
        buffer.splice(buffer.indexOf(prod), 1)
    }
    function create() {
        while (1) {
            const prod = 'food'
            wait(prod)
        }
    }
    function eat() {
        while (1) {
            const prod = 'food'
            signal(prod)
        }
    }
    create()
    eat()
}
start()
