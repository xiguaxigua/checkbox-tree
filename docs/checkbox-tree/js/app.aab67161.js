webpackJsonp([1,2],[function(e,n,t){"use strict";n.a={id:0,name:"company",parent_id:"0",flag:!0,children:[{id:1,name:"level1-1",parent_id:0,flag:!1,children:[{id:2,name:"level2-1",parent_id:1,flag:!0,children:[{id:10,name:"level3-1",parent_id:2,flag:!1,children:[]},{id:11,name:"level3-2",parent_id:2,flag:!0,children:[]}]},{id:5,name:"level2-2",parent_id:1,flag:!0,children:[]},{id:6,name:"level2-3",parent_id:1,flag:!0,children:[]}]},{id:3,name:"level1-2",parent_id:0,flag:!0,children:[{id:4,name:"level2-4",parent_id:3,flag:!0,children:[]}]}]}},function(e,n,t){"use strict";n.a={id:0,name:"company",parent_id:"0",flag:!1,children:[{id:1,name:"level1-1",parent_id:0,flag:!1,children:[{id:2,name:"level2-1",parent_id:1,flag:!1,children:[{id:10,name:"level3-1",parent_id:2,flag:!1,children:[]},{id:11,name:"level3-2",parent_id:2,flag:!1,children:[]}]},{id:5,name:"level2-2",parent_id:1,flag:!1,children:[]},{id:6,name:"level2-3",parent_id:1,flag:!1,children:[]}]},{id:3,name:"level1-2",parent_id:0,flag:!1,children:[{id:4,name:"level2-4",parent_id:3,flag:!1,children:[]}]}]}},function(e,n,t){"use strict";function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var r=t(3),a=t(12),d=(t.n(a),function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}()),c={children:"children",checkedProperty:"flag",name:"name",id:"id",parentId:"parent_id",expened:!1},l=function(){function e(n,a){var d=a.data,l=void 0===d?[]:d,o=a.level,h=void 0===o?{}:o,p=a.changeHandler,s=void 0===p?r.a:p;if(i(this,e),n){var u=t.i(r.b)(c,h);this.node=n,this.data=l,this.changeHandler=s||r.a,this.childrenSign=u.children,this.checkedProperty=u.checkedProperty,this.nameSign=u.name,this.idSign=u.id,this.parentIdSign=u.parentId,this.expened=u.expened,this.dataMap={},this.selectedData=[],this.init()}}return d(e,[{key:"init",value:function(){var e=t.i(r.c)("div",{className:"checkbox-tree"});e.appendChild(this.getTreeDom(this.data)),this.node.appendChild(e),e.addEventListener("click",this.clickHandler.bind(this))}},{key:"getTreeDom",value:function(e){var n=this,i=document.createDocumentFragment();return e.forEach(function(e){var a=t.i(r.c)("div",{className:"tree-node"});if(n.dataMap[e[n.idSign]]=e,e[n.childrenSign]&&e[n.childrenSign].length){n.checkAndInterminate=[!1,!1];var d=n.getStatus(e[n.childrenSign]),c={text:e[n.nameSign],id:e[n.idSign],checked:d[0],fill:!0,indeterminate:d[1]};a.appendChild(n.getTreeNodeContent(c)),a.appendChild(n.getTreeNodeChild(n.getTreeDom(e[n.childrenSign])))}else{var l={text:e[n.nameSign],id:e[n.idSign],checked:e[n.checkedProperty],fill:!1,indeterminate:!1};a.appendChild(n.getTreeNodeContent(l))}i.appendChild(a)},this),i}},{key:"getTreeNodeContent",value:function(e){var n=e.text,i=e.id,a=e.checked,d=e.fill,c=e.indeterminate,l=d?"":"empty",o=this.expened?"expened":"",h=t.i(r.c)("div",{className:"tree-node-content"});return h.appendChild(t.i(r.c)("span",{className:"tree-icon "+l+" "+o})),h.appendChild(t.i(r.c)("input",{type:"checkbox",name:i,checked:a,indeterminate:c})),h.appendChild(t.i(r.c)("span",{className:"tree-text",innerHTML:n})),h}},{key:"getStatus",value:function(e){this.getCheckAndInterminate(e);return this.checkAndInterminate[0]&&this.checkAndInterminate[1]?[!1,!0]:this.checkAndInterminate[0]&&!this.checkAndInterminate[1]?[!0,!1]:[!1,!1]}},{key:"getCheckAndInterminate",value:function(e){var n=this;e.forEach(function(e){e[n.childrenSign]&&e[n.childrenSign].length?n.getCheckAndInterminate(e[n.childrenSign]):e[n.checkedProperty]?n.checkAndInterminate[0]=!0:n.checkAndInterminate[1]=!0},this)}},{key:"getTreeNodeChild",value:function(e){var n=this.expened?"expened":"",i=t.i(r.c)("div",{className:"tree-node-child "+n});return i.appendChild(e),i}},{key:"clickHandler",value:function(e){var n=e.target;if("span"===n.tagName.toLowerCase()){var t=n.parentNode.nextSibling;if(!t)return;t.classList.contains("expened")?(t.classList.remove("expened"),n.classList.remove("expened")):(t.classList.add("expened"),n.classList.add("expened"))}else"input"===n.tagName.toLowerCase()&&(this.checkboxClickHandler(n),this.changeHandler())}},{key:"getSelectedNodes",value:function(e,n){var t=this,i=this.node.querySelectorAll("input"),r=[];return i.forEach(function(i){e?i.checked&&!i.parentNode.nextSibling&&r.push(t.dataMap[i.name]):n?i.checked&&!i.indeterminate&&r.push(t.dataMap[i.name]):(i.checked||i.indeterminate)&&r.push(t.dataMap[i.name])},this),r}},{key:"changeData",value:function(e){this.data=e,this.destory(),this.init()}},{key:"destory",value:function(){this.node.innerHTML=null,this.node.removeEventListener("click",this.clickHandler.bind(this))}},{key:"checkboxClickHandler",value:function(e){var n=this,t=e.parentNode.nextSibling,i=e.parentNode.parentNode.parentNode;!0===e.checked?(this.dataMap[e.name][this.checkedProperty]=!0,t&&t.querySelectorAll("input").forEach(function(e){e.checked=!0,n.dataMap[e.name][n.checkedProperty]=!0},this),this.parentChangeHandler(i,!0,!1)):(this.dataMap[e.name][this.checkedProperty]=!1,t&&t.querySelectorAll("input").forEach(function(e){e.indeterminate=!1,e.checked=!1,n.dataMap[e.name][n.checkedProperty]=!1},this),this.parentChangeHandler(i,!1,!1))}},{key:"parentChangeHandler",value:function(e,n,t){if(e.previousSibling){var i=e.previousSibling.querySelector("input"),r=!1,a=Array.prototype.slice.call(e.children);n?(a.some(function(e){var n=e.querySelectorAll("input");if(Array.prototype.slice.call(n).some(function(e){return!e.checked}))return r=!0,!0}),i.checked=!0,i.indeterminate=t||r,i.indeterminate||(this.dataMap[i.name][this.checkedProperty]=!0)):(a.some(function(e){var n=e.children[0].querySelectorAll("input")[0];if(n.checked||n.indeterminate)return r=!0,!0}),i.checked=r,i.indeterminate=t||r,this.dataMap[i.name][this.checkedProperty]=r),e.parentNode.parentNode.classList.contains("tree-node-child")&&this.parentChangeHandler(e.parentNode.parentNode,n,r)}}}]),e}();n.a=l},function(e,n,t){"use strict";function i(e,n){return Object.keys(n).forEach(function(t){e[t]=n[t]}),e}function r(){}function a(e,n){var t=document.createElement(e);for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i]);return t}n.b=i,n.a=r,n.c=a},,,function(e,n,t){n=e.exports=t(7)(void 0),n.push([e.i,".checkbox-tree .tree-node-child{margin-left:15px;display:none}.checkbox-tree .tree-node-child.expened{display:block}.checkbox-tree .tree-icon{display:inline-block;cursor:pointer;width:0;height:0;margin-top:5px;margin-right:3px;border:5px solid transparent;border-right-width:0;border-left-color:#333;border-left-width:7px}.checkbox-tree .tree-icon.expened{border:5px solid transparent;border-bottom-width:0;border-top-color:#333;border-top-width:7px;margin-top:7px;margin-right:0}.checkbox-tree .tree-icon.empty{border-color:transparent}",""])},,,,,,function(e,n,t){var i=t(6);"string"==typeof i&&(i=[[e.i,i,""]]);t(10)(i,{});i.locals&&(e.exports=i.locals)},,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),r=t(0),a=t(1),d=function(){function e(e,n){var t=[],i=!0,r=!1,a=void 0;try{for(var d,c=e[Symbol.iterator]();!(i=(d=c.next()).done)&&(t.push(d.value),!n||t.length!==n);i=!0);}catch(e){r=!0,a=e}finally{try{!i&&c.return&&c.return()}finally{if(r)throw a}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c={children:"children",checkedProperty:"flag",name:"name",id:"id",parentId:"parent_id",expened:!1},l=!0,o=new i.a(document.getElementById("tree"),{data:r.a.children,level:c,changeHandler:function(){console.log("发生了改变")}}),h=document.querySelector("#get-info"),p=document.querySelector("#check-type");h.addEventListener("click",function(){var e=p.value.split(","),n=d(e,2),t=n[0],i=n[1];console.log(o.getSelectedNodes(!!+t,!!+i))}),document.querySelector(".toggle-data").addEventListener("click",function(){l=!l;var e=l?r.a.children:a.a.children;o.changeData(e)})}],[14]);
//# sourceMappingURL=app.aab67161.js.map