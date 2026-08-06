const {ChromaClient, OpenAIEmbeddingFunction} = require("chromadb");
const {OpenAIEmbeddings} = require("@langchain/openai");
import {Chroma} from "@langchain/community/vectorstores/chroma";


// const {Document: Doc} = require('@langchain/core/documents')
//
// const doc = new Doc({
//     pageContent:
//         "Dogs are great companions, known for their loyalty and friendliness.",
//     metadata: {source: "mammal-pets-doc"},
// })
//
// console.log(doc)

const embeddingFunction = new OpenAIEmbeddings({
    model: "text-embedding-3-small",
    apiKey: 'sk-65fd599d1214789b9dad1ae00470e7i0',
    configuration: {
        apiKey: 'sk-65fd599d1214789b9dad1ae00470e7i0',
        baseURL: "https://openaiproxy.unipus.cn/proxy-key/v1",
    },
})
const client = new ChromaClient({path: "http://47.98.39.76:8765"})
const vectorStore = new Chroma(embeddingFunction, {
    collectionName: "my_test",
    url: 'http://47.98.39.76:8765'
});

(async () => {
    // const result = await vectorStore.addDocuments([
    //     {pageContent: 'doc1', metadata: {resource: '01', type: 'resource'}, id: "01"},
    //     {pageContent: 'doc2', metadata: {resource: '01', type: 'resource'}, id: "02"},
    // ], {
    //     ids: ['01', '02']
    // })
    // await vectorStore.delete({
    //     filter: {"type": "resource"}
    // })
    const collection = await client.getOrCreateCollection({name: 'studys'});
    const count = await collection.get({
        where: {"resourceId": 1}
    })
    console.log(count.ids)
})()


const create = async (...props: any) => {
    const collection = await client.getOrCreateCollection(...props);
    try {
        await collection.add({
            ids: ['1'], documents: ['1']
        })
    } catch (e) {
        console.log(e)
    }
    return collection
    const resource = {
        id: '01',
        documents: ["doc1", "doc2", "doc3"]
    }

    const resource2 = {
        id: '02',
        documents: ["doc21", "doc22", "doc23"]
    }

    const ids = resource.documents.map((_, index) => `${resource.id}_${index}`)
    const ids2 = resource2.documents.map((_, index) => `${resource.id}_${index}`)
    const metadatas = resource.documents.map((_, index) => ({resource: resource.id, type: "resource"}))
    const metadatas2 = resource2.documents.map((_, index) => ({resource: resource.id, type: "resource"}))
    console.log(1)
    await collection.add({
        ids: ids,
        metadatas: metadatas,
        documents: resource.documents,
    });
    console.log(2)
    await collection.add({
        ids: ids2,
        metadatas: metadatas2,
        documents: resource2.documents,
    });
    console.log(3)
    return collection.count()


}

// create({
//     name: 'my_test',
//     embeddingFunction: embeddingFunction
// }).then(console.log).catch(console.log)
