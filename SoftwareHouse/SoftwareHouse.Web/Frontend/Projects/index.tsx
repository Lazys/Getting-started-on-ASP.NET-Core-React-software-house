import * as ReactDOM from 'react-dom';
import * as React from 'react';

import ProjectsList from './Components/ProjectsList/ProjectsList';

ReactDOM.render(
    <ProjectsList />, 
    document.getElementById('react-root')
);

 declare var module: any;
 if (module.hot) {
     module.hot.accept();
 }
