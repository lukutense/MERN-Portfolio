import React from "react";
import './Jobs.css';

const Jobs = ()=>{
    
    return (
        <>
            <section id="trabajos">
                <h2 id="trabajos-titulo">Trabajos</h2>
                <div className="externos">
                    <div className="internos">
                        <h5>Encargado de planta</h5>
                        <h6 className="gris">Sept 2016 - Feb 2021</h6>
                    </div>
                    <button className="boton">Baires Carteles</button>
                    <p>Ventas: Tareas de preventa, venta y postventa. Captar clientes, recibir consultas, realización de presupuestos y armado de archivos digitales por medio de CorelDraw y Photoshop según logos de las marcas. 
                    <br></br><br></br>
                    Producción: de cartelería (letras corpóreas, logotipos, marquesinas, etc). Responsable de organizar y diagramar esquemas de trabajo. Encargado de asegurar los tiempos de producción involucrando al grupo de profesionales idóneo para cada proyecto de comunicación de la marca.
                    </p>
                </div>
                <div className="externos">
                    <div className="internos">
                        <h5>Desarrollador Jr</h5>
                        <h6 className="gris">Mayo 2016 - Agosto 2016</h6>
                    </div>
                    <button className="boton">POW</button>
                    <p >Maquetador Web, desarrollo de pequeños sitios, mantenimiento y desarrollo de newsletter. Part-time.
                    </p>
                </div>
                <div className="externos primerExterno">
                    <div className="internos">
                        <h5>Representante de ventas</h5>
                        <h6 className="gris">Marzo 2010 - Feb 2012</h6>
                    </div>
                    <button className="boton">Adox S.A.</button>
                    <p>Retención de clientes de la cartera asignada y el cumplimiento de objetivos de venta de máquinas de anestesia, respirador e insumos hospitalarios
                    </p>
                </div>
            </section>
        </>
    )
}

export {Jobs}