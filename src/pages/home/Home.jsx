import React from 'react'
import Navbar from '../../components/header/Navbar'
import Footer from '../../components/Footer/Footer'
import Article from '../../components/article/Article'
import styled from '../home/home.module.css'



export default function Home() {
  return (
    <div>
        <Navbar />
        <div className={styled.homeWrapper}>

        <Article />
        <Article />
        <Article />

        <Article />
        </div>

        

        <Footer />
    </div>
  )
}
