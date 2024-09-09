import Image from "next/image";

interface ImageModalProps {
  selectedImage: string;
  onClose: () => void;
}

export const ImageModal = ({ selectedImage, onClose }: ImageModalProps) => {
  if (!selectedImage) return null;

  return(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose}
    >
    <div className="relative">
      <Image
        src={selectedImage}
        width={800}
        height={600}
        alt="Enlarged"
        className="object-cover"
      />
      <button
        onClick={onClose}
        className="absolute top-2 right-2 bg-white text-black px-2 py-1 rounded-md"
      >
        Close
      </button>
    </div>
  </div>
  )
};
