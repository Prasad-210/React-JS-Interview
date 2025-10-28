import React from 'react'
import UseFetch from './UseFetch';

const PostList = () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=5';

    const {data,loading,error} = UseFetch(apiUrl);

    if(loading){
        return <div style={{ textAlign: 'center', padding: '20px' , fontSize:"30px"}}>Loading posts...</div>;
    }

    if(error){
         return <div style={{ color: 'red', textAlign: 'center', padding: '20px' }}>Error: {error}</div>;
    }

  return (
     <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Recent Blog Posts</h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {data.map(post => (
          <li key={post.id} style={{ border: '1px solid #ddd', backgroundColor:"lightcyan", borderRadius: '5px', marginBottom: '15px', padding: '15px' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>{post.title}</h3>
            <p style={{ margin: '0' }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList