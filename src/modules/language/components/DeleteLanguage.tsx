import React, {Component} from 'react';
import {observer} from "mobx-react";
import {languageStore} from "../LanguageStore";


@observer
class DeleteLanguage extends Component {
    render() {
        return (
            <div className="modal fade popup_delete" id="deleteLanguage" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog d-flex align-items-center justify-content-center" role="document">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0 pt-2 pb-0">
                            <button type="button" id="close_delete_language" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h4 className="modal-title w-100 text-center">Bạn có chắc muốn xóa?</h4>
                        </div>
                        <div className="modal-footer border-top-0 pt-0">
                            <button type="button" className="btn" data-dismiss="modal">Cancel</button>
                            <button type="button" onClick={() => languageStore.delete()} className="btn btn-info">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeleteLanguage;