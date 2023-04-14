import React from 'react'
import Swal from 'sweetalert2';

 const BotonAgregarCentro = ({}) => {

    const HandleListaDePunto = (e) => {
        e.preventDefault();
    
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Centro agregado con exito',
        showConfirmButton: false,
        timer: 800
      })
        
        
        
        
    
        // setFormValuesSelect("-")
    }
  return (
    <div className="col-span-1">
        <button
            className="group relative h-full w-full flex justify-center py-1 px-4  items-center border border-transparent text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={HandleListaDePunto}
        >
                    Agregar
        </button>
    </div>
  )
}
export default BotonAgregarCentro