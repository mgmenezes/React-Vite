import { Post } from "./Post";
import { Header } from "./components/Header";
import "./styles.css";

export function App() {
  return (
    <div>
      <Header />
      <Post />
      <Post />
    </div>
  );
}
