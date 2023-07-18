import '@/styles/globals.css';
import Nav from './component/navbar/Nav';
import'@/styles/Home.module.css';


export default function App({ Component, pageProps }) {
  return<>
  <Nav/>
  <Component {...pageProps} />
  </>
}
