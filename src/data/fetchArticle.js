import { defer } from 'react-router-dom'

async function getArticle(id) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    return await response.json()
}

const fetchArticle = async ({ params }) => {
    const { id } = params
    return defer({ article: getArticle(id) })
}

export default fetchArticle
