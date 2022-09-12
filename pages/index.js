import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from "next/image"
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Pizza Restaurant</title>
        <meta name='description' content="Best Pizza for you"></meta>
        <link rel='icon' href='favicon.png'></link>
      </Head>
      
      <Featured></Featured>
      <PizzaList></PizzaList>
   
    </div>
  )
}
