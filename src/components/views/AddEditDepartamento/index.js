import React, { useEffect, useState } from 'react';
import { AgregarButton, CloseButton, FormularioDepartamento } from '../../atoms';
import { AgregarCentroCosto, ModalLinea, TablaCentrosCostoAsignados, TablaLineasAsignadas } from '../../organisms';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../../actions/ui';
import { useNavigate } from 'react-router-dom';

const initDepartamento = {
    nombre: '',
    limite: '',
  
  }


const AddEditDepartamento = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    let usadasD ='NA'
    let disponiblesD ='NA'

    const { activeDepartamento } = useSelector( state => state.departamentos );
    if (activeDepartamento) {
        const {
            usadas,
            disponibles,
        }=activeDepartamento; 

        usadasD =usadas
        disponiblesD =disponibles
        
        

    }


    const [formValues, setFormValues] = useState( initDepartamento);
    const {nombre, limite } = formValues;





    const addLinea = () => {
        dispatch( uiOpenModal() );
      };

      const handleNuevoDepartamento = () => {
        navigate(`/`)
      };

      const handleReturn = () => {

        navigate(`/`)
      };

      useEffect(() => {
        if ( activeDepartamento ) {
          console.log(activeDepartamento);
          setFormValues( activeDepartamento );
        } else {
          setFormValues( initDepartamento );
        }
     }, [activeDepartamento, setFormValues])

      const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    return ( 
        
          
            activeDepartamento !== null ? 
            (<>
                <div className="md:w-2/5 xl:w-4/5 p-6">
                <h1 className="text-3xl font-light ">EDITAR DEPARTAMENTO</h1>
                <div className="w-full px-24 pt-8">
                    <form  onSubmit={handleNuevoDepartamento}>
                    
                    <div 
                        className={`mb-1`}
                        >
                              <input
                                    value={nombre}
                                    name='nombre'
                                    type="text"
                                    required
                                    className={`mr-1 appearance-none flex  rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm `}
                                    placeholder="Nombre del Centro"
                                    onChange={handleInputChange}
                                    />
                    </div>
                    <div 
                        className={`mb-1`}
                    >

                        <input
                            value={limite}
                            name='limite'
                            type="text"
                            required
                            className={` items-start justify-start text-start mr-1 appearance-none rounded-none relative block w-full  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                            placeholder="Limite de Lineas"
                            onChange={handleInputChange}

                        />
                   </div>
                   </form>

                    
                
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
                <div className="px-24 grid grid-cols-1 gap-1">
                        <p className="text-sm pt-7  text-gray-900">
                          Total Utilizadas: {usadasD }
                        </p>
                        <p className="text-sm text-gray-900">
                          Lineas Disponibles: {disponiblesD }
                        </p>
                    
                </div>
                <div className="px-20 pt-7  grid grid-cols-1 gap-1">
                        <AgregarButton
                            event={handleNuevoDepartamento}
                            title={"Guardar"}
                        />
                    
                </div>
                    <div className="px-20 pt-2  grid grid-cols-1 gap-1">
                            <CloseButton
                                event={handleReturn}
                                title={"Regresar"}
                            />

                    </div>
                
                </div>
                <ModalLinea />
            </>
            ): (
            <>
                <div className="md:w-2/5 xl:w-4/5 p-6">
                    <h1 className="text-3xl font-light ">EDITAR DEPARTAMENTO</h1>
                    <div className="w-full px-24 pt-8">
                        <p className="text-sm text-gray-900">
                          Debes seleccionar un departamento para editar
                        </p>
                        <div className=" pt-2  grid grid-cols-1 gap-1">
                        <CloseButton
                            event={handleReturn}
                            title={"Regresar"}
                        />
                
                         </div>
                    </div>
                </div>
            </>
            )
          
            

           
   
     );
}
 
export default AddEditDepartamento;