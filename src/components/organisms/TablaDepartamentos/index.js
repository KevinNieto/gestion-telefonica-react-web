import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AgregarButton } from '../../atoms';
import { AccionesDepartamentos } from '../../molecules';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../../actions/ui';


const TablaDepartamentos = () => {
  const { departamentos } = useSelector( state => state.departamentos ); 
  const { isAuth } = useSelector( state => state.auth ); 
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch( uiOpenModal() );
  };
  
    return ( 
        <div className="pt-6 px-6 ">
            <h1 className="pl-20 text-2xl font-light mb-2">Tabla Departamentos</h1>
            <div className='pl-20 flex justify-right  mx-auto'>
                {isAuth ? 
                <AgregarButton title={"Nuevo Departamento"} event={openModal}/>: null
                
                }


                
            </div>
            <div className='pt-3 flex justify-start max-w-5xl mx-auto'>
                
            <TableContainer component={Paper} >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Limite</TableCell>
                    <TableCell>Usadas</TableCell>
                    <TableCell>Disponibles</TableCell>
                    <TableCell>Centros</TableCell>
                    <TableCell align="right">Accion</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {
       
                     
                  
                  departamentos.map((row) => (                                                
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">{row.nombre}</TableCell>
                      <TableCell component="th" scope="row">{row.limite}</TableCell>
                      <TableCell component="th" scope="row">{row.usadas}</TableCell>
                      <TableCell component="th" scope="row">{row.disponibles}</TableCell>
                      <TableCell component="th" scope="row">{row.centros}</TableCell>
                      <AccionesDepartamentos row={row}  />                                           
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
 
export default TablaDepartamentos;