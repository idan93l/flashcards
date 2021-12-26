import React from "react";
import InitialDeck from "../../InitialData/InitialDeck.js";

class FlashCards extends React.Component {
  state = {
    data: [],
    flashcard: 0
  }

  getData = () => {
    this.setState({data: InitialDeck})
  }

  componentDidMount = () => {
    this.getData();
  }

  render = () => {
    return (
      <div>hello</div>
    )
  }
}

export default FlashCards;