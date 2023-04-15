import React, { useEffect, useState } from 'react';
import { AgregarButton, CloseButton, FormularioDepartamento } from '../../atoms';
import { AgregarCentroCosto, ModalLinea, TablaCentrosCostoAsignados, TablaLineasAsignadas } from '../../organisms';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../../actions/ui';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { clearActiveDepartamento, departamentoUpdated } from '../../../actions/departamentos';

const initDepartamento = {
    nombre: '',
    limite: '',
  
  }


const AddEditDepartamento = () => {
    const { lineas } = useSelector( state => state.lineas );
    const { temporales } = useSelector( state => state.temporales );
    const centrosCount=temporales.length
    const navigate = useNavigate()
    const dispatch = useDispatch();
    let usadasD ='NA'
    let disponiblesD ='NA'
    let idN= 'NA'

    const { activeDepartamento } = useSelector( state => state.departamentos );
    if (activeDepartamento) {
        const {
            id,
            limite,
            disponibles,
        }=activeDepartamento; 

        usadasD =lineas.length
        disponiblesD =limite-usadasD 
        idN= id
        
        

    }

    const [formValues, setFormValues] = useState( initDepartamento);
    const {nombre, limite } = formValues;
    disponiblesD =limite-usadasD 





    const addLinea = () => {
        if (disponiblesD !==0) {
            dispatch( uiOpenModal() );
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Limite Alcanzado'
              })
        }
        
      };

      const handleNuevoDepartamento = () => {
        const {nombre, limite } = formValues;

        const departamentoNuevo = {
            id: idN,
            nombre, 
            limite,
            usadas: usadasD,
            disponibles: disponiblesD,
            centros: centrosCount,
            centrosAsignados: temporales,
            lineasAsignadas: lineas
        }
        dispatch( departamentoUpdated( departamentoNuevo ) )
        dispatch( clearActiveDepartamento() );
        Swal.fire(
          'Departamento actualizado con exito!',
          '',
          'success'
        )
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
                     {/* Centros Asignados */}
                    <div className=" w-full">
                        <TablaCentrosCostoAsignados />

                    </div>
                    {/* Centros Disponibles */}
                    <div className=" w-full">
                        <p className="text-sm pt-7 font-medium text-gray-900">
                          Centros de Costo Disponibles:
                        </p>
                        <AgregarCentroCosto />

                    </div>
                </div>

                
                <div className="px-24 grid grid-cols-2 gap-2">
                    {/* Lineas Asignados */}
                    <div className=" w-full">
                        <TablaLineasAsignadas/>

                    </div>
                    
                </div>
                {/* Lineas Agregar */}
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