import axios from "axios";
import { throwResponse } from "../../../config/axios/axios.config";
import endpoints from "../../api.endpoint";
import { IProfile, IUser } from "../../../interface/IUser";
import { UseQueryResult, useQuery } from "react-query";

const statusSuccess = [200, 201];
export async function signin(params?: Partial<IUser>) {
  const res = await axios.post(`${endpoints.user.login}`, params);
  return !statusSuccess.includes(res.status) ? throwResponse(res) : res.data;
}

export async function register(params?: Partial<IUser>) {
  const res = await axios.post(`${endpoints.user.register}`, params);
  return !statusSuccess.includes(res.status) ? throwResponse(res) : res.data;
}

export async function getProfile() {
  const res = await axios.get(`${endpoints.user.profile}`);
  return !statusSuccess.includes(res.status) ? throwResponse(res) : res.data;
}

export const UseGetProfile = (): UseQueryResult<IProfile, Error> => {
  return useQuery([
    "get-profile",
    async () => {
      const res = await axios.get(`${endpoints.user.profile}`);
      return !statusSuccess.includes(res.status)
        ? throwResponse(res)
        : res.data;
    },
  ]);
};

export const authenApi = {
  signin,
  register,
  getProfile,
  UseGetProfile,
};

export default authenApi;
