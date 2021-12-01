import React from 'react';

interface TextInputProps {
  title: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(({ title }: TextInputProps, ref) => (
  <>
    <label htmlFor="item-name" className="block text-sm font-medium text-gray-700">
      {title}
    </label>
    <input
      ref={ref}
      type="text"
      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    />
  </>
));

TextInput.displayName = 'TextInput';
