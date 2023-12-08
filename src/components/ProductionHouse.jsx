import Disney from '../assets/images/Disney.png'
import Marvel from '../assets/images/Marvel.png'
import NationalG from '../assets/images/NationalG.png'
import Pixar from '../assets/images/Pixar.png'
import StarWar from '../assets/images/StarWar.png'

import DisneyV from '../assets/videos/disney.mp4'
import MarvelV from '../assets/videos/marvel.mp4'
import NationalGV from '../assets/videos/national-geographic.mp4'
import PixarV from '../assets/videos/pixar.mp4'
import StarWarV from '../assets/videos/star-wars.mp4'

const ProductionHouse = () => {
    const productionHouseList = [
        {
            id: 1,
            image: Disney,
            video: DisneyV
        },
        {
            id: 2,
            image: Marvel,
            video: MarvelV
        },
        {
            id: 3,
            image: NationalG,
            video: NationalGV
        },
        {
            id: 4,
            image: Pixar,
            video: PixarV
        },
        {
            id: 5,
            image: StarWar,
            video: StarWarV
        },
    ]
  return (
    <div className='flex gap-1 mt-4 px-5 md:px-16 md:gap-5'>
        {productionHouseList.map((item,index) => (
            <div key={index} className='relative border-[2px] border-gray-600 rounded-lg hover:scale-110
            transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-black'>
                <img src={item.image} className='w-full z-[1]' />
                <video src={item.video} autoPlay loop playsInline 
                className='absolute top-0 w-full h-full top-0 rounded-md z-0 opacity-0 hover:opacity-50'/>
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse