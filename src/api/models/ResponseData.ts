/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Code } from "./Code";

// export type ResponseData = {
//   code?: Code;
//   message?: string | null;
// };
export type ResponseData<T = unknown> = {
  code?: Code;
  data?: T;
  message?: string;
  totalPage?: number;
  totalCount?: number;
  page?: number;
  size?: number;
  errorDetail?: Array<string>;
};

