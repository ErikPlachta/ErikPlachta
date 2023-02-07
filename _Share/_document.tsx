import React, { createContext, useEffect }  from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import Footer from '@/components/footer';

import Interfaces from "@/interfaces/index";  //TODO: 20230205 #EP || Build ths out or delete it.
import NavItems from "@/components/context/Navigation";
export const GlobalContext = createContext({});


/** Second level in Next.js document tree, where my top-level components are rendered.
 * 
 */
export default function Document( props: any ) {

  const GlobalContextValue = {
    interfaces  : Interfaces,                    //TODO: 20230205 #EP || Build ths out or delete it.
    Navigation  : NavItems,
  };

  const getPathData = () => {
    const path = props?.__NEXT_DATA__?.page.split("/");
    const numberPath = path?.length;
    console.log("path: ", path)
    
    return {
      current : path[numberPath - 1],
      previous : path.slice(0, numberPath - 1)
    }
  }
  // console.log(setPathData())

  // TODO: Verify if this is the right way to force a re-render when props change or if should send props somewhere else instead.
  useEffect(() => { }, [props]);

  return (
    <GlobalContext.Provider value={GlobalContextValue}>
      <Html className='h-full' lang="en">
        <Head/>
        <body
          className={
              `h-full `
              // + `bg-gradient-to-b from-slate-900 to-slate-900/90 `
            + `bg-blue-900 `
            + `background-animate bg-gradient-radial from-blue-800 via-blue-900 to-blue-800`
        }
        >
          <Main />
          <NextScript />
          <Footer 
            developerName='Erik Plachta'
            showDeveloperName={true}
            brandName={'ErikPlachta.com'}
            showBrandName={false}
            logo={{
              image: [],
              alt: 'Erik Plachta',
              link: {
                href: '/',
                target: '_self',
                rel: 'home',
                name: 'Erik Plachta',
              }
            }}
            
            BreadCrumb={{
              // current: props?.__NEXT_DATA__?.page
              //  && props?.__NEXT_DATA__?.page != '/' 
              //           ? props.__NEXT_DATA__.page
              //           : '/Home'
              ...getPathData(),
              // previous: ['todo'],
              
              Navigation: {
                page: props.__NEXT_DATA__.page,
                ...props
              },
            }}
          />
        </body>
      </Html>
    </GlobalContext.Provider>
  )
};



export function getServerSideProps() {
  console.log("getServerSideProps: " , getServerSideProps)
  return {
    props: {
      // TODO: 20230206 || Add additional props.
    },
  }
}
