import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { buscar, modificar } from '../../../services/api';
import FrmEditarTrabajador from '../../components/trabajador/frmEditarTrabajador';

const EditarTrabajador = () => {
    const [trabajador, setTrabajador] = useState({
        nombres: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        tipoDocumento: '',
        numeroDocumento: '',
        correo: ''
    });

    const { id } = useParams();

    const history = useHistory();

    useEffect(() => {
        const fetchTrabajador = async () => {
            try {
                const datos = await buscar('/trabajador', id);
                setTrabajador({
                    nombres: datos.nombres,
                    apellidoPaterno: datos.apellidoPaterno,
                    apellidoMaterno: datos.apellidoMaterno,
                    tipoDocumento: datos.tipoDocumento,
                    numeroDocumento: datos.numeroDocumento,
                    correo: datos.correo,
                });
            } catch (error) {
                console.log(error.message);
                alert("Error al traer los datos");
            }
        }
        fetchTrabajador();
    }, [id])

    const handleChange = (event) => {
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;

        setTrabajador({
            ...trabajador,
            [nombre]: valor
        });
        console.log(trabajador);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (event.currentTarget.checkValidity()) {
                const trabajadorModificado = await modificar('/trabajador', id, trabajador);
                console.log(trabajadorModificado);
                history.push('/trabajadores');
            }           
        } catch (error) {
            console.log(error.message);
            alert("Error al modificar");
        }
    }

    return (
        <>
            <FrmEditarTrabajador
                trabajador={trabajador}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default EditarTrabajador;