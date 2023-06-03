export default function Contact() {
  return (
    <div className="container mt-5 mb-5 ">
      <div className="row">
        <div className="col-md-5 bg-dark text-light fs-5">
          <h4 className="m-3">Contact us</h4>
          <hr Style="color:white" />
          <div className="mt-5">
            <div className="d-flex">
              <i className="bi bi-telephone-fill"></i>
              <p className="ps-3">123-456-789</p>
            </div>
            <hr Style="color:white" />
            <div className="d-flex">
              <i className="bi bi-envelope-at-fill"></i>
              <p className="ps-3">support@blogsmania.pk</p>
            </div>
            <hr Style="color:white" />

            <div className="d-flex">
              <i className="bi bi-browser-chrome"></i>
              <p className="ps-3">www.blogsmania.pk</p>
            </div>
            <hr Style="color:white" className="mb-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
