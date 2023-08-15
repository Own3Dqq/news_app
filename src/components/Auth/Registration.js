import { useDispatch } from 'react-redux'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import Form from './Form'
import { setUser } from '../../store/slices/userSlice'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = (event, email, password) => {
        event.preventDefault()
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessTokin,
                    })
                )
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <h1>Registration</h1>
            <Form title={'Register'} handleClick={handleRegister} />
        </>
    )
}

export default Registration
