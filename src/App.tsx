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

  const handleGetPosts = async () => {
    setLoading(true);

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

    setLoading(false);

    setPostsData(posts);
  }

  return (
    <div>
      <button onClick={handleGetPosts}>Get Posts</button>
      {loading && <p>Loading...</p>}
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