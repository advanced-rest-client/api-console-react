import React, { Component } from 'react';
import './App.css';
import RamlParser from './RamlParser.js'
import ApiSelector from './ApiSelector.js';
import RamlEnhancer from './RamlEnhancer.js'
import ErrorMule from './ErrorMule.js';
import LoadingMule from './LoadingMule.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: undefined,
      apiSrc: undefined,
      rawJson: undefined,
      loading: false,
      error: false,
      errorMessage: ''
    };
    
    this.srcUpdated = this.srcUpdated.bind(this);
    this.setRawJsonData = this.setRawJsonData.bind(this);
    this.onProcessError = this.onProcessError.bind(this);
    this.setJsonData = this.setJsonData.bind(this);
  }
  
  srcUpdated(src) {
    this.setState({
      loading: true,
      error: false,
      apiSrc: src
    });
    this.refs.apiConsole.raml = undefined;
  }
  
  setRawJsonData(json) {
    this.setState({
      rawJson: json
    });
  }
  
  setJsonData(json) {
    this.setState({
      json: json,
      loading: false,
      error: false
    });
    this.refs.apiConsole.raml = json;
  }
  
  onProcessError(message) {
    this.setState({
      loading: false,
      error: true,
      errorMessage: message
    });
    console.error(message);
  }
  
  render() {
    return (
      <div>
        <div className="app layout horizontal start">
          <section className="api-console-container layout horizontal flex self-stretch">
            { this.state.loading ? <LoadingMule></LoadingMule> : null }
            { this.state.errorMessage ? <ErrorMule errorMessage={this.state.errorMessage}></ErrorMule> : null }
            <api-console ref="apiConsole">
              <ApiSelector onSrcUpdate={this.srcUpdated}></ApiSelector>
            </api-console>
          </section>
        </div>
        <RamlParser apiSrc={this.state.apiSrc} onData={this.setRawJsonData} onError={this.onProcessError}></RamlParser>
        <RamlEnhancer raml={this.state.rawJson}  onData={this.setJsonData} onError={this.onProcessError}></RamlEnhancer>
      </div>
    );
  }
}

export default App;
