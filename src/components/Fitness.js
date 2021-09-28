
import React, { Component } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';
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
            query: e.target[0].value,
            gender: e.target[1].value,
            weight_kg: e.target[2].value,
            height_cm: e.target[3].value,
            age: e.target[4].value
        });
        let config = await {
            method: "POST",
            url: "https://trackapi.nutritionix.com/v2/natural/exercise",
            headers: {
                "x-app-key": "5877104300b2c0e3213847b2fa2877c0",
                "x-app-id": "3b2968c4",
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

        let foodName = await e.target[0].value;

        let config = await {
            method: "POST",
            url: "https://trackapi.nutritionix.com/v2/natural/nutrients",
            headers: {
                "x-app-key": "5877104300b2c0e3213847b2fa2877c0",
                "x-app-id": "3b2968c4",
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
                <form onSubmit={(e) => this.handleExercise(e)}>
                    <input type='text' placeholder="Exercise" />
                    <input type='text' name="gender" placeholder="gender" />
                    <input type='text' name="hight" placeholder="hight" />
                    <input type='text' name="weight" placeholder="weight" />
                    <input type='text' name="age" placeholder="age" />
                    <input type='submit' />
                </form>
                <br />
                <form onSubmit={(e) => this.handleFood(e)}>
                    <input type='text' placeholder="Food name" />
                    <input type='submit' />
                </form>
                {health !== '' &&
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <td>Estimated time</td>
                                <td>{health.duration_min} min</td>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Calories burned </td>
                                <td>{health.nf_calories}</td>

                            </tr>
                            <tr>
                                <td>Training type</td>
                                <td>{health.name}</td>

                            </tr>
                        </tbody>
                    </Table>
                }
                {food !== '' &&
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>Quantity </th>
                            <td>{food.serving_qty} {food.serving_unit} </td>
                            <th>Weight served </th>
                            <td>{food.serving_weight_grams} gram</td>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <th>Quantity </th>
                                <td>{food.serving_qty} {food.serving_unit} </td>
                                <th>Calories </th>
                                <td>{food.nf_calories} kcal </td>

                            </tr>
                            <tr>
                                <th>Fiber </th>
                                <td>{food.nf_dietary_fiber} mg </td>
                                <th>Cholesterol </th>
                                <td>{food.nf_cholesterol} mg </td>
                            </tr>
                            <tr>
                                <th>Protien </th>
                                <td>{food.nf_protein} mg </td>
                                <th>Sugars </th>
                                <td>{food.nf_sugars} mg </td>
                            </tr>
                            <tr>
                                <th>Phosphorus </th>
                                <td>{food.nf_p} mg </td>
                                <th>Potassium </th>
                                <td>{food.nf_potassium} mg </td>

                            </tr>
                            <tr>
                                <th>Total carbohydrate </th>
                                <td>{food.nf_total_carbohydrate} mg </td>
                                <th>Total fat </th>
                                <td>{food.nf_total_fat} mg </td>

                            </tr>
                        </tbody>
                    </Table>
                }
 {/* ------------------------------- */}

 <iframe width="560" height="315" src="https://www.youtube.com/embed/CO-Mvpl0QUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </>
        )
    }
}

export default Fitness
