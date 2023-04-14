import { InformationCircleIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline'
import { TableCell } from '@mui/material'
import React from 'react'

export const AccionesCentros = ({row}) => {

  
  
  return (
    <TableCell align="right">
                <button
                  type="button"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-1 rounded"
          
                >
                  <InformationCircleIcon className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mr-1 rounded"

                >
                  <PencilIcon className="h-4 w-4" aria-hidden="true" />
                  
                </button>
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            
                  
                >
                  <TrashIcon className="h-4 w-4" aria-hidden="true" />
                </button>

    </TableCell>
  )
}