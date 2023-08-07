import HeroBanner from "@/components/HomePage/HeroBanner";
import ProductCard from "@/components/ProductCard/ProductCard";
import Wrapper from "@/components/Universal Components/Wrapper";
import { fetchAllProducts } from "@/utils/api";
export default function Home({products}) {

  return (
    <main>
      <HeroBanner />
      <Wrapper className="text-center flex justify-center flex-col items-center">
        <h1 className="font-urbanist text-xl md:text-3xl mt-10 md:mt-20 mb-4 font-semibold">
          Cushioning for Your Miles
        </h1>
        <p className="w-full max-w-[700px] mb-10 md:mb-20 font-medium text-xs md:text-base">
          A lightweight Nike ZoomX midsole is combined with increased stack heights to
          help provide cushioning during extended stretches of running.
        </p>
      </Wrapper>
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-2 md:gap-4 lg:gap-5 px-2 md:px-4 lg:px-5">

          {products?.map((item, index) => index < 6 && <ProductCard key={item.id} item={item} />)}

        </div>
      </Wrapper>

    </main>
  )
}

export async function getStaticProps(){
  const product = await fetchAllProducts()
  return{
    props:{products:product.data}
  }
}
