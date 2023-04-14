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


const TablaDepartamentos = ({setModalOpen, setModalInformation}) => {
  const navigate = useNavigate()
  const openModal = () => {
    setModalOpen(true)
  };

  
    return ( 
        <div className="pt-6 px-6 ">
            <h1 className="pl-20 text-2xl font-light mb-2">Tabla Departamentos</h1>
            <div className='pl-20 flex justify-right  mx-auto'>
                <AgregarButton title={"Nuevo Departamento"} event={openModal}/>
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
              
                     
                  
            
                    <TableRow
                      key={1}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        Prueba
                      </TableCell>

                      <TableCell component="th" scope="row">
                        4
                      </TableCell>

                      <TableCell component="th" scope="row">
                        3
                      </TableCell>

                      <TableCell component="th" scope="row">
                        1
                      </TableCell>

                      <TableCell component="th" scope="row">
                        1
                      </TableCell>

    
                      <AccionesDepartamentos
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
 
export default TablaDepartamentos;