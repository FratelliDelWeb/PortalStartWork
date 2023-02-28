import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/index.scss";
import { useEffect } from "react";
import ScrollToTop from "../components/common/ScrollTop";
/* import { Provider } from "react-redux"; */
import { store } from "../app/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Provider } from "react-redux";
import Loader from "../components/loader/Loader";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps  }) {
  // aos animation activation
/*   console.log(pageProps.session , "APPPPPP") */
  useEffect(() => {
    Aos.init({
      duration: 1400,
      once: true,
    });
  }, []);

  return (
    (
      <SessionProvider  session={pageProps.session}>
        <Provider store={store}>
        {Component.auth ? (
          <Auth>
            <div>
            <Component {...pageProps} />
            
            <ToastContainer
              position="bottom-right"
              autoClose={500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
           
            <ScrollToTop />
            </div>
           
          </Auth>
        ) : (
          <><Component {...pageProps} /><div><Loader></Loader></div></>
        )}
        </Provider>
      </SessionProvider>
    )


  );
}

export default MyApp;


function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true })

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return children

}