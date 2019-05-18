import React, { Component } from "react";
import CryptoComapre from 'cryptocompare';

export const AppContext = React.createContext();

class AppProvider extends Component {

  constructor (props) {
    super(props);
    this.state = {
      page: "Dashboard",
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites
    }
  }

  componentDidMount = () =>{
    this.fetchCoins();
  }

  fetchCoins = async () => {
    let coinList = (await CryptoComapre.coinList()).Data;
    this.setState({coinList: coinList});
  }

  confirmFavorites = () => {
    this.setState({page: 'Dashboard', firstVisit: false});
    localStorage.setItem("cryptoDash", JSON.stringify({firstVisit: false}));
  }

  setPage = page => this.setState({ page: page });

  savedSettings = () => {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if (!cryptoDashData) {
      return {
        page: 'Settings',
        firstVisit: true
      }
    }
    return {};
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
