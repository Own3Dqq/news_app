import { useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../../store/slices/userSlice'
import Form from './Form'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (event, email, password) => {
        event.preventDefault()

        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user

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
            <h1>Login</h1>
            <Form title={'Sign In'} handleClick={handleLogin} />
        </>
    )
}

export default Login
