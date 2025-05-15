import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../date/product.js";
import { useCart } from "../context/cartContext.jsx";

export default function ProductsDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const styles = {
        container: {
            maxWidth: "800px",
            margin: "50px auto",
            padding: "30px",
            boxShadow: "0 0 20px rgba(138, 43, 226, 0.5)",
            borderRadius: "12px",
            backgroundColor: "#1a1a2e", // dark violet-blue
            fontFamily: "'Segoe UI', sans-serif",
            textAlign: "center",
            color: "#e0e0ff", // light violet
        },
        image: {
            maxWidth: "100%",
            height: "auto",
            borderRadius: "12px",
            marginBottom: "20px",
            boxShadow: "0 0 15px #8a2be2" // neon violet glow
        },
        name: {
            fontSize: "2rem",
            marginBottom: "10px",
            color: "#e600ff", // electric pink/violet
            textShadow: "0 0 5px #e600ff"
        },
        description: {
            fontSize: "1.1rem",
            marginBottom: "15px",
            color: "#c0c0ff"
        },
        price: {
            fontSize: "1.3rem",
            fontWeight: "bold",
            color: "#39ff14", // neon green
            marginBottom: "20px",
            textShadow: "0 0 3px #39ff14"
        },
        button: {
            padding: "12px 25px",
            fontSize: "1rem",
            backgroundColor: isHovered ? "#da70d6" : "#8a2be2",
            color: "#fff",
            border: "2px solid #e600ff",
            borderRadius: "6px",
            cursor: "pointer",
            boxShadow: isHovered
                ? "0 0 20px #da70d6"
                : "0 0 10px #8a2be2",
            transition: "all 0.3s ease",
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.name}>{product.name}</h2>
            <img src={product.image} alt={product.name} style={styles.image} />
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>₹{product.price}</p>
            <button
                style={styles.button}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {
                    addToCart(product);
                    navigate("/cart");
                }}
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}
