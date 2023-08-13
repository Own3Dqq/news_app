import React, { useEffect, useState } from 'react'
import Article from './Article'

const URL = 'https://jsonplaceholder.typicode.com/posts?limit=10&skip=10'

const ArticlesList = ({ activeTopic }) => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        try {
            fetch(URL + 'activeTopic')
                .then((responce) => responce.json())
                .then((data) => setArticles(data))
        } catch (error) {
            console.log(error)
        }
    }, [activeTopic])

    return (
        <>
            <ul className="flex flex-col gap-y-10">
                {articles.map((article) => {
                    return (
                        <Article article={article} key={article.id}></Article>
                    )
                })}
            </ul>
        </>
    )
}

export default ArticlesList
