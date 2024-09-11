/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DocumentApprovalHistory = {
  id?: string;
  processId?: string;
  identityId?: string | null;
  allowedTo?: string | null;
  transitionTime?: string | null;
  sort?: number;
  initialState?: string | null;
  destinationState?: string | null;
  triggerName?: string | null;
  commentary?: string | null;
};

