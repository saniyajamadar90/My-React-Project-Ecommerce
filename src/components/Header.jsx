import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function Header() {
    const { cart } = useCart();

    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "ff4f81", // rich brown for header background
        color: "#ffffff", // white text
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Arial', sans-serif",
        borderBottom: "4px solid #D8D2CB", // light beige border for separation
    };

    const logoStyle = {
        fontSize: "26px",
        textDecoration: "none",
        color: "Pink", // white color for logo
        fontWeight: "700",
        letterSpacing: "1.5px",
        textTransform: "uppercase",
    };

    const cartLinkStyle = {
        textDecoration: "none",
        color: "#fff", // white color for text
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontWeight: "600",
    };

    const cartCountStyle = {
        backgroundColor: "#D8D2CB", // beige color to contrast with brown
        color: "#3E2723", // dark brown for text to stand out
        borderRadius: "12px",
        padding: "2px 8px",
        marginLeft: "4px",
        fontSize: "14px",
        fontWeight: "bold",
    };

    return (
        <header style={headerStyle}>
            <Link to="/" style={logoStyle}>Curio</Link>
            <Link to="/cart" style={cartLinkStyle}>
                🛒 Cart
                <span style={cartCountStyle}>{cart.length}</span>
            </Link>
        </header>
    );
}
