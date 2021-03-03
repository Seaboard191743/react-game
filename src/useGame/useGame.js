import React, { useState } from "react";

export default function useGame() {
  const [value, setValue] = useState(0);
  return { value, setValue };
}
