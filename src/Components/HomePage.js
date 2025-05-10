import React from 'react';
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <section className="hero-section" style={{ textAlign: 'center', padding: '60px 0', background: '#white' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>A brownie lover's dream!</h1>
        <Button variant="primary" size="lg">Order Now</Button>
      </section>

      <Container>
        <Row className="product-row">
          <Col md={4} style={{ padding: '20px' }}>
            <ProductCard />
          </Col>
          {/* Repeat ProductCard component as necessary */}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
