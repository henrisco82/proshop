import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { listProducts } from '../redux/product/action'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Product from '../components/Product'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'

function Home() {
  const dispatch = useDispatch()
  const { keyword, pageNumber } = useParams()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])
  return (
    <>
      <Meta />
       {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
      <>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
      </>
      }
    </>
  )
}

export default Home