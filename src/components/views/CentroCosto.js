import React, { useState } from 'react';

import TablaCentroCosto from '../organisms/TablaCentroCosto';
import { Modal } from '../organisms/Modal';

const CentroCosto = () => {
    const [modalOpen, setModalOpen] = useState(true)
    return (
        <>
        <div className="md:w-2/5 xl:w-4/5 p-6 pt-10">
            <h1 className="text-3xl font-light ml-6 font-bold mb-2">CENTROS DE COSTO</h1>
            

            {/* <FormularioCentroCosto/> */}
            <TablaCentroCosto setModalOpen={setModalOpen}/>

        
        
        
        </div>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        </> 
     );
}
 
export default CentroCosto;