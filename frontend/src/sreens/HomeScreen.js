import React from 'react'
import Product from '../components/Product'
import {Row , Col} from 'react-bootstrap'
import products from '../products'

const HomeScreen = () => {
    return (
        <>
         <h1>latest products</h1>
         <Row>
           {products.map((product)=>(
           <Col sm={12} md={6} lr={4} xl={3}>
           <Product product={product} />
           </Col>))}  
        </Row>   
        </>
    )
}

export default HomeScreen
