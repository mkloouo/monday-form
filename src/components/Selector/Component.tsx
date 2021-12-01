import React from 'react';

interface SelectorProps {
  title: string;
}

export const Selector = React.forwardRef<HTMLSelectElement, SelectorProps>(({ title }: SelectorProps, ref) => {
  const options = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5'];

  return (
    <div className="inline-block relative w-64">
      <label htmlFor="board-input" className="block text-sm font-medium text-gray-700">
        {title}
      </label>
      <select
        ref={ref}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
});

Selector.displayName = 'Selector';
