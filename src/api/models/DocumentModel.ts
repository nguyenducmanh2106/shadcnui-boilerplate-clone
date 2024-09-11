/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocumentCommandModel } from "./DocumentCommandModel";
import type { DocumentHistoryModel } from "./DocumentHistoryModel";

export type DocumentModel = {
  id?: string;
  number?: number | null;
  name?: string | null;
  comment?: string | null;
  authorId?: string | null;
  authorName?: string | null;
  managerId?: string | null;
  managerName?: string | null;
  sum?: number | null;
  stateName?: string | null;
  isCorrect?: boolean | null;
  commands?: Array<DocumentCommandModel> | null;
  availiableStates?: Record<string, string> | null;
  stateNameToSet?: string | null;
  historyModel?: DocumentHistoryModel;
};

