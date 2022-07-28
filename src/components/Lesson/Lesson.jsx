import React from 'react'
import { useState, useEffect } from 'react';

const Lesson = () => {

    const lessons = [
        {
            id: 1,
            name: 'What is React JS'
        },

        {
            id: 2,
            name: 'What is SPA/MPA'
        },
        {
            id: 3,
            name: 'Arrow Function'
        },
        {
            id: 4,
            name: 'Hoisting in JS'
        },
    ];

    const [lessonId, setLessonId]  = useState(1);

    useEffect(() => {
        const handledComment = ({ detail }) => {
            console.log(detail);
        }

        window.addEventListener(`lesson-${lessonId}`, handledComment)

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handledComment)
        }
    }, [lessonId]);

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key = {lesson.id}
                        style = {{
                            color: lessonId === lesson.id ?
                            'red': '#333'
                        }}
                        onClick = {() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Lesson