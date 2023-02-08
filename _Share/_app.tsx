import { createContext }  from 'react';
import Head from "next/head";
import { useRouter } from 'next/router';

import NavItems from "@/components/context/Navigation";
import Footer from "@/components/footer";
import "../styles/globals.css";

//-- TODO: 20230208 #EP || Evaluate if this is needed or can be removed.
export const GlobalContext = createContext({});

/** pathData BreadCrumb is expecting */
type pathData = { current: string, previous: string[] };


/** Next.js Parent Wrapper around website. */
export default function App({ 
  Component = Object(),
  pageProps = Object() 
}){
  const GlobalContextValue = {
    Navigation  : NavItems,   //TODO: Use NavItems to build head meta data
  };

  //-- Extract the current page name from the pathname.
  let { pathname } = useRouter();

  /** Builds the path data to send to the footer.
   */
  function handleGetPathData():pathData {
    let path = (pathname && pathname != '/' ? pathname : '/Home').split("/");
    const pathFormatted = path.map((item:string) => {
      let uppercase = (item && item[0].toUpperCase() + item.slice(1)) || ""
      return uppercase;
    });

    const numberPath = pathFormatted?.length;
    return {
        current :  pathFormatted[numberPath - 1],
        previous : pathFormatted.slice(0, numberPath - 1)
      }
  }
  
  /** Builds the BreadCrumb path data to send to the footer.BreadCrumb.
  */
  const pathData = handleGetPathData();

  return (
    <GlobalContext.Provider value={GlobalContextValue}>
      <Head>
        <title>Erik Plachta</title>
        <meta name="description" content="Erik Plachta's personal website." />
        <meta name="author" content="Erik Plachta" />
        <meta name="keywords" content="" /> {/*//TODO: Add keywords */}
        {/*//TODO: Update with missing meta. */}
        
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

        <main className={`h-[100%] max-w-[1200px] flex flex-col m-auto overflow-hidden ` }>
          
           {/** NextJS Container pages render within. */}
          <Component {...pageProps} />

          {/**  Custom Footer Component. */}
          <Footer 
            developerName='Erik Plachta'
            showDeveloperName={true}
            brandName={'ErikPlachta.com'}
            showBrandName={false}
            
            
            /** Feeding data to the logo component within footer. */
            logo={{  //TODO: Finalize the logo component within footer and then add image here.
              image: [],
              alt: 'Erik Plachta',
              link: {
                href: '/',
                target: '_self',
                rel: 'home',
                name: 'Erik Plachta',
              }
            }}
            
            /** Feeding data to breadcrumbs of current location into footer. */
            BreadCrumb={{
              current : pathData.current,
              previous : [...pathData.previous],
              Navigation: []
            }}
          />
        </main>
    </GlobalContext.Provider>
  );
};
