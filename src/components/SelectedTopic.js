import React from 'react'
import { Link } from 'react-router-dom'

const topics = ['For you', 'Relevant', 'Latest', 'Top']

const SelectedTopic = ({ activeTopic, setActiveTopic }) => {
    return (
        <div>
            <ul className="flex item-center gap-3 mb-4">
                {topics.map((topic, index) => {
                    return (
                        <li
                            key={index}
                            onClick={(e) => setActiveTopic(e.target.innerText)}
                            className={
                                topic === activeTopic
                                    ? 'text-red-500'
                                    : 'text-black'
                            }
                        >
                            <Link to={`?topic=${topic}`}>{topic}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SelectedTopic
