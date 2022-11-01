import React from "react";
import './Intro.css'
import ImgLucas from './assets/lucas2.jpg'

const Intro= ()=>{
    
    return(
        <>
            <section id="presentacion">
                <img src={ImgLucas} alt="Lucas" id="rostro"></img>
                <p>Mi nombre es <b>Lucas Lara Martinez</b> y soy desarrollador front y backend en crecimiento. Con experiencia
                    en manejo de cartera de clientes, redaccion y diseño de trabajos orientados tanto a largo como
                    corto plazo. 
                </p>
                <button  id="hireme"><a href="#formulario" id="contact">Contacto</a></button>
            </section>
        </>
    )
}

export {Intro}