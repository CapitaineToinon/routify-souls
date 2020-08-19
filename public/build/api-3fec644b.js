import{O as t}from"./main-42864eb9.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,r)};function r(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}var n="undefined"!=typeof window&&window,i="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,o="undefined"!=typeof global&&global,s=n||o||i;function u(t){return"function"==typeof t}var c=!1,h={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;c=t},get useDeprecatedSynchronousErrorHandling(){return c}};function a(t){setTimeout((function(){throw t}),0)}var p={closed:!0,next:function(t){},error:function(t){if(h.useDeprecatedSynchronousErrorHandling)throw t;a(t)},complete:function(){}},f=function(){return Array.isArray||function(t){return t&&"number"==typeof t.length}}();var l=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}(),d=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var e;if(!this.closed){var r,n=this._parentOrParents,i=this._ctorUnsubscribe,o=this._unsubscribe,s=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof t)n.remove(this);else if(null!==n)for(var c=0;c<n.length;++c){n[c].remove(this)}if(u(o)){i&&(this._unsubscribe=void 0);try{o.call(this)}catch(t){e=t instanceof l?b(t.errors):[t]}}if(f(s)){c=-1;for(var h=s.length;++c<h;){var a=s[c];if(null!==(r=a)&&"object"==typeof r)try{a.unsubscribe()}catch(t){e=e||[],t instanceof l?e=e.concat(b(t.errors)):e.push(t)}}}if(e)throw new l(e)}},t.prototype.add=function(e){var r=e;if(!e)return t.EMPTY;switch(typeof e){case"function":r=new t(e);case"object":if(r===this||r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if(!(r instanceof t)){var n=r;(r=new t)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var i=r._parentOrParents;if(null===i)r._parentOrParents=this;else if(i instanceof t){if(i===this)return r;r._parentOrParents=[i,this]}else{if(-1!==i.indexOf(this))return r;i.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[r]:o.push(r),r},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var r=e.indexOf(t);-1!==r&&e.splice(r,1)}},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();function b(t){return t.reduce((function(t,e){return t.concat(e instanceof l?e.errors:e)}),[])}var y=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),v=function(t){function e(r,n,i){var o=t.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=p;break;case 1:if(!r){o.destination=p;break}if("object"==typeof r){r instanceof e?(o.syncErrorThrowable=r.syncErrorThrowable,o.destination=r,r.add(o)):(o.syncErrorThrowable=!0,o.destination=new w(o,r));break}default:o.syncErrorThrowable=!0,o.destination=new w(o,r,n,i)}return o}return r(e,t),e.prototype[y]=function(){return this},e.create=function(t,r,n){var i=new e(t,r,n);return i.syncErrorThrowable=!1,i},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}(d),w=function(t){function e(e,r,n,i){var o,s=t.call(this)||this;s._parentSubscriber=e;var c=s;return u(r)?o=r:r&&(o=r.next,n=r.error,i=r.complete,r!==p&&(u((c=Object.create(r)).unsubscribe)&&s.add(c.unsubscribe.bind(c)),c.unsubscribe=s.unsubscribe.bind(s))),s._context=c,s._next=o,s._error=n,s._complete=i,s}return r(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;h.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,r=h.useDeprecatedSynchronousErrorHandling;if(this._error)r&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)r?(e.syncErrorValue=t,e.syncErrorThrown=!0):a(t),this.unsubscribe();else{if(this.unsubscribe(),r)throw t;a(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var r=function(){return t._complete.call(t._context)};h.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,r),this.unsubscribe()):(this.__tryOrUnsub(r),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){if(this.unsubscribe(),h.useDeprecatedSynchronousErrorHandling)throw t;a(t)}},e.prototype.__tryOrSetError=function(t,e,r){if(!h.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,r)}catch(e){return h.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(a(e),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(v);var m=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function _(t){return t}function g(t){return 0===t.length?_:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}var E=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var r=new t;return r.source=this,r.operator=e,r},t.prototype.subscribe=function(t,e,r){var n=this.operator,i=function(t,e,r){if(t){if(t instanceof v)return t;if(t[y])return t[y]()}return t||e||r?new v(t,e,r):new v(p)}(t,e,r);if(n?i.add(n.call(i,this.source)):i.add(this.source||h.useDeprecatedSynchronousErrorHandling&&!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),h.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){h.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),!function(t){for(;t;){var e=t,r=e.closed,n=e.destination,i=e.isStopped;if(r||i)return!1;t=n&&n instanceof v?n:null}return!0}(t)?console.warn(e):t.error(e)}},t.prototype.forEach=function(t,e){var r=this;return new(e=S(e))((function(e,n){var i;i=r.subscribe((function(e){try{t(e)}catch(t){n(t),i&&i.unsubscribe()}}),n,e)}))},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[m]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?this:g(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=S(t))((function(t,r){var n;e.subscribe((function(t){return n=t}),(function(t){return r(t)}),(function(){return t(n)}))}))},t.create=function(e){return new t(e)},t}();function S(t){if(t||(t=Promise),!t)throw new Error("no Promise impl found");return t}function T(t,e){return function(r){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return r.lift(new x(t,e))}}var x=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new O(t,this.project,this.thisArg))},t}(),O=function(t){function e(e,r,n){var i=t.call(this,e)||this;return i.project=r,i.count=0,i.thisArg=n||i,i}return r(e,t),e.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(v);function I(t,e){return void 0===e&&(e=null),new A({method:"GET",url:t,headers:e})}function P(t,e,r){return new A({method:"POST",url:t,body:e,headers:r})}function N(t,e){return new A({method:"DELETE",url:t,headers:e})}function j(t,e,r){return new A({method:"PUT",url:t,body:e,headers:r})}function q(t,e,r){return new A({method:"PATCH",url:t,body:e,headers:r})}var H=T((function(t,e){return t.response}));function M(t,e){return H(new A({method:"GET",url:t,responseType:"json",headers:e}))}var A=function(t){function e(e){var r=t.call(this)||this,n={async:!0,createXHR:function(){return this.crossDomain?function(){if(s.XMLHttpRequest)return new s.XMLHttpRequest;if(s.XDomainRequest)return new s.XDomainRequest;throw new Error("CORS is not supported by your browser")}():function(){if(s.XMLHttpRequest)return new s.XMLHttpRequest;var t=void 0;try{for(var e=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],r=0;r<3;r++)try{if(t=e[r],new s.ActiveXObject(t))break}catch(t){}return new s.ActiveXObject(t)}catch(t){throw new Error("XMLHttpRequest is not supported by your browser")}}()},crossDomain:!0,withCredentials:!1,headers:{},method:"GET",responseType:"json",timeout:0};if("string"==typeof e)n.url=e;else for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i]);return r.request=n,r}var n;return r(e,t),e.prototype._subscribe=function(t){return new D(t,this.request)},e.create=((n=function(t){return new e(t)}).get=I,n.post=P,n.delete=N,n.put=j,n.patch=q,n.getJSON=M,n),e}(E),D=function(t){function e(e,r){var n=t.call(this,e)||this;n.request=r,n.done=!1;var i=r.headers=r.headers||{};return r.crossDomain||n.getHeader(i,"X-Requested-With")||(i["X-Requested-With"]="XMLHttpRequest"),n.getHeader(i,"Content-Type")||s.FormData&&r.body instanceof s.FormData||void 0===r.body||(i["Content-Type"]="application/x-www-form-urlencoded; charset=UTF-8"),r.body=n.serializeBody(r.body,n.getHeader(r.headers,"Content-Type")),n.send(),n}return r(e,t),e.prototype.next=function(t){this.done=!0;var e,r=this.xhr,n=this.request,i=this.destination;try{e=new C(t,r,n)}catch(t){return i.error(t)}i.next(e)},e.prototype.send=function(){var t=this.request,e=this.request,r=e.user,n=e.method,i=e.url,o=e.async,s=e.password,u=e.headers,c=e.body;try{var h=this.xhr=t.createXHR();this.setupEvents(h,t),r?h.open(n,i,o,r,s):h.open(n,i,o),o&&(h.timeout=t.timeout,h.responseType=t.responseType),"withCredentials"in h&&(h.withCredentials=!!t.withCredentials),this.setHeaders(h,u),c?h.send(c):h.send()}catch(t){this.error(t)}},e.prototype.serializeBody=function(t,e){if(!t||"string"==typeof t)return t;if(s.FormData&&t instanceof s.FormData)return t;if(e){var r=e.indexOf(";");-1!==r&&(e=e.substring(0,r))}switch(e){case"application/x-www-form-urlencoded":return Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&");case"application/json":return JSON.stringify(t);default:return t}},e.prototype.setHeaders=function(t,e){for(var r in e)e.hasOwnProperty(r)&&t.setRequestHeader(r,e[r])},e.prototype.getHeader=function(t,e){for(var r in t)if(r.toLowerCase()===e.toLowerCase())return t[r]},e.prototype.setupEvents=function(t,e){var r=e.progressSubscriber;function n(t){var e,r=n,i=r.subscriber,o=r.progressSubscriber,s=r.request;o&&o.error(t);try{e=new X(this,s)}catch(t){e=t}i.error(e)}if(t.ontimeout=n,n.request=e,n.subscriber=this,n.progressSubscriber=r,t.upload&&"withCredentials"in t){var i,o;if(r)i=function(t){i.progressSubscriber.next(t)},s.XDomainRequest?t.onprogress=i:t.upload.onprogress=i,i.progressSubscriber=r;o=function(t){var e,r=o,n=r.progressSubscriber,i=r.subscriber,s=r.request;n&&n.error(t);try{e=new k("ajax error",this,s)}catch(t){e=t}i.error(e)},t.onerror=o,o.request=e,o.subscriber=this,o.progressSubscriber=r}function u(t){}function c(t){var e=c,r=e.subscriber,n=e.progressSubscriber,i=e.request;if(4===this.readyState){var o=1223===this.status?204:this.status,s="text"===this.responseType?this.response||this.responseText:this.response;if(0===o&&(o=s?200:0),o<400)n&&n.complete(),r.next(t),r.complete();else{n&&n.error(t);var u=void 0;try{u=new k("ajax error "+o,this,i)}catch(t){u=t}r.error(u)}}}t.onreadystatechange=u,u.subscriber=this,u.progressSubscriber=r,u.request=e,t.onload=c,c.subscriber=this,c.progressSubscriber=r,c.request=e},e.prototype.unsubscribe=function(){var e=this.done,r=this.xhr;!e&&r&&4!==r.readyState&&"function"==typeof r.abort&&r.abort(),t.prototype.unsubscribe.call(this)},e}(v),C=function(){return function(t,e,r){this.originalEvent=t,this.xhr=e,this.request=r,this.status=e.status,this.responseType=e.responseType||r.responseType,this.response=R(this.responseType,e)}}(),k=function(){function t(t,e,r){return Error.call(this),this.message=t,this.name="AjaxError",this.xhr=e,this.request=r,this.status=e.status,this.responseType=e.responseType||r.responseType,this.response=R(this.responseType,e),this}return t.prototype=Object.create(Error.prototype),t}();function R(t,e){switch(t){case"json":return function(t){return"response"in t?t.responseType?t.response:JSON.parse(t.response||t.responseText||"null"):JSON.parse(t.responseText||"null")}(e);case"xml":return e.responseXML;case"text":default:return"response"in e?e.response:e.responseText}}var X=function(t,e){return k.call(this,"ajax timeout",t,e),this.name="AjaxTimeoutError",this},L=function(){return A.create}(),V=function(t){function e(e,r){var n=t.call(this,e,r)||this;return n.scheduler=e,n.work=r,n.pending=!1,n}return r(e,t),e.prototype.schedule=function(t,e){if(void 0===e&&(e=0),this.closed)return this;this.state=t;var r=this.id,n=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(n,r,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(n,this.id,e),this},e.prototype.requestAsyncId=function(t,e,r){return void 0===r&&(r=0),setInterval(t.flush.bind(t,this),r)},e.prototype.recycleAsyncId=function(t,e,r){if(void 0===r&&(r=0),null!==r&&this.delay===r&&!1===this.pending)return e;clearInterval(e)},e.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,e);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,e){var r=!1,n=void 0;try{this.work(t)}catch(t){r=!0,n=!!t&&t||new Error(t)}if(r)return this.unsubscribe(),n},e.prototype._unsubscribe=function(){var t=this.id,e=this.scheduler,r=e.actions,n=r.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==n&&r.splice(n,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null},e}(function(t){function e(e,r){return t.call(this)||this}return r(e,t),e.prototype.schedule=function(t,e){return this},e}(d)),U=function(){function t(e,r){void 0===r&&(r=t.now),this.SchedulerAction=e,this.now=r}return t.prototype.schedule=function(t,e,r){return void 0===e&&(e=0),new this.SchedulerAction(this,t).schedule(r,e)},t.now=function(){return Date.now()},t}(),W=function(t){function e(r,n){void 0===n&&(n=U.now);var i=t.call(this,r,(function(){return e.delegate&&e.delegate!==i?e.delegate.now():n()}))||this;return i.actions=[],i.active=!1,i.scheduled=void 0,i}return r(e,t),e.prototype.schedule=function(r,n,i){return void 0===n&&(n=0),e.delegate&&e.delegate!==this?e.delegate.schedule(r,n,i):t.prototype.schedule.call(this,r,n,i)},e.prototype.flush=function(t){var e=this.actions;if(this.active)e.push(t);else{var r;this.active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,r){for(;t=e.shift();)t.unsubscribe();throw r}}},e}(U);function Y(t){return t&&"function"==typeof t.schedule}function F(t,e){return new E((function(r){var n=new d,i=0;return n.add(e.schedule((function(){i!==t.length?(r.next(t[i++]),r.closed||n.add(this.schedule())):r.complete()}))),n}))}function z(t,e){return e?F(t,e):new E((r=t,function(t){for(var e=0,n=r.length;e<n&&!t.closed;e++)t.next(r[e]);t.complete()}));var r}var G=new E((function(t){return t.complete()}));function B(t){return t?function(t){return new E((function(e){return t.schedule((function(){return e.complete()}))}))}(t):G}function J(t){var e=t.error;t.subscriber.error(e)}var K=function(){function t(t,e,r){this.kind=t,this.value=e,this.error=r,this.hasValue="N"===t}return t.prototype.observe=function(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}},t.prototype.do=function(t,e,r){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return r&&r()}},t.prototype.accept=function(t,e,r){return t&&"function"==typeof t.next?this.observe(t):this.do(t,e,r)},t.prototype.toObservable=function(){var t,e;switch(this.kind){case"N":return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=t[t.length-1];return Y(r)?(t.pop(),F(t,r)):z(t)}(this.value);case"E":return t=this.error,new E(e?function(r){return e.schedule(J,0,{error:t,subscriber:r})}:function(e){return e.error(t)});case"C":return B()}throw new Error("unexpected notification kind value")},t.createNext=function(e){return void 0!==e?new t("N",e):t.undefinedValueNotification},t.createError=function(e){return new t("E",void 0,e)},t.createComplete=function(){return t.completeNotification},t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t}(),Q=function(){function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t}(),Z=function(t){function e(e,r){var n=t.call(this)||this;return n.subject=e,n.subscriber=r,n.closed=!1,n}return r(e,t),e.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,e=t.observers;if(this.subject=null,e&&0!==e.length&&!t.isStopped&&!t.closed){var r=e.indexOf(this.subscriber);-1!==r&&e.splice(r,1)}}},e}(d),$=function(t){function e(e){var r=t.call(this,e)||this;return r.destination=e,r}return r(e,t),e}(v),tt=function(t){function e(){var e=t.call(this)||this;return e.observers=[],e.closed=!1,e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return r(e,t),e.prototype[y]=function(){return new $(this)},e.prototype.lift=function(t){var e=new et(this,this);return e.operator=t,e},e.prototype.next=function(t){if(this.closed)throw new Q;if(!this.isStopped)for(var e=this.observers,r=e.length,n=e.slice(),i=0;i<r;i++)n[i].next(t)},e.prototype.error=function(t){if(this.closed)throw new Q;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var e=this.observers,r=e.length,n=e.slice(),i=0;i<r;i++)n[i].error(t);this.observers.length=0},e.prototype.complete=function(){if(this.closed)throw new Q;this.isStopped=!0;for(var t=this.observers,e=t.length,r=t.slice(),n=0;n<e;n++)r[n].complete();this.observers.length=0},e.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},e.prototype._trySubscribe=function(e){if(this.closed)throw new Q;return t.prototype._trySubscribe.call(this,e)},e.prototype._subscribe=function(t){if(this.closed)throw new Q;return this.hasError?(t.error(this.thrownError),d.EMPTY):this.isStopped?(t.complete(),d.EMPTY):(this.observers.push(t),new Z(this,t))},e.prototype.asObservable=function(){var t=new E;return t.source=this,t},e.create=function(t,e){return new et(t,e)},e}(E),et=function(t){function e(e,r){var n=t.call(this)||this;return n.destination=e,n.source=r,n}return r(e,t),e.prototype.next=function(t){var e=this.destination;e&&e.next&&e.next(t)},e.prototype.error=function(t){var e=this.destination;e&&e.error&&this.destination.error(t)},e.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},e.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):d.EMPTY},e}(tt),rt=function(t){function e(e,r,n){void 0===n&&(n=0);var i=t.call(this,e)||this;return i.scheduler=r,i.delay=n,i}return r(e,t),e.dispatch=function(t){var e=t.notification,r=t.destination;e.observe(r),this.unsubscribe()},e.prototype.scheduleMessage=function(t){this.destination.add(this.scheduler.schedule(e.dispatch,this.delay,new nt(t,this.destination)))},e.prototype._next=function(t){this.scheduleMessage(K.createNext(t))},e.prototype._error=function(t){this.scheduleMessage(K.createError(t)),this.unsubscribe()},e.prototype._complete=function(){this.scheduleMessage(K.createComplete()),this.unsubscribe()},e}(v),nt=function(){return function(t,e){this.notification=t,this.destination=e}}();function it(t,e){return function(r){for(var n=r,i=0;i<e;i++){var o=null!=n?n[t[i]]:void 0;if(void 0===o)return;n=o}return n}}var ot=function(t){function e(e,r){var n=t.call(this,e,r)||this;return n.scheduler=e,n.work=r,n}return r(e,t),e.prototype.schedule=function(e,r){return void 0===r&&(r=0),r>0?t.prototype.schedule.call(this,e,r):(this.delay=r,this.state=e,this.scheduler.flush(this),this)},e.prototype.execute=function(e,r){return r>0||this.closed?t.prototype.execute.call(this,e,r):this._execute(e,r)},e.prototype.requestAsyncId=function(e,r,n){return void 0===n&&(n=0),null!==n&&n>0||null===n&&this.delay>0?t.prototype.requestAsyncId.call(this,e,r,n):e.flush(this)},e}(V),st=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e}(W))(ot),ut=function(t){function e(e,r,n){void 0===e&&(e=Number.POSITIVE_INFINITY),void 0===r&&(r=Number.POSITIVE_INFINITY);var i=t.call(this)||this;return i.scheduler=n,i._events=[],i._infiniteTimeWindow=!1,i._bufferSize=e<1?1:e,i._windowTime=r<1?1:r,r===Number.POSITIVE_INFINITY?(i._infiniteTimeWindow=!0,i.next=i.nextInfiniteTimeWindow):i.next=i.nextTimeWindow,i}return r(e,t),e.prototype.nextInfiniteTimeWindow=function(e){var r=this._events;r.push(e),r.length>this._bufferSize&&r.shift(),t.prototype.next.call(this,e)},e.prototype.nextTimeWindow=function(e){this._events.push(new ct(this._getNow(),e)),this._trimBufferThenGetEvents(),t.prototype.next.call(this,e)},e.prototype._subscribe=function(t){var e,r=this._infiniteTimeWindow,n=r?this._events:this._trimBufferThenGetEvents(),i=this.scheduler,o=n.length;if(this.closed)throw new Q;if(this.isStopped||this.hasError?e=d.EMPTY:(this.observers.push(t),e=new Z(this,t)),i&&t.add(t=new rt(t,i)),r)for(var s=0;s<o&&!t.closed;s++)t.next(n[s]);else for(s=0;s<o&&!t.closed;s++)t.next(n[s].value);return this.hasError?t.error(this.thrownError):this.isStopped&&t.complete(),e},e.prototype._getNow=function(){return(this.scheduler||st).now()},e.prototype._trimBufferThenGetEvents=function(){for(var t=this._getNow(),e=this._bufferSize,r=this._windowTime,n=this._events,i=n.length,o=0;o<i&&!(t-n[o].time<r);)o++;return i>e&&(o=Math.max(o,i-e)),o>0&&n.splice(0,o),n},e}(tt),ct=function(){return function(t,e){this.time=t,this.value=e}}();var ht=function(){function t(t,e){this.count=t,this.source=e}return t.prototype.call=function(t,e){return e.subscribe(new at(t,this.count,this.source))},t}(),at=function(t){function e(e,r,n){var i=t.call(this,e)||this;return i.count=r,i.source=n,i}return r(e,t),e.prototype.error=function(e){if(!this.isStopped){var r=this.source,n=this.count;if(0===n)return t.prototype.error.call(this,e);n>-1&&(this.count=n-1),r.subscribe(this._unsubscribeAndRecycle())}},e}(v);function pt(t,e,r){var n;return n=t&&"object"==typeof t?t:{bufferSize:t,windowTime:e,refCount:!1,scheduler:r},function(t){return t.lift(function(t){var e,r,n=t.bufferSize,i=void 0===n?Number.POSITIVE_INFINITY:n,o=t.windowTime,s=void 0===o?Number.POSITIVE_INFINITY:o,u=t.refCount,c=t.scheduler,h=0,a=!1,p=!1;return function(t){var n;h++,!e||a?(a=!1,e=new ut(i,s,c),n=e.subscribe(this),r=t.subscribe({next:function(t){e.next(t)},error:function(t){a=!0,e.error(t)},complete:function(){p=!0,r=void 0,e.complete()}})):n=e.subscribe(this),this.add((function(){h--,n.unsubscribe(),r&&!p&&u&&0===h&&(r.unsubscribe(),r=void 0,e=void 0)}))}}(n))}}var ft={ttl:0};var lt,dt=(lt=new Map,{get:function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=t(t({},n),ft),o=i.ttl,s=new Date,u=r.pipe(pt(1));lt.get(e)||lt.set(e,{ttl:o,date:s,source:u});var c=lt.get(e),h=c.date,a=c.ttl;return a>0&&s-h>a&&lt.set(e,{ttl:o,date:s,source:u}),lt.get(e).source}});function bt(t){var e,r="".concat("https://www.speedrun.com/api/v1").concat(t);return dt.get(r,L.getJSON(r).pipe(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=t.length;if(0===r)throw new Error("list of properties cannot be empty.");return function(e){return T(it(t,r))(e)}}("data"),(void 0===(e=3)&&(e=-1),function(t){return t.lift(new ht(e,t))})))}function yt(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return bt("/leaderboards/".concat(t,"/category/").concat(e)+"?embed=game,category,players,variables&".concat(r)).toPromise()}function vt(){return bt("/series/".concat("souls","/games")+"?embed=categories,categories.game,categories.variables").toPromise()}function wt(t){return bt("/runs/".concat(t)+"?embed=players,game,category,category.variables,category.game").toPromise()}export{yt as a,wt as b,vt as g};
