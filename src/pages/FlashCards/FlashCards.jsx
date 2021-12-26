import React from "react";
import InitialDeck from "../../InitialData/InitialDeck.js";
import Card from "../../components/Card/Card.jsx";

class FlashCards extends React.Component {
  state = {
    data: [],
    currentCard: "",
    flashcard: 0,
  };

  getData = () => {
    this.setState({ data: InitialDeck });
    // console.log("hey");
  };

  firstCard = () => {
    this.setState({ currentCard: data[0].front });
  }

  // UpdateLocalStorage = () => {
  //   window.localStorage.setItem('deck', JSON.stringify(InitialDeck));
  // }

  // loadFromLocalStorage = () => {
  //   return JSON.parse(window.localStorage.getItem('deck'));
  // }

  componentDidMount = () => {
    this.getData();
    this.firstCard();
    console.log("data", this.state.currentCard);
  };

  render = () => {
    return (
      <div>
        {/* <Card front={this.state.data[0].front} /> */}
      </div>
    );
  };
}

export default FlashCards;
