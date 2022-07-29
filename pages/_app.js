import '../public/styles/global.css'
import Header from '../components/header';


export default function App({ Component, pageProps }) {
    console.log(pageProps)
    return (
        <>
            <Header /> {/* bu header her yerde olucak  */}
            <Component {...pageProps} />
        </>
    );
  }
  // global css için böyle bi dosyaya css import etmemiz gerekiyor