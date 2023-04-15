import React, { useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AgregarButton } from '../../atoms';
import { AccionesCentros } from '../../molecules';
import { uiOpenModal } from '../../../actions/ui';
import { useDispatch, useSelector } from 'react-redux';

const TablaLinea = () => {
  const { lineas } = useSelector( state => state.lineas ); 
  const { modalOpen } = useSelector( state => state.ui );
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch( uiOpenModal() );
  };

  useEffect(() => {

     
}, [ modalOpen ]);

    return ( 
        <div className=" px-6 ">
            <h1 className="text-2xl font-light mb-2">Tabla de Linea</h1>
            <div className='flex justify-right  mx-auto'>
                <AgregarButton title={"Nueva Linea"} event={openModal}/>
            </div>
            <div className='pt-3 flex justify-center max-w-5xl mx-auto'>
                
            <TableContainer component={Paper} >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Numero</TableCell>
                    <TableCell>Asignadas</TableCell>
                    <TableCell align="right">Accion</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {
       
                     
                  
                 lineas.map((row) => (
                     <TableRow
                       key={row.id}
                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                         <TableCell component="th" scope="row">
                           {row.numero}
                         </TableCell>
                         <TableCell component="th" scope="row">
                           {row.asignadas}
                         </TableCell>
                         <AccionesCentros row={row}/>
                      </TableRow>

                   ))                  
                 }
                     
                  
            


                 
                
                
                
                </TableBody>
            
              </Table>
            </TableContainer>
        </div>
        
        </div>
     );
}
 
export default TablaLinea;