import React, { Component } from "react";
import { Chart } from "react-google-charts";


import axios from "axios";



class Report extends Component {
    state = {
        expenseData:[ ["Expense", "Amount"],
        ["advertising", 0],
        ["insurance", 0],
        ["payroll", 0],
        ["rentMortgage", 0],
        ["utilities", 0]]
    }


componentDidMount() {
    axios.get("/api/expense").then(res => {
        res = res.data;
        console.log(res[0].payroll);
        this.setState({
            expenseData : [
                ["Expense", "Amount"],
                ["advertising", res[0].advertising],
                ["insurance", res[0].insurance],
                ["payroll", res[0].payroll],
                ["rentMortgage", res[0].rentMortgage],
                ["utilities", res[0].utilities]
            ]
        });
    })
}

    render() {
        return (
            <div className="chart-container">

                <Chart
                    nameClass="currentInsight"
                    chartType="PieChart"
                    data={this.state.expenseData}
                    width={'500px'}
                    height={'300px'}

                    options={{
                        title: 'May Expense Report', 
                        is3D: true,
                      }}

                    rootProps={{ 'data-testid': '2' }}

                />
            </div>
        );
    }
}


export default Report;

// expenseData : [
//     ["Expense", "Amount"],
//     ["advertising", res[0].advertising],
//     ["insurance", res[0].insurance],
//     ["payroll", res[0].payroll],
//     ["rentMortgage", res[0].rentMortgage],
//     ["utilities", res[0].utilities]
// ]