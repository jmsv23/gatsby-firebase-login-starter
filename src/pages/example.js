import React from "react"
import { Button } from 'semantic-ui-react'
import Layout from "../components/layout"
import { withAppContext } from '../context/AppContext'
import SEO from "../components/seo"

const CustomButton = props => <Button onClick={() => { props.context.firebase.doSignOut() }}>Log out</Button>
const Wrapped = withAppContext(CustomButton)

const IndexPage = (props) => (
  <Layout>
    <SEO title="Example" />
    <h1>Example</h1>
    <Wrapped />
  </Layout>
)

export default IndexPage
