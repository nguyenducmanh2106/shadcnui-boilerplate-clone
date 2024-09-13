import { useMutation, useQuery } from "@tanstack/react-query"

import type { ResponseData, RoleModel } from "@/api"
import { postAuth } from "@/api/services/AuthService"
import type { TokenReponse } from "@/api/models/TokenResponse"
import { getRole } from "@/api/services/RoleService"


export function useRoleQuery() {
  return useQuery({
    queryKey: ["get-role"],
    queryFn: async () => getRole() as ResponseData<RoleModel[]>,
  })
}

// export function useUserMutation() {
//   return useMutation({
//     mutationFn: async (params: any) => {
//       let bodyRequest: UserLogin = {
//         username: params.username,
//         password: params.password
//       }
//       return await postAuth("", bodyRequest) as ResponseData<TokenReponse>
//     }
//   })
// }
