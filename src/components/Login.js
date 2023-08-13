import React from 'react'
import { useState } from 'react'
import { createPortal } from 'react-dom'

import ModalContent from './ModalContent'

const Login = () => {
    const [showModal, setShowModal] = useState(false)

    const handleModalWindow = (target) => {
        console.log(target)
        setShowModal(true)
    }

    return (
        <div className="flex justify-end mb-6 gap-x-2">
            <button
                onClick={(event) => handleModalWindow(event.currentTarget)}
                className="py-2 px-5"
            >
                Log In
            </button>
            <button
                onClick={(event) => handleModalWindow(event.currentTarget)}
                className="py-2 px-4 bg-red-500 text-white rounded-sm"
            >
                Sign Up
            </button>
            {/* ModalWindow */}
            {showModal &&
                createPortal(
                    <ModalContent
                        onClose={() => setShowModal(false)}
                    ></ModalContent>,
                    document.body
                )}
        </div>
    )
}

export default Login
