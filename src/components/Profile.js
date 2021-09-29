import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "@restart/ui/esm/Button";
class Profile extends Component {
  render() {
    return (
      <>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label for="name"> Your name </label>
              <br />
              <input
                type="text"
                placeholder=" Enter your name .. "
                name="username"
                maxlength="15"
                minlength="3"
                required
                id="name"
              ></input>
              <br />
              <label className="gender" for="male">
                male
              </label>
              <input type="radio" id="male" required name="gender"></input>
              <br />
              <label className="gender" for="female">
                female
              </label>
              <input type="radio" id="female" required name="gender"></input>
              <br />
              <br />
              <label for="country">Your country</label>
              <input
                type="text"
                placeholder="Enter your country.."
                name="user country"
                maxlength="15"
                minlength="2"
                required
                id="country"
              ></input>
              <br />
              <label for="birthday"> Your Birthday </label>
              <input
                type="date"
                placeholder="Enter your birthday .."
                name="user age"
                maxlength="3"
                minlength="1"
                id="birthday"
              ></input>
              <br />
              <h3> Contact Info</h3>
              <label for="phone"> Phone Number</label>
              <input
                type="number"
                placeholder="Enter your phone number"
                name="userphone"
                maxlength="15"
                minlength="7"
                required
                id="partner"
              ></input>
              <br />
              <label for="email">Email Address</label>
              <input
                type="text"
                placeholder="Enter your Email"
                name="useremail"
                maxlength="30"
                minlength="7"
                required
                id="email"
              ></input>
              <br />
              <label for="partner"> Your favourite Sport </label>
              <select name="Your favourite Sport" id="partner">
                <option value=""> </option>
                <option value=" ">Football </option>
                <option value="">Basketball</option>
                <option value="">Baseball</option>
                <option value="">Tennis</option>
                <option value="">Golf</option>
                <option value="">Volleyball</option>
                <option value="">American Football</option>
                <option value="">Other</option>
              </select>
              {/* <a href="./submit.html"><button id="button">submit</button></a>    */}
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
        {/* ---------------------------- */}
      </>
    );
  }
}
export default Profile;
