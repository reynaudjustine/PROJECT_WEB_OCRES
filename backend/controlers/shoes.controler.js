const shoesmodel = require("../models/shoes.model");

const getAllShoes = (req,res) => {
    shoesmodel.find((err,shoe)=>{
        res.status(200).json(shoe);
    });
}

const getOneShoe =(req,res) => {
    const id = req.params.id;
	console.log(id);
	shoesmodel.findById(id,(err,test)=>
	{res.status(200).json(test);
	});
}

module.exports = {getAllShoes, getOneShoe}
