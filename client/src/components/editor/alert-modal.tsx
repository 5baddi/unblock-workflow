import * as React from "react";
import { Button, Modal } from "react-bootstrap";
import { IEditorAlertModalProps } from "../../interfaces";

class AlertModal extends React.Component<IEditorAlertModalProps>
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const {...rest} = this.props;

        return (
            <Modal
                {...rest}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <h4>Form already opened by another user!</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success">Request editing permission</Button>
                    <Button onClick={rest.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AlertModal;