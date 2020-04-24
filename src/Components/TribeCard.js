import React from 'react';
import axios from 'axios';


export default class TribeCard extends React.Component{
    state = {
        tribes: []
    };

    componentDidMount() {
        axios.get('https://revolutioncm.com/wp-json/acf/v3/tribe')
            .then(res => {
                const tribes = res.data;
                this.setState({tribes});
            })
    }

    render() {
        return (
            <div className="row">
            { this.state.tribes.map((tribe) =>
                <div key={tribe.id} className="col-lg-4">
                    <div className="card card-info">
                        <div className="card-body pd-40">
                            <div className="d-flex justify-content-center mg-b-30">
                            </div>
                            <h5 className="tx-inverse mg-b-20">{tribe.acf.title}</h5>
                            <p>{tribe.acf.description}</p>
                            <small>Leader Name: {tribe.acf.leader_name}</small>
                            <br/>
                            <hr />
                            <a className="p-2" href={tribe.acf.facebook_group_link} target="_blank">
                                <i className="fa fa-facebook-square ml-2"><span className="ml-1">View group</span></i>
                            </a>
                            <a className="p-2" href={tribe.acf.email} target="_blank">
                                <i className="fa fa-envelope "><span className="ml-1">Email group leader</span></i>
                            </a>
                        </div>
                    </div>
                </div>
            )}
            </div>
        )
    }
}