import React, { Component } from "react";

import Cards from "./components/Cards/Crads";
import Chart from "./components/Charts/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./api";

import styles from "./App.module.css";

class App extends Component {
  async componentDidMount() {
    const data = await fetchData();

    console.log(data);
  }
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
