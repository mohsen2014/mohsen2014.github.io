webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/first-section/first-section.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/first-section/first-section.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".first-section_section__3JxGt, .first-section_profileNameContainer__3RZWS {\\n  display: flex; }\\n\\n.first-section_profileNameContainer__3RZWS .first-section_profileNameBox__27oUM .first-section_profileName__1-3kQ {\\n  text-transform: uppercase; }\\n\\n.first-section_profileNameContainer__3RZWS .first-section_jobTitle__3QlcR {\\n  text-transform: capitalize; }\\n\\n.first-section_section__3JxGt {\\n  min-height: 100vh;\\n  width: 100%; }\\n\\n.first-section_section__3JxGt {\\n  min-height: 100%; }\\n\\n.first-section_firstSectionBackground__eocRo {\\n  background-image: url(\\\"https://picsum.photos/id/100/1600?blur=2\\\");\\n  background-repeat: no-repeat; }\\n  .first-section_firstSectionBackground__eocRo:after {\\n    background: rgba(0, 0, 0, 0.6); }\\n\\n.first-section_flexCenter__OMvIY {\\n  align-items: center;\\n  justify-content: center; }\\n\\n.first-section_profileNameContainer__3RZWS {\\n  flex-direction: column;\\n  flex-wrap: wrap;\\n  align-content: center;\\n  margin-top: -3em;\\n  width: 100%; }\\n  .first-section_profileNameContainer__3RZWS .first-section_profileNameBox__27oUM {\\n    padding: 3em; }\\n    .first-section_profileNameContainer__3RZWS .first-section_profileNameBox__27oUM .first-section_profileName__1-3kQ {\\n      letter-spacing: 0.9em;\\n      font-size: x-large;\\n      white-space: nowrap;\\n      font-weight: bolder; }\\n  .first-section_profileNameContainer__3RZWS .first-section_jobTitle__3QlcR {\\n    letter-spacing: 0.1em;\\n    font-size: large;\\n    justify-content: center;\\n    margin-top: -1em;\\n    padding-right: .4em;\\n    padding-left: .4em;\\n    font-weight: bold; }\\n\", \"\",{\"version\":3,\"sources\":[\"/home/mohsen/projects/me.github.io/components/first-section/first-section.module.scss\",\"/home/mohsen/projects/me.github.io/styles/_helper.scss\"],\"names\":[],\"mappings\":\"AAWA;ECVI,aAAa,EAAA;;ADyBjB;ECtBI,yBAAyB,EAAA;;ADsB7B;ECnBI,0BAA0B,EAAA;;ADI9B;ECEI,iBAAiB;EACjB,WAAW,EAAA;;ADHf;EAFI,gBAIkB,EAAA;;AAEtB;EACG,iEAAiE;EACjE,4BAA4B,EAAA;EAF/B;IAII,8BAAgC,EAAA;;AAGpC;EACI,mBAAmB;EACnB,uBAAuB,EAAA;;AAE3B;EAEI,sBAAsB;EACtB,eAAe;EACf,qBAAqB;EACrB,gBAAgB;EAChB,WAAW,EAAA;EANf;IAQQ,YAAY,EAAA;IARpB;MAtBI,qBAkCoC;MAjCpC,kBAiC6C;MACrC,mBAAmB;MACnB,mBAAmB,EAAA;EAd/B;IAtBI,qBAyCgC;IAxChC,gBAwCuC;IACnC,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB,EAAA\",\"file\":\"first-section.module.scss\",\"sourcesContent\":[\"@import \\\"../../styles/variables\\\";\\n@import \\\"../../styles/helper\\\";\\n\\n@mixin textProfileBox($spacing, $size) {\\n    letter-spacing: $spacing;\\n    font-size: $size;\\n}\\n@mixin view($height:100%) {\\n    @extend %viewSize;\\n    min-height: $height;\\n}\\n.section{\\n    @extend %flexContainer;\\n    @include view(100%);\\n}\\n.firstSectionBackground{\\n   background-image: url('https://picsum.photos/id/100/1600?blur=2');\\n   background-repeat: no-repeat;\\n   &:after{\\n    background: rgba($color: #000000, $alpha: 0.6)\\n   }\\n}\\n.flexCenter{\\n    align-items: center;\\n    justify-content: center;\\n}\\n.profileNameContainer{\\n    @extend %flexContainer;\\n    flex-direction: column;\\n    flex-wrap: wrap;\\n    align-content: center;\\n    margin-top: -3em;\\n    width: 100%;\\n    .profileNameBox{\\n        padding: 3em;\\n\\n        .profileName{\\n            @extend %textUpperCase;\\n            @include textProfileBox(.9em, x-large);\\n            white-space: nowrap;\\n            font-weight: bolder;\\n        }\\n    }\\n    .jobTitle{\\n        @extend %textCapitalize;\\n        @include textProfileBox(.1em, large);\\n        justify-content: center;\\n        margin-top: -1em;\\n        padding-right: .4em;\\n        padding-left: .4em;\\n        font-weight: bold;\\n    }\\n}\\n\",\"%flexContainer{\\n    display: flex;\\n}\\n%textUpperCase{\\n    text-transform: uppercase;\\n}\\n%textCapitalize{\\n    text-transform: capitalize;\\n}\\n%sectionImage{\\n    position: sticky;\\n}\\n%viewSize{\\n    min-height: 100vh;\\n    width: 100%;\\n}\"]}]);\n// Exports\nexports.locals = {\n\t\"section\": \"first-section_section__3JxGt\",\n\t\"profileNameContainer\": \"first-section_profileNameContainer__3RZWS\",\n\t\"profileNameBox\": \"first-section_profileNameBox__27oUM\",\n\t\"profileName\": \"first-section_profileName__1-3kQ\",\n\t\"jobTitle\": \"first-section_jobTitle__3QlcR\",\n\t\"firstSectionBackground\": \"first-section_firstSectionBackground__eocRo\",\n\t\"flexCenter\": \"first-section_flexCenter__OMvIY\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZpcnN0LXNlY3Rpb24vZmlyc3Qtc2VjdGlvbi5tb2R1bGUuc2Nzcz9mNDRmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsOEVBQThFLGtCQUFrQixFQUFFLHVIQUF1SCw4QkFBOEIsRUFBRSwrRUFBK0UsK0JBQStCLEVBQUUsbUNBQW1DLHNCQUFzQixnQkFBZ0IsRUFBRSxtQ0FBbUMscUJBQXFCLEVBQUUsa0RBQWtELHdFQUF3RSxpQ0FBaUMsRUFBRSx3REFBd0QscUNBQXFDLEVBQUUsc0NBQXNDLHdCQUF3Qiw0QkFBNEIsRUFBRSxnREFBZ0QsMkJBQTJCLG9CQUFvQiwwQkFBMEIscUJBQXFCLGdCQUFnQixFQUFFLHFGQUFxRixtQkFBbUIsRUFBRSx5SEFBeUgsOEJBQThCLDJCQUEyQiw0QkFBNEIsNEJBQTRCLEVBQUUsK0VBQStFLDRCQUE0Qix1QkFBdUIsOEJBQThCLHVCQUF1QiwwQkFBMEIseUJBQXlCLHdCQUF3QixFQUFFLFNBQVMscU1BQXFNLGdCQUFnQixPQUFPLG1CQUFtQixPQUFPLG1CQUFtQixNQUFNLFlBQVksaUJBQWlCLEtBQUssa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsZ0JBQWdCLEtBQUssZUFBZSxNQUFNLGNBQWMsZUFBZSxhQUFhLGtCQUFrQixNQUFNLGNBQWMsZUFBZSxhQUFhLGFBQWEsYUFBYSxhQUFhLDRHQUE0RyxrQ0FBa0MsNENBQTRDLCtCQUErQix1QkFBdUIsR0FBRyw2QkFBNkIsd0JBQXdCLDBCQUEwQixHQUFHLFdBQVcsNkJBQTZCLDBCQUEwQixHQUFHLDBCQUEwQix1RUFBdUUsa0NBQWtDLGFBQWEsMERBQTBELEdBQUcsY0FBYywwQkFBMEIsOEJBQThCLEdBQUcsd0JBQXdCLDZCQUE2Qiw2QkFBNkIsc0JBQXNCLDRCQUE0Qix1QkFBdUIsa0JBQWtCLHNCQUFzQix1QkFBdUIseUJBQXlCLHFDQUFxQyxxREFBcUQsa0NBQWtDLGtDQUFrQyxXQUFXLE9BQU8sZ0JBQWdCLGtDQUFrQywrQ0FBK0Msa0NBQWtDLDJCQUEyQiw4QkFBOEIsNkJBQTZCLDRCQUE0QixPQUFPLEdBQUcsb0JBQW9CLG9CQUFvQixHQUFHLGlCQUFpQixnQ0FBZ0MsR0FBRyxrQkFBa0IsaUNBQWlDLEdBQUcsZ0JBQWdCLHVCQUF1QixHQUFHLFlBQVksd0JBQXdCLGtCQUFrQixHQUFHLEdBQUc7QUFDcHpIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL2NvbXBvbmVudHMvZmlyc3Qtc2VjdGlvbi9maXJzdC1zZWN0aW9uLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZpcnN0LXNlY3Rpb25fc2VjdGlvbl9fM0p4R3QsIC5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQ29udGFpbmVyX18zUlpXUyB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVDb250YWluZXJfXzNSWldTIC5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQm94X18yN29VTSAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZV9fMS0za1Ege1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQ29udGFpbmVyX18zUlpXUyAuZmlyc3Qtc2VjdGlvbl9qb2JUaXRsZV9fM1FsY1Ige1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cXG5cXG4uZmlyc3Qtc2VjdGlvbl9zZWN0aW9uX18zSnhHdCB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmZpcnN0LXNlY3Rpb25fc2VjdGlvbl9fM0p4R3Qge1xcbiAgbWluLWhlaWdodDogMTAwJTsgfVxcblxcbi5maXJzdC1zZWN0aW9uX2ZpcnN0U2VjdGlvbkJhY2tncm91bmRfX2VvY1JvIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzEwMC8xNjAwP2JsdXI9MlxcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgfVxcbiAgLmZpcnN0LXNlY3Rpb25fZmlyc3RTZWN0aW9uQmFja2dyb3VuZF9fZW9jUm86YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7IH1cXG5cXG4uZmlyc3Qtc2VjdGlvbl9mbGV4Q2VudGVyX19PTXZJWSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUNvbnRhaW5lcl9fM1JaV1Mge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IC0zZW07XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVDb250YWluZXJfXzNSWldTIC5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQm94X18yN29VTSB7XFxuICAgIHBhZGRpbmc6IDNlbTsgfVxcbiAgICAuZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUNvbnRhaW5lcl9fM1JaV1MgLmZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVCb3hfXzI3b1VNIC5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lX18xLTNrUSB7XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuOWVtO1xcbiAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7IH1cXG4gIC5maXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lQ29udGFpbmVyX18zUlpXUyAuZmlyc3Qtc2VjdGlvbl9qb2JUaXRsZV9fM1FsY1Ige1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAtMWVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNGVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IC40ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvbW9oc2VuL3Byb2plY3RzL21lLmdpdGh1Yi5pby9jb21wb25lbnRzL2ZpcnN0LXNlY3Rpb24vZmlyc3Qtc2VjdGlvbi5tb2R1bGUuc2Nzc1wiLFwiL2hvbWUvbW9oc2VuL3Byb2plY3RzL21lLmdpdGh1Yi5pby9zdHlsZXMvX2hlbHBlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVdBO0VDVkksYUFBYSxFQUFBOztBRHlCakI7RUN0QkkseUJBQXlCLEVBQUE7O0FEc0I3QjtFQ25CSSwwQkFBMEIsRUFBQTs7QURJOUI7RUNFSSxpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBREhmO0VBRkksZ0JBSWtCLEVBQUE7O0FBRXRCO0VBQ0csaUVBQWlFO0VBQ2pFLDRCQUE0QixFQUFBO0VBRi9CO0lBSUksOEJBQWdDLEVBQUE7O0FBR3BDO0VBQ0ksbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUUzQjtFQUVJLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7RUFOZjtJQVFRLFlBQVksRUFBQTtJQVJwQjtNQXRCSSxxQkFrQ29DO01BakNwQyxrQkFpQzZDO01BQ3JDLG1CQUFtQjtNQUNuQixtQkFBbUIsRUFBQTtFQWQvQjtJQXRCSSxxQkF5Q2dDO0lBeENoQyxnQkF3Q3VDO0lBQ25DLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQVwiLFwiZmlsZVwiOlwiZmlyc3Qtc2VjdGlvbi5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzXFxcIjtcXG5AaW1wb3J0IFxcXCIuLi8uLi9zdHlsZXMvaGVscGVyXFxcIjtcXG5cXG5AbWl4aW4gdGV4dFByb2ZpbGVCb3goJHNwYWNpbmcsICRzaXplKSB7XFxuICAgIGxldHRlci1zcGFjaW5nOiAkc3BhY2luZztcXG4gICAgZm9udC1zaXplOiAkc2l6ZTtcXG59XFxuQG1peGluIHZpZXcoJGhlaWdodDoxMDAlKSB7XFxuICAgIEBleHRlbmQgJXZpZXdTaXplO1xcbiAgICBtaW4taGVpZ2h0OiAkaGVpZ2h0O1xcbn1cXG4uc2VjdGlvbntcXG4gICAgQGV4dGVuZCAlZmxleENvbnRhaW5lcjtcXG4gICAgQGluY2x1ZGUgdmlldygxMDAlKTtcXG59XFxuLmZpcnN0U2VjdGlvbkJhY2tncm91bmR7XFxuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3BpY3N1bS5waG90b3MvaWQvMTAwLzE2MDA/Ymx1cj0yJyk7XFxuICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAmOmFmdGVye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjYpXFxuICAgfVxcbn1cXG4uZmxleENlbnRlcntcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5wcm9maWxlTmFtZUNvbnRhaW5lcntcXG4gICAgQGV4dGVuZCAlZmxleENvbnRhaW5lcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC0zZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAucHJvZmlsZU5hbWVCb3h7XFxuICAgICAgICBwYWRkaW5nOiAzZW07XFxuXFxuICAgICAgICAucHJvZmlsZU5hbWV7XFxuICAgICAgICAgICAgQGV4dGVuZCAldGV4dFVwcGVyQ2FzZTtcXG4gICAgICAgICAgICBAaW5jbHVkZSB0ZXh0UHJvZmlsZUJveCguOWVtLCB4LWxhcmdlKTtcXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLmpvYlRpdGxle1xcbiAgICAgICAgQGV4dGVuZCAldGV4dENhcGl0YWxpemU7XFxuICAgICAgICBAaW5jbHVkZSB0ZXh0UHJvZmlsZUJveCguMWVtLCBsYXJnZSk7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IC0xZW07XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAuNGVtO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAuNGVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG59XFxuXCIsXCIlZmxleENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuJXRleHRVcHBlckNhc2V7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbiV0ZXh0Q2FwaXRhbGl6ZXtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcbiVzZWN0aW9uSW1hZ2V7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxufVxcbiV2aWV3U2l6ZXtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJzZWN0aW9uXCI6IFwiZmlyc3Qtc2VjdGlvbl9zZWN0aW9uX18zSnhHdFwiLFxuXHRcInByb2ZpbGVOYW1lQ29udGFpbmVyXCI6IFwiZmlyc3Qtc2VjdGlvbl9wcm9maWxlTmFtZUNvbnRhaW5lcl9fM1JaV1NcIixcblx0XCJwcm9maWxlTmFtZUJveFwiOiBcImZpcnN0LXNlY3Rpb25fcHJvZmlsZU5hbWVCb3hfXzI3b1VNXCIsXG5cdFwicHJvZmlsZU5hbWVcIjogXCJmaXJzdC1zZWN0aW9uX3Byb2ZpbGVOYW1lX18xLTNrUVwiLFxuXHRcImpvYlRpdGxlXCI6IFwiZmlyc3Qtc2VjdGlvbl9qb2JUaXRsZV9fM1FsY1JcIixcblx0XCJmaXJzdFNlY3Rpb25CYWNrZ3JvdW5kXCI6IFwiZmlyc3Qtc2VjdGlvbl9maXJzdFNlY3Rpb25CYWNrZ3JvdW5kX19lb2NSb1wiLFxuXHRcImZsZXhDZW50ZXJcIjogXCJmaXJzdC1zZWN0aW9uX2ZsZXhDZW50ZXJfX09NdklZXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/first-section/first-section.module.scss\n");

/***/ })

})