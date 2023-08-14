import React, { useState, useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const ArticlePage = () => {
    const URL = 'https://jsonplaceholder.typicode.com/posts/'
    const { id } = useParams()
    const [article, setArticle] = useState([])

    console.log(id)

    useEffect(() => {
        try {
            fetch(URL + `${id}`)
                .then((responce) => responce.json())
                .then((data) => setArticle(data))
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div className="flex flex-col">
            <div>{article.title}</div>
            <div>{article.body}</div>
        </div>
    )
}

export default ArticlePage
