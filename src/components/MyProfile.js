import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import {
    Container,
    Row,
    Col,
    Tabs,
    Tab,
    Modal,
    Button

} from 'react-bootstrap'
import axios from 'axios';



class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            text: '',
            showForm: false,
            id: '',
            favItems: [],
            players: [],
            teams: []
        }
    }
    //##########################################{Article}#######################################|
    componentDidMount = () => {
        let config = {
            method: "GET",
            url: `${process.env.REACT_APP_BACKEND}/article`,
        }

        axios(config).then(res => {
            let unFeltered = res.data;
            let filtered = unFeltered.filter(item => item.userEmail === this.props.auth0.user.email)
            this.setState({
                data: filtered
            })
        })
        let favirets = {
            method: "GET",
            url: `${process.env.REACT_APP_BACKEND}/fav`,
        }
        axios(favirets).then(res => {
            let unFeltered = res.data;
            let filtered = unFeltered.filter(item => item.userEmail === this.props.auth0.user.email)
            let findteam = []
            filtered.map(item => {
                return (item.type === "team" && findteam.push(item))
            })
            let findplayer = []
            filtered.map(item => {
                return (item.type === "player" && findplayer.push(item))
            })
            this.setState({
                favItems: filtered,
                teams: findteam,
                players: findplayer

            })
        })
    }

    handleUpdatedForm = async (e) => {
        e.preventDefault();
        await this.setState({
            text: e.target.text.value,
            showForm: false,
        })
        let config = await {
            method: "PUT",
            baseURL: `${process.env.REACT_APP_BACKEND}`,
            url: `/updateArticle/${this.state.id}`,
            data: {
                userName: this.props.auth0.user.name,
                userEmail: this.props.auth0.user.email,
                text: this.state.text
            }
        }

        axios(config).then(res => {
            let unFeltered = res.data;
            let filtered = unFeltered.filter(item => item.userEmail === this.props.auth0.user.email)
            this.setState({
                data: filtered
            })
        })
    }

    handleDelete = (id) => {
        let config = {
            method: "DELETE",
            baseURL: process.env.REACT_APP_BACKEND,
            url: `/deleteArticle/${id}`,
        }
        axios(config).then(res => {
            let unFeltered = res.data;
            let filtered = unFeltered.filter(item => item.userEmail === this.props.auth0.user.email)

            this.setState({
                favItems: filtered,


            })
        })

    }

    handleUpdate = (text, id) => {
        this.setState({
            showForm: true,
            text: text,
            id: id,
        });
    };

    //##########################################{fav}###########################################|

    handleFavDelete = async (id) => {
        let config = await {
            method: "DELETE",
            baseURL: process.env.REACT_APP_BACKEND,
            url: `/deletefav/${id}`,
        }

        await axios(config).then(res => {
            let unFeltered = res.data;
            let filtered = unFeltered.filter(item => item.userEmail === this.props.auth0.user.email)
            let findteam = []
            filtered.map(item => {
                return (item.type === "team" && findteam.push(item))
            })
            let findplayer = []
            filtered.map(item => {
                return (item.type === "player" && findplayer.push(item))
            })
            this.setState({
                favItems: filtered,
                teams: findteam,
                players: findplayer

            })
        })
    }


    render() {

        return (
            <Container>
                <Row>
                    <Col className="mb-5 mb-lg-0" lg="3" md="6">
                        <div className="px-4">
                            <img
                                alt="..."
                                className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                src={`${this.props.auth0.user.picture}`}
                                style={{ width: "220px", height: '220px' }}
                            />
                            <div className="pt-4 text-center">
                                <h5 className="title">
                                    <span className="d-block mb-1">{this.props.auth0.user.name}</span>
                                    <small className="h6 text-muted">{this.props.auth0.user.email}</small>
                                </h5>

                            </div>
                        </div>
                    </Col>
                    <Col className="mb-5 mb-lg-0" lg="3" md="6" style={{ width: '50%' }}>
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" style={{ fontSize: '30px' }}>
                            <Tab eventKey="favorites" title="My Favorites" >
                                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" style={{ fontSize: '30px' }}>
                                    <Tab eventKey="team" title="My Team" >

                                        {this.state.teams.map(fav => {

                                            return (<tbody>
                                                <tr>
                                                    <th>
                                                        <img src={fav.imgUrl} alt="img" />
                                                    </th>
                                                    <th>
                                                        {fav.name}
                                                    </th>
                                                    <th>
                                                        <button onClick={() => this.handleFavDelete(fav._id)}>DELETE</button>
                                                    </th>
                                                </tr>
                                            </tbody>

                                            )


                                        })
                                        }
                                    </Tab>
                                    <Tab eventKey="players" title="Players" >
                                        {this.state.players.map(fav => {

                                            return (<tbody>
                                                <tr>
                                                    <th>
                                                        <img src={fav.imgUrl} alt="img" />
                                                    </th>
                                                    <th>
                                                        {fav.name}
                                                    </th>
                                                    <th>
                                                        <button onClick={() => this.handleFavDelete(fav._id)}>DELETE</button>
                                                    </th>
                                                </tr>
                                            </tbody>

                                            )


                                        })
                                        }
                                    </Tab>
                                </Tabs>

                            </Tab>
                            <Tab eventKey="articles" title="My Articles">
                                <table>
                                    {this.state.data.map(article => {
                                        return (<tbody>
                                            <tr>
                                                <th>
                                                    {article.userName}
                                                </th>
                                                <th>
                                                    {article.text}
                                                </th>
                                                <th>
                                                    <button onClick={() => this.handleDelete(article._id)}>DELETE</button>
                                                </th>
                                                <th>
                                                    <button onClick={() => this.handleUpdate(article.text, article._id)}>
                                                        Edit article
                                                    </button>

                                                    <Modal show={this.state.showForm} onHide={() => this.setState({ showForm: false })}>
                                                        <Modal.Header closeButton>
                                                            <Modal.Title>update</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body><form onSubmit={(e) => this.handleUpdatedForm(e)} >
                                                            <textarea name="text" />
                                                            <Button variant="primary" type="submit">
                                                                Save Changes
                                                            </Button>
                                                        </form></Modal.Body>
                                                        <Modal.Footer>


                                                        </Modal.Footer>
                                                    </Modal>
                                                </th>
                                            </tr>
                                        </tbody>)

                                    })
                                    }
                                </table>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withAuth0(MyProfile)
