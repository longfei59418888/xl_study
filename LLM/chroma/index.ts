

const {ChromaClient} = require("chromadb");

const client = new ChromaClient({path: "http://47.98.39.76:8765"})

const create = async (...props:any) => {
    const collection = await client.getOrCreateCollection(...props);
}

create({
    name: 'my_test'
}).then(console.log)
