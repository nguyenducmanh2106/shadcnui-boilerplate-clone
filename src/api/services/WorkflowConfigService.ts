/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseData } from "../models/ResponseData";
import type { WorkflowConfigModel } from "../models/WorkflowConfigModel";
import type { CancelablePromise } from "../core/CancelablePromise";
import {
  request as __request,
  useRequest,
} from "../core/request";

/**
 * @param filter
 * @param tenant
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getWorkflowConfig = (
  filter?: string,
  tenant?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/WorkflowConfig`,
    headers: {
      Tenant: tenant,
    },
    query: {
      filter: filter,
    },
  });
};

/**
 * @param tenant
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postWorkflowConfig = (
  tenant?: string,
  requestBody?: WorkflowConfigModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/WorkflowConfig`,
    headers: {
      Tenant: tenant,
    },
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param id
 * @param tenant
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getWorkflowConfig1 = (
  id: string,
  tenant?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/WorkflowConfig/${id}`,
    headers: {
      Tenant: tenant,
    },
  });
};


