import BestSeller from "../components/bestSeller"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
import NewsLetteBox from "../components/NewsLetteBox"
import Ourpolicy from "../components/Ourpolicy"


const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
    <Ourpolicy/>
    <NewsLetteBox/>
    <Footer/>
    </div>
  )
}

export default Home