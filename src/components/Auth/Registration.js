import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useStore } from '../../store/store'
import Form from './Form'

const Registration = () => {
    const handleRegister = (email, password) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
            })
    }

    return (
        <>
            <h1>Registration</h1>
            <Form title="sign up" handleClick={handleRegister} />
        </>
    )
}

export default Registration
