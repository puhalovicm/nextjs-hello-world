"use client";
import React, { useState, useEffect } from 'react';

export default function ThirdPage({ data }) {
   return (
        <div>
          <h1>{data.title}</h1>
          <p>{data.text1}</p>
        </div>
      );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://v8zqtm.buildship.run/demo')
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}