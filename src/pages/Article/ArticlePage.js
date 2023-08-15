import React, { Suspense } from 'react'

import { useLoaderData, Link } from 'react-router-dom'
import { Await } from 'react-router-dom'

const ArticlePage = () => {
    const { article } = useLoaderData()

    return (
        <>
            <Suspense fallback={<h2>Loading.....</h2>}>
                <Await resolve={article}>
                    {(resolve) => (
                        <>
                            {
                                <div className="flex flex-col">
                                    <h1>{resolve.title}</h1>
                                    <span>----------------------------</span>
                                    <p>{resolve.body}</p>
                                    <Link to={`/article/${resolve.id}/edit`}>
                                        Edit
                                    </Link>
                                </div>
                            }
                        </>
                    )}
                </Await>
            </Suspense>
            <div>
                <h3>Comments</h3>
            </div>
        </>
    )
}

export default ArticlePage
