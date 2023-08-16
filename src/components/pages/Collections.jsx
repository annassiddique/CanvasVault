import React from 'react'
import NFTcollections from './content/NFTcollections'
import "./collection.css"
import ImageCarousel from './content/ImgCarousel'



const Collections = () => {

  const CarouselImg = [
    { url: 'https://images.wallpaperscraft.com/image/single/road_lighting_night_119175_1680x1050.jpg', caption: 'Take a drive' },
    { url: 'https://images.wallpaperscraft.com/image/single/creative_hand_surrealism_96125_1680x1050.jpg', caption: 'Explore the world of NFTs' },
    { url: 'https://images.wallpaperscraft.com/image/single/doors_lockers_retro_120760_1680x1050.jpg', caption: 'Choose your style' },




  ];
  return (
    <div className="collections">
      <div className="collection-carousel">
        <ImageCarousel images={CarouselImg} />

      </div>

      <div className="Allcollection-wrapper">
        <h2 className='collection-heading'>Art Collection</h2>
        <NFTcollections category={"Art"} numOfCards={10} />

        <h2 className='collection-heading'>Photography Collection</h2>
        <NFTcollections category={"Photography"} numOfCards={10} />

        <h2 className='collection-heading'>Gaming Collection</h2>
        <NFTcollections category={"Gaming"} numOfCards={10} />

      </div>





    </div>
  )
}

export default Collections