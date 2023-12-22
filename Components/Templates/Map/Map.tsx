import React from "react";

export default function Map() {
  return (
    <div>
      <iframe
      className="rounded-2xl"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3130.4984721731!2d59.53432567764421!3d36.38727709468798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2s!4v1703253019804!5m2!1sfa!2s"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}