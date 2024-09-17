import { useDispatch, useSelector } from 'react-redux'
import { updatePlayer } from '../../reducers/playerSlice';
import { Alert, Table } from 'react-bootstrap';

function PlayerPage() {

    const players = useSelector((state: { player: { list: any; }; }) => state.player.list)
    const dispatch = useDispatch()

    const handlesubmitUpdatePlayer = (player: any) => {
        const action = updatePlayer(player);
        dispatch(action);
    }

    return (
        <>
            <div className="player-list">
                {
                    players.length == 0 ? <Alert variant="info">No data found</Alert> :
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
                                        players.map((item: any, index: number) => {
                                            return (
                                                <tr>
                                                    <td>{item.name}</td>
                                                </tr>
                                                // <tr key={index}>
                                                //     <td>{index + 1}</td>
                                                //     <td>
                                                //         {
                                                //             (this.state.editPlayer.id == item.id) ?
                                                //                 <input type="text" value={this.state.editPlayer.name}
                                                //                     onChange={(event) => this.EditPlayerOnChange(event)} /> :
                                                //                 <span>{item.name}</span>
                                                //         }
                                                //     </td>
                                                //     <td>
                                                //         {
                                                //             (this.state.editPlayer.id == item.id) ?
                                                //                 <input type="text" value={this.state.editPlayer.number}
                                                //                     onChange={(event) => this.EditNumberOnChange(event)} /> :
                                                //                 <span>{item.number}</span>
                                                //         }
                                                //     </td>
                                                //     <td>
                                                //         {
                                                //             (this.state.editPlayer.id == item.id) ?
                                                //                 <Button type="button" variant="primary" onClick={() => this.SavePlayer()}>Save</Button> :
                                                //                 <Button type="button" variant="outline-primary" onClick={() => this.EditPlayer(item)}>Edit</Button>
                                                //         }
                                                //         {this.space}
                                                //         <Button type="button" variant="outline-danger" onClick={() => this.RemovePlayer(item)}>Delete</Button>
                                                //     </td>
                                                // </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>

                }
            </div>

        </>
    )
}

export default PlayerPage;