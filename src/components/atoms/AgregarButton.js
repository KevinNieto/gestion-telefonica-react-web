import React from 'react';

const AgregarButton = ({setModalOpen} ) => {
      const openModal = () => {
            setModalOpen(true)
          };
    return ( 
       
            <div className='  flex justify-center items-start'>
            <button
                  onClick={openModal}
                  className="w-full bg-green-500 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 mr-1 ml-1 rounded"
            >
                  Nuevo Centro de Costo
              
            </button>
            </div>

                     
            

    
            

    
     );
}
 
export default AgregarButton;