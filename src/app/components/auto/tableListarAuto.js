import React from "react";
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { BiEdit } from 'react-icons/bi';
import { RiAddCircleLine, RiDeleteBin5Line } from 'react-icons/ri';

const TableListarAuto = ({listaAutos}) =>{

    const encabezado = () => {
        return (
            <tr>
                <th>Nro</th>
                <th>Modelo</th>
                <th>Placa</th>
                <th>Color</th>
                <th>Marca</th>
                <th>Editar</th>
                <th>Eliminar</th>
            </tr>
        );
    }

    const celdas = () => {
        let numero=0;
        return (            
            listaAutos.map((auto) => (
                <tr key={auto.id}>
                    <td>{numero+=1}</td>
                    <td>{auto.modelo}</td>
                    <td>{auto.placa}</td>
                    <td>{auto.color}</td>
                    <td>{auto.idMarca}</td>
                    <td>
                        <Link to={"/editarAuto/" + auto.id} className="btn btn-success">
                            <BiEdit/>
                        </Link>
                    </td>
                    <td>
                        <Link to={"/eliminarAuto/" + auto.id} className="btn btn-danger">
                            <RiDeleteBin5Line/>
                        </Link>
                    </td>
                </tr>
            ))
        );
    }

    return(
        <div className="container mt-3">
            <h1 className="text-center">Lista de Autos</h1>
            <Link to="/agregarAuto" className="btn btn-primary mb-2">
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

export default TableListarAuto;