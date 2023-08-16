import React, { useEffect } from 'react'
import "./About.css"
import ScrollReveal from 'scrollreveal'
import { Link } from 'react-router-dom'


const About = () => {



  useEffect(() => {

    const sr = ScrollReveal({
      reset: true,
      distance: "80px",
      duration: 2500,
      delay: 400,
    });


    sr.reveal('.about-Intro-Img, .about-content-Img2', { delay: 200, origin: "right" });
    sr.reveal('.about-Intro-Img2 ', { delay: 500, origin: "left" });
    sr.reveal('.about-content-Img,.about-conclusion-Img,.about-conclusion-Img2 ', { delay: 500, origin: "left" });
    sr.reveal('.about-intro-wrapper ,.about-conclusion-wrapper', { delay: 200, origin: "left" });
    sr.reveal('.about-content-wrapper', { delay: 300, origin: "top" });
    // sr.reveal('.about-conlusion', { delay: 500, origin: "left" });

    // sr.reveal('.Intro-Img, .about', { delay: 200, origin: "bottom" });
  }, []);






  return (
    
      <div className="About">
        <h1><span className="about-logo">CanvasVault</span> : Where Art and Blockchain Unite </h1>
        <div className="about-Intro">
          <div className="about-intro-wrapper">
            <p>Step into a world where creativity transcends boundaries and investment meets innovation. Welcome to <span className="about-logo">CanvasVault</span>, a cutting-edge NFT marketplace that redefines the art industry. With a diverse array of categories, from mesmerizing landscapes to futuristic sci-fi, CanvasVault celebrates the work of both established and emerging artists.</p>
          </div>
          <div className="about-Intro-Img-wrapper">
            <img src="https://image.cnbcfm.com/api/v1/image/106848064-1614718621937-Beeple.jpg?v=1619464323&w=1920&h=1080" alt="" className='about-Intro-Img' />
            <img src="https://www.cnet.com/a/img/resize/e0ebf3dc974fce8609d2ba49fa36cf0f93190062/hub/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&fit=crop&height=1200&width=1200" alt="" className='about-Intro-Img2' />
          </div>
        </div>



        <div className="about-content
        ">
          <div className="about-Intro-Img-wrapper">
            <img src="https://playtoearndiary.com/wp-content/uploads/2022/08/rsw_1280-1200x900.webp" alt="" className='about-content-Img' />
            <img src="https://artlogic-res.cloudinary.com/w_1200,c_limit,f_auto,fl_lossy,q_auto/ws-artlogicwebsite0889/usr/images/news/main_image/6/nft-bored-ape-yacht-club.png" alt="" className='about-content-Img2' />
          </div>
          <div className="about-content-wrapper">
            <p>Our platform isn't just about art; it's about the convergence of imagination and technology. Explore an exclusive collection of NFTs that bear the digital fingerprint of their creators. Every piece tells a story, a journey from inspiration to pixel-perfect creation.F

              But CanvasVault is more than a marketplace – it's a community. Join a network of enthusiasts who share a passion for innovation and artistic expression. From intricate details to breathtaking vistas, each NFT holds a world of wonder within its pixels.</p>
          </div>
        </div>




        <div className="about-conclusion">
          <div className="about-conclusion-wrapper">
            <p>Discover a realm where owning art becomes owning a piece of history. Welcome to <span className="about-logo">CanvasVault</span>, the canvas where dreams are transformed into tokens, and every brushstroke becomes a beacon of artistic revolution.</p>
          </div>
          <div className="about-Intro-Img-wrapper">
            <img src="https://perfectdailygrind.com/wp-content/uploads/2022/08/coffee-bros-nft.jpg" alt="" className='about-conclusion-Img' />
            <img src="https://www.oberlo.com/media/1642360771-nft3.jpg?w=1824&fit=max" alt="" className='about-conclusion-Img2' />
          </div>
        </div>


        <button className="browse"><Link to={"/collection"} >Start Browsing</Link></button>





      </div>
   

  )
}

export default About