import React from 'react';

const CloseButton = ({event, title} ) => {
      
    return ( 
       
            <div className='  flex justify-center items-start'>
            <button
                  onClick={event}
                  className="w-full bg-red-500 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 mr-1 ml-1 rounded"
            >
                  {title}
              
            </button>
            </div>

                     
            

    
            

    
     );
}
 
export default CloseButton;