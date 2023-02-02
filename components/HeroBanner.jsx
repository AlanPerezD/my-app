import React from 'react'

import { urlFor } from '@/lib/client'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='auriculares-hyperx-cloud'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.LargeText1}</h1>
        <img src={urlFor(heroBanner.image)} />
      </div>
    </div>
  )
}

export default HeroBanner