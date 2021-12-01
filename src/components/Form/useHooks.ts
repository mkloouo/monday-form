import { useCallback, useEffect, useRef, useState } from 'react';
import { MondayApi, MondayBoard, MondayGroup } from '../../api/ModayApi';

interface Props {}

export const useHooks = (_props: Props) => {
  const [selectedBoard, setSelectedBoard] = useState<MondayBoard | undefined>();
  const [boards, setBoards] = useState<Array<MondayBoard> | undefined>();
  const onSelectedBoardChange = useCallback(
    (target: any) => {
      setSelectedBoard(boards?.find((board) => board.name === target.value));
    },
    [boards]
  );

  const [selectedGroup, setSelectedGroup] = useState<MondayGroup | undefined>();
  const [groups, setGroups] = useState<Array<MondayGroup> | undefined>();
  const onSelectedGroupChange = useCallback((target: any) => {
    console.log('[onSelectedGroupChange] value:', target.value);
  }, []);

  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemDescriptionRef = useRef<HTMLTextAreaElement>(null);
  const selectFileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!boards) {
      MondayApi.getBoards().then((response) => {
        setBoards(response.data.boards);
      });
    }
  }, [boards]);

  useEffect(() => {
    const boardId = boards?.find((board) => board.name === selectedBoard?.name)?.id;
    console.log('boardId:', boardId);

    if (boardId) {
      MondayApi.getGroups(boardId).then((response) => {
        console.log(JSON.stringify(response, null, 1));

        setGroups(response.data.boards[0].groups);
      });
    }
  }, [boards, selectedBoard]);

  const onSubmit = useCallback((e: any) => {
    e.preventDefault();

    console.log('item name:', itemNameRef.current?.value);
    console.log('item description:', itemDescriptionRef.current?.value);
    console.log('select file:', selectFileRef.current?.value);
  }, []);

  return {
    selectedBoard,
    onSelectedBoardChange,
    boards,
    selectedGroup,
    onSelectedGroupChange,
    groups,
    itemNameRef,
    itemDescriptionRef,
    selectFileRef,
    onSubmit,
  };
};
