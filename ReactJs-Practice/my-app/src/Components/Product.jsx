// import { description } from '@mui/icons-material'
import React, { Component } from 'react'

export class Product extends Component {
  render() {let {title, description, images, id, discountPercentage, rating, stock, brand, category, thumbnail,  } = this.props;
    // imageUrl newsUrl
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={images} className='card-img-top' alt="" />
          <div className="card-body">
            <h4 className="card-title">{title}...</h4>
            <p className="card-text">{description}...</p>
            <p className="card-text">{id}...</p>
            <p className="card-text">{discountPercentage}...</p>
            <p className="card-text">{rating}...</p>
            <p className="card-text">{stock}...</p>
            <p className="card-text">{brand}...</p>
            <p className="card-text">{category}...</p>
            <p className="card-text">{thumbnail}...</p>
            {/* <a href={newsUrl} target='_blank' className='btn btn-sm btn-primary'>Read More</a> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Product