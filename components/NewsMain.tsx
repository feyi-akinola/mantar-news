"use client";

import { Squircle } from "corner-smoothing";

export default function NewsMain() {
  return (
    <Squircle
      cornerRadius={30}
      style={{
        padding: "2rem",
        backgroundColor: "white",
        width: "100%",
        height: "600px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "end",
      }}
    >
      <h1 className="text-3xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</h1>
    </Squircle>
  );
}