const Categoria = require('../models/categoriaModel');
const Subcategoria = require('../models/subcategoriaModel');

const obtenerCategorias= async (req,res) => {
    
    try {
        const categorias = await Categoria.findAll();
        res.json(categorias);

        
    } catch (error) {
        
        res.status(500).json({ message: 'Error al obtener las categorias' });
    };


}


const obtenerUnaCategoriaPorID = async(req, res)=> {

    const { idCategoria } = req.params;

    try {
        const categoria = await Categoria.findByPk(idCategoria);
        if(categoria){
            res.json(categoria);
        } else {
            res.status(404).json({ message: 'Categoría no encontrada' });
        }
        
        
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el cliente'});
    }



}

const crearNuevaCategoria = async(req, res) => {
    
    const { nombre } = req.body;

    try {
        const categoria = await Categoria.findOne({where:{ nombre} });
        if(categoria){
            return res.status(400).json({ message: 'La categoria ya existe' });
        }else{
           await Categoria.create({nombre});
           res.status(200).json({ message: 'Categoria creada correctamente' });
        }
        
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la categoría' });
    }
}


const actualizarCategoria = async (req, res) => {
    const { idCategoria } = req.params;
    const { nombre } = req.body;

    try {
        const categoria = await Categoria.findOne({where:{idCategoria}});
        if (categoria) {
            await categoria.update({ nombre });
            res.json({ message: 'Categoría actualizada correctamente' });
        } else {
            res.status(404).json({ message: 'Categoría no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la categoría', error: error.message });
    }
};


const eliminarCategoria = async (req, res) => {
    const { idCategoria } = req.params;

    try {
        const categoria = await Categoria.findOne({where:{idCategoria}});
        if (categoria) {

            const subcategorias = await Subcategoria.findAll({ where: { idCategoria } });
        if (subcategorias.length > 0) {
            return res.status(400).json({ message: 'No se puede eliminar la categoría porque tiene subcategorías asociadas' });
        }else{
            await categoria.destroy();
            res.json({ message: 'Categoría eliminada correctamente' });
        }
        } else {
            res.status(404).json({ message: 'Categoría no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la categoría', error: error.message });
    }
};

module.exports ={obtenerCategorias,obtenerUnaCategoriaPorID,crearNuevaCategoria,actualizarCategoria,eliminarCategoria};