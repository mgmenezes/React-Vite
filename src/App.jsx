import { Post } from "./components/Post";
import { Header } from "./components/Header";
import "./global.css";

import styles from "./App.module.css";
import { SideBar } from "./components/Sidebar";

export const posts = [
  {
    id: 1,
    author: {
      name: "Moises",
      avatarUrl: "https://github.com/mgmenezes.png",
      role: "frontend",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa.",
      },
      {
        type: "paragraph",
        content:
          "É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare",
      },
      {
        type: "text",
        content: "#rocketseat #novoprojeto #nlw",
      },
    ],
    publishedAt: new Date("2023-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      name: "John Doe",
      avatarUrl: "https://github.com/maykbrito.png",
      role: "backend",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa.",
      },
      {
        type: "paragraph",
        content:
          "É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare",
      },
      {
        type: "text",
        content: "#rocketseat #novoprojeto #nlw",
      },
    ],
    publishedAt: new Date("2023-12-25 13:08:44"),
  },
];
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
