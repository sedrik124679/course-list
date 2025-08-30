import React, { createContext, useContext, useState, ReactNode } from "react";

type ModalContextProps = {
    isOpen: boolean;
    modalType: string;
    modalProps: any;
    openModal: (type: string, props?: any) => void;
    closeModal: () => void;
};

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState<string>("");
    const [modalProps, setModalProps] = useState<any>({});

    const openModal = (type: string, props: any = {}) => {
        setModalType(type);
        setModalProps(props);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setModalType("");
        setModalProps({});
    };

    return (
        <ModalContext.Provider value={{ isOpen, modalType, modalProps, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};
