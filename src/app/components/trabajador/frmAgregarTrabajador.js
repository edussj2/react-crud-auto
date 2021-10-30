import React from "react";
import {Link} from "react-router-dom";
import { Form , Button} from 'react-bootstrap';

const FrmAgregarTrabajador = ({onSubmit, onChange, trabajador}) =>{
    return(
        <div className="container col-lg-6 mx-auto mt-3">

            <h1 className="text-center">Agregar Trabajador</h1>

            <Form onSubmit={onSubmit}>

                <div className="row">

                    <div className="col-lg-6">

                        <Form.Group>
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Registrar Nombres" 
                                name="nombres"
                                value={trabajador.nombres}
                                onChange={onChange}
                                required=""
                            />
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label>Apellido Paterno</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Registrar Apellido Paterno" 
                                name="apellidoPaterno"
                                value={trabajador.apellidoPaterno}
                                onChange={onChange}
                                required=""
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Apellido Materno</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Registrar Apellido Materno" 
                                name="apellidoMaterno"
                                value={trabajador.apellidoMaterno}
                                onChange={onChange}
                                required=""
                            />
                        </Form.Group>

                    </div>
                    <div className="col-lg-6">

                        <Form.Group>
                            <Form.Label>Tipo de Documento:</Form.Label>
                            <Form.Control 
                                size="sm"
                                as="select"
                                name="tipoDocumento"
                                value={trabajador.tipoDocumento}
                                onChange={onChange}
                                required
                            >
                                <option value="">-- Seleccionar --</option>
                                <option value="Carnet Extranjeria">Carnet Extranjería</option>
                                <option value="DNI">DNI</option>
                                <option value="Pasaporte">Pasaporte</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Número de Documento</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Registrar Número de Documento" 
                                name="numeroDocumento"
                                value={trabajador.numeroDocumento}
                                onChange={onChange}
                                required=""
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Correo</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Registrar Correo" 
                                name="correo"
                                value={trabajador.correo}
                                onChange={onChange}
                                required=""
                            />
                        </Form.Group>

                    </div>
                </div>
                
                <div className="text-center">
                    <Button variant="primary" type="submit">
                        Registrar
                    </Button>

                    <Link className="btn btn-danger ml-2" to="/trabajadores">
                        Cancelar
                    </Link>
                </div>
            </Form>

        </div>
    );
}

export default FrmAgregarTrabajador;