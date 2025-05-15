import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function Ordersuccess() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            background: "linear-gradient(135deg,rgb(179, 120, 233),rgb(155, 114, 185))",
            padding: "20px",
            fontFamily: "'Orbitron', sans-serif",
            color: "#fff"
        },
        title: {
            fontSize: "3rem",
            color: "fefefe", // Neon green
            textShadow: "0 0 10pxrgb(20, 102, 255), 0 0 20pxrgb(20, 255, 161)",
            marginBottom: "20px"
        },
        message: {
            fontSize: "1.5rem",
            color: "7552cc",
            marginBottom: "30px"
        },
        button: {
            padding: "14px 30px",
            fontSize: "1.1rem",
            background: "linear-gradient(45deg,rgb(171, 102, 228),rgb(101, 65, 173))",
            color: "7552cc",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "0 0 10pxrgb(145, 71, 210), 0 0 20pxrgb(131, 92, 210)",
            textDecoration: "none",
            transition: "transform 0.2s ease, box-shadow 0.3s ease"
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>🚀 Order Placed Successfully!</h1>
            <p style={styles.message}>Thank you for shopping with us. Enjoy the glow!</p>
            <a href="/" style={styles.button}>🏠 Go to Home</a>
        </div>
    );
}
