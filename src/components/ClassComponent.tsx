import React from 'react';


class ClassComponents extends React.Component {

    constructor(props: { name: string }) {

        super(props);

        //this.state = mý
        this.state = {
            name: "Zakumi",
            year: "1992",
            color: "green"
        };

        console.log(this.state.name);

    }

    state = {
        name: "Zakumi",
        year: "1992",
        color: "yellow"
    };

    changeColor = () => {
        this.setState({
            color: 'red'
        })
    }

    render() {
        return (
            <>
                <h1 className="myName" style={{ color: this.state.color }}>
                    My name is {this.state.name} and props is
                </h1>
                <button
                    type="button"
                    onClick={this.changeColor}
                >Change color</button>
            </>
        );
    }
}

export default ClassComponents;