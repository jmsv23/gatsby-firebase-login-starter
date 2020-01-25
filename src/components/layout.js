/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"

import AppContext from '../context/AppContext'
import getFirebase from '../context/firebase'
import authPathsCheck from '../helpers/authPathsCheck'
import Header from "./header"
import Login from './login'
import PreLoading from './preloading'
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [loading, setLoading] = useState(true)
  const [firebase, setFirebase] = useState(null)
  const [authStatus, setAuthStatus] = useState(false)
  const [user, setUser] = useState(null)

  const context = {
    user,
    firebase,
    setFirebase,
    loading,
    setLoading
  }

  useEffect(() => {
    const app = require('firebase/app')
    const auth = require('firebase/auth')
    const database = require('firebase/database')

    Promise.all([app, auth, database]).then(values => {
      const firebase = getFirebase(values[0])
      setFirebase(firebase)

      firebase.onAuthUserListener((userInfo) => {
        setLoading(false)
        setUser(userInfo)
        setAuthStatus(true)
      }, () => {
        setLoading(false)
        setUser(null)
        setAuthStatus(false)
      })
    })
  }, [])

  if (loading) return <PreLoading />

  return (
    <AppContext.Provider value={context}>
      <Location>
        {({ location }) => {
          const access = authPathsCheck(authStatus, location.pathname, user)
          return (
            <>
              {access ? (
                <>
                  <Header siteTitle={data.site.siteMetadata.title} />
                  <main>{children}</main>
                </>
              ) : <Login />
              }
            </>
          );
        }}
      </Location>
    </AppContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
