import React from "react";
import {Link} from "react-router-dom";
import { Form , Button} from 'react-bootstrap';

const FrmEditarMarca = ({marca,onSubmit,onChange}) =>{

    return(
        <div className="container col-lg-6 mx-auto mt-3">

            <h1 className="text-center">Editar Marca</h1>

            <Form onSubmit={onSubmit}>

                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Registrar Marca" 
                        name="nombre"
                        value={marca.nombre}
                        onChange={onChange}
                        required=""
                    />
                </Form.Group>

                <div className="text-center">
                    <Button variant="success" type="submit">
                        Actualizar
                    </Button>

                    <Link className="btn btn-danger ml-2" to="/marcas">
                        Cancelar
                    </Link>
                </div>

            </Form>

        </div>
    );
}

export default FrmEditarMarca;