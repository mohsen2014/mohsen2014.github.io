webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/first-section/first-section.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/first-section/first-section.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".first-section_viewSize__2Hzsd, .first-section_profileNameContainer__3RZWS {\\n  display: flex; }\\n\\n.first-section_profileNameContainer__3RZWS .first-section_profileNameBox__27oUM .first-section_profileName__1-3kQ {\\n  text-transform: uppercase; }\\n\\n.first-section_profileNameContainer__3RZWS .first-section_jobTitle__3QlcR {\\n  text-transform: capitalize; }\\n\\n.first-section_viewSize__2Hzsd {\\n  height: 100vh;\\n  width: 100vw; }\\n\\n.first-section_flexCenter__OMvIY {\\n  align-items: center;\\n  justify-content: center; }\\n\\n.first-section_profileNameContainer__3RZWS {\\n  flex-direction: column;\\n  flex-wrap: wrap;\\n  align-content: center;\\n  margin-top: -3em;\\n  width: 100%; }\\n  .first-section_profileNameContainer__3RZWS .first-section_profileNameBox__27oUM {\\n    padding: 3em;\\n    border: 1px solid #cccc00; }\\n    .first-section_profileNameContainer__3RZWS .first-section_profileNameBox__27oUM .first-section_profileName__1-3kQ {\\n      letter-spacing: 0.9em;\\n      font-size: x-large;\\n      white-space: nowrap; }\\n  .first-section_profileNameContainer__3RZWS .first-section_jobTitle__3QlcR {\\n    letter-spacing: 0.1em;\\n    font-size: large;\\n    justify-content: center;\\n    margin-top: -1em;\\n    background: #fdfdfa;\\n    padding-right: .4em;\\n    padding-left: .4em; }\\n\", \"\",{\"version\":3,\"sources\":[\"/home/mohsen/projects/me.github.io/components/first-section/first-section.module.scss\",\"/home/mohsen/projects/me.github.io/styles/_variables.scss\"],\"names\":[],\"mappings\":\"AAKA;EACI,aAAa,EAAA;;AAEjB;EACI,yBAAyB,EAAA;;AAE7B;EACI,0BAA0B,EAAA;;AAE9B;EAEI,aAAa;EACb,YAAY,EAAA;;AAEhB;EACI,mBAAmB;EACnB,uBAAuB,EAAA;;AAE3B;EAEI,sBAAsB;EACtB,eAAe;EACf,qBAAqB;EACrB,gBAAgB;EAChB,WAAW,EAAA;EANf;IAQQ,YAAY;IACZ,yBChCsB,EAAA;IDuB9B;MArBI,qBAiCoC;MAhCpC,kBAgC6C;MACrC,mBAAmB,EAAA;EAb/B;IArBI,qBAuCgC;IAtChC,gBAsCuC;IACnC,uBAAuB;IACvB,gBAAgB;IAChB,mBC3Ca;ID4Cb,mBAAmB;IACnB,kBAAkB,EAAA\",\"file\":\"first-section.module.scss\",\"sourcesContent\":[\"@import \\\"../../styles/variables\\\";\\n@mixin textProfileBox($spacing, $size) {\\n    letter-spacing: $spacing;\\n    font-size: $size;\\n}\\n%flexContainer{\\n    display: flex;\\n}\\n%textUpperCase{\\n    text-transform: uppercase;\\n}\\n%textCapitalize{\\n    text-transform: capitalize;\\n}\\n.viewSize{\\n    @extend %flexContainer;\\n    height: 100vh;\\n    width: 100vw;\\n}\\n.flexCenter{\\n    align-items: center;\\n    justify-content: center;\\n}\\n.profileNameContainer{\\n    @extend %flexContainer;\\n    flex-direction: column;\\n    flex-wrap: wrap;\\n    align-content: center;\\n    margin-top: -3em;\\n    width: 100%;\\n    .profileNameBox{\\n        padding: 3em;\\n        border: 1px solid $base-color;\\n        .profileName{\\n            @extend %textUpperCase;\\n            @include textProfileBox(.9em, x-large);\\n            white-space: nowrap;\\n        }\\n    }\\n    .jobTitle{\\n        @extend %textCapitalize;\\n        @include textProfileBox(.1em, large);\\n        justify-content: center;\\n        margin-top: -1em;\\n        background: $white-color;\\n        padding-right: .4em;\\n        padding-left: .4em;\\n    }\\n}\",\"$base-color: darken(yellow,10);\\n$white-color: #fdfdfa;\\n\\n$breakpoints : (\\n    \\\"sm\\\":600px,\\n    \\\"md\\\":768px,\\n    \\\"lg\\\":992px,\\n    \\\"xl\\\":1200px,\\n)\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"viewSize\": \"first-section_viewSize__2Hzsd\",\n\t\"profileNameContainer\": \"first-section_profileNameContainer__3RZWS\",\n\t\"profileNameBox\": \"first-section_profileNameBox__27oUM\",\n\t\"profileName\": \"first-section_profileName__1-3kQ\",\n\t\"jobTitle\": \"first-section_jobTitle__3QlcR\",\n\t\"flexCenter\": \"first-section_flexCenter__OMvIY\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZpcnN0LXNlY3Rpb24vZmlyc3Qtc2VjdGlvbi5tb2R1bGUuc2Nzcz9mNDRmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsK0VBQStFLGtCQUFrQixFQUFFLHVIQUF1SCw4QkFBOEIsRUFBRSwrRUFBK0UsK0JBQStCLEVBQUUsb0NBQW9DLGtCQUFrQixpQkFBaUIsRUFBRSxzQ0FBc0Msd0JBQXdCLDRCQUE0QixFQUFFLGdEQUFnRCwyQkFBMkIsb0JBQW9CLDBCQUEwQixxQkFBcUIsZ0JBQWdCLEVBQUUscUZBQXFGLG1CQUFtQixnQ0FBZ0MsRUFBRSx5SEFBeUgsOEJBQThCLDJCQUEyQiw0QkFBNEIsRUFBRSwrRUFBK0UsNEJBQTRCLHVCQUF1Qiw4QkFBOEIsdUJBQXVCLDBCQUEwQiwwQkFBMEIseUJBQXlCLEVBQUUsU0FBUyx3TUFBd00sZ0JBQWdCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sVUFBVSxnQkFBZ0IsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsZ0JBQWdCLEtBQUssVUFBVSxrQkFBa0IsT0FBTyxjQUFjLGVBQWUsa0JBQWtCLE1BQU0sY0FBYyxlQUFlLGFBQWEsYUFBYSxhQUFhLGFBQWEsNEdBQTRHLDBDQUEwQywrQkFBK0IsdUJBQXVCLEdBQUcsaUJBQWlCLG9CQUFvQixHQUFHLGlCQUFpQixnQ0FBZ0MsR0FBRyxrQkFBa0IsaUNBQWlDLEdBQUcsWUFBWSw2QkFBNkIsb0JBQW9CLG1CQUFtQixHQUFHLGNBQWMsMEJBQTBCLDhCQUE4QixHQUFHLHdCQUF3Qiw2QkFBNkIsNkJBQTZCLHNCQUFzQiw0QkFBNEIsdUJBQXVCLGtCQUFrQixzQkFBc0IsdUJBQXVCLHdDQUF3Qyx1QkFBdUIscUNBQXFDLHFEQUFxRCxrQ0FBa0MsV0FBVyxPQUFPLGdCQUFnQixrQ0FBa0MsK0NBQStDLGtDQUFrQywyQkFBMkIsbUNBQW1DLDhCQUE4Qiw2QkFBNkIsT0FBTyxHQUFHLGtDQUFrQyx3QkFBd0IseUdBQXlHO0FBQzdyRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vY29tcG9uZW50cy9maXJzdC1zZWN0aW9uL2ZpcnN0LXNlY3Rpb24ubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZmlyc3Qtc2VjdGlvbl92aWV3U2l6ZV9fMkh6c2QsIC5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQ29udGFpbmVyX18zUlpXUyB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVDb250YWluZXJfXzNSWldTIC5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQm94X18yN29VTSAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZV9fMS0za1Ege1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQ29udGFpbmVyX18zUlpXUyAuZmlyc3Qtc2VjdGlvbl9qb2JUaXRsZV9fM1FsY1Ige1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cXG5cXG4uZmlyc3Qtc2VjdGlvbl92aWV3U2l6ZV9fMkh6c2Qge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dzsgfVxcblxcbi5maXJzdC1zZWN0aW9uX2ZsZXhDZW50ZXJfX09NdklZIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQ29udGFpbmVyX18zUlpXUyB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogLTNlbTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuICAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUNvbnRhaW5lcl9fM1JaV1MgLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVCb3hfXzI3b1VNIHtcXG4gICAgcGFkZGluZzogM2VtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjYzAwOyB9XFxuICAgIC5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQ29udGFpbmVyX18zUlpXUyAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUJveF9fMjdvVU0gLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVfXzEtM2tRIHtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC45ZW07XFxuICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG4gIC5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQ29udGFpbmVyX18zUlpXUyAuZmlyc3Qtc2VjdGlvbl9qb2JUaXRsZV9fM1FsY1Ige1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAtMWVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmRmZGZhO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNGVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IC40ZW07IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9tb2hzZW4vcHJvamVjdHMvbWUuZ2l0aHViLmlvL2NvbXBvbmVudHMvZmlyc3Qtc2VjdGlvbi9maXJzdC1zZWN0aW9uLm1vZHVsZS5zY3NzXCIsXCIvaG9tZS9tb2hzZW4vcHJvamVjdHMvbWUuZ2l0aHViLmlvL3N0eWxlcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBS0E7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksMEJBQTBCLEVBQUE7O0FBRTlCO0VBRUksYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBRTNCO0VBRUksc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTtFQU5mO0lBUVEsWUFBWTtJQUNaLHlCQ2hDc0IsRUFBQTtJRHVCOUI7TUFyQkkscUJBaUNvQztNQWhDcEMsa0JBZ0M2QztNQUNyQyxtQkFBbUIsRUFBQTtFQWIvQjtJQXJCSSxxQkF1Q2dDO0lBdENoQyxnQkFzQ3VDO0lBQ25DLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJDM0NhO0lENENiLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQVwiLFwiZmlsZVwiOlwiZmlyc3Qtc2VjdGlvbi5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzXFxcIjtcXG5AbWl4aW4gdGV4dFByb2ZpbGVCb3goJHNwYWNpbmcsICRzaXplKSB7XFxuICAgIGxldHRlci1zcGFjaW5nOiAkc3BhY2luZztcXG4gICAgZm9udC1zaXplOiAkc2l6ZTtcXG59XFxuJWZsZXhDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbiV0ZXh0VXBwZXJDYXNle1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4ldGV4dENhcGl0YWxpemV7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG4udmlld1NpemV7XFxuICAgIEBleHRlbmQgJWZsZXhDb250YWluZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuLmZsZXhDZW50ZXJ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ucHJvZmlsZU5hbWVDb250YWluZXJ7XFxuICAgIEBleHRlbmQgJWZsZXhDb250YWluZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAtM2VtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLnByb2ZpbGVOYW1lQm94e1xcbiAgICAgICAgcGFkZGluZzogM2VtO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGJhc2UtY29sb3I7XFxuICAgICAgICAucHJvZmlsZU5hbWV7XFxuICAgICAgICAgICAgQGV4dGVuZCAldGV4dFVwcGVyQ2FzZTtcXG4gICAgICAgICAgICBAaW5jbHVkZSB0ZXh0UHJvZmlsZUJveCguOWVtLCB4LWxhcmdlKTtcXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5qb2JUaXRsZXtcXG4gICAgICAgIEBleHRlbmQgJXRleHRDYXBpdGFsaXplO1xcbiAgICAgICAgQGluY2x1ZGUgdGV4dFByb2ZpbGVCb3goLjFlbSwgbGFyZ2UpO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtMWVtO1xcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlLWNvbG9yO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogLjRlbTtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogLjRlbTtcXG4gICAgfVxcbn1cIixcIiRiYXNlLWNvbG9yOiBkYXJrZW4oeWVsbG93LDEwKTtcXG4kd2hpdGUtY29sb3I6ICNmZGZkZmE7XFxuXFxuJGJyZWFrcG9pbnRzIDogKFxcbiAgICBcXFwic21cXFwiOjYwMHB4LFxcbiAgICBcXFwibWRcXFwiOjc2OHB4LFxcbiAgICBcXFwibGdcXFwiOjk5MnB4LFxcbiAgICBcXFwieGxcXFwiOjEyMDBweCxcXG4pXFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidmlld1NpemVcIjogXCJmaXJzdC1zZWN0aW9uX3ZpZXdTaXplX18ySHpzZFwiLFxuXHRcInByb2ZpbGVOYW1lQ29udGFpbmVyXCI6IFwiZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUNvbnRhaW5lcl9fM1JaV1NcIixcblx0XCJwcm9maWxlTmFtZUJveFwiOiBcImZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVCb3hfXzI3b1VNXCIsXG5cdFwicHJvZmlsZU5hbWVcIjogXCJmaXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lX18xLTNrUVwiLFxuXHRcImpvYlRpdGxlXCI6IFwiZmlyc3Qtc2VjdGlvbl9qb2JUaXRsZV9fM1FsY1JcIixcblx0XCJmbGV4Q2VudGVyXCI6IFwiZmlyc3Qtc2VjdGlvbl9mbGV4Q2VudGVyX19PTXZJWVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/first-section/first-section.module.scss\n");

/***/ })

})