import React, { useEffect, useState } from 'react'


// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM
// - Ưu tiên xử lý UI người dùng

// 2. useEffect(callback, [])
// - Chỉ gọi khi component mounted
// 3. useEffect(callback, [deps])
// - Callback sẽ được gọi lại mỗi khi deps thay đổi

// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi component unmounted
// 3, Cleanup function luôn được gọi trước khi callback được gọi (trước
// lần mounted)

const Content = () => {
    const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];

    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [showGoToTop,setShowGoToTop] = useState(false);

    useEffect (() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {setPosts(posts)});
    }, [type]);

    useEffect(() => {
        const handledScroll = () => {
            window.scrollY >= 400 ? setShowGoToTop(true) : setShowGoToTop(false);
        }
        window.addEventListener('scroll', handledScroll);

        // Clean up function
        return () => {
            console.log('Unmounting')
        }
    }, []);

    return (
        <div>
            {tabs.map(tab => (
                <button 
                    key = {tab}
                    style = {type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick = {() => setType(tab)}
                >
                    {tab}
                </button>
            ))}

            <input 
                value = {title} 
                onChange = {(e) => {setTitle(e.target.value)}} 
                label = 'Enter the content'
                type = 'type'
                placeholder = 'Enter the content ...'
            />
            

            <ul>
                {posts.map(post => (
                    <li key = {post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            
            {showGoToTop && (
                <button
                    style = {{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                >
                    Go to top
                </button>
            )}
            
        </div>
    )
}

export default Content