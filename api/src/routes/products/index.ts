import { Router } from "express";

const router = Router();

router.get('/', (req, res)=>{
    res.send("list of products")
});

router.get('/:id', (req, res)=>{
    res.send(`product with id: ${req.params}`)
});

router.post('/', (req, res)=>{
    res.send("A new product was created.")
});

export default router;