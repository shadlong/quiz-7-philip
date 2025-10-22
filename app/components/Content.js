"use client";
import { useState, useEffect } from "react";
import { Card, Row, Col, Spin, Alert } from "antd";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../hooks/useLanguage";

const { Meta } = Card;

const Content = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const text =
    language === "en" ? "Welcome to My Store" : "Selamat Datang di Toko Saya";

  if (loading) {
    return (
      <main className="flex-1 flex items-center justify-center text-center p-8">
        <Spin size="large" />
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex-1 flex items-center justify-center text-center p-8">
        <Alert message="Error" description={error} type="error" showIcon />
      </main>
    );
  }

  return (
    <main className="flex-1 p-8">
      <h2 className="text-2xl font-semibold text-center mb-8">{text}</h2>
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            <Card
              hoverable
              cover={<img alt={product.title} src={product.thumbnail} />}
            >
              <Meta title={product.title} description={`$${product.price}`} />
            </Card>
          </Col>
        ))}
      </Row>
    </main>
  );
};

export default Content;
