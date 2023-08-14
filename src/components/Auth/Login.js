import { useUser } from '../../store/store'
import Form from './Form'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const [user, setUser] = useUser((state) => [state.user, state.setUser])

    const handleLogin = (email, password) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user)
                setUser(user)
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
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
