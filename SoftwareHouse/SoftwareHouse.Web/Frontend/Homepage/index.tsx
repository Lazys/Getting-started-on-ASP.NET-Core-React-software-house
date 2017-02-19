import * as ReactDOM from 'react-dom';
import * as React from 'react';

import Demo from './Components/Demo/Demo';

ReactDOM.render(
    <Demo blogName={ 'PoznajProgramowanie.pl' } />, 
    document.getElementById('react-homepage-root')
);

 declare var module: any;
 if (module.hot) {
     module.hot.accept();
 }
