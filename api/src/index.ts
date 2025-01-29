import express from 'express';

const PORT = 3000;

const app = express();

app.get('/', (req, res)=>{
    res.send("Hello, Express12335!!!");
});

app.listen(PORT, ()=>{
    console.log("app listening on PORT: " + PORT);
});