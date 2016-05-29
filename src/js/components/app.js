import React,{ Component } from 'react';
import ForkBanner from './fork-banner';

export default class App extends Component {
  render() {
    return (
      <div>
        <ForkBanner url="https://github.com/AceDZN/ReduxGulpStarterKit" />
        Hello World
      </div>
    );
  }
}
