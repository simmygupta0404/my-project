import React, { Component } from 'react';
import cx from "classnames";
import logo from '../src/CommonStyles/Icons/bluestacks.svg';
import './App.scss';
import DataTable from './DataTable/DataTable';
import { vehicleImageUploadHeader, tableCofig } from './AppConfig';
import PriceModal from './PriceModal/PriceModal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedDashboard: 0,
      showPriceModal: false,
      rowData: null,
      startDate: new Date(),
      tableCofig: tableCofig,
      pastTableCofig: [],
      liveTableConfig: [],
      upcomingTableConfig: [],
      showCalender: false
    };
  }


  componentDidMount() {
    this.getTableConfig();
  }

  getTableConfig = () => {
    let tableCofig = this.state.tableCofig
    let pTableCofig = [];
    let lTableConfig = [];
    let uTableConfig = [];
    tableCofig.data.forEach((data, index) => {
      if (new Date(data.date) > new Date()) {
        uTableConfig.push(data);
      }
      else if (new Date(data.date) < new Date()) {
        pTableCofig.push(data);
      }
      else {
        lTableConfig.push(data);
      }
    })
    this.setState({
      pastTableCofig: pTableCofig,
      upcomingTableConfig: uTableConfig,
      liveTableConfig: lTableConfig
    })
  }


  onUpcoming = () => {
    this.setState({
      selectedDashboard: 0,
      showCalender:false
    })
  }

  onLive = () => {
    this.setState({
      selectedDashboard: 1,
      showCalender:false
    })
  }

  onPast = () => {
    this.setState({
      selectedDashboard: 2,
      showCalender:false
    })
  }
  onViewClick = (rowData) => {

    this.setState({
      rowData: rowData,
      showPriceModal: true
    }, () => { this.refs.priceModal.openModal(); })
  }

  onScheduleClick = (rowData) => {
    this.setState({
      rowData: rowData,
      showCalender: true
    })

  }

  handleChange = (date) => {
    let key = this.state.rowData.key
    let tableCofig = this.state.tableCofig
    tableCofig.data.forEach((data, idx)=>{
      if(data.key === key){
        data.date = date
      }
    })
    this.setState({
      tableCofig: tableCofig,
      showCalender:false
    }, () => {this.getTableConfig()})
  }



  render() {
    let finalTableCofig;
    if (this.state.selectedDashboard === 0) {
      finalTableCofig = this.state.upcomingTableConfig
    }
    else if (this.state.selectedDashboard === 1) {
      finalTableCofig = this.state.liveTableConfig
    }
    if (this.state.selectedDashboard === 2) {
      finalTableCofig = this.state.pastTableCofig
    }
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-item">
            <img src={logo} className="App-header-logo" alt="logo" />
            <div className="App-title">
              <div className="App-title-one">BlueStack</div>
              <div className="App-title-two">Play Bigger</div>
            </div>
          </div>
        </header>
        <div className="App-heading-wrapper">
          <div className="App-heading">Manage Campaigns</div>
          { this.state.showCalender &&
            <div className="App-calender">
            <span>Schedule Campaign Date: </span>
            <span>
              <DatePicker
                selected={new Date(this.state.rowData.date)}
                onSelect={this.handleChange}
                startOpen={true}
              />
            </span>
          </div>
          }
          
        </div>

        <div className="App-dashboards">
          <div onClick={this.onUpcoming} className={cx("App-dashboards-upcoming", { "selected-dashboard": this.state.selectedDashboard === 0 })}>Upcoming Campaigns</div>
          <div onClick={this.onLive} className={cx("App-dashboards-live", { "selected-dashboard": this.state.selectedDashboard === 1 })}>Live Campaigns</div>
          <div onClick={this.onPast} className={cx("App-dashboards-past", { "selected-dashboard": this.state.selectedDashboard === 2 })}>Past Campaigns</div>
        </div>

        <div className="App-content">
          <DataTable
            ref={"dataTableVehicle"}
            // DataTable props
            headers={vehicleImageUploadHeader}
            endColumn={5}
            data={finalTableCofig}
            onViewClick={this.onViewClick}
            onScheduleClick={this.onScheduleClick}
            showCalender={this.state.showCalender ? this.showCalender : false}
          />
        </div>


        {this.state.showPriceModal &&
          <PriceModal
            ref="priceModal"
            rowData={this.state.rowData}
          />
        }




      </div>
    );
  }
}

export default App;
