import React from 'react';
import { Modal, TablaCentroCosto } from '../../organisms';


const CentroCosto = () => {

    return (
        <>
        <div className="md:w-2/5 xl:w-4/5 px-24 pt-10">
            <h1 className="text-3xl font-light ml-6 font-bold mb-2">CENTROS DE COSTO</h1>
            

            {/* <FormularioCentroCosto/> */}
            <TablaCentroCosto 
    
                
            
            />

        
        
        
        </div>
        <Modal/>
        </> 
     );
}
 
export default CentroCosto;