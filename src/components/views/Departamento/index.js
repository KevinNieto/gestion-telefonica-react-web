import React, { useState } from 'react';
import { Modal, ModalInfoCosto, TablaDepartamentos } from '../../organisms';


const Departamentos = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalInformation, setModalInformation] = useState(true)
    return ( 
        <>
            
            <div className="md:w-2/5 xl:w-4/5 p-6">
                <h1 className="text-3xl font-light ">DEPARTAMENTOS</h1>
                <TablaDepartamentos
                    setModalOpen={setModalOpen}
                    setModalInformation={setModalInformation}
                
                />
            </div>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            <ModalInfoCosto modalInformation={modalInformation} setModalInformation={setModalInformation}/>

           
        </>
     );
}
 
export default Departamentos;