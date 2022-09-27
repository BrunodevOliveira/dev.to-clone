import React from "react";
import styles from "./App.module.scss";
import { Header } from "./components/Header";
import { LeftSidebar } from "./components/LeftSidebar";
import { Post } from "./components/Post";
import { RightSidebar } from "./components/RightSidebar";

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
        <RightSidebar />
      </main>
    </>
  );
}

export default App;
