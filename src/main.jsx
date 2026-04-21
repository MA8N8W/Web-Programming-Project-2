import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PageAssembler from "./assembler.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageAssembler />
  </StrictMode>,
)