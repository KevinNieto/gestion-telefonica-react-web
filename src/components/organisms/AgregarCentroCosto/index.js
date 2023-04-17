import React, { useState } from 'react'
import { BotonAgregarCentro } from '../../atoms';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const AgregarCentroCosto = () => {
  const { centros } = useSelector( state => state.centros );




  return (

    <>
        {
           centros.map((row) => (
                  <div className="mt-2 grid grid-cols-6 gap-2 pt-4 border border-gray-300  rounded-lg overflow-hidden px-2 py-2" key={row.id}>
                  <div className="col-span-5">
                    <ul className="pl-4 text-sm">
                            <li className="text-gray-900"> <b>{row.name} </b> </li>
        
                            </ul>
                      </div>
                      <BotonAgregarCentro 
                          row={row}
                      /> 
                  </div>
    
            ))   
          }
                  
             
        </>
                        



                                
  )
}

export default AgregarCentroCosto