import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <link rel="stylesheet" href="" />
      <h1>THIS HOME PAGE</h1>
      <h2><Link to="/about">Go to about page</Link></h2>
    </div>
  );
}
