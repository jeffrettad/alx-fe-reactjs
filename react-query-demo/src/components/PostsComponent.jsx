import React from "react";
import { useQuery } from "react-query";

function PostsComponent() {

  // Fetch posts function
  const fetchPosts = async () => {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    return response.json();
  };

  // React Query with required caching options
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
      cacheTime: 1000 * 60 * 10,        // cache for 10 minutes
      staleTime: 1000 * 60 * 5,         // fresh for 5 minutes
      refetchOnWindowFocus: true,       // refetch when window focus
      keepPreviousData: true            // keep previous data during refetch
    }
  );

  if (isLoading) {
    return <h2>Loading posts...</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  return (

    <div>

      <h1>Posts List</h1>

      <button onClick={refetch}>
        Refetch Posts
      </button>

      {data.map((post) => (

        <div key={post.id}
             style={{
               border: "1px solid gray",
               margin: "10px",
               padding: "10px"
             }}>

          <h3>{post.title}</h3>

          <p>{post.body}</p>

        </div>

      ))}

    </div>

  );
}

export default PostsComponent;