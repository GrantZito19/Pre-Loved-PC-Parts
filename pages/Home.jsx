import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const dummyParts = [
  { id: 1, name: "GTX 1660 Super", description: "Great condition, R2400" },
  { id: 2, name: "Ryzen 5 3600", description: "Used for gaming, R1800" },
  { id: 3, name: "SSD 1TB", description: "Fast storage, R950" },
];

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredParts = dummyParts.filter(part =>
    part.name.toLowerCase().includes(search.toLowerCase()) ||
    part.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Welcome to Pre-Loved PC Parts SA</h1>

      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="🔍 Search for parts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />
      </div>

      <div
        onClick={() => navigate('/post')}
        style={{
          background: "#2980b9",
          color: "white",
          padding: "20px",
          textAlign: "center",
          borderRadius: "10px",
          cursor: "pointer",
          marginBottom: "30px"
        }}
      >
        💻 Sell My Pre-Loved PC Part
      </div>

      <h2>Available Listings</h2>
      {filteredParts.length === 0 ? (
        <p>No parts match your search.</p>
      ) : (
        filteredParts.map(part => (
          <div key={part.id} style={{
            border: "1px solid #eee",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
            background: "#fff"
          }}>
            <h3>{part.name}</h3>
            <p>{part.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
