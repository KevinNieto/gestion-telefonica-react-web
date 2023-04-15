import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { temporalAddNew } from '../../../actions/temporal';

const BotonAgregarCentro = ({row}) => {
  const { temporales } = useSelector( state => state.temporales );

  const dispatch = useDispatch();
  const handleAgregarCentro = (e) => {
    e.preventDefault();
    const respuesta = temporales.includes(row)
    if (respuesta === true) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ese Centro ya esta asignado a este departamento'
      })
    }else{
      dispatch(temporalAddNew(row));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Centro asignado con exito',
        showConfirmButton: false,
        timer: 800
      })
    }
  }

  return (
    <div className="col-span-1">
        <button
            className="group relative h-full w-full flex justify-center py-1 px-4  items-center border border-transparent text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleAgregarCentro}
        >
                    Agregar
        </button>
    </div>
  )
}
export default BotonAgregarCentro