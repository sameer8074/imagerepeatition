import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { galleryOne, galleryTwo,  galleryThree, galleryFour } from '../data/images';

const galleries = {
  one: galleryOne,
  two: galleryTwo,
   three: galleryThree,
    four: galleryFour
};

const ImageDetail = () => {
  const { galleryId, imageIndex } = useParams();
  const navigate = useNavigate();
  const gallery = galleries[galleryId];
  const image = gallery?.images[imageIndex];

  if (!image) return <div className="p-8 text-red-500">Image not found.</div>;

  return (
    <div className="flex min-h-screen">
      {/* Left Info Panel */}
      <div className="w-1/2 flex flex-col justify-end p-10">
        <div>
          <p className="text-sm font-semibold text-gray-900">{image.title} - {image.code}</p>
          <p className="text-sm mt-1 font-semibold text-gray-900">Model: {image.name}</p>
          <button
            onClick={() => navigate(-1)}
            className="  text-red-800 font-semibold"
          >
            Close
          </button>
        </div>
      </div>

{/* Right Image with Animation */}
<div className="w-1/2 flex justify-end">
  <img
    src={image.src}
    alt={image.title}
className="max-h-[95vh] object-contain animate-fade-in mt-4 mb-4 ml-4 mr-6"
  />
</div>

    </div>
  );
};

export default ImageDetail;
