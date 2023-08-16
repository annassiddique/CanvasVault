import React, { useEffect } from 'react'
import "./home.css"
import Home_img from "../pages/Home_img.jpg"
import graffti from "../pages/graffti.jpg"
import ScrollReveal from 'scrollreveal'
import { Link } from 'react-router-dom'
import NFTcollections from './content/NFTcollections'
import { connect } from 'react-redux'
import { fetchData } from '../../DataIndex'



const Home = ({ data, loading, error, fetchData }) => {





  useEffect(() => {
    if (data.length <= 0) {
      fetchData()
    }

    const sr = ScrollReveal({
      reset: true,
      distance: "80px",
      duration: 2500,
      delay: 400,
    });


    sr.reveal('.Intro-h3, .text-wrapper', { delay: 200, origin: "top" });
    sr.reveal('.Intro-NFT ', { delay: 500, origin: "left" });
    sr.reveal('.Intro-Img, .about', { delay: 200, origin: "bottom" });
  }, []);

  // const popUp = () => {
  //   let text = document.getElementById("Intro");
  //   text.classList.add("active")


  // }


  // window.addEventListener("load", popUp);



  return (
    <div className="Home">

      <div className="Home-carousel">
        <img src={Home_img} alt="Img" className='Home-Img' />
        <div className="content-wrapper">
          <div className="Img-content">
            <div className="dynamic-effect-wrapper">
              <h1>Welcome to{" "}</h1>
              <span className="dynamic-effect">
                <h1>
                  CanvasVault
                </h1>
              </span>
            </div>
            <span className="text-wrapper">
              <p className='Intro-effect' id='Intro'> The ultimate NFT marketplace where creativity and investment converge,<br />
                offering a curated selection of digital art backed by a seamless user experience</p>
            </span>
          </div>

        </div>
      </div>

      <div className="home-content">
        <h1 className='content-h1'>What are we?</h1>
        <section className="Introduction">
          <img src="https://agentestudio.com/uploads/post/image/187/main_Article_Covers_NFT.png" alt="CanvasVault" className='Intro-Img' />
          <img src="https://wp-api.zipmex.com/wp-content/uploads/2021/12/NFT-marketplace.jpg" alt="" className='Intro-NFT' />

          <div className="Introduction-snippet">
            <h3 className='Intro-h3'><span className="Intro-name">  CanvasVault </span> an innovative NFT marketplace, emerged as a pioneer in the digital art realm. Born from a passion for blockchain technology and creativity, it started with a vision to empower artists and collectors globally. With a commitment to security, transparency, and an exceptional user experience, Canvas Vault swiftly rose to become one of the foremost NFT marketplaces. Its curated collection showcases a diverse array of digital art, attracting both established and emerging artists. Through innovative features and a vibrant community, Canvas Vault has secured its place as a leading destination for NFT enthusiasts, revolutionizing the art industry landscape. With a great variety of NFTs spanning popular categories, Canvas Vault offers a captivating spectrum of artistic expressions and investment opportunities.</h3>

            <Link to={"/about"} className="about">
              <img width="25" height="25" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACeUlEQVR4nO2bz0tVQRSAr2XWInouCjWiTSUlKkHLBEHCZdBSCHdZaiC4KAgkXLfKKAg3LaL8sWrhyiBcuRHchYv+hsB6pAvzi5GBHu/NI7tzZ865vPlgNi7ezHwzZ844cyfLEvkB2oF5YEWwvAYqUp1fRQcPNXR+E1iPXH7bumdidv4k8MExCv3RGvG3LXtRBdA48jstI4DGkV8DRlpCAI0j/wnoAG4rEbDtyA6vCskONHb+BzAHPAXeKBHQjMkiKhnnePQV0qt8AnbqssOB/ftsEZXM2h87BL43KRsmJArpVQFrAFANIaCaKSMJQHgGAG3AM499/CJwucwCBvHnRZkFnLKjuJWzfDYSPdqWFkFSFpANgdN2l7gVuCy59hniIQD0E4/r6gQYgGngbeDyKHOgQoAkSQDya0An8M0jrveBe2UWcLXmYDIvzz3aJr8GAEPARM4yZlJpqQVIokIA0A3cCly6VAoALtZUFpKfLgkaBPTYxoVmV6UAA3AhQgiczxyoECCJCgHAsEcavA+c8Wib+BpwzR6X+zBfZgGVugvS/+UXcLfUISBJEoCCGQDMRDgQeaxyBgADxOOG1kPRjxEORd+bOwh1AqRJApAPgQ7gncfU/gLcLLOAgVa/HG0DnniktwXgkkfb0iJIygKyIXDOfqMXGrNgnlUXAkBvAf8OHwdTxxV1AgzAqP1oMmS5kzlQIUCSJIA0A/ZSCERcAw4EnsTkejJTtIAp9DMRUkDF7tlrP3FdrdukSD6be2k2ZMEEuABO1Ah4kCkjCSDNgGrMEPiqIBusB3sy48IehJgvvLTj/2iqGfZmd1k4A/zrUXVn0w4ksiP+AAGpS6Hw96tGAAAAAElFTkSuQmCC" alt="learn" />
              Learn more
            </Link>

          </div>
        </section>

        <section className="home-collections">
          <h1 className='collection-h1'>Collections</h1>
          <div className="homeCollection-wrapper">
            <span className="collection-text">
              <h2>Art Collections</h2>
              <Link to={"/collection"}>View Collection</Link>
            </span>
            <NFTcollections category={"Art"} numOfCards={6} />

            <span className="collection-text">
              <h2>Gaming Collections</h2>
              <Link to={"/collection"}>View Collection</Link>
            </span>
            <NFTcollections category={"Gaming"} numOfCards={6} />

            <span className="collection-text">
              <h2>Photography Collections</h2>
              <Link to={"/collection"}>View Collection</Link>
            </span>
            <NFTcollections category={"Photography"} numOfCards={6} />

          </div>
        </section>


      </div>


    </div>



  )
}





const mapStateToProps = (state) => {
  return {
    data: state.products.data,
    loading: state.products.loading,
    error: state.products.error
  }

}

const mapDisptachToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData())
  }
}










export default connect(mapStateToProps, mapDisptachToProps)(Home)