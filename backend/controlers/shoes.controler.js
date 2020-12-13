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

const getMarque =(req,res)=>{
    const marque = req.params.marque;
		console.log(marque);
		shoesmodel.find({marque},(err,shoe)=>
		{
			res.status(200).json(shoe);
		});
}

const getModele =(req,res)=>{
    const modele = req.params.modele;
	console.log(modele);
	shoesmodel.find({modele},(err,shoe)=>
	{
		res.status(200).json(shoe);
	});
}

const getPays =(req,res)=>{
    const pdv = req.params.pdv;
	console.log(pdv);
	shoesmodel.find({pdv},(err,shoe)=>
	{
		res.status(200).json(shoe);
	});
}

const getMois =(req,res)=>{
    const mdv = req.params.mdv;
	console.log(mdv);
	shoesmodel.find({mdv},(err,shoe)=>
	{
		res.status(200).json(shoe);
	});
}
const getGenre =(req,res)=>{
    const genre = req.params.genre;
	console.log(genre);
	shoesmodel.find({genre},(err,shoe)=>
	{
		res.status(200).json(shoe);
	});
}

const getCategorie =(req,res)=>{
    const categorie = req.params.categorie;
	console.log(categorie);
	shoesmodel.find({categorie},(err,shoe)=>
	{
		res.status(200).json(shoe);
	});
}

const getCatMar = (req,res) =>{
	const categorie = req.params.categorie;
	 const marque= req.params.marque;
	 console.log(categorie);
	 console.log(marque);
 	shoesmodel.find({categorie,marque},(err,test)=>
 	{res.status(200).json(test);
 	});
}

 const getPaysMois = (req,res) =>{
	const pdv = req.params.pdv;
	const mdv = req.params.mdv;
	console.log(pdv);
	console.log(mdv);
	shoesmodel.find({pdv,mdv},(err,test)=>
	{res.status(200).json(test);
	});
 }

const deleteOneShoe =(req,res)=>{
	var id = req.params.id;
	console.log(id);
	shoesmodel.findOneAndDelete(id,(err,test)=>
	{res.status(200).json(test);
	});
}

const PostOneShoe=(req,res)=>{
	const modele = req.params.modele;
	const prix = req.params.prix;
	const genre = req.params.genre;
	const categorie = req.params.categorie;
	const marque = req.params.marque;
	const pdv = req.params.pdv;
	const mdv = req.params.mdv;
	console.log(modele);
	console.log(prix);
	console.log(genre);
	console.log(categorie);
	console.log(marque);
	console.log(pdv);
	console.log(mdv);
	shoesmodel.create({modele,prix,genre,categorie,marque,pdv,mdv},(err,shoe)=>
	{
		res.status(200).json(shoe);
	});
}

module.exports = {getAllShoes, getOneShoe,getMarque,getModele,getPays,getMois, getGenre,getCategorie,getCatMar,getPaysMois,deleteOneShoe,PostOneShoe}
