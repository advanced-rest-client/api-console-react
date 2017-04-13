import React, { Component } from 'react';

class RamlEnhancer extends Component {
  constructor(props) {
    super(props);
    this.enhancerDataReady = this.enhancerDataReady.bind(this);
    this.parserError = this.parserError.bind(this);
  }
  
  componentDidMount() {
    this.ramlEnhancer.addEventListener('raml-json-enhance-ready', this.enhancerDataReady);
    this.ramlEnhancer.addEventListener('error', this.parserError);
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps && 'raml' in prevProps && prevProps.raml === this.props.raml) {
      return;
    }
    // For some reason line below doesn't work, needed to use private function/
    // this.ramlEnhancer.raml = this.props.raml;
    this.ramlEnhancer._normalizeRamlJson(this.props.raml);
  }
  
  enhancerDataReady(e) {
    this.props.onData(e.detail.json);
    this.ramlEnhancer.raml = undefined;
  }
  
  parserError() {
    var message = 'Received data are unknown format.';
    this.props.onError(message);
  }
  
  render() {
    return (<raml-json-enhance ref={(enhancer) => { this.ramlEnhancer = enhancer; }}></raml-json-enhance>);
  }
}
export default RamlEnhancer;