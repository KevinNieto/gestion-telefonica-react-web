import React  from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { CeldaCentroCosto } from '../../molecules';
import { useDispatch, useSelector } from 'react-redux';
import { temporalAddNew, useTemporals } from '../../../actions/temporal';


const TablaCentroCosto = () => {
  const dispatch = useDispatch();
  const { temporales } = useSelector( state => state.temporales );

 
  
  return (
    <>
    {/* Tabla de Puntos de Referencia */}
    <p className="text-sm pt-5 font-medium text-gray-900">Centros de Costo Asignados:</p>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 350 }}
              aria-label="simple table"
            >
              <TableBody>
                {
        
    
                temporales.map((row) => (
                  <CeldaCentroCosto row={row} />
              
                 ))                  
                }
              </TableBody>
            </Table>
          </TableContainer>
    </>
  )
}

export default TablaCentroCosto;
