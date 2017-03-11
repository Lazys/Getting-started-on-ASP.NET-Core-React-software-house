webpackJsonp([1],{

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
var React = __webpack_require__(15);
var ProjectsList_1 = __webpack_require__(197);
var EmptyListWarning_1 = __webpack_require__(195);
var ProjectsListContainer = function (_super) {
    __extends(ProjectsListContainer, _super);
    function ProjectsListContainer() {
        return _super.call(this) || this;
    }
    ProjectsListContainer.prototype.componentWillMount = function () {
        this.setState(function (state, props) {
            state.projects = [];
        });
    };
    ProjectsListContainer.prototype.render = function () {
        var hasProjects = this.state.projects.length > 0;
        return hasProjects ? React.createElement(ProjectsList_1["default"], { projects: this.state.projects }) : React.createElement(EmptyListWarning_1["default"], null);
    };
    return ProjectsListContainer;
}(React.Component);
exports["default"] = ProjectsListContainer;

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
var React = __webpack_require__(15);
__webpack_require__(210);
var Button_1 = __webpack_require__(56);
var EmptyListWarning = function (_super) {
    __extends(EmptyListWarning, _super);
    function EmptyListWarning() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paths = {
            createProjectUrl: '/Projects/Add',
            createProjectLogo: ''
        };
        return _this;
    }
    EmptyListWarning.prototype.render = function () {
        return React.createElement("section", { className: 'EmptyListWarning' }, React.createElement("img", { className: 'center-block', src: '/images/List.png' }), React.createElement("section", { className: 'EmptyListWarning-textContainer' }, React.createElement("p", { className: 'text-center' }, "It looks like you don't have any projects created."), React.createElement("p", { className: 'text-center' }, React.createElement(Button_1["default"], { link: true, href: this.paths.createProjectUrl, extraClassNames: ['btn-success'] }, "Create first project"))));
    };
    return EmptyListWarning;
}(React.Component);
exports["default"] = EmptyListWarning;

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
var React = __webpack_require__(15);
var moment = __webpack_require__(0);
__webpack_require__(211);
var ProjectsListItem = function (_super) {
    __extends(ProjectsListItem, _super);
    function ProjectsListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectsListItem.prototype.render = function () {
        return React.createElement("section", { className: 'ProjectsListItem' }, React.createElement("p", { className: 'ProjectsListItem-date' }, React.createElement("span", { className: 'glyphicon glyphicon-calendar' }), " ", moment(this.props.project.CreationDate).format('DD-MM-YYYY')), React.createElement("p", null, this.props.project.Name), React.createElement("p", null, this.props.project.Description));
    };
    return ProjectsListItem;
}(React.Component);
exports["default"] = ProjectsListItem;

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
var React = __webpack_require__(15);
__webpack_require__(212);
__webpack_require__(213);
var ProjectListItem_1 = __webpack_require__(196);
var Button_1 = __webpack_require__(56);
var ProjectsList = function (_super) {
    __extends(ProjectsList, _super);
    function ProjectsList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paths = {
            createProjectUrl: '/Projects/Add'
        };
        return _this;
    }
    ProjectsList.prototype.render = function () {
        return React.createElement("section", { className: 'ProjectsList row' }, React.createElement("div", { className: 'col-md-8 col-md-push-2' }, React.createElement("div", { className: 'ProjectsList-summary row' }, React.createElement("div", { className: 'col-md-6 padding-none' }, React.createElement("p", { className: 'ProjectList-summaryText' }, "Number of projects: ", React.createElement("strong", null, this.props.projects.length))), React.createElement("div", { className: 'col-md-6 padding-none' }, React.createElement(Button_1["default"], { link: true, href: this.paths.createProjectUrl, extraClassNames: ['btn-success', 'pull-right'] }, "Start new project"))), React.createElement("div", { className: 'ProjectsList-content row' }, this.props.projects.map(function (project) {
            return React.createElement(ProjectListItem_1["default"], { key: project.Id, project: project });
        }))));
    };
    return ProjectsList;
}(React.Component);
exports["default"] = ProjectsList;

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var ReactDOM = __webpack_require__(34);
var React = __webpack_require__(15);
var ProjectsListContainer_1 = __webpack_require__(192);
ReactDOM.render(React.createElement(ProjectsListContainer_1["default"], null), document.getElementById('react-root'));
if (false) {
    module.hot.accept();
}

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
var React = __webpack_require__(15);
var Button = function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var classNames = ['btn'].concat(this.props.extraClassNames).join(' ');
        if (this.props.link) {
            return React.createElement("a", { className: classNames, href: this.props.href }, this.props.children);
        } else {
            return React.createElement("button", { className: classNames }, this.props.children);
        }
    };
    return Button;
}(React.Component);
exports["default"] = Button;

/***/ })

},[312]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi9Gcm9udGVuZC9Qcm9qZWN0cy9Db21wb25lbnRzL1Byb2plY3RzTGlzdENvbnRhaW5lci9Qcm9qZWN0c0xpc3RDb250YWluZXIudHN4IiwiLi5cXC4uXFwuL0Zyb250ZW5kL1Byb2plY3RzL0NvbXBvbmVudHMvRW1wdHlMaXN0V2FybmluZy9FbXB0eUxpc3RXYXJuaW5nLnRzeCIsIi4uXFwuLlxcLi9Gcm9udGVuZC9Qcm9qZWN0cy9Db21wb25lbnRzL1Byb2plY3RMaXN0SXRlbS9Qcm9qZWN0TGlzdEl0ZW0udHN4IiwiLi5cXC4uXFwuL0Zyb250ZW5kL1Byb2plY3RzL0NvbXBvbmVudHMvUHJvamVjdHNMaXN0L1Byb2plY3RzTGlzdC50c3giLCIuLlxcLi5cXC4vRnJvbnRlbmQvUHJvamVjdHMvQ29tcG9uZW50cy9FbXB0eUxpc3RXYXJuaW5nL0VtcHR5TGlzdFdhcm5pbmcuc2NzcyIsIi4uXFwuLlxcLi9Gcm9udGVuZC9Qcm9qZWN0cy9Db21wb25lbnRzL1Byb2plY3RMaXN0SXRlbS9Qcm9qZWN0TGlzdEl0ZW0uc2NzcyIsIi4uXFwuLlxcLi9Gcm9udGVuZC9Qcm9qZWN0cy9Db21wb25lbnRzL1Byb2plY3RzTGlzdC9Qcm9qZWN0c0xpc3Quc2NzcyIsIi4uXFwuLlxcLi9Gcm9udGVuZC9TaGFyZWQvU3R5bGVzL2hlbHBlcnMuc2NzcyIsIi4uXFwuLlxcLi9Gcm9udGVuZC9Qcm9qZWN0cy9pbmRleC50c3giLCIuLlxcLi5cXC4vRnJvbnRlbmQvU2hhcmVkL0NvbXBvbmVudHMvQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBQStCO0FBSS9CLHlDQUF3RDtBQUN4RCw2Q0FBb0U7QUFNcEU7QUFBb0MscUNBQXVDO0FBRXZFO2VBQ0ksWUFBTyxTQUNYO0FBQUM7QUFFTSxvQ0FBa0IscUJBQXpCO0FBQ1EsYUFBUyxTQUFDLFVBQU0sT0FBTztBQUNsQixrQkFBUyxXQUNs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TUFBaUIsaUJBQUssS0FBTTtBQUVuRSxZQUFLLEtBQU0sTUFBTSxNQUFFO0FBQ1osbUJBQUMsMkJBQVksV0FBWSxZQUFNLE1BQU0sS0FBTSxNQUFLLFFBQU8sS0FBTSxNQUN2RTtBQUFNLGVBQUU7QUFDRSxtQkFBQyxnQ0FBaUIsV0FBWSxjQUFPLEtBQU0sTUFDckQ7QUFFSjtBQUFDO0FBQ0wsV0FBQztBQUFBLEVBYnlCLE1BYXpCO0FBRUQscUJBQXNCLE8iLCJmaWxlIjoicHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuLi8uLi9Nb2RlbHMvUHJvamVjdCc7XHJcblxyXG5pbXBvcnQgUHJvamVjdHNMaXN0IGZyb20gJy4uL1Byb2plY3RzTGlzdC9Qcm9qZWN0c0xpc3QnO1xyXG5pbXBvcnQgRW1wdHlMaXN0V2FybmluZyBmcm9tICcuLi9FbXB0eUxpc3RXYXJuaW5nL0VtcHR5TGlzdFdhcm5pbmcnO1xyXG5cclxuaW50ZXJmYWNlIFByb2plY3RzTGlzdFN0YXRlIHtcclxuICAgIHByb2plY3RzOiBQcm9qZWN0W11cclxufVxyXG5cclxuY2xhc3MgUHJvamVjdHNMaXN0Q29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgUHJvamVjdHNMaXN0U3RhdGU+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUsIHByb3BzKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnByb2plY3RzID0gW11cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCBoYXNQcm9qZWN0cyA9IHRoaXMuc3RhdGUucHJvamVjdHMubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgaGFzUHJvamVjdHMgPyA8UHJvamVjdHNMaXN0IHByb2plY3RzPXt0aGlzLnN0YXRlLnByb2plY3RzfSAvPiA6IDxFbXB0eUxpc3RXYXJuaW5nIC8+XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNMaXN0Q29udGFpbmVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0Zyb250ZW5kL1Byb2plY3RzL0NvbXBvbmVudHMvUHJvamVjdHNMaXN0Q29udGFpbmVyL1Byb2plY3RzTGlzdENvbnRhaW5lci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgJy4vRW1wdHlMaXN0V2FybmluZy5zY3NzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi8uLi9TaGFyZWQvQ29tcG9uZW50cy9CdXR0b24nO1xyXG5cclxuY2xhc3MgRW1wdHlMaXN0V2FybmluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xyXG5cclxuICAgIHByaXZhdGUgcGF0aHMgPSB7XHJcbiAgICAgICAgY3JlYXRlUHJvamVjdFVybDogJy9Qcm9qZWN0cy9BZGQnLFxyXG4gICAgICAgIGNyZWF0ZVByb2plY3RMb2dvOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nRW1wdHlMaXN0V2FybmluZyc+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nY2VudGVyLWJsb2NrJyBzcmM9Jy9pbWFnZXMvTGlzdC5wbmcnIC8+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J0VtcHR5TGlzdFdhcm5pbmctdGV4dENvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+SXQgbG9va3MgbGlrZSB5b3UgZG9uJ3QgaGF2ZSBhbnkgcHJvamVjdHMgY3JlYXRlZC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbGluaz17dHJ1ZX0gaHJlZj17dGhpcy5wYXRocy5jcmVhdGVQcm9qZWN0VXJsfSBleHRyYUNsYXNzTmFtZXM9e1snYnRuLXN1Y2Nlc3MnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgZmlyc3QgcHJvamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtcHR5TGlzdFdhcm5pbmc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vRnJvbnRlbmQvUHJvamVjdHMvQ29tcG9uZW50cy9FbXB0eUxpc3RXYXJuaW5nL0VtcHR5TGlzdFdhcm5pbmcudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmltcG9ydCAnLi9Qcm9qZWN0TGlzdEl0ZW0uc2Nzcyc7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4uLy4uL01vZGVscy9Qcm9qZWN0JztcclxuXHJcbmludGVyZmFjZSBQcm9qZWN0TGlzdEl0ZW1Qcm9wcyB7XHJcbiAgICBwcm9qZWN0OiBQcm9qZWN0XHJcbn1cclxuXHJcbmNsYXNzIFByb2plY3RzTGlzdEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvamVjdExpc3RJdGVtUHJvcHMsIGFueT4ge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J1Byb2plY3RzTGlzdEl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdQcm9qZWN0c0xpc3RJdGVtLWRhdGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ2x5cGhpY29uIGdseXBoaWNvbi1jYWxlbmRhcic+PC9zcGFuPiB7IG1vbWVudCh0aGlzLnByb3BzLnByb2plY3QuQ3JlYXRpb25EYXRlKS5mb3JtYXQoJ0RELU1NLVlZWVknKSB9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5wcm9qZWN0Lk5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMucHJvamVjdC5EZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c0xpc3RJdGVtO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vRnJvbnRlbmQvUHJvamVjdHMvQ29tcG9uZW50cy9Qcm9qZWN0TGlzdEl0ZW0vUHJvamVjdExpc3RJdGVtLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCAnLi9Qcm9qZWN0c0xpc3Quc2Nzcyc7XHJcbmltcG9ydCAnLi4vLi4vLi4vU2hhcmVkL1N0eWxlcy9oZWxwZXJzLnNjc3MnO1xyXG5cclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi4vLi4vTW9kZWxzL1Byb2plY3QnO1xyXG5pbXBvcnQgUHJvamVjdExpc3RJdGVtIGZyb20gJy4uL1Byb2plY3RMaXN0SXRlbS9Qcm9qZWN0TGlzdEl0ZW0nO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uLy4uL1NoYXJlZC9Db21wb25lbnRzL0J1dHRvbic7XHJcblxyXG5pbnRlcmZhY2UgUHJvamVjdHNMaXN0UHJvcHMge1xyXG4gICAgcHJvamVjdHM6IFByb2plY3RbXVxyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0c0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvamVjdHNMaXN0UHJvcHMsIGFueT4ge1xyXG5cclxuICAgIHByaXZhdGUgcGF0aHMgPSB7XHJcbiAgICAgICAgY3JlYXRlUHJvamVjdFVybDogJy9Qcm9qZWN0cy9BZGQnXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J1Byb2plY3RzTGlzdCByb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC04IGNvbC1tZC1wdXNoLTInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdQcm9qZWN0c0xpc3Qtc3VtbWFyeSByb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYgcGFkZGluZy1ub25lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nUHJvamVjdExpc3Qtc3VtbWFyeVRleHQnPk51bWJlciBvZiBwcm9qZWN0czogPHN0cm9uZz57dGhpcy5wcm9wcy5wcm9qZWN0cy5sZW5ndGh9PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02IHBhZGRpbmctbm9uZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxpbms9e3RydWV9IGhyZWY9e3RoaXMucGF0aHMuY3JlYXRlUHJvamVjdFVybH0gZXh0cmFDbGFzc05hbWVzPXtbJ2J0bi1zdWNjZXNzJywgJ3B1bGwtcmlnaHQnXX0+U3RhcnQgbmV3IHByb2plY3Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1Byb2plY3RzTGlzdC1jb250ZW50IHJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHJvamVjdHMubWFwKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8UHJvamVjdExpc3RJdGVtIGtleT17cHJvamVjdC5JZH0gcHJvamVjdD17cHJvamVjdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c0xpc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vRnJvbnRlbmQvUHJvamVjdHMvQ29tcG9uZW50cy9Qcm9qZWN0c0xpc3QvUHJvamVjdHNMaXN0LnRzeCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Gcm9udGVuZC9Qcm9qZWN0cy9Db21wb25lbnRzL0VtcHR5TGlzdFdhcm5pbmcvRW1wdHlMaXN0V2FybmluZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0Zyb250ZW5kL1Byb2plY3RzL0NvbXBvbmVudHMvUHJvamVjdExpc3RJdGVtL1Byb2plY3RMaXN0SXRlbS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0Zyb250ZW5kL1Byb2plY3RzL0NvbXBvbmVudHMvUHJvamVjdHNMaXN0L1Byb2plY3RzTGlzdC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0Zyb250ZW5kL1NoYXJlZC9TdHlsZXMvaGVscGVycy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFByb2plY3RzTGlzdENvbnRhaW5lciBmcm9tICcuL0NvbXBvbmVudHMvUHJvamVjdHNMaXN0Q29udGFpbmVyL1Byb2plY3RzTGlzdENvbnRhaW5lcic7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8UHJvamVjdHNMaXN0Q29udGFpbmVyIC8+LCBcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdC1yb290JylcclxuKTtcclxuXHJcbiBkZWNsYXJlIHZhciBtb2R1bGU6IGFueTtcclxuIGlmIChtb2R1bGUuaG90KSB7XHJcbiAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxuIH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vRnJvbnRlbmQvUHJvamVjdHMvaW5kZXgudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIEJ1dHRvblByb3BzIHtcclxuICAgIGxpbms6IGJvb2xlYW4sXHJcbiAgICBocmVmOiBzdHJpbmcsXHJcbiAgICBleHRyYUNsYXNzTmFtZXM6IHN0cmluZ1tdXHJcbn1cclxuXHJcbmNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxCdXR0b25Qcm9wcywgYW55PiB7XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZXMgPSBbJ2J0biddLmNvbmNhdCh0aGlzLnByb3BzLmV4dHJhQ2xhc3NOYW1lcykuam9pbignICcpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5saW5rKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZXN9IGhyZWY9e3RoaXMucHJvcHMuaHJlZn0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9hPlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9idXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Gcm9udGVuZC9TaGFyZWQvQ29tcG9uZW50cy9CdXR0b24udHN4Il0sInNvdXJjZVJvb3QiOiIifQ==