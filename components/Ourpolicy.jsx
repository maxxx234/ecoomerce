import { assets } from "../assets/assets"


const Ourpolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
        <div>
            <img src={assets.exchange_icon} className="w-12 m-auto mb-5"/>
            <p className="font-bold">Easy Exchange Policy</p>
            <p className="text-gray-400">We offer hassle free exchange policy</p>
        </div>
        <div>
            <img src={assets.quality_icon} className="w-12 m-auto mb-5"/>
            <p className="font-bold">7 Days Return Policy</p>
            <p className="text-gray-400">We offer 7 days free return policy</p>
        </div>
        <div>
            <img src={assets.support_img} className="w-12 m-auto mb-5"/>
            <p className="font-bold">Best Customer Support</p>
            <p className="text-gray-400">We offer 24/7 Customer Support </p>
        </div>

    </div>
  )
}

export default Ourpolicy