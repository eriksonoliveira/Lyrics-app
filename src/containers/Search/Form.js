import React, { Component } from "react";
import { Consumer } from "../../context";
import Transition from "react-transition-group/Transition";

import "./Form.css";

export class Form extends Component {
  render() {
    return (
      <Consumer>
        {({ dispatch, list_active, focused, trackTitle, ...context }) => {
          return (
            <Transition in={focused} timeout={300}>
              {status => (
                <form
                  className={`search-form animate-${status}`}
                  onSubmit={e => this.props.findTrack(dispatch, list_active, e)}
                >
                  <div className="search-form-input-wrap">
                    <input
                      type="text"
                      className="search-form-input"
                      placeholder="Search music..."
                      name="trackTitle"
                      required="required"
                      value={trackTitle}
                      onChange={e =>
                        this.props.handleEvent({
                          type: "CHANGE",
                          param: dispatch,
                          event: e
                        })
                      }
                      onFocus={() =>
                        this.props.handleEvent({
                          type: "FOCUS",
                          param: dispatch
                        })
                      }
                    />
                    <button
                      className="search-form-reset"
                      type="reset"
                      onClick={() =>
                        this.props.handleEvent({
                          type: "RESET",
                          param: dispatch
                        })
                      }
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
              )}
            </Transition>
          );
        }}
      </Consumer>
    );
  }
}

export default Form;
