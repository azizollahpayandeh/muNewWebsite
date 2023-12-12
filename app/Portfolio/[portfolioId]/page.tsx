import React from "react";

export default function page({ params }: { params: { portfolioId: string } }) {
  return (
    <>
      <div>
        <h1>Blog Details {params.portfolioId}</h1>
      </div>
    </>
  );
}
