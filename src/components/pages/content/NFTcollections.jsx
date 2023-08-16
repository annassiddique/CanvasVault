import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchData } from '../../../DataIndex'
import { addItemSucces } from '../../../redux/Cart/CartAction'

import "./NFTcollections.css"




const NFTcollections = ({ data, fetchData, loading, error, category, numOfCards, addToCart }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);


    useEffect(() => {
        if (data.length <= 0) {
            fetchData()
        }
    }, [])
    console.log(data);

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3.5 },

    ]



    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };



    return (loading ? (
        <h2>loading</h2>
    ) : error ? (
        <h2>{error}</h2>

    ) :
        <div className='NFTcollections'>

            {data && <div id='product-container' className="Collection-wrapper">
                <Carousel
                    breakPoints={breakPoints}
                >
                    {console.log("Data exists:", data)}
                    {data
                        .filter((item) => item.Category === category)
                        .slice(0, numOfCards)
                        .map((item, index) => {
                            console.log("Mapping item:", item);

                            return (
                                <Link to={`/collection/${category}/${item.Id}`} className="card-links" >
                                    <div className="collection-card"
                                        key={index}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <img src={item.NFT} alt="NFT" />
                                        <div className={`NFT-Info ${hoveredIndex === index ? 'effect' : ''
                                            }`}
                                        >
                                            <h2>{item.Title}</h2>
                                            <p>Price: ${item.Price}</p>
                                            <button className="Info-buy" onClick={() => addToCart(item)} >
                                                Add To cart
                                            </button>


                                        </div>
                                    </div>
                                </Link>
                            )

                        })}

                </Carousel>
            </div>
            }



        </div >


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
        fetchData: () => dispatch(fetchData()),
        addToCart: (item) => dispatch(addItemSucces(item))
    }
}




export default connect(mapStateToProps, mapDisptachToProps)(NFTcollections)