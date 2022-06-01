import React from 'react';

const AlertDialogModal = (props) => {
  const { title, isOpen, alertMsg, buttonTitle, handleButtonClick, testid } = props;

  return (
    <div className={'modal_wrapper ' + isOpen}>
      <div className="alert-dialog-container">
        <div
          className="alert-dialog-title"
          data-testid={`${testid}-title`}>
          {title}
        </div>
        <div data-testid={`${testid}-body`} className="alert-dialog-content">
          {alertMsg}
        </div>
        <div className="alert-dialog-footer">

          <button onClick={handleButtonClick} className="alert-dialog-button" data-testid={`${testid}-button`}>
            {buttonTitle}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AlertDialogModal;
