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
    render() {
        console.log(this.state.calData.duration_min);
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
                {this.state.calData !== '' &&
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <td>Estimated time</td>
                                <td>{this.status.calData.duration_min} min</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Calories burned </td>
                                <td>{this.status.calData.nf_calories}</td>
                            </tr>
                            <tr>
                                <td>Training type</td>
                                <td>{this.status.calData.name}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry the Bird</td>
                            </tr>
                        </tbody>
                    </Table>
                }
            </>
        )
    }
}
export default Fitness