import React from 'react'
import { Link } from 'react-router-dom'

import { BiSearch } from 'react-icons/bi'

const Search = () => {
    return (
        <div className="relative h-[40px] w-2/4 flex self-end border-2 border-solid border-black/10 rounded-sm">
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                <Link to={'/'}>
                    <BiSearch color="black/10" size={20} />
                </Link>
            </div>
            <div className="w-full h-full">
                <input
                    className="px-8 py-2 h-full w-full outline-transparent focus-within:outline-red-500   duration-300"
                    type="text"
                />
            </div>
        </div>
    )
}

export default Search
