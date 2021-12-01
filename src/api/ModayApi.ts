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
  name: string;
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
  getGroups: async (ids: string) => {
    const query = `query { boards (ids: ${ids}) { groups (ids: status) { id title }}}`;
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
