import { useState } from 'react'

const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <form className="flex flex-col w-[400px]  gap-5  p-4 border-2">
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
                    type="submit"
                    className="bg-red-500 rounded-sm"
                    onClick={(e) => handleClick(e, email, password)}
                >
                    {title}
                </button>

                <div className="flex justify-around">
                    <button>Google</button>
                    <button>GitHub</button>
                </div>
            </form>
        </>
    )
}

export default Form
