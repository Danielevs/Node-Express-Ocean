const express = require('express');
const app = express();

app.use(express.json());

app.get ("/", function (req, res) {
    res.send("Hello World!")
});

app.get ("/oi", function (req, res) {
    res.send("Olá, mundo!");
})

const lista = ['Mulher Maravilha', 'Batman', 'Superman', 'Flash', 'Aquaman', 'Lanterna'];

app.get ("/herois", function (req, res) {
    res.send(lista);
})

app.post ("/herois", function (req, res) {
    console.log(req.body);

    const item = req.body.item;

    lista.push(item);

    res.send("Item adicionado com sucesso!");
}
)

app.get ("/herois/:id", function (req, res) {
    const id = req.params.id-1;
    const item = lista[id];

        res.send(item);
    
})
app.put ("/herois/:id", function (req, res) {
    const id = req.params.id-1;

    const item = req.body.item;
    lista[id] = item;

        res.send("Item atualizado com sucesso!");
    
})

app.delete ("/herois/:id", function (req, res) {
    const id = req.params.id-1;
    delete lista[id];

        res.send("Item deletado com sucesso!");
    
})

app.listen(3000);