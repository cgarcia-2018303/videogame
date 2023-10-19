'use strict'

const Videojuego= require('./videojuego.model');

exports.add = async (req, res) => {
    try {
        let data = req.body;
        let videojuegoExist= await Videojuego.findOne({ name: data.name });
        if (videojuegoExist) return res.status(404).send({ message: 'Videojuego existente' })
        let videogame = new Videojuego(data);
        await videogame.save();
        return res.send({ message: 'Videojuego creado con éxito', videogame});
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error al crear videojuego' })
    }
}

exports.get = async (req, res) => {
    try {
        let videojuegos = await Videojuego.find();
        return res.send({ message: 'Videojuegos encontrados', videojuegos });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error al obtener videojuegos' });
    }
}


exports.getById = async(req, res)=>{
    try {
        let videogameId = req.params.id;
        let videogame= await Videojuego.findOne({_id: videogameId});
        if(!videogame) res.status(404).send({message: 'Videogame not found'})
        return res.send({message: 'Videogmae found', videogame})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error searching videogame'})
    }
}

exports.update = async (req, res) => {
    try {
        let videogameId = req.params.id;
        let data = req.body;
        let updateVideogame = await Videojuego.findOneAndUpdate(
            { _id: videogameId },
            data,
            { new: true }
        )
        if (!updateVideogame) return res.send({ message: 'Videojuego no encontrado' });
        return res.send({ message: 'Videogame updated successfully ', updateVideogame });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error updating' });
    }
}

exports.delete = async(req, res)=>{
    try{
        let videogameId = req.params.id;
        //Eliminar
        let videogameDeleted = await Videojuego.findOneAndDelete({_id: videogameId });
        if(!videogameDeleted) return res.send({message: 'Videogame not found and not deleted'});
        return res.send({message: "VIdeogame deleted sucessfully"});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error not deleted'});
    }
}