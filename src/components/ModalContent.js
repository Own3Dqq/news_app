import React, { useEffect } from 'react'

const ModalContent = ({ onClose, children }) => {
    useEffect(() => {}, [])

    return (
        <div className="bg-gray-800 h-full w-full fixed -top-0 -left-0">
            <div className="w-[450px] h-[350px] p-6 bg-white text-red absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button
                    className="text-black absolute top-3 right-5"
                    onClick={onClose}
                >
                    X
                </button>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default ModalContent
