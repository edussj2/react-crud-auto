import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { crear } from '../../../services/api';
import useFetch from '../../hooks/useFetch';
import FrmAgregarUsuario from '../../components/usuario/frmAgregarUsuario';

const AgregarUsuario = () => {

    const [ usuario, setUsuario ] = useState({
        nombre: '',
        clave: '',
        vigencia: 1,
        idTrabajador: 0        
    });
    
    const listaTrabajador = useFetch('/trabajador');
    const history = useHistory();

    const handleChange = (event) => {    
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        setUsuario({
            ...usuario,
            [nombre]: valor
        });
    }

    const handleChangeTypeahead = (nombre, valor) => {
        setUsuario({
            ...usuario,
            [nombre]: valor
        });
    }

    const buscarObjeto = (fk, valorNuevo) => {
        switch (fk) {
            case 'idTrabajador':
                return listaTrabajador.datos.find((trabajador) => trabajador.nombres === valorNuevo);
            default:
                return undefined;
        }
    }

    const handleChangeInputTypeahead = (fk, valorNuevo) => {
        const datos = buscarObjeto(fk, valorNuevo);
        const id = datos ? datos.id : -1;
        const valor = valorNuevo === '' ? 0 : id;
        handleChangeTypeahead(fk, valor);
    }

    const buscarObjetoPorID = (fk, id) => {
        switch (fk) {
            case 'idTrabajador':
                return listaTrabajador.datos.find((trabajador) => trabajador.id === id);
            default:
                return undefined;
        }
    }

    const onSelectedTypeahead = (fk, id) => {
        const datos = buscarObjetoPorID(fk, id);
        const opcionSeleccionado = datos ? Array(datos) : [];
        return opcionSeleccionado;
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (event.currentTarget.checkValidity()) {                
                const usuarioNuevo = await crear('/usuario', usuario);
   
                console.log(usuarioNuevo);
                history.push('/usuarios');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al agregar");
        }
    }

    return (
        <>  
            <FrmAgregarUsuario
                usuario={usuario}
                listaTrabajador={listaTrabajador.datos}                  
                onChange={handleChange}
                onSelectedTypeahead={onSelectedTypeahead}
                onChangeInputTypeahead={handleChangeInputTypeahead}
                onChangeTypeahead={handleChangeTypeahead}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default AgregarUsuario;