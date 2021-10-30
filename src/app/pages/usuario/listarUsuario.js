import React from 'react';
import useFetch from '../../hooks/useFetch';
import TableListarUsuario from '../../components/usuario/tableListarUsuario';

const ListarUsuario = () => {

    const { datos: listaUsuario } = useFetch('/usuario');
    
    return (
        <TableListarUsuario
            listaUsuario={listaUsuario}
        />
    );
}

export default ListarUsuario;