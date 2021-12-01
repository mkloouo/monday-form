import React from 'react';

interface TextAreaProps {
  title: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(({ title }: TextAreaProps, ref) => (
  <>
    <label htmlFor="item-name" className="block text-sm font-medium text-gray-700">
      {title}
    </label>
    <textarea
      ref={ref}
      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    />
  </>
));

TextArea.displayName = 'TextArea';
