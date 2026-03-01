import { ImageIcon, CircleAlert } from "lucide-react";

interface ImagePlaceholderProps {
  isLoading: boolean;
  hasError: boolean;
  width: number;
  height: number;
}

const ImagePlaceholderIcon = ({ isLoading, hasError, width, height }: ImagePlaceholderProps) => {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      {
      isLoading &&
        <ImageIcon
          style={{ width: `${width * 4}px`, height: `${height * 4}px` }}
          className="z-200 text-gray_"/>
      }
      {
      hasError &&
        <CircleAlert
          style={{ width: `${width * 4}px`, height: `${height * 4}px` }}
          className="z-200 error-text-accent_"/>
      }
    </div>
  );
};

export default ImagePlaceholderIcon;