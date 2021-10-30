import React from 'react';
import useFetch from '../../hooks/useFetch';
import TableListarTrabajador from '../../components/trabajador/tableListarTrabajador';

const ListarTrabajador = () => {

    const { datos: listaTrabajadores } = useFetch('/trabajador');
    
    return (
        <TableListarTrabajador
            listaTrabajadores={listaTrabajadores}
        />
    );
}

export default ListarTrabajador;