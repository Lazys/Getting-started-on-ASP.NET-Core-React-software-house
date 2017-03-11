"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ProjectsList_1 = require("../ProjectsList/ProjectsList");
var EmptyListWarning_1 = require("../EmptyListWarning/EmptyListWarning");
var ProjectsListContainer = (function (_super) {
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
        return (hasProjects ? React.createElement(ProjectsList_1["default"], { projects: this.state.projects }) : React.createElement(EmptyListWarning_1["default"], null));
    };
    return ProjectsListContainer;
}(React.Component));
exports.__esModule = true;
exports["default"] = ProjectsListContainer;
