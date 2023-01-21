import { NextPage } from "next";
import Head from "next/head";
import TodoInput from "@/containers/todoInput";
import TodoList from "@/containers/todoList";
import Layout from "@/components/layout/layout";
import Main from "@/components/layout/main";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Todos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Main>
          <TodoInput />
          <TodoList />
        </Main>
      </Layout>
    </div>
  );
};

export default Home;
