import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { uiCloseModal } from '../../../actions/ui';
import { centroAddNew, centroClearActiveCentro, centroUpdated } from '../../../actions/centros';


const initCentro = {
    name: '',
    descripcion: '',
  
  }


const FormularioCentroCosto = () => {
    const { centros } = useSelector( state => state.centros ); 
    const { activeCentro } = useSelector( state => state.centros );
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState( initCentro);
    const {name, descripcion } = formValues;


    //ACTUALIZAR EVENTO
    useEffect(() => {
      if ( activeCentro ) {
        console.log(activeCentro);
        setFormValues( activeCentro );
      } else {
        setFormValues( initCentro );
      }
      }, [activeCentro, setFormValues])

    const handleNuevoPunto = (e) => {

      
        e.preventDefault()
        if ( activeCentro ) {
          dispatch( centroUpdated( formValues ) )
          dispatch( centroClearActiveCentro() );
          dispatch( uiCloseModal() );
          Swal.fire(
            'Punto actualizado con exito!',
            '',
            'success'
          )
      } else {
    
        Swal.fire({
          title: '¿Deseas guardar los cambios?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Centro de Costos creado con exito!',
              '',
              'success'
            )
            const {name,descripcion } = formValues
            dispatch( centroAddNew({ id: new Date().getTime(), name,descripcion  }) );
            
            console.log("centros", centros);
        
            setFormValues( initCentro );
            dispatch( uiCloseModal() );

          }
          
        })
      }
          
          
      
      }


        //FUNCION MANEJADORA DE CAMPOS DEL FORMULARIO
  const handleInputChange = ({ target }) => {
    setFormValues({
        ...formValues,
        [target.name]: target.value
    });
}

    return ( 
       <>
      
            <form className='pt-5 flex justify-center max-w-5xl mx-auto'  onSubmit={handleNuevoPunto}>
                   <div className='grid grid-cols-1 w-full'>
                    <div 
                        className={`mb-1`}
                        >
                              <input
                                    value={name}
                                    name='name'
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
                            value={descripcion}
                            name='descripcion'
                            type="text"
                            required
                            className={` items-start justify-start text-start mr-1 appearance-none rounded-none relative block w-full  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                            placeholder="Brevé Descripción..."
                            onChange={handleInputChange}

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