/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[10].use[4]!./src/components/Game/GameContainer/GameControls/MultiplierControl/MultiplierControl.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[10].use[4]!./src/components/Game/GameContainer/GameControls/MultiplierControl/MultiplierControl.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".MultiplierControl_control__wQ2IA {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  background: linear-gradient(89deg, rgb(26, 34, 51) 0%, rgb(36, 44, 58) 99%);\\n  margin-top: 3px;\\n  border-radius: 10px;\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\\n  border: 1px solid rgb(88, 88, 88);\\n}\\n.MultiplierControl_control__wQ2IA span {\\n  font-size: small;\\n  margin-bottom: 0.2rem;\\n  color: #bbbcc1;\\n  font-weight: 500;\\n}\\n.MultiplierControl_control__wQ2IA .MultiplierControl_controlInner__Dr_WN {\\n  display: flex;\\n  align-items: center;\\n}\\n.MultiplierControl_control__wQ2IA .MultiplierControl_controlInner__Dr_WN input {\\n  width: 6rem;\\n  padding: 0.5rem;\\n  margin: 0 0.5rem;\\n  border-radius: 10px;\\n  border: none;\\n  text-align: center;\\n  background-color: #101417;\\n  color: #fff;\\n  font-size: larger;\\n}\\n.MultiplierControl_control__wQ2IA .MultiplierControl_controlInner__Dr_WN button {\\n  padding: 0.5rem;\\n  border-radius: 10px;\\n  border: 1px solid #ccc;\\n  background-color: #101417;\\n  color: #fff;\\n  cursor: pointer;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.MultiplierControl_control__wQ2IA .MultiplierControl_controlInner__Dr_WN button:hover {\\n  background-color: #252e35;\\n}\\n.MultiplierControl_control__wQ2IA .MultiplierControl_controlInner__Dr_WN button svg {\\n  width: 1rem;\\n  height: 1rem;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/components/Game/GameContainer/GameControls/MultiplierControl/MultiplierControl.module.scss\",\"webpack://src/styles/variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,2ECFS;EDKT,eAAA;EAEA,mBCJc;EDKd,wCAAA;EACA,iCAAA;AAJF;AAME;EACE,gBAAA;EACA,qBAAA;EACA,cAAA;EACA,gBAAA;AAJJ;AAOE;EACE,aAAA;EACA,mBAAA;AALJ;AAOI;EACE,WAAA;EACA,eAAA;EACA,gBAAA;EACA,mBCvBU;EDwBV,YAAA;EACA,kBAAA;EACA,yBC5Ba;ED6Bb,WCjCO;EDkCP,iBAAA;AALN;AAQI;EACE,eAAA;EACA,mBAAA;EACA,sBAAA;EACA,yBCrCa;EDsCb,WC1CO;ED2CP,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AANN;AAQM;EACE,yBAAA;AANR;AASM;EACE,WAAA;EACA,YAAA;AAPR\",\"sourcesContent\":[\"@import \\\"../../../../../styles/variables.scss\\\";\\r\\n\\r\\n.control {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  background: $inputDiv;\\r\\n  // padding: 5px;\\r\\n  // width: 40%;\\r\\n  margin-top: 3px;\\r\\n\\r\\n  border-radius: $border-radius;\\r\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\\r\\n  border: 1px solid rgb(88, 88, 88);\\r\\n\\r\\n  span {\\r\\n    font-size: small;\\r\\n    margin-bottom: 0.2rem;\\r\\n    color: #bbbcc1;\\r\\n    font-weight: 500;\\r\\n  }\\r\\n\\r\\n  .controlInner {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n\\r\\n    input {\\r\\n      width: 6rem;\\r\\n      padding: 0.5rem;\\r\\n      margin: 0 0.5rem;\\r\\n      border-radius: $border-radius;\\r\\n      border: none;\\r\\n      text-align: center;\\r\\n      background-color: $input-background;\\r\\n      color: $text-color;\\r\\n      font-size: larger;\\r\\n    }\\r\\n\\r\\n    button {\\r\\n      padding: 0.5rem;\\r\\n      border-radius: 10px;\\r\\n      border: 1px solid $input-border;\\r\\n      background-color: $input-background;\\r\\n      color: $text-color;\\r\\n      cursor: pointer;\\r\\n      display: flex;\\r\\n      align-items: center;\\r\\n      justify-content: center;\\r\\n\\r\\n      &:hover {\\r\\n        background-color: lighten($input-background, 10%);\\r\\n      }\\r\\n\\r\\n      svg {\\r\\n        width: 1rem;\\r\\n        height: 1rem;\\r\\n      }\\r\\n    }\\r\\n  }\\r\\n}\\r\\n\",\"$background-color: #151a22;\\r\\n$text-color: #fff;\\r\\n$button-background: #ff6b6b;\\r\\n$button-hover-background: #ff4949;\\r\\n$inputDiv: linear-gradient(89deg, rgb(26 34 51) 0%, rgb(36 44 58) 99%);\\r\\n$input-background: #101417;\\r\\n$header-background: #141414;\\r\\n$border-radius: 10px;\\r\\n$input-border: #ccc;\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"control\": \"MultiplierControl_control__wQ2IA\",\n\t\"controlInner\": \"MultiplierControl_controlInner__Dr_WN\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxMF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzEwXS51c2VbMl0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbMTBdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzEwXS51c2VbNF0hLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWVDb250YWluZXIvR2FtZUNvbnRyb2xzL011bHRpcGxpZXJDb250cm9sL011bHRpcGxpZXJDb250cm9sLm1vZHVsZS5zY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsa0xBQThGO0FBQ3hJO0FBQ0E7QUFDQSw2RUFBNkUsa0JBQWtCLDJCQUEyQix3QkFBd0IsZ0ZBQWdGLG9CQUFvQix3QkFBd0IsNkNBQTZDLHNDQUFzQyxHQUFHLDBDQUEwQyxxQkFBcUIsMEJBQTBCLG1CQUFtQixxQkFBcUIsR0FBRyw0RUFBNEUsa0JBQWtCLHdCQUF3QixHQUFHLGtGQUFrRixnQkFBZ0Isb0JBQW9CLHFCQUFxQix3QkFBd0IsaUJBQWlCLHVCQUF1Qiw4QkFBOEIsZ0JBQWdCLHNCQUFzQixHQUFHLG1GQUFtRixvQkFBb0Isd0JBQXdCLDJCQUEyQiw4QkFBOEIsZ0JBQWdCLG9CQUFvQixrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLHlGQUF5Riw4QkFBOEIsR0FBRyx1RkFBdUYsZ0JBQWdCLGlCQUFpQixHQUFHLE9BQU8scU1BQXFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLFlBQVksWUFBWSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSwwRUFBMEUsa0JBQWtCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDRCQUE0QixzQkFBc0Isb0JBQW9CLHNCQUFzQix3Q0FBd0MsK0NBQStDLHdDQUF3QyxnQkFBZ0IseUJBQXlCLDhCQUE4Qix1QkFBdUIseUJBQXlCLE9BQU8seUJBQXlCLHNCQUFzQiw0QkFBNEIsbUJBQW1CLHNCQUFzQiwwQkFBMEIsMkJBQTJCLHdDQUF3Qyx1QkFBdUIsNkJBQTZCLDhDQUE4Qyw2QkFBNkIsNEJBQTRCLFNBQVMsb0JBQW9CLDBCQUEwQiw4QkFBOEIsMENBQTBDLDhDQUE4Qyw2QkFBNkIsMEJBQTBCLHdCQUF3Qiw4QkFBOEIsa0NBQWtDLHVCQUF1Qiw4REFBOEQsV0FBVyxtQkFBbUIsd0JBQXdCLHlCQUF5QixXQUFXLFNBQVMsT0FBTyxLQUFLLGtDQUFrQyxzQkFBc0IsZ0NBQWdDLHNDQUFzQywyRUFBMkUsK0JBQStCLGdDQUFnQyx5QkFBeUIsd0JBQXdCLHVCQUF1QjtBQUM5c0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0dhbWUvR2FtZUNvbnRhaW5lci9HYW1lQ29udHJvbHMvTXVsdGlwbGllckNvbnRyb2wvTXVsdGlwbGllckNvbnRyb2wubW9kdWxlLnNjc3M/YzMyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLk11bHRpcGxpZXJDb250cm9sX2NvbnRyb2xfX3dRMklBIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg4OWRlZywgcmdiKDI2LCAzNCwgNTEpIDAlLCByZ2IoMzYsIDQ0LCA1OCkgOTklKTtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDg4LCA4OCwgODgpO1xcbn1cXG4uTXVsdGlwbGllckNvbnRyb2xfY29udHJvbF9fd1EySUEgc3BhbiB7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcbiAgY29sb3I6ICNiYmJjYzE7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4uTXVsdGlwbGllckNvbnRyb2xfY29udHJvbF9fd1EySUEgLk11bHRpcGxpZXJDb250cm9sX2NvbnRyb2xJbm5lcl9fRHJfV04ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5NdWx0aXBsaWVyQ29udHJvbF9jb250cm9sX193UTJJQSAuTXVsdGlwbGllckNvbnRyb2xfY29udHJvbElubmVyX19Ecl9XTiBpbnB1dCB7XFxuICB3aWR0aDogNnJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTQxNztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcbi5NdWx0aXBsaWVyQ29udHJvbF9jb250cm9sX193UTJJQSAuTXVsdGlwbGllckNvbnRyb2xfY29udHJvbElubmVyX19Ecl9XTiBidXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxNDE3O1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uTXVsdGlwbGllckNvbnRyb2xfY29udHJvbF9fd1EySUEgLk11bHRpcGxpZXJDb250cm9sX2NvbnRyb2xJbm5lcl9fRHJfV04gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTJlMzU7XFxufVxcbi5NdWx0aXBsaWVyQ29udHJvbF9jb250cm9sX193UTJJQSAuTXVsdGlwbGllckNvbnRyb2xfY29udHJvbElubmVyX19Ecl9XTiBidXR0b24gc3ZnIHtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2NvbXBvbmVudHMvR2FtZS9HYW1lQ29udGFpbmVyL0dhbWVDb250cm9scy9NdWx0aXBsaWVyQ29udHJvbC9NdWx0aXBsaWVyQ29udHJvbC5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJFQ0ZTO0VES1QsZUFBQTtFQUVBLG1CQ0pjO0VES2Qsd0NBQUE7RUFDQSxpQ0FBQTtBQUpGO0FBTUU7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSko7QUFPRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUxKO0FBT0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJDdkJVO0VEd0JWLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQzVCYTtFRDZCYixXQ2pDTztFRGtDUCxpQkFBQTtBQUxOO0FBUUk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQ3JDYTtFRHNDYixXQzFDTztFRDJDUCxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFOTjtBQVFNO0VBQ0UseUJBQUE7QUFOUjtBQVNNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFQUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcXFwiO1xcclxcblxcclxcbi5jb250cm9sIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICRpbnB1dERpdjtcXHJcXG4gIC8vIHBhZGRpbmc6IDVweDtcXHJcXG4gIC8vIHdpZHRoOiA0MCU7XFxyXFxuICBtYXJnaW4tdG9wOiAzcHg7XFxyXFxuXFxyXFxuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoODgsIDg4LCA4OCk7XFxyXFxuXFxyXFxuICBzcGFuIHtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcclxcbiAgICBjb2xvcjogI2JiYmNjMTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250cm9sSW5uZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBpbnB1dCB7XFxyXFxuICAgICAgd2lkdGg6IDZyZW07XFxyXFxuICAgICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICAgIG1hcmdpbjogMCAwLjVyZW07XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZDtcXHJcXG4gICAgICBjb2xvcjogJHRleHQtY29sb3I7XFxyXFxuICAgICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYnV0dG9uIHtcXHJcXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkaW5wdXQtYm9yZGVyO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kO1xcclxcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkaW5wdXQtYmFja2dyb3VuZCwgMTAlKTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgc3ZnIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxcmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIiRiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxYTIyO1xcclxcbiR0ZXh0LWNvbG9yOiAjZmZmO1xcclxcbiRidXR0b24tYmFja2dyb3VuZDogI2ZmNmI2YjtcXHJcXG4kYnV0dG9uLWhvdmVyLWJhY2tncm91bmQ6ICNmZjQ5NDk7XFxyXFxuJGlucHV0RGl2OiBsaW5lYXItZ3JhZGllbnQoODlkZWcsIHJnYigyNiAzNCA1MSkgMCUsIHJnYigzNiA0NCA1OCkgOTklKTtcXHJcXG4kaW5wdXQtYmFja2dyb3VuZDogIzEwMTQxNztcXHJcXG4kaGVhZGVyLWJhY2tncm91bmQ6ICMxNDE0MTQ7XFxyXFxuJGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuJGlucHV0LWJvcmRlcjogI2NjYztcXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250cm9sXCI6IFwiTXVsdGlwbGllckNvbnRyb2xfY29udHJvbF9fd1EySUFcIixcblx0XCJjb250cm9sSW5uZXJcIjogXCJNdWx0aXBsaWVyQ29udHJvbF9jb250cm9sSW5uZXJfX0RyX1dOXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[10].use[4]!./src/components/Game/GameContainer/GameControls/MultiplierControl/MultiplierControl.module.scss\n"));

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[10].use[4]!./src/components/Game/GameContainer/GameControls/PointsControl/PointsControl.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[10].use[4]!./src/components/Game/GameContainer/GameControls/PointsControl/PointsControl.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".PointsControl_control__IRmev {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  background: linear-gradient(89deg, rgb(26, 34, 51) 0%, rgb(36, 44, 58) 99%);\\n  border: 1px solid rgb(88, 88, 88);\\n  border-radius: 10px;\\n  margin-top: 3px;\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\\n}\\n.PointsControl_control__IRmev span {\\n  font-size: small;\\n  margin-bottom: 0.2rem;\\n  color: #bbbcc1;\\n  font-weight: 500;\\n}\\n.PointsControl_control__IRmev .PointsControl_controlInner__vkbWy {\\n  display: flex;\\n  align-items: center;\\n}\\n.PointsControl_control__IRmev .PointsControl_controlInner__vkbWy input {\\n  width: 6rem;\\n  padding: 0.5rem;\\n  margin: 0 0.5rem;\\n  border-radius: 10px;\\n  border: none;\\n  text-align: center;\\n  background-color: #101417;\\n  color: #fff;\\n  font-size: larger;\\n}\\n.PointsControl_control__IRmev .PointsControl_controlInner__vkbWy button {\\n  padding: 0.5rem;\\n  border-radius: 10px;\\n  border: 1px solid #ccc;\\n  background-color: #101417;\\n  color: #fff;\\n  cursor: pointer;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.PointsControl_control__IRmev .PointsControl_controlInner__vkbWy button:hover {\\n  background-color: #252e35;\\n}\\n.PointsControl_control__IRmev .PointsControl_controlInner__vkbWy button svg {\\n  width: 1rem;\\n  height: 1rem;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/components/Game/GameContainer/GameControls/PointsControl/PointsControl.module.scss\",\"webpack://src/styles/variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,2ECFS;EDGT,iCAAA;EAEA,mBCFc;EDId,eAAA;EACA,wCAAA;AAHF;AAKE;EACE,gBAAA;EACA,qBAAA;EACA,cAAA;EACA,gBAAA;AAHJ;AAME;EACE,aAAA;EACA,mBAAA;AAJJ;AAMI;EACE,WAAA;EACA,eAAA;EACA,gBAAA;EACA,mBCtBU;EDuBV,YAAA;EACA,kBAAA;EACA,yBC3Ba;ED4Bb,WChCO;EDiCP,iBAAA;AAJN;AAOI;EACE,eAAA;EACA,mBAAA;EACA,sBAAA;EACA,yBCpCa;EDqCb,WCzCO;ED0CP,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AALN;AAOM;EACE,yBAAA;AALR;AAQM;EACE,WAAA;EACA,YAAA;AANR\",\"sourcesContent\":[\"@import \\\"../../../../../styles/variables.scss\\\";\\r\\n\\r\\n.control {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  background: $inputDiv;\\r\\n  border: 1px solid rgb(88, 88, 88);\\r\\n  // padding: 5px;\\r\\n  border-radius: $border-radius;\\r\\n  // width: 40%;\\r\\n  margin-top: 3px;\\r\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\\r\\n\\r\\n  span {\\r\\n    font-size: small;\\r\\n    margin-bottom: 0.2rem;\\r\\n    color: #bbbcc1;\\r\\n    font-weight: 500;\\r\\n  }\\r\\n\\r\\n  .controlInner {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n\\r\\n    input {\\r\\n      width: 6rem;\\r\\n      padding: 0.5rem;\\r\\n      margin: 0 0.5rem;\\r\\n      border-radius: $border-radius;\\r\\n      border: none;\\r\\n      text-align: center;\\r\\n      background-color: $input-background;\\r\\n      color: $text-color;\\r\\n      font-size: larger;\\r\\n    }\\r\\n\\r\\n    button {\\r\\n      padding: 0.5rem;\\r\\n      border-radius: 10px;\\r\\n      border: 1px solid $input-border;\\r\\n      background-color: $input-background;\\r\\n      color: $text-color;\\r\\n      cursor: pointer;\\r\\n      display: flex;\\r\\n      align-items: center;\\r\\n      justify-content: center;\\r\\n\\r\\n      &:hover {\\r\\n        background-color: lighten($input-background, 10%);\\r\\n      }\\r\\n\\r\\n      svg {\\r\\n        width: 1rem;\\r\\n        height: 1rem;\\r\\n      }\\r\\n    }\\r\\n  }\\r\\n}\\r\\n\",\"$background-color: #151a22;\\r\\n$text-color: #fff;\\r\\n$button-background: #ff6b6b;\\r\\n$button-hover-background: #ff4949;\\r\\n$inputDiv: linear-gradient(89deg, rgb(26 34 51) 0%, rgb(36 44 58) 99%);\\r\\n$input-background: #101417;\\r\\n$header-background: #141414;\\r\\n$border-radius: 10px;\\r\\n$input-border: #ccc;\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"control\": \"PointsControl_control__IRmev\",\n\t\"controlInner\": \"PointsControl_controlInner__vkbWy\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxMF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzEwXS51c2VbMl0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbMTBdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzEwXS51c2VbNF0hLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWVDb250YWluZXIvR2FtZUNvbnRyb2xzL1BvaW50c0NvbnRyb2wvUG9pbnRzQ29udHJvbC5tb2R1bGUuc2NzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGtMQUE4RjtBQUN4STtBQUNBO0FBQ0EseUVBQXlFLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGdGQUFnRixzQ0FBc0Msd0JBQXdCLG9CQUFvQiw2Q0FBNkMsR0FBRyxzQ0FBc0MscUJBQXFCLDBCQUEwQixtQkFBbUIscUJBQXFCLEdBQUcsb0VBQW9FLGtCQUFrQix3QkFBd0IsR0FBRywwRUFBMEUsZ0JBQWdCLG9CQUFvQixxQkFBcUIsd0JBQXdCLGlCQUFpQix1QkFBdUIsOEJBQThCLGdCQUFnQixzQkFBc0IsR0FBRywyRUFBMkUsb0JBQW9CLHdCQUF3QiwyQkFBMkIsOEJBQThCLGdCQUFnQixvQkFBb0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyxpRkFBaUYsOEJBQThCLEdBQUcsK0VBQStFLGdCQUFnQixpQkFBaUIsR0FBRyxPQUFPLDZMQUE2TCxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsWUFBWSxXQUFXLFdBQVcsWUFBWSxZQUFZLFlBQVksS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsMEVBQTBFLGtCQUFrQixvQkFBb0IsNkJBQTZCLDBCQUEwQiw0QkFBNEIsd0NBQXdDLHNCQUFzQixvQ0FBb0Msb0JBQW9CLHNCQUFzQiwrQ0FBK0MsZ0JBQWdCLHlCQUF5Qiw4QkFBOEIsdUJBQXVCLHlCQUF5QixPQUFPLHlCQUF5QixzQkFBc0IsNEJBQTRCLG1CQUFtQixzQkFBc0IsMEJBQTBCLDJCQUEyQix3Q0FBd0MsdUJBQXVCLDZCQUE2Qiw4Q0FBOEMsNkJBQTZCLDRCQUE0QixTQUFTLG9CQUFvQiwwQkFBMEIsOEJBQThCLDBDQUEwQyw4Q0FBOEMsNkJBQTZCLDBCQUEwQix3QkFBd0IsOEJBQThCLGtDQUFrQyx1QkFBdUIsOERBQThELFdBQVcsbUJBQW1CLHdCQUF3Qix5QkFBeUIsV0FBVyxTQUFTLE9BQU8sS0FBSyxrQ0FBa0Msc0JBQXNCLGdDQUFnQyxzQ0FBc0MsMkVBQTJFLCtCQUErQixnQ0FBZ0MseUJBQXlCLHdCQUF3Qix1QkFBdUI7QUFDbHBIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWVDb250YWluZXIvR2FtZUNvbnRyb2xzL1BvaW50c0NvbnRyb2wvUG9pbnRzQ29udHJvbC5tb2R1bGUuc2Nzcz9mMzIxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuUG9pbnRzQ29udHJvbF9jb250cm9sX19JUm1ldiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoODlkZWcsIHJnYigyNiwgMzQsIDUxKSAwJSwgcmdiKDM2LCA0NCwgNTgpIDk5JSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoODgsIDg4LCA4OCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuLlBvaW50c0NvbnRyb2xfY29udHJvbF9fSVJtZXYgc3BhbiB7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcbiAgY29sb3I6ICNiYmJjYzE7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4uUG9pbnRzQ29udHJvbF9jb250cm9sX19JUm1ldiAuUG9pbnRzQ29udHJvbF9jb250cm9sSW5uZXJfX3ZrYld5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uUG9pbnRzQ29udHJvbF9jb250cm9sX19JUm1ldiAuUG9pbnRzQ29udHJvbF9jb250cm9sSW5uZXJfX3ZrYld5IGlucHV0IHtcXG4gIHdpZHRoOiA2cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxNDE3O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuLlBvaW50c0NvbnRyb2xfY29udHJvbF9fSVJtZXYgLlBvaW50c0NvbnRyb2xfY29udHJvbElubmVyX192a2JXeSBidXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxNDE3O1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uUG9pbnRzQ29udHJvbF9jb250cm9sX19JUm1ldiAuUG9pbnRzQ29udHJvbF9jb250cm9sSW5uZXJfX3ZrYld5IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyZTM1O1xcbn1cXG4uUG9pbnRzQ29udHJvbF9jb250cm9sX19JUm1ldiAuUG9pbnRzQ29udHJvbF9jb250cm9sSW5uZXJfX3ZrYld5IGJ1dHRvbiBzdmcge1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWVDb250YWluZXIvR2FtZUNvbnRyb2xzL1BvaW50c0NvbnRyb2wvUG9pbnRzQ29udHJvbC5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJFQ0ZTO0VER1QsaUNBQUE7RUFFQSxtQkNGYztFRElkLGVBQUE7RUFDQSx3Q0FBQTtBQUhGO0FBS0U7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUpKO0FBTUk7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJDdEJVO0VEdUJWLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQzNCYTtFRDRCYixXQ2hDTztFRGlDUCxpQkFBQTtBQUpOO0FBT0k7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQ3BDYTtFRHFDYixXQ3pDTztFRDBDUCxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFMTjtBQU9NO0VBQ0UseUJBQUE7QUFMUjtBQVFNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFOUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcXFwiO1xcclxcblxcclxcbi5jb250cm9sIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICRpbnB1dERpdjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4OCwgODgsIDg4KTtcXHJcXG4gIC8vIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcclxcbiAgLy8gd2lkdGg6IDQwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDNweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuXFxyXFxuICBzcGFuIHtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcclxcbiAgICBjb2xvcjogI2JiYmNjMTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250cm9sSW5uZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBpbnB1dCB7XFxyXFxuICAgICAgd2lkdGg6IDZyZW07XFxyXFxuICAgICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICAgIG1hcmdpbjogMCAwLjVyZW07XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZDtcXHJcXG4gICAgICBjb2xvcjogJHRleHQtY29sb3I7XFxyXFxuICAgICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYnV0dG9uIHtcXHJcXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkaW5wdXQtYm9yZGVyO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kO1xcclxcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkaW5wdXQtYmFja2dyb3VuZCwgMTAlKTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgc3ZnIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxcmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIiRiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxYTIyO1xcclxcbiR0ZXh0LWNvbG9yOiAjZmZmO1xcclxcbiRidXR0b24tYmFja2dyb3VuZDogI2ZmNmI2YjtcXHJcXG4kYnV0dG9uLWhvdmVyLWJhY2tncm91bmQ6ICNmZjQ5NDk7XFxyXFxuJGlucHV0RGl2OiBsaW5lYXItZ3JhZGllbnQoODlkZWcsIHJnYigyNiAzNCA1MSkgMCUsIHJnYigzNiA0NCA1OCkgOTklKTtcXHJcXG4kaW5wdXQtYmFja2dyb3VuZDogIzEwMTQxNztcXHJcXG4kaGVhZGVyLWJhY2tncm91bmQ6ICMxNDE0MTQ7XFxyXFxuJGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuJGlucHV0LWJvcmRlcjogI2NjYztcXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250cm9sXCI6IFwiUG9pbnRzQ29udHJvbF9jb250cm9sX19JUm1ldlwiLFxuXHRcImNvbnRyb2xJbm5lclwiOiBcIlBvaW50c0NvbnRyb2xfY29udHJvbElubmVyX192a2JXeVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[10].use[4]!./src/components/Game/GameContainer/GameControls/PointsControl/PointsControl.module.scss\n"));

/***/ })

});