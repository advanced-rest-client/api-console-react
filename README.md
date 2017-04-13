# The API console in React

Mulesoft's API console comes with many flavors. This repo contains an API console that has been created as a React application.

This repo shows how to use Polymer powered web components in React application.

## Usage

Clone the repo:
```
git clone advanced-rest-client/api-console-react
cd api-console-react
```

Install dependencies

```
npm install && bower install
```

`npm` istanlls dependencies for React and bower for the console. This project is configured to put bower components in `public/bower_components`.

Run:
```
npm run
```

## How it works

On a technical level, there are incapabilities between web components and React. Data exchange between them is not possible by passing state via component's attributes. Therefore different approach is required.

Easiest way is to create a wrapper for the web component and set properties or call API functions via this wrapper.

As an example we will use the **RamlParser** component.

The `<raml-js-parser>` element will react on CustomEvent or on direct call of the function defined in element's API.
Because react prefer more direct approach the `RamlParser` components will call a function directly on the element.

The body of the component is quite straightforward:

```javascript
render() {
  return (<raml-js-parser json ref={(parser) => { this.ramlParser = parser; }}></raml-js-parser>);
}
```

Because result of the work the `<raml-js-parser>` element presents by fireing a custom event we have to create a handler for it:

```javascript
constructor(props) {
  super(props);
  this.parserDataReady = this.parserDataReady.bind(this);
  this.parserError = this.parserError.bind(this);
}
```

And attach handlers to the element:

```javascript
componentDidMount() {
  this.ramlParser.addEventListener('api-parse-ready', this.parserDataReady);
  this.ramlParser.addEventListener('error', this.parserError);
}
```

Now, the `RamlParser` component exposes a property `apiSrc` which when change should be passed to the `<raml-js-parser>'s` function `loadApi`. Other methods might be more elegant than this.

```javascript
componentDidUpdate(prevProps) {
  if (prevProps && 'apiSrc' in prevProps && prevProps.apiSrc === this.props.apiSrc) {
    return;
  }
  this.ramlParser.loadApi(this.props.apiSrc);
}
```

Finally, handler for the `api-parse-ready` event calls the `onData` function that is passed to the component via attribute.

```javascript
parserDataReady(e) {
  this.props.onData(e.detail.json.specification);
}
```

Application then passes the data to enhancer that have similar structure and eventually to the console (App.js):

```javascript
this.refs.apiConsole.raml = json;
```

Console is ready.
