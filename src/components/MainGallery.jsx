import React, { useState, useEffect } from "react";
import DraggableImage from "./DraggableImage";
import SearchBar from "./SearchBar";
import LoadingSpinner from "./LoadingSpinner";
import Navbar from "./Navbar";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const MainGallery = ({ images }) => {
  const navigate = useNavigate();
  const [imagesData, setImagesData] = useState(images);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [noMatch, setNoMatch] = useState(false);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // Handle drag events
  const handleDrag = (e, ui, index) => {
    // Implement any logic you need for handling the drag event
    // You can update the position of the image, reordering, or other actions here
    // For example, you can console.log the position data:
  };

  //   // search functionality
  const handleSearch = (text) => {
    setSearchText(text); // Update the search text state

    const filteredImages = images.filter(
      (image) =>
        typeof image.tag === "string" &&
        image.tag.toLowerCase().includes(text.toLowerCase())
    );
    filteredImages.length === 0 ? setNoMatch(true) : setNoMatch(false);

    setImagesData(filteredImages); // Update the displayed images
  };

  useEffect(() => {
    // Simulate loading for demonstration purposes
    setTimeout(() => {
      setLoading(false); // Set loading to false when images are ready
    }, 8000); // Adjust the duration as needed
  }, []);

  // Simulate loading initially (you can fetch images here)
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="flex flex-col w-full m-auto my-2">
        <Navbar handleLogout={handleLogout} />
        <SearchBar onSearch={handleSearch} />
        <div className=" w-11/12  m-auto ">
          {loading ? (
            <LoadingSpinner />
          ) : noMatch ? (
            <div>
              <p className="text-red-500 ">No Image Found</p>
            </div>
          ) : (
            <div className="grid  lg:grid-cols-3 gap-2 place-content-center">
              {imagesData.map((image, index) => (
                <DraggableImage
                  key={image.id}
                  image={image}
                  index={index}
                  onDrag={(e, ui) => handleDrag(e, ui, index)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainGallery;
