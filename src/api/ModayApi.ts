import { config } from '../config';
import { APPLICATION_JSON_CONTENT } from '../constants';

export interface MondayBoard {
  id: string;
  name: string;
}

interface MondayGetBoardsResponse {
  data: {
    boards: Array<MondayBoard>;
  };
  account_id: number;
}

export interface MondayGroup {
  id: string;
  title: string;
}

interface MondayGetGroupsResponse {
  data: {
    boards: [
      {
        groups: Array<MondayGroup>;
      }
    ];
  };
  account_id: number;
}

export const MondayApi = {
  getBoards: async () => {
    const query = 'query { boards { id name } }';
    const response = await fetch(config.apis.monday.url, {
      method: 'post',
      headers: {
        Authorization: config.apis.monday.token,
        'Accept-Content': APPLICATION_JSON_CONTENT,
        'Content-Type': APPLICATION_JSON_CONTENT,
      },
      body: JSON.stringify({
        query,
      }),
    });

    return response.json() as unknown as MondayGetBoardsResponse;
  },
  getGroups: async (id: string) => {
    const query = `query { boards (ids: ${id}) { groups { id title }}}`;
    const response = await fetch(config.apis.monday.url, {
      method: 'post',
      headers: {
        Authorization: config.apis.monday.token,
        'Accept-Content': APPLICATION_JSON_CONTENT,
        'Content-Type': APPLICATION_JSON_CONTENT,
      },
      body: JSON.stringify({
        query,
      }),
    });

    return response.json() as unknown as MondayGetGroupsResponse;
  },
  createItem: async (boardId: string, groupId: string, item: { name: string; description?: string }) => {
    const query = `mutation {
      create_item (board_id: ${boardId}, group_id: \"${groupId}\", item_name: \"${item.name}\") {
          id
      }
  }`;
    const response = await fetch(config.apis.monday.url, {
      method: 'post',
      headers: {
        Authorization: config.apis.monday.token,
        'Accept-Content': APPLICATION_JSON_CONTENT,
        'Content-Type': APPLICATION_JSON_CONTENT,
      },
      body: JSON.stringify({
        query,
      }),
    });

    return response.json() as unknown as MondayGetGroupsResponse;
  },
};
