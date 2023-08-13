import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const GET_POPULAR_DICSUSS = 'https://.../'
const Discuss = () => {
    // useEffect(() => {
    //     fetch(GET_POPULAR_DICSUSS)
    // }, [])

    return (
        <div className="pb-10 border-b-2 border-black/20">
            <h3 className="text-md font-semibold mb-4">#discuss</h3>
            <ul className="flex flex-col gap-y-4">
                <li>
                    <Link to={`/discuss/id}`}>
                        Latest Newsletter - Browser Runs All the Things (Issue
                        #127)
                    </Link>
                </li>
                <li>
                    <Link to={`/discuss/id}`}>
                        What parts of JavaScript are tricky for beginners?
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Discuss
