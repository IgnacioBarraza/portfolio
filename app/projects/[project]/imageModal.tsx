import { faChevronLeft, faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useState, useEffect } from "react"

interface ImageModalProps {
  selectedImage: string
  onClose: () => void
  images: string[] // Add this prop to pass the list of images
}

export const ImageModal = ({ selectedImage, onClose, images }: ImageModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Find the index of the selected image in the images array
    const index = images.indexOf(selectedImage)
    if (index !== -1) {
      setCurrentIndex(index) // Set the current index based on the selected image
    }
  }, [selectedImage, images]) // Update index whenever selectedImage changes

  if (!selectedImage) return null

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose} // Click outside to close
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside */}
        <Image
          src={images[currentIndex]} // Use currentIndex to display the current image
          width={1200}
          height={1080}
          alt="Enlarged"
          className="object-cover"
        />
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black px-2 py-1 rounded-md"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black px-2 py-1 rounded-md"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white text-black px-2 py-1 rounded-full w-8 h-8"
        >
          <FontAwesomeIcon icon={faXmark} size="lg"/>
        </button>
      </div>
    </div>
  )
}
