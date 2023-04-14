import React  from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

import Paper from "@mui/material/Paper";


import {  CeldaCentroLinea } from '../../molecules';


const ContentCentrosLinea = ({title,row}) => {
    return (
    <>
    {/* Tabla de Puntos de Referencia */}
    <p className="text-sm pt-5 font-medium text-gray-900">
                          {title}
                        </p>
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ minWidth: 350 }}
                            aria-label="simple table"
                          >
                            <TableBody>
                             
                                <CeldaCentroLinea row={row} />
                            
                            </TableBody>
                          </Table>
                        </TableContainer>
    </>
  )
}

export default ContentCentrosLinea;
