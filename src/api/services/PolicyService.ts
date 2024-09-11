/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PolicyModel } from "../models/PolicyModel";
import type { ResponseData } from "../models/ResponseData";
import type { CancelablePromise } from "../core/CancelablePromise";
import {
  request as __request,
  useRequest,
} from "../core/request";

/**
 * @param tenant
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getPolicy = (tenant?: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/Policy`,
    headers: {
      Tenant: tenant,
    },
  });
};

/**
 * @param tenant
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postPolicy = (
  tenant?: string,
  requestBody?: PolicyModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/Policy`,
    headers: {
      Tenant: tenant,
    },
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param roleId
 * @param tenant
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getPolicy1 = (
  roleId: string,
  tenant?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/Policy/GetByRole/${roleId}`,
    headers: {
      Tenant: tenant,
    },
  });
};

/**
 * @param id
 * @param tenant
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getPolicy2 = (
  id: string,
  tenant?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/Policy/${id}`,
    headers: {
      Tenant: tenant,
    },
  });
};

/**
 * @param id
 * @param tenant
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const putPolicy = (
  id: string,
  tenant?: string,
  requestBody?: PolicyModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/Policy/${id}`,
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
export const deletePolicy = (
  id: string,
  tenant?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/Policy/${id}`,
    headers: {
      Tenant: tenant,
    },
  });
};

/**
 * @param tenant
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postPolicy1 = (
  tenant?: string,
  requestBody?: PolicyModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/Policy/CreateOrUpdate`,
    headers: {
      Tenant: tenant,
    },
    body: requestBody,
    mediaType: "application/json",
  });
};

