import React from 'react'

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg'
import {Playlist} from './playlist'

//create your first component
const Home = () => {
  return (
    <div className='text-center'>
      <Playlist />
    </div>
  )
}

export default Home