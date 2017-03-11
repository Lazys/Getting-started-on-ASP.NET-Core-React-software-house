import * as ReactDOM from 'react-dom';
import * as React from 'react';

import '../Shared/Styles/helpers.scss';

import ProjectsListContainer from './Components/ProjectsListContainer/ProjectsListContainer';

ReactDOM.render(
    <ProjectsListContainer />, 
    document.getElementById('react-root')
);

 declare var module: any;
 if (module.hot) {
     module.hot.accept();
 }
