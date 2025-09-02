// functions/index.ts
import type { PagesFunction } from '@cloudflare/workers-types';

export const onRequest: PagesFunction = (context) => {
  return new Response("Hello, Pages Functions!");
}
