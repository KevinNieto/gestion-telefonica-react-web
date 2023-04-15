import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { uiCloseModal } from '../../../actions/ui';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { departamentoAddNew, departamentoSetActive } from '../../../actions/departamentos';

const initDepartamento = {
    id: new Date().getTime(),
    nombre: '',
    limite: 0,
    usadas: 0,
    disponibles:0,
    centros:0, 
    centrosAsignadas: [],
    lineasAsignadas:[]

}


const FormularioDepartamento = () => {
    const { departamentos } = useSelector( state => state.departamentos );
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState( initDepartamento);
    const {nombre, limite } = formValues;


    const handleNuevoPunto = (e) => {
        e.preventDefault()
        const idDepartamento= new Date().getTime()
        const {nombre, limite } = formValues

        const temporal = 
        { 
            id: idDepartamento,
            nombre, 
            limite,     
            usadas: 0, 
            disponibles: limite, 
            centros:0, 
            centrosAsignadas: [],
            lineasAsignadas:[]  
        }
        dispatch( departamentoAddNew(
            temporal
                
        ));


        setFormValues( initDepartamento );
        dispatch( uiCloseModal() );
        dispatch(departamentoSetActive(temporal))
        navigate(`/departamento/${idDepartamento}`)
        dispatch( uiCloseModal() );
    

      
      };

    
    //FUNCION MANEJADORA DE CAMPOS DEL FORMULARIO
    const handleInputChange = ({ target }) => {
        setFormValues({
        ...formValues,
        [target.name]: target.value
        });
    }
    return ( 
       <>
      
            <form className='pt-5 flex justify-center max-w-5xl mx-auto' onSubmit={handleNuevoPunto} >
                   <div className='grid grid-cols-1 w-full'>
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
                   <div 
                        className={`mb-1`}
                        >

                     
                      <button
                            type="submit"
                            className="bg-purple-500 w-full hover:bg-green-700 text-white text-sm font-bold py-2   rounded"
                            >
                              Opciones Avanzadas
                      </button>
                  </div>
                   
        
            </div> 

            </form>
            

    </>
     );
}
 
export default FormularioDepartamento;