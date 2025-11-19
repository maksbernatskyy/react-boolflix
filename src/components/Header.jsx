import Form from "./Form"

export default function Header() {

    return (
        <>
          <header className="p-3">
            <div className="d-flex justify-content-between">
                <div>
                    <h5 className="fw-bold text-danger text-uppercase">boolflix</h5>
                </div>
                <Form />
            </div>
          </header>
        </>
    )
}