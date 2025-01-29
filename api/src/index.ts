import express from 'express';
import productsRouter from './routes/products';

const PORT = 3000;

const app = express();

app.get('/', (req, res)=>{
    res.send("Hello, Express1!!!");
});

app.use('/products', productsRouter);

app.listen(PORT, ()=>{
    console.log("app listening on PORT: " + PORT);
});