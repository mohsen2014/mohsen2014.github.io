webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/first-section/first-section.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/first-section/first-section.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".first-section_viewSize__2Hzsd, .first-section_profileNameContainer__3RZWS {\\n  display: flex; }\\n\\n.first-section_profileNameContainer__3RZWS .first-section_profileNameBox__27oUM .first-section_profileName__1-3kQ {\\n  text-transform: uppercase; }\\n\\n.first-section_profileNameContainer__3RZWS .first-section_jobTitle__3QlcR {\\n  text-transform: capitalize; }\\n\\n.first-section_viewSize__2Hzsd {\\n  height: 100vh;\\n  width: 100vw; }\\n\\n.first-section_flexCenter__OMvIY {\\n  align-items: center;\\n  justify-content: center; }\\n\\n.first-section_profileNameContainer__3RZWS {\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n  align-content: center; }\\n  .first-section_profileNameContainer__3RZWS .first-section_profileNameBox__27oUM {\\n    padding: 3em;\\n    border: 1px solid #cccc00; }\\n    .first-section_profileNameContainer__3RZWS .first-section_profileNameBox__27oUM .first-section_profileName__1-3kQ {\\n      letter-spacing: 0.9em;\\n      font-size: x-large; }\\n  .first-section_profileNameContainer__3RZWS .first-section_jobTitle__3QlcR {\\n    letter-spacing: 0.1em;\\n    font-size: large;\\n    justify-content: center;\\n    margin-top: -1em;\\n    background: white;\\n    padding-right: .4em;\\n    padding-left: .4em; }\\n\", \"\",{\"version\":3,\"sources\":[\"/home/mohsen/projects/me.github.io/components/first-section/first-section.module.scss\",\"/home/mohsen/projects/me.github.io/_variables.scss\"],\"names\":[],\"mappings\":\"AAKA;EACI,aAAa,EAAA;;AAEjB;EACI,yBAAyB,EAAA;;AAE7B;EACI,0BAA0B,EAAA;;AAE9B;EAEI,aAAa;EACb,YAAY,EAAA;;AAEhB;EACI,mBAAmB;EACnB,uBAAuB,EAAA;;AAE3B;EAEI,mBAAmB;EACnB,eAAe;EACf,qBAAqB,EAAA;EAJzB;IAMQ,YAAY;IACZ,yBC9BsB,EAAA;IDuB9B;MArBI,qBA+BoC;MA9BpC,kBA8B6C,EAAA;EAVjD;IArBI,qBAoCgC;IAnChC,gBAmCuC;IACnC,uBAAuB;IACvB,gBAAgB;IAChB,iBCxCW;IDyCX,mBAAmB;IACnB,kBAAkB,EAAA\",\"file\":\"first-section.module.scss\",\"sourcesContent\":[\"@import \\\"../../variables\\\";\\n@mixin textProfileBox($spacing, $size) {\\n    letter-spacing: $spacing;\\n    font-size: $size;\\n}\\n%flexContainer{\\n    display: flex;\\n}\\n%textUpperCase{\\n    text-transform: uppercase;\\n}\\n%textCapitalize{\\n    text-transform: capitalize;\\n}\\n.viewSize{\\n    @extend %flexContainer;\\n    height: 100vh;\\n    width: 100vw;\\n}\\n.flexCenter{\\n    align-items: center;\\n    justify-content: center;\\n}\\n.profileNameContainer{\\n    @extend %flexContainer;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    align-content: center;\\n    .profileNameBox{\\n        padding: 3em;\\n        border: 1px solid $base-color;\\n        .profileName{\\n            @extend %textUpperCase;\\n            @include textProfileBox(.9em, x-large)\\n        }\\n    }\\n    .jobTitle{\\n        @extend %textCapitalize;\\n        @include textProfileBox(.1em, large);\\n        justify-content: center;\\n        margin-top: -1em;\\n        background: $white-color;\\n        padding-right: .4em;\\n        padding-left: .4em;\\n    }\\n}\",\"$base-color: darken(yellow,10);\\n$white-color: white\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"viewSize\": \"first-section_viewSize__2Hzsd\",\n\t\"profileNameContainer\": \"first-section_profileNameContainer__3RZWS\",\n\t\"profileNameBox\": \"first-section_profileNameBox__27oUM\",\n\t\"profileName\": \"first-section_profileName__1-3kQ\",\n\t\"jobTitle\": \"first-section_jobTitle__3QlcR\",\n\t\"flexCenter\": \"first-section_flexCenter__OMvIY\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZpcnN0LXNlY3Rpb24vZmlyc3Qtc2VjdGlvbi5tb2R1bGUuc2Nzcz9mNDRmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsK0VBQStFLGtCQUFrQixFQUFFLHVIQUF1SCw4QkFBOEIsRUFBRSwrRUFBK0UsK0JBQStCLEVBQUUsb0NBQW9DLGtCQUFrQixpQkFBaUIsRUFBRSxzQ0FBc0Msd0JBQXdCLDRCQUE0QixFQUFFLGdEQUFnRCx3QkFBd0Isb0JBQW9CLDBCQUEwQixFQUFFLHFGQUFxRixtQkFBbUIsZ0NBQWdDLEVBQUUseUhBQXlILDhCQUE4QiwyQkFBMkIsRUFBRSwrRUFBK0UsNEJBQTRCLHVCQUF1Qiw4QkFBOEIsdUJBQXVCLHdCQUF3QiwwQkFBMEIseUJBQXlCLEVBQUUsU0FBUyxpTUFBaU0sZ0JBQWdCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sVUFBVSxnQkFBZ0IsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFlBQVksV0FBVyxpQkFBaUIsTUFBTSxVQUFVLGtCQUFrQixPQUFPLGNBQWMsb0JBQW9CLE1BQU0sY0FBYyxlQUFlLGFBQWEsYUFBYSxhQUFhLGFBQWEscUdBQXFHLDBDQUEwQywrQkFBK0IsdUJBQXVCLEdBQUcsaUJBQWlCLG9CQUFvQixHQUFHLGlCQUFpQixnQ0FBZ0MsR0FBRyxrQkFBa0IsaUNBQWlDLEdBQUcsWUFBWSw2QkFBNkIsb0JBQW9CLG1CQUFtQixHQUFHLGNBQWMsMEJBQTBCLDhCQUE4QixHQUFHLHdCQUF3Qiw2QkFBNkIsMEJBQTBCLHNCQUFzQiw0QkFBNEIsc0JBQXNCLHVCQUF1Qix3Q0FBd0MsdUJBQXVCLHFDQUFxQywrREFBK0QsT0FBTyxnQkFBZ0Isa0NBQWtDLCtDQUErQyxrQ0FBa0MsMkJBQTJCLG1DQUFtQyw4QkFBOEIsNkJBQTZCLE9BQU8sR0FBRyxrQ0FBa0MsMEJBQTBCO0FBQy80RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vY29tcG9uZW50cy9maXJzdC1zZWN0aW9uL2ZpcnN0LXNlY3Rpb24ubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZmlyc3Qtc2VjdGlvbl92aWV3U2l6ZV9fMkh6c2QsIC5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQ29udGFpbmVyX18zUlpXUyB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVDb250YWluZXJfXzNSWldTIC5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQm94X18yN29VTSAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZV9fMS0za1Ege1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQ29udGFpbmVyX18zUlpXUyAuZmlyc3Qtc2VjdGlvbl9qb2JUaXRsZV9fM1FsY1Ige1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cXG5cXG4uZmlyc3Qtc2VjdGlvbl92aWV3U2l6ZV9fMkh6c2Qge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dzsgfVxcblxcbi5maXJzdC1zZWN0aW9uX2ZsZXhDZW50ZXJfX09NdklZIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQ29udGFpbmVyX18zUlpXUyB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyOyB9XFxuICAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUNvbnRhaW5lcl9fM1JaV1MgLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVCb3hfXzI3b1VNIHtcXG4gICAgcGFkZGluZzogM2VtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjYzAwOyB9XFxuICAgIC5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQ29udGFpbmVyX18zUlpXUyAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUJveF9fMjdvVU0gLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVfXzEtM2tRIHtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC45ZW07XFxuICAgICAgZm9udC1zaXplOiB4LWxhcmdlOyB9XFxuICAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUNvbnRhaW5lcl9fM1JaV1MgLmZpcnN0LXNlY3Rpb25fam9iVGl0bGVfXzNRbGNSIHtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogLTFlbTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IC40ZW07XFxuICAgIHBhZGRpbmctbGVmdDogLjRlbTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL21vaHNlbi9wcm9qZWN0cy9tZS5naXRodWIuaW8vY29tcG9uZW50cy9maXJzdC1zZWN0aW9uL2ZpcnN0LXNlY3Rpb24ubW9kdWxlLnNjc3NcIixcIi9ob21lL21vaHNlbi9wcm9qZWN0cy9tZS5naXRodWIuaW8vX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLDBCQUEwQixFQUFBOztBQUU5QjtFQUVJLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUUzQjtFQUVJLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCLEVBQUE7RUFKekI7SUFNUSxZQUFZO0lBQ1oseUJDOUJzQixFQUFBO0lEdUI5QjtNQXJCSSxxQkErQm9DO01BOUJwQyxrQkE4QjZDLEVBQUE7RUFWakQ7SUFyQkkscUJBb0NnQztJQW5DaEMsZ0JBbUN1QztJQUNuQyx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGlCQ3hDVztJRHlDWCxtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUFcIixcImZpbGVcIjpcImZpcnN0LXNlY3Rpb24ubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vLi4vdmFyaWFibGVzXFxcIjtcXG5AbWl4aW4gdGV4dFByb2ZpbGVCb3goJHNwYWNpbmcsICRzaXplKSB7XFxuICAgIGxldHRlci1zcGFjaW5nOiAkc3BhY2luZztcXG4gICAgZm9udC1zaXplOiAkc2l6ZTtcXG59XFxuJWZsZXhDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbiV0ZXh0VXBwZXJDYXNle1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4ldGV4dENhcGl0YWxpemV7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG4udmlld1NpemV7XFxuICAgIEBleHRlbmQgJWZsZXhDb250YWluZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuLmZsZXhDZW50ZXJ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ucHJvZmlsZU5hbWVDb250YWluZXJ7XFxuICAgIEBleHRlbmQgJWZsZXhDb250YWluZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICAucHJvZmlsZU5hbWVCb3h7XFxuICAgICAgICBwYWRkaW5nOiAzZW07XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYmFzZS1jb2xvcjtcXG4gICAgICAgIC5wcm9maWxlTmFtZXtcXG4gICAgICAgICAgICBAZXh0ZW5kICV0ZXh0VXBwZXJDYXNlO1xcbiAgICAgICAgICAgIEBpbmNsdWRlIHRleHRQcm9maWxlQm94KC45ZW0sIHgtbGFyZ2UpXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLmpvYlRpdGxle1xcbiAgICAgICAgQGV4dGVuZCAldGV4dENhcGl0YWxpemU7XFxuICAgICAgICBAaW5jbHVkZSB0ZXh0UHJvZmlsZUJveCguMWVtLCBsYXJnZSk7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IC0xZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUtY29sb3I7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAuNGVtO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAuNGVtO1xcbiAgICB9XFxufVwiLFwiJGJhc2UtY29sb3I6IGRhcmtlbih5ZWxsb3csMTApO1xcbiR3aGl0ZS1jb2xvcjogd2hpdGVcXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ2aWV3U2l6ZVwiOiBcImZpcnN0LXNlY3Rpb25fdmlld1NpemVfXzJIenNkXCIsXG5cdFwicHJvZmlsZU5hbWVDb250YWluZXJcIjogXCJmaXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQ29udGFpbmVyX18zUlpXU1wiLFxuXHRcInByb2ZpbGVOYW1lQm94XCI6IFwiZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUJveF9fMjdvVU1cIixcblx0XCJwcm9maWxlTmFtZVwiOiBcImZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVfXzEtM2tRXCIsXG5cdFwiam9iVGl0bGVcIjogXCJmaXJzdC1zZWN0aW9uX2pvYlRpdGxlX18zUWxjUlwiLFxuXHRcImZsZXhDZW50ZXJcIjogXCJmaXJzdC1zZWN0aW9uX2ZsZXhDZW50ZXJfX09NdklZXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/first-section/first-section.module.scss\n");

/***/ })

})