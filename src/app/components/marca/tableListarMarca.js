import React from "react";
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { BiEdit } from 'react-icons/bi';
import { RiAddCircleLine, RiDeleteBin5Line } from 'react-icons/ri';

const TableListarMarca = ({listaMarcas}) =>{

    const encabezado = () => {
        return (
            <tr>
                <th>Nro</th>
                <th>Nombre</th>
                <th>Editar</th>
                <th>Eliminar</th>
            </tr>
        );
    }

    const celdas = () => {
        let numero=0;
        return (            
            listaMarcas.map((marca) => (
                <tr key={marca.id}>
                    <td>{numero+=1}</td>
                    <td>{marca.nombre}</td>
                    <td>
                        <Link to={"/editarMarca/" + marca.id} className="btn btn-success">
                            <BiEdit/>
                        </Link>
                    </td>
                    <td>
                        <Link to={"/eliminarMarca/" + marca.id} className="btn btn-danger">
                            <RiDeleteBin5Line/>
                        </Link>
                    </td>
                </tr>
            ))
        );
    }

    return(
        <div className="container mt-3">
            <h1 className="text-center">Lista de Marcas</h1>
            <Link to="/agregarMarca" className="btn btn-primary mb-2">
               <RiAddCircleLine/> Agregar
            </Link>
            <Table responsive>
                <thead className="bg-dark text-light">
                    { encabezado() }
                </thead>
                <tbody>
                    { celdas() }
                </tbody>
            </Table>
        </div>
    );
}

export default TableListarMarca;