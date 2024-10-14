const DifferentiatorsSection = ({
  styles,
}: {
  styles: Record<string, string>;
}) => {
  const items = [
    {
      icon: "/product-quality.svg",
      title: "Commitment to Quality",
      points: [
        "We adhere to stringent quality control measures at every stage of the manufacturing process to ensure the highest standards are met.",
        "Our facilities are equipped with advanced technology and machinery, enabling us to produce plastic products that meet or exceed industry benchmarks.",
        "We source top-grade raw materials from trusted suppliers to guarantee the durability, strength, and performance of our products.",
      ],
    },
    {
      icon: "/pen-tool.svg",
      title: "Custom Solutions",
      points: [
        "We understand that every client has unique requirements. That's why we offer customizable plastic manufacturing solutions tailored to meet specific needs and preferences.",
        "Our team of experienced engineers and designers collaborates closely with clients to develop custom prototypes and bring their ideas to life.",
        "Whether you need a small batch of specialized components or large-scale production runs, we have the flexibility and expertise to deliver on time and within budget.",
      ],
    },
    {
      icon: "/maintenance.svg",
      title: "Sustainable Practices",
      points: [
        "Environmental responsibility is at the core of our operations. We are dedicated to minimizing our carbon footprint and promoting sustainability throughout our supply chain.",
        "We prioritize the use of recyclable materials and employ eco-friendly manufacturing processes to reduce waste and conserve resources.",
        "Our commitment to sustainability extends beyond production, as we continuously explore innovative ways to improve efficiency and reduce environmental impact.",
      ],
    },
    {
      icon: "/wrench.svg",
      title: "Industry Expertise",
      points: [
        "With extensive experience serving various industries, including automotive, healthcare, electronics, and consumer goods, we have the knowledge and insight to address the most complex manufacturing challenges.",
        "Our dedicated team stays at the top of latest industry trends, technological advancements, and regulatory requirements to ensure that our clients receive cutting-edge solutions that meet current standards and expectations.",
      ],
    },
  ];

  return (
    <section className="py-5 mt-5">
      <div className="container">
        <div className="row">
          <h2 className={styles.headingFancy1}>
            <span className="pb-2">What differentiates us</span>
          </h2>
        </div>

        <div className="col g-4 mt-5">
          {items.map((item, index) => (
            <section key={index} className="d-contents">
              <div className="d-flex max-lg:flex-wrap gap-5 align-items-center">
                <div className="">
                  <img src={item.icon} width={340} className="text-main" />
                </div>
                <div className="flex-1">
                  <h3 className="font-xl text-black">
                    <span
                      className={`${styles.fontRibeyeMarrowRegular} font-36 text-main`}
                    >
                      {(index + 1).toString().padStart(2, "0")}.
                    </span>{" "}
                    {item.title}
                  </h3>

                  <ul className="mt-3">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="mb-3 font-lg">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {index != items.length - 1 && (
                <hr className="border mt-4 mb-5 col-9 border-danger mx-auto border opacity-25" />
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
