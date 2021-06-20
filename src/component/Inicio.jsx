import React from 'react';
import axios from 'axios';
import { useState } from "react";

const Inicio = props => {

    const [zonaHoraria, setZonaHoraria] = useState("");
    const [hora, setHora] = useState("13:08:00");
    const [respuesta, setRespuesta] = useState();

    const handleZonaHorariaChange = (evento) => setZonaHoraria(evento.target.value);
    const handleHoraChange = ({ target: { value } }) => setHora(value);

    const enviarDatos = (event) => {
        event.preventDefault();        
        const data = {
            zonaHoraria: zonaHoraria,
            hora: hora
        };
        axios.post('http://c74a7d1.online-server.cloud:8080/api/postZonaHoraria', data)
            .then(function (response) {                
                setRespuesta(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    return (
        <div>
            <div className="container">
                <form className="formStyle">
                    <center>
                        <div>
                            <h2>Prueba del recurso creado sprint</h2>
                            <label>
                                Hora:
                                <input type="text" value={hora} onChange={handleHoraChange}></input>
                            </label>

                            <div>
                                <label >
                                    Zona Horaria:
                                    <input type="text" value={zonaHoraria} onChange={handleZonaHorariaChange}></input>
                                </label>
                            </div>

                            <button onClick={enviarDatos} >Consultar </button>

                        </div>
                        <hr></hr>

                        <div>
                            <label>
                                Respuesta Servidor:
                                <textarea value={JSON.stringify(respuesta)} />
                            </label>
                        </div>
                    </center>
                </form>
            </div>
        </div>
    )
}


export default Inicio
