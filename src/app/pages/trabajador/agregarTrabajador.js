import React, { useState } from "react";
import FrmAgregarTrabajador from "../../components/trabajador/frmAgregarTrabajador";
import {crear} from "../../../services/api";

const AgregarTrabajador = () =>{

    const [trabajador, setTrabajador] = useState({
        nombres: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        tipoDocumento: '',
        numeroDocumento: '',
        correo: '',
    });

    const handleChange = (event) =>{
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;

        setTrabajador({
            ...trabajador,
            [nombre]:valor
        });
        console.log(trabajador);
    }

    const handleSubmit = async (event)  =>{
        event.preventDefault();
        try{
            if(event.currentTarget.checkValidity()){
                const nuevoTrabajador = await crear('/trabajador',trabajador);
                console.log(nuevoTrabajador);
                alert("Trabajador Registrado");
            }

        }catch(error){
            console.log(error.message);
            alert("Error al agregar");
        }
    }

    return(
        <FrmAgregarTrabajador
            trabajador={trabajador}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    );
}

export default AgregarTrabajador;