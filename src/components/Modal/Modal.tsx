import ReactModal from 'react-modal';

import Button from '../Button/Button';

import styles from './Modal.module.css';

const modalStyle: ReactModal.Props['style'] = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
};

interface ModalProps extends ReactModal.Props {
    title: string;
    handleClose: VoidFunction;
}

/* Should add nice svg cross icon instead of plain text, and maybe some nicer modal styles */
/* ESC and overlay click should close the modal out of the box, it is not working now, supposed to debug and fix it of course */
const Modal: React.FC<ModalProps> = (props) => (
    <ReactModal
        isOpen={props.isOpen}
        onAfterClose={props.onAfterClose}
        style={modalStyle}
    >
        <div className={styles.header}>
            <h2 className={styles.title}>{props.title}</h2>
            <Button className={styles.closeButton} onClick={props.handleClose}>
                X
            </Button>
        </div>

        <div className={styles.content}>{props.children}</div>
    </ReactModal>
);

export default Modal;
