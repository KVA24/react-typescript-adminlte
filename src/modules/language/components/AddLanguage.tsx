import React, {Component} from 'react';
import {observer} from "mobx-react";
import {languageStore} from "../LanguageStore";
import {css} from "@emotion/core";


@observer
class AddLanguage extends Component {


    render() {
        return (
            <div className="modal fade" id="addLanguage" role="dialog">
                <div className="modal-dialog d-flex align-items-center justify-content-center" role="document">
                    <div className="modal-content w-100 h-100 text-center">
                        <div className="closes" id="close_add_language" data-dismiss="modal" aria-label="Close">
                            <i className="fas fa-times"/>
                        </div>
                        <div className="w-100 d-flex justify-content-center">
                            <form className="form">
                                <div className="modal-header pt-0">
                                    <h3 className="modal-title w-100 text-center">Add Language</h3>
                                </div>
                                <div className="modal-body pt-0 pb-0">
                                    <form>
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" value={languageStore.dataLanguage.name}
                                                   onChange={(e: any) => languageStore.dataLanguage.name = e.currentTarget.value}
                                                   className="form-control" placeholder="Name"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Code</label>
                                            <input type="text" value={languageStore.dataLanguage.code}
                                                   onChange={(e: any) => languageStore.dataLanguage.code = e.currentTarget.value}
                                                   className="form-control" placeholder="Code"/>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <label className="mb-0 w-auto mr-4">Default</label>
                                            {!languageStore.dataLanguage.isDefault ?
                                                <i onClick={() => languageStore.dataLanguage.isDefault = true}
                                                   css={cssIcon} className="fal fa-check-square"/> :
                                                <i onClick={() => languageStore.dataLanguage.isDefault = false}
                                                   css={cssIcon} className="fas text-success fa-check-square"/>}
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer d-flex align-items-center justify-content-between">
                                    <button type="button" className="btn btn-light" data-dismiss="modal"
                                            aria-label="Close">Cancel
                                    </button>
                                    {languageStore.isLoadingButton ?
                                        <button type="button" className="btn btn-success text-white"><i
                                            className="fa fa-spinner fa-spin"/></button> :
                                        <button type="button" className="btn btn-info text-white"
                                                onClick={() => languageStore.created()}>Save</button>}

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddLanguage;

const cssIcon = css`font-size: 22px;`;