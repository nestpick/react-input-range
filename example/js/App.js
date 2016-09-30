import React from 'react';
import InputRange from '../../build/react-input-range';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 5,
      value2: null,
      value3: 10,
      value4: {
        min: 530,
        max: 660,
      },
      value5: {
        min: null,
        max: null,
      },
      rangeStart: 500,
      rangeEnd: 1500,
    };
  }

  handleValueChange(component, value) {
    this.setState({
      value: value || 0,
    });
  }

  handleValue2Change(component, value) {
    this.setState({
      value2: value || 0,
    });
  }

  handleValue3Change(component, value) {
    this.setState({
      value3: value || 0,
    });
  }

  handleValue4Change(component, values) {
    this.setState({
      value4: values,
    });
  }

  handleValue5Change(component, values) {
    this.setState({
      value5: values,
    });
  }

  handleChangeComplete(component, value) {
    console.log(value);
  }

  formatLabel(labelValue) {
    return labelValue.toFixed(2);
  }

  changeRange() {
    this.setState({
      rangeEnd: Math.round(600 + Math.random() * 100),
    });
  }

  render() {
    const defaultValue = 2;
    const defaultValue2 = {
      min: 2,
      max: 8,
    };


    // <InputRange
    //   maxValue={20}
    //   minValue={0}
    //   value={this.state.value}
    //   onChange={this.handleValueChange.bind(this)}
    //   onChangeComplete={this.handleChangeComplete.bind(this)}
    // />

    // <InputRange
    //   maxValue={10}
    //   minValue={-10}
    //   formatLabel={this.formatLabel.bind(this)}
    //   value={this.state.value2}
    //   defaultValue={defaultValue}
    //   onChange={this.handleValue2Change.bind(this)}
    // />
    //
    // <InputRange
    //   maxValue={10}
    //   minValue={-10}
    //   value={this.state.value5}
    //   defaultValue={defaultValue2}
    //   onChange={this.handleValue5Change.bind(this)}
    // />
    //

    return (
      <form className="form">

        <InputRange
          maxValue={this.state.rangeEnd}
          minValue={this.state.rangeStart}
          labelPrefix="prefix "
          labelSuffix=" suffix"
          labelOffsetLeft={150}
          value={this.state.value4}
          onChange={this.handleValue4Change.bind(this)}
          onChangeComplete={this.handleChangeComplete.bind(this)}
        />

        <div>
          <button type="button" onClick={() => this.changeRange()}>Test range change</button>
        </div>

      </form>
    );
  }
}

export default App;
