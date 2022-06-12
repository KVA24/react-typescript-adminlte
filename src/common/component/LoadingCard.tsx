import React, {Component} from 'react';
import Loading from "./Loading";


class LoadingCard extends Component<any, any> {
    render() {
        return (
            <div className="content-wrapper">
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <Loading />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoadingCard;
