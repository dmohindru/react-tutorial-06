import ReactDOM  from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, children, actionBar }) {
    
    useEffect(() => {
        // This statements disables scroll of a page when a modal is displayed
        document.body.classList.add('overflow-hidden');

        // In this cleanup function we revert back scrolling behaviour 
        // that was modified by above line
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return ReactDOM.createPortal (
        <div>
            {/* This div is outer gray boundary show in this modal */}
            <div 
            onClick={onClose} 
            className="fixed inset-0 bg-gray-300 opacity-80"
            ></div>
            {/* This div show inner boundary in this modal */}
            <div className="fixed inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="flex justify-end">
                        {actionBar}
                    </div>
                    
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    );
}

export default Modal;

