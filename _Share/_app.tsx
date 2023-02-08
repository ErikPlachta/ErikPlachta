import Head from "next/head";
import { usePathname } from "next/navigation";

import "../styles/globals.css";
import Footer from "@/components/footer";


/** Next.js Parent Wrapper around website. */
export default function App({ 
  Component = Object(),
  pageProps = Object() 
}){

  //-- Extract the current page name from the pathname.
  const pathname = usePathname();

  //-- Builds the path data to send to the footer.
  const getPathData = (pathname : string) => {
    const path = pathname.split("/");
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
  const pathData = getPathData(pathname && pathname != '/' ? pathname : '/Home');

  return (
    <>
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
    </>
  );
};
