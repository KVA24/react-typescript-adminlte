import {deleteRequest, getRequest, IApiResponse, postRequest, putRequest} from "../../common/helpers/RequestHelper";
import {userStore} from "./UserStore";

class UserService {
    public getUsers(): Promise<IApiResponse> {
        return getRequest(`/v1/portal/users`);
    }

	public getUsersAccess(): Promise<IApiResponse> {
        return getRequest(`/v1/portal/users/members`);
    }

    public searchUser(): Promise<IApiResponse> {
        return getRequest(`/v1/portal/users/search?name=${userStore.searchName.trim()}`);
    }

    public userDetail(id: number): Promise<IApiResponse> {
        return getRequest(`/v1/portal/users/${id}`);
    }

    public updateUser(id: any, data: any): Promise<IApiResponse> {
        return putRequest(`/v1/portal/users/${id}`, data);
    }

    public addUser(data: any, isUserAccess: boolean): Promise<IApiResponse> {
		if(isUserAccess) {
			return postRequest(`/v1/portal/users/members`, data);
		} else
        	return postRequest(`/v1/portal/users`, data);
    }

    public deleteUser(id: number): Promise<IApiResponse> {
        return deleteRequest(`/v1/portal/users/${id}`, {});
    }
    
    public changePass(id: any, data: any): Promise<IApiResponse> {
        return putRequest(`/v1/portal/users/${id}`, data);
    }
   
	public getRole(): Promise<IApiResponse> {
        return getRequest(`/v1/portal/users/role`);
    }
}

export const userService = new UserService();
