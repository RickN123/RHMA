import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import Report from "../components/Report/ExpenseReport"
import axios from "axios";

class ExpenseReport extends Component {

  state = {
    p:"",
    q:"",
    r:"",
    s:"",
    t:"",
    u:"",
    v:""
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    axios.post("/api/expense", {
      month: this.state.p,
      year:2019,
      rentMortgage: this.state.q,
      insurance: this.state.v,
      tax: this.state.r,
      payroll: this.state.s,
      advertising: this.state.t,
      utilities: this.state.u

    }).then(res => {
      console.log(res);

    }).catch(error=> {
      console.log(error);
    })
  }

  render() {
    return (

      <Container>
        <Row>
          <Col size="md-12">

            <Jumbotron>
              <h1 className="text-center">
                <strong>Learn Your True Cost of Doing Business</strong>
              </h1>
              <h2 className="text-center">Input Your Expenses for Data Insights</h2>
            </Jumbotron>
            
          </Col>

          <Col size="md-12">
            <Card title="Expense Report" icon="far fa-book">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <Card title="Current Insights" icon="fas fa-chart-pie">

            <Row>
              <Col size="md-12">

          <div align="center">
          <Report></Report>

                </div>

                </Col>
              </Row>


              {/* {this.state.expenses.length ? (
                <List>
                  
                  {this.state.expenses.map(expense => (
                    <Book
                      key={expense.id}
                      rent={expense.volumeInfo.rent}
                      taxes={expense.volumeInfo.taxes}
                      payroll={expense.volumeInfo.payroll}
                      advertising={expense.volumeInfo.advertising.join(", ")}
                      utilities={expense.volumeInfo.utilities}
                      Button={() => (
                        
                        <button
                          onClick={() => this.handleExpenseSave(expense.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                  <h2 className="text-center">Current Monthly Insight</h2>
                )} */}


            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default ExpenseReport;

// state = {
//   expenses: [],
//   q: "",
//   message: "Visualize Your Monthly and Quarterly Expenses!"
// };