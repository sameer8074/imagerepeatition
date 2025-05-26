// GallerySection.jsx
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GallerySection = ({ title, effectText, images, galleryId, autoScroll = false }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (autoScroll && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [autoScroll]);

  return (
    <div ref={sectionRef} className="w-full px-4 sm:px-6 py-8 mt-12 sm:py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-2">
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-extrabold">{title}</h2>
        <p className="text-xs sm:text-sm md:text-right font-semibold text-gray-700">{effectText}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
        {images.map((img, index) => (
          <Link
            to={`/customizer?img=${encodeURIComponent(img.src)}`}
            key={index}
            className="text-center block"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full object-cover transition duration-300 transform hover:opacity-75 shadow-sm hover:shadow-lg"
            />
            <p className="mt-1 mb-6 sm:mb-12 text-xs sm:text-sm text-right font-medium">
              {img.title} — {img.code}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
