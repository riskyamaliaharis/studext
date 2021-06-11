import Head from "next/head";
import Statistic from "../components/Statistic";
import Navbar from "../components/Navbar";
import Story from "../components/Story";
import { classData } from "../lib/class";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Studext</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Story />
      <Statistic />
      <div>
        {classData.map((item) => (
          <p>
            {item.subject}, {item.price}
          </p>
        ))}
      </div>

      <style jsx>{``}</style>

      <style jsx global>{``}</style>
    </div>
  );
}
