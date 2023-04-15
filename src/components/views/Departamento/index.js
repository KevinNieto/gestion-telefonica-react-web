import React, { useState } from 'react';
import {  TablaDepartamentos } from '../../organisms';
import ModalDepartamento from '../../organisms/ModalDepartamento';


const Departamentos = () => {

    return ( 
        <>
            
            <div className="md:w-2/5 xl:w-4/5 p-6">
                <h1 className="text-3xl font-light ">DEPARTAMENTOS</h1>
                <TablaDepartamentos
                
                
                />
            </div>
            <ModalDepartamento />
           
        </>
     );
}
 
export default Departamentos;