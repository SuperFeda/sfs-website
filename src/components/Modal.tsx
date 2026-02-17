import React, {useEffect, useRef} from "react";

interface ModalProps extends React.PropsWithChildren {
    className?: string
    open: boolean
    onClose: () => void
}

export function Modal({children, className = "", open, onClose}: ModalProps) {
    const modalRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        const dialog = modalRef.current;
        if (!dialog) return;

        if (open) {
            dialog.showModal();
        } else {
            dialog.close();
        }

        const handleCancel = (e: Event) => {
            e.preventDefault();
            onClose();
        };

        const handleClickOutside = (e: MouseEvent) => {
            const rect = dialog.getBoundingClientRect();
            if (
                e.clientX < rect.left ||
                e.clientX > rect.right ||
                e.clientY < rect.top ||
                e.clientY > rect.bottom
            ) {
                onClose();
            }
        };

        if (open) {
            dialog.addEventListener("cancel", handleCancel);
            dialog.addEventListener("click", handleClickOutside);
        }

        return () => {
            dialog.removeEventListener("cancel", handleCancel);
            dialog.removeEventListener("click", handleClickOutside);
        };
    }, [open])

    return (
        <dialog ref={modalRef} className={`modal ${className}`}>
            {children}
        </dialog>
    )
}