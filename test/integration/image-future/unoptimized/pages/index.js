import React from 'react'
import Image from 'next/future/image'
import testJpg from '../public/test.jpg'

const Page = () => {
  return (
    <div>
      <h1>Unoptimized Config</h1>
      <p>Scroll down...</p>
      <div style={{ height: '1000vh' }} />
      <Image id="internal-image" src="/test.png" width={400} height={400} />
      <br />
      <Image id="static-image" src={testJpg} width={400} height={400} />
      <br />
      <Image
        id="external-image"
        src="https://via.placeholder.com/800/000/FFF.png?text=test"
        width={400}
        height={400}
      />
      <div style={{ height: '1000vh' }} />
      <Image
        id="eager-image"
        src="/test.webp"
        width={400}
        height={400}
        loading="eager"
      />
    </div>
  )
}

export default Page
