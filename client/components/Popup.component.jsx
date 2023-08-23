"use client";
//this is a template made with HeadlessUi, this is used to create a PopUp effect

import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import AddNew from "./Addnew.component";
import Edit from "./Edit.component";
import ViewPage from "./View.component";

const Popup = ({ isOpen, setIsOpen, pageName, editNoteData, noteData }) => {
  const components = {
    AddNew: <AddNew close={closeModal} />,
    Edit: <Edit editNoteData={editNoteData} close={closeModal} />,
    ViewPage: <ViewPage noteData={noteData} />,
    // These are the Pages which are going to be rendered in the Popup window based on the situation
  };

  // Render the PageComponent based on the value of pageName
  const dynamicComponent = components[pageName];

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {dynamicComponent}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Popup;
