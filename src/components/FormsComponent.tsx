import React from 'react';
import ChildComponents from './ChildComponent';

class FormsComponents extends React.Component {

    constructor(props: any) {
        super(props);
    }

    state = {
        firstName: "Tran",
        lastName: "Nam",
        jobs: [
            { "name": "React Developer", "salary": 3500 },
            { "name": ".Net Developer", "salary": 3700 },
            { "name": "Database Developer", "salary": 2100 },
            { "name": "Mobile Developer", "salary": 2600 },
            { "name": "AI developer", "salary": 4500 },
        ]
    };

    addNewJob = (job: any) => {
        console.log("check data recieve from parent..")
        this.setState({
            jobs: [... this.state.jobs, job]
        })

    }

    render() {
        return (
            <>
                <div className="job-list">
                    {
                        this.state.jobs.map((item: any, index: number) => {
                            return (
                                <div key={index}>
                                    {item.name} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>

                <ChildComponents addNewJobs={this.addNewJob}></ChildComponents>
            </>
        );
    }
}

export default FormsComponents;