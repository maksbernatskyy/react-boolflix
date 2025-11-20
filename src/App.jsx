import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./components/DefaultLayout"
import Products from "./pages/Products"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
