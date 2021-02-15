import express from "express";
import conversorController from './controllers/ConversorController'

const app = express();
app.use(express.json()) 

app.get("/", (req, res) => res.json({ ok: true }));


app.post("/converter-to-fahrenheit/:valor", (req,res) => {
    return res.send(conversorController.converterToFahrenheit(req.params.valor));  
});

app.post("/converter-to-celsus/:valor", (req,res) => {
      return res.send(conversorController.converterToCelsus(req.params.valor));  
});

app.listen(8080, () => console.log("ESM em com @std/esm"));

