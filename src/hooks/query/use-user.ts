import { useMutation, useQuery } from "@tanstack/react-query"

import { apiFetch } from "@/lib/api-fetch"
import type { IUserInfo } from "@/models/user"
import type { ResponseData, UserLogin, UserModel } from "@/api"
import { postAuth } from "@/api/services/AuthService"
import type { TokenReponse } from "@/api/models/TokenResponse"
import { getUser2 } from "@/api/services/UserService"

// export function useUser() {
//   return useQuery({
//     queryKey: ["userInfo"],
//     queryFn: async () => apiFetch<IUserInfo>("/api/user"),
//   })
// }
export function useUser() {
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => getUser2() as ResponseData<UserModel>,
  })
}

export function useUserMutation() {
  return useMutation({
    mutationFn: async (params: any) => {
      let bodyRequest: UserLogin = {
        username: params.username,
        password: params.password
      }
      return await postAuth("", bodyRequest) as ResponseData<TokenReponse>
    }
  })
}
