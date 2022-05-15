import React, { ReactNode, useEffect, useRef } from "react";
interface IMCustomModal {
  children: ReactNode;
  height?: string;
  width?: string;
  onClose: () => void;
  showModal: boolean;
}

const MCustomModalWrapper: React.FC<IMCustomModal> = (props) => {
  const { height, width, showModal, onClose, children } = props;
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleModal = (e: React.MouseEvent) => {
    const modalElement = modalRef.current;
    if (e.target !== modalElement && modalElement?.contains(e.target as HTMLElement) === false) {
      onClose();
    }
  };
  return (
    <>
      {showModal && (
        <section onClick={toggleModal} className=" fixed left-0 top-0 h-screen w-screen bg-black bg-opacity-60 flex items-center justify-center">
          <div ref={modalRef} style={{ height: height, width: width }} className=" modal-element">
            {children}
          </div>
        </section>
      )}
    </>
  );
};

export default MCustomModalWrapper;
