import React from "react"
import { Alert } from "react-bootstrap"
import './club.css'
import { Link, Outlet } from "react-router-dom"
// import { loader as rootLoader } from "./ClubData";
import { getClubs, getClubById } from "../apis/clubApiHandler";


class ClubsComponent extends React.Component {


    state = {
        clubs: [],
        clubInfo: {
            id: 1,
            name: 'Arsenal',
            national: 'Premier League',
            logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_96x96.png'
        }
    }

    viewClubInfo = (club: any) => {
        this.setState({
            clubInfo: club
        })
    }

    searchClub = async (keyword: any) => {
        var ClubInfo = await getClubs();
        console.log('search........... ', ClubInfo)
        var data = ClubInfo.data.filter((m: { name: string; }) => m.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
        console.log('data: ', data);
        this.setState({
            clubs: data
        });

    }

    async componentDidMount() {
        console.log("start call api to club");
        const response = await getClubs();
        this.setState({
            clubs: response && response.data && response.data ? response.data : []
        })
    }


    render() {

        return (
            <>
                <div className="club-page">
                    <div id="sidebar">
                        <h1>React Router Contacts</h1>
                        <div>
                            <form id="search-form" role="search">
                                <input
                                    id="q"
                                    aria-label="Search contacts"
                                    placeholder="Search"
                                    type="search"
                                    onChange={(event) => this.searchClub(event.target.value)}
                                    name="q"
                                />
                                <div
                                    id="search-spinner"
                                    aria-hidden
                                    hidden={true}
                                />
                                <div
                                    className="sr-only"
                                    aria-live="polite"
                                ></div>
                            </form>
                            <form method="post">
                                <button type="submit">New</button>
                            </form>
                        </div>
                        {
                            this.state.clubs.length == 0 ? <Alert variant="warning">No data found</Alert> :
                                <nav>
                                    <ul>
                                        {
                                            this.state.clubs.map((item: any, index: number) => {
                                                return (
                                                    // <li key={index}>
                                                    //     <a onClick={() => this.viewClubInfo(item)} key={index}>{item.name}</a>
                                                    // </li>
                                                    <Link key={index} to={`view/${item.id}`}>{item.name}</Link>
                                                )
                                            })
                                        }
                                    </ul>
                                </nav>
                        }

                    </div>
                    <div id="detail">
                        <Outlet></Outlet>
                        {/* <ViewClubComponent></ViewClubComponent> */}
                    </div>
                </div>
            </>

        )
    }
}

export default ClubsComponent;

