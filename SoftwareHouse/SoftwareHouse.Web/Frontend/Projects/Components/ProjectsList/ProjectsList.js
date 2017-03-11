"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
require("./ProjectsList.scss");
require("../../../Shared/Styles/helpers.scss");
var ProjectListItem_1 = require("../ProjectListItem/ProjectListItem");
var Button_1 = require("../../../Shared/Components/Button");
var ProjectsList = (function (_super) {
    __extends(ProjectsList, _super);
    function ProjectsList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paths = {
            createProjectUrl: '/Projects/Add'
        };
        return _this;
    }
    ProjectsList.prototype.render = function () {
        return (React.createElement("section", { className: 'ProjectsList row' },
            React.createElement("div", { className: 'col-md-8 col-md-push-2' },
                React.createElement("div", { className: 'ProjectsList-summary row' },
                    React.createElement("div", { className: 'col-md-6 padding-none' },
                        React.createElement("p", { className: 'ProjectList-summaryText' },
                            "Number of projects: ",
                            React.createElement("strong", null, this.props.projects.length))),
                    React.createElement("div", { className: 'col-md-6 padding-none' },
                        React.createElement(Button_1["default"], { link: true, href: this.paths.createProjectUrl, extraClassNames: ['btn-success', 'pull-right'] }, "Start new project"))),
                React.createElement("div", { className: 'ProjectsList-content row' }, this.props.projects.map(function (project) {
                    return React.createElement(ProjectListItem_1["default"], { key: project.Id, project: project });
                })))));
    };
    return ProjectsList;
}(React.Component));
exports.__esModule = true;
exports["default"] = ProjectsList;
