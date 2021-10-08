import React from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import EmojiContainer from "./components/EmojiContainer";

interface Props {}

interface State {
  searchEmoji: string;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchEmoji: "",
    };
  }

  handleChange = (searchEmoji: string) => {
    this.setState({
      searchEmoji,
    });
  };

  render() {
    const { searchEmoji } = this.state;
    return (
      <div className="App">
        <SearchInput onChange={this.handleChange} />
        <EmojiContainer searchEmoji={searchEmoji} />
      </div>
    );
  }
}

export default App;