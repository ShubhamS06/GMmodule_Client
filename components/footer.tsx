const Footer = () => {
  return (
    <footer className="bg-section-gredient-low py-5 text-black font-xl">
      <div className="container py-5 my-4">
        <div className="row align-items-center justify-content-between gap-1">
          <div className="col-md-5 mb-3 mb-md-0">
            <div className="d-flex flex-column align-items-start gap-5">
              <div className="me-2 bg-white rounded-3 px-5 py-3">
                <img src="/brand-logo.png" alt="GM Modules" width={192} />
              </div>
              <div>
                <p className="mb-0 text-white fw-semibold">
                  Empowering Industries
                </p>
                <p className="mb-0 fw-medium font-22">with Custom Molding Mastery</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <div className="mb-2 fw-bold">Quick Links:</div>
            <ul className="mb-0">
              <li>
                <a href="#" className="text-black font-lg route">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-black font-lg route">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="text-black font-lg route">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#" className="text-black font-lg route">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="mb-2 fw-bold">Follow us:</div>
            <div className="d-flex mb-4 gap-4">
              <a href="#" className="me-2">
                <img src="/logos/facebook.svg" width={26} />
              </a>
              <a href="#" className="me-2">
                <img src="/logos/linkedin.svg" width={35} />
              </a>
              <a href="#" className="me-2">
                <img src="/logos/twitter.svg" width={35} />
              </a>
              <a href="#" className="">
                <img src="/logos/instagram.svg" width={35} />
              </a>
            </div>
            <div className="mb-2 fw-bold">Call us:</div>
            <p className="mb-0 d-flex align-items-center">
              <img src="/icons/phone-ringing.svg" width={40} className="me-2" />
              <span className="font-lg">+91-99921-12056</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
