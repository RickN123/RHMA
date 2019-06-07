import React, { Component } from "react";
import Chart from 'react-google-charts';
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import Expense from "../components/Expense";
import Quarter from "../components/Quarter";


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

class BusinessAnalysis extends Component {
  state = {
    expenses: []
  };

  componentDidMount() {
    this.getSavedExpenses();
  }

  getSavedExpenses = () => {
    API.getSavedExpenses()
      .then(res =>
        this.setState({
          expenses: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleExpenseDelete = id => {
    API.deleteExpense(id).then(res => this.getSavedExpenses());
  };

  render() {
    return (

      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Business Analysis Visual</strong>

              </h1>
              <h2 className="text-center">Review Your Monthly Insights Below</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            
            <Card title="Visuals" icon="fas fa-money-check-alt">

              <Quarter>

                <Row>
                  <Col size="md-6">

                <div>
                <Chart className="febChart"
                  width={'500px'}
                  height={'300px'}
                  chartType="PieChart"
                  data={[
                    ['Expense', 'Amount'],
                    ['Advertising', 200],
                    ['Insurance', 350],
                    ['Payroll', 12000],
                    ['Rent', 1500],
                    ['Utilities', 1200],
                  ]}
                  options={{
                    title: 'February Expense Report',
                    is3D: true,
                  }}
                  rootProps={{ 'data-testid': '2' }}
                />
                </div>

                </Col>

                <Col size="md-6">
                  <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="PieChart"
                    data={[
                      ['Expense', 'Amount'],
                      ['Advertising', 150],
                      ['Insurance', 350],
                      ['Payroll', 11000],
                      ['Rent', 1500],
                      ['Utilities', 1000],
                    ]}
                    options={{
                      title: 'March Expense Report', 
                      is3D: true,
                    }}
                    rootProps={{ 'data-testid': '2' }}
                  />

                </Col>
              </Row>

              <Row>
                <Col size="md-6">

                  <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="PieChart"
                    data={[
                      ['Expense', 'Amount'],
                      ['Advertising', 100],
                      ['Insurance', 350],
                      ['Payroll', 10000],
                      ['Rent', 1500],
                      ['Utilities', 800],
                    ]}
                    options={{
                      title: 'April Expense Report', 
                      is3D: true,
                    }}
                    rootProps={{ 'data-testid': '2' }}
                  />

                  </Col>

                  <Col size="md-6">

                    <Chart
                      width={'500px'}
                      height={'300px'}
                      chartType="PieChart"
                      data={[
                        ['Expense', 'Amount'],
                        ['Advertising', 50],
                        ['Insurance', 350],
                        ['Payroll', 10500],
                        ['Rent', 1500],
                        ['Utilities', 900],
                      ]}
                      options={{
                        title: 'May Expense Report', 
                        is3D: true,
                      }}
                      rootProps={{ 'data-testid': '2' }}
                    />

                </Col>
              </Row>

              </Quarter>



              {this.state.expenses.length ? (
                <List>
                  {this.state.expenses.map(expense => (
                    <Expense
                      key={expense._id}
                      month={expense.month}
                      year={expense.year}
                      rentMortgage={expense.rentMortgage}
                      insurance={expense.insurance}
                      payroll={expense.payroll}
                      advertising={expense.advertising}
                      utilities={expense.utilities}
                      Button={() => (
                        <button
                          onClick={() => this.handleExpenseDelete(expense._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <div>
                  <br></br>
                  <h2 className="text-center">Visual Insights</h2>
                </div>
                )}
            </Card>

          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default BusinessAnalysis;


