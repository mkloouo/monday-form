import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { MondayApi, MondayBoard, MondayGroup } from '../../api/ModayApi';

interface Props {}

const mapGroupToItem = (group?: MondayGroup) => ({
  id: group?.id,
  name: group?.title,
});

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
      MondayApi.get.boards().then((res) => {
        setBoards(res.data.boards);
      });
    }
  }, [boards]);

  useEffect(() => {
    const boardId = selectBoardByValue(selectedBoard?.name)?.id;

    if (boardId) {
      MondayApi.get.groups(boardId).then((res) => {
        setGroups(res.data.boards[0].groups);
      });
    }
  }, [boards, selectBoardByValue, selectedBoard]);

  useEffect(() => {
    if (selectedBoard) {
      MondayApi.get.item.fields(selectedBoard!.id!);
    }
  }, [selectedBoard]);

  const onCreateTaskPress = useCallback(
    (e: any) => {
      e.preventDefault();

      if (selectedBoard?.id && selectedGroup?.id && itemNameRef.current?.value && itemDescriptionRef.current?.value) {
        return MondayApi.create.item(selectedBoard.id, selectedGroup.id, {
          name: itemNameRef.current?.value,
          description: itemDescriptionRef.current?.value,
        });
      }

      alert('You have not filled all the fields.');
    },
    [selectedBoard, selectedGroup]
  );

  const mappedSelectedGroup = useMemo(() => mapGroupToItem(selectedGroup), [selectedGroup]);
  const mappedGroups = useMemo(() => groups?.map(mapGroupToItem), [groups]);

  return {
    selectedBoard,
    onSelectedBoardChange,
    boards,
    selectedGroup: mappedSelectedGroup,
    onSelectedGroupChange,
    groups: mappedGroups,
    itemNameRef,
    itemDescriptionRef,
    selectFileRef,
    onCreateTaskPress,
  };
};
