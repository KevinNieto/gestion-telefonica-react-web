import { InformationCircleIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline'
import { TableCell } from '@mui/material'
import Swal from 'sweetalert2'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeInformation, uiOpenModal } from '../../../actions/ui'
import { centroDeleted, centroSetActive } from '../../../actions/centros'

 const AccionesCentros = ({row}) => {
  const { isAuth } = useSelector( state => state.auth );   
  const dispatch = useDispatch();

  const openModalInformation = () => {
    dispatch( centroSetActive(row) )
    dispatch( activeInformation() );
    dispatch( uiOpenModal() );

  };
  

  const handleEdit = () => {
    Swal.fire({
      title: '¿Quieres actualizar este punto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch( centroSetActive(row) ) 
        dispatch( uiOpenModal() );
      }   
    })
    
    
    
   
  };

  const handleDelete = (e) => {
    e.preventDefault()
    Swal.fire({
      title: '¿Deseas eliminar este centro de costo?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Lugar eliminado con exito con exito!',
          '',
          'success'
        )
        dispatch( centroSetActive(row) ) 
        dispatch( centroDeleted())
        
      }
      
    })
     
  }
  
  
  return (
    <TableCell align="right">

        {
          isAuth ?(
              <>
                <button          
                  type="button"
                  onClick={openModalInformation}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-1 rounded"
          
                >
                  <InformationCircleIcon className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mr-1 rounded"
                  onClick={handleEdit}
                >
                  <PencilIcon className="h-4 w-4" aria-hidden="true" />
                  
                </button>
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleDelete}
                  
                >
                  <TrashIcon className="h-4 w-4" aria-hidden="true" />
                </button>
              </>
          ) :(
          <>
            <button          
              type="button"
              onClick={openModalInformation}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-1 rounded"
      
            >
              <InformationCircleIcon className="h-4 w-4" aria-hidden="true" />
            </button>
          </>

          ) 
        }
               


    </TableCell>
  )
}
export default AccionesCentros;