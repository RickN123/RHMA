import React from "react";
import "./style.css";


function Form({ p,q, r, s, t,u,v, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Business Expenses</strong>
        </label>
        <input
          className="form-control"
          id="month"
          type="text"
          value={p}
          placeholder="Month"
          name="p"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="rent"
          type="text"
          value={q}
          placeholder="Rent/Lease/Mortgage"
          name="q"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="tax"
          type="text"
          value={r}
          placeholder="Taxes"
          name="r"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="payroll"
          type="text"
          value={s}
          placeholder="Payroll"
          name="s"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="advertising"
          type="text"
          value={t}
          placeholder="Advertising"
          name="t"
          onChange={handleInputChange}
          required
          />
          <input
            className="form-control"
            id="utilities"
            type="text"
            value={u}
            placeholder="Utilities"
            name="u"
            onChange={handleInputChange}
            required
        />
        <input
            className="form-control"
            id="insurance"
            type="text"
            value={v}
            placeholder="insurance"
            name="v"
            onChange={handleInputChange}
            required
        />
      </div>
      
      <div className="expenseButtons">

        <br></br>

      <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-success"
          href="/BusinessAnalysis"
        >
          Submit Expenses
        </button>

        &nbsp;&nbsp;

        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-primary"
        >
          Review Your Quarterly Expenses
        </button>
        
      </div>
    </form>

    
  );
}

export default Form;
