import React from 'react'
import './request.css'
import RequestItem from '../../components/requestItem/requestItem'

const request = () => {
  return (
    <div className='request-container'>
        <RequestItem/>
        <RequestItem/>
        <RequestItem/>
    </div>
  )
}

export default request