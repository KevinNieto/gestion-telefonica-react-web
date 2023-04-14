import { InformationCircleIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline'
import { TableCell } from '@mui/material'
import Swal from 'sweetalert2'
import React from 'react'

export const AccionesCentros = ({setModalInformation, setModalOpen}) => {
  const openModalInformation = () => {
    setModalInformation(true)
  };
  
  const openModal = () => {
    setModalOpen(true)
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
        
      }
      
    })
     
  }
  
  
  return (
    <TableCell align="right">
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
                  onClick={openModal}
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

    </TableCell>
  )
}
