import React, { Component } from "react";
import { Consumer } from "../../context";

export class Form extends Component {
  render() {
    return (
      <Consumer>
        {({ dispatch, list_active, focused, ...context }) => {
          return (
            <form
              onSubmit={e => this.props.findTrack(dispatch, list_active, e)}
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Song title..."
                  name="trackTitle"
                  value={this.props.trackTitle}
                  onChange={e =>
                    this.props.handleEvent({ type: "CHANGE", param: e })
                  }
                  onFocus={() =>
                    this.props.handleEvent({ type: "FOCUS", param: dispatch })
                  }
                />
                <button
                  type="reset"
                  onClick={() => this.props.handleEvent({ type: "RESET" })}
                >
                  &times;
                </button>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block mb-5"
              >
                Get track lyrics
              </button>
            </form>
          );
        }}
      </Consumer>
    );
  }
}

export default Form;
