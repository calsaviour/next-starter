import { NextPage } from "next";
import Layout from "@/components/layout/layout";
import { cn } from "@/utils/tailwind";

const Home: NextPage = () => {
  return (
    <Layout>
      <div
        className={cn(
          "flex h-[80%] w-screen items-center justify-center align-middle",
        )}
      >
        <label className={cn("text-9xl font-black")}>Todos</label>
      </div>
    </Layout>
  );
};

export default Home;
