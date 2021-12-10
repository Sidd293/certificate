import '../styles/bootstrap.min.css'
import '../styles/animate.min.css'
import '../styles/boxicons.min.css'
import '../styles/meanmenu.min.css'
import '../styles/flaticon.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import 'react-tabs/style/react-tabs.css'
import 'react-image-lightbox/style.css'
import '../styles/style.css'
import '../styles/responsive.css'
import Script from "next/script";

// If you want RTL style, comment out below line
// import '../styles/rtl.css'

import Layout from '../components/_App/Layout'
import axios from 'axios'
import { parseCookies, destroyCookie } from 'nookies'
import { redirectUser } from '../utils/auth'
import baseUrl from '../utils/baseUrl'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../lib/gtag'

const MyApp = ({ Component, pageProps }) => {
  // console.log(pageProps)

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  
  return (
        <Layout {...pageProps}>
            <Script 
              strategy="lazyOnload"
              src={"https://www.googletagmanager.com/gtag/js?id=G-GDVE35DQM5"}
            />
            <Script strategy="lazyOnload">
              { `
                window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-GDVE35DQM5');
              `}
            </Script>
            <Component {...pageProps} />
        </Layout>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const { token } = parseCookies(ctx)
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  if (!token) {
    // if a user not logged in then user can't access those pages
    const isProtectedRoute = ctx.pathname === '/become-a-teacher' ||
        ctx.pathname === '/my-courses' ||
        ctx.pathname === '/teacher/courses'

    if (isProtectedRoute) {
      redirectUser(ctx, '/authentication')
    }
  } else {
    // if a user logged in then user can't access those pages
    const ifLoggedIn = ctx.pathname === '/authentication' ||
        ctx.pathname === '/reset-password'
    if (ifLoggedIn) {
      redirectUser(ctx, '/')
    }
    try {
      const payload = { headers: { Authorization: token } }
      const url = `${baseUrl}/api/v1/auth/account`
      const response = await axios.get(url, payload)
      const user = response.data

      // console.log(user)
      // If user status disabled then user autometically logged out
      if (!user || !user.active) {
        destroyCookie(ctx, 'token')
      }

      pageProps.user = user
    } catch (error) {
      // console.error("Error getting current user", error);
      // invalid token
      // console.log(error)
      destroyCookie(ctx, 'token')
    }
  }

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    pageProps
  }
}

export default MyApp
