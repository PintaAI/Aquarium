import Navbar from "@/components/landing/navbar";
import { HeroParallax } from "@/components/landing/hero-paralax";
import { products } from "@/data/product";
//di sini adalah landing page

const page = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <HeroParallax products={products}/>
      </main>
      <footer>
        footer
      </footer>
    </div>
  )
}

export default page