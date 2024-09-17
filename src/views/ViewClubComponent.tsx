import React from "react";
import { Form } from "react-bootstrap";
import { loader as rootLoader } from "./ClubData";
import { useParams } from "react-router-dom";


class ViewClubComponent extends React.Component {

    // componentDidMount() {
    //     let params = useParams();
    //     console.log("check params: ", params.clubId)
    // }



    render() {
        console.log('check props: ', this.props)

        let { clubId } = useParams();
        // let params = useParams();
        console.log("check params: ", clubId)

        const clubDefault = {
            id: 1,
            name: 'Arsenal',
            national: 'Premier League',
            logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_96x96.png'
        };

        //const clubIdParam = params.clubId as unknown as number;

        const clubInfo = rootLoader().data.find(m => m.id == 1) ?? clubDefault;
        return (
            <>
                <div id="contact">
                    <div>
                        <img
                            key={clubInfo.logo}
                            src={
                                clubInfo.logo ||
                                'https://cdn.vectorstock.com/i/500p/44/73/uefa-europe-logo-symbol-blue-football-abstract-vector-47584473.jpg'
                            }
                        />
                    </div>

                    <div>
                        <h1>{clubInfo.name}</h1>
                        <p>{clubInfo.national}</p>

                        <div>
                            <Form action="edit">
                                <button type="submit">Edit</button>
                            </Form>
                            <Form
                                method="post"
                                action="destroy"
                                onSubmit={(event) => {
                                    if (
                                        !confirm(
                                            "Please confirm you want to delete this record."
                                        )
                                    ) {
                                        event.preventDefault();
                                    }
                                }}
                            >
                                <button type="submit">Delete</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default ViewClubComponent;


