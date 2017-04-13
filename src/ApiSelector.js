import React, { Component } from 'react';

class ApiSelector extends Component {

  constructor(props) {
    super(props);
    this.apiSelected = this.apiSelected.bind(this);
  }

  componentDidMount() {
    // An element must contain a `nav` attribute to be placed inside the console's nav panel.
    this.navContainer.setAttribute('nav', true);
    this.listbox.addEventListener('iron-select', this.apiSelected);
  }

  apiSelected(e) {
    var src = e.detail.item.dataset.src;
    this.props.onSrcUpdate(src);
  }

  render() {
    return (
      <div className="api-console-nav" ref={(div) => { this.navContainer = div; }}>
        <paper-dropdown-menu no-label-float label="Select API to load" class="api-selector">
          <paper-listbox class="dropdown-content" ref={(listbox) => { this.listbox = listbox; }}>
            <paper-item data-src="https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/98196c04-981c-4702-90bd-c8a2f697d895/public/apis/13093617/versions/179482/files/root">Meetup</paper-item>
            <paper-item data-src="https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/98196c04-981c-4702-90bd-c8a2f697d895/public/apis/13084695/versions/179318/files/root">Github</paper-item>
            <paper-item data-src="https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/98196c04-981c-4702-90bd-c8a2f697d895/public/apis/13081245/versions/179275/files/root">Slack</paper-item>
            <paper-item data-src="https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/98196c04-981c-4702-90bd-c8a2f697d895/public/apis/13079832/versions/179264/files/root">GlassDoor</paper-item>
            <paper-item data-src="https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/98196c04-981c-4702-90bd-c8a2f697d895/public/apis/13079412/versions/179261/files/root">LinkedIn</paper-item>
            <paper-item data-src="https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/98196c04-981c-4702-90bd-c8a2f697d895/public/apis/12979886/versions/178307/files/root">Factory Floor</paper-item>
            <paper-item data-src="https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/98196c04-981c-4702-90bd-c8a2f697d895/public/apis/12979720/versions/178301/files/root">Image Recognition API</paper-item>
            <paper-item data-src="https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/98196c04-981c-4702-90bd-c8a2f697d895/public/apis/12953201/versions/178171/files/root">Slack System API</paper-item>
            <paper-item data-src="https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/98196c04-981c-4702-90bd-c8a2f697d895/public/apis/12946235/versions/177988/files/root">Work Market API</paper-item>
            <paper-item data-src="https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/98196c04-981c-4702-90bd-c8a2f697d895/public/apis/12946224/versions/177985/files/root">Robot Telepresence</paper-item>
            <paper-item data-src="https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/98196c04-981c-4702-90bd-c8a2f697d895/public/apis/12946219/versions/177984/files/root">CandidateRanking</paper-item>
            <paper-item data-src="https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/98196c04-981c-4702-90bd-c8a2f697d895/public/apis/12946186/versions/177982/files/root">OCF Temperature</paper-item>
            <paper-item data-src="https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/98196c04-981c-4702-90bd-c8a2f697d895/public/apis/12946182/versions/177981/files/root">OCF Button</paper-item>
            <paper-item data-src="https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/98196c04-981c-4702-90bd-c8a2f697d895/public/apis/12946177/versions/177980/files/root">OCF Binary Switch</paper-item>
            <paper-item data-src="https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/98196c04-981c-4702-90bd-c8a2f697d895/public/apis/12946170/versions/177979/files/root">Google Prediction API</paper-item>
            <paper-item data-src="https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/98196c04-981c-4702-90bd-c8a2f697d895/public/apis/12946162/versions/177978/files/root">CandidateEnrichment</paper-item>
            <paper-item data-src="https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/98196c04-981c-4702-90bd-c8a2f697d895/public/apis/12946155/versions/177977/files/root">Candidates</paper-item>
            <paper-item data-src="https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/98196c04-981c-4702-90bd-c8a2f697d895/public/apis/12946148/versions/177976/files/root">Candidates360</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
    );
  }
}

export default ApiSelector;
