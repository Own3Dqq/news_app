import { useState } from 'react'

const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <form className="flex w-[300px] gap-5 flex-col p-4 border-2">
                <div className="flex flex-col">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>

                <div className="flex flex-col">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>

                <button
                    className="bg-red-500 rounded-sm"
                    onClick={() => handleClick(email, password)}
                >
                    {title}
                </button>
            </form>
        </>
    )
}

export default Form
