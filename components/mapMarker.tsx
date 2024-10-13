const MapMarker = () => {
  return (
    <section className="bg-transparent my-5 pb-5 container">

      <div className="d-flex flex-column gap-3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.826370908224!2d75.0126033!3d15.439919800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d28846b29c5f%3A0xc01ec23a0081821f!2sSHRI%20DATTA%20(%20JADHAV%20BUILDING%20)!5e0!3m2!1sen!2sin!4v1728844941681!5m2!1sen!2sin" width="600" height="450" style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <p>Address: Jadhav Compound Saraswatpur Dharwad near last bus stop  580002</p>
      </div>

    </section>
  );
};

export default MapMarker;
