
import React from 'react';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';

interface ImageUploadFieldProps {
  image: string;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUploadField: React.FC<ImageUploadFieldProps> = ({ image, onImageUpload }) => {
  return (
    <div>
      <Label htmlFor="image">Recipe Image</Label>
      <div className="mt-2">
        <label htmlFor="imageInput" className="cursor-pointer">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
            {image ? (
              <div className="space-y-2">
                <img
                  src={image}
                  alt="Recipe preview"
                  className="max-h-32 mx-auto rounded-lg"
                />
                <p className="text-sm text-gray-600">Click to change image</p>
              </div>
            ) : (
              <div className="space-y-2">
                <Upload className="h-8 w-8 text-gray-400 mx-auto" />
                <p className="text-sm text-gray-600">Click to upload an image</p>
              </div>
            )}
          </div>
        </label>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          onChange={onImageUpload}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ImageUploadField;
