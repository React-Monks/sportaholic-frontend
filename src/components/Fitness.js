
import React, { Component } from 'react'
import axios from 'axios';
import { Col } from 'react-bootstrap';



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
                                    <a href={() => false}>
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
                                    <a href={() => false}>
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
                </div>
            </>

        )
    }
}

export default Fitness
