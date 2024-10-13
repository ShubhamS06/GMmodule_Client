import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Footer from "@/components/footer";
import DifferentiatorsSection from "@/components/differentiatorsSection";
import CompanyStrengths from "@/components/companyStrengths";
import MapMarker from "@/components/mapMarker";
import OurServices from "@/components/ourServices";

export default function Home() {
  const navRoutes = [
    { text: "home", path: "/" },
    { text: "about us", path: "/about" },
    { text: "services", path: "/services" },
    { text: "products", path: "/products" },
    { text: "contact us", path: "/contactus", primary: true },
  ];

  return (
    <>
      <Head>
        <title>GM Modules</title>
        <meta name="description" content="GM Modules" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar expand="lg" bg="light" className="py-4">
        <Container>
          <Navbar.Brand href="/">
            <img
              className={styles.navBrandImg}
              src="/brand-logo.png"
              width={192}
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto column-gap-4 align-items-center">
              {navRoutes.map((route, index) => (
                <Link
                  key={index}
                  href={route.path}
                  className={`${
                    route.primary
                      ? "bg-primary text-white rounded-5 px-4 py-2"
                      : ""
                  } font-22 route cursor-pointer text-capitalize`}
                >
                  {route.text}
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="page bg-white">
        <main className={`${styles.main} bg-white`}>
          <header className="bg-light py-5">
            <div className="container">
              <div className="row align-items-center justify-content-around">
                <div className="col-md-5">
                  <h1 className="font-42 fw-bold text-primary mb-2">
                    Empowering Industries
                  </h1>
                  <h2 className="h2 mb-5">with Custom Molding Mastery</h2>
                  <a
                    href="#"
                    className="font-2x btn bg-primary text-white fw-medium rounded-5 px-4"
                  >
                    Checkout Now!
                  </a>
                </div>
                <div className="col-md-6">
                  <img
                    src="/manufacturing-process.svg"
                    alt="Custom Molding"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </header>
          <section className="bg-section-gredient text-black py-5 mb-5">
            <div className="container py-5">
              <h2 className={`${styles.headingFancy2} h3 mb-5`}>About Us</h2>
              <p className="font-lg lh-lg">
                At GM Modules, we pride ourselves on being a leading provider of
                plastic injection molding solutions. With years of expertise in
                the industry, we specialize in delivering innovative, reliable,
                and sustainable plastic products for a wide range of
                applications. From packaging and consumer goods to automotive
                parts and medical devices, we have the capability to meet
                diverse needs with precision and excellence.
              </p>
            </div>
          </section>

          <DifferentiatorsSection styles={styles} />

          <OurServices styles={styles} />

          <section className="bg-section-gredient text-black py-5 mb-5">
            <div className="container py-5">
              <h2 className={`${styles.headingFancy2} mb-4`}>
                Customer Satisfaction
              </h2>
              <p className="font-lg lh-lg">
                At GM Modules, customer satisfaction is our top priority. We are
                committed to providing exceptional service, transparent
                communication, and reliable support to our clients every step of
                the way. From initial consultation to final delivery, we strive
                to exceed expectations and build long-lasting partnerships based
                on trust, integrity, and mutual success.
              </p>
            </div>
          </section>

          <CompanyStrengths styles={styles} />

          <section className="py-5 mb-5">
            <div className="container">
              <h2 className={`${styles.headingFancy1} mb-4`}>Contact us</h2>
              <p className="font-22">
                Ready to discuss your plastic manufacturing needs?
              </p>
              <p className="font-lg">
                Get in touch with us today to learn more about our services,
                capabilities, and how we can help bring your projects to
                fruition. We look forward to partnering with you for all your
                plastic manufacturing requirements.
              </p>
            </div>
          </section>
          <MapMarker />
        </main>
        <Footer />
      </div>
    </>
  );
}
