// Component Form
import Form from "./Form"

import { useGlobal } from "../contexts/GlobalContext"

export default function Header() {

  

  return (
   <>
    <header className="p-3">
      <div className="d-flex justify-content-between">

        {/* Logo */}
        <div>
          <h5 className="fw-bold text-danger text-uppercase">boolflix</h5>
        </div>

        {/* Search */}
        <Form />
      </div>
    </header>
  </>
  )
}