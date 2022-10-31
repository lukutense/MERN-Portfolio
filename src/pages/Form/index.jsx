import React, {useState} from "react";
import './Form.css';
import io from "socket.io-client";
import Swal from 'sweetalert2'

const socket= io('http://localhost:4000')


const Form= ()=>{

    const[name,setName]= useState('')
    const[phone,setPhone]= useState('')
    const[email,setEmail]= useState('')
    const[message,setMessage]= useState('')

    const guardarDatos=(e)=>{

        e.preventDefault()

        let datos= {
            name:name,
            phone:phone,
            email:email,
            message:message
        }

        socket.emit('datoNuevo', datos)

        if(!datos.name=='' && !datos.phone=='' && !datos.email=='' && !datos.message==''){
            Swal.fire({
                icon: 'success',
                title: 'Carga exitosa',
                html: 'Tu consulta fue enviada correctamente',
            })
        }
    }

    
    return(
        <>
            <section className="formulario" id="formulario">
                <form className="card card-body">
                    <div id="elementos-inicio-form">
                        <h1 id="titulo-form">Enviá tu consulta</h1>
                    </div>

                    <label htmlFor="nombre" className="form-label">Nombre y Apellido:</label> 
                    <input 
                        type="text" 
                        id="name" 
                        name="nombre" 
                        className="form-input"
                        value= {name}
                        onChange= {(e)=>{setName(e.target.value)}} 
                        required>
                    </input> 

                    <label htmlFor="numero" className="form-label">Teléfono:</label>
                    <input 
                        type="number"
                        id="number" 
                        name="telefono" 
                        className="form-input"
                        value= {phone}
                        onChange= {(e)=>{setPhone(e.target.value)}}  
                        required>
                    </input>

                    <label htmlFor="email" className="form-label">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="form-input"
                        value= {email}
                        onChange= {(e)=>{setEmail(e.target.value)}} 
                        required>
                    </input>

                    <label htmlFor="mensaje" className="form-label">Mensaje:</label>
                    <textarea 
                        id="info" 
                        name="mensaje"
                        value={message}
                        onChange= {(e)=>{setMessage(e.target.value)}} 
                        required>
                    </textarea>
                    <small id="form-small">Escribí tu solicitud o motivo de contacto</small>

                    <button onClick={guardarDatos} className="form-submit" type="submit">Enviar</button>
                </form>
            </section>
        </>
    )
}

export {Form}