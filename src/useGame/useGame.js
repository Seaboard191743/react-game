import React, { useState } from "react";

export default function useGame() {
  const [bestResult, setBestResult] = useState([0]);
  return { bestResult, setBestResult };
}
