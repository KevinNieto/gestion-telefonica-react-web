import React, { useState } from 'react';
import {  ModalInfoDepartamento, TablaDepartamentos } from '../../organisms';
import ModalDepartamento from '../../organisms/ModalDepartamento';


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
            <ModalDepartamento modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            <ModalInfoDepartamento modalInformation={modalInformation} setModalInformation={setModalInformation}/>

           
        </>
     );
}
 
export default Departamentos;