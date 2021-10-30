import React from "react";
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { BiEdit } from 'react-icons/bi';
import { RiAddCircleLine, RiDeleteBin5Line } from 'react-icons/ri';

const TableListarUsuario = ({listaUsuario}) =>{

    const encabezado = () => {
        return (
            <tr>
                <th>Nro</th>
                <th>Nombre</th>
                <th>Clave</th>
                <th>Vigencia</th>
                <th>Trabajador</th>
                <th>Editar</th>
                <th>Eliminar</th>
            </tr>
        );
    }

    const nombreVigencia = (props) =>{
        let vigencia = props.vigencia;

        if(vigencia === 1){
            return "Vigente";
        }else{
            return "No Vigente";
        }
    }

    const celdas = () => {
        let numero=0;
        return (            
            listaUsuario.map((usuario) => (
                <tr key={usuario.id}>
                    <td>{numero+=1}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.clave}</td>
                    <td>{nombreVigencia(usuario)}</td>
                    <td>{usuario.idTrabajador}</td>
                    <td>
                        <Link to={"/editarUsuario/" + usuario.id} className="btn btn-success">
                            <BiEdit/>
                        </Link>
                    </td>
                    <td>
                        <Link to={"/eliminarUsuario/" + usuario.id} className="btn btn-danger">
                            <RiDeleteBin5Line/>
                        </Link>
                    </td>
                </tr>
            ))
        );
    }

    return(
        <div className="container mt-3">
            <h1 className="text-center">Lista de Usuarios</h1>
            <Link to="/agregarUsuario" className="btn btn-primary mb-2">
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

export default TableListarUsuario;