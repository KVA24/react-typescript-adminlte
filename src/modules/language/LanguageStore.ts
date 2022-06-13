import {observable} from "mobx";
import $ from "jquery";
import {deleteRequest, getRequest, postRequest, putRequest} from "../../common/helpers/RequestHelper";
import HttpStatusCode from "../../common/constants/HttpErrorCode";
import {toastUtil} from "../../common/utils/ToastUtil";


class LanguageStore {
    @observable public isLoading: boolean = false;
    @observable public isLoadingButton: boolean = false;
    @observable public page: number = 0;
    @observable public totalPages: number = 0;
    @observable public searchName: string = '';
    @observable public id: number = 0;
    @observable public error: string = '';
    @observable public languageList: any[] = [];
    @observable public dataLanguage: {id: number, name: string, code: string, isDefault: boolean, state: string} =
        {id: 0, name: '', code: '', isDefault: false, state: ''};


    async getLanguage() {
        this.isLoading = true;
        const result = await getRequest(`/v1/portal/languages?page=${this.page}&size=10`);
        this.isLoading = false;
        if (result.status === HttpStatusCode.OK) {
            this.languageList = result.body.data;
            this.totalPages = result.body.metadata.totalPages;
        }
    }


    async languageDetail(id: number) {
        this.isLoading = true;
        const result = await getRequest(`/v1/portal/languages/${id}`);
        this.isLoading = false;
        if (result.status === HttpStatusCode.OK) {
            this.dataLanguage = result.body;
        }
    }

    resetForm(){
        this.error = '';
        this.dataLanguage = {id: 0, name: '', code: '', isDefault: false, state: ''}
    }

    async created() {

        let name = this.dataLanguage.name;
        let code = this.dataLanguage.code;
        let isDefault = this.dataLanguage.isDefault;

        if(!name){
            this.error = "Vui lòng nhập name!";
            return false;
        }

        if(!code){
            this.error = "Vui lòng nhập code!";
            return false;
        }

        this.isLoadingButton = true;
        const result = await postRequest(`/v1/portal/languages`, {name, code, isDefault});
        this.isLoadingButton = false;
        if (result.status === HttpStatusCode.OK) {
            this.getLanguage();
            this.resetForm();
            toastUtil.success('Create language success');
            $('#close_add_language').trigger('click')
        }
    }

    async updated() {
        let id = this.dataLanguage.id;
        let name = this.dataLanguage.name;
        let code = this.dataLanguage.code;
        let isDefault = this.dataLanguage.isDefault;
        let state = this.dataLanguage.state;

        if(!name){
            this.error = "Vui lòng nhập name!";
            return false;
        }
        if(!code){
            this.error = "Vui lòng nhập code!";
            return false;
        }

        this.isLoadingButton = true;
        const result = await putRequest(`/v1/portal/languages/${id}`, {name, code, isDefault, state});
        this.isLoadingButton = false;
        if (result.status === HttpStatusCode.OK) {
            this.languageList.map((value) => {
                if(value.id === id){
                    value.name = name;
                    value.code = code;
                    value.isDefault = isDefault;
                    value.state = state;
                }else {
                    value.isDefault = false;
                }
            });
            this.resetForm();
            toastUtil.success('Update language success');
            $('#close_edit_language').trigger('click')
        }
    }

    async delete() {
        const result = await deleteRequest(`/v1/portal/languages/${this.id}`, {});
        if (result.status === HttpStatusCode.OK) {
            this.languageList.map((value, i) => {
                if (value.id === this.id) {
                    this.languageList.splice(i, 1)
                }
            });
            $('#close_delete_language').trigger('click')
        }
    }


}

export const languageStore = new LanguageStore();