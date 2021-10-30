import React, { useState } from "react";
import FrmAgregarMarca from "../../components/marca/frmAgregarMarca";
import {crear} from "../../../services/api";

const AgregarMarca = () =>{

    const [marca, setMarca] = useState({
        nombre: ''
    });

    const handleChange = (event) =>{
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;

        setMarca({
            ...marca,
            [nombre]:valor
        });
        console.log(marca);
    }

    const handleSubmit = async (event)  =>{
        event.preventDefault();
        try{
            if(event.currentTarget.checkValidity()){
                const nuevaMarca = await crear('/marca',marca);
                console.log(nuevaMarca);
                alert("Marca Registrada");
            }

        }catch(error){
            console.log(error.message);
            alert("Error al agregar");
        }
    }

    return(
        <FrmAgregarMarca
            marca={marca}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    );
}

export default AgregarMarca;