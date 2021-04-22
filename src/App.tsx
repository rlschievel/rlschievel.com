// import logo from './logo.svg';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import DropdownButton from './Components/Dropdown/DropdownButton';
import MenuItem from './Components/Dropdown/MenuItem';
import MerakiAPI from './Modules/MerakiAPI/MerakiAPI';
import { ResultsTable } from './Components/ResultsTable/ResultsTable';
import './content.css';

interface IProps{
  onClick?:Function,
}

interface IState{
  currentView:React.ReactElement,
}

class App extends React.Component<IProps, IState> {
  api:MerakiAPI;
  constructor(props:IProps){
    super(props)
    this.api = new MerakiAPI();
    this.state = {
      currentView: (
        <div>
          <p className="content">Welcome to rlschievel.com!</p>
          <ResultsTable></ResultsTable>
        </div>
      ),
    };
  }

  render () {
    return (
      <div>
        <NavBar>
          <DropdownButton name="Org-Wide">
            <MenuItem onClick={() => this.api.getDeviceStatusOrgWide()}>
              Device Status
            </MenuItem>
            <MenuItem onClick={() => this.doStuff()}>Print results of getDeviceStatusOrgWide</MenuItem>
            <MenuItem>MenuItem #3</MenuItem>
          </DropdownButton>
        </NavBar>
        {this.state.currentView}
      </div>
    );
  }

  async doStuff(){
    this.setState(
      {currentView: (<p className="content">{JSON.stringify(await this.api.getDeviceStatusOrgWide())}</p>)},
    )
    console.log(JSON.stringify(await this.api.getDeviceStatusOrgWide()));
  }
}

export default App;