import React, { Component } from 'react';

class RamlParser extends Component {

  constructor(props) {
    super(props);
    this.parserDataReady = this.parserDataReady.bind(this);
    this.parserError = this.parserError.bind(this);
  }

  componentDidMount() {
    this.ramlParser.addEventListener('api-parse-ready', this.parserDataReady);
    this.ramlParser.addEventListener('error', this.parserError);
  }

  componentDidUpdate(prevProps) {
    if (prevProps && 'apiSrc' in prevProps && prevProps.apiSrc === this.props.apiSrc) {
      return;
    }
    this.ramlParser.loadApi(this.props.apiSrc);
  }

  parserDataReady(e) {
    this.props.onData(e.detail.json.specification);
  }

  parserError() {
    var message = 'Unable to parse RAML data. Make user you are authorized to use the resource';
    message += ' and your internet connection is working properly.';
    this.props.onError(message);
  }

  render() {
    return (<raml-js-parser json ref={(parser) => { this.ramlParser = parser; }}></raml-js-parser>);
  }
}

export default RamlParser;
