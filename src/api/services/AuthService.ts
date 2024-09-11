/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseData } from "../models/ResponseData";
import type { UserLogin } from "../models/UserLogin";
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
export const getAuth = (tenant?: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/Auth/GetNavigation`,
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
export const postAuth = (
  tenant?: string,
  requestBody?: UserLogin
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/Auth/whoiam`,
    headers: {
      Tenant: tenant,
    },
    body: requestBody,
    mediaType: "application/json",
  });
};


