import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { getSession } from "next-auth/react"

export default function Home({ products }) {
  return (
    <div className="bg-[#eaeded]">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then((res) => res.json());

  return {
    props: {
      products,
      session: await getSession(context)
    }
  }
}