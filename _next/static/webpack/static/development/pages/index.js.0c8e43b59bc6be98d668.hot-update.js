webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/first-section/first-section.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/first-section/first-section.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".first-section_section__3JxGt, .first-section_profileNameContainer__3RZWS {\\n  display: flex; }\\n\\n.first-section_profileNameContainer__3RZWS .first-section_profileNameBox__27oUM .first-section_profileName__1-3kQ {\\n  text-transform: uppercase; }\\n\\n.first-section_profileNameContainer__3RZWS .first-section_jobTitle__3QlcR {\\n  text-transform: capitalize; }\\n\\n.first-section_section__3JxGt {\\n  min-height: 100vh;\\n  width: 100%; }\\n\\n.first-section_firstSectionBackground__eocRo {\\n  background-image: url(\\\"https://picsum.photos/id/100/1600?blur=2\\\");\\n  background-repeat: no-repeat; }\\n  .first-section_firstSectionBackground__eocRo:after {\\n    background: rgba(0, 0, 0, 0.6); }\\n\\n.first-section_flexCenter__OMvIY {\\n  align-items: center;\\n  justify-content: center; }\\n\\n.first-section_profileNameContainer__3RZWS {\\n  flex-direction: column;\\n  flex-wrap: wrap;\\n  align-content: center;\\n  margin-top: -3em;\\n  width: 100%; }\\n  .first-section_profileNameContainer__3RZWS .first-section_profileNameBox__27oUM {\\n    padding: 3em; }\\n    .first-section_profileNameContainer__3RZWS .first-section_profileNameBox__27oUM .first-section_profileName__1-3kQ {\\n      letter-spacing: 0.9em;\\n      font-size: x-large;\\n      white-space: nowrap; }\\n  .first-section_profileNameContainer__3RZWS .first-section_jobTitle__3QlcR {\\n    letter-spacing: 0.1em;\\n    font-size: large;\\n    justify-content: center;\\n    margin-top: -1em;\\n    padding-right: .4em;\\n    padding-left: .4em; }\\n\", \"\",{\"version\":3,\"sources\":[\"/home/mohsen/projects/me.github.io/components/first-section/first-section.module.scss\",\"/home/mohsen/projects/me.github.io/styles/_helper.scss\"],\"names\":[],\"mappings\":\"AAQA;ECPI,aAAa,EAAA;;ADsBjB;ECnBI,yBAAyB,EAAA;;ADmB7B;EChBI,0BAA0B,EAAA;;ADC9B;ECKI,iBAAiB;EACjB,WAAW,EAAA;;ADFf;EACG,iEAAiE;EACjE,4BAA4B,EAAA;EAF/B;IAII,8BAAgC,EAAA;;AAGpC;EACI,mBAAmB;EACnB,uBAAuB,EAAA;;AAE3B;EAEI,sBAAsB;EACtB,eAAe;EACf,qBAAqB;EACrB,gBAAgB;EAChB,WAAW,EAAA;EANf;IAQQ,YAAY,EAAA;IARpB;MAnBI,qBA+BoC;MA9BpC,kBA8B6C;MACrC,mBAAmB,EAAA;EAb/B;IAnBI,qBAqCgC;IApChC,gBAoCuC;IACnC,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB,EAAA\",\"file\":\"first-section.module.scss\",\"sourcesContent\":[\"@import \\\"../../styles/variables\\\";\\n@import \\\"../../styles/helper\\\";\\n\\n@mixin textProfileBox($spacing, $size) {\\n    letter-spacing: $spacing;\\n    font-size: $size;\\n}\\n\\n.section{\\n    @extend %flexContainer;\\n    @extend %viewSize;\\n}\\n.firstSectionBackground{\\n   background-image: url('https://picsum.photos/id/100/1600?blur=2');\\n   background-repeat: no-repeat;\\n   &:after{\\n    background: rgba($color: #000000, $alpha: 0.6)\\n   }\\n}\\n.flexCenter{\\n    align-items: center;\\n    justify-content: center;\\n}\\n.profileNameContainer{\\n    @extend %flexContainer;\\n    flex-direction: column;\\n    flex-wrap: wrap;\\n    align-content: center;\\n    margin-top: -3em;\\n    width: 100%;\\n    .profileNameBox{\\n        padding: 3em;\\n\\n        .profileName{\\n            @extend %textUpperCase;\\n            @include textProfileBox(.9em, x-large);\\n            white-space: nowrap;\\n        }\\n    }\\n    .jobTitle{\\n        @extend %textCapitalize;\\n        @include textProfileBox(.1em, large);\\n        justify-content: center;\\n        margin-top: -1em;\\n        padding-right: .4em;\\n        padding-left: .4em;\\n    }\\n}\\n\",\"%flexContainer{\\n    display: flex;\\n}\\n%textUpperCase{\\n    text-transform: uppercase;\\n}\\n%textCapitalize{\\n    text-transform: capitalize;\\n}\\n%sectionImage{\\n    position: sticky;\\n}\\n%viewSize{\\n    min-height: 100vh;\\n    width: 100%;\\n}\"]}]);\n// Exports\nexports.locals = {\n\t\"section\": \"first-section_section__3JxGt\",\n\t\"profileNameContainer\": \"first-section_profileNameContainer__3RZWS\",\n\t\"profileNameBox\": \"first-section_profileNameBox__27oUM\",\n\t\"profileName\": \"first-section_profileName__1-3kQ\",\n\t\"jobTitle\": \"first-section_jobTitle__3QlcR\",\n\t\"firstSectionBackground\": \"first-section_firstSectionBackground__eocRo\",\n\t\"flexCenter\": \"first-section_flexCenter__OMvIY\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZpcnN0LXNlY3Rpb24vZmlyc3Qtc2VjdGlvbi5tb2R1bGUuc2Nzcz9mNDRmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsOEVBQThFLGtCQUFrQixFQUFFLHVIQUF1SCw4QkFBOEIsRUFBRSwrRUFBK0UsK0JBQStCLEVBQUUsbUNBQW1DLHNCQUFzQixnQkFBZ0IsRUFBRSxrREFBa0Qsd0VBQXdFLGlDQUFpQyxFQUFFLHdEQUF3RCxxQ0FBcUMsRUFBRSxzQ0FBc0Msd0JBQXdCLDRCQUE0QixFQUFFLGdEQUFnRCwyQkFBMkIsb0JBQW9CLDBCQUEwQixxQkFBcUIsZ0JBQWdCLEVBQUUscUZBQXFGLG1CQUFtQixFQUFFLHlIQUF5SCw4QkFBOEIsMkJBQTJCLDRCQUE0QixFQUFFLCtFQUErRSw0QkFBNEIsdUJBQXVCLDhCQUE4Qix1QkFBdUIsMEJBQTBCLHlCQUF5QixFQUFFLFNBQVMscU1BQXFNLGdCQUFnQixPQUFPLG1CQUFtQixPQUFPLG1CQUFtQixNQUFNLFlBQVksaUJBQWlCLEtBQUssWUFBWSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsZ0JBQWdCLEtBQUssZUFBZSxNQUFNLGNBQWMsZUFBZSxrQkFBa0IsTUFBTSxjQUFjLGVBQWUsYUFBYSxhQUFhLGFBQWEsNEdBQTRHLGtDQUFrQyw0Q0FBNEMsK0JBQStCLHVCQUF1QixHQUFHLGFBQWEsNkJBQTZCLHdCQUF3QixHQUFHLDBCQUEwQix1RUFBdUUsa0NBQWtDLGFBQWEsMERBQTBELEdBQUcsY0FBYywwQkFBMEIsOEJBQThCLEdBQUcsd0JBQXdCLDZCQUE2Qiw2QkFBNkIsc0JBQXNCLDRCQUE0Qix1QkFBdUIsa0JBQWtCLHNCQUFzQix1QkFBdUIseUJBQXlCLHFDQUFxQyxxREFBcUQsa0NBQWtDLFdBQVcsT0FBTyxnQkFBZ0Isa0NBQWtDLCtDQUErQyxrQ0FBa0MsMkJBQTJCLDhCQUE4Qiw2QkFBNkIsT0FBTyxHQUFHLG9CQUFvQixvQkFBb0IsR0FBRyxpQkFBaUIsZ0NBQWdDLEdBQUcsa0JBQWtCLGlDQUFpQyxHQUFHLGdCQUFnQix1QkFBdUIsR0FBRyxZQUFZLHdCQUF3QixrQkFBa0IsR0FBRyxHQUFHO0FBQ3BnSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9jb21wb25lbnRzL2ZpcnN0LXNlY3Rpb24vZmlyc3Qtc2VjdGlvbi5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5maXJzdC1zZWN0aW9uX3NlY3Rpb25fXzNKeEd0LCAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUNvbnRhaW5lcl9fM1JaV1Mge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbi5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQ29udGFpbmVyX18zUlpXUyAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUJveF9fMjdvVU0gLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVfXzEtM2tRIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4uZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUNvbnRhaW5lcl9fM1JaV1MgLmZpcnN0LXNlY3Rpb25fam9iVGl0bGVfXzNRbGNSIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyB9XFxuXFxuLmZpcnN0LXNlY3Rpb25fc2VjdGlvbl9fM0p4R3Qge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5maXJzdC1zZWN0aW9uX2ZpcnN0U2VjdGlvbkJhY2tncm91bmRfX2VvY1JvIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzEwMC8xNjAwP2JsdXI9MlxcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgfVxcbiAgLmZpcnN0LXNlY3Rpb25fZmlyc3RTZWN0aW9uQmFja2dyb3VuZF9fZW9jUm86YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7IH1cXG5cXG4uZmlyc3Qtc2VjdGlvbl9mbGV4Q2VudGVyX19PTXZJWSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUNvbnRhaW5lcl9fM1JaV1Mge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IC0zZW07XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVDb250YWluZXJfXzNSWldTIC5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQm94X18yN29VTSB7XFxuICAgIHBhZGRpbmc6IDNlbTsgfVxcbiAgICAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUNvbnRhaW5lcl9fM1JaV1MgLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVCb3hfXzI3b1VNIC5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lX18xLTNrUSB7XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuOWVtO1xcbiAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuICAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUNvbnRhaW5lcl9fM1JaV1MgLmZpcnN0LXNlY3Rpb25fam9iVGl0bGVfXzNRbGNSIHtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogLTFlbTtcXG4gICAgcGFkZGluZy1yaWdodDogLjRlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAuNGVtOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvbW9oc2VuL3Byb2plY3RzL21lLmdpdGh1Yi5pby9jb21wb25lbnRzL2ZpcnN0LXNlY3Rpb24vZmlyc3Qtc2VjdGlvbi5tb2R1bGUuc2Nzc1wiLFwiL2hvbWUvbW9oc2VuL3Byb2plY3RzL21lLmdpdGh1Yi5pby9zdHlsZXMvX2hlbHBlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVFBO0VDUEksYUFBYSxFQUFBOztBRHNCakI7RUNuQkkseUJBQXlCLEVBQUE7O0FEbUI3QjtFQ2hCSSwwQkFBMEIsRUFBQTs7QURDOUI7RUNLSSxpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBREZmO0VBQ0csaUVBQWlFO0VBQ2pFLDRCQUE0QixFQUFBO0VBRi9CO0lBSUksOEJBQWdDLEVBQUE7O0FBR3BDO0VBQ0ksbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUUzQjtFQUVJLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7RUFOZjtJQVFRLFlBQVksRUFBQTtJQVJwQjtNQW5CSSxxQkErQm9DO01BOUJwQyxrQkE4QjZDO01BQ3JDLG1CQUFtQixFQUFBO0VBYi9CO0lBbkJJLHFCQXFDZ0M7SUFwQ2hDLGdCQW9DdUM7SUFDbkMsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUFcIixcImZpbGVcIjpcImZpcnN0LXNlY3Rpb24ubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1xcXCI7XFxuQGltcG9ydCBcXFwiLi4vLi4vc3R5bGVzL2hlbHBlclxcXCI7XFxuXFxuQG1peGluIHRleHRQcm9maWxlQm94KCRzcGFjaW5nLCAkc2l6ZSkge1xcbiAgICBsZXR0ZXItc3BhY2luZzogJHNwYWNpbmc7XFxuICAgIGZvbnQtc2l6ZTogJHNpemU7XFxufVxcblxcbi5zZWN0aW9ue1xcbiAgICBAZXh0ZW5kICVmbGV4Q29udGFpbmVyO1xcbiAgICBAZXh0ZW5kICV2aWV3U2l6ZTtcXG59XFxuLmZpcnN0U2VjdGlvbkJhY2tncm91bmR7XFxuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3BpY3N1bS5waG90b3MvaWQvMTAwLzE2MDA/Ymx1cj0yJyk7XFxuICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAmOmFmdGVye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjYpXFxuICAgfVxcbn1cXG4uZmxleENlbnRlcntcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5wcm9maWxlTmFtZUNvbnRhaW5lcntcXG4gICAgQGV4dGVuZCAlZmxleENvbnRhaW5lcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC0zZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAucHJvZmlsZU5hbWVCb3h7XFxuICAgICAgICBwYWRkaW5nOiAzZW07XFxuXFxuICAgICAgICAucHJvZmlsZU5hbWV7XFxuICAgICAgICAgICAgQGV4dGVuZCAldGV4dFVwcGVyQ2FzZTtcXG4gICAgICAgICAgICBAaW5jbHVkZSB0ZXh0UHJvZmlsZUJveCguOWVtLCB4LWxhcmdlKTtcXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5qb2JUaXRsZXtcXG4gICAgICAgIEBleHRlbmQgJXRleHRDYXBpdGFsaXplO1xcbiAgICAgICAgQGluY2x1ZGUgdGV4dFByb2ZpbGVCb3goLjFlbSwgbGFyZ2UpO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtMWVtO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogLjRlbTtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogLjRlbTtcXG4gICAgfVxcbn1cXG5cIixcIiVmbGV4Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ldGV4dFVwcGVyQ2FzZXtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuJXRleHRDYXBpdGFsaXple1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuJXNlY3Rpb25JbWFnZXtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG59XFxuJXZpZXdTaXple1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInNlY3Rpb25cIjogXCJmaXJzdC1zZWN0aW9uX3NlY3Rpb25fXzNKeEd0XCIsXG5cdFwicHJvZmlsZU5hbWVDb250YWluZXJcIjogXCJmaXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQ29udGFpbmVyX18zUlpXU1wiLFxuXHRcInByb2ZpbGVOYW1lQm94XCI6IFwiZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUJveF9fMjdvVU1cIixcblx0XCJwcm9maWxlTmFtZVwiOiBcImZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVfXzEtM2tRXCIsXG5cdFwiam9iVGl0bGVcIjogXCJmaXJzdC1zZWN0aW9uX2pvYlRpdGxlX18zUWxjUlwiLFxuXHRcImZpcnN0U2VjdGlvbkJhY2tncm91bmRcIjogXCJmaXJzdC1zZWN0aW9uX2ZpcnN0U2VjdGlvbkJhY2tncm91bmRfX2VvY1JvXCIsXG5cdFwiZmxleENlbnRlclwiOiBcImZpcnN0LXNlY3Rpb25fZmxleENlbnRlcl9fT012SVlcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/first-section/first-section.module.scss\n");

/***/ })

})