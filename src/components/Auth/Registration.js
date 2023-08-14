import { useDispatch } from 'react-redux'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import Form from './Form'
import { setUser } from '../../store/slices/userSlice'

const Registration = () => {
    const dispatch = useDispatch()

    const handleRegister = (email, password) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user)
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessTokin,
                    })
                )
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
            })
    }

    return (
        <>
            <h1>Registration</h1>
            <Form title="Register" handleClick={handleRegister} />
        </>
    )
}

export default Registration
