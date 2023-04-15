import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { noActiveInformation, uiCloseModal } from "../../../actions/ui";
import { centroClearActiveCentro } from "../../../actions/centros";

//COMIENZO DEL COMPONENTE

const ModalContentInformation = ({setModalInformation}) => {
  const { activeCentro } = useSelector( state => state.centros );
  const {name, descripcion}= activeCentro;


  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch( noActiveInformation() );
    dispatch( uiCloseModal()) ;
    dispatch(centroClearActiveCentro()); 
  };


  return (
    <div className="w fixed z-10 inset-0 overflow-y-auto">
      <div className=" flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          {/* Aqui comienza el formulario */}
          <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-xl sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
              <div className="sm:items-start ">
                <div className="mt-3 text-center sm:mt-0 sm:full sm:text-left ">
                  {/* TITULO */}
                  <Dialog.Title
                    as="h3"
                    className="text-center text-lg leading-6 font-medium text-gray-900"
                  >
                    Datos del Centro de Costo
                  </Dialog.Title>
                  <div className="col-span-1 sm:col-span-3">
                      {/* Aqui metes esa  papada */}
                      <ul className=" text-md pt-2">
                         <li className="text-gray-900"> <b>Nombre: </b> {name}</li>
                         <li className="text-gray-900"> <b>Descripcion: </b>{descripcion}</li>

                     </ul>
                  </div>
                  <div 
                        className={`mt-2`}
                        >

                     
                      <button
                            onClick={closeModal}
                            
                            className="bg-green-500 w-full hover:bg-green-700 text-white text-sm font-bold py-2   rounded"
                            >
                             Listo
                      </button>
                  </div>
                </div>
              </div>
            </div>
               
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
  );
};

export default ModalContentInformation;