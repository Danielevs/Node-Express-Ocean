const express = require('express');

const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const dbName = "backend-maio-25";
const client = new MongoClient(url);

async function main() {
    console.info("Conectando ao banco de dados...");
    await client.connect();
    console.info("Conectado ao banco de dados com sucesso!");

const app = express();

app.use(express.json());

app.get ("/herois", async function (req, res) {
    const itens = await collection.find().toArray();
    res.send(itens);
})

app.post ("/herois", async function (req, res) {
    const item = req.body;
    await collection.insertOne(item);
    res.send("Item adicionado com sucesso!");
}
)

app.get ("/herois/:id", async function (req, res) {
    const id = req.params.id-1;
    const item = await collection.findOne({
        _id: new ObjectId(id)},
        {$set: item}
    );
    
    res.send(item);
    
})
app.put ("/herois/:id", async function (req, res) {
    const id = req.params.id;
    
    const item = req.body;
    await collection.updateOne(
        {
            _id: new ObjectId(id)
        },
        {$set: item}
    );
    
    res.send(item);
    
})

app.delete ("/herois/:id", async function (req, res) {
    const id = req.params.id;
    await collection.deleteOne({
        _id: new ObjectId(id),
    });
    res.send({message: "Item deletado com sucesso!"});
    
})

app.get ("/", function (req, res) {
    res.send("Hello World!")
});
app.listen(3000);
}
main();