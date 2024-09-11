/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseData } from "../models/ResponseData";
import type { UserChangePassword } from "../models/UserChangePassword";
import type { UserModel } from "../models/UserModel";
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
export const getUser = (
  filter: string = "{}",
  tenant?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/User`,
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
export const postUser = (
  tenant?: string,
  requestBody?: UserModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/User`,
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
export const getUser1 = (
  id: string,
  tenant?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/User/${id}`,
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
export const putUser = (
  id: string,
  tenant?: string,
  requestBody?: UserModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/User/${id}`,
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
export const deleteUser = (
  id: string,
  tenant?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/User/${id}`,
    headers: {
      Tenant: tenant,
    },
  });
};

/**
 * @param id
 * @param status
 * @param tenant
 * @returns ResponseData Success
 * @throws ApiError
 */
export const putUser1 = (
  id: string,
  status: boolean,
  tenant?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/User/ToggleStatus/${id}/${status}`,
    headers: {
      Tenant: tenant,
    },
  });
};

/**
 * @param userId
 * @param tenant
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const putUser2 = (
  userId: string,
  tenant?: string,
  requestBody?: UserModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/User/AsignRole/${userId}`,
    headers: {
      Tenant: tenant,
    },
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param tenant
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const deleteUser1 = (
  tenant?: string,
  requestBody?: Array<string>
): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/User/DeleteMany`,
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
export const getUser2 = (tenant?: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/User/me`,
    headers: {
      Tenant: tenant,
    },
  });
};

/**
 * @param syncId
 * @param tenant
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getUser3 = (
  syncId: string,
  tenant?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/User/me/${syncId}`,
    headers: {
      Tenant: tenant,
    },
  });
};

/**
 * @param userId
 * @param tenant
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const putUser3 = (
  userId: string,
  tenant?: string,
  requestBody?: UserChangePassword
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/User/ChangePassword/${userId}`,
    headers: {
      Tenant: tenant,
    },
    body: requestBody,
    mediaType: "application/json",
  });
};

