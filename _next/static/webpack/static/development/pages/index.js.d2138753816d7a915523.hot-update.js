webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/first-section/first-section.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/first-section/first-section.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".first-section_section__3JxGt, .first-section_profileNameContainer__3RZWS {\\n  display: flex; }\\n\\n.first-section_profileNameContainer__3RZWS .first-section_profileNameBox__27oUM .first-section_profileName__1-3kQ {\\n  text-transform: uppercase; }\\n\\n.first-section_profileNameContainer__3RZWS .first-section_jobTitle__3QlcR {\\n  text-transform: capitalize; }\\n\\n.first-section_section__3JxGt {\\n  min-height: 100vh;\\n  width: 100%; }\\n\\n.first-section_firstSectionBackground__eocRo {\\n  background-image: url(\\\"https://picsum.photos/id/100/1600?blur=2\\\");\\n  background-repeat: no-repeat; }\\n  .first-section_firstSectionBackground__eocRo:after {\\n    background: rgba(0, 0, 0, 0.6); }\\n\\n.first-section_flexCenter__OMvIY {\\n  align-items: center;\\n  justify-content: center; }\\n\\n.first-section_profileNameContainer__3RZWS {\\n  flex-direction: column;\\n  flex-wrap: wrap;\\n  align-content: center;\\n  margin-top: -3em;\\n  width: 100%; }\\n  .first-section_profileNameContainer__3RZWS .first-section_profileNameBox__27oUM {\\n    padding: 3em; }\\n    .first-section_profileNameContainer__3RZWS .first-section_profileNameBox__27oUM .first-section_profileName__1-3kQ {\\n      letter-spacing: 0.9em;\\n      font-size: x-large;\\n      white-space: nowrap;\\n      font-weight: bolder; }\\n  .first-section_profileNameContainer__3RZWS .first-section_jobTitle__3QlcR {\\n    letter-spacing: 0.1em;\\n    font-size: large;\\n    justify-content: center;\\n    margin-top: -1em;\\n    padding-right: .4em;\\n    padding-left: .4em;\\n    font-weight: bold; }\\n\", \"\",{\"version\":3,\"sources\":[\"/home/mohsen/projects/me.github.io/components/first-section/first-section.module.scss\",\"/home/mohsen/projects/me.github.io/styles/_helper.scss\"],\"names\":[],\"mappings\":\"AAOA;ECNI,aAAa,EAAA;;ADqBjB;EClBI,yBAAyB,EAAA;;ADkB7B;ECfI,0BAA0B,EAAA;;ADA9B;ECMI,iBAAiB;EACjB,WAAW,EAAA;;ADHf;EACG,iEAAiE;EACjE,4BAA4B,EAAA;EAF/B;IAII,8BAAgC,EAAA;;AAGpC;EACI,mBAAmB;EACnB,uBAAuB,EAAA;;AAE3B;EAEI,sBAAsB;EACtB,eAAe;EACf,qBAAqB;EACrB,gBAAgB;EAChB,WAAW,EAAA;EANf;IAQQ,YAAY,EAAA;IARpB;MAlBI,qBA8BoC;MA7BpC,kBA6B6C;MACrC,mBAAmB;MACnB,mBAAmB,EAAA;EAd/B;IAlBI,qBAqCgC;IApChC,gBAoCuC;IACnC,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB,EAAA\",\"file\":\"first-section.module.scss\",\"sourcesContent\":[\"@import \\\"../../styles/variables\\\";\\n@import \\\"../../styles/helper\\\";\\n\\n@mixin textProfileBox($spacing, $size) {\\n    letter-spacing: $spacing;\\n    font-size: $size;\\n}\\n.section{\\n    @extend %flexContainer;\\n    @extend %viewSize;\\n}\\n.firstSectionBackground{\\n   background-image: url('https://picsum.photos/id/100/1600?blur=2');\\n   background-repeat: no-repeat;\\n   &:after{\\n    background: rgba($color: #000000, $alpha: 0.6)\\n   }\\n}\\n.flexCenter{\\n    align-items: center;\\n    justify-content: center;\\n}\\n.profileNameContainer{\\n    @extend %flexContainer;\\n    flex-direction: column;\\n    flex-wrap: wrap;\\n    align-content: center;\\n    margin-top: -3em;\\n    width: 100%;\\n    .profileNameBox{\\n        padding: 3em;\\n\\n        .profileName{\\n            @extend %textUpperCase;\\n            @include textProfileBox(.9em, x-large);\\n            white-space: nowrap;\\n            font-weight: bolder;\\n        }\\n    }\\n    .jobTitle{\\n        @extend %textCapitalize;\\n        @include textProfileBox(.1em, large);\\n        justify-content: center;\\n        margin-top: -1em;\\n        padding-right: .4em;\\n        padding-left: .4em;\\n        font-weight: bold;\\n    }\\n}\\n\",\"%flexContainer{\\n    display: flex;\\n}\\n%textUpperCase{\\n    text-transform: uppercase;\\n}\\n%textCapitalize{\\n    text-transform: capitalize;\\n}\\n%sectionImage{\\n    position: sticky;\\n}\\n%viewSize{\\n    min-height: 100vh;\\n    width: 100%;\\n}\"]}]);\n// Exports\nexports.locals = {\n\t\"section\": \"first-section_section__3JxGt\",\n\t\"profileNameContainer\": \"first-section_profileNameContainer__3RZWS\",\n\t\"profileNameBox\": \"first-section_profileNameBox__27oUM\",\n\t\"profileName\": \"first-section_profileName__1-3kQ\",\n\t\"jobTitle\": \"first-section_jobTitle__3QlcR\",\n\t\"firstSectionBackground\": \"first-section_firstSectionBackground__eocRo\",\n\t\"flexCenter\": \"first-section_flexCenter__OMvIY\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZpcnN0LXNlY3Rpb24vZmlyc3Qtc2VjdGlvbi5tb2R1bGUuc2Nzcz9mNDRmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsOEVBQThFLGtCQUFrQixFQUFFLHVIQUF1SCw4QkFBOEIsRUFBRSwrRUFBK0UsK0JBQStCLEVBQUUsbUNBQW1DLHNCQUFzQixnQkFBZ0IsRUFBRSxrREFBa0Qsd0VBQXdFLGlDQUFpQyxFQUFFLHdEQUF3RCxxQ0FBcUMsRUFBRSxzQ0FBc0Msd0JBQXdCLDRCQUE0QixFQUFFLGdEQUFnRCwyQkFBMkIsb0JBQW9CLDBCQUEwQixxQkFBcUIsZ0JBQWdCLEVBQUUscUZBQXFGLG1CQUFtQixFQUFFLHlIQUF5SCw4QkFBOEIsMkJBQTJCLDRCQUE0Qiw0QkFBNEIsRUFBRSwrRUFBK0UsNEJBQTRCLHVCQUF1Qiw4QkFBOEIsdUJBQXVCLDBCQUEwQix5QkFBeUIsd0JBQXdCLEVBQUUsU0FBUyxxTUFBcU0sZ0JBQWdCLE9BQU8sbUJBQW1CLE9BQU8sa0JBQWtCLE1BQU0sWUFBWSxpQkFBaUIsS0FBSyxZQUFZLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxnQkFBZ0IsS0FBSyxlQUFlLE1BQU0sY0FBYyxlQUFlLGFBQWEsa0JBQWtCLE1BQU0sY0FBYyxlQUFlLGFBQWEsYUFBYSxhQUFhLGFBQWEsNEdBQTRHLGtDQUFrQyw0Q0FBNEMsK0JBQStCLHVCQUF1QixHQUFHLFdBQVcsNkJBQTZCLHdCQUF3QixHQUFHLDBCQUEwQix1RUFBdUUsa0NBQWtDLGFBQWEsMERBQTBELEdBQUcsY0FBYywwQkFBMEIsOEJBQThCLEdBQUcsd0JBQXdCLDZCQUE2Qiw2QkFBNkIsc0JBQXNCLDRCQUE0Qix1QkFBdUIsa0JBQWtCLHNCQUFzQix1QkFBdUIseUJBQXlCLHFDQUFxQyxxREFBcUQsa0NBQWtDLGtDQUFrQyxXQUFXLE9BQU8sZ0JBQWdCLGtDQUFrQywrQ0FBK0Msa0NBQWtDLDJCQUEyQiw4QkFBOEIsNkJBQTZCLDRCQUE0QixPQUFPLEdBQUcsb0JBQW9CLG9CQUFvQixHQUFHLGlCQUFpQixnQ0FBZ0MsR0FBRyxrQkFBa0IsaUNBQWlDLEdBQUcsZ0JBQWdCLHVCQUF1QixHQUFHLFlBQVksd0JBQXdCLGtCQUFrQixHQUFHLEdBQUc7QUFDN29IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL2NvbXBvbmVudHMvZmlyc3Qtc2VjdGlvbi9maXJzdC1zZWN0aW9uLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZpcnN0LXNlY3Rpb25fc2VjdGlvbl9fM0p4R3QsIC5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQ29udGFpbmVyX18zUlpXUyB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVDb250YWluZXJfXzNSWldTIC5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQm94X18yN29VTSAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZV9fMS0za1Ege1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQ29udGFpbmVyX18zUlpXUyAuZmlyc3Qtc2VjdGlvbl9qb2JUaXRsZV9fM1FsY1Ige1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cXG5cXG4uZmlyc3Qtc2VjdGlvbl9zZWN0aW9uX18zSnhHdCB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmZpcnN0LXNlY3Rpb25fZmlyc3RTZWN0aW9uQmFja2dyb3VuZF9fZW9jUm8ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMTAwLzE2MDA/Ymx1cj0yXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyB9XFxuICAuZmlyc3Qtc2VjdGlvbl9maXJzdFNlY3Rpb25CYWNrZ3JvdW5kX19lb2NSbzphZnRlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTsgfVxcblxcbi5maXJzdC1zZWN0aW9uX2ZsZXhDZW50ZXJfX09NdklZIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQ29udGFpbmVyX18zUlpXUyB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogLTNlbTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuICAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUNvbnRhaW5lcl9fM1JaV1MgLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVCb3hfXzI3b1VNIHtcXG4gICAgcGFkZGluZzogM2VtOyB9XFxuICAgIC5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQ29udGFpbmVyX18zUlpXUyAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUJveF9fMjdvVU0gLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVfXzEtM2tRIHtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC45ZW07XFxuICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgfVxcbiAgLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVDb250YWluZXJfXzNSWldTIC5maXJzdC1zZWN0aW9uX2pvYlRpdGxlX18zUWxjUiB7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC0xZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IC40ZW07XFxuICAgIHBhZGRpbmctbGVmdDogLjRlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9tb2hzZW4vcHJvamVjdHMvbWUuZ2l0aHViLmlvL2NvbXBvbmVudHMvZmlyc3Qtc2VjdGlvbi9maXJzdC1zZWN0aW9uLm1vZHVsZS5zY3NzXCIsXCIvaG9tZS9tb2hzZW4vcHJvamVjdHMvbWUuZ2l0aHViLmlvL3N0eWxlcy9faGVscGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBT0E7RUNOSSxhQUFhLEVBQUE7O0FEcUJqQjtFQ2xCSSx5QkFBeUIsRUFBQTs7QURrQjdCO0VDZkksMEJBQTBCLEVBQUE7O0FEQTlCO0VDTUksaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QURIZjtFQUNHLGlFQUFpRTtFQUNqRSw0QkFBNEIsRUFBQTtFQUYvQjtJQUlJLDhCQUFnQyxFQUFBOztBQUdwQztFQUNJLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFFM0I7RUFFSSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBO0VBTmY7SUFRUSxZQUFZLEVBQUE7SUFScEI7TUFsQkkscUJBOEJvQztNQTdCcEMsa0JBNkI2QztNQUNyQyxtQkFBbUI7TUFDbkIsbUJBQW1CLEVBQUE7RUFkL0I7SUFsQkkscUJBcUNnQztJQXBDaEMsZ0JBb0N1QztJQUNuQyx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUFcIixcImZpbGVcIjpcImZpcnN0LXNlY3Rpb24ubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1xcXCI7XFxuQGltcG9ydCBcXFwiLi4vLi4vc3R5bGVzL2hlbHBlclxcXCI7XFxuXFxuQG1peGluIHRleHRQcm9maWxlQm94KCRzcGFjaW5nLCAkc2l6ZSkge1xcbiAgICBsZXR0ZXItc3BhY2luZzogJHNwYWNpbmc7XFxuICAgIGZvbnQtc2l6ZTogJHNpemU7XFxufVxcbi5zZWN0aW9ue1xcbiAgICBAZXh0ZW5kICVmbGV4Q29udGFpbmVyO1xcbiAgICBAZXh0ZW5kICV2aWV3U2l6ZTtcXG59XFxuLmZpcnN0U2VjdGlvbkJhY2tncm91bmR7XFxuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3BpY3N1bS5waG90b3MvaWQvMTAwLzE2MDA/Ymx1cj0yJyk7XFxuICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAmOmFmdGVye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjYpXFxuICAgfVxcbn1cXG4uZmxleENlbnRlcntcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5wcm9maWxlTmFtZUNvbnRhaW5lcntcXG4gICAgQGV4dGVuZCAlZmxleENvbnRhaW5lcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC0zZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAucHJvZmlsZU5hbWVCb3h7XFxuICAgICAgICBwYWRkaW5nOiAzZW07XFxuXFxuICAgICAgICAucHJvZmlsZU5hbWV7XFxuICAgICAgICAgICAgQGV4dGVuZCAldGV4dFVwcGVyQ2FzZTtcXG4gICAgICAgICAgICBAaW5jbHVkZSB0ZXh0UHJvZmlsZUJveCguOWVtLCB4LWxhcmdlKTtcXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLmpvYlRpdGxle1xcbiAgICAgICAgQGV4dGVuZCAldGV4dENhcGl0YWxpemU7XFxuICAgICAgICBAaW5jbHVkZSB0ZXh0UHJvZmlsZUJveCguMWVtLCBsYXJnZSk7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IC0xZW07XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAuNGVtO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAuNGVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG59XFxuXCIsXCIlZmxleENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuJXRleHRVcHBlckNhc2V7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbiV0ZXh0Q2FwaXRhbGl6ZXtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcbiVzZWN0aW9uSW1hZ2V7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxufVxcbiV2aWV3U2l6ZXtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJzZWN0aW9uXCI6IFwiZmlyc3Qtc2VjdGlvbl9zZWN0aW9uX18zSnhHdFwiLFxuXHRcInByb2ZpbGVOYW1lQ29udGFpbmVyXCI6IFwiZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUNvbnRhaW5lcl9fM1JaV1NcIixcblx0XCJwcm9maWxlTmFtZUJveFwiOiBcImZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVCb3hfXzI3b1VNXCIsXG5cdFwicHJvZmlsZU5hbWVcIjogXCJmaXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lX18xLTNrUVwiLFxuXHRcImpvYlRpdGxlXCI6IFwiZmlyc3Qtc2VjdGlvbl9qb2JUaXRsZV9fM1FsY1JcIixcblx0XCJmaXJzdFNlY3Rpb25CYWNrZ3JvdW5kXCI6IFwiZmlyc3Qtc2VjdGlvbl9maXJzdFNlY3Rpb25CYWNrZ3JvdW5kX19lb2NSb1wiLFxuXHRcImZsZXhDZW50ZXJcIjogXCJmaXJzdC1zZWN0aW9uX2ZsZXhDZW50ZXJfX09NdklZXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/first-section/first-section.module.scss\n");

/***/ })

})