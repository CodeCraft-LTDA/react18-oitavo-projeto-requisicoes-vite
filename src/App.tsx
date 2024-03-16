const App = () => {

  const handleGetPosts = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const dataJson = await posts.json();
    console.log(dataJson);
  }

  return (
    <div>
      <button onClick={handleGetPosts}>Get Posts</button>
    </div>
  );
}

export default App;