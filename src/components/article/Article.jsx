import React from 'react'
import styled from '../article/article.module.css'
import pic1 from '../../assets/images/1.jpeg'




export default function Article() {
  return (
    <div className={styled.frame}>
    <div className={styled.articleWrapper}>
        
        <img src={pic1} alt="" />
        <h3>description</h3>
        <h5>description</h5>

    </div>
    </div>
  )
}
