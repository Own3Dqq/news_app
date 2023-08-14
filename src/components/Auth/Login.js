import { useDispatch } from 'react-redux'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Form from './Form'
import { setUser } from '../../store/slices/userSlice'

const Login = () => {
    const dispatch = useDispatch()

    const handleLogin = (email, password) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
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
                alert('Invalid user')
            })
    }

    return (
        <>
            <h1>Login</h1>
            <Form title="sign in" handleClick={handleLogin} />
        </>
    )
}

export default Login
