import React, { Component } from "react";

import Cards from "./components/Cards/Crads";
import Chart from "./components/Charts/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./api";

import styles from "./App.module.css";

import coronaImg from "./images/image.png";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });

    console.log(fetchedData);
    //console.log(country);
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImg} />;
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
