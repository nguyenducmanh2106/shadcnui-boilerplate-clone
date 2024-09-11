/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContractModel } from "../models/ContractModel";
import type { ResponseData } from "../models/ResponseData";
import type { CancelablePromise } from "../core/CancelablePromise";
import {
  request as __request,
  useRequest,
} from "../core/request";

/**
 * @param tenant
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postContract = (
  tenant?: string,
  requestBody?: ContractModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/Contract`,
    headers: {
      Tenant: tenant,
    },
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param filter
 * @param tenant
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getContract = (
  filter: string = "{}",
  tenant?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/Contract`,
    headers: {
      Tenant: tenant,
    },
    query: {
      filter: filter,
    },
  });
};

/**
 * @param id
 * @param tenant
 * @returns ResponseData Success
 * @throws ApiError
 */
export const deleteContract = (
  id?: string,
  tenant?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/Contract/id`,
    headers: {
      Tenant: tenant,
    },
    query: {
      id: id,
    },
  });
};

/**
 * @param id
 * @param tenant
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getContract1 = (
  id?: string,
  tenant?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/Contract/id`,
    headers: {
      Tenant: tenant,
    },
    query: {
      id: id,
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
export const putContract = (
  id?: string,
  tenant?: string,
  requestBody?: ContractModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/Contract/id`,
    headers: {
      Tenant: tenant,
    },
    query: {
      id: id,
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
export const getContract2 = (
  id: string,
  tenant?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/Contract/get-history-approved/${id}`,
    headers: {
      Tenant: tenant,
    },
  });
};

/**
 * @param contractId
 * @param tenant
 * @returns any Success
 * @throws ApiError
 */
export const getContract3 = (
  contractId: string,
  tenant?: string
): CancelablePromise<any> => {
  return __request({
    method: "GET",
    path: `/Contract/CreateFileExcelPABH/${contractId}`,
    headers: {
      Tenant: tenant,
    },
  });
};

