const Koa = require('koa')
const router = require('koa-router')()


const app = new Koa()
app.use(router.routes(), router.allowedMethods())
router.get('/', async (ctx, next) => {
    ctx.set("Content-Type", "application/json")
    ctx.body = JSON.stringify({
        test: '11'
    })
})
app.listen(8008, () => {
    console.log('start')
})

