import React from "react";
import { Link } from "react-router-dom";

const categories = ["GPU", "CPU", "RAM", "Storage", "Motherboard", "PSU"];

function Navbar() {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#1f1f1f', padding: '10px 20px' }}>
      <div style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>
        Pre-Loved PC Parts
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ margin: '0 10px' }}>
          <Link to="/" style={{ color: '#ddd', textDecoration: 'none' }}>Home</Link>
        </li>
        {categories.map(cat => (
          <li key={cat} style={{ margin: '0 10px' }}>
            <Link to={`/category/${cat.toLowerCase()}`} style={{ color: '#ddd', textDecoration: 'none' }}>{cat}</Link>
          </li>
        ))}
        <li style={{ margin: '0 10px' }}>
          <Link to="/sell" style={{ color: '#ddd', textDecoration: 'none' }}>Sell Your Part</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;