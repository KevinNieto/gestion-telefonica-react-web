import { InformationCircleIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline'
import { TableCell } from '@mui/material'
import Swal from 'sweetalert2'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { activeInformation, uiOpenModal } from '../../../actions/ui'
import { clearActiveDepartamento, departamentoDeleted, departamentoSetActive } from '../../../actions/departamentos'
import { temporalAddNew } from '../../../actions/temporal'
import { lineaAddNew } from '../../../actions/linea'

const AccionesDepartamentos = ({row}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { isAuth } = useSelector( state => state.auth ); 
  const  handleEdit = (e) => {
    e.preventDefault()
    dispatch( departamentoSetActive(row) ) 
    Swal.fire({
      title: '¿Quieres actualizar este departamento?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
    
    

        navigate(`/departamento/${row.id}`)
      }else{
        dispatch(clearActiveDepartamento())
      }  
    })
    
  
  };

  const handleDelete = (e) => {
    e.preventDefault()
    Swal.fire({
      title: '¿Deseas eliminar este Departamento?',
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
        dispatch( departamentoSetActive(row) ) 
        dispatch( departamentoDeleted())
        
      }
      
    })
     
  }

  const handleInformation = (e) => {
    e.preventDefault()
    dispatch( departamentoSetActive(row) ) 
    dispatch( activeInformation() );
    dispatch( uiOpenModal() );
  }

  
  
  return (
    <TableCell align="right">
                {
                  isAuth? 
                  (
                    <>
                        <button
                        type="button"
                        onClick={handleInformation}
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
                  ) : (
                    <>
                    <button
                    type="button"
                    onClick={handleInformation}
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
export default AccionesDepartamentos;