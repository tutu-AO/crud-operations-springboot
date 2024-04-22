import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalEdit({ modalIsOpen }){
    const [modal, setModal] = useState(modalIsOpen);
    const [focusAfterClose, setFocusAfterClose] = useState(false);
    const closePopup = () => {
        setModal(false);
    };
    return (
        <div>
            <Modal returnFocusAfterClose={focusAfterClose} isOpen={modal} >
                <ModalHeader>Modal title</ModalHeader>
                <ModalBody>
                    <h1>I'm in a modal!</h1>
                </ModalBody>
                <ModalFooter>
                  <Button outline color="primary" onClick={closePopup}>
                    Do Something
                  </Button>{' '}
                  <Button outline color="secondary" onClick={closePopup}>
                    Cancel
                  </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalEdit;

