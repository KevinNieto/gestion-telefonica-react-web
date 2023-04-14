import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

import Departamentos from '../components/views/Departamentos';
import CentroCosto from '../components/views/CentroCosto';
import Sidebar from '../components/ui/Sidebar';

export const AppRouter = () => {

  return (
 
    
            <Router>
                <Sidebar/>
                <Routes>
                
                <Route 
                        path="/"
                        element={
                            <Departamentos/>         
                        }
                />
                  <Route path="/centro-costo" element={<CentroCosto />  } />
                    
                    
                    
                
    
                    
                </Routes>

            </Router>
  )
}
