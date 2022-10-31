import React from "react";
import './Skill-Contact.css'
import 'remixicon/fonts/remixicon.css';

const Skills=()=>{
    
    return(
        <>
            <section id="habilidades">
                <aside id="skills">
                    <h5>Habilidades</h5>
                    <div id="divHabilidades">
                        <p>HTML</p>
                        <progress min="0" max="100" value="75"></progress>
                        <p>CSS</p>
                        <progress min="0" max="100" value="65"></progress>
                        <p>Javascript</p>
                        <progress min="0" max="100" value="55"></progress>
                    </div>
                </aside>
                <aside id="contacto">
                    <h5>Contacto</h5>
                    <div className="datos">
                        <i className="ri-calendar-event-fill"></i>
                        <p>07/04/1990</p>
                    </div>
                    <div className="datos">
                        <i className="ri-user-fill"></i>
                        <p>Lucas Lara Martinez</p>
                    </div>
                    <div className="datos">
                        <i className="ri-cellphone-fill"></i>
                        <p>11-2245-2466</p>
                    </div>
                    <div className="datos">
                        <i className="ri-at-line"></i>
                        <p>lucaslmartinez0@gmail.com</p>
                    </div>
                </aside>
            </section>
        </>
    )
}

export {Skills}