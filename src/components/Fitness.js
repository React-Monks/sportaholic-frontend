
import React, { Component } from 'react'
import axios from 'axios';
import { Col,Row,Nav } from 'react-bootstrap';
import {Tabs} from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import TabContainer from 'react-bootstrap/TabContainer';


class Fitness extends Component {

    constructor(props) {
        super(props);
        this.state = {
            calData: '',
            query: '',
            gender: "",
            weight_kg: 0,
            height_cm: 0,
            age: 0,
            foodData: '',
        }
    }

    handleExercise = async (e) => {
        e.preventDefault();
        await this.setState({
            query: e.target.exercise.value,
            gender: e.target.gender.value,
            weight_kg: e.target.weight.value,
            height_cm: e.target.hight.value,
            age: e.target.age.value
        });
        let config = await {
            method: "POST",
            url: "https://trackapi.nutritionix.com/v2/natural/exercise",
            headers: {
                "x-app-key": process.env.REACT_APP_NUTRITIONIX_KEY,
                "x-app-id": process.env.REACT_APP_NUTRITIONIX_ID
            },
            data: {
                "query": this.state.query,
                "gender": this.state.gender,
                "weight_kg": this.state.weight_kg,
                "height_cm": this.state.height_cm,
                "age": this.state.age
            }
        }
        axios(config).then(res => {
            this.setState({
                calData: res.data.exercises[0]
            })
        })
    }

    handleFood = async (e) => {
        e.preventDefault();

        let foodName = await e.target.foodElement.value;

        let config = await {
            method: "POST",
            url: "https://trackapi.nutritionix.com/v2/natural/nutrients",
            headers: {
                "x-app-key": process.env.REACT_APP_NUTRITIONIX_KEY,
                "x-app-id": process.env.REACT_APP_NUTRITIONIX_ID
            },
            data: {
                "query": foodName,
            }
        }
        axios(config).then(res => {
            this.setState({
                foodData: res.data.foods[0]
            })
        })
    }
    render() {
        let health = this.state.calData;
        let food = this.state.foodData;
        return (
            <>
            <div className="fitnessDiv">
<div className="row">
    <Col>
                        <div className="login-box" id="tableMargin">
                            <h2>Calories burned calculator</h2>
                            <form onSubmit={(e) => {
                                this.handleExercise(e);
                            }}>
                                <div className="user-box">
                                    <input type="text" name="exercise" required />
                                    <label>Exercise type</label>
                                </div>
                                <div className="user-box">
                                    <input type="text" name="gender" required />
                                    <label>Gender</label>
                                </div>
                                <div className="user-box">
                                    <input type="text" name="hight" required />
                                    <label>Hight</label>
                                </div>
                                <div className="user-box">
                                    <input type="text" name="weight" required />
                                    <label>Weight</label>
                                </div>
                                <div className="user-box">
                                    <input type="text" name="age" required />
                                    <label>Age</label>
                                </div>
                                <a>
                                    <input id="submitBTN" type="submit" />
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a>
                            </form>
                        </div>
                        </Col>
                        <Col>
                        
                        {health !== '' &&
                            <table className="tableEdit">
                                <tbody>
                                    <tr>
                                        <td>Estimated time</td>
                                        <td>{health.duration_min} min</td>

                                    </tr>
                                    <tr>
                                        <td>Calories burned </td>
                                        <td>{health.nf_calories}</td>

                                    </tr>
                                    <tr>
                                        <td>Training type</td>
                                        <td>{health.name}</td>

                                    </tr>
                                </tbody>
                            </table>
                        }
                        </Col>
                        </div>
                        
                        <div className="row">
    <Col>
    <div className="login-box" >
                            <h2>Food analyzer</h2>
                            <form onSubmit={(e) => {
                                this.handleFood(e);
                            }}>
                                <div className="user-box">
                                    <input type="text" name="foodElement" required />
                                    <label>Exercise type</label>
                                </div>
                                <a >
                                    <input id="submitBTN" type="submit" />
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a>
                            </form>
                        </div>
                         </Col>
                         <Col>
                {food !== '' &&
                    <table className="tableEdit">
                        <tbody>
                            <tr>
                                <td>Quantity </td>
                                <td>{food.serving_qty} {food.serving_unit} </td>
                                <td>Weight served </td>
                                <td>{food.serving_weight_grams} gram</td>
                            </tr>
                            <tr>
                                <td>Quantity </td>
                                <td>{food.serving_qty} {food.serving_unit} </td>
                                <td>Calories </td>
                                <td>{food.nf_calories} kcal </td>

                            </tr>
                            <tr>
                                <td>Fiber </td>
                                <td>{food.nf_dietary_fiber} mg </td>
                                <td>Cholesterol </td>
                                <td>{food.nf_cholesterol} mg </td>
                            </tr>
                            <tr>
                                <td>Protien </td>
                                <td>{food.nf_protein} mg </td>
                                <td>Sugars </td>
                                <td>{food.nf_sugars} mg </td>
                            </tr>
                            <tr>
                                <td>Phosphorus </td>
                                <td>{food.nf_p} mg </td>
                                <td>Potassium </td>
                                <td>{food.nf_potassium} mg </td>

                            </tr>
                            <tr>
                                <td>Total carbohydrate </td>
                                <td>{food.nf_total_carbohydrate} mg </td>
                                <td>Total fat </td>
                                <td>{food.nf_total_fat} mg </td>

                            </tr>
                        </tbody>
                    </table>
                }
                </Col>
                </div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/CO-Mvpl0QUY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
{/* -------------------------- */}
<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fifth">Tab 1</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={3}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        FOOTBALL PLAYERS WITH HEALTHY HABITS KNOW THEY WILL FAIL A LOT
“Ever tried. Ever failed. No Matter. Try Again. Fail again. Fail better.” – Samuel Beckett        </Tab.Pane>
        <Tab.Pane eventKey="second">
        THEY ARE CONSISTENT
You need to try, fail, and then try again. But, you can’t just do it on one day. You need to do it consistently.       </Tab.Pane>
<Tab.Pane eventKey="third">
THEY STRETCH AND WARM-UP WELL
This is one of the healthy habits of football players that young players often ignore.

Warming up and stretching well is the most underestimated pre-match and pre-training routine out there. It’s also one of the healthy habits of football players that if done wrong hurts players rather than helping them.    </Tab.Pane>
<Tab.Pane eventKey="fourth">
THEY KNOW THERE’S ALWAYS MORE TO LEARN
This is one of the healthy habits of football players that allowed players such as Ronaldo to maintain at such a high level at the age of 34.        </Tab.Pane>
<Tab.Pane eventKey="fifth">
THEY SLEEP RIGHT
We all love to sleep in the morning, but when we have a choice over watching Netflix or going to bed at the right time, in most cases, most of us will choose Netflix.        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</div>
            </>

        )
    }
}

export default Fitness
