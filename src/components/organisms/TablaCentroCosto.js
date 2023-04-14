import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AccionesCentros } from '../molecules/AccionesCentros';
import AgregarButton from '../atoms/AgregarButton';

const TablaCentroCosto = ({setModalOpen}) => {

    return ( 
        <div className=" px-6 ">
            <h1 className="text-2xl font-light mb-2">Tabla Centro de Costos</h1>
            <div className='flex justify-right  mx-auto'>
                <AgregarButton setModalOpen={setModalOpen}/>
            </div>
            <div className='pt-3 flex justify-center max-w-5xl mx-auto'>
                
            <TableContainer component={Paper} >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell align="right">Accion</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
              
                     
                  
            
                    <TableRow
                      key={1}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        Prueba
                      </TableCell>
    
                      <AccionesCentros/>
                      
                     
                      
                    </TableRow>

                 
                
                
                
                </TableBody>
            
              </Table>
            </TableContainer>
        </div>
        
        </div>
     );
}
 
export default TablaCentroCosto;