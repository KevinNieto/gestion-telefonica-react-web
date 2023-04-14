import React, { useState } from 'react';
import { Modal, ModalInfoCosto, TablaCentroCosto } from '../../organisms';



const CentroCosto = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalInformation, setModalInformation] = useState(true)
    return (
        <>
        <div className="md:w-2/5 xl:w-4/5 p-6 pt-10">
            <h1 className="text-3xl font-light ml-6 font-bold mb-2">CENTROS DE COSTO</h1>
            

            {/* <FormularioCentroCosto/> */}
            <TablaCentroCosto 
                setModalOpen={setModalOpen}
                setModalInformation={setModalInformation}
            
            />

        
        
        
        </div>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        <ModalInfoCosto modalInformation={modalInformation} setModalInformation={setModalInformation}/>
        </> 
     );
}
 
export default CentroCosto;