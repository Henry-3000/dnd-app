import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {TouchBackend} from 'react-dnd-touch-backend';

const GalleryItem = ({ image, index, moveImage }) => {
  const [, ref] = useDrag({
    type: 'GALLERY_ITEM',
    item: { index },
  });

  const [, drop] = useDrop({
    accept: 'GALLERY_ITEM',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={(node) => {
        ref(drop(node));
      }}
      style={{
        border: isHovered ? '2px dashed #007bff' : '2px solid transparent',
        transition: 'border 0.3s',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img src={image.url} alt={image.title} />
      <div className="image-tags">
        {Array.isArray(image.tags) && image.tags.map((tag, tagIndex) => (
          <span key={tagIndex} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Gallery = ({ images }) => {
  const [imageOrder, setImageOrder] = useState([...images]);
  const [searchTerm, setSearchTerm] = useState('');

  const moveImage = (fromIndex, toIndex) => {
    const updatedOrder = [...imageOrder];
    const [movedImage] = updatedOrder.splice(fromIndex, 1);
    updatedOrder.splice(toIndex, 0, movedImage);
    setImageOrder(updatedOrder);
  };

  const filteredImages = imageOrder.filter((image) =>
    Array.isArray(image.tags) && image.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            placeholder="Search Using Tag"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="justify-center items-center w-full p-2 pl-3 text-lg text-black-50 
              border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 
              focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
              dark:focus:border-primary-500"
          />
        </div>
      </div>
    <DndProvider backend={window.TouchEvent ? TouchBackend : HTML5Backend}>
      <div className="gallery-grid">
        {filteredImages.map((image, index) => (
          <Gallery
            key={image.id}
            image={image}
            index={index}
            moveImage={moveImage}
          />
        ))}
      </div>
    </DndProvider>   
      <div className="mt-2 mb-6">
        <h1 className='text-black text-center font-bold text-4xl'>IMAGE GALLERY</h1>
        <ul className='sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center'>
          {imageOrder.map((image, index) => (
            <li className="mx-8 mb-6 px-2" >
              <div className="pb-3 my-10 text-white">
                <GalleryItem
                  key={image.id}
                  image={image}
                  index={index}
                  moveImage={moveImage}
                  className="rounded-[15px] w-full h-[50%]"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};



export default function ImageGal() {
  // Sample image data (replace with your own data)
  const images = [
    { 
      id: 1, 
      url: "img/saad.jpg", 
      title: 'Image 1',
      tags: 'nature',
    },
    { 
      id: 2, 
      url: "img/mikhail.jpg", 
      title: 'Image 2',
      tags: 'animal',
    },
    { 
      id: 2, 
      url: "img/erol.jpg", 
      title: 'Image 2',
      tags: 'nature',
    },
    { 
      id: 2, 
      url: "img/fer.jpg", 
      title: 'Image 2',
      tags: 'nature',
    },
    { 
      id: 2, 
      url: "img/mohamed.jpg", 
      title: 'Image 9',
      tags: 'nature',
    },
    { 
      id: 2, 
      url: "img/tirza.jpg",
      title: 'Image 7',
      tags: 'nature',
    },
    { 
      id: 2, 
      url: "img/keith.jpg",
      title: 'Image 3',
      tags: 'nature',
    },
    { 
      id: 2, 
      url: "img/kal.jpg",
      title: 'Image 2',
      tags: 'nature',
    },
    { 
      id: 2, 
      url: "img/jay.jpg",
      title: 'Image 2',
      tags: 'nature',
    },
    { 
      id: 2, 
      url: "img/autumn.jpg",
      title: 'Image 2',
      tags: 'nature',
    }
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <Gallery images={images} />
    </DndProvider>
  );
}
