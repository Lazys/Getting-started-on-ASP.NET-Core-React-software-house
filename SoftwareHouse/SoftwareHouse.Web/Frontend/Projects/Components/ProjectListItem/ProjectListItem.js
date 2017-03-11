"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var moment = require("moment");
require("./ProjectListItem.scss");
var ProjectsListItem = (function (_super) {
    __extends(ProjectsListItem, _super);
    function ProjectsListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectsListItem.prototype.render = function () {
        return (React.createElement("section", { className: 'ProjectsListItem' },
            React.createElement("p", { className: 'ProjectsListItem-date' },
                React.createElement("span", { className: 'glyphicon glyphicon-calendar' }),
                " ",
                moment(this.props.project.CreationDate).format('DD-MM-YYYY')),
            React.createElement("p", null, this.props.project.Name),
            React.createElement("p", null, this.props.project.Description)));
    };
    return ProjectsListItem;
}(React.Component));
exports.__esModule = true;
exports["default"] = ProjectsListItem;
