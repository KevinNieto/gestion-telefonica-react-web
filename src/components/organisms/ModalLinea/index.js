import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {  ModalContentLinea } from "../../molecules";
import { uiCloseModal } from "../../../actions/ui";
import { useDispatch, useSelector } from "react-redux";

const ModalLinea = () => {
  const { modalOpen } = useSelector( state => state.ui );

  const dispatch = useDispatch();



  const closeModal = () => {
    dispatch( uiCloseModal() );

}


  return (
    <Transition.Root show={modalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <ModalContentLinea/>
        

        


      </Dialog>
    </Transition.Root>
  );
};
export default ModalLinea;
