import React, {Component} from 'react';
import {observer} from "mobx-react";
import ReactPaginate from "react-paginate";
import {languageStore} from "./LanguageStore";
import DeleteLanguage from "./components/DeleteLanguage";
import AddLanguage from "./components/AddLanguage";
import EditLanguage from "./components/EditLanguage";
import {requestUtils} from "../../common/utils/RequestUtil";
import Loading from "../../common/component/Loading";
import NoContent from "../../common/component/NoContent";
import {getLocalDateTime} from "../../common/utils/Utils";

@observer
class Language extends Component {

    async componentDidMount() {
        await languageStore.getLanguage()
    }
    

    handlePageClick = async (data: any) => {
        let selected: number = data.selected;
        languageStore.page = selected;
        //add query to url
        requestUtils.saveQueryParam(this.props, {page: languageStore.page});
        await languageStore.getLanguage()
    };


    render() {
        return (
            <div className="game_category">
                <div className="content-wrapper">
                    <div className="row d-flex align-items-center justify-content-between mt-2 mb-3">
                        <div className="pl-2 pr-2 w-100 d-flex align-items-center justify-content-between">
                            <h3 className="mb-0">Language</h3>
                            <button type="button" className="btn btn-outline-info" onClick={() => languageStore.resetForm()} data-toggle="modal" data-target="#addLanguage">Create</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            {languageStore.isLoading ? <Loading/> :
                                <div className="table-responsive mt-4">
                                    {languageStore.languageList && languageStore.languageList.length > 0 ?
                                        <table className="table table-striped">
                                            <thead>
                                            <tr>
                                                <th><strong>Id</strong></th>
                                                <th><strong>Name</strong></th>
                                                <th><strong>IsDefault</strong></th>
                                                <th><strong>Created At</strong></th>
                                                <th><strong>Updated At</strong></th>
                                                <th><strong>State</strong></th>
                                                <th className="text-center"><strong>Actions</strong></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {languageStore.languageList.map((item, i) => {
                                                return (
                                                    <tr key={i} className="position-relative">
                                                        <td>{item.id}</td>
                                                        <td width="30%">{item.name}</td>
                                                        <td>{item.isDefault && <i style={{fontSize: `20px`}} className="fas text-success fa-check"/>}</td>
                                                        <td>{item.createdAt ? getLocalDateTime(item.createdAt, 'dd/mm/yyyy') : ''}</td>
                                                        <td>{item.updatedAt  ? getLocalDateTime(item.updatedAt, 'dd/mm/yyyy') : ''}</td>
                                                        <td>{item.state}</td>
                                                        <td width="5%" className="text-center">
                                                            <button type="button"
                                                                    className="btn btn-inverse-warning btn-icon"
                                                                    data-toggle="modal"
                                                                    data-target="#editLanguage"
                                                                    onClick={() => languageStore.languageDetail(item.id)}>
                                                                <i className="fas fa-pen"/>
                                                            </button>
                                                            <button type="button"
                                                                    onClick={() => languageStore.id = item.id}
                                                                    data-toggle="modal"
                                                                    data-target="#deleteLanguage"
                                                                    className="btn btn-inverse-danger ml-2 btn-icon">
                                                                <i className="fas fa-trash-alt"/>
                                                            </button>
                                                        </td>
                                                    </tr>

                                                )
                                            })}
                                            </tbody>

                                        </table>
                                        :
                                        <div className="p-5">
                                            <NoContent/>
                                        </div>
                                    }
                                </div>
                            }
                            <div className="pagination mt-3">
                                {languageStore.totalPages > 1 &&
                                <ReactPaginate
                                    previousLabel={'Previous'} nextLabel={'Next'} breakLabel={'...'}
                                    breakClassName={'break-me'}
                                    pageCount={languageStore.totalPages}
                                    forcePage={languageStore.page} marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={this.handlePageClick} containerClassName={'pagination'}
                                    pageClassName={'paginate_button page-item'} pageLinkClassName={'page-link'}
                                    activeClassName={'active'}
                                    previousClassName={'paginate_button page-item previous'}
                                    previousLinkClassName={'page-link'}
                                    nextClassName={'paginate_button page-item next'} nextLinkClassName={'page-link'}
                                />}
                            </div>
                            <AddLanguage/>
                            <EditLanguage/>
                            <DeleteLanguage/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Language;