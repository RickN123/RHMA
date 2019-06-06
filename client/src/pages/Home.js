import React, { Component } from "react";
import Form from "../components/SignUpForm";
import axios from "axios";
import { Redirect } from "react-router-dom";
import PasswordShowHide from "../components/PasswordShowHide/passwordShowHide";


class SignUp extends Component {
    state = {
      username: "",
      password: "",
      message: "Enter Username and Password to Begin!",
      redirectTo: null
    };

   
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
      }
    
    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);

        axios.post("/api/user", {
            username: this.state.username,
            password: this.state.password
        })
            .then(response => {
                console.log(response);

                if (response.data) {
                    console.log("Successful Sign Up!");
                    // this.API.updateUser({
                    //     loggedIn: true,
                    //     username: response.data.username
                    // })
                    this.setState({
                        username: "",
                        password: "",
                        redirectTo: "/expensereport"
                    })
                    // this.props.history.push("/dashboard");
                } else {
                    console.log("Sign Up Error");

                }
            }).catch(error => {
                console.log("Sign Up Server Error!");
                console.log(error);
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
           
        return (

            <div>

                <h1 className="text-center">
                    <strong>HARM Enterprises Financial Help</strong>
                </h1>

                <h2 className="text-center">Sign Up to Join Us.  We mean well.</h2>

                <Form
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    username={this.state.username}
                    password={this.state.password}
                />

                <PasswordShowHide/>

            </div>
        );
        }
    }
}

export default SignUp;


// import React from "react";

// function SignUpForm({ username, password, handleInputChange, handleFormSubmit }) {
//   return (

//     <form>
//         <div className="form-group">

//             <label htmlFor="username">
//                 <strong>Sign-Up Page</strong>
//             </label>

//             <input
//                 className="form-control"
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={username}
//                 placeholder="Input Username.."
//                 onChange={handleInputChange}
//                 required={true}
//             />

//             <input
//                 className="form-control"
//                 type="text"
//                 id="password"
//                 name="password"
//                 value={password}
//                 placeholder="Input Password.."
//                 onChange={handleInputChange}
//                 required={true}
//             />

//         </div>
        
//         <div className="pull-right">
//             <button
//                 onClick={handleFormSubmit}
//                 type="submit"
//                 className="btn btn-lg btn-danger float-right"
//             >
//                 Sign Up
//             </button>
//         </div>
//     </form>
//   );
// }


// export default SignUpForm;
