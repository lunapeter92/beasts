import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeasts extends React.Component{
    handleClose = () => {
        this.props.closeModal();
    }

    render(){
        return(
            <Modal show={this.props.state} onHide={this.props.close}>
                <Modal.Header>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.description}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.close}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default SelectedBeasts;