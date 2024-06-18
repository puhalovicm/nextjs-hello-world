"use client";
import React, { useState } from 'react';

async function getArtist() {
  const res = await fetch(`https://v8zqtm.buildship.run/demo`)
  return res.json()
}

export default function QueryPage() {
  const arti = useState(getArtist());
  return (
    <div>
      Hello World.{" "}
    </div>
  );
}