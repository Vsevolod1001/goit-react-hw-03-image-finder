import React, {Component} from "react";
import { Overlay, ModalEl } from "./Modal.styled";

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.hendleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.hendleKeyDown)

    }
    hendleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose()
          }
    }
    hendleBackdropClick = e => {
        if(e.currentTarget === e.target) {
            this.props.onClose();
        }
    }
    render () {
        return (
            <Overlay onClick={this.hendleBackdropClick}>
                <ModalEl>
                    <img src={this.props.srsLarge} alt="" />
                </ModalEl>
            </Overlay>
        )
    }
    
}
export default Modal