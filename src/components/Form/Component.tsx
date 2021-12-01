import React from 'react';

import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

import { Header } from '../Header';
import { Selector } from '../Selector';
import { TextInput } from '../TextInput';
import { TextArea } from '../TextArea';
import { ImageInput } from '../ImageInput';
import { useHooks } from './useHooks';

interface FormProps {}

export const Form = (_props: FormProps) => {
  const { boardRef, groupRef, itemNameRef, itemDescriptionRef, selectFileRef, onSubmit } = useHooks({});

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="mt-5 md:mt-0">
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <Header title="Creating an item" />

                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <Selector title="Board" ref={boardRef} />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <Selector title="Group" ref={groupRef} />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <TextInput title="Item name" ref={itemNameRef} />
                  </div>
                  <div className="col-span-6 sm:col-span-4">
                    <TextArea title="Item description" ref={itemDescriptionRef} />
                  </div>
                  <div className="col-span-6 mt-10">
                    <ImageInput title={'Select a file'} icon={faCloudUploadAlt} ref={selectFileRef} />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  onClick={onSubmit}
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
