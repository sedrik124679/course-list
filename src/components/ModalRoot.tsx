import { EnrollModal, ViewModal } from "@src/components/modals";
import { useModal } from "@src/contexts/ModalContext";
import { Fragment } from "react";

export enum ModalTypes {
    VIEW_MODAL = "VIEW_MODAL",
    ENROLL_MODAL = "ENROLL_MODAL",
}

const MODALS_BY_TYPE = {
    [ModalTypes.VIEW_MODAL]: ViewModal,
    [ModalTypes.ENROLL_MODAL]: EnrollModal
};

type ModalType = keyof typeof ModalTypes;

const ModalRoot = () => {
    const { isOpen, modalType, modalProps, closeModal } = useModal();
    const SpecificModal = modalType && MODALS_BY_TYPE[modalType as ModalType];

    return (
        <Fragment>
            {SpecificModal ? <SpecificModal {...modalProps} isOpen={isOpen} handleClose={closeModal} /> : null}
        </Fragment>
    );
};

export default ModalRoot;
