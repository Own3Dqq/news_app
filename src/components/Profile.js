import { useDispatch } from 'react-redux'

const Profile = ({ email, removeUser }) => {
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
