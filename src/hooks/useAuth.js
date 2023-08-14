// import useSelector from 'react-redux'
import { useUser } from '../store/store'

export function useAuth() {
    // const { email, token, id } = useSelector((state) => state.user)
    const { email, token, id } = useUser((state) => state.user)

    return {
        isAuth: !!email,
        email,
        token,
        id,
    }
}
