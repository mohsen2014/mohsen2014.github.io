webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/first-section/first-section.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/first-section/first-section.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".first-section_viewSize__2Hzsd, .first-section_profileNameContainer__3RZWS {\\n  display: flex; }\\n\\n.first-section_profileNameContainer__3RZWS .first-section_profileNameBox__27oUM .first-section_profileName__1-3kQ {\\n  text-transform: uppercase; }\\n\\n.first-section_profileNameContainer__3RZWS .first-section_jobTitle__3QlcR {\\n  text-transform: capitalize; }\\n\\n.first-section_viewSize__2Hzsd {\\n  min-height: 100vh;\\n  width: 100%; }\\n\\n.first-section_firstSectionBackground__eocRo {\\n  background-image: url(\\\"https://picsum.photos/2048/2048\\\"); }\\n  .first-section_firstSectionBackground__eocRo:after {\\n    background: rgba(0, 0, 0, 0.6); }\\n\\n.first-section_flexCenter__OMvIY {\\n  align-items: center;\\n  justify-content: center; }\\n\\n.first-section_profileNameContainer__3RZWS {\\n  flex-direction: column;\\n  flex-wrap: wrap;\\n  align-content: center;\\n  margin-top: -3em;\\n  width: 100%; }\\n  .first-section_profileNameContainer__3RZWS .first-section_profileNameBox__27oUM {\\n    padding: 3em;\\n    border-top: 1px solid #cccc00;\\n    border-right: 1px solid #cccc00;\\n    border-left: 1px solid #cccc00; }\\n    .first-section_profileNameContainer__3RZWS .first-section_profileNameBox__27oUM .first-section_profileName__1-3kQ {\\n      letter-spacing: 0.9em;\\n      font-size: x-large;\\n      white-space: nowrap; }\\n  .first-section_profileNameContainer__3RZWS .first-section_jobTitle__3QlcR {\\n    letter-spacing: 0.1em;\\n    font-size: large;\\n    justify-content: center;\\n    margin-top: -1em;\\n    padding-right: .4em;\\n    padding-left: .4em; }\\n\", \"\",{\"version\":3,\"sources\":[\"/home/mohsen/projects/me.github.io/components/first-section/first-section.module.scss\",\"/home/mohsen/projects/me.github.io/styles/_variables.scss\"],\"names\":[],\"mappings\":\"AAKA;EACI,aAAa,EAAA;;AAEjB;EACI,yBAAyB,EAAA;;AAE7B;EACI,0BAA0B,EAAA;;AAK9B;EAEI,iBAAiB;EACjB,WAAW,EAAA;;AAEf;EACG,wDAAwD,EAAA;EAD3D;IAGI,8BAAgC,EAAA;;AAGpC;EACI,mBAAmB;EACnB,uBAAuB,EAAA;;AAE3B;EAEI,sBAAsB;EACtB,eAAe;EACf,qBAAqB;EACrB,gBAAgB;EAChB,WAAW,EAAA;EANf;IAQQ,YAAY;IACZ,6BCzCsB;ID0CtB,+BC1CsB;ID2CtB,8BC3CsB,EAAA;IDgC9B;MA9BI,qBA6CoC;MA5CpC,kBA4C6C;MACrC,mBAAmB,EAAA;EAhB/B;IA9BI,qBAmDgC;IAlDhC,gBAkDuC;IACnC,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB,EAAA\",\"file\":\"first-section.module.scss\",\"sourcesContent\":[\"@import \\\"../../styles/variables\\\";\\n@mixin textProfileBox($spacing, $size) {\\n    letter-spacing: $spacing;\\n    font-size: $size;\\n}\\n%flexContainer{\\n    display: flex;\\n}\\n%textUpperCase{\\n    text-transform: uppercase;\\n}\\n%textCapitalize{\\n    text-transform: capitalize;\\n}\\n%sectionImage{\\n    position: sticky;\\n}\\n.viewSize{\\n    @extend %flexContainer;\\n    min-height: 100vh;\\n    width: 100%;\\n}\\n.firstSectionBackground{\\n   background-image: url('https://picsum.photos/2048/2048'); \\n   &:after{\\n    background: rgba($color: #000000, $alpha: 0.6)\\n   }\\n}\\n.flexCenter{\\n    align-items: center;\\n    justify-content: center;\\n}\\n.profileNameContainer{\\n    @extend %flexContainer;\\n    flex-direction: column;\\n    flex-wrap: wrap;\\n    align-content: center;\\n    margin-top: -3em;\\n    width: 100%;\\n    .profileNameBox{\\n        padding: 3em;\\n        border-top: 1px solid $base-color;\\n        border-right: 1px solid $base-color;\\n        border-left: 1px solid $base-color;\\n\\n        .profileName{\\n            @extend %textUpperCase;\\n            @include textProfileBox(.9em, x-large);\\n            white-space: nowrap;\\n        }\\n    }\\n    .jobTitle{\\n        @extend %textCapitalize;\\n        @include textProfileBox(.1em, large);\\n        justify-content: center;\\n        margin-top: -1em;\\n        padding-right: .4em;\\n        padding-left: .4em;\\n    }\\n}\\n\",\"$base-color: darken(yellow,10);\\n$white-color: #fdfdfa;\\n\\n$breakpoints : (\\n    \\\"sm\\\":600px,\\n    \\\"md\\\":768px,\\n    \\\"lg\\\":992px,\\n    \\\"xl\\\":1200px,\\n)\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"viewSize\": \"first-section_viewSize__2Hzsd\",\n\t\"profileNameContainer\": \"first-section_profileNameContainer__3RZWS\",\n\t\"profileNameBox\": \"first-section_profileNameBox__27oUM\",\n\t\"profileName\": \"first-section_profileName__1-3kQ\",\n\t\"jobTitle\": \"first-section_jobTitle__3QlcR\",\n\t\"firstSectionBackground\": \"first-section_firstSectionBackground__eocRo\",\n\t\"flexCenter\": \"first-section_flexCenter__OMvIY\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZpcnN0LXNlY3Rpb24vZmlyc3Qtc2VjdGlvbi5tb2R1bGUuc2Nzcz9mNDRmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsK0VBQStFLGtCQUFrQixFQUFFLHVIQUF1SCw4QkFBOEIsRUFBRSwrRUFBK0UsK0JBQStCLEVBQUUsb0NBQW9DLHNCQUFzQixnQkFBZ0IsRUFBRSxrREFBa0QsK0RBQStELEVBQUUsd0RBQXdELHFDQUFxQyxFQUFFLHNDQUFzQyx3QkFBd0IsNEJBQTRCLEVBQUUsZ0RBQWdELDJCQUEyQixvQkFBb0IsMEJBQTBCLHFCQUFxQixnQkFBZ0IsRUFBRSxxRkFBcUYsbUJBQW1CLG9DQUFvQyxzQ0FBc0MscUNBQXFDLEVBQUUseUhBQXlILDhCQUE4QiwyQkFBMkIsNEJBQTRCLEVBQUUsK0VBQStFLDRCQUE0Qix1QkFBdUIsOEJBQThCLHVCQUF1QiwwQkFBMEIseUJBQXlCLEVBQUUsU0FBUyx3TUFBd00sZ0JBQWdCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxpQkFBaUIsS0FBSyxpQkFBaUIsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsZ0JBQWdCLEtBQUssVUFBVSxhQUFhLGVBQWUsb0JBQW9CLE9BQU8sY0FBYyxlQUFlLGtCQUFrQixPQUFPLGNBQWMsZUFBZSxhQUFhLGFBQWEsYUFBYSw0R0FBNEcsMENBQTBDLCtCQUErQix1QkFBdUIsR0FBRyxpQkFBaUIsb0JBQW9CLEdBQUcsaUJBQWlCLGdDQUFnQyxHQUFHLGtCQUFrQixpQ0FBaUMsR0FBRyxnQkFBZ0IsdUJBQXVCLEdBQUcsWUFBWSw2QkFBNkIsd0JBQXdCLGtCQUFrQixHQUFHLDBCQUEwQiw4REFBOEQsY0FBYywwREFBMEQsR0FBRyxjQUFjLDBCQUEwQiw4QkFBOEIsR0FBRyx3QkFBd0IsNkJBQTZCLDZCQUE2QixzQkFBc0IsNEJBQTRCLHVCQUF1QixrQkFBa0Isc0JBQXNCLHVCQUF1Qiw0Q0FBNEMsOENBQThDLDZDQUE2Qyx5QkFBeUIscUNBQXFDLHFEQUFxRCxrQ0FBa0MsV0FBVyxPQUFPLGdCQUFnQixrQ0FBa0MsK0NBQStDLGtDQUFrQywyQkFBMkIsOEJBQThCLDZCQUE2QixPQUFPLEdBQUcsb0NBQW9DLHdCQUF3Qix5R0FBeUc7QUFDMXhIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL2NvbXBvbmVudHMvZmlyc3Qtc2VjdGlvbi9maXJzdC1zZWN0aW9uLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZpcnN0LXNlY3Rpb25fdmlld1NpemVfXzJIenNkLCAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUNvbnRhaW5lcl9fM1JaV1Mge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbi5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQ29udGFpbmVyX18zUlpXUyAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUJveF9fMjdvVU0gLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVfXzEtM2tRIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4uZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUNvbnRhaW5lcl9fM1JaV1MgLmZpcnN0LXNlY3Rpb25fam9iVGl0bGVfXzNRbGNSIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyB9XFxuXFxuLmZpcnN0LXNlY3Rpb25fdmlld1NpemVfXzJIenNkIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uZmlyc3Qtc2VjdGlvbl9maXJzdFNlY3Rpb25CYWNrZ3JvdW5kX19lb2NSbyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vcGljc3VtLnBob3Rvcy8yMDQ4LzIwNDhcXFwiKTsgfVxcbiAgLmZpcnN0LXNlY3Rpb25fZmlyc3RTZWN0aW9uQmFja2dyb3VuZF9fZW9jUm86YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7IH1cXG5cXG4uZmlyc3Qtc2VjdGlvbl9mbGV4Q2VudGVyX19PTXZJWSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUNvbnRhaW5lcl9fM1JaV1Mge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IC0zZW07XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVDb250YWluZXJfXzNSWldTIC5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQm94X18yN29VTSB7XFxuICAgIHBhZGRpbmc6IDNlbTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2NjMDA7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2NjMDA7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjY2MwMDsgfVxcbiAgICAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUNvbnRhaW5lcl9fM1JaV1MgLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVCb3hfXzI3b1VNIC5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lX18xLTNrUSB7XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuOWVtO1xcbiAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuICAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUNvbnRhaW5lcl9fM1JaV1MgLmZpcnN0LXNlY3Rpb25fam9iVGl0bGVfXzNRbGNSIHtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogLTFlbTtcXG4gICAgcGFkZGluZy1yaWdodDogLjRlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAuNGVtOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvbW9oc2VuL3Byb2plY3RzL21lLmdpdGh1Yi5pby9jb21wb25lbnRzL2ZpcnN0LXNlY3Rpb24vZmlyc3Qtc2VjdGlvbi5tb2R1bGUuc2Nzc1wiLFwiL2hvbWUvbW9oc2VuL3Byb2plY3RzL21lLmdpdGh1Yi5pby9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLDBCQUEwQixFQUFBOztBQUs5QjtFQUVJLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBRWY7RUFDRyx3REFBd0QsRUFBQTtFQUQzRDtJQUdJLDhCQUFnQyxFQUFBOztBQUdwQztFQUNJLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFFM0I7RUFFSSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBO0VBTmY7SUFRUSxZQUFZO0lBQ1osNkJDekNzQjtJRDBDdEIsK0JDMUNzQjtJRDJDdEIsOEJDM0NzQixFQUFBO0lEZ0M5QjtNQTlCSSxxQkE2Q29DO01BNUNwQyxrQkE0QzZDO01BQ3JDLG1CQUFtQixFQUFBO0VBaEIvQjtJQTlCSSxxQkFtRGdDO0lBbERoQyxnQkFrRHVDO0lBQ25DLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBXCIsXCJmaWxlXCI6XCJmaXJzdC1zZWN0aW9uLm1vZHVsZS5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcXFwiO1xcbkBtaXhpbiB0ZXh0UHJvZmlsZUJveCgkc3BhY2luZywgJHNpemUpIHtcXG4gICAgbGV0dGVyLXNwYWNpbmc6ICRzcGFjaW5nO1xcbiAgICBmb250LXNpemU6ICRzaXplO1xcbn1cXG4lZmxleENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuJXRleHRVcHBlckNhc2V7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbiV0ZXh0Q2FwaXRhbGl6ZXtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcbiVzZWN0aW9uSW1hZ2V7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxufVxcbi52aWV3U2l6ZXtcXG4gICAgQGV4dGVuZCAlZmxleENvbnRhaW5lcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uZmlyc3RTZWN0aW9uQmFja2dyb3VuZHtcXG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vcGljc3VtLnBob3Rvcy8yMDQ4LzIwNDgnKTsgXFxuICAgJjphZnRlcntcXG4gICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC42KVxcbiAgIH1cXG59XFxuLmZsZXhDZW50ZXJ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ucHJvZmlsZU5hbWVDb250YWluZXJ7XFxuICAgIEBleHRlbmQgJWZsZXhDb250YWluZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAtM2VtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLnByb2ZpbGVOYW1lQm94e1xcbiAgICAgICAgcGFkZGluZzogM2VtO1xcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRiYXNlLWNvbG9yO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGJhc2UtY29sb3I7XFxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRiYXNlLWNvbG9yO1xcblxcbiAgICAgICAgLnByb2ZpbGVOYW1le1xcbiAgICAgICAgICAgIEBleHRlbmQgJXRleHRVcHBlckNhc2U7XFxuICAgICAgICAgICAgQGluY2x1ZGUgdGV4dFByb2ZpbGVCb3goLjllbSwgeC1sYXJnZSk7XFxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAuam9iVGl0bGV7XFxuICAgICAgICBAZXh0ZW5kICV0ZXh0Q2FwaXRhbGl6ZTtcXG4gICAgICAgIEBpbmNsdWRlIHRleHRQcm9maWxlQm94KC4xZW0sIGxhcmdlKTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTFlbTtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IC40ZW07XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IC40ZW07XFxuICAgIH1cXG59XFxuXCIsXCIkYmFzZS1jb2xvcjogZGFya2VuKHllbGxvdywxMCk7XFxuJHdoaXRlLWNvbG9yOiAjZmRmZGZhO1xcblxcbiRicmVha3BvaW50cyA6IChcXG4gICAgXFxcInNtXFxcIjo2MDBweCxcXG4gICAgXFxcIm1kXFxcIjo3NjhweCxcXG4gICAgXFxcImxnXFxcIjo5OTJweCxcXG4gICAgXFxcInhsXFxcIjoxMjAwcHgsXFxuKVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInZpZXdTaXplXCI6IFwiZmlyc3Qtc2VjdGlvbl92aWV3U2l6ZV9fMkh6c2RcIixcblx0XCJwcm9maWxlTmFtZUNvbnRhaW5lclwiOiBcImZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVDb250YWluZXJfXzNSWldTXCIsXG5cdFwicHJvZmlsZU5hbWVCb3hcIjogXCJmaXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQm94X18yN29VTVwiLFxuXHRcInByb2ZpbGVOYW1lXCI6IFwiZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZV9fMS0za1FcIixcblx0XCJqb2JUaXRsZVwiOiBcImZpcnN0LXNlY3Rpb25fam9iVGl0bGVfXzNRbGNSXCIsXG5cdFwiZmlyc3RTZWN0aW9uQmFja2dyb3VuZFwiOiBcImZpcnN0LXNlY3Rpb25fZmlyc3RTZWN0aW9uQmFja2dyb3VuZF9fZW9jUm9cIixcblx0XCJmbGV4Q2VudGVyXCI6IFwiZmlyc3Qtc2VjdGlvbl9mbGV4Q2VudGVyX19PTXZJWVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/first-section/first-section.module.scss\n");

/***/ })

})