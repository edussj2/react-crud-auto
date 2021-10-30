import React from 'react';
import useFetch from '../../hooks/useFetch';
import TableListarMarca from '../../components/marca/tableListarMarca';

const ListarMarca = () => {

    const { datos: listaMarcas } = useFetch('/marca');
    
    return (
        <TableListarMarca
            listaMarcas={listaMarcas}
        />
    );
}

export default ListarMarca;