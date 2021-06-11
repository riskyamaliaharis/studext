import Head from "next/head";
import Statistic from "../components/Statistic";
import Navbar from "../components/Navbar";
import Story from "../components/Story";
import CoursePreview from "../components/CoursePreview";
import Ranking from "../components/Ranking";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Studext</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="p-3 rounded-lg shadow-xl mb-5 cursor-pointer">
        <Story />
      </div>

      <div className="grid grid-rows-3  grid-flow-col gap-4 ">
        <div className="lg:col-span-2 bg-gray-300 rounded-lg shadow-xl p-3"></div>
        <div className="lg:row-span-2 lg:col-span-2 bg-yellow-300 rounded-lg shadow-xl">
          <Statistic />
        </div>
        <div className="lg:row-span-3 bg-pink-300 rounded-lg shadow-xl">
          <CoursePreview />
        </div>
      </div>
      <div className="grid grid-col-3 mt-4 ">
        <div className="col-start-1 col-end-4 bg-red-500 rounded-lg shadow-xl">
          <Ranking />
        </div>
      </div>

      <style jsx>{``}</style>

      <style jsx global>{``}</style>
    </div>
  );
}
