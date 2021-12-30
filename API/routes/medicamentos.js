const express = require ('express');
const router = express.Router();
const Medicamento= require('../models/Medicamento');


//OBTIENE TODOS LOS MEDICAMENTOS
router.get('/', async (req, res) =>{
    try{
        const medicamentos = await Medicamento.find();
        res.json(medicamentos);
    }catch(err){
        res.json({message:err});
    }

});
//CREA UN MEDICAMENTO EN LA BD
router.post('/', (req, res) =>{
    const medicamento = new Medicamento({
        nombre: req.body.nombre,
        valor: req.body.valor,
        stock: req.body.stock
    });
    medicamento.save()
    .then(data=> {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
});

//OBTIENE UN MEDICAMENTO EN ESPECIFICO
router.get('/:medicamentoId', async (req,res)=>{
    try{
    const medicamento = await Medicamento.findById(req.params.medicamentoId);
    res.json(medicamento);} catch(err){
        res.json({message: err});
    }
});

//BORRAR UN MEDICAMENTO
router.delete('/:medicamentoId', async (req,res) =>{
    try{
    const removedMedicamento =Medicamento.remove({_id: req.params.medicamentoId})
    res.json(removedMedicamento);
    } catch (err){
        res.json({ message:err});
    }
});

//MODIFICAR UN MEDICAMENTO
router.patch('/:medicamentoId&:stock', async (req, res) =>{
    try{
        const updatedMedicamento = await Medicamento.updateOne(
            { _id: req.params.medicamentoId},
            {$set:{stock: req.params.stock}}
            );
            res.json(updatedMedicamento)
    }catch (err){
        res.json({ message:err});
    }
})
module.exports = router;