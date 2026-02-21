import React from "react";
import { useQuery } from "react-query";

function PostsComponent() {

  // Fetch function
  const fetchPosts = async () => {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
      throw new Error("Error fetching posts");
    }

    return response.json();
  };

  // useQuery hook
  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery(
    "posts",
    fetchPosts,
    {
      staleTime: 60000
    }
  );

  // Loading state
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  // Error state
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (

    <div>

      <h1>Posts</h1>

      <button onClick={refetch}>
        Refetch Posts
      </button>

      {data.map((post) => (

        <div key={post.id}>

          <h3>{post.title}</h3>

          <p>{post.body}</p>

        </div>

      ))}

    </div>

  );
}

export default PostsComponent;