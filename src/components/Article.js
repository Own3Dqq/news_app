import React from 'react'

import { Link } from 'react-router-dom'

const Article = ({ article }) => {
    return (
        <>
            {
                <Link to={`/article/${article.id}`}>
                    <li className="flex w-full max-h-[250px] flex-col border-b-2 shadow-md border-black/20 py-5 hover:border-red-500 hover:shadow-2xl hover:transition-all hover:duration-300 ">
                        <div className="p-4">
                            <h3 className="text-2xl mb-4 font-sans">
                                {article.title}
                            </h3>
                            <pre className="text-md font-sans overflow-ellipsis">
                                {article.body}
                            </pre>
                        </div>
                    </li>
                </Link>
            }
        </>
    )
}

export default Article
