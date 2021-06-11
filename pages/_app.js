import "../styles/global.css";
export default function App({ Component, pageProps }) {
  return (
    <div className="mx-32 my-5">
      <Component {...pageProps} />
    </div>
  );
}
