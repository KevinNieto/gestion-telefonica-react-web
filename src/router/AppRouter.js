import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";


import Sidebar from '../components/ui/Sidebar';
import {AddEditDepartamento, CentroCosto, Departamentos } from '../components/views';


export const AppRouter = () => {

  return (
 
    
            <Router>
                <Sidebar/>
                <Routes>
                
                <Route path="/" element={<Departamentos/>     }/>
                <Route path="/centro-costo" element={<CentroCosto />  } />
                <Route path="/departamento/*" element={<AddEditDepartamento />  } />
                    
                    
                    
                
    
                    
                </Routes>

            </Router>
  )
}
