import React from 'react'
import axios from 'axios';
import { useState } from "react";
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (evento) => setEmail(evento.target.value);
    const handlePasswordChange = ({ target: { value } }) => setPassword(value);

    const enviarLogin = (event) => {
        event.preventDefault();
        const datos = {
            user: email
        }
        const headers = {
            App: 'APP_BCK',
            Password: password,
            Accept: 'application/json'
        };
        axios.put('https://dev.tuten.cl:443/TutenREST/rest/user/testapis%40tuten.cl',
            datos, { headers }).then(function (response) {                                       
                props.history.push('/datos',response.data)
            }).catch(function (error) {
                alert("Credenciales incorrectas")

            })
    };



    return (
        <div className="container">
            <form className="formStyle">
                <center>
                    <div>
                        <h2>Iniciar Sesion</h2>

                        <label>
                            Correo:
                            <input type="email" value={email} onChange={handleEmailChange}></input>
                        </label>

                        <div>
                            <label >
                                Contrasenia:
                                <input type="password" value={password} onChange={handlePasswordChange}></input>
                            </label>
                        </div>
                        <button onClick={enviarLogin} >Enviar </button>
                    </div>
                </center>
            </form>
        </div>
    )
}

export default Login
