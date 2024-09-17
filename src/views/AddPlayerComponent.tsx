import React from "react";
import { Form, InputGroup } from "react-bootstrap";

interface MyProps {
    Player: any
}

class AddPlayerComponent extends React.Component<MyProps> {
    constructor(props: MyProps) {
        super(props);
    }

    state = {
        name: "",
        number: "",
        isAlertWarning: false,
        validated: false
    }

    AddPlayerOnchange = (event: any) => {

        this.setState({
            name: event.target.value,
            isAlertWarning: false
        })

    }
    AddNumberOnchange = (event: any) => {

        this.setState({
            number: event.target.value,
            isAlertWarning: false
        })

    }

    AddPlayerOnSubmit = (event: any) => {
        console.log("Validate input form job: ", event);
        if (this.state.name == "" || this.state.number == "") {
            this.setState({
                isAlertWarning: true
            })
            this.state.validated = true;
            return;
        }
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // }

        // event?.preventDefault();
        this.props.Player({
            id: Math.random(),
            name: this.state.name,
            number: this.state.number ?? "7",
            club: "PSG"
        })

        this.setState({
            name: '',
            number: ''
        })
    }

    render() {
        return (
            <>
                {/* {
                    this.state.isAlertWarning && this.state.name == "" &&
                    <Alert variant="warning">Please input the player name.</Alert>
                }
                {
                    this.state.isAlertWarning && this.state.number == "" &&
                    <Alert variant="warning">Please input the number.</Alert>
                } */}

                <Form noValidate validated={this.state.validated}>
                    <InputGroup className="mb-3">
                        <Form.Control
                            onChange={(event) => this.AddPlayerOnchange(event)}
                            value={this.state.name}
                            type="text"
                            required
                            placeholder="Player Name"
                            aria-label="Recipient's player"
                            aria-describedby="basic-addon2"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid player name.
                        </Form.Control.Feedback>
                        <Form.Control
                            onChange={(event) => this.AddNumberOnchange(event)}
                            value={this.state.number}
                            required
                            type="text"
                            placeholder="Number"
                            aria-label="number"
                            aria-describedby="basic-addon3"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid number.
                        </Form.Control.Feedback>
                        <InputGroup.Text id="basic-addon2"
                            onClick={(event) => this.AddPlayerOnSubmit(event)}
                            className="btn btn-primary">Add Player</InputGroup.Text>
                    </InputGroup>
                </Form>
            </>
        );
    }


}

export default AddPlayerComponent;