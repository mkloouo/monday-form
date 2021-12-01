import { useCallback, useEffect, useRef, useState } from 'react';
import { MondayApi, MondayBoard, MondayGroup } from '../../api/ModayApi';

interface Props {}

export const useHooks = (_props: Props) => {
  const [selectedBoard, setSelectedBoard] = useState<MondayBoard | undefined>();
  const [boards, setBoards] = useState<Array<MondayBoard> | undefined>();

  const selectBoardByValue = useCallback((value?: string) => boards?.find((board) => board.name === value), [boards]);

  const onSelectedBoardChange = useCallback(
    (target: any) => {
      setSelectedBoard(selectBoardByValue(target.value));
    },
    [selectBoardByValue]
  );

  const [selectedGroup, setSelectedGroup] = useState<MondayGroup | undefined>();
  const [groups, setGroups] = useState<Array<MondayGroup> | undefined>();
  const onSelectedGroupChange = useCallback(
    (target: any) => {
      setSelectedGroup(groups?.find((group) => group.title === target.value));
    },
    [groups]
  );

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
    const boardId = selectBoardByValue(selectedBoard?.name)?.id;

    if (boardId) {
      MondayApi.getGroups(boardId).then((response) => {
        console.log('response.data.boards[0].groups:', JSON.stringify(response.data.boards[0].groups, null, 1));

        setGroups(response.data.boards[0].groups);
      });
    }
  }, [boards, selectBoardByValue, selectedBoard]);

  const onSubmit = useCallback((e: any) => {
    e.preventDefault();

    console.log('item name:', itemNameRef.current?.value);
    console.log('item description:', itemDescriptionRef.current?.value);
    console.log('select file:', selectFileRef.current?.value);
  }, []);

  const mapGroupToItem = (group?: MondayGroup) => ({
    id: group?.position,
    name: group?.title,
  });

  return {
    selectedBoard,
    onSelectedBoardChange,
    boards,
    selectedGroup: mapGroupToItem(selectedGroup),
    onSelectedGroupChange,
    groups: groups?.map(mapGroupToItem),
    itemNameRef,
    itemDescriptionRef,
    selectFileRef,
    onSubmit,
  };
};
