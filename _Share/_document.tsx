import { Html, Head, Main, NextScript } from 'next/document';

/** Second level in Next.js document tree, where my top-level components are rendered.
 *
 * Note: This seems to render AFTER the page and only on hard page refresh, not internal navigation.
 */
export default function Document() {
  return (
      <Html className='h-full' lang="en">
        <Head/>
        <body
          className={
              `h-full `
            + `bg-blue-900 `
            + `background-animate bg-gradient-radial from-blue-800 via-blue-900 to-blue-800`
        }
        >
          <Main />
          <NextScript />
        </body>
      </Html>
  )
};
