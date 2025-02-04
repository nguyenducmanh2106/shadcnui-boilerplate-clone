/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseData } from "../models/ResponseData";
import type { RoleModel } from "../models/RoleModel";
import type { CancelablePromise } from "../core/CancelablePromise";
import {
  request as __request,
  useRequest,
} from "../core/request";

/**
 * @param name
 * @param pageIndex
 * @param pageSize
 * @param tenant
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getRole = (
  name?: string,
  pageIndex: number = 1,
  pageSize: number = 10,
  tenant?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/Role`,
    headers: {
      Tenant: tenant,
    },
    query: {
      name: name,
      pageIndex: pageIndex,
      pageSize: pageSize,
    },
  });
};

/**
 * @param tenant
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postRole = (
  tenant?: string,
  requestBody?: RoleModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/Role`,
    headers: {
      Tenant: tenant,
    },
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param tenant
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getRole1 = (tenant?: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/Role/GetValueType`,
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
export const getRole2 = (
  id: string,
  tenant?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/Role/${id}`,
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
export const putRole = (
  id: string,
  tenant?: string,
  requestBody?: RoleModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/Role/${id}`,
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
export const deleteRole = (
  id: string,
  tenant?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/Role/${id}`,
    headers: {
      Tenant: tenant,
    },
  });
};

/**
 * @param topik
 * @param isShow
 * @param tenant
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getRole3 = (
  topik?: boolean,
  isShow?: boolean,
  tenant?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/Role/AccessData/TreeView`,
    headers: {
      Tenant: tenant,
    },
    query: {
      topik: topik,
      isShow: isShow,
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
export const putRole1 = (
  id: string,
  tenant?: string,
  requestBody?: RoleModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/Role/AssignAccessData/${id}`,
    headers: {
      Tenant: tenant,
    },
    body: requestBody,
    mediaType: "application/json",
  });
};


