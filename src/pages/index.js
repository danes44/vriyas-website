import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Typing from '../components/typing'
import '../sass/styles.scss'

const IndexPage = () => (
  <Layout>
  	<div>
    <p className='typing'><Typing /></p>
    <div className='Heading'>
    <h1>I'm <span className='headingspan'>Vriyas Hartama</span></h1>
    <p>Currently this website is under development. Please come back later :D</p>
    <p>You can visit my <a href='https://github.com/haruute0' target='_blank' rel='noopener noreferrer'>GitHub</a> or drop an <a href='mailto:vriyashartama@gmail.com' target='_blank' rel='noopener noreferrer'>Email</a>.</p>
    </div>
    </div>
  </Layout>
)

export default IndexPage
