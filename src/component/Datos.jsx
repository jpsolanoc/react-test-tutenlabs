import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'

import GridData from './GridData';

const Datos = (props) => {
    const [email] = useState(props.history.location.state.email);
    const [sessionTokenBck] = useState(props.history.location.state.sessionTokenBck);
    const [dataServer, setDataServer] = useState(undefined);
    const [dataServerFilter, setDataServerFilter] = useState(undefined);
    const [busqueda, setBusqueda] = useState("");
    const [busquedaBookingId, setBusquedaBookingId] = useState("");
    const [mostrarInformacion, setMostrarInformacion] = useState(<h1>Cargando datos...</h1>);

    const handleBusquedaChange = (evento) => setBusqueda(evento.target.value);
    const handleBusquedaBookingIdChange = (evento) => setBusquedaBookingId(evento.target.value);

    useEffect(() => {
        if (email!== undefined && sessionTokenBck !== undefined) {
            localStorage.setItem(email)
            localStorage.setItem(sessionTokenBck)
            if (dataServer === undefined) {
                const datos = {
                    user: 'contacto@tuten.cl'
                }
                const headers = {
                    adminemail: email,
                    App: 'APP_BCK',
                    token: sessionTokenBck,
                    Accept: 'application/json'
                };
                axios.get(
                    'https://dev.tuten.cl:443/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true',
                    { headers }, datos).then(function (response) {
                        setDataServer(response.data)
                        setDataServerFilter(response.data)
                    }).catch(function (error) {
                        console.log(error)
                    });
            }
            if (dataServer !== undefined) {
                setMostrarInformacion(
                    dataServer.map((datoSer, index) => (
                        GridData(datoSer, index)
                    )));
            }
        }
    }, [dataServer]);



    const filtrarDatos = (event) => {
        setDataServerFilter(dataServer.filter(datoSer => datoSer.bookingPrice === parseInt(busqueda)))
        setMostrarInformacion(
            dataServerFilter.map((datoSer, index) => (
                GridData(datoSer, index)
            )));
        event.preventDefault();
    };


    const filtrarDatosBookingId = (event) => {
        setDataServerFilter(dataServer.filter(datoSer => datoSer.bookingId === parseInt(busquedaBookingId)))
        setMostrarInformacion(
            dataServerFilter.map((datoSer, index) => (
                GridData(datoSer, index)
            )));
        event.preventDefault();
    };


    const mostrarTodos = (event) => {
        setMostrarInformacion(
            dataServer.map((datoSer, index) => (
                GridData(datoSer, index)
            )));
        event.preventDefault();
    };


    return (
        <div>

            <center><h2>Respuesta Servidor</h2></center>
            <label>
                Busqueda por bookingId:
                <input value={busquedaBookingId} onChange={handleBusquedaBookingIdChange}></input>
                <Button variant="outline-secondary" onClick={filtrarDatosBookingId}>Buscar</Button>
            </label>
            <label>
                Busqueda por precio:
                <input value={busqueda} onChange={handleBusquedaChange}></input>
                <Button variant="outline-secondary" onClick={filtrarDatos}>Buscar</Button>
            </label>
            <Button variant="outline-secondary" onClick={mostrarTodos}>Mostrar Todos</Button>
            <Container>
                <Row>
                    {mostrarInformacion}
                </Row>
            </Container>

        </div>
    )
}

export default Datos
