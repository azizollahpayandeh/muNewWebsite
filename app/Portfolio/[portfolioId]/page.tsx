import React from "react";

export default function portfoliopage({ params }: { params: { portfolioId: string } }) {
  return (
    <>
      <div>
        <h1>Blog Details {params.portfolioId}</h1>
        <h1>Blog Details {params.portfolioId}</h1>
      </div>
    </>
  );
}
