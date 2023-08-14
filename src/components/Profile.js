import { useDispatch } from 'react-redux'
import { removeUser } from '../store/slices/userSlice'

const Profile = ({ email }) => {
    const dispatch = useDispatch()

    return (
        <div className="flex">
            <div>Profile</div>
            <button onClick={dispatch(removeUser())}>
                Log Out from {email}
            </button>
        </div>
    )
}

export default Profile
