import { MouseEventHandler, useCallback, useRef } from 'react';

interface Props {}

export const useHooks = (_props: Props) => {
  const boardRef = useRef<HTMLSelectElement>(null);
  const groupRef = useRef<HTMLSelectElement>(null);
  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemDescriptionRef = useRef<HTMLTextAreaElement>(null);
  const selectFileRef = useRef<HTMLInputElement>(null);

  const onSubmit = useCallback((e: any) => {
    e.preventDefault();

    console.log('board option:', boardRef.current?.value);
    console.log('group option:', groupRef.current?.value);
    console.log('item name:', itemNameRef.current?.value);
    console.log('item description:', itemDescriptionRef.current?.value);
    console.log('select file:', selectFileRef.current?.value);
  }, []);

  return {
    boardRef,
    groupRef,
    itemNameRef,
    itemDescriptionRef,
    selectFileRef,
    onSubmit,
  };
};
