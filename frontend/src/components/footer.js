import Image from "../assets/logo.jpg";
export default function Footer() {
  return (
    <footer class="bg-dark text-light py-4 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            {/* <!-- Footer navigation or content --> */}
            <div className="row">
              <img
                className="rounded-circle col-lg-6 col-sm-12 col-md-8"
                src={Image}
                alt="Blog Logo"
                style={{ "max-width": "10rem" }}
              />
              <div className="col-lg-6 col-sm-12 col-md-8">
                <h4 className=" mt-3 text-light">About Blogs Mania</h4>
                <p>
                  Blogs Mania is a motivation and technology blog. The website
                  covers latest technology, news and sports blogs.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            {/* <!-- Footer additional information or content --> */}

            <i class="bi bi-facebook p-2"></i>
            <i class="bi bi-whatsapp p-2"></i>
            <i class="bi bi-twitter p-2"></i>
            <i class="bi bi-instagram p-2"></i>
            <h4>www.blogsmania.pk</h4>
          </div>
        </div>
        <hr />
        <p class="text-center">© 2023 Blogsmania.pk . All rights reserved.</p>
      </div>
    </footer>
  );
}
