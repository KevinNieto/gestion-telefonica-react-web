import React from 'react';
import { useNavigate } from 'react-router-dom'
import { uiCloseModal } from '../../../actions/ui';
import { useDispatch } from 'react-redux';

const FormularioDepartamento = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleEdit = (e) => {
        e.preventDefault()

        navigate(`/departamento/12312`)
        dispatch( uiCloseModal() );
      };
    return ( 
       <>
      
            <form className='pt-5 flex justify-center max-w-5xl mx-auto' >
                   <div className='grid grid-cols-1 w-full'>
                    <div 
                        className={`mb-1`}
                        >
                              <input

                                    name='nombre'
                                    type="text"
                                    required
                                    className={`mr-1 appearance-none flex  rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm `}
                                    placeholder="Nombre del Centro"

                                    />
                    </div>
                    <div 
                        className={`mb-1`}
                    >

                        <input
                            name='limite'
                            type="text"
                            required
                            className={` items-start justify-start text-start mr-1 appearance-none rounded-none relative block w-full  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                            placeholder="Limite de Lineas"

                        />
                   </div>
                   <div 
                        className={`mb-1`}
                        >

                     
                      <button
                            onClick={handleEdit}
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