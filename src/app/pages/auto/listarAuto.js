import React from 'react';
import useFetch from '../../hooks/useFetch';
import TableListarAuto from '../../components/auto/tableListarAuto';

const ListarAuto = () => {

    const { datos: listaAutos } = useFetch('/auto');
    
    return (
        <TableListarAuto
            listaAutos={listaAutos}
        />
    );
}

export default ListarAuto;