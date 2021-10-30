import React from "react";
import {Link} from "react-router-dom";
import { Typeahead } from 'react-bootstrap-typeahead';
import { Form , Button} from 'react-bootstrap';

const FrmAgregarUsuario = ({onSubmit, onChange, usuario,listaTrabajador,onSelectedTypeahead,
    onChangeInputTypeahead,onChangeTypeahead}) =>{
    return(
        <div className="container col-lg-6 mx-auto mt-3">

            <h1 className="text-center">Agregar Usuario</h1>

            <Form onSubmit={onSubmit}>

                <div className="row">

                    <div className="col-lg-6">

                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Registrar Nombre" 
                                name="nombre"
                                value={usuario.nombre}
                                onChange={onChange}
                                required=""
                            />
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label>Clave</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Registrar Clave" 
                                name="clave"
                                value={usuario.clave}
                                onChange={onChange}
                                required=""
                            />
                        </Form.Group>

                    </div>
                    <div className="col-lg-6">

                        <Form.Group>
                            <Form.Label>Trabajador:</Form.Label>
                            <Typeahead
                                size="sm"
                                id="basic-typeahead-single"
                                placeholder="Elige una opción"
                                options={listaTrabajador}
                                labelKey={opcion => String(opcion.nombres)}
                                selected={onSelectedTypeahead('idTrabajador', usuario.idTrabajador)}
                                onInputChange={(valorNuevo) =>
                                    onChangeInputTypeahead('idTrabajador', valorNuevo)}
                                onChange={(valorNuevo) => valorNuevo.length > 0 &&
                                    onChangeTypeahead('idTrabajador', valorNuevo[0].id)}
                                inputProps = {{ required: true }}
                            />
                        </Form.Group>

                    </div>
                </div>
                
                <div className="text-center">
                    <Button variant="primary" type="submit">
                        Registrar
                    </Button>

                    <Link className="btn btn-danger ml-2" to="/usuarios">
                        Cancelar
                    </Link>
                </div>
            </Form>

        </div>
    );
}

export default FrmAgregarUsuario;