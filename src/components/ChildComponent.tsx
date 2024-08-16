
// import PropTypes from 'prop-types'

import React from "react";

interface MyProps {
    addNewJobs: any
}

class ChildComponents extends React.Component<MyProps, {}> {

    state = {
        name: "Tran",
        salary: "Nam"
    };

    handleChangeJobName = (event: { target: { value: any; }; }) => {
        this.setState({
            name: event.target.value
        })
    };

    handleChangeSalary = (event: { target: { value: any; }; }) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = () => {

        console.log("Validate input form job: ", this.state);
        // event?.preventDefault();
        this.props.addNewJobs({
            id: Math.random(),
            name: this.state.name,
            salary: this.state.salary

        })
        this.setState({
            name: '',
            salary: ''
        })

    }

    render() {
        return (
            <>
                <form>
                    <label>Job Name:</label> <br />
                    <input type="text" name="fname" value={this.state.name} onChange={(event) => this.handleChangeJobName(event)} /> <br />

                    <label>Salary:</label> <br />
                    <input type="text" name="lname" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)} /> <br />

                    <input type="button" value="Submit" onClick={() => this.handleSubmit()} />
                </form>
            </>
        );
    }

}

export default ChildComponents
