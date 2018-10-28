import React, { Component } from "react";
import { TrackConsumer } from "../../TrackContext";
import { AppConsumer } from "../../AppContext";
import Transition from "react-transition-group/Transition";

import "./Form.css";

export class Form extends Component {
  render() {
    return (
      <TrackConsumer>
        {trackContext => (
          <AppConsumer>
            {appContext => (
              <Transition in={appContext.focused} timeout={300}>
                {status => (
                  <form
                    className={`search-form animate-${status}`}
                    onSubmit={e =>
                      this.props.findTrack(
                        trackContext.dispatch,
                        trackContext.list_active,
                        e
                      )
                    }
                  >
                    <div className="search-form-input-wrap">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Search music..."
                        name="trackTitle"
                        required="required"
                        value={trackContext.trackTitle}
                        onChange={e =>
                          trackContext.dispatch({
                            type: "CHANGE_TRACK",
                            payload: e.target.value
                          })
                        }
                        onFocus={() =>
                          appContext.dispatch({ type: "INPUT_FOCUS" })
                        }
                      />
                      <button
                        className="search-form-reset"
                        type="reset"
                        onClick={() =>
                          trackContext.dispatch({ type: "RESET_INPUT" })
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
            )}
          </AppConsumer>
        )}
      </TrackConsumer>
    );
  }
}

export default Form;
