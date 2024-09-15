const base= require('../config/bd');

const obtenerSocios = async (req,res) => {

    base.query('SELECT * FROM socio',(err,result) => {

        if(err){

            console.log('Error al traer los socios: ' + err);
        } else{

            res.json(result);
        }

    });


    
};

module.exports ={obtenerSocios}