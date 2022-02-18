import * as React from "react";
import { Modal as BtsModal, Button } from "react-bootstrap";
import { IModalProps } from '../../interfaces';

export class Modal extends React.Component<IModalProps>
{
    render()
    {
        let { props, onHide, title } = this.props;

        return (
            <BtsModal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                { title 
                    ? (
                        <BtsModal.Header closeButton>
                            <BtsModal.Title id="contained-modal-title-vcenter">{ title }</BtsModal.Title>
                        </BtsModal.Header>
                    )
                    : (
                        <BtsModal.Header closeButton></BtsModal.Header>
                    )
                }
                { props.children ? (<BtsModal.Body>{props.children}</BtsModal.Body>) : undefined}
                <BtsModal.Footer>
                    <Button onClick={onHide}>Close</Button>
                </BtsModal.Footer>
            </BtsModal>
        );
    }
}