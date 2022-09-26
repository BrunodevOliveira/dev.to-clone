import React from "react";
import styles from "./App.module.scss";
import { Header } from "./components/Header";
import { LeftSidebar } from "./components/LeftSidebar";
import { Post } from "./components/Post";

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <aside className={styles.leftSidebar}>
          <LeftSidebar />
        </aside>
        <section className={styles.postBox}>
          <Post />
        </section>
      </main>
    </>
  );
}

export default App;
