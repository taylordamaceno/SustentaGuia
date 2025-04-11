"use client"

import dynamic from "next/dynamic"

// Carrega o App só no cliente, evitando erro de 'document is not defined'
const App = dynamic(() => import("../src/App"), { ssr: false })

export default function SyntheticV0PageForDeployment() {
  return <App />
}
