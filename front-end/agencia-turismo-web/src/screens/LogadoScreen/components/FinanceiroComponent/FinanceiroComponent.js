import React, { useEffect, Component } from "react";
import PropTypes, { number } from "prop-types";
import styles from "./FinanceiroComponent.module.css";
import CanvasJSReact from "./assets/js/canvasjs.react";
import Backend from "../../../../service/backend";
// var CanvasJSReact = require('./assets/js/canvasjs.react');
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class FinanceiroComponent extends Component {
  constructor(props) {
    super(props);
    const request = new Backend();
    var list = [];
    request.get("/cadastro-financeiro/chart").then(res => {
      var obj = res.data;
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          list.push({
            label: key,
            y: obj[key]
          });
        }
      }
      list = this.sort(list);
      this.setState({
        title: {
          text: "Gráfico"
        },
        data: [
          {
            type: "column",
            dataPoints: list
          }
        ]
      });
    });
  }
  sort(inputArr) {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
      let key = inputArr[i];
      let j = i - 1;
      while (j >= 0 && this.isLower(key.label, inputArr[j].label)) {
        inputArr[j + 1] = inputArr[j];
        j = j - 1;
      }
      inputArr[j + 1] = key;
    }
    return inputArr;
  }

  isLower(date1, date2) {
    // ;
    if (Number(date1.substring(3)) < Number(date2.substring(3))) {
      return true;
    }
    if (Number(date1.substring(0, 2)) < Number(date2.substring(0, 2))) {
      return true;
    }
    return false;
  }

  insertionSort(inputArr) {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
      let key = inputArr[i];
      let j = i - 1;
      while (j >= 0 && inputArr[j].y > key.y) {
        inputArr[j + 1] = inputArr[j];
        j = j - 1;
      }
      inputArr[j + 1] = key;
    }
    return inputArr;
  }
  render() {
    const options = {
      title: {
        text: "Basic Column Chart in React"
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "Apple", y: 10 },
            { label: "Orange", y: 15 },
            { label: "Banana", y: 25 },
            { label: "Mango", y: 30 },
            { label: "Grape", y: 28 }
          ]
        }
      ]
    };

    return (
      <div>
        {this.state && (
          <CanvasJSChart
            options={this.state}
            /* onRef = {ref => this.chart = ref} */
          />
        )}
      </div>
    );
  }
}

FinanceiroComponent.propTypes = {};

FinanceiroComponent.defaultProps = {};

export default FinanceiroComponent;
