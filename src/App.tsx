import { useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const App = () => {
  const [postsData, setPostsData] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleGetPosts = async () => {
    setLoading(true);

    try {
      const postsRequest = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      // const dataJson = await posts.json();
      // console.log(dataJson);

      const posts: Post[] = await postsRequest.json();

      setPostsData(posts);
        
    } catch (error) {
      setError('Error getting posts');
    }

    setLoading(false);
  }

  const handlePostPost = async () => {
    setLoading(true);

    try {
      const postRequest = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
          }),
        }
      );
      // const dataJson = await posts.json();
      // console.log(dataJson);

      const post: Post = await postRequest.json();

      setPostsData([...postsData, post]);
        
    } catch (error) {
      setError('Error getting posts');
    }

    setLoading(false);
  }

  const handlePutPost = async () => {
    setLoading(true);

    try {
      const postRequest = await fetch('https://jsonplaceholder.typicode.com/posts/1',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
          }),
        }
      );
      // const dataJson = await posts.json();
      // console.log(dataJson);

      const post: Post = await postRequest.json();

      setPostsData([...postsData, post]);
        
    } catch (error) {
      setError('Error getting posts');
    }

    setLoading(false);
  }

  return (
    <div>
      <button onClick={handleGetPosts}>Get Posts</button>
      <button onClick={handlePostPost}>Post Post</button>
      <button onClick={handlePutPost}>Put Post</button>

      {loading && <p>Loading...</p>}
      
      {error && <p>{error}</p>}

      <ul>
        {postsData.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;