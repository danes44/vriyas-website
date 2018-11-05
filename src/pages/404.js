import React from 'react'
import Layout from '../components/layout'
import "../styles/index.scss"

const NotFoundPage = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <h1 className="title 1">NOT FOUND</h1>
        <p>Ouch, The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved.</p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
