import { useEffect, useState } from "react";

export default function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const url = "https://expo-post-app-4a4f3-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
            const response = await fetch(url);
            const data = await response.json();
            console.log("Data fra Firebase:", data);
        }
        getPosts();
    }, []);

    return(
        <section className="page">

            <h1>Posts kommer her</h1>

        </section>
    );
}
