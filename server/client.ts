import { getBaseUrl } from '@/lib/utils';
import { type AppType } from '@/server';
import { hc } from 'hono/client';
import ky from 'ky';

const fetch = ky.extend({
  timeout: 180000,
  hooks: {
    // beforeRequest: [
    //   async (request) => {
    //     return request;
    //   },
    // ],
    afterResponse: [
      async (_, __, response: Response) => {
        if (response.ok) {
          return response;
        } else {
          throw await response.json();
        }
      },
    ],
  },
});

export const client = hc<AppType>(getBaseUrl(), {
  fetch,
});
