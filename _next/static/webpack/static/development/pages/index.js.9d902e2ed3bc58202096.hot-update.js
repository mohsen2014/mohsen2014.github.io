webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/first-section/first-section.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/first-section/first-section.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".first-section_section__3JxGt, .first-section_profileNameContainer__3RZWS {\\n  display: flex; }\\n\\n.first-section_profileNameContainer__3RZWS .first-section_profileNameBox__27oUM .first-section_profileName__1-3kQ {\\n  text-transform: uppercase; }\\n\\n.first-section_profileNameContainer__3RZWS .first-section_jobTitle__3QlcR {\\n  text-transform: capitalize; }\\n\\n.first-section_section__3JxGt {\\n  min-height: 100vh;\\n  width: 100%; }\\n\\n.first-section_section__3JxGt {\\n  min-height: 100vh; }\\n\\n.first-section_firstSectionBackground__eocRo {\\n  background-image: url(\\\"https://picsum.photos/id/100/1600?blur=2\\\");\\n  background-repeat: no-repeat;\\n  background-attachment: fixed; }\\n  .first-section_firstSectionBackground__eocRo:after {\\n    background: rgba(0, 0, 0, 0.6); }\\n\\n.first-section_flexCenter__OMvIY {\\n  align-items: center;\\n  justify-content: center; }\\n\\n.first-section_profileNameContainer__3RZWS {\\n  flex-direction: column;\\n  flex-wrap: wrap;\\n  align-content: center;\\n  margin-top: -3em;\\n  width: 100%; }\\n  .first-section_profileNameContainer__3RZWS .first-section_profileNameBox__27oUM {\\n    padding: 3em; }\\n    .first-section_profileNameContainer__3RZWS .first-section_profileNameBox__27oUM .first-section_profileName__1-3kQ {\\n      letter-spacing: 0.9em;\\n      font-size: x-large;\\n      white-space: nowrap;\\n      font-weight: bolder; }\\n  .first-section_profileNameContainer__3RZWS .first-section_jobTitle__3QlcR {\\n    letter-spacing: 0.1em;\\n    font-size: large;\\n    justify-content: center;\\n    margin-top: -1em;\\n    padding-right: .4em;\\n    padding-left: .4em;\\n    font-weight: bold; }\\n\", \"\",{\"version\":3,\"sources\":[\"/home/mohsen/projects/me.github.io/components/first-section/first-section.module.scss\",\"/home/mohsen/projects/me.github.io/styles/_helper.scss\",\"/home/mohsen/projects/me.github.io/styles/_mixins.scss\"],\"names\":[],\"mappings\":\"AAIA;ECHI,aAAa,EAAA;;ADoBjB;ECjBI,yBAAyB,EAAA;;ADiB7B;ECdI,0BAA0B,EAAA;;ADH9B;ECSI,iBAAiB;EACjB,WAAW,EAAA;;ADVf;EEEI,iBAFqB,EAAA;;AFKzB;EACG,iEAAiE;EACjE,4BAA4B;EAC5B,4BAA4B,EAAA;EAH/B;IAKI,8BAAgC,EAAA;;AAGpC;EACI,mBAAmB;EACnB,uBAAuB,EAAA;;AAE3B;EAEI,sBAAsB;EACtB,eAAe;EACf,qBAAqB;EACrB,gBAAgB;EAChB,WAAW,EAAA;EANf;IAQQ,YAAY,EAAA;IARpB;MEpBI,qBFgCoC;ME/BpC,kBF+B6C;MACrC,mBAAmB;MACnB,mBAAmB,EAAA;EAd/B;IEpBI,qBFuCgC;IEtChC,gBFsCuC;IACnC,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB,EAAA\",\"file\":\"first-section.module.scss\",\"sourcesContent\":[\"@import \\\"../../styles/variables\\\";\\n@import \\\"../../styles/helper\\\";\\n@import \\\"../../styles/mixins\\\";\\n\\n.section{\\n    @extend %flexContainer;\\n    @include view();\\n\\n}\\n.firstSectionBackground{\\n   background-image: url('https://picsum.photos/id/100/1600?blur=2');\\n   background-repeat: no-repeat;\\n   background-attachment: fixed;\\n   &:after{\\n    background: rgba($color: #000000, $alpha: 0.6)\\n   }\\n}\\n.flexCenter{\\n    align-items: center;\\n    justify-content: center;\\n}\\n.profileNameContainer{\\n    @extend %flexContainer;\\n    flex-direction: column;\\n    flex-wrap: wrap;\\n    align-content: center;\\n    margin-top: -3em;\\n    width: 100%;\\n    .profileNameBox{\\n        padding: 3em;\\n\\n        .profileName{\\n            @extend %textUpperCase;\\n            @include textProfileBox(.9em, x-large);\\n            white-space: nowrap;\\n            font-weight: bolder;\\n        }\\n    }\\n    .jobTitle{\\n        @extend %textCapitalize;\\n        @include textProfileBox(.1em, large);\\n        justify-content: center;\\n        margin-top: -1em;\\n        padding-right: .4em;\\n        padding-left: .4em;\\n        font-weight: bold;\\n    }\\n}\\n\",\"%flexContainer{\\n    display: flex;\\n}\\n%textUpperCase{\\n    text-transform: uppercase;\\n}\\n%textCapitalize{\\n    text-transform: capitalize;\\n}\\n%sectionImage{\\n    position: sticky;\\n}\\n%viewSize{\\n    min-height: 100vh;\\n    width: 100%;\\n}\",\"@mixin textProfileBox($spacing, $size) {\\n    letter-spacing: $spacing;\\n    font-size: $size;\\n}\\n@mixin view($height:100vh) {\\n    @extend %viewSize;\\n    min-height: $height;\\n}\"]}]);\n// Exports\nexports.locals = {\n\t\"section\": \"first-section_section__3JxGt\",\n\t\"profileNameContainer\": \"first-section_profileNameContainer__3RZWS\",\n\t\"profileNameBox\": \"first-section_profileNameBox__27oUM\",\n\t\"profileName\": \"first-section_profileName__1-3kQ\",\n\t\"jobTitle\": \"first-section_jobTitle__3QlcR\",\n\t\"firstSectionBackground\": \"first-section_firstSectionBackground__eocRo\",\n\t\"flexCenter\": \"first-section_flexCenter__OMvIY\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZpcnN0LXNlY3Rpb24vZmlyc3Qtc2VjdGlvbi5tb2R1bGUuc2Nzcz9mNDRmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsOEVBQThFLGtCQUFrQixFQUFFLHVIQUF1SCw4QkFBOEIsRUFBRSwrRUFBK0UsK0JBQStCLEVBQUUsbUNBQW1DLHNCQUFzQixnQkFBZ0IsRUFBRSxtQ0FBbUMsc0JBQXNCLEVBQUUsa0RBQWtELHdFQUF3RSxpQ0FBaUMsaUNBQWlDLEVBQUUsd0RBQXdELHFDQUFxQyxFQUFFLHNDQUFzQyx3QkFBd0IsNEJBQTRCLEVBQUUsZ0RBQWdELDJCQUEyQixvQkFBb0IsMEJBQTBCLHFCQUFxQixnQkFBZ0IsRUFBRSxxRkFBcUYsbUJBQW1CLEVBQUUseUhBQXlILDhCQUE4QiwyQkFBMkIsNEJBQTRCLDRCQUE0QixFQUFFLCtFQUErRSw0QkFBNEIsdUJBQXVCLDhCQUE4Qix1QkFBdUIsMEJBQTBCLHlCQUF5Qix3QkFBd0IsRUFBRSxTQUFTLDhQQUE4UCxnQkFBZ0IsT0FBTyxtQkFBbUIsT0FBTyxrQkFBa0IsTUFBTSxZQUFZLGlCQUFpQixLQUFLLGtCQUFrQixNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsZ0JBQWdCLEtBQUssZUFBZSxNQUFNLGNBQWMsZUFBZSxhQUFhLGtCQUFrQixNQUFNLGNBQWMsZUFBZSxhQUFhLGFBQWEsYUFBYSxhQUFhLDRHQUE0RyxrQ0FBa0Msa0NBQWtDLGFBQWEsNkJBQTZCLHNCQUFzQixLQUFLLDBCQUEwQix1RUFBdUUsa0NBQWtDLGtDQUFrQyxhQUFhLDBEQUEwRCxHQUFHLGNBQWMsMEJBQTBCLDhCQUE4QixHQUFHLHdCQUF3Qiw2QkFBNkIsNkJBQTZCLHNCQUFzQiw0QkFBNEIsdUJBQXVCLGtCQUFrQixzQkFBc0IsdUJBQXVCLHlCQUF5QixxQ0FBcUMscURBQXFELGtDQUFrQyxrQ0FBa0MsV0FBVyxPQUFPLGdCQUFnQixrQ0FBa0MsK0NBQStDLGtDQUFrQywyQkFBMkIsOEJBQThCLDZCQUE2Qiw0QkFBNEIsT0FBTyxHQUFHLG9CQUFvQixvQkFBb0IsR0FBRyxpQkFBaUIsZ0NBQWdDLEdBQUcsa0JBQWtCLGlDQUFpQyxHQUFHLGdCQUFnQix1QkFBdUIsR0FBRyxZQUFZLHdCQUF3QixrQkFBa0IsR0FBRywyQ0FBMkMsK0JBQStCLHVCQUF1QixHQUFHLDhCQUE4Qix3QkFBd0IsMEJBQTBCLEdBQUcsR0FBRztBQUMvOUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vY29tcG9uZW50cy9maXJzdC1zZWN0aW9uL2ZpcnN0LXNlY3Rpb24ubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZmlyc3Qtc2VjdGlvbl9zZWN0aW9uX18zSnhHdCwgLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVDb250YWluZXJfXzNSWldTIHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4uZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUNvbnRhaW5lcl9fM1JaV1MgLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVCb3hfXzI3b1VNIC5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lX18xLTNrUSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVDb250YWluZXJfXzNSWldTIC5maXJzdC1zZWN0aW9uX2pvYlRpdGxlX18zUWxjUiB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxcblxcbi5maXJzdC1zZWN0aW9uX3NlY3Rpb25fXzNKeEd0IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uZmlyc3Qtc2VjdGlvbl9zZWN0aW9uX18zSnhHdCB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDsgfVxcblxcbi5maXJzdC1zZWN0aW9uX2ZpcnN0U2VjdGlvbkJhY2tncm91bmRfX2VvY1JvIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzEwMC8xNjAwP2JsdXI9MlxcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7IH1cXG4gIC5maXJzdC1zZWN0aW9uX2ZpcnN0U2VjdGlvbkJhY2tncm91bmRfX2VvY1JvOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpOyB9XFxuXFxuLmZpcnN0LXNlY3Rpb25fZmxleENlbnRlcl9fT012SVkge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVDb250YWluZXJfXzNSWldTIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAtM2VtO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG4gIC5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQ29udGFpbmVyX18zUlpXUyAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUJveF9fMjdvVU0ge1xcbiAgICBwYWRkaW5nOiAzZW07IH1cXG4gICAgLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVDb250YWluZXJfXzNSWldTIC5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQm94X18yN29VTSAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZV9fMS0za1Ege1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjllbTtcXG4gICAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyOyB9XFxuICAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUNvbnRhaW5lcl9fM1JaV1MgLmZpcnN0LXNlY3Rpb25fam9iVGl0bGVfXzNRbGNSIHtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogLTFlbTtcXG4gICAgcGFkZGluZy1yaWdodDogLjRlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAuNGVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL21vaHNlbi9wcm9qZWN0cy9tZS5naXRodWIuaW8vY29tcG9uZW50cy9maXJzdC1zZWN0aW9uL2ZpcnN0LXNlY3Rpb24ubW9kdWxlLnNjc3NcIixcIi9ob21lL21vaHNlbi9wcm9qZWN0cy9tZS5naXRodWIuaW8vc3R5bGVzL19oZWxwZXIuc2Nzc1wiLFwiL2hvbWUvbW9oc2VuL3Byb2plY3RzL21lLmdpdGh1Yi5pby9zdHlsZXMvX21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VDSEksYUFBYSxFQUFBOztBRG9CakI7RUNqQkkseUJBQXlCLEVBQUE7O0FEaUI3QjtFQ2RJLDBCQUEwQixFQUFBOztBREg5QjtFQ1NJLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FEVmY7RUVFSSxpQkFGcUIsRUFBQTs7QUZLekI7RUFDRyxpRUFBaUU7RUFDakUsNEJBQTRCO0VBQzVCLDRCQUE0QixFQUFBO0VBSC9CO0lBS0ksOEJBQWdDLEVBQUE7O0FBR3BDO0VBQ0ksbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUUzQjtFQUVJLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7RUFOZjtJQVFRLFlBQVksRUFBQTtJQVJwQjtNRXBCSSxxQkZnQ29DO01FL0JwQyxrQkYrQjZDO01BQ3JDLG1CQUFtQjtNQUNuQixtQkFBbUIsRUFBQTtFQWQvQjtJRXBCSSxxQkZ1Q2dDO0lFdENoQyxnQkZzQ3VDO0lBQ25DLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQVwiLFwiZmlsZVwiOlwiZmlyc3Qtc2VjdGlvbi5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzXFxcIjtcXG5AaW1wb3J0IFxcXCIuLi8uLi9zdHlsZXMvaGVscGVyXFxcIjtcXG5AaW1wb3J0IFxcXCIuLi8uLi9zdHlsZXMvbWl4aW5zXFxcIjtcXG5cXG4uc2VjdGlvbntcXG4gICAgQGV4dGVuZCAlZmxleENvbnRhaW5lcjtcXG4gICAgQGluY2x1ZGUgdmlldygpO1xcblxcbn1cXG4uZmlyc3RTZWN0aW9uQmFja2dyb3VuZHtcXG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8xMDAvMTYwMD9ibHVyPTInKTtcXG4gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgJjphZnRlcntcXG4gICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC42KVxcbiAgIH1cXG59XFxuLmZsZXhDZW50ZXJ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ucHJvZmlsZU5hbWVDb250YWluZXJ7XFxuICAgIEBleHRlbmQgJWZsZXhDb250YWluZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAtM2VtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLnByb2ZpbGVOYW1lQm94e1xcbiAgICAgICAgcGFkZGluZzogM2VtO1xcblxcbiAgICAgICAgLnByb2ZpbGVOYW1le1xcbiAgICAgICAgICAgIEBleHRlbmQgJXRleHRVcHBlckNhc2U7XFxuICAgICAgICAgICAgQGluY2x1ZGUgdGV4dFByb2ZpbGVCb3goLjllbSwgeC1sYXJnZSk7XFxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5qb2JUaXRsZXtcXG4gICAgICAgIEBleHRlbmQgJXRleHRDYXBpdGFsaXplO1xcbiAgICAgICAgQGluY2x1ZGUgdGV4dFByb2ZpbGVCb3goLjFlbSwgbGFyZ2UpO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtMWVtO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogLjRlbTtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogLjRlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxufVxcblwiLFwiJWZsZXhDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbiV0ZXh0VXBwZXJDYXNle1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4ldGV4dENhcGl0YWxpemV7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG4lc2VjdGlvbkltYWdle1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbn1cXG4ldmlld1NpemV7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XCIsXCJAbWl4aW4gdGV4dFByb2ZpbGVCb3goJHNwYWNpbmcsICRzaXplKSB7XFxuICAgIGxldHRlci1zcGFjaW5nOiAkc3BhY2luZztcXG4gICAgZm9udC1zaXplOiAkc2l6ZTtcXG59XFxuQG1peGluIHZpZXcoJGhlaWdodDoxMDB2aCkge1xcbiAgICBAZXh0ZW5kICV2aWV3U2l6ZTtcXG4gICAgbWluLWhlaWdodDogJGhlaWdodDtcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic2VjdGlvblwiOiBcImZpcnN0LXNlY3Rpb25fc2VjdGlvbl9fM0p4R3RcIixcblx0XCJwcm9maWxlTmFtZUNvbnRhaW5lclwiOiBcImZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVDb250YWluZXJfXzNSWldTXCIsXG5cdFwicHJvZmlsZU5hbWVCb3hcIjogXCJmaXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQm94X18yN29VTVwiLFxuXHRcInByb2ZpbGVOYW1lXCI6IFwiZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZV9fMS0za1FcIixcblx0XCJqb2JUaXRsZVwiOiBcImZpcnN0LXNlY3Rpb25fam9iVGl0bGVfXzNRbGNSXCIsXG5cdFwiZmlyc3RTZWN0aW9uQmFja2dyb3VuZFwiOiBcImZpcnN0LXNlY3Rpb25fZmlyc3RTZWN0aW9uQmFja2dyb3VuZF9fZW9jUm9cIixcblx0XCJmbGV4Q2VudGVyXCI6IFwiZmlyc3Qtc2VjdGlvbl9mbGV4Q2VudGVyX19PTXZJWVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/first-section/first-section.module.scss\n");

/***/ })

})