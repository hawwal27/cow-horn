// import React from "react";
// import { useParams } from "react-router-dom";

// const productData = [
//   {
//     id: 1,
//     name: "Men's Slim Fit Jeans",
//     price: "₦12,000",
//     description: "Stylish slim fit jeans for men, perfect for casual and semi-formal wear.",
//     image: "https://example.com/jeans1.jpg",
//   },
//   {
//     id: 2,
//     name: "Women's High Waist Jeans",
//     price: "₦10,500",
//     description: "Trendy high waist jeans designed for comfort and elegance.",
//     image: "https://example.com/jeans2.jpg",
//   },
//   {
//     id: 3,
//     name: "Men's Ripped Denim",
//     price: "₦15,000",
//     description: "Rugged ripped denim for a bold street-style look.",
//     image: "https://example.com/jeans3.jpg",
//   },
// ];

// export default function ProductDetail({ addToCart }) {
//   const { id } = useParams();
//   const product = productData.find((item) => item.id === parseInt(id));

//   if (!product) return <div style={{ padding: "1rem" }}>Product not found</div>;

//   return (
//     <div style={{ padding: "1rem", maxWidth: "600px", margin: "0 auto" }}>
//       <img
//         src={product.image}
//         alt={product.name}
//         style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "1rem", marginBottom: "1rem" }}
//       />
//       <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
//         {product.name}
//       </h1>
//       <p style={{ color: "green", fontWeight: "bold", fontSize: "1.125rem", marginBottom: "0.5rem" }}>
//         {product.price}
//       </p>
//       <p style={{ marginBottom: "1rem" }}>{product.description}</p>
//       <button
//         onClick={() => addToCart(product)}
//         style={{
//           width: "100%",
//           padding: "0.75rem",
//           backgroundColor: "#007bff",
//           color: "#fff",
//           border: "none",
//           borderRadius: "0.5rem",
//           cursor: "pointer",
//           fontSize: "1rem",
//         }}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }
