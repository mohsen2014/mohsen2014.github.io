webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/global.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/global.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400|Poppins:400);\"]);\n// Module\nexports.push([module.i, \"html {\\n  font-size: 100%; }\\n\\n/*16px*/\\nbody {\\n  background-color: #fdfdfa;\\n  font-family: 'Poppins', sans-serif;\\n  font-weight: 400;\\n  line-height: 1.65;\\n  color: #333; }\\n\\np {\\n  margin-bottom: 1.15rem; }\\n\\nh1, h2, h3, h4, h5 {\\n  margin: 2.75rem 0 1.05rem;\\n  font-family: 'Open Sans', sans-serif;\\n  font-weight: 400;\\n  line-height: 1.15; }\\n\\nh1 {\\n  margin-top: 0;\\n  font-size: 3.052em; }\\n\\nh2 {\\n  font-size: 2.441em; }\\n\\nh3 {\\n  font-size: 1.953em; }\\n\\nh4 {\\n  font-size: 1.563em; }\\n\\nh5 {\\n  font-size: 1.25em; }\\n\\nsmall, .text_small {\\n  font-size: 0.8em; }\\n\\n@media (max-width: 600px) {\\n  .container {\\n    width: 600px;\\n    padding: 0.1em; } }\\n\\n@media (min-width: 600px) {\\n  .container {\\n    padding: .3em;\\n    width: 600px; } }\\n\\n@media (min-width: 768px) {\\n  .container {\\n    padding: .3em;\\n    width: 768px; } }\\n\\n@media (min-width: 992px) {\\n  .container {\\n    padding: .3em;\\n    width: 992px; } }\\n\\n@media (min-width: 1200px) {\\n  .container {\\n    padding: .3em;\\n    width: 1200px; } }\\n\", \"\",{\"version\":3,\"sources\":[\"/home/mohsen/projects/me.github.io/styles/global.scss\",\"/home/mohsen/projects/me.github.io/styles/_variables.scss\"],\"names\":[],\"mappings\":\"AAGA;EAAM,eAAe,EAAA;;AAAG,OAAA;AAExB;EACE,yBCLmB;EDMnB,kCAAkC;EAClC,gBAAgB;EAChB,iBAAiB;EACjB,WAAW,EAAA;;AAGb;EAAG,sBAAsB,EAAA;;AAEzB;EACE,yBAAyB;EACzB,oCAAoC;EACpC,gBAAgB;EAChB,iBAAiB,EAAA;;AAGnB;EACE,aAAa;EACb,kBAAkB,EAAA;;AAGpB;EAAI,kBAAkB,EAAA;;AAEtB;EAAI,kBAAkB,EAAA;;AAEtB;EAAI,kBAAkB,EAAA;;AAEtB;EAAI,iBAAiB,EAAA;;AAErB;EAAoB,gBAAgB,EAAA;;AAGlC;EADF;IAEI,YCnCU;IDoCV,cAAc,EAAA,EAQjB;;AALG;EANJ;IAOM,aAAa;IACb,YCzCQ,EAAA,ED4Cb;;AALG;EANJ;IAOM,aAAa;IACb,YCxCQ,EAAA,ED2Cb;;AALG;EANJ;IAOM,aAAa;IACb,YCvCQ,EAAA,ED0Cb;;AALG;EANJ;IAOM,aAAa;IACb,aCtCS,EAAA,EDyCd\",\"file\":\"global.scss\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css?family=Open+Sans:400|Poppins:400');\\n@import \\\"variables\\\";\\n\\nhtml {font-size: 100%;} /*16px*/\\n\\nbody {\\n  background-color: $white-color;\\n  font-family: 'Poppins', sans-serif;\\n  font-weight: 400;\\n  line-height: 1.65;\\n  color: #333;\\n}\\n\\np {margin-bottom: 1.15rem;}\\n\\nh1, h2, h3, h4, h5 {\\n  margin: 2.75rem 0 1.05rem;\\n  font-family: 'Open Sans', sans-serif;\\n  font-weight: 400;\\n  line-height: 1.15;\\n}\\n\\nh1 {\\n  margin-top: 0;\\n  font-size: 3.052em;\\n}\\n\\nh2 {font-size: 2.441em;}\\n\\nh3 {font-size: 1.953em;}\\n\\nh4 {font-size: 1.563em;}\\n\\nh5 {font-size: 1.25em;}\\n\\nsmall, .text_small {font-size: 0.8em;}\\n\\n.container{\\n  @media (max-width: map-get($breakpoints,'sm')) {\\n    width: map-get($breakpoints,'sm');\\n    padding: 0.1em;\\n  }\\n  @each $breakpoint, $value in $breakpoints {\\n    @media (min-width: $value) {\\n      padding: .3em;\\n      width: $value;\\n    }\\n  }\\n}\",\"$base-color: darken(yellow,10);\\n$white-color: #fdfdfa;\\n\\n$breakpoints : (\\n    \\\"sm\\\":600px,\\n    \\\"md\\\":768px,\\n    \\\"lg\\\":992px,\\n    \\\"xl\\\":1200px,\\n)\\n\"]}]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvZ2xvYmFsLnNjc3M/ODYyNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBLGNBQWMsUUFBUyxrRkFBa0Y7QUFDekc7QUFDQSxjQUFjLFFBQVMsU0FBUyxvQkFBb0IsRUFBRSxvQkFBb0IsOEJBQThCLHVDQUF1QyxxQkFBcUIsc0JBQXNCLGdCQUFnQixFQUFFLE9BQU8sMkJBQTJCLEVBQUUsd0JBQXdCLDhCQUE4Qix5Q0FBeUMscUJBQXFCLHNCQUFzQixFQUFFLFFBQVEsa0JBQWtCLHVCQUF1QixFQUFFLFFBQVEsdUJBQXVCLEVBQUUsUUFBUSx1QkFBdUIsRUFBRSxRQUFRLHVCQUF1QixFQUFFLFFBQVEsc0JBQXNCLEVBQUUsd0JBQXdCLHFCQUFxQixFQUFFLCtCQUErQixnQkFBZ0IsbUJBQW1CLHFCQUFxQixFQUFFLEVBQUUsK0JBQStCLGdCQUFnQixvQkFBb0IsbUJBQW1CLEVBQUUsRUFBRSwrQkFBK0IsZ0JBQWdCLG9CQUFvQixtQkFBbUIsRUFBRSxFQUFFLCtCQUErQixnQkFBZ0Isb0JBQW9CLG1CQUFtQixFQUFFLEVBQUUsZ0NBQWdDLGdCQUFnQixvQkFBb0Isb0JBQW9CLEVBQUUsRUFBRSxTQUFTLHdLQUF3SyxnQkFBZ0IsVUFBVSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsaUJBQWlCLEtBQUssa0JBQWtCLE1BQU0sWUFBWSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxtQkFBbUIsTUFBTSxLQUFLLFdBQVcsdUJBQXVCLEtBQUssS0FBSyxVQUFVLHVCQUF1QixLQUFLLEtBQUssVUFBVSx1QkFBdUIsS0FBSyxLQUFLLFVBQVUsdUJBQXVCLEtBQUssS0FBSyxVQUFVLGdKQUFnSix3QkFBd0IsVUFBVSxpQkFBaUIsbUJBQW1CLG1DQUFtQyx1Q0FBdUMscUJBQXFCLHNCQUFzQixnQkFBZ0IsR0FBRyxPQUFPLHdCQUF3Qix3QkFBd0IsOEJBQThCLHlDQUF5QyxxQkFBcUIsc0JBQXNCLEdBQUcsUUFBUSxrQkFBa0IsdUJBQXVCLEdBQUcsUUFBUSxvQkFBb0IsUUFBUSxvQkFBb0IsUUFBUSxvQkFBb0IsUUFBUSxtQkFBbUIsd0JBQXdCLGtCQUFrQixlQUFlLG9EQUFvRCx3Q0FBd0MscUJBQXFCLEtBQUssK0NBQStDLGtDQUFrQyxzQkFBc0Isc0JBQXNCLE9BQU8sS0FBSyxHQUFHLGtDQUFrQyx3QkFBd0IseUdBQXlHO0FBQ3ozRjtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9zdHlsZXMvZ2xvYmFsLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDB8UG9wcGluczo0MDApO1wiXSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgZm9udC1zaXplOiAxMDAlOyB9XFxuXFxuLyoxNnB4Ki9cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmE7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY1O1xcbiAgY29sb3I6ICMzMzM7IH1cXG5cXG5wIHtcXG4gIG1hcmdpbi1ib3R0b206IDEuMTVyZW07IH1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUge1xcbiAgbWFyZ2luOiAyLjc1cmVtIDAgMS4wNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgfVxcblxcbmgxIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBmb250LXNpemU6IDMuMDUyZW07IH1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDIuNDQxZW07IH1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDEuOTUzZW07IH1cXG5cXG5oNCB7XFxuICBmb250LXNpemU6IDEuNTYzZW07IH1cXG5cXG5oNSB7XFxuICBmb250LXNpemU6IDEuMjVlbTsgfVxcblxcbnNtYWxsLCAudGV4dF9zbWFsbCB7XFxuICBmb250LXNpemU6IDAuOGVtOyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBwYWRkaW5nOiAwLjFlbTsgfSB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogLjNlbTtcXG4gICAgd2lkdGg6IDYwMHB4OyB9IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAuM2VtO1xcbiAgICB3aWR0aDogNzY4cHg7IH0gfVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IC4zZW07XFxuICAgIHdpZHRoOiA5OTJweDsgfSB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IC4zZW07XFxuICAgIHdpZHRoOiAxMjAwcHg7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL21vaHNlbi9wcm9qZWN0cy9tZS5naXRodWIuaW8vc3R5bGVzL2dsb2JhbC5zY3NzXCIsXCIvaG9tZS9tb2hzZW4vcHJvamVjdHMvbWUuZ2l0aHViLmlvL3N0eWxlcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFBTSxlQUFlLEVBQUE7O0FBQUcsT0FBQTtBQUV4QjtFQUNFLHlCQ0xtQjtFRE1uQixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2I7RUFBRyxzQkFBc0IsRUFBQTs7QUFFekI7RUFDRSx5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBR3BCO0VBQUksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQUksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQUksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQUksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQW9CLGdCQUFnQixFQUFBOztBQUdsQztFQURGO0lBRUksWUNuQ1U7SURvQ1YsY0FBYyxFQUFBLEVBUWpCOztBQUxHO0VBTko7SUFPTSxhQUFhO0lBQ2IsWUN6Q1EsRUFBQSxFRDRDYjs7QUFMRztFQU5KO0lBT00sYUFBYTtJQUNiLFlDeENRLEVBQUEsRUQyQ2I7O0FBTEc7RUFOSjtJQU9NLGFBQWE7SUFDYixZQ3ZDUSxFQUFBLEVEMENiOztBQUxHO0VBTko7SUFPTSxhQUFhO0lBQ2IsYUN0Q1MsRUFBQSxFRHlDZFwiLFwiZmlsZVwiOlwiZ2xvYmFsLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwfFBvcHBpbnM6NDAwJyk7XFxuQGltcG9ydCBcXFwidmFyaWFibGVzXFxcIjtcXG5cXG5odG1sIHtmb250LXNpemU6IDEwMCU7fSAvKjE2cHgqL1xcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWNvbG9yO1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMS42NTtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG5wIHttYXJnaW4tYm90dG9tOiAxLjE1cmVtO31cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUge1xcbiAgbWFyZ2luOiAyLjc1cmVtIDAgMS4wNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG59XFxuXFxuaDEge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGZvbnQtc2l6ZTogMy4wNTJlbTtcXG59XFxuXFxuaDIge2ZvbnQtc2l6ZTogMi40NDFlbTt9XFxuXFxuaDMge2ZvbnQtc2l6ZTogMS45NTNlbTt9XFxuXFxuaDQge2ZvbnQtc2l6ZTogMS41NjNlbTt9XFxuXFxuaDUge2ZvbnQtc2l6ZTogMS4yNWVtO31cXG5cXG5zbWFsbCwgLnRleHRfc21hbGwge2ZvbnQtc2l6ZTogMC44ZW07fVxcblxcbi5jb250YWluZXJ7XFxuICBAbWVkaWEgKG1heC13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsJ3NtJykpIHtcXG4gICAgd2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCdzbScpO1xcbiAgICBwYWRkaW5nOiAwLjFlbTtcXG4gIH1cXG4gIEBlYWNoICRicmVha3BvaW50LCAkdmFsdWUgaW4gJGJyZWFrcG9pbnRzIHtcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICR2YWx1ZSkge1xcbiAgICAgIHBhZGRpbmc6IC4zZW07XFxuICAgICAgd2lkdGg6ICR2YWx1ZTtcXG4gICAgfVxcbiAgfVxcbn1cIixcIiRiYXNlLWNvbG9yOiBkYXJrZW4oeWVsbG93LDEwKTtcXG4kd2hpdGUtY29sb3I6ICNmZGZkZmE7XFxuXFxuJGJyZWFrcG9pbnRzIDogKFxcbiAgICBcXFwic21cXFwiOjYwMHB4LFxcbiAgICBcXFwibWRcXFwiOjc2OHB4LFxcbiAgICBcXFwibGdcXFwiOjk5MnB4LFxcbiAgICBcXFwieGxcXFwiOjEyMDBweCxcXG4pXFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/global.scss\n");

/***/ })

})