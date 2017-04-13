import React, { Component } from 'react';

class LoadingMule extends Component {

  render() {
    return (
      <div className="loader-container" id="logo-mule-wrapper">
        <svg version="1.1" x="0px" y="0px" width="100px" height="150px" viewBox="0 -4 15 25">
          <g id="logo-mule">
              <g id="head">
                <path transform="scale(.7) translate(-1.3,-4)" fill="#00A2DF" d="M17.249712,14.5563059l1.8653812,6.9614553c-1.877718,0.8028088-3.9438229,1.2497158-6.1150904,1.2497158s-4.2373724-0.446907-6.1150913-1.2497158l1.8653812-6.9614553c-2.5400882-1.4698143-4.2502899-4.2144346-4.2502899-7.3601689c0-1.4318066,0.3555708-2.7799783,0.9808421-3.963614l5.7489209,8.2103434h3.540473l5.7489204-8.2103434c0.6252728,1.1836357,0.9808426,2.5318074,0.9808426,3.963614C21.5000019,10.3418713,19.7898006,13.0864916,17.249712,14.5563059z"/>
              </g>
          </g>
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{stopColor: 'rgb(0,0,0)', stopOpacity: '.5'}}/>
              <stop offset="100%" style={{stopColor: 'rgb(0,0,0)', stopOpacity: '0'}}/>
            </radialGradient>
          </defs>
          <ellipse id="shadow" cx="8" cy="18" rx="7" ry="2" fill="url(#grad1)"/>
        </svg>
      </div>
    );
  }
}
export default LoadingMule;
