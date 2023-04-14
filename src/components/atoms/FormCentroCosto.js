import React from 'react';
import { PlusIcon } from '@heroicons/react/outline'

const FormularioCentroCosto = () => {

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
                            name='descripcion'
                            type="text"
                            required
                            className={` items-start justify-start text-start mr-1 appearance-none rounded-none relative block w-full  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                            placeholder="Brevé Descripción..."

                        />
                   </div>
                   <div 
                        className={`mb-1`}
                        >

                     
                      <button
                            
                            type="submit"
                            className="bg-green-500 w-full hover:bg-green-700 text-white text-sm font-bold py-2   rounded"
                            >
                              Guardar
                      </button>
                  </div>
            </div> 

            </form>
            

    </>
     );
}
 
export default FormularioCentroCosto;