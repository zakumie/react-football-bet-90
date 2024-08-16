import React from "react";
import { Alert, Button, Table } from 'react-bootstrap';
import AddPlayerComponent from "./AddPlayerComponent";


class PlayerComponents extends React.Component {

    constructor(props: any) {
        super(props);
    }

    state = {
        players: [{
            id: 1,
            name: "Neymar",
            number: "10",
            club: "PSG"
        }],
        editPlayer: {
            id: 0,
            name: "",
            number: "",
        }
    }

    space = '   ';


    EditPlayerOnChange = (event: any) => {
        let editPlayerCopy = { ...this.state.editPlayer };
        editPlayerCopy.name = event.target.value;
        this.setState({
            editPlayer: editPlayerCopy
        })
    }

    EditNumberOnChange = (event: any) => {
        let editPlayerCopy = { ...this.state.editPlayer };
        editPlayerCopy.number = event.target.value;
        this.setState({
            editPlayer: editPlayerCopy
        })
    }

    AddPlayer = (player: any) => {
        this.setState({
            players: [... this.state.players, player]
        })
    }

    EditPlayer = (player: any) => {
        this.setState({
            editPlayer: player
        })
    }

    SavePlayer = () => {
        this.setState({
            players: this.state.players.map(item => {
                if (item.id == this.state.editPlayer.id) {
                    return { ...item, name: this.state.editPlayer.name, number: this.state.editPlayer.number };
                }
                return item;
            }),
            editPlayer: {}
        })
    }


    RemovePlayer = (player: any) => {
        console.log('remove player: ', player)
        this.setState({
            players: this.state.players.filter(m => m != player)
        })
    }

    render() {
        //let isEmptyObject = Object.keys(this.state.editPlayer).length === 0;
        return (
            <>
                <AddPlayerComponent Player={this.AddPlayer}></AddPlayerComponent>
                {
                    this.state.players.length == 0 ? <Alert variant="info">No data found</Alert> :
                        <div className="player-list">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Player Name</th>
                                        <th>Number</th>
                                        <th>Action More</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.players.map((item: any, index: number) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        {
                                                            (this.state.editPlayer.id == item.id) ?
                                                                <input type="text" value={this.state.editPlayer.name}
                                                                    onChange={(event) => this.EditPlayerOnChange(event)} /> :
                                                                <span>{item.name}</span>
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            (this.state.editPlayer.id == item.id) ?
                                                                <input type="text" value={this.state.editPlayer.number}
                                                                    onChange={(event) => this.EditNumberOnChange(event)} /> :
                                                                <span>{item.number}</span>
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            (this.state.editPlayer.id == item.id) ?
                                                                <Button type="button" variant="primary" onClick={() => this.SavePlayer()}>Save</Button> :
                                                                <Button type="button" variant="outline-primary" onClick={() => this.EditPlayer(item)}>Edit</Button>
                                                        }
                                                        {this.space}
                                                        <Button type="button" variant="outline-danger" onClick={() => this.RemovePlayer(item)}>Delete</Button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>

                }

            </>
        );
    }

}

export default PlayerComponents

