import React, { Component } from "react";
import { Consumer } from "../../context";

import "./Form.css";

export class Form extends Component {
  render() {
    return (
      <Consumer>
        {({ dispatch, list_active, focused, ...context }) => {
          return (
            <form
              className="search-form"
              onSubmit={e => this.props.findTrack(dispatch, list_active, e)}
            >
              <div className="search-form-input-wrap">
                <input
                  type="text"
                  className="search-form-input"
                  placeholder="Song title..."
                  name="trackTitle"
                  required="required"
                  value={this.props.trackTitle}
                  onChange={e =>
                    this.props.handleEvent({ type: "CHANGE", param: e })
                  }
                  onFocus={() =>
                    this.props.handleEvent({ type: "FOCUS", param: dispatch })
                  }
                />
                <button
                  className="search-form-reset"
                  type="reset"
                  onClick={() => this.props.handleEvent({ type: "RESET" })}
                />
              </div>
              <button type="submit" className="search-form-submit btn">
                <img
                  className="search-form-submit-icon"
                  src={require("./Images/search-icon.png")}
                  alt="Search"
                />
              </button>
            </form>
          );
        }}
      </Consumer>
    );
  }
}

export default Form;
