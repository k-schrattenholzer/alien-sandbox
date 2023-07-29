import React from 'react'

export default class App extends React.Component {

  state = {
    counter: 0,
    fontSize: 30,
    color: 'pink',
    keyword: ''
    }

   handlePlusClick = () => {
      this.setState({counter: this.state.counter + 1})
   } 

   handleMinusClick = () => {
      this.setState({counter: this.state.counter - 1})
   } 

   handleFontUpClick = () => {
      this.setState({fontSize: this.state.fontSize + 5})
   } 

   handleFontDownClick = () => {
      this.setState({fontSize: this.state.fontSize - 5})
   } 

   handleColorClick = () => {
      this.setState({color: '#85CEAA'})
   } 
   handleChange = (e) => {
    this.setState({keyword: e.target.value})
   }
  render() {

    return (
      <div 
      className='counter'
      style = {{
        backgroundColor: this.state.color
      }}>
                <h2>Counter</h2>
                <p style={{
                  fontSize: this.state.fontSize,
              }}
               >Clicked this many times: {this.state.counter}</p>
                <button onClick={this.handlePlusClick}>plus one</button>
                <button onClick={this.handleMinusClick}>minus one</button>
                <button onClick={this.handleFontUpClick}>make font larger</button>
                <button onClick={this.handleFontDownClick}>make font smaller</button>
                <button onClick={this.handleColorClick}>change color</button>
                <hr />
                <p>Showing All {this.state.keyword}</p>
                <select onChange={this.handleChange}>
                  <option value="Option1">Option1</option>
                  <option value="Option2">Option2</option>
                  <option value="Option3">Option3</option>
                  <option value="Option4">Option4</option>
                </select>
            </div>
        )
  }
}
