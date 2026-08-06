### rag 步骤
- 加载内容转为 document
  - 加载文件
  - 加载文本内容
```typescript
import { Document } from "@langchain/core/documents";
const documents = [
  new Document({
    pageContent:
      "Dogs are great companions, known for their loyalty and friendliness.",
    metadata: { source: "mammal-pets-doc" },
  }),
  new Document({
    pageContent: "Cats are independent pets that often enjoy their own space.",
    metadata: { source: "mammal-pets-doc" },
  }),
];
```
- 分割 document
  - 控制文本块长度用于使用嵌入模型
  - 提高检索质量和精度，块可以更集中焦点
  - 优化计算资源，不会传入很大文本
  - 分类种类
    - 基于长度分【长度、覆盖】
    - 基于文本结构分【句子，段落，长度、覆盖】RecursiveCharacterTextSplitter
    - 居于文档结构分【html是标签、markdown是###、json是对象、code代码是代码块】
    - 基于语义分
```typescript
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
const textSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
});
const allSplits = await textSplitter.splitDocuments(docs);
```
- 向量转化 Embeddings 
```typescript
import { OpenAIEmbeddings } from "@langchain/openai";
const embeddings = new OpenAIEmbeddings({
  model: "text-embedding-3-large"
});
const vector1 = await embeddings.embedQuery(allSplits[0].pageContent);
const vector2 = await embeddings.embedQuery(allSplits[1].pageContent);
```
- 存储向量
```typescript
import { Chroma } from "@langchain/community/vectorstores/chroma";

const vectorStore = new Chroma(embeddings, {
  collectionName: "a-test-collection",
});
await vectorStore.addDocuments(allSplits);
```
- 查询向量数据
```typescript
const results1 = await vectorStore.similaritySearch(
  "When was Nike incorporated?"
);

```
