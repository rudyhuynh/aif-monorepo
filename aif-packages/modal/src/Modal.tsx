import "./Modal.css";

type ModalPropTypes = {
  onClose: () => void;
  content: React.ReactNode;
};

export const Modal = ({ onClose, content }: ModalPropTypes) => {
  return (
    <div className="Modal modal d-block" tabIndex={-1}>
      <div className="backdrop" onClick={onClose}></div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"></h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">{content}</div>
        </div>
      </div>
    </div>
  );
};
