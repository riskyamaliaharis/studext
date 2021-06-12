import "../styles/global.css";
export default function App({ Component, pageProps }) {
  return (
    <div className="container mx-auto pb-20">
      <Component {...pageProps} />
    </div>
  );
}
