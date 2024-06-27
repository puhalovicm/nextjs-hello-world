"use client";
import React, { useState, useEffect } from 'react';

export default function QueryPage() {
   const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
      fetch('https://v8zqtm.buildship.run/demo')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
      <div>
        <h1>{data.title}</h1>
        <p>{data.text1}</p>
      </div>
    );
}