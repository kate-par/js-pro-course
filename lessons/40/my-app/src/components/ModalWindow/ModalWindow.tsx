import React, { ReactElement, useEffect } from "react";
import "./ModalWindow.css";

interface ModalProps {
  visible: boolean;
  title: string;
  content: ReactElement | string;
  onClose: () => void;
}

const ModalWindow = ({
  visible = false,
  title = "",
  content = "",
  onClose,
}: ModalProps) => {
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  if (!visible) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-content">{content}</div>
        </div>
        <div className="modal-footer">
          {
            <button className="modal-button" onClick={onClose}>
              Close
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
