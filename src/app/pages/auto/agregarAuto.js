import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { crear } from '../../../services/api';
import useFetch from '../../hooks/useFetch';
import FrmAgregarAuto from '../../components/auto/frmAgregarAuto';

const AgregarAuto = () => {

    const [ auto, setAuto ] = useState({
        modelo: '',
        placa: '',
        color: '',
        idMarca: 0        
    });
    
    const listaMarca = useFetch('/marca');
    const history = useHistory();

    const handleChange = (event) => {    
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        setAuto({
            ...auto,
            [nombre]: valor
        });
    }

    const handleChangeTypeahead = (nombre, valor) => {
        setAuto({
            ...auto,
            [nombre]: valor
        });
    }

    const buscarObjeto = (fk, valorNuevo) => {
        switch (fk) {
            case 'idMarca':
                return listaMarca.datos.find((marca) => marca.nombre === valorNuevo);
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
            case 'idMarca':
                return listaMarca.datos.find((marca) => marca.id === id);
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
                const autoNuevo = await crear('/auto', auto);
   
                console.log(autoNuevo);
                history.push('/autos');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al agregar");
        }
    }

    return (
        <>  
            <FrmAgregarAuto
                auto={auto}
                listaMarca={listaMarca.datos}                  
                onChange={handleChange}
                onSelectedTypeahead={onSelectedTypeahead}
                onChangeInputTypeahead={handleChangeInputTypeahead}
                onChangeTypeahead={handleChangeTypeahead}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default AgregarAuto;