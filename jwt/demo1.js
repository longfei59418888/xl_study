const jws = require('jws')

/*
* 生产 signature
* option.header  传入参数 alg 加密类型
* payload 需要加密的信息
* secret/privateKey 密钥
* encoding 编码
*
* 原理：
* 对 header base64编码
* 对 payload base64编码
* 将 header编码.payload编码用 HS256对称 以 secret 进行加密 返回 sign
* */
const signature = jws.sign({
    header: {alg: 'HS256'},
    payload: 'h. jon benjamin',
    secret: 'has a van',
})
console.log(signature)
console.log(jws.verify(signature, 'HS256', 'has a van'))
console.log(jws.decode(signature))

/*
* 创建 sign
* jws.createSign(options)
* header: { alg: 'RS256' }
* privateKey: privateKeyStream
* payload: payloadStream
*
* 验证 sign
* jws.createVerify(options)
* publicKey: pubKeyStream
* signature: sigStream
* */