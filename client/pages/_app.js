import "@/styles/css/fontawesome-all.min.css";
import "@/styles/css/index.css";
import AuthProvider from '../src/context/AuthContext';

function MyApp({ Component, pageProps }) {
    return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    )
  }

export default MyApp