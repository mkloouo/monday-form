import React from 'react';

interface FormProps {}

export const Form = (_props: FormProps) => {
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="mt-5 md:mt-0">
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="mb-16">
                  <h1 className="text-xl tracking-tight font-bold text-gray-900 sm:text-2xl md:text-4xl">
                    CREATING AN ITEM
                  </h1>
                </div>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="board-input"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Board
                    </label>
                    <input
                      type="text"
                      name="board-input"
                      id="board-input"
                      autoComplete="given-name" // TODO (1): change input to autocomplete board
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="group-input"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Group
                    </label>
                    <input
                      type="text"
                      name="group-input"
                      id="group-input"
                      autoComplete="family-name" // TODO (2): change input to autocomplete group
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="item-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Item name
                    </label>
                    <input
                      type="text"
                      name="item-name"
                      id="item-name"
                      autoComplete="email" // TODO (3): change input to generic text
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="item-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Item name
                    </label>
                    <input
                      type="text"
                      name="item-name"
                      id="item-name"
                      autoComplete="email" // TODO (3): change input to generic text
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  {
                    // TODO (4): use for board and group selection
                    /* <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div> */
                  }

                  <div className="col-span-6">
                    <label
                      htmlFor="item-description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Item description
                    </label>
                    <input
                      type="text"
                      name="item-description"
                      id="item-description"
                      autoComplete="item-description" // TODO (5): change input to generic text
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="image"
                      className="block text-sm font-medium text-gray-700"
                    >
                      add image
                    </label>
                    <input
                      type="text"
                      name="image"
                      id="image"
                      autoComplete="address-level2" // TODO (6): add file input
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create task
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

Form.displayName = 'Form';
