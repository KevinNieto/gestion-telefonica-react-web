import React  from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

import Paper from "@mui/material/Paper";


import { CeldaCentroCosto, CeldaLinea } from '../../molecules';
import { useSelector } from 'react-redux';


const TablaLineasAsignadas = () => {
    const { lineas } = useSelector( state => state.lineas );
    return (
    <>
    {/* Tabla de Puntos de Referencia */}
    <p className="text-sm pt-5 font-medium text-gray-900">Lineas Asignadas:</p>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 350 }}
            aria-label="simple table"
          >
            <TableBody>
            {
              lineas.map((row) => (
                <CeldaLinea row={row}/>
                ))                  
              }
            </TableBody>
          </Table>
        </TableContainer>
    </>
  )
}

export default TablaLineasAsignadas;
