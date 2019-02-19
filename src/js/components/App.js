import React from "react";

import Calendar from "./container/Calendar.jsx";

import style from "../App.css";

class App extends React.Component {
  render() {
    return (
      <div className={style.App}>
        <header>
          <div id="logo">
            <span className={style.logo}>date_range</span>
            <span>
              react<b>calendar</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App;