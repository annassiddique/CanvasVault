import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchData } from '../../DataIndex'
import { addItemSucces } from '../../redux/Cart/CartAction'

import "./Details.css"

const Details = ({ cart, addToCart, fetchData, data }) => {
  const { Category } = useParams();
  const { id } = useParams();
  const [NFT, setNFT] = useState([])

  useEffect(() => {
    if (data.length <= 0) {

      fetchData()


    }
  }, [])


  return (
    <div className='Details'>
      {data && data.map((item) => {
        if (item.Category == Category && item.Id == id) {
          return (<div className="Details-wrapper ">
            <div className="NFT-div">
              <img src={item.NFT} alt="nft" className='NFT' />
            </div>
            <div className="NFTdetails">
              <h1 className='NFTtitle'>{item.Title}</h1>
              <p className='Creator'>By : {item.Creator}</p>
              <div className="NFTcontent">
                <span className="views">
                  <img width="20" height="20" src="https://img.icons8.com/fluency-systems-filled/48/visible.png" alt="visible" /><p>Views : {item.Views}</p>
                </span>
                <span className="views">
                  <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/money-bag-euro.png" alt="money-bag-euro" />
                  <p>Sold : {item.Sold}</p>
                </span>
                <span className="views">
                  <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/category.png" alt="category" />
                  <p>Category : {item.Category}</p>
                </span>
              </div>
              <p>{item.Description}</p>

              <h3 className='price' >Price : ${item.Price}</h3>

              <button onClick={() => {
                addToCart(item)
              }} className="addToCartBtn" >Add to cart</button>
            </div>
          </div>)

        }
      })
      }
    </div>


  )

}
const mapStateToProps = (state) => {
  return {
    cart: state.cart.Item,
    data: state.products.data
  }

}

const mapDisptachToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addItemSucces(item)),
    fetchData: () => dispatch(fetchData())
  }
}




export default connect(mapStateToProps, mapDisptachToProps)(Details)
