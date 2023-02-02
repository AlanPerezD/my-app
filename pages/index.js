import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

export default function Home({bannerData}) {
  return (
    <div>
      <HeroBanner heroBanner={bannerData} />
      <div className='products-heading'>
        <h2>Productos más vendidos</h2>
        <p>Gran variedad de modelos</p>
      </div>
      
      <div className='products-container'>
        ProductsRow
      </div>

      FooterBanner
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products, bannerData }
  }
}
