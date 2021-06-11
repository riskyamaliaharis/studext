import "../styles/global.css";
export default function App({ Component, pageProps }) {
  return (
    <div className="container mx-auto">
      <Component {...pageProps} />
    </div>
  );
}
