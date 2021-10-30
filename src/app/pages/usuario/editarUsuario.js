import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { buscar, modificar } from '../../../services/api';
import useFetch from '../../hooks/useFetch';
import FrmEditarUsuario from '../../components/usuario/frmEditarUsuario';

const EditarUsuario = () => {
    const [usuario, setUsuario] = useState({
        nombre: '',
        clave: '',
        vigencia: 0,
        idTrabajador: 0
    });

    const listaTrabajador = useFetch('/trabajador');
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchUsuario = async () => {
            try {
                const datos = await buscar('/usuario', id);
                setUsuario({
                    nombre: datos.nombre,
                    clave: datos.clave,
                    vigencia: parseInt(datos.vigencia),
                    idTrabajador: parseInt(datos.idTrabajador)                    
                });
            } catch (error) {
                console.log(error.message);
                alert("Error al traer los datos");
            }
        }
        fetchUsuario();
    }, [id])
    
    const handleChange = (event) => {   
        const target = event.target;
        var valor = target.value;
        const nombre = target.name;

        if(nombre==="vigencia"){
            valor = parseInt(valor);
        }

        setUsuario({
                ...usuario,
                [nombre]: valor
        });
        
        console.log(usuario);

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
                const usuarioModificado = await modificar('/usuario', id, usuario);
                console.log(usuarioModificado);
                history.push('/usuarios');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al modificar");
        }
    }

    return (
        <>
            <FrmEditarUsuario
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

export default EditarUsuario;