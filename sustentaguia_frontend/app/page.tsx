"use client"

import dynamic from "next/dynamic"

const App = dynamic(() => import("../src/App"), { ssr: false })

export default function SyntheticV0PageForDeployment() {
  return <App />
}
