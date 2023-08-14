import { useUser } from '../store/store'

const Profile = () => {
    const [removeUser] = useUser()

    console.log(removeUser)

    return (
        <div className="flex">
            <div>Profile</div>
            <button onClick={removeUser()}>Log Out</button>
        </div>
    )
}

export default Profile
