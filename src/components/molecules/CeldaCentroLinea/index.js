import React from 'react'
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";


const CeldaPuntodeReferencia = ({row}) => {


  return (
    <>
        <TableRow
                                  key={1234}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }
                                }
                                >
                                  <TableCell
                                    component="th"
                                    scope="row"
                                    className="text-sm font-light text-gray-900"
                                  >
                                    {row}
                                  </TableCell>
                                 
                                </TableRow>
    </>

  )
}

export default CeldaPuntodeReferencia;
