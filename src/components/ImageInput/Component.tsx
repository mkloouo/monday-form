import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

interface ImageInputProps {
  title: string;
  icon: IconDefinition;
}

export const ImageInput = React.forwardRef<HTMLInputElement, ImageInputProps>(
  ({ title, icon }: ImageInputProps, ref) => (
    <>
      <label className="w-64 flex flex-col items-center px-4 py-4 py-6bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
        <FontAwesomeIcon icon={icon} scale={10} />
        <span className="mt-2 text-base leading-normal select-none">{title}</span>
        <input ref={ref} type="file" className="hidden" />
      </label>
    </>
  )
);

ImageInput.displayName = 'ImageInput';
