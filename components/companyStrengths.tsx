const CompanyStrengths = ({ styles }: { styles: Record<string, string> }) => {
  const strengths = [
    {
      title: "Expertise",
      description:
        "With years of experience Rooting way back from 1988 in the industry, our team has the knowledge and expertise to tackle even the most complex molding challenges.",
    },
    {
      title: "Technology",
      description:
        "We invest in the latest injection molding technology to deliver superior results with faster turnaround times and lower costs.",
    },
    {
      title: "Customer Focus",
      description:
        "Your satisfaction is our priority. We work closely with you from concept to completion to ensure that your project is a success.",
    },
    {
      title: "Reliability",
      description:
        "Count on us for consistent quality, on-time delivery, and transparent communication throughout the process.",
    },
    {
      title: "Value",
      description:
        "We offer competitive pricing without compromising on quality, providing you with the best value for your investment.",
    },
  ];

  return (
    <section className="my-5 bg-white pt-5">
      <div className="container">
        <h2 className={`${styles.headingFancy1} mb-5`}>Why Choose Us</h2>
        <div className="col">
          {strengths.map((strength, index) => (
            <div key={index} className="font-24 mb-5">
              <div className="bg-primary text-white fw-medium rounded-2 mb-3 ps-4 py-2 w-full">
                {index + 1}. {strength.title}
              </div>
              <p className="font-lg">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStrengths;
