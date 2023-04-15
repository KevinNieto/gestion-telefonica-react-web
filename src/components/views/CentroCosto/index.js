import React, { useState } from 'react';
import { Modal, TablaCentroCosto } from '../../organisms';
import { useSelector } from 'react-redux';



const CentroCosto = () => {
    const [modalInformation, setModalInformation] = useState(false)
    return (
        <>
        <div className="md:w-2/5 xl:w-4/5 p-6 pt-10">
            <h1 className="text-3xl font-light ml-6 font-bold mb-2">CENTROS DE COSTO</h1>
            

            {/* <FormularioCentroCosto/> */}
            <TablaCentroCosto 
    
                setModalInformation={setModalInformation}
            
            />

        
        
        
        </div>
        <Modal modalInformation={modalInformation} setModalInformation={setModalInformation}/>
        </> 
     );
}
 
export default CentroCosto;