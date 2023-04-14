import React from 'react';
import { AgregarButton, FormularioDepartamento } from '../../atoms';
import { AgregarCentroCosto, TablaCentrosCostoAsignados, TablaLineasAsignadas } from '../../organisms';


const AddEditDepartamento = () => {
    const addLinea = () => {
        console.log("Agregar Linea");
      };
    return ( 
        <>
            
            <div className="md:w-2/5 xl:w-4/5 p-6">
                <h1 className="text-3xl font-light ">EDITAR DEPARTAMENTO</h1>
                <div className="w-full px-24 pt-8">
                
                    <ul className=" text-md space-y-2">
                         <li className="text-gray-900"> <b>Nombre: </b> Desarrollo</li>
                         <li className="text-gray-900"> <b>Limite de Lineas: </b>7</li>

                     </ul>

                    
                
                </div>
                <div className="px-24 grid grid-cols-2 gap-2">
                    <div className=" w-full">
                        <TablaCentrosCostoAsignados/>

                    </div>
                    <div className=" w-full">
                        <p className="text-sm pt-7 font-medium text-gray-900">
                          Centros de Costo Disponibles:
                        </p>
                        <AgregarCentroCosto/>

                    </div>
                </div>

                <div className="px-24 grid grid-cols-2 gap-2">
                    <div className=" w-full">
                        <TablaLineasAsignadas/>

                    </div>
                    
                </div>
                <div className="px-24 grid grid-cols-2 gap-2">
                        <AgregarButton
                            event={addLinea}
                            title={"Agregar Linea"}
                        />

                    
                </div>
                <div className="px-24 grid grid-cols-2 gap-2">
                        <p className="text-sm pt-7  text-gray-900">
                          Lineas Disponibles: 7
                        </p>
                    
                </div>
               
            </div>

           
        </>
     );
}
 
export default AddEditDepartamento;