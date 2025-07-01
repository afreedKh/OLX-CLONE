import carTradeGroup from '../../assets/cartrade_tech.svg'
import carTrade from '../../assets/cartrade.svg'
import carwale from '../../assets/carwale.svg'
import bikewale from '../../assets/bikewale.svg'
import olx_logo from '../../assets/olx-footer-logo.svg'
import mobility_outlook from '../../assets/mobility.svg'


const BottomFooter = () => {
  return (
    <div className="bg-[#004896] w-full  h-52">
        <div className="grid grid-cols-6 items-center pt-12 pl-32 pb-6">
          <div className="carTradeGroup border-r-[1px] border-white">
              <img className='w-[180px] ' src={carTradeGroup} alt="" />
          </div>
          <div className="olx-logo m-auto">
            <img className='w-[60px]' src={olx_logo} alt="" />
          </div>
          <div className="carwale m-auto">
            <img src={carwale} className='w-[130px]' alt="" />
          </div>
          <div className="bikewale m-auto">
            <img src={bikewale} className='w-[130px]' alt="" />
          </div>
          <div className="carTrade m-auto">
            <img src={carTrade} className='w-[130px]' alt="" />
          </div>
          <div className="mobility-outlook m-auto">
            <img src={mobility_outlook} className='w-[130px]' alt="" />
          </div>
        </div>
        <div className="certificate flex justify-between text-white px-28 font-light text-[14px]">
          <span className='ml-4'>Help - Sitemap</span>
          <span>All rights reserved © 2006-2025 OLX</span>
        </div>
    </div>
  )
}

export default BottomFooter