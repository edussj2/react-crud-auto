import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { buscar, modificar } from '../../../services/api';
import FrmEditarMarca from '../../components/marca/frmEditarMarca';

const EditarMarca = () => {
    const [marca, setMarca] = useState({
        nombre: ''
    });

    const { id } = useParams();

    const history = useHistory();

    useEffect(() => {
        const fetchMarca = async () => {
            try {
                const datos = await buscar('/marca', id);
                setMarca({
                    nombre: datos.nombre,
                });
            } catch (error) {
                console.log(error.message);
                alert("Error al traer los datos");
            }
        }
        fetchMarca();
    }, [id])

    const handleChange = (event) => {
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        setMarca({
            ...marca,
            [nombre]: valor
        });
        console.log(marca)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (event.currentTarget.checkValidity()) {
                const marcaModificado = await modificar('/marca', id, marca);
                console.log(marcaModificado);
                history.push('/marcas');
            }           
        } catch (error) {
            console.log(error.message);
            alert("Error al modificar");
        }
    }

    return (
        <>
            <FrmEditarMarca
                marca={marca}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default EditarMarca;