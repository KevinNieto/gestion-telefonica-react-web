import React from 'react';

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
import { useDispatch } from 'react-redux';

const TablaCentroCosto = ({setModalOpen, setModalInformation}) => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch( uiOpenModal() );
  };
    return ( 
        <div className=" px-6 ">
            <h1 className="text-2xl font-light mb-2">Tabla Centro de Costos</h1>
            <div className='flex justify-right  mx-auto'>
                <AgregarButton title={"Nuevo Centro de Costo"} event={openModal}/>
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
    
                      <AccionesCentros
                          setModalInformation={setModalInformation}
                          setModalOpen={setModalOpen}
               
               
                      />
                      
                     
                      
                    </TableRow>

                 
                
                
                
                </TableBody>
            
              </Table>
            </TableContainer>
        </div>
        
        </div>
     );
}
 
export default TablaCentroCosto;