(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+kne":
/*!**************************************************!*\
  !*** ./src/app/admin/logout/logout.component.ts ***!
  \**************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/token.service */ "xsTi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class LogoutComponent {
    constructor(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
    }
    ngOnInit() {
        this.tokenService.removeUser();
        this.router.navigateByUrl("/Login");
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-logout"]], decls: 2, vars: 0, template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logout works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logout',
                templateUrl: './logout.component.html',
                styleUrls: ['./logout.component.css']
            }]
    }], function () { return [{ type: _services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\srk\zoomclone\src\main.ts */"zUnb");


/***/ }),

/***/ "3tD2":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/chat.service */ "sjK5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_admin_models_base_view_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin/models/base-view-model */ "gKIg");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_admin_services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin/services/token.service */ "xsTi");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/message.service */ "tZre");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");











function ChatComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading . . .");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChatComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r2.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 2, msg_r2.date, "hh:mm aa"));
} }
function ChatComponent_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r2.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 2, msg_r2.date, "hh:mm aa"));
} }
function ChatComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatComponent_div_14_div_1_Template, 9, 5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatComponent_div_14_div_2_Template, 8, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", msg_r2.type == "received");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", msg_r2.type == "sent");
} }
class ChatComponent extends src_app_admin_models_base_view_model__WEBPACK_IMPORTED_MODULE_2__["BaseCrudApi"] {
    constructor(chatService, ngZone, tokenService, messageService, router) {
        super();
        this.chatService = chatService;
        this.ngZone = ngZone;
        this.tokenService = tokenService;
        this.messageService = messageService;
        this.router = router;
        this.title = 'ClientApp';
        this.user = "";
        this.txtMessage = '';
        this.uniqueID = new Date().getTime().toString();
        this.messages = new Array();
        this.message = new _services_chat_service__WEBPACK_IMPORTED_MODULE_0__["Message"]();
        this.ToUser = "";
    }
    ngOnInit() {
        this.chatService.createConnection(this.tokenService.getUserName());
        this.chatService.startConnection();
        this.chatService.registerOnServerEvents();
        this.subscribeToevent();
        this.user = this.tokenService.getUser().startName;
        this.getItems();
    }
    sendMessage() {
        if (this.txtMessage) {
            this.message = new _services_chat_service__WEBPACK_IMPORTED_MODULE_0__["Message"]();
            this.message.clientuniqueid = this.uniqueID;
            this.message.type = "sent";
            this.message.message = this.txtMessage;
            this.message.date = new Date();
            this.message.receiver = this.ToUser;
            this.message.sender = this.tokenService.getUserName();
            this.messages.push(this.message);
            this.chatService.sendMessage(this.ToUser, this.message);
            this.txtMessage = '';
        }
    }
    subscribeToevent() {
        this.chatService.messageReceived.subscribe((msg) => {
            this.ngZone.run(() => {
                if (msg.sender !== this.tokenService.getUserName()) {
                    msg.type = "received";
                    this.messages.push(msg);
                }
            });
        });
    }
    getItems(page = 1) {
        this.isLoading = true;
        this.messageService.getMessages('aftab@gmail.com')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
            .subscribe(res => {
            if (res.isSuccess) {
                this.items = res.listModel,
                    this.items.reverse();
                this.items.forEach(x => {
                    if (x.sender !== this.tokenService.getUserName()) {
                        x.type = "received";
                        this.messages.push(x);
                    }
                    else {
                        this.messages.push(x);
                    }
                });
                //this.pager = res.pager
            }
            else {
                this.isError = true;
                this.errorMessage = res.message;
            }
        }, (error) => {
            debugger;
            console.log(error.error);
            this.isError = true;
            this.errorMessage = error.message;
            if (error.status == 401) {
                this.router.navigateByUrl("/Login");
            }
        }, () => {
            this.isLoading = false;
        });
    }
    getmore() {
        this.pageNo++;
        this.getItems(this.pageNo);
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_0__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_admin_services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 6, consts: [["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "page-content", 1, "page-content", "page-container"], [1, "padding"], [1, "row", "container", "d-flex", "justify-content-center"], [1, "col-md-6"], [1, "card", "card-bordered"], [1, "card-header"], [1, "card-title"], ["class", "btn btn-xs btn-secondary", "href", "#", "data-abc", "true", 4, "ngIf"], ["id", "chat-content", 1, "ps-container", "ps-theme-default", "ps-active-y", 2, "overflow-y", "scroll !important", "height", "400px !important"], [4, "ngFor", "ngForOf"], [1, "ps-scrollbar-x-rail", 2, "left", "0px", "bottom", "0px"], ["tabindex", "0", 1, "ps-scrollbar-x", 2, "left", "0px", "width", "0px"], [1, "ps-scrollbar-y-rail", 2, "top", "0px", "height", "0px", "right", "2px"], ["tabindex", "0", 1, "ps-scrollbar-y", 2, "top", "0px", "height", "2px"], [1, "publisher", "bt-1", "border-light"], ["src", "https://img.icons8.com/color/36/000000/administrator-male.png", "alt", "...", 1, "avatar", "avatar-xs"], ["type", "text", "placeholder", "Write something", 1, "publisher-input", 3, "ngModel", "ngModelChange"], ["type", "button", "data-abc", "true", 1, "publisher-btn", "text-info", 3, "click"], [1, "fa", "fa-paper-plane"], ["href", "#", "data-abc", "true", 1, "btn", "btn-xs", "btn-secondary"], ["class", "media media-chat", 4, "ngIf"], ["class", "media media-chat media-chat-reverse", 4, "ngIf"], [1, "media", "media-chat"], ["src", "https://img.icons8.com/color/36/000000/administrator-male.png", "alt", "...", 1, "avatar"], [1, "media-body"], [1, "meta"], [1, "media", "media-chat", "media-chat-reverse"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_0_listener($event) { return ctx.ToUser = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ChatComponent_a_12_Template, 2, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ChatComponent_div_14_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_21_listener($event) { return ctx.txtMessage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_22_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_24_listener() { return ctx.getmore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Load...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ToUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.ToUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.txtMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".card-bordered[_ngcontent-%COMP%] {\r\n    border: 1px solid #ebebeb\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    border-radius: 0px;\r\n    margin-bottom: 30px;\r\n    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.03);\r\n    transition: .5s\r\n}\r\n\r\n.padding[_ngcontent-%COMP%] {\r\n    padding: 3rem !important\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    background-color: #f9f9fa\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]:first-child {\r\n    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 15px 20px;\r\n    background-color: transparent;\r\n    border-bottom: 1px solid rgba(77, 82, 89, 0.07)\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    border: none\r\n}\r\n\r\nh4.card-title[_ngcontent-%COMP%] {\r\n    font-size: 17px\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child {\r\n    margin-right: 0\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] {\r\n    margin-left: 8px;\r\n    margin-right: 8px\r\n}\r\n\r\n.btn-secondary[_ngcontent-%COMP%] {\r\n    color: #4d5259 !important;\r\n    background-color: #e4e7ea;\r\n    border-color: #e4e7ea;\r\n    color: #fff\r\n}\r\n\r\n.btn-xs[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    padding: 2px 8px;\r\n    line-height: 18px\r\n}\r\n\r\n.btn-xs[_ngcontent-%COMP%]:hover {\r\n    color: #fff !important\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n    font-family: Roboto, sans-serif;\r\n    font-weight: 300;\r\n    line-height: 1.5;\r\n    margin-bottom: 0;\r\n    padding: 15px 20px;\r\n    border-bottom: 1px solid rgba(77, 82, 89, 0.07)\r\n}\r\n\r\n.ps-container[_ngcontent-%COMP%] {\r\n    position: relative\r\n}\r\n\r\n.ps-container[_ngcontent-%COMP%] {\r\n    touch-action: auto;\r\n    overflow: hidden !important;\r\n    -ms-overflow-style: none\r\n}\r\n\r\n.media-chat[_ngcontent-%COMP%] {\r\n    padding-right: 64px;\r\n    margin-bottom: 0\r\n}\r\n\r\n.media[_ngcontent-%COMP%] {\r\n    padding: 16px 12px;\r\n    transition: background-color .2s linear\r\n}\r\n\r\n.media[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\r\n    flex-shrink: 0\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 36px;\r\n    height: 36px;\r\n    line-height: 36px;\r\n    text-align: center;\r\n    border-radius: 100%;\r\n    background-color: #f5f6f7;\r\n    color: #8b95a5;\r\n    text-transform: uppercase\r\n}\r\n\r\n.media-chat[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\r\n    flex: initial;\r\n    display: table\r\n}\r\n\r\n.media-body[_ngcontent-%COMP%] {\r\n    min-width: 0\r\n}\r\n\r\n.media-chat[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding: 6px 8px;\r\n    margin: 4px 0;\r\n    background-color: #f5f6f7;\r\n    border-radius: 3px;\r\n    font-weight: 100;\r\n    color: #9b9b9b\r\n}\r\n\r\n.media[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] {\r\n    margin: 0 8px\r\n}\r\n\r\n.media-chat[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   p.meta[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    padding: 0;\r\n    opacity: .8\r\n}\r\n\r\n.media-meta-day[_ngcontent-%COMP%] {\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 0;\r\n    color: #8b95a5;\r\n    opacity: .8;\r\n    font-weight: 400\r\n}\r\n\r\n.media[_ngcontent-%COMP%] {\r\n    padding: 16px 12px;\r\n    transition: background-color .2s linear\r\n}\r\n\r\n.media-meta-day[_ngcontent-%COMP%]::before {\r\n    margin-right: 16px\r\n}\r\n\r\n.media-meta-day[_ngcontent-%COMP%]::before, .media-meta-day[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    flex: 1 1;\r\n    border-top: 1px solid #ebebeb\r\n}\r\n\r\n.media-meta-day[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    flex: 1 1;\r\n    border-top: 1px solid #ebebeb\r\n}\r\n\r\n.media-meta-day[_ngcontent-%COMP%]::after {\r\n    margin-left: 16px\r\n}\r\n\r\n.media-chat.media-chat-reverse[_ngcontent-%COMP%] {\r\n    padding-right: 12px;\r\n    padding-left: 64px;\r\n    flex-direction: row-reverse\r\n}\r\n\r\n.media-chat[_ngcontent-%COMP%] {\r\n    padding-right: 64px;\r\n    margin-bottom: 0\r\n}\r\n\r\n.media[_ngcontent-%COMP%] {\r\n    padding: 16px 12px;\r\n    transition: background-color .2s linear\r\n}\r\n\r\n.media-chat.media-chat-reverse[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    float: right;\r\n    clear: right;\r\n    background-color: #48b0f7;\r\n    color: #fff\r\n}\r\n\r\n.media-chat[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding: 6px 8px;\r\n    margin: 4px 0;\r\n    background-color: #f5f6f7;\r\n    border-radius: 3px\r\n}\r\n\r\n.border-light[_ngcontent-%COMP%] {\r\n    border-color: #f1f2f3 !important\r\n}\r\n\r\n.bt-1[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #ebebeb !important\r\n}\r\n\r\n.publisher[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 12px 20px;\r\n    background-color: #f9fafb\r\n}\r\n\r\n.publisher[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child {\r\n    margin-left: 0\r\n}\r\n\r\n.publisher[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] {\r\n    margin: 0 8px\r\n}\r\n\r\n.publisher-input[_ngcontent-%COMP%] {\r\n    flex-grow: 1;\r\n    border: none;\r\n    outline: none !important;\r\n    background-color: transparent\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    font-family: Roboto, sans-serif;\r\n    font-weight: 300\r\n}\r\n\r\n.publisher-btn[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    border: none;\r\n    color: #8b95a5;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n    overflow: -moz-hidden-unscrollable;\r\n    transition: .2s linear\r\n}\r\n\r\n.file-group[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    overflow: hidden\r\n}\r\n\r\n.publisher-btn[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    border: none;\r\n    color: #cac7c7;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n    overflow: -moz-hidden-unscrollable;\r\n    transition: .2s linear\r\n}\r\n\r\n.file-group[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    opacity: 0;\r\n    z-index: -1;\r\n    width: 20px\r\n}\r\n\r\n.text-info[_ngcontent-%COMP%] {\r\n    color: #48b0f7 !important\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUVuQix5Q0FBeUM7SUFFekM7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUVJLGFBQWE7SUFFYiw4QkFBOEI7SUFFOUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0I7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUVJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBRWxCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUVJLGFBQWE7SUFDYjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBRUksOEJBQThCO0lBRTlCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBRWxCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBOztJQUVJLFdBQVc7SUFFWCxTQUFTO0lBQ1Q7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFFWCxTQUFTO0lBQ1Q7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBR2xCO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUVsQjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFFbEIsYUFBYTtJQUViLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBRUksWUFBWTtJQUNaLFlBQVk7SUFDWix3QkFBd0I7SUFDeEI7QUFDSjs7QUFFQTs7Ozs7SUFLSSwrQkFBK0I7SUFDL0I7QUFDSjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0NBQWtDO0lBRWxDO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0NBQWtDO0lBRWxDO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0k7QUFDSiIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ib3JkZXJlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViXHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC41cztcclxuICAgIHRyYW5zaXRpb246IC41c1xyXG59XHJcblxyXG4ucGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiAzcmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWZhXHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKC4yNXJlbSAtIDFweCkgY2FsYyguMjVyZW0gLSAxcHgpIDAgMFxyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg3NywgODIsIDg5LCAwLjA3KVxyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGUge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogbm9uZVxyXG59XHJcblxyXG5oNC5jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweFxyXG59XHJcblxyXG4uY2FyZC1oZWFkZXI+KjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMFxyXG59XHJcblxyXG4uY2FyZC1oZWFkZXI+KiB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHhcclxufVxyXG5cclxuLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgY29sb3I6ICM0ZDUyNTkgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGU3ZWE7XHJcbiAgICBib3JkZXItY29sb3I6ICNlNGU3ZWE7XHJcbiAgICBjb2xvcjogI2ZmZlxyXG59XHJcblxyXG4uYnRuLXhzIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHBhZGRpbmc6IDJweCA4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweFxyXG59XHJcblxyXG4uYnRuLXhzOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnRcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDc3LCA4MiwgODksIDAuMDcpXHJcbn1cclxuXHJcbi5wcy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbn1cclxuXHJcbi5wcy1jb250YWluZXIge1xyXG4gICAgLW1zLXRvdWNoLWFjdGlvbjogYXV0bztcclxuICAgIHRvdWNoLWFjdGlvbjogYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZVxyXG59XHJcblxyXG4ubWVkaWEtY2hhdCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2NHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMFxyXG59XHJcblxyXG4ubWVkaWEge1xyXG4gICAgcGFkZGluZzogMTZweCAxMnB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXJcclxufVxyXG5cclxuLm1lZGlhIC5hdmF0YXIge1xyXG4gICAgZmxleC1zaHJpbms6IDBcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjc7XHJcbiAgICBjb2xvcjogIzhiOTVhNTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcclxufVxyXG5cclxuLm1lZGlhLWNoYXQgLm1lZGlhLWJvZHkge1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogaW5pdGlhbDtcclxuICAgIGZsZXg6IGluaXRpYWw7XHJcbiAgICBkaXNwbGF5OiB0YWJsZVxyXG59XHJcblxyXG4ubWVkaWEtYm9keSB7XHJcbiAgICBtaW4td2lkdGg6IDBcclxufVxyXG5cclxuLm1lZGlhLWNoYXQgLm1lZGlhLWJvZHkgcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA2cHggOHB4O1xyXG4gICAgbWFyZ2luOiA0cHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgY29sb3I6ICM5YjliOWJcclxufVxyXG5cclxuLm1lZGlhPioge1xyXG4gICAgbWFyZ2luOiAwIDhweFxyXG59XHJcblxyXG4ubWVkaWEtY2hhdCAubWVkaWEtYm9keSBwLm1ldGEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvcGFjaXR5OiAuOFxyXG59XHJcblxyXG4ubWVkaWEtbWV0YS1kYXkge1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGNvbG9yOiAjOGI5NWE1O1xyXG4gICAgb3BhY2l0eTogLjg7XHJcbiAgICBmb250LXdlaWdodDogNDAwXHJcbn1cclxuXHJcbi5tZWRpYSB7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDEycHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhclxyXG59XHJcblxyXG4ubWVkaWEtbWV0YS1kYXk6OmJlZm9yZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHhcclxufVxyXG5cclxuLm1lZGlhLW1ldGEtZGF5OjpiZWZvcmUsXHJcbi5tZWRpYS1tZXRhLWRheTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgZmxleDogMSAxO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYmViZWJcclxufVxyXG5cclxuLm1lZGlhLW1ldGEtZGF5OjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICBmbGV4OiAxIDE7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ViZWJlYlxyXG59XHJcblxyXG4ubWVkaWEtbWV0YS1kYXk6OmFmdGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4XHJcbn1cclxuXHJcbi5tZWRpYS1jaGF0Lm1lZGlhLWNoYXQtcmV2ZXJzZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2NHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiByZXZlcnNlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlXHJcbn1cclxuXHJcbi5tZWRpYS1jaGF0IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDY0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwXHJcbn1cclxuXHJcbi5tZWRpYSB7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDEycHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhclxyXG59XHJcblxyXG4ubWVkaWEtY2hhdC5tZWRpYS1jaGF0LXJldmVyc2UgLm1lZGlhLWJvZHkgcCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjbGVhcjogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhiMGY3O1xyXG4gICAgY29sb3I6ICNmZmZcclxufVxyXG5cclxuLm1lZGlhLWNoYXQgLm1lZGlhLWJvZHkgcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA2cHggOHB4O1xyXG4gICAgbWFyZ2luOiA0cHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHhcclxufVxyXG5cclxuLmJvcmRlci1saWdodCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmMWYyZjMgIWltcG9ydGFudFxyXG59XHJcblxyXG4uYnQtMSB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ViZWJlYiAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5wdWJsaXNoZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiXHJcbn1cclxuXHJcbi5wdWJsaXNoZXI+KjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMFxyXG59XHJcblxyXG4ucHVibGlzaGVyPioge1xyXG4gICAgbWFyZ2luOiAwIDhweFxyXG59XHJcblxyXG4ucHVibGlzaGVyLWlucHV0IHtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxyXG59XHJcblxyXG5idXR0b24sXHJcbmlucHV0LFxyXG5vcHRncm91cCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMFxyXG59XHJcblxyXG4ucHVibGlzaGVyLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjOGI5NWE1O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3ZlcmZsb3c6IC1tb3otaGlkZGVuLXVuc2Nyb2xsYWJsZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IC4ycyBsaW5lYXJcclxufVxyXG5cclxuLmZpbGUtZ3JvdXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxyXG59XHJcblxyXG4ucHVibGlzaGVyLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjY2FjN2M3O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3ZlcmZsb3c6IC1tb3otaGlkZGVuLXVuc2Nyb2xsYWJsZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IC4ycyBsaW5lYXJcclxufVxyXG5cclxuLmZpbGUtZ3JvdXAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgd2lkdGg6IDIwcHhcclxufVxyXG5cclxuLnRleHQtaW5mbyB7XHJcbiAgICBjb2xvcjogIzQ4YjBmNyAhaW1wb3J0YW50XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.css']
            }]
    }], function () { return [{ type: _services_chat_service__WEBPACK_IMPORTED_MODULE_0__["ChatService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: src_app_admin_services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }, { type: _services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "4IWZ":
/*!***************************************!*\
  !*** ./src/app/test/video.service.ts ***!
  \***************************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/signalr */ "6HpG");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");




class VideoService {
    constructor() {
        this.messageReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isConnected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    createConnection(username) {
        this._hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]()
            .withUrl(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}MessageHub?username=${username}`)
            .configureLogging(_microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information)
            .build();
    }
    startConnection() {
        this._hubConnection
            .start()
            .then(() => {
            console.log('Started service . . .');
            this.isConnected.emit(true);
        })
            .catch(err => {
            console.log('Error while establishing connection...');
        });
    }
    sendMessage(username = 'aftab@gmail.com', message) {
        this._hubConnection.invoke("SendMessage", username, message);
    }
    registerOnServerEvents() {
        this._hubConnection.on('MessageReceived', (data) => {
            this.messageReceived.emit(data);
        });
        this._hubConnection.onclose(() => {
            console.log("Service has been stopped. . . .");
            this.isConnected.emit(false);
        });
    }
}
VideoService.ɵfac = function VideoService_Factory(t) { return new (t || VideoService)(); };
VideoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VideoService, factory: VideoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5U7z":
/*!************************************************!*\
  !*** ./src/app/admin/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _models_base_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/base-view-model */ "gKIg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "CHqn");
/* harmony import */ var rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/delay */ "U2p0");
/* harmony import */ var rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/token.service */ "xsTi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");











function LoginComponent_h6_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function LoginComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Incorrect email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Minimum length is 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 28);
} }
function LoginComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
const _c1 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class LoginComponent extends _models_base_view_model__WEBPACK_IMPORTED_MODULE_0__["BaseCrudApi"] {
    constructor(formBuilder, userService, router, tokenService) {
        super();
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.tokenService = tokenService;
        this.submitted = false;
        this.loginForm = this.formBuilder.group({
            UserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
        });
    }
    ngOnInit() { }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    get getEmail() {
        return this.loginForm.get('UserName');
    }
    get getPassword() {
        return this.loginForm.get('Password');
    }
    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.LoginModel = new _services_user_service__WEBPACK_IMPORTED_MODULE_3__["LoginModel"](this.loginForm.value);
        this.isLoading = true;
        this.userService.Login(this.LoginModel)
            .pipe(Object(rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_4__["delay"])(500))
            .subscribe((res) => {
            if (res.isSuccess) {
                this.tokenService.setUser(res.model);
                this.router.navigateByUrl('/Users');
            }
            else {
                this.isError = true;
                this.errorMessage = res.message;
            }
        }, (error) => {
            this.isError = true;
            this.errorMessage = error.message;
        }, () => {
            this.isLoading = false;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 36, vars: 18, consts: [["id", "layoutAuthentication"], ["id", "layoutAuthentication_content"], [1, "container", "py-5"], [1, "row", "justify-content-center"], [1, "col-lg-5"], [1, "card", "shadow-lg", "border-0", "rounded-lg", "mt-5"], [1, "card-header"], [1, "text-center", "font-weight-light", "my-4"], [1, "card-body"], ["class", "card-subtitle mb-2 text-center text-danger", 4, "ngIf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "small", "mb-1"], ["formControlName", "UserName", "type", "email", "placeholder", "Enter email", "autocomplete", "true", 1, "form-control", "py-4", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "inputPassword", 1, "small", "mb-1"], ["formControlName", "Password", "type", "password", "id", "inputPassword", "type", "text", "placeholder", "Enter password", 1, "form-control", "py-4", 3, "ngClass"], [1, "form-group", "d-flex", "align-items-center", "justify-content-between", "mt-4", "mb-0"], ["href", "password.html", 1, "small"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "sr-only", 4, "ngIf"], [4, "ngIf"], [1, "card-footer", "text-center"], [1, "small"], ["routerLink", "/Register"], [1, "card-subtitle", "mb-2", "text-center", "text-danger"], [1, "invalid-feedback"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "sr-only"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginComponent_h6_11_Template, 2, 1, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, LoginComponent_div_23_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, LoginComponent_div_24_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, LoginComponent_span_29_Template, 1, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, LoginComponent_span_30_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, LoginComponent_span_31_Template, 2, 0, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Need an account? Sign up!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](12, _c0, (ctx.getEmail == null ? null : ctx.getEmail.valid) && ((ctx.getEmail == null ? null : ctx.getEmail.dirty) || (ctx.getEmail == null ? null : ctx.getEmail.touched)) || (ctx.getEmail == null ? null : ctx.getEmail.valid) && ctx.submitted, (ctx.getEmail == null ? null : ctx.getEmail.invalid) && ((ctx.getEmail == null ? null : ctx.getEmail.dirty) || (ctx.getEmail == null ? null : ctx.getEmail.touched)) || (ctx.getEmail == null ? null : ctx.getEmail.invalid) && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.getEmail == null ? null : ctx.getEmail.errors == null ? null : ctx.getEmail.errors.required) && ((ctx.getEmail == null ? null : ctx.getEmail.touched) || (ctx.getEmail == null ? null : ctx.getEmail.dirty)) || (ctx.getEmail == null ? null : ctx.getEmail.errors == null ? null : ctx.getEmail.errors.required) && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.getEmail == null ? null : ctx.getEmail.errors == null ? null : ctx.getEmail.errors.email) && (ctx.getEmail == null ? null : ctx.getEmail.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](15, _c1, (ctx.getPassword == null ? null : ctx.getPassword.invalid) && ((ctx.getPassword == null ? null : ctx.getPassword.touched) || (ctx.getPassword == null ? null : ctx.getPassword.dirty)) || (ctx.getPassword == null ? null : ctx.getPassword.invalid) && ctx.submitted, (ctx.getPassword == null ? null : ctx.getPassword.valid) && ((ctx.getPassword == null ? null : ctx.getPassword.touched) || (ctx.getPassword == null ? null : ctx.getPassword.dirty)) || (ctx.getPassword == null ? null : ctx.getPassword.valid) && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.getPassword == null ? null : ctx.getPassword.errors == null ? null : ctx.getPassword.errors.required) && (ctx.getPassword == null ? null : ctx.getPassword.touched) || (ctx.getPassword == null ? null : ctx.getPassword.errors == null ? null : ctx.getPassword.errors.required) && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.getPassword == null ? null : ctx.getPassword.errors == null ? null : ctx.getPassword.errors.minlength) && (ctx.getPassword == null ? null : ctx.getPassword.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "9LZo":
/*!******************************************************!*\
  !*** ./src/app/admin/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _models_base_view_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/base-view-model */ "gKIg");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "TYVA");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "CHqn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/token.service */ "xsTi");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");











function RegisterComponent_h6_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function RegisterComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Min length 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Min length 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Min length 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is not in correct format");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password does not match the confirm password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 35);
} }
function RegisterComponent_span_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
class RegisterComponent extends _models_base_view_model__WEBPACK_IMPORTED_MODULE_2__["BaseCrudApi"] {
    constructor(formBuilder, userService, router, tokenService, toastrService) {
        super();
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.tokenService = tokenService;
        this.toastrService = toastrService;
        this.submitted = false;
        this.registerForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
        });
    }
    ngOnInit() {
        this.registerForm.valueChanges.subscribe(field => {
            if (field.password !== field.confirmPassword) {
                this.registerForm.setErrors({ mismatch: true });
            }
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.registerModel = new _models_user__WEBPACK_IMPORTED_MODULE_3__["RegisterDTO"](this.registerForm.value);
        this.isLoading = true;
        this.userService.Register(this.registerModel)
            .subscribe(res => {
            if (!res.isSuccess) {
                this.isError = true;
                this.errorMessage = res.message;
                return;
            }
            this.router.navigateByUrl("/Login");
            console.log(JSON.stringify(res));
        }, (error) => {
            console.log(JSON.stringify(error));
            this.isLoading = false;
        }, () => {
            this.isLoading = false;
        });
    }
    get getFirstName() {
        return this.registerForm.get('firstName');
    }
    get getLastName() {
        return this.registerForm.get('lastName');
    }
    get getUsername() {
        return this.registerForm.get('username');
    }
    get getEmail() {
        return this.registerForm.get('email');
    }
    get getPassword() {
        return this.registerForm.get('password');
    }
    get getConfirmPassword() {
        return this.registerForm.get('confirmPassword');
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 65, vars: 40, consts: [["id", "layoutAuthentication"], ["id", "layoutAuthentication_content"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "card", "shadow-lg", "border-0", "rounded-lg", "mt-5"], [1, "card-header"], [1, "text-center", "font-weight-light", "my-4"], [1, "card-body"], ["class", "card-subtitle mb-2 text-center text-danger", 4, "ngIf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "col-md-6"], [1, "form-group"], ["for", "inputFirstName", 1, "small", "mb-1"], ["formControlName", "firstName", "id", "inputFirstName", "type", "text", "placeholder", "Enter first name", 1, "form-control", "py-4", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "inputLastName", 1, "small", "mb-1"], ["formControlName", "lastName", "id", "inputLastName", "type", "text", "placeholder", "Enter last name", 1, "form-control", "py-4", 3, "ngClass"], ["for", "inputEmailAddress", 1, "small", "mb-1"], ["formControlName", "username", "id", "inputEmailAddress", "type", "text", "aria-describedby", "emailHelp", "placeholder", "Enter username", 1, "form-control", "py-4", 3, "ngClass"], ["formControlName", "email", "id", "inputEmailAddress", "type", "email", "aria-describedby", "emailHelp", "placeholder", "Enter email address", 1, "form-control", "py-4", 3, "ngClass"], ["for", "inputPassword", 1, "small", "mb-1"], ["formControlName", "password", "id", "inputPassword", "type", "password", "placeholder", "Enter password", 1, "form-control", "py-4", 3, "ngClass"], ["for", "inputConfirmPassword", 1, "small", "mb-1"], ["formControlName", "confirmPassword", "id", "inputConfirmPassword", "type", "password", "placeholder", "Confirm password", 1, "form-control", "py-4", 3, "ngClass"], [1, "form-group", "mt-4", "mb-0"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], [4, "ngIf"], [1, "card-footer", "text-center"], [1, "small"], ["routerLink", "/Login", "routerLinkActive", "active"], [1, "card-subtitle", "mb-2", "text-center", "text-danger"], [1, "invalid-feedback"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RegisterComponent_h6_11_Template, 2, 1, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegisterComponent_div_19_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RegisterComponent_div_20_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RegisterComponent_div_26_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RegisterComponent_div_27_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, RegisterComponent_div_34_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RegisterComponent_div_35_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, RegisterComponent_div_41_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, RegisterComponent_div_42_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, RegisterComponent_div_49_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, RegisterComponent_div_50_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, RegisterComponent_div_56_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, RegisterComponent_span_59_Template, 1, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, RegisterComponent_span_60_Template, 2, 0, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Have an account? Go to login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c0, (ctx.getFirstName == null ? null : ctx.getFirstName.valid) && (ctx.getFirstName == null ? null : ctx.getFirstName.touched) || (ctx.getFirstName == null ? null : ctx.getFirstName.valid) && ctx.submitted, (ctx.getFirstName == null ? null : ctx.getFirstName.invalid) && (ctx.getFirstName == null ? null : ctx.getFirstName.touched) || (ctx.getFirstName == null ? null : ctx.getFirstName.invalid) && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.getFirstName == null ? null : ctx.getFirstName.errors == null ? null : ctx.getFirstName.errors.required) && (ctx.getFirstName == null ? null : ctx.getFirstName.touched) || (ctx.getFirstName == null ? null : ctx.getFirstName.errors == null ? null : ctx.getFirstName.errors.required) && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.getFirstName == null ? null : ctx.getFirstName.errors == null ? null : ctx.getFirstName.errors.minlength) && (ctx.getFirstName == null ? null : ctx.getFirstName.touched) || (ctx.getFirstName == null ? null : ctx.getFirstName.errors == null ? null : ctx.getFirstName.errors.minlength) && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c0, (ctx.getLastName == null ? null : ctx.getLastName.valid) && (ctx.getLastName == null ? null : ctx.getLastName.touched) || (ctx.getLastName == null ? null : ctx.getLastName.valid) && ctx.submitted, (ctx.getLastName == null ? null : ctx.getLastName.invalid) && (ctx.getLastName == null ? null : ctx.getLastName.touched) || (ctx.getLastName == null ? null : ctx.getLastName.invalid) && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.getLastName == null ? null : ctx.getLastName.errors == null ? null : ctx.getLastName.errors.required) && (ctx.getLastName == null ? null : ctx.getLastName.touched) || (ctx.getLastName == null ? null : ctx.getLastName.errors == null ? null : ctx.getLastName.errors.required) && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.getLastName == null ? null : ctx.getLastName.errors == null ? null : ctx.getLastName.errors.minlength) && (ctx.getLastName == null ? null : ctx.getLastName.touched) || (ctx.getLastName == null ? null : ctx.getLastName.errors == null ? null : ctx.getLastName.errors.minlength) && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](28, _c0, (ctx.getUsername == null ? null : ctx.getUsername.valid) && (ctx.getUsername == null ? null : ctx.getUsername.touched) || (ctx.getUsername == null ? null : ctx.getUsername.valid) && ctx.submitted, (ctx.getUsername == null ? null : ctx.getUsername.invalid) && (ctx.getUsername == null ? null : ctx.getUsername.touched) || (ctx.getUsername == null ? null : ctx.getUsername.invalid) && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.getUsername == null ? null : ctx.getUsername.errors == null ? null : ctx.getUsername.errors.required) && (ctx.getUsername == null ? null : ctx.getUsername.touched) || (ctx.getUsername == null ? null : ctx.getUsername.errors == null ? null : ctx.getUsername.errors.required) && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.getUsername == null ? null : ctx.getUsername.errors == null ? null : ctx.getUsername.errors.minlength) && (ctx.getUsername == null ? null : ctx.getUsername.touched) || (ctx.getUsername == null ? null : ctx.getUsername.errors == null ? null : ctx.getUsername.errors.minlength) && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](31, _c0, (ctx.getEmail == null ? null : ctx.getEmail.valid) && (ctx.getEmail == null ? null : ctx.getEmail.touched) || (ctx.getEmail == null ? null : ctx.getEmail.valid) && ctx.submitted, (ctx.getEmail == null ? null : ctx.getEmail.invalid) && (ctx.getEmail == null ? null : ctx.getEmail.touched) || (ctx.getEmail == null ? null : ctx.getEmail.invalid) && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.getEmail == null ? null : ctx.getEmail.errors == null ? null : ctx.getEmail.errors.required) && (ctx.getEmail == null ? null : ctx.getEmail.touched) || (ctx.getEmail == null ? null : ctx.getEmail.errors == null ? null : ctx.getEmail.errors.required) && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.getEmail == null ? null : ctx.getEmail.errors == null ? null : ctx.getEmail.errors.email) && (ctx.getEmail == null ? null : ctx.getEmail.touched) || (ctx.getEmail == null ? null : ctx.getEmail.errors == null ? null : ctx.getEmail.errors.email) && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](34, _c0, (ctx.getPassword == null ? null : ctx.getPassword.valid) && (ctx.getPassword == null ? null : ctx.getPassword.touched) || (ctx.getPassword == null ? null : ctx.getPassword.valid) && ctx.submitted, (ctx.getPassword == null ? null : ctx.getPassword.invalid) && (ctx.getPassword == null ? null : ctx.getPassword.touched) || (ctx.getPassword == null ? null : ctx.getPassword.invalid) && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.getPassword == null ? null : ctx.getPassword.errors == null ? null : ctx.getPassword.errors.required) && (ctx.getPassword == null ? null : ctx.getPassword.touched) || (ctx.getPassword == null ? null : ctx.getPassword.errors == null ? null : ctx.getPassword.errors.required) && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.getPassword == null ? null : ctx.getPassword.errors == null ? null : ctx.getPassword.errors.mismatch) && (ctx.getPassword == null ? null : ctx.getPassword.touched) || (ctx.getPassword == null ? null : ctx.getPassword.errors == null ? null : ctx.getPassword.errors.mismatch) && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](37, _c0, (ctx.getConfirmPassword == null ? null : ctx.getConfirmPassword.valid) && (ctx.getConfirmPassword == null ? null : ctx.getConfirmPassword.touched) || (ctx.getPassword == null ? null : ctx.getPassword.valid) && ctx.submitted, (ctx.getConfirmPassword == null ? null : ctx.getConfirmPassword.invalid) && (ctx.getConfirmPassword == null ? null : ctx.getConfirmPassword.touched) || (ctx.getPassword == null ? null : ctx.getPassword.invalid) && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.getConfirmPassword == null ? null : ctx.getConfirmPassword.errors == null ? null : ctx.getConfirmPassword.errors.required) && (ctx.getConfirmPassword == null ? null : ctx.getConfirmPassword.touched) || (ctx.getConfirmPassword == null ? null : ctx.getConfirmPassword.errors == null ? null : ctx.getConfirmPassword.errors.required) && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "A6sH":
/*!*************************************************************************!*\
  !*** ./src/app/shared/notfoundanyrecord/notfoundanyrecord.component.ts ***!
  \*************************************************************************/
/*! exports provided: NotfoundanyrecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundanyrecordComponent", function() { return NotfoundanyrecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NotfoundanyrecordComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotfoundanyrecordComponent.ɵfac = function NotfoundanyrecordComponent_Factory(t) { return new (t || NotfoundanyrecordComponent)(); };
NotfoundanyrecordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotfoundanyrecordComponent, selectors: [["app-notfoundanyrecord"]], decls: 8, vars: 0, consts: [[1, "alert", "alert-dismissible", "alert-warning"], ["type", "button", "data-dismiss", "alert", 1, "close"], [1, "alert-heading"], [1, "mb-0"]], template: function NotfoundanyrecordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nothing found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "We found nothing from your search.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3Rmb3VuZGFueXJlY29yZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotfoundanyrecordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notfoundanyrecord',
                templateUrl: './notfoundanyrecord.component.html',
                styleUrls: ['./notfoundanyrecord.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AgXD":
/*!****************************************************!*\
  !*** ./src/app/components/about/AboutComponent.ts ***!
  \****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["video"];
const _c1 = ["screenvideo"];
const _c2 = ["audioCtr"];
class AboutComponent {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this._recordedChunks = [];
        this.width = 200;
        this.height = 220;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.btnScreenShare = '';
        this.btnScreenShareColor = '';
        //super(ngZone);
    }
    ngAfterViewInit() {
        //this.setAudioVideo();
        //this.webRTCService.createConnection();
        //this.webRTCService.createOffer();
        //this.startWithAudio();
    }
    StartStopScreenShare() {
        if (this._screenTrack) {
            this._screenTrack.stop();
            this._screenTrack = undefined;
            this.btnScreenShare = 'Share Screen';
            return;
        }
        const mediaDevices = navigator.mediaDevices;
        var sc_stream = mediaDevices.getDisplayMedia({
            audio: true,
            video: { frameRate: 1 },
        })
            .then((stream) => {
            this._screenStream = stream;
            debugger;
            if (this._screenStream && this._screenStream.getVideoTracks().length > 0) {
                debugger;
                //this._screenTrack = this._screenStream.getVideoTracks()[0];
                this.screenvideo.nativeElement.srcObject = this._screenStream; //new MediaStream([this._screenTrack]);
                //this.screenvideo.nativeElement.play();
            }
            this.ngZone.run(() => {
                this.btnScreenShare = "On Activate";
                this.btnScreenShareColor = 'text-success';
            });
            this._screenStream.oninactive = (eee) => {
                debugger;
                // stop both video and audio
                this._screenStream.getTracks().forEach((track) => {
                    debugger;
                    track.stop();
                    console.log(track.id);
                    console.log(track);
                });
                this._screenStream = undefined;
                this.ngZone.run(() => {
                    this.btnScreenShare = "On in active";
                    this.btnScreenShareColor = 'text-danger';
                });
            };
        }).catch((error) => {
            console.log(error);
        });
    }
    setupMediaRecorder(stream) {
        debugger;
        var recordedChunks = [];
        this._mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
        this._mediaRecorder.ondataavailable = (e) => {
            console.log(e.data.size);
            if (e.data.size > 0)
                recordedChunks.push(e.data);
        };
        this._mediaRecorder.onstart = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("On start");
        });
        this._mediaRecorder.onpause = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("On pause");
        });
        this._mediaRecorder.onresume = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("On resume");
        });
    }
    startWithAudio() {
        this._myMediaStream = navigator.mediaDevices.getUserMedia({ video: false, audio: true })
            .then((stream) => {
            debugger;
            this._audioTrack = stream.getAudioTracks()[0];
            this._audioTrack.onmute = (e) => {
                debugger;
                console.log("Muting Audio Track");
            };
            this._audioTrack.onunmute = (e) => {
                this.ngZone.run(() => {
                    debugger;
                    console.log("Unmuting Audio Track");
                    this.btnScreenShare = "Unmuting";
                });
            };
            this.audioCtr.nativeElement.srcObject = stream;
            this.setupMediaRecorder(stream);
        })
            .catch(error => {
            alert(error);
        });
    }
    onClickMe() {
        this.setAudioVideo();
    }
    setAudioVideo() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
            alert("This browser does not support the API yet");
            return;
        }
        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: { width: this.width, height: this.height }
        })
            .then((stream) => {
            this._myMediaStream = stream;
            this.video.nativeElement.srcObject = stream;
            this.video.nativeElement.play();
        })
            .catch((err) => {
            alert(err);
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        // stop both video and audio
        // if (this._myMediaStream.active) {
        //   debugger;
        //   this._myMediaStream.getTracks().forEach((track: MediaStreamTrack) => {
        //     track.stop();
        //   });
        //   this._myMediaStream = null;
        // }  
        console.log('About Destroyed . . . .');
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], viewQuery: function AboutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.screenvideo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.audioCtr = _t.first);
    } }, decls: 8, vars: 4, consts: [[1, "container"], ["type", "number", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "ngClass"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AboutComponent_Template_input_ngModelChange_1_listener($event) { return ctx.width = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_2_listener() { return ctx.ngOnDestroy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Set");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.btnScreenShareColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.btnScreenShare);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, { video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['video']
        }], screenvideo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['screenvideo']
        }], audioCtr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['audioCtr']
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://localhost:44339/Job/GetJobs'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Bxb2":
/*!*********************************************************!*\
  !*** ./src/app/guards/canactiveguardservice.service.ts ***!
  \*********************************************************/
/*! exports provided: CanactiveguardserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanactiveguardserviceService", function() { return CanactiveguardserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _admin_services_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin/services/token.service */ "xsTi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");





class CanactiveguardserviceService {
    constructor(tokenService, router, jwtHelperService) {
        this.tokenService = tokenService;
        this.router = router;
        this.jwtHelperService = jwtHelperService;
        this.Token = localStorage.getItem("access_token");
    }
    canActivate(route, state) {
        var _a, _b;
        let allowedRoles = route.data.allowedRoles;
        console.log(`Allowed Roles of ${(_b = (_a = route.routeConfig) === null || _a === void 0 ? void 0 : _a.component) === null || _b === void 0 ? void 0 : _b.name} : ${JSON.stringify(allowedRoles)}`);
        if (!this.tokenService.isAuthorized(allowedRoles)) {
            this.router.navigate(['/Login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
        else if (this.tokenService.isAuthenticated()) {
            return true;
        }
        else {
            //this.router.navigateByUrl("/Login");
            this.router.navigate(['/Login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
}
CanactiveguardserviceService.ɵfac = function CanactiveguardserviceService_Factory(t) { return new (t || CanactiveguardserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_admin_services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"])); };
CanactiveguardserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanactiveguardserviceService, factory: CanactiveguardserviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanactiveguardserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _admin_services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] }]; }, null); })();


/***/ }),

/***/ "CHqn":
/*!************************************************!*\
  !*** ./src/app/admin/services/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService, LoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class UserService {
    constructor(http) {
        this.http = http;
    }
    GetUsers(page = 1, query = "") {
        let url = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}User/GetUsers?page=${page}&query=${query}`;
        return this.http.get(url);
    }
    SearchUsers(firstname = "") {
        let url = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}User/SearchUsers?firstname=${firstname}`;
        let data = [];
        let count = 1;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
            var _a;
            (_a = res.listModel) === null || _a === void 0 ? void 0 : _a.forEach(u => {
                data.push({
                    id: count++,
                    name: `${u.userName}`
                });
            });
            return data;
        }));
    }
    Register(registerDTO) {
        return this.http.post(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}Account/Register`, registerDTO);
    }
    Login(loginmodel) {
        return this.http.post(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}Account/Login`, loginmodel);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();
class LoginModel {
    constructor(init) {
        Object.assign(this, init);
    }
}


/***/ }),

/***/ "Dnd0":
/*!***************************************************!*\
  !*** ./src/app/twilio/camera/camera.component.ts ***!
  \***************************************************/
/*! exports provided: CameraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraComponent", function() { return CameraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var twilio_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! twilio-video */ "3h4Y");
/* harmony import */ var twilio_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(twilio_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["preview"];
function CameraComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading preview... Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CameraComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.isInitializing = true;
        this.localTracks = [];
    }
    get tracks() {
        return this.localTracks;
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.previewElement && this.previewElement.nativeElement) {
                yield this.initializeDevice();
            }
        });
    }
    initializePreview(deviceInfo) {
        if (deviceInfo) {
            this.initializeDevice(deviceInfo.kind, deviceInfo.deviceId);
        }
        else {
            this.initializeDevice();
        }
    }
    finalizePreview() {
        try {
            if (this.videoTrack) {
                this.videoTrack.detach().forEach(element => element.remove());
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    initializeDevice(kind, deviceId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.isInitializing = true;
                this.finalizePreview();
                this.localTracks = kind && deviceId
                    ? yield this.initializeTracks(kind, deviceId)
                    : yield this.initializeTracks();
                this.videoTrack = this.localTracks.find(t => t.kind === 'video');
                const videoElement = this.videoTrack.attach();
                this.renderer.setStyle(videoElement, 'height', '100%');
                this.renderer.setStyle(videoElement, 'width', '100%');
                this.renderer.appendChild(this.previewElement.nativeElement, videoElement);
            }
            finally {
                this.isInitializing = false;
            }
        });
    }
    initializeTracks(kind, deviceId) {
        if (kind) {
            switch (kind) {
                case 'audioinput':
                    return Object(twilio_video__WEBPACK_IMPORTED_MODULE_2__["createLocalTracks"])({ audio: { deviceId }, video: true });
                case 'videoinput':
                    return Object(twilio_video__WEBPACK_IMPORTED_MODULE_2__["createLocalTracks"])({ audio: true, video: { deviceId } });
            }
        }
        return Object(twilio_video__WEBPACK_IMPORTED_MODULE_2__["createLocalTracks"])({ audio: true, video: true });
    }
}
CameraComponent.ɵfac = function CameraComponent_Factory(t) { return new (t || CameraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
CameraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CameraComponent, selectors: [["app-camera"]], viewQuery: function CameraComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.previewElement = _t.first);
    } }, decls: 3, vars: 1, consts: [["id", "preview"], ["preview", ""], [4, "ngIf"]], template: function CameraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CameraComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isInitializing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW1lcmEuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CameraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-camera',
                templateUrl: './camera.component.html',
                styleUrls: ['./camera.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, { previewElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['preview', { static: false }]
        }] }); })();


/***/ }),

/***/ "EahW":
/*!***************************************************************!*\
  !*** ./src/app/twilio/participants/participants.component.ts ***!
  \***************************************************************/
/*! exports provided: ParticipantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantsComponent", function() { return ParticipantsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = ["list"];
const _c1 = function (a0, a1) { return { "table": a0, "d-none": a1 }; };
const _c2 = function (a0) { return { "d-none": a0 }; };
class ParticipantsComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.participantsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.leaveRoom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get participantCount() {
        return !!this.participants ? this.participants.size : 0;
    }
    get isAlone() {
        return this.participantCount === 0;
    }
    clear() {
        if (this.participants) {
            this.participants.clear();
        }
    }
    initialize(participants) {
        this.participants = participants;
        if (this.participants) {
            this.participants.forEach(participant => this.registerParticipantEvents(participant));
        }
    }
    add(participant) {
        if (this.participants && participant) {
            this.participants.set(participant.sid, participant);
            this.registerParticipantEvents(participant);
        }
    }
    remove(participant) {
        if (this.participants && this.participants.has(participant.sid)) {
            this.participants.delete(participant.sid);
        }
    }
    loudest(participant) {
        this.dominantSpeaker = participant;
    }
    onLeaveRoom() {
        this.leaveRoom.emit(true);
    }
    registerParticipantEvents(participant) {
        if (participant) {
            participant.tracks.forEach(publication => this.subscribe(publication));
            participant.on('trackPublished', publication => this.subscribe(publication));
            participant.on('trackUnpublished', publication => {
                if (publication && publication.track) {
                    this.detachRemoteTrack(publication.track);
                }
            });
        }
    }
    subscribe(publication) {
        if (publication && publication.on) {
            publication.on('subscribed', (track) => this.attachRemoteTrack(track));
            publication.on('unsubscribed', (track) => this.detachRemoteTrack(track));
        }
    }
    attachRemoteTrack(track) {
        if (this.isAttachable(track)) {
            const element = track.attach();
            this.renderer.data.id = track.sid;
            this.renderer.setStyle(element, 'width', '95%');
            this.renderer.setStyle(element, 'margin-left', '2.5%');
            this.renderer.appendChild(this.listRef.nativeElement, element);
            this.participantsChanged.emit(true);
        }
    }
    detachRemoteTrack(track) {
        if (this.isDetachable(track)) {
            track.detach().forEach(el => el.remove());
            this.participantsChanged.emit(true);
        }
    }
    isAttachable(track) {
        return !!track &&
            (track.attach !== undefined ||
                track.attach !== undefined);
    }
    isDetachable(track) {
        return !!track &&
            (track.detach !== undefined ||
                track.detach !== undefined);
    }
}
ParticipantsComponent.ɵfac = function ParticipantsComponent_Factory(t) { return new (t || ParticipantsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ParticipantsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParticipantsComponent, selectors: [["app-participants"]], viewQuery: function ParticipantsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listRef = _t.first);
    } }, inputs: { activeRoomName: "activeRoomName" }, outputs: { participantsChanged: "participantsChanged", leaveRoom: "leaveRoom" }, decls: 17, vars: 8, consts: [["id", "participant-list"], ["id", "alone", 3, "ngClass"], [1, "text-center", "text-monospace", "h3", 2, "display", "table-cell"], [1, "far", "fa-frown"], [3, "ngClass"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-light", "shadow"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["type", "button", "title", "Click to leave this room.", 1, "btn", "btn-lg", "leave-room", 3, "click"], [1, "fas", "fa-times-circle", 2, "color", "red"], ["list", ""]], template: function ParticipantsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " You're the only one in this room. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " As others join, they'll start showing up here... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParticipantsComponent_Template_button_click_12_listener() { return ctx.onLeaveRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, ctx.isAlone, !ctx.isAlone));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx.isAlone));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Leave \"", ctx.activeRoomName, "\" Room? ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0aWNpcGFudHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParticipantsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-participants',
                templateUrl: './participants.component.html',
                styleUrls: ['./participants.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { listRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['list', { static: false }]
        }], participantsChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['participantsChanged']
        }], leaveRoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['leaveRoom']
        }], activeRoomName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['activeRoomName']
        }] }); })();


/***/ }),

/***/ "G2Gn":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_job__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/job */ "bRJT");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var src_app_services_notif_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notif.service */ "qFTZ");
/* harmony import */ var src_app_services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/job.service */ "qLOZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_admin_services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin/services/token.service */ "xsTi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









let PEER_CONNECTION_CONFIG = {
    iceServers: [
        { urls: "stun:stun.services.mozilla.com" },
        { urls: "stun:stun.l.google.com:19302" },
        {
            urls: "turn:numb.viagenie.ca",
            username: "khanxhahrukh@gmail.com",
            credential: "file348132"
        }
    ]
};
class ContactComponent {
    constructor(notif, jobS, http, ngZone, tokenService) {
        this.notif = notif;
        this.jobS = jobS;
        this.http = http;
        this.ngZone = ngZone;
        this.tokenService = tokenService;
        this.ReceivedOffer = "";
        this.connectionClass = "btn-primary";
        this.Creator = false;
        this.conf = { iceServers: [] };
    }
    ngOnInit() {
        this.jobS.getIceServers().subscribe(res => {
            res === null || res === void 0 ? void 0 : res.forEach(x => {
                var _a;
                console.log(JSON.stringify(x));
                (_a = this.conf.iceServers) === null || _a === void 0 ? void 0 : _a.push({
                    credential: x.credential,
                    urls: x.urls,
                    username: x.username
                });
            });
        });
    }
    ngAfterViewInit() {
        this.subscribeToEvents();
    }
    startCon() {
        this.notif.startConnection();
        this.notif.registerOnServerEvents();
    }
    sendOffer() {
        console.log(this.conf);
        this.localPeerConnection = new RTCPeerConnection(this.conf);
        this.sendChannel = this.localPeerConnection.createDataChannel("DataChannel");
        // navigator.mediaDevices.getUserMedia({ video: true, audio:  false })
        // .then((stream: MediaStream) => {
        //   stream.getTracks().forEach((track: MediaStreamTrack) => {
        //     window.localPeerConnection.addTrack(track);
        //    });
        // });
        // window.localPeerConnection.ontrack = this.onlocaltrack;
        this.localPeerConnection.onicecandidate = this.gotLocalCandidate;
        this.localPeerConnection.createOffer()
            .then((ofr) => {
            console.log(`Local Description OR Offer: ${JSON.stringify(ofr)}`);
            this.localPeerConnection.setLocalDescription(ofr)
                .then(() => console.log("Local setLocalDescription successfully"))
                .catch(err => console.log("Error Local setLocalDescription: " + err));
            console.info("Offer Created Successfully");
            this.Creator = true;
            let model = new src_app_models_job__WEBPACK_IMPORTED_MODULE_1__["OfferAnswerClass"]();
            model.mysdp = ofr;
            model.username = this.tokenService.getUserName();
            this.notif.SendOffer(JSON.stringify(model)); // Sending offer
        })
            .catch(error => {
            alert(error);
        });
    }
    subscribeToEvents() {
        this.notif.OfferReceived.subscribe((offer) => {
            this.ngZone.run(() => {
                if (!this.Creator) {
                    this.ReceivedOffer = offer;
                    console.log("Offer Received successfully.");
                    this.GotOffer(offer);
                    $('#modal_aside_left').modal('toggle'); //or  $('#IDModal').modal('hide');
                }
            });
        }, (error) => {
            alert("Received offer error: " + error);
        }, () => { });
        this.notif.AnswerReceived.subscribe((ans) => {
            this.ngZone.run(() => {
                if (!!this.Creator) {
                    console.log("Answer received successfully.");
                    this.GotAnswer(ans);
                }
            });
        });
        this.notif.IceCandidateReceived.subscribe((candidate) => {
            this.ngZone.run(() => {
                var _a, _b;
                debugger;
                let model = JSON.parse(candidate);
                if (model.side == "Local") {
                    (_a = window.remotePeerConnection) === null || _a === void 0 ? void 0 : _a.addIceCandidate(model);
                }
                else {
                    (_b = window.localPeerConnection) === null || _b === void 0 ? void 0 : _b.addIceCandidate(model);
                }
            });
        });
        this.notif.connectionEstablished.subscribe((isConnected) => {
            this.ngZone.run(() => {
                this.connectionClass = isConnected == true ? "btn-success" : "btn-danger";
            });
        });
    }
    GotOffer(offer) {
        let model = new src_app_models_job__WEBPACK_IMPORTED_MODULE_1__["OfferAnswerClass"]();
        model = JSON.parse(offer);
        this.remotePeerConnection = new RTCPeerConnection(this.conf);
        // navigator.mediaDevices.getUserMedia({ video: true, audio:  false })
        // .then((stream: MediaStream) => {
        //   stream.getTracks().forEach((track: MediaStreamTrack) => {
        //     window.remotePeerConnection.addTrack(track);
        //    });
        // });
        this.remotePeerConnection.ontrack = this.onremotetrack;
        this.remotePeerConnection.setRemoteDescription(model.mysdp)
            .then(() => console.log("Remote setRemoteDescription successfully"))
            .catch(err => console.log("Error Remote setRemoteDescription: " + err));
        this.remotePeerConnection.onicecandidate = this.gotRemoteIceCandidate;
        this.remotePeerConnection.createAnswer()
            .then(ans => {
            console.log(`Remote Description OR Answer: ${JSON.stringify(ans)}`);
            console.log("Answer Created successfully");
            this.remotePeerConnection.setLocalDescription(ans)
                .then(() => console.log("Remote setLocalDescription successfully"))
                .catch(err => console.log("Error Remote setLocalDescription: " + err));
            let m = new src_app_models_job__WEBPACK_IMPORTED_MODULE_1__["OfferAnswerClass"]();
            m.mysdp = ans;
            m.username = this.tokenService.getUserName();
            this.notif.SendAnswer(JSON.stringify(m));
        });
    }
    GotAnswer(answer) {
        let model = new src_app_models_job__WEBPACK_IMPORTED_MODULE_1__["OfferAnswerClass"]();
        model = JSON.parse(answer);
        this.localPeerConnection.setRemoteDescription(model.mysdp)
            .then(() => console.log("Local setRemoteDescription successfully"))
            .catch(error => console.log("Error Local setRemoteDescription: " + error));
    }
    gotLocalCandidate(event) {
        //debugger;
        console.log("Local Ice Callback");
        console.log('Local ICE Candidate: \n' + JSON.stringify(event.candidate));
        //event.side = "Local";
        console.log(JSON.stringify(this.notif));
        //this.notif.SendOnIceCandidate(JSON.stringify(event));
        console.log("Local Candidate send successfully");
        console.log("Local Candidate iceGatheringState: " + event.target.iceGatheringState);
        // if (event.candidate){
        //   window.remotePeerConnection?.addIceCandidate(event.candidate);
        //   console.log('Local ICE Candidate: \n' + JSON.stringify(event.candidate));
        // }
    }
    gotRemoteIceCandidate(event) {
        debugger;
        console.log("Remote Ice Callback");
        //event.side = "Remote";
        //this.notif.SendOnIceCandidate(JSON.stringify(event));
        // if (event.candidate){
        //   window.localPeerConnection?.addIceCandidate(event.candidate);
        //   console.log('Remote ICE candidate: \n ' + JSON.stringify(event.candidate));
        // }
        console.log("Remote Candidate iceGatheringState: " + event.target.iceGatheringState);
    }
    onremotetrack(data) {
        debugger;
    }
    onlocaltrack(data) {
        debugger;
    }
    startHttpRequest() {
        this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "Notification/Get")
            .subscribe(res => {
            console.log(res);
        });
    }
    ngOnDestroy() {
        this.notif.CloseConnection();
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notif_service__WEBPACK_IMPORTED_MODULE_3__["NotifService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_admin_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 22, vars: 2, consts: [[1, "btn", "btn-primary", 3, "ngClass", "click"], [1, "btn", "btn-primary", 3, "click"], ["id", "modal_aside_left", "tabindex", "-1", "role", "dialog", 1, "modal", "fixed-left", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-aside"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "lead"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_0_listener() { return ctx.startCon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_3_listener() { return ctx.sendOffer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Send Offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Create Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Accept");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.connectionClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Received Offer ", ctx.ReceivedOffer, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], styles: [".modal[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]{ \r\n    width: 350px; max-width:80%; height: 100%; margin:0;transform: translate(0); transition: transform .2s;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{  height: inherit; border:0; border-radius: 0;}\r\n  .modal[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]{ overflow-y: auto }\r\n  .modal.fixed-left[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]{ margin-left:auto;  transform: translateX(100%); }\r\n  .modal.fixed-right[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]{ margin-right:auto; transform: translateX(-100%); }\r\n  .modal.show[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]{ transform: translateX(0);  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSx5QkFBeUI7RUFDeEc7RUFDQSw0Q0FBNEMsZUFBZSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQztFQUN4Rix1REFBdUQsaUJBQWlCO0VBQ3hFLHVDQUF1QyxnQkFBZ0IsR0FBRywyQkFBMkIsRUFBRTtFQUN2Rix3Q0FBd0MsaUJBQWlCLEVBQUUsNEJBQTRCLEVBQUU7RUFDekYsaUNBQWlDLHdCQUF3QixHQUFHIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbCAubW9kYWwtZGlhbG9nLWFzaWRleyBcclxuICAgIHdpZHRoOiAzNTBweDsgbWF4LXdpZHRoOjgwJTsgaGVpZ2h0OiAxMDAlOyBtYXJnaW46MDt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcclxuICB9XHJcbiAgLm1vZGFsIC5tb2RhbC1kaWFsb2ctYXNpZGUgLm1vZGFsLWNvbnRlbnR7ICBoZWlnaHQ6IGluaGVyaXQ7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiAwO31cclxuICAubW9kYWwgLm1vZGFsLWRpYWxvZy1hc2lkZSAubW9kYWwtY29udGVudCAubW9kYWwtYm9keXsgb3ZlcmZsb3cteTogYXV0byB9XHJcbiAgLm1vZGFsLmZpeGVkLWxlZnQgLm1vZGFsLWRpYWxvZy1hc2lkZXsgbWFyZ2luLWxlZnQ6YXV0bzsgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgfVxyXG4gIC5tb2RhbC5maXhlZC1yaWdodCAubW9kYWwtZGlhbG9nLWFzaWRleyBtYXJnaW4tcmlnaHQ6YXV0bzsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgfVxyXG4gIC5tb2RhbC5zaG93IC5tb2RhbC1kaWFsb2ctYXNpZGV7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return [{ type: src_app_services_notif_service__WEBPACK_IMPORTED_MODULE_3__["NotifService"] }, { type: src_app_services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: src_app_admin_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "I13E":
/*!*******************************************************!*\
  !*** ./src/app/components/rtccon/rtccon.component.ts ***!
  \*******************************************************/
/*! exports provided: RtcconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtcconComponent", function() { return RtcconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



const PEER_CONNECTION_CONFIG = {
    iceServers: [
        { urls: "stun:stun.services.mozilla.com" },
        { urls: "stun:stun.l.google.com:19302" }
    ]
};
class RtcconComponent {
    constructor() { }
    ngOnInit() {
        this.rtc = new RTCPeerConnection(PEER_CONNECTION_CONFIG);
        this.dc = this.rtc.createDataChannel("channel");
        this.rtc.ondatachannel = this.ondatachannel;
        this.createOffer();
        this.dc.onmessage = this.onmessage;
        this.dc.onopen = this.onopen;
        this.dc.onclose = this.onclose;
        this.rtc.onicecandidate = this.onIceCandidate;
        this.rtc.oniceconnectionstatechange = this.oniceconnectionstatechange;
        this.rtc.ontrack = this.gotRemoteStream;
        this.rtc.onnegotiationneeded = this.onnegotiationneeded;
    }
    createOffer() {
        var _a;
        (_a = this.rtc) === null || _a === void 0 ? void 0 : _a.createOffer().then(offer => {
            this.setLocalDescription(offer);
        }).catch(error => {
            alert(error);
        });
    }
    setLocalDescription(offer) {
        var _a;
        (_a = this.rtc) === null || _a === void 0 ? void 0 : _a.setLocalDescription(offer).then(LD => {
            this.localDescription = JSON.stringify(offer); //JSON.stringify(this.rtc?.localDescription);
        }).catch(error => {
            alert(error);
        });
    }
    setRemoteDescription(answer) {
        var _a;
        (_a = this.rtc) === null || _a === void 0 ? void 0 : _a.setRemoteDescription(answer);
    }
    sendToServerLocalDescription() {
    }
    gotRemoteStream(Event) {
        console.log("ontrack");
    }
    ondatachannel(event) {
        console.log(event + " OnDataChannel");
    }
    onIceCandidate(event) {
        console.log("onIceCandidate " + JSON.stringify(event));
    }
    oniceconnectionstatechange(Event) {
        console.log("oniceconnectionstatechange");
    }
    onnegotiationneeded(Event) {
        console.log("onnegotiationneeded");
    }
    onopen(event) {
        console.log("Connection Opened.");
    }
    onclose(event) {
        console.log("Connection Closed.");
    }
    onmessage(event) {
        debugger;
        console.log(JSON.stringify(event));
    }
}
RtcconComponent.ɵfac = function RtcconComponent_Factory(t) { return new (t || RtcconComponent)(); };
RtcconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RtcconComponent, selectors: [["app-rtccon"]], decls: 17, vars: 1, consts: [[1, "container"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Enter email", 1, "form-control"], ["for", "exampleInputPassword1"], ["type", "password", "id", "exampleInputPassword1", "placeholder", "Password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]], template: function RtcconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("sdp: ", ctx.localDescription, "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJydGNjb24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RtcconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rtccon',
                templateUrl: './rtccon.component.html',
                styleUrls: ['./rtccon.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "IhL1":
/*!*************************************************************!*\
  !*** ./src/app/components/languages/languages.component.ts ***!
  \*************************************************************/
/*! exports provided: LanguagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesComponent", function() { return LanguagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_admin_models_base_view_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/admin/models/base-view-model */ "gKIg");
/* harmony import */ var src_app_models_tbllanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/tbllanguage */ "QBQw");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/language.service */ "kyOO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_admin_services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin/services/token.service */ "xsTi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/loader/loader.component */ "o7am");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_paginaton_paginaton_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/paginaton/paginaton.component */ "v9mL");
/* harmony import */ var _shared_success_success_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/success/success.component */ "TS9w");
/* harmony import */ var _shared_notfoundanyrecord_notfoundanyrecord_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/notfoundanyrecord/notfoundanyrecord.component */ "A6sH");














function LanguagesComponent_app_notfoundanyrecord_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-notfoundanyrecord");
} }
function LanguagesComponent_table_21_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](j_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", j_r6.nativeName, " ");
} }
function LanguagesComponent_table_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Language");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Native Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LanguagesComponent_table_21_tr_8_Template, 5, 2, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.items);
} }
function LanguagesComponent_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 43);
} }
function LanguagesComponent_span_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LanguagesComponent extends src_app_admin_models_base_view_model__WEBPACK_IMPORTED_MODULE_1__["BaseCrudApi"] {
    constructor(languageServices, router, toastrService, tokenService) {
        super();
        this.languageServices = languageServices;
        this.router = router;
        this.toastrService = toastrService;
        this.tokenService = tokenService;
        this.language = new src_app_models_tbllanguage__WEBPACK_IMPORTED_MODULE_2__["Language"]();
        this.allowedRoles = this.tokenService.getUserRoles();
    }
    ngOnInit() {
        this.getItems();
    }
    onLanguageSubmitForm(form) {
        this.isSaving = true;
        this.add = this.languageServices.createLanguage(this.language)
            .subscribe(res => {
            if (res.isSuccess) {
                // Make notification to user for saving data
                this.isSaved = true;
            }
            else {
                this.isError = true;
                this.errorMessage = res.message;
            }
        }, (error) => {
            console.log(error.error);
            this.isError = true;
            this.errorMessage = error.message;
            this.isSaving = false;
            if (error.status == 401) {
                this.router.navigateByUrl("/Login");
            }
        }, () => {
            form.reset();
            this.language = new src_app_models_tbllanguage__WEBPACK_IMPORTED_MODULE_2__["Language"]();
            this.isSaving = false;
            this.isSaved = true;
            this.getItems();
        });
    }
    showFormModal() {
        this.isSaved = false;
        this.isError = false;
        $("#languageModal").modal('show');
    }
    getItems(page = 1) {
        this.isLoading = true;
        this.add = this.languageServices.getLanguages(page, this.query)
            .subscribe(res => {
            if (res.isSuccess) {
                this.items = res.listModel,
                    this.pager = res.pager;
            }
            else {
                this.isError = true;
                this.errorMessage = res.message;
                this.toastrService.error(res.message, "Error: ");
            }
        }, (error) => {
            console.log(error.error);
            this.isError = true;
            this.errorMessage = error.message;
            if (error.status == 401) {
                this.router.navigateByUrl("/Login");
            }
        }, () => {
            this.isLoading = false;
        });
    }
    reset() {
        this.query = '';
        this.getItems();
    }
    ngOnDestroy() {
        this.dispose();
    }
}
LanguagesComponent.ɵfac = function LanguagesComponent_Factory(t) { return new (t || LanguagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_admin_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"])); };
LanguagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LanguagesComponent, selectors: [["app-languages"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 52, vars: 18, consts: [[1, "container", 2, "height", "100%"], [1, "row"], [1, "col-md-3"], [1, "pr-2", "mr-2", 2, "display", "inline-block", "border-right", "1px solid #593196"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "fas", "fa-plus", "ml-2"], [1, "badge", "badge-primary"], [1, "col-md-6"], [1, "input-group", "mb-3"], ["type", "text", "required", "", "placeholder", "Search here. . .", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-search"], [1, "fas", "fa-sync-alt"], [3, "isLoading"], [4, "ngIf"], ["class", "table table-hover", 4, "ngIf"], [3, "pager", "isPaginationLoading", "nextPage"], ["id", "languageModal", "tabindex", "-1", "role", "dialog", 1, "modal", "fixed-left", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-aside"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [3, "ngSubmit"], ["languageForm", "ngForm"], [1, "modal-body"], [3, "isSuccess", "isWarning", "SetMessage"], [3, "isWarning", "SetMessage"], [1, "form-group", "required"], ["type", "hidden", "name", "languageID", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "name", "required", "", "minlength", "3", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "nativeName", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "table", "table-hover"], ["scope", "col"], ["class", "table-light", 4, "ngFor", "ngForOf"], [1, "table-light"], ["scope", "row"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]], template: function LanguagesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguagesComponent_Template_button_click_4_listener() { return ctx.showFormModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Add Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LanguagesComponent_Template_input_ngModelChange_12_listener($event) { return ctx.query = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguagesComponent_Template_button_click_14_listener() { return ctx.getItems(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguagesComponent_Template_button_click_17_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-loader", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LanguagesComponent_app_notfoundanyrecord_20_Template, 1, 0, "app-notfoundanyrecord", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LanguagesComponent_table_21_Template, 9, 1, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-paginaton", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nextPage", function LanguagesComponent_Template_app_paginaton_nextPage_22_listener($event) { return ctx.getItems($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cancel Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LanguagesComponent_Template_form_ngSubmit_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return _r2.form.valid && ctx.onLanguageSubmitForm(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-success", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-success", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Language Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LanguagesComponent_Template_input_ngModelChange_40_listener($event) { return ctx.language.languageID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LanguagesComponent_Template_input_ngModelChange_41_listener($event) { return ctx.language.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Native Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LanguagesComponent_Template_input_ngModelChange_45_listener($event) { return ctx.language.nativeName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, LanguagesComponent_span_50_Template, 1, 0, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, LanguagesComponent_span_51_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: ", ctx.pager.totalItems, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isLoading", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.items.length > 0) && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.items.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pager", ctx.pager)("isPaginationLoading", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSuccess", ctx.isSaved)("isWarning", ctx.isError)("SetMessage", "Data saved successfully");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isWarning", ctx.isError)("SetMessage", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.language.languageID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.language.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.language.nativeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r2.valid || ctx.isSaving);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSaving);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSaving);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_paginaton_paginaton_component__WEBPACK_IMPORTED_MODULE_10__["PaginatonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _shared_success_success_component__WEBPACK_IMPORTED_MODULE_11__["SuccessComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MinLengthValidator"], _shared_notfoundanyrecord_notfoundanyrecord_component__WEBPACK_IMPORTED_MODULE_12__["NotfoundanyrecordComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: [".modal[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]{ \r\n    width: 350px; max-width:80%; height: 100%; margin:0;transform: translate(0); transition: transform .2s;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{  height: inherit; border:0; border-radius: 0;}\r\n  .modal[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]{ overflow-y: auto }\r\n  .modal.fixed-left[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]{ margin-left:auto;  transform: translateX(100%); }\r\n  .modal.fixed-right[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]{ margin-right:auto; transform: translateX(-100%); }\r\n  .modal.show[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]{ transform: translateX(0);  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmd1YWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLHVCQUF1QixFQUFFLHlCQUF5QjtFQUN4RztFQUNBLDRDQUE0QyxlQUFlLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDO0VBQ3hGLHVEQUF1RCxpQkFBaUI7RUFDeEUsdUNBQXVDLGdCQUFnQixHQUFHLDJCQUEyQixFQUFFO0VBQ3ZGLHdDQUF3QyxpQkFBaUIsRUFBRSw0QkFBNEIsRUFBRTtFQUN6RixpQ0FBaUMsd0JBQXdCLEdBQUciLCJmaWxlIjoibGFuZ3VhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwgLm1vZGFsLWRpYWxvZy1hc2lkZXsgXHJcbiAgICB3aWR0aDogMzUwcHg7IG1heC13aWR0aDo4MCU7IGhlaWdodDogMTAwJTsgbWFyZ2luOjA7dHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7IHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7XHJcbiAgfVxyXG4gIC5tb2RhbCAubW9kYWwtZGlhbG9nLWFzaWRlIC5tb2RhbC1jb250ZW50eyAgaGVpZ2h0OiBpbmhlcml0OyBib3JkZXI6MDsgYm9yZGVyLXJhZGl1czogMDt9XHJcbiAgLm1vZGFsIC5tb2RhbC1kaWFsb2ctYXNpZGUgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHl7IG92ZXJmbG93LXk6IGF1dG8gfVxyXG4gIC5tb2RhbC5maXhlZC1sZWZ0IC5tb2RhbC1kaWFsb2ctYXNpZGV7IG1hcmdpbi1sZWZ0OmF1dG87ICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IH1cclxuICAubW9kYWwuZml4ZWQtcmlnaHQgLm1vZGFsLWRpYWxvZy1hc2lkZXsgbWFyZ2luLXJpZ2h0OmF1dG87IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IH1cclxuICAubW9kYWwuc2hvdyAubW9kYWwtZGlhbG9nLWFzaWRleyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7ICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-languages',
                templateUrl: './languages.component.html',
                styleUrls: ['./languages.component.css']
            }]
    }], function () { return [{ type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: src_app_admin_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "KFQC":
/*!*******************************************************!*\
  !*** ./src/app/components/answer/answer.component.ts ***!
  \*******************************************************/
/*! exports provided: AnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerComponent", function() { return AnswerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = ["sendingTextt"];
const _c1 = ["receivingTextt"];
const _c2 = ["localvid"];
const _c3 = ["remotevid"];
function AnswerComponent_h1_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hello");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
//RTCConfiguration
const PEER_CONNECTION_CONFIG = {
    iceServers: [
        { urls: "stun:stun.services.mozilla.com" },
        { urls: "stun:stun.l.google.com:19302" },
        {
            urls: "turn:numb.viagenie.ca",
            username: "khanxhahrukh@gmail.com",
            credential: "file348132"
        }
    ]
};
var d = {
    sdp: '',
    type: "offer"
};
function cll() {
    return document.getElementById("remoteid");
}
class AnswerComponent {
    //public remotePeerConnection!: RTCPeerConnection;
    //public sendChannel!: RTCDataChannel;
    //public receiveChannel!: RTCDataChannel;
    //constraints: MediaStreamConstraints = { audio: true, video: false };
    constructor() {
        this.issendChannelConnectionOpen = false;
        this.isreceivingChannelConnectionOpen = false;
    }
    ngOnInit() {
        // this.rtc = new RTCPeerConnection(PEER_CONNECTION_CONFIG);
        // this.rtc.onicecandidate = this.onIceCandidate;
        // this.rtc.ondatachannel = this.ondatachannel;
    }
    ngAfterViewInit() {
        // const mediaDevices = navigator.mediaDevices as any;
        //window.localPeerConnection = new RTCPeerConnection(PEER_CONNECTION_CONFIG);
        // this.Trace("Created Local Peer Connection Object localPeerConnection");
        // var sc_stream = mediaDevices.getUserMedia({ video: true, audio:  true })
        // .then((stream: MediaStream) => {
        //   // stream.getTracks().forEach((track: MediaStreamTrack) => {
        //   //   debugger;
        //   //   window.localPeerConnection.addTrack(track);
        //   // });
        //   window.localPeerConnection.addTrack(stream.getVideoTracks()[0], stream);
        //   this.localvid.nativeElement.srcObject = stream;
        //   this.localvid.nativeElement.play();
        // });
        //debugger;
        //console.log(sc_stream);
    }
    Trace(text) {
        console.log((performance.now() / 1000).toFixed(3) + ": " + text);
    }
    createConnection() {
        var _a;
        debugger;
        // ? Local
        try {
            window.localPeerConnection = new RTCPeerConnection(PEER_CONNECTION_CONFIG);
            window.sendChannel = (_a = window.localPeerConnection) === null || _a === void 0 ? void 0 : _a.createDataChannel("sendDataChannel");
            this.Trace("Created send data channel");
        }
        catch (e) {
            alert('Failed to create data channel. ' +
                'You need Chrome M25 or later with RtpDataChannel enabled');
            this.Trace("createDataChannel() failed with exception: " + e.message);
        }
        window.localPeerConnection.onicecandidate = this.gotLocalCandidate;
        window.sendChannel.onmessage = this.handleLocalMessage;
        window.sendChannel.onopen = this.handleSendChannelStateChange;
        window.sendChannel.onclose = this.handleSendChannelStateChange;
        window.localPeerConnection.oniceconnectionstatechange = this.Localoniceconnectionstatechange;
        // ? Remote
        window.remotePeerConnection = new RTCPeerConnection(PEER_CONNECTION_CONFIG);
        console.log("Created Remote Peer Connection Object remotePeerConnection");
        window.remotePeerConnection.ontrack = this.onremotetrack;
        window.remotePeerConnection.onicecandidate = this.gotRemoteIceCandidate;
        window.remotePeerConnection.ondatachannel = this.gotReceiveChannel;
        window.remotePeerConnection.oniceconnectionstatechange = this.Remoteoniceconnectionstatechange;
        window.localPeerConnection.createOffer()
            .then(LD => {
            console.log(`Local Description OR Offer: ${JSON.stringify(LD)}`);
            this.gotLocalDescription(LD);
        })
            .catch(err => this.Trace("Error: " + err));
    }
    onremotetrack(data) {
        debugger;
        if (data.streams.length > 0) {
            //this.remotevid.nativeElement.srcObject = data.streams[0];
            //this.remotevid.nativeElement.play();
            //this.attach(data.streams[0])
            //cll().src = window.URL.createObjectURL(data.streams[0]);
        }
    }
    attach(data) {
        debugger;
        this.remotevid.nativeElement.srcObject = data;
        this.remotevid.nativeElement.play();
    }
    sendData() {
        debugger;
        try {
            window.sendChannel.send(this.sendingTextt.nativeElement.value);
            console.log("Sent data: " + this.sendingTextt.nativeElement.value);
        }
        catch (e) {
            console.log("Error: " + e.message);
            console.log("Send Channel Ready State: " + window.sendChannel.readyState);
            console.log("Received Channel Ready State: " + window.receiveChannel.readyState);
        }
    }
    SendReceiveData() {
        debugger;
        try {
            window.receiveChannel.send(this.receivingTextt.nativeElement.value);
            console.log("Sent data: " + this.receivingTextt.nativeElement.value);
            //alert(": " + this.sendingTextt.nativeElement.value);
        }
        catch (e) {
            console.log("Error: " + e.message);
            console.log("Send Channel Ready State: " + window.sendChannel.readyState);
            console.log("Received Channel Ready State: " + window.receiveChannel.readyState);
        }
    }
    gotRemoteIceCandidate(event) {
        var _a;
        debugger;
        console.log("Remote Ice Callback");
        if (event.candidate) {
            (_a = window.localPeerConnection) === null || _a === void 0 ? void 0 : _a.addIceCandidate(event.candidate);
            console.log('Remote ICE candidate: \n ' + event.candidate.candidate);
        }
        if (event.target.iceGatheringState == "complete") {
            // ! Create Offer and send to server or other peer
            console.log("Remote Candidate iceGatheringState: " + event.target.iceGatheringState);
        }
    }
    gotReceiveChannel(event) {
        debugger;
        window.receiveChannel = event.channel;
        // window.receiveChannel.addEventListener("message",function(message){
        //   debugger;
        //   if(message.data instanceof Blob) {} else {}
        //   console.log("Remote Message: " + message.data);
        // });
        window.receiveChannel.addEventListener("message", function (e) {
            debugger;
            alert("Received: " + e.data);
        });
        window.receiveChannel.addEventListener("open", function () {
            debugger;
            console.log("Remote Connection Open");
        });
        window.receiveChannel.addEventListener("close", function () {
            debugger;
            console.log("Remote Connection Closed");
        });
        //window.receiveChannel.onopen = this.handleReceiveChannelStateChange;
        //window.receiveChannel.onclose = this.handleReceiveChannelStateChange;
        console.log("Receive Channel Callback");
    }
    handleRemoteMessage(event) {
        debugger;
        console.log('Received message: ' + event.data);
        this.receivingTextt.nativeElement.value = event.data;
    }
    handleLocalMessage(event) {
        debugger;
        alert('Sent message: ' + event.data);
        //this.receivingTextt.nativeElement.value = event.data;
        this.issendChannelConnectionOpen = true;
    }
    handleSendChannelStateChange() {
        debugger;
        console.log("Send channel state is: " + window.sendChannel.readyState);
        if (window.sendChannel.readyState == "open") {
            console.log("Send channel state is: open");
            this.issendChannelConnectionOpen = true;
        }
        else {
            console.log("Send channel state is: " + window.sendChannel.readyState);
        }
    }
    handleReceiveChannelStateChange() {
        debugger;
        console.log('Receive channel state is: ' + window.receiveChannel.readyState);
        this.isreceivingChannelConnectionOpen = true;
    }
    gotLocalCandidate(event) {
        var _a;
        console.log("Local Ice CallBack");
        debugger;
        if (event.candidate) {
            (_a = window.remotePeerConnection) === null || _a === void 0 ? void 0 : _a.addIceCandidate(event.candidate);
            console.log('Local ICE Candidate: \n' + event.candidate.candidate);
        }
        if (event.target.iceGatheringState == "complete") {
            // ! Create Offer and send to server or other peer
            console.log("Local Candidate iceGatheringState: " + event.target.iceGatheringState);
        }
    }
    gotLocalDescription(desc) {
        var _a, _b;
        debugger;
        (_a = window.localPeerConnection) === null || _a === void 0 ? void 0 : _a.setLocalDescription(desc);
        console.log('Offer from LocalPeerConnection \n' + JSON.stringify(desc.sdp));
        window.remotePeerConnection.setRemoteDescription(desc);
        (_b = window.remotePeerConnection) === null || _b === void 0 ? void 0 : _b.createAnswer().then(RD => {
            console.log(`Remote Description OR Answer: ${JSON.stringify(RD)}`);
            this.gotRemoteDescription(RD);
        }).catch(err => this.Trace("Error: " + err));
    }
    gotRemoteDescription(desc) {
        var _a, _b;
        debugger;
        (_a = window.remotePeerConnection) === null || _a === void 0 ? void 0 : _a.setLocalDescription(desc);
        console.log('Answer from remotePeerConnection \n' + JSON.stringify(desc.sdp));
        (_b = window.localPeerConnection) === null || _b === void 0 ? void 0 : _b.setRemoteDescription(desc);
    }
    Localoniceconnectionstatechange(Event) {
        debugger;
        console.log("Local oniceconnectionstatechange: " + Event.target.iceConnectionState);
    }
    Remoteoniceconnectionstatechange(Event) {
        debugger;
        console.log("Remote oniceconnectionstatechange: " + Event.target.iceConnectionState);
    }
    closeDataChannels() {
        var _a, _b, _c;
        debugger;
        window.sendChannel.close();
        (_a = window.receiveChannel) === null || _a === void 0 ? void 0 : _a.close();
        (_b = window.localPeerConnection) === null || _b === void 0 ? void 0 : _b.close();
        (_c = window.remotePeerConnection) === null || _c === void 0 ? void 0 : _c.close();
        this.issendChannelConnectionOpen = false;
        this.isreceivingChannelConnectionOpen = false;
    }
    // setOfferr(){
    //   var t  = this.maybeAddLineBreakToEnd(this.VarAnswer);
    //   d.sdp = this.VarAnswer;//t.replace(/\n/g, '\r\n');
    //   console.log(d.sdp);
    //   debugger;
    //   console.log(this.rtc?.signalingState);
    //   console.log(this.VarAnswer);
    //   this.rtc?.setRemoteDescription(d)
    //   .then(x => console.log("Set Remote Description Successfully"))
    //   //.then(x => this.createAnswer())
    //   .catch(error => {
    //     console.error(error + "Error on Remote Description");
    //     alert(error);
    //   });
    // }
    maybeAddLineBreakToEnd(sdp) {
        var endWithLineBreak = new RegExp(/\n$/);
        if (!endWithLineBreak.test(sdp)) {
            return sdp + '\n';
        }
        return sdp;
    }
    // public createAnswer(){
    //   this.rtc?.createAnswer()
    //   .then(answer => console.log("Remote: Answer created successfully"))
    //   .then(ans => this.Answer =  JSON.stringify(ans))
    //   .then(ans => this.setLD(ans))
    //   .catch(error => {
    //     alert(error);
    //   })
    // }
    // private setLD(ans: any){
    //   debugger;
    //   this.rtc?.setLocalDescription(ans)
    //     .then(x => console.log("Remote:  Local Description set successfully"))
    //     .catch(error => alert(error))
    // }
    ondatachannel(event) {
        debugger;
    }
    gotRemoteStream(Event) {
        console.log("ontrack");
    }
    onIceCandidate(event) {
        //console.log("onIceCandidate " + JSON.stringify(this.rtc?.localDescription));
    }
    onnegotiationneeded(Event) {
        console.log("onnegotiationneeded");
    }
    onopen(event) {
        console.log("Connection Opened.");
    }
    onclose(event) {
        console.log("Connection Closed.");
    }
    onmessage(event) {
        debugger;
        console.log(JSON.stringify(event));
    }
}
AnswerComponent.ɵfac = function AnswerComponent_Factory(t) { return new (t || AnswerComponent)(); };
AnswerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnswerComponent, selectors: [["app-answer"]], viewQuery: function AnswerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sendingTextt = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.receivingTextt = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.localvid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.remotevid = _t.first);
    } }, decls: 25, vars: 1, consts: [[1, "container"], ["autoplay", "", "muted", ""], ["localvid", ""], ["autoplay", "", "muted", "", "id", "remoteid"], ["remotevid", ""], [4, "ngIf"], [1, "form-group"], ["placeholder", "Press Start, enter some text, then press Send."], ["rows", "1", 1, "form-control"], ["sendingTextt", ""], ["receivingTextt", ""], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function AnswerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "video", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AnswerComponent_h1_5_Template, 2, 0, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Sending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Receiving ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "textarea", 8, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswerComponent_Template_button_click_17_listener() { return ctx.createConnection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswerComponent_Template_button_click_19_listener() { return ctx.sendData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Send as Sender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswerComponent_Template_button_click_21_listener() { return ctx.SendReceiveData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Send as Receiver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswerComponent_Template_button_click_23_listener() { return ctx.closeDataChannels(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.issendChannelConnectionOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbnN3ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnswerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-answer',
                templateUrl: './answer.component.html',
                styleUrls: ['./answer.component.css']
            }]
    }], function () { return []; }, { sendingTextt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sendingTextt']
        }], receivingTextt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['receivingTextt']
        }], localvid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['localvid']
        }], remotevid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['remotevid']
        }] }); })();


/***/ }),

/***/ "Lquv":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 18, vars: 0, consts: [[1, "container-fluid"], [1, "h3", "mb-0", "text-gray-800", "mb-2"], [1, "row"], [1, "col-xl-3", "col-md-6"], [1, "card", "border-left-primary", "text-primary", "shadow", "h-100", "py-2"], [1, "card-body"], [1, "col", "mr-2"], [1, "text-xs", "font-weight-bold", "text-primary", "text-uppercase", "mb-2"], [1, "h5", "mb-0", "font-weight-bold", "text-gray-800"], [1, "col-auto"], [1, "fas", "fa-calendar", "fa-2x", "mt-2", "text-gray-300"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Total Earning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " $14000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".border-left-primary[_ngcontent-%COMP%]{\r\n    border-left: .25rem solid !important;\r\n}\r\n\r\n.text-gray-800[_ngcontent-%COMP%]{\r\n    color: #5a5c69 !important;\r\n}\r\n\r\n.text-gray-300[_ngcontent-%COMP%]{\r\n    color: #dddfeb !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlci1sZWZ0LXByaW1hcnl7XHJcbiAgICBib3JkZXItbGVmdDogLjI1cmVtIHNvbGlkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWdyYXktODAwe1xyXG4gICAgY29sb3I6ICM1YTVjNjkgIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1ncmF5LTMwMHtcclxuICAgIGNvbG9yOiAjZGRkZmViICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MNkv":
/*!**************************************************************!*\
  !*** ./src/app/services/interceptererrorhandling.service.ts ***!
  \**************************************************************/
/*! exports provided: InterceptererrorhandlingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptererrorhandlingService", function() { return InterceptererrorhandlingService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class InterceptererrorhandlingService {
    constructor(toastr, router) {
        this.toastr = toastr;
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = `Something bad happen to your network: ${error.error.message}`;
            }
            else {
                // server-side error
                console.log(JSON.stringify(error));
                errorMessage = `Error while processing your request: ${error.status}\nMessage: ${error.message}`;
                if (error.status === 401) {
                    this.router.navigateByUrl("/Logout");
                }
            }
            this.toastr.error(`${errorMessage}`, `Error`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
        }));
    }
}
InterceptererrorhandlingService.ɵfac = function InterceptererrorhandlingService_Factory(t) { return new (t || InterceptererrorhandlingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
InterceptererrorhandlingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: InterceptererrorhandlingService, factory: InterceptererrorhandlingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](InterceptererrorhandlingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "N+i1":
/*!*******************************************************!*\
  !*** ./src/app/twilio/settings/settings.component.ts ***!
  \*******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _device_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../device.service */ "cR5Y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _camera_camera_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../camera/camera.component */ "Dnd0");
/* harmony import */ var _device_select_device_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./device-select/device-select.component */ "OKUQ");









const _c0 = ["camera"];
const _c1 = ["videoSelect"];
function SettingsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-device-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("settingsChanged", function SettingsComponent_div_5_Template_app_device_select_settingsChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onSettingsChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("kind", "audioinput")("label", "Audio Input Source")("devices", ctx_r0.devices);
} }
function SettingsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-device-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("settingsChanged", function SettingsComponent_div_6_Template_app_device_select_settingsChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onSettingsChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("kind", "audiooutput")("label", "Audio Output Source")("devices", ctx_r1.devices);
} }
function SettingsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-device-select", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("settingsChanged", function SettingsComponent_div_7_Template_app_device_select_settingsChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onSettingsChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("kind", "videoinput")("label", "Video Input Source")("devices", ctx_r2.devices);
} }
class SettingsComponent {
    constructor(deviceService) {
        this.deviceService = deviceService;
        this.devices = [];
        this.settingsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get hasAudioInputOptions() {
        return this.devices && this.devices.filter(d => d.kind === 'audioinput').length > 0;
    }
    get hasAudioOutputOptions() {
        return this.devices && this.devices.filter(d => d.kind === 'audiooutput').length > 0;
    }
    get hasVideoInputOptions() {
        return this.devices && this.devices.filter(d => d.kind === 'videoinput').length > 0;
    }
    ngOnInit() {
        this.subscription =
            this.deviceService
                .$devicesUpdated
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(350))
                .subscribe((deviceListPromise) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.devices = yield deviceListPromise;
                this.handleDeviceAvailabilityChanges();
            }));
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    onSettingsChanged(deviceInfo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isPreviewing) {
                yield this.showPreviewCamera();
            }
            else {
                this.settingsChanged.emit(deviceInfo);
            }
        });
    }
    showPreviewCamera() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isPreviewing = true;
            if (this.videoDeviceId !== this.video.selectedId) {
                this.videoDeviceId = this.video.selectedId;
                const videoDevice = this.devices.find(d => d.deviceId === this.video.selectedId);
                yield this.camera.initializePreview(videoDevice);
            }
            return this.camera.tracks;
        });
    }
    hidePreviewCamera() {
        this.isPreviewing = false;
        this.camera.finalizePreview();
        return this.devices.find(d => d.deviceId === this.video.selectedId);
    }
    handleDeviceAvailabilityChanges() {
        if (this.devices && this.devices.length && this.video && this.video.selectedId) {
            let videoDevice = this.devices.find(d => d.deviceId === this.video.selectedId);
            if (!videoDevice) {
                videoDevice = this.devices.find(d => d.kind === 'videoinput');
                if (videoDevice) {
                    this.video.selectedId = videoDevice.deviceId;
                    this.onSettingsChanged(videoDevice);
                }
            }
        }
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_device_service__WEBPACK_IMPORTED_MODULE_3__["DeviceService"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], viewQuery: function SettingsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.camera = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
    } }, inputs: { isPreviewing: "isPreviewing" }, outputs: { settingsChanged: "settingsChanged" }, decls: 11, vars: 5, consts: [[1, "jumbotron"], [1, "display-4"], [1, "fas", "fa-cogs"], [1, "form"], ["class", "form-group", 4, "ngIf"], ["camera", ""], [1, "form-group"], [3, "kind", "label", "devices", "settingsChanged"], ["videoSelect", ""]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SettingsComponent_div_5_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SettingsComponent_div_6_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SettingsComponent_div_7_Template, 3, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-camera", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasAudioInputOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasAudioOutputOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasVideoInputOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.isPreviewing ? "block" : "none");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _camera_camera_component__WEBPACK_IMPORTED_MODULE_6__["CameraComponent"], _device_select_device_select_component__WEBPACK_IMPORTED_MODULE_7__["DeviceSelectComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.css']
            }]
    }], function () { return [{ type: _device_service__WEBPACK_IMPORTED_MODULE_3__["DeviceService"] }]; }, { camera: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['camera', { static: false }]
        }], video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['videoSelect', { static: false }]
        }], isPreviewing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['isPreviewing']
        }], settingsChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "NaU/":
/*!*************************************************!*\
  !*** ./src/app/components/job/job.component.ts ***!
  \*************************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var _models_job__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../models/job */ "bRJT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_admin_models_base_view_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin/models/base-view-model */ "gKIg");
/* harmony import */ var src_app_services_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/job.service */ "qLOZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_admin_services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin/services/token.service */ "xsTi");
/* harmony import */ var _admin_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../admin/services/user.service */ "CHqn");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/loader/loader.component */ "o7am");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_paginaton_paginaton_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/paginaton/paginaton.component */ "v9mL");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");
/* harmony import */ var _shared_coloredrow_coloredrow_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/coloredrow/coloredrow.component */ "Tt2L");















function JobComponent_table_20_tr_14_i_14_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobComponent_table_20_tr_14_i_14_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const j_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.showAcceptanceModal(j_r15.jobID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function JobComponent_table_20_tr_14_i_16_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobComponent_table_20_tr_14_i_16_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const j_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.showassignationModal(j_r15.jobID, j_r15.acceptedBy); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function JobComponent_table_20_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Requested Time: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-coloredrow", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, JobComponent_table_20_tr_14_i_14_Template, 1, 0, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, JobComponent_table_20_tr_14_i_16_Template, 1, 0, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", j_r15.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 6, j_r15.createdAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("jobState", j_r15.jobState);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", j_r15.postedBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", j_r15.jobState === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(j_r15.jobState === 0));
} }
function JobComponent_table_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Request State");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Requested By");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Assign request");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, JobComponent_table_20_tr_14_Template, 17, 8, "tr", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
function JobComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "You have successfully accepted the request. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function JobComponent_span_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 67);
} }
function JobComponent_span_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function JobComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Request have been assign successfully. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function JobComponent_ng_template_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "a", 69);
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r24.name, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function JobComponent_ng_template_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 69);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", "No username found ...", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function JobComponent_span_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 67);
} }
function JobComponent_span_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class JobComponent extends src_app_admin_models_base_view_model__WEBPACK_IMPORTED_MODULE_2__["BaseCrudApi"] {
    constructor(jobService, router, tokenService, userService, toastrService) {
        super();
        this.jobService = jobService;
        this.router = router;
        this.tokenService = tokenService;
        this.userService = userService;
        this.toastrService = toastrService;
        this.job = new _models_job__WEBPACK_IMPORTED_MODULE_0__["Job"]();
        this.isAccepted = false;
        this.isAcceptingLoading = false;
        this.dataUser = [];
        this.keyword = "name";
        this.previousUserName = "";
        this.isAssignedSuccessfully = false;
        this.allowedRoles = this.tokenService.getUserRoles();
    }
    ngOnInit() {
        this.getItems();
    }
    getItems(page = 1) {
        this.isLoading = true;
        this.add = this.jobService.getJobs(page, this.query)
            .subscribe(res => {
            if (res.isSuccess) {
                this.items = res.listModel,
                    this.pager = res.pager;
            }
            else {
                this.isError = true;
                this.errorMessage = res.message;
            }
        }, (error) => {
            console.log(error.error);
            this.isError = true;
            this.errorMessage = error.message;
            if (error.status == 401) {
                this.router.navigateByUrl("/Login");
            }
        }, () => {
            this.isLoading = false;
        });
    }
    reset() {
        this.query = '';
        this.getItems();
    }
    // * Forms Submissions
    onSubmitForm(form) {
        this.jobService.createJob(this.job)
            .subscribe(res => {
            if (res.isSuccess) {
                // Make notification to user for saving data
            }
        }, (error) => {
            debugger;
            console.log(error.error);
            this.isError = true;
            this.errorMessage = error.message;
            if (error.status == 401) {
                this.router.navigateByUrl("/Login");
            }
        }, () => {
            this.isLoading = false;
            form.reset();
            //$('#modal_aside_left').modal('toggle'); //or  $('#IDModal').modal('hide');
            this.getItems();
        });
    }
    onAcceptorSubmitForm(form) {
        this.isAcceptingLoading = true;
        this.jobService.acceptJob(this.job)
            .subscribe(res => {
            if (res.isSuccess) {
                // Make notification to user for saving data
                this.isAccepted = true;
            }
        }, (error) => {
            console.log(error.error);
            this.isError = true;
            this.errorMessage = error.message;
            if (error.status == 401) {
                this.router.navigateByUrl("/Login");
            }
            this.isAcceptingLoading = false;
        }, () => {
            this.isAcceptingLoading = false;
            form.reset();
            //$('#modal_aside_left').modal('toggle'); //or  $('#IDModal').modal('hide');
            this.getItems();
        });
    }
    onAssignationSubmitForm(form) {
        this.isAcceptingLoading = true;
        this.jobService.assignJob(this.job)
            .subscribe(res => {
            if (res.isSuccess) {
                // Make notification to user for saving data
                this.isAssignedSuccessfully = true;
            }
        }, (error) => {
            console.log(error.error);
            this.isError = true;
            this.errorMessage = error.message;
            if (error.status == 401) {
                this.router.navigateByUrl("/Login");
            }
            this.isAcceptingLoading = false;
        }, () => {
            this.isAcceptingLoading = false;
            form.reset();
            //$('#modal_aside_left').modal('toggle'); //or  $('#IDModal').modal('hide');
            this.getItems();
        });
    }
    // * Forms Submissions
    showAcceptanceModal(jobid) {
        this.isAccepted = false;
        this.job.jobID = jobid;
        $("#acceptenceJobModal").modal('show');
    }
    showassignationModal(jobid, previousAcceptedBy) {
        this.isAssignedSuccessfully = false;
        if (previousAcceptedBy !== null) {
            this.previousUserName = previousAcceptedBy;
        }
        else {
            this.previousUserName = "Assign fresh request...";
        }
        this.job.jobID = jobid;
        $("#assignationModal").modal('show');
    }
    // * User Auto Search
    selectEventUser(item) {
        this.job.acceptedBy = item.name;
        // do something with selected item
    }
    onChangeSearchUser(val) {
        this.userService.SearchUsers(val)
            .subscribe(res => {
            this.dataUser = res;
        });
    }
    // * User Auto Search
    ngOnDestroy() {
        this.dispose();
    }
}
JobComponent.ɵfac = function JobComponent_Factory(t) { return new (t || JobComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_admin_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_admin_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"])); };
JobComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JobComponent, selectors: [["app-job"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 104, vars: 27, consts: [[1, "container", 2, "height", "100%"], [1, "row"], [1, "col-md-4"], [1, "pr-2", "mr-2", 2, "display", "inline-block", "border-right", "1px solid #593196"], ["data-toggle", "modal", "data-target", "#modal_aside_left", 1, "btn", "btn-outline-primary"], [1, "fas", "fa-plus", "ml-2"], [1, "badge", "badge-primary"], [1, "col-md-5"], [1, "col-md-3"], [1, "input-group", "mb-3"], ["type", "text", "required", "", "placeholder", "Search here. . .", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-search"], [1, "fas", "fa-sync-alt"], [3, "isLoading"], ["class", "table table-hover", 4, "ngIf"], [3, "pager", "isPaginationLoading", "nextPage"], ["id", "modal_aside_left", "tabindex", "-1", "role", "dialog", 1, "modal", "fixed-left", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-aside"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [3, "ngSubmit"], ["jobForm", "ngForm"], [1, "modal-body"], [1, "form-group", "required"], ["type", "text", "name", "name", "required", "", "minlength", "3", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "form-group"], ["type", "text", "name", "description", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["id", "acceptenceJobModal", "tabindex", "-1", "role", "dialog", 1, "modal", "fixed-left", "fade"], ["role", "document", 1, "modal-dialog"], ["acceptorjobForm", "ngForm"], ["style", "border-left: 4px solid;", "class", "text-success alert alert-success", 4, "ngIf"], ["type", "hidden", "name", "jobID", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "description", "required", "", "minlength", "15", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], [4, "ngIf"], ["id", "assignationModal", "tabindex", "-1", "role", "dialog", 1, "modal", "fixed-left", "fade"], ["assignationjobForm", "ngForm"], [1, "modal-body", 2, "height", "80vh"], ["style", "border-left: 4px solid;", "class", "alert alert-success", 4, "ngIf"], ["type", "hidden", "name", "acceptedBy", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "readonly", "", 1, "form-control", "form-control-sm", 3, "value"], [3, "data", "searchKeyword", "debounceTime", "itemTemplate", "notFoundTemplate", "selected", "inputChanged"], ["itemTemplate", ""], ["notFoundTemplate", ""], [1, "table", "table-hover"], ["scope", "col"], ["scope", "col", 1, "text-center"], ["class", "table-light", 4, "ngFor", "ngForOf"], [1, "table-light"], ["scope", "row"], [1, "small", "text-muted"], [3, "jobState"], [1, "text-center"], ["style", "cursor: pointer;;", "class", "fas fa-hand-point-up text-success", 3, "click", 4, "ngIf"], ["style", "cursor: pointer;", "class", "fas fa-user-tag text-primary", 3, "click", 4, "ngIf"], [1, "fas", "fa-hand-point-up", "text-success", 2, "cursor", "pointer", 3, "click"], [1, "fas", "fa-user-tag", "text-primary", 2, "cursor", "pointer", 3, "click"], [1, "text-success", "alert", "alert-success", 2, "border-left", "4px solid"], [1, "fas", "fa-check-circle", "mr-2"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "alert", "alert-success", 2, "border-left", "4px solid"], [3, "innerHTML"]], template: function JobComponent_Template(rf, ctx) { if (rf & 1) {
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Generate Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function JobComponent_Template_input_ngModelChange_12_listener($event) { return ctx.query = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobComponent_Template_button_click_14_listener() { return ctx.getItems(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobComponent_Template_button_click_17_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "app-loader", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, JobComponent_table_20_Template, 15, 1, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "app-paginaton", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nextPage", function JobComponent_Template_app_paginaton_nextPage_21_listener($event) { return ctx.getItems($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Create Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "form", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function JobComponent_Template_form_ngSubmit_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32); return _r1.form.valid && ctx.onSubmitForm(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Request/Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function JobComponent_Template_input_ngModelChange_37_listener($event) { return ctx.job.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Description :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function JobComponent_Template_input_ngModelChange_41_listener($event) { return ctx.job.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Accept Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "form", 25, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function JobComponent_Template_form_ngSubmit_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](57); return _r2.form.valid && ctx.onAcceptorSubmitForm(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, JobComponent_div_59_Template, 3, 0, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Please describe your skills/experience in short terms:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function JobComponent_Template_input_ngModelChange_63_listener($event) { return ctx.job.jobID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function JobComponent_Template_input_ngModelChange_64_listener($event) { return ctx.job.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, JobComponent_span_69_Template, 1, 0, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, JobComponent_span_70_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Assign Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "form", 25, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function JobComponent_Template_form_ngSubmit_80_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](81); return _r6.form.valid && ctx.onAssignationSubmitForm(_r6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, JobComponent_div_83_Template, 3, 0, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "From:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function JobComponent_Template_input_ngModelChange_87_listener($event) { return ctx.job.jobID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function JobComponent_Template_input_ngModelChange_88_listener($event) { return ctx.job.acceptedBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "To:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "ng-autocomplete", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selected", function JobComponent_Template_ng_autocomplete_selected_93_listener($event) { return ctx.selectEventUser($event); })("inputChanged", function JobComponent_Template_ng_autocomplete_inputChanged_93_listener($event) { return ctx.onChangeSearchUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, JobComponent_ng_template_94_Template, 1, 1, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, JobComponent_ng_template_96_Template, 1, 1, "ng-template", null, 51, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](102, JobComponent_span_102_Template, 1, 0, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, JobComponent_span_103_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](57);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](81);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](95);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total: ", ctx.pager.totalItems, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.query);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isLoading", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pager", ctx.pager)("isPaginationLoading", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.job.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.job.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAccepted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.job.jobID);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.job.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r2.valid || ctx.isAcceptingLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAcceptingLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAcceptingLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAssignedSuccessfully);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.job.jobID);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.job.acceptedBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.previousUserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.dataUser)("searchKeyword", ctx.keyword)("debounceTime", 500)("itemTemplate", _r8)("notFoundTemplate", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r6.valid || ctx.isAcceptingLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAcceptingLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAcceptingLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _shared_paginaton_paginaton_component__WEBPACK_IMPORTED_MODULE_11__["PaginatonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MinLengthValidator"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _shared_coloredrow_coloredrow_component__WEBPACK_IMPORTED_MODULE_13__["ColoredrowComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: [".albums[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\r\n    \r\n    grid-gap: 20px;\r\n  }\r\n  .album[_ngcontent-%COMP%] {\r\n    background: rgba(109, 105, 105, 0.2);\r\n    box-shadow: 0 0 5px rgba(29, 22, 22, 0);\r\n    padding: 20px;\r\n    display: grid;\r\n    grid-template-columns: 150px 1fr;\r\n    grid-gap: 10px;\r\n    align-items: center;\r\n    color: black;\r\n    font-weight: 100;\r\n  }\r\n  .album__artwork[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]{ \r\n    width: 350px; max-width:80%; height: 100%; margin:0;transform: translate(0); transition: transform .2s;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{  height: inherit; border:0; border-radius: 0;}\r\n  .modal[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]{ overflow-y: auto }\r\n  .modal.fixed-left[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]{ margin-left:auto;  transform: translateX(100%); }\r\n  .modal.fixed-right[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]{ margin-right:auto; transform: translateX(-100%); }\r\n  .modal.show[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]{ transform: translateX(0);  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCwwQ0FBMEM7SUFDMUMsY0FBYztFQUNoQjtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLHVDQUF1QztJQUN2QyxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUVBO0lBQ0UsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLHVCQUF1QixFQUFFLHlCQUF5QjtFQUN4RztFQUNBLDRDQUE0QyxlQUFlLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDO0VBQ3hGLHVEQUF1RCxpQkFBaUI7RUFDeEUsdUNBQXVDLGdCQUFnQixHQUFHLDJCQUEyQixFQUFFO0VBQ3ZGLHdDQUF3QyxpQkFBaUIsRUFBRSw0QkFBNEIsRUFBRTtFQUN6RixpQ0FBaUMsd0JBQXdCLEdBQUciLCJmaWxlIjoiam9iLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxidW1zIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI2MHB4LCAxZnIpKTtcclxuICAgIC8qIGdyaWQ6IGF1dG8tZmxvdyAyNWVtIC8gcmVwZWF0KDMsMWZyKTsgKi9cclxuICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG4gIH1cclxuICAuYWxidW0ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDksIDEwNSwgMTA1LCAwLjIpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDI5LCAyMiwgMjIsIDApO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1MHB4IDFmcjtcclxuICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgfVxyXG4gIC5hbGJ1bV9fYXJ0d29yayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5tb2RhbCAubW9kYWwtZGlhbG9nLWFzaWRleyBcclxuICAgIHdpZHRoOiAzNTBweDsgbWF4LXdpZHRoOjgwJTsgaGVpZ2h0OiAxMDAlOyBtYXJnaW46MDt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcclxuICB9XHJcbiAgLm1vZGFsIC5tb2RhbC1kaWFsb2ctYXNpZGUgLm1vZGFsLWNvbnRlbnR7ICBoZWlnaHQ6IGluaGVyaXQ7IGJvcmRlcjowOyBib3JkZXItcmFkaXVzOiAwO31cclxuICAubW9kYWwgLm1vZGFsLWRpYWxvZy1hc2lkZSAubW9kYWwtY29udGVudCAubW9kYWwtYm9keXsgb3ZlcmZsb3cteTogYXV0byB9XHJcbiAgLm1vZGFsLmZpeGVkLWxlZnQgLm1vZGFsLWRpYWxvZy1hc2lkZXsgbWFyZ2luLWxlZnQ6YXV0bzsgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgfVxyXG4gIC5tb2RhbC5maXhlZC1yaWdodCAubW9kYWwtZGlhbG9nLWFzaWRleyBtYXJnaW4tcmlnaHQ6YXV0bzsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgfVxyXG4gIC5tb2RhbC5zaG93IC5tb2RhbC1kaWFsb2ctYXNpZGV7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JobComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-job',
                templateUrl: './job.component.html',
                styleUrls: ['./job.component.css']
            }]
    }], function () { return [{ type: src_app_services_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_admin_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }, { type: _admin_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "OKUQ":
/*!**************************************************************************!*\
  !*** ./src/app/twilio/settings/device-select/device-select.component.ts ***!
  \**************************************************************************/
/*! exports provided: DeviceSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceSelectComponent", function() { return DeviceSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




function DeviceSelectComponent_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", device_r1.deviceId)("selected", device_r1.deviceId === ctx_r0.selectedId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", device_r1.label, " ");
} }
class IdGenerator {
    static getNext() {
        return ++IdGenerator.id;
    }
}
IdGenerator.id = 0;
class DeviceSelectComponent {
    constructor() {
        this.localDevices = [];
        this.settingsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.id = `device-select-${IdGenerator.getNext()}`;
    }
    get devices() {
        return this.localDevices;
    }
    set devices(devices) {
        this.selectedId = this.find(this.localDevices = devices);
    }
    onSettingsChanged(deviceId) {
        let value = deviceId.target.value;
        this.setAndEmitSelections(this.selectedId = value);
    }
    find(devices) {
        if (devices && devices.length > 0) {
            return devices[0].deviceId;
        }
        return null;
    }
    setAndEmitSelections(deviceId) {
        this.settingsChanged.emit(this.devices.find(d => d.deviceId === deviceId));
    }
}
DeviceSelectComponent.ɵfac = function DeviceSelectComponent_Factory(t) { return new (t || DeviceSelectComponent)(); };
DeviceSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeviceSelectComponent, selectors: [["app-device-select"]], inputs: { label: "label", kind: "kind", devices: "devices" }, outputs: { settingsChanged: "settingsChanged" }, decls: 4, vars: 4, consts: [[1, "h5", 3, "for"], [1, "custom-select", 3, "id", "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]], template: function DeviceSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DeviceSelectComponent_Template_select_change_2_listener($event) { return ctx.onSettingsChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DeviceSelectComponent_option_3_Template, 2, 3, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.devices);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXZpY2Utc2VsZWN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeviceSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-device-select',
                templateUrl: './device-select.component.html',
                styleUrls: ['./device-select.component.css']
            }]
    }], function () { return []; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], kind: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], devices: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], settingsChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "QBQw":
/*!***************************************!*\
  !*** ./src/app/models/tbllanguage.ts ***!
  \***************************************/
/*! exports provided: Language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
class Language {
}


/***/ }),

/***/ "R7NK":
/*!***********************************************!*\
  !*** ./src/app/twilio/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/signalr */ "6HpG");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _videochat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../videochat.service */ "yMH2");
/* harmony import */ var _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rooms/rooms.component */ "jfpJ");
/* harmony import */ var _camera_camera_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../camera/camera.component */ "Dnd0");
/* harmony import */ var _participants_participants_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../participants/participants.component */ "EahW");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../settings/settings.component */ "N+i1");










const _c0 = ["rooms"];
const _c1 = ["camera"];
const _c2 = ["settings"];
const _c3 = ["participants"];
class HomeComponent {
    constructor(videoChatService) {
        this.videoChatService = videoChatService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const builder = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__["HubConnectionBuilder"]()
                .configureLogging(_microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug)
                .withUrl(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}VideoNotificationHub`);
            this.notificationHub = builder.build();
            this.notificationHub.on('RoomsUpdated', (updated) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (updated) {
                    yield this.rooms.updateRooms();
                }
            }));
            yield this.notificationHub.start()
                .then(() => console.log("Connection started"))
                .catch(error => console.log(JSON.stringify(error)));
        });
    }
    onSettingsChanged(deviceInfo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.camera.initializePreview(deviceInfo);
        });
    }
    onLeaveRoom(_) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.activeRoom) {
                this.activeRoom.disconnect();
                this.activeRoom = null;
            }
            this.camera.finalizePreview();
            const videoDevice = this.settings.hidePreviewCamera();
            this.camera.initializePreview(videoDevice);
            this.participants.clear();
        });
    }
    onRoomChanged(roomName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (roomName) {
                if (this.activeRoom) {
                    this.activeRoom.disconnect();
                }
                this.camera.finalizePreview();
                const tracks = yield this.settings.showPreviewCamera();
                this.activeRoom = yield this.videoChatService.joinOrCreateRoom(roomName, tracks);
                this.participants.initialize(this.activeRoom.participants);
                this.registerRoomEvents();
                this.notificationHub.send('RoomsUpdated', true);
            }
        });
    }
    onParticipantsChanged(_) {
        this.videoChatService.nudge();
    }
    registerRoomEvents() {
        this.activeRoom
            .on('disconnected', (room) => room.localParticipant.tracks.forEach(publication => this.detachLocalTrack(publication.track)))
            .on('participantConnected', (participant) => this.participants.add(participant))
            .on('participantDisconnected', (participant) => this.participants.remove(participant))
            .on('dominantSpeakerChanged', (dominantSpeaker) => this.participants.loudest(dominantSpeaker));
    }
    detachLocalTrack(track) {
        if (this.isDetachable(track)) {
            track.detach().forEach(el => el.remove());
        }
    }
    isDetachable(track) {
        return !!track
            && (track.detach !== undefined
                || track.detach !== undefined);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_videochat_service__WEBPACK_IMPORTED_MODULE_4__["VideochatService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.rooms = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.camera = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.settings = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.participants = _t.first);
    } }, decls: 12, vars: 6, consts: [[1, "grid-container"], [1, "grid-left"], [3, "activeRoomName", "roomChanged"], ["rooms", ""], [1, "grid-content"], ["camera", ""], [3, "activeRoomName", "leaveRoom", "participantsChanged"], ["participants", ""], [1, "grid-right"], [3, "settingsChanged"], ["settings", ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-rooms", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("roomChanged", function HomeComponent_Template_app_rooms_roomChanged_2_listener($event) { return ctx.onRoomChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-camera", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "app-participants", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("leaveRoom", function HomeComponent_Template_app_participants_leaveRoom_7_listener($event) { return ctx.onLeaveRoom($event); })("participantsChanged", function HomeComponent_Template_app_participants_participantsChanged_7_listener($event) { return ctx.onParticipantsChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "app-settings", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("settingsChanged", function HomeComponent_Template_app_settings_settingsChanged_10_listener($event) { return ctx.onSettingsChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeRoomName", !!ctx.activeRoom ? ctx.activeRoom.name : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", !!ctx.activeRoom ? "none" : "block");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", !!ctx.activeRoom ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeRoomName", !!ctx.activeRoom ? ctx.activeRoom.name : "");
    } }, directives: [_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_5__["RoomsComponent"], _camera_camera_component__WEBPACK_IMPORTED_MODULE_6__["CameraComponent"], _participants_participants_component__WEBPACK_IMPORTED_MODULE_7__["ParticipantsComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"]], styles: [".grid-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    height: 100vh;\r\n    grid-template-columns: 2fr 4fr 2fr;\r\n    grid-template-rows: 1fr 7fr 1fr;\r\n    grid-template-areas: \"top-left . top-right\" \"left content right\" \"bottom-left . bottom-right\";\r\n  }\r\n  \r\n  .grid-content[_ngcontent-%COMP%] {\r\n    grid-area: content;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgb(56, 56, 56);\r\n    border-top: solid 6px #F22F46;\r\n    border-bottom: solid 6px #F22F46;\r\n  }\r\n  \r\n  .grid-left[_ngcontent-%COMP%] {\r\n    grid-area: left;\r\n    background: linear-gradient(to left, rgb(56, 56, 56) 0, transparent 100%);\r\n    border-top: solid 6px #F22F46;\r\n    border-bottom: solid 6px #F22F46;\r\n  }\r\n  \r\n  .grid-right[_ngcontent-%COMP%] {\r\n    grid-area: right;\r\n    background: linear-gradient(to right, rgb(56, 56, 56) 0, transparent 100%);\r\n    border-top: solid 6px #F22F46;\r\n    border-bottom: solid 6px #F22F46;\r\n  }\r\n  \r\n  .grid-top-left[_ngcontent-%COMP%], .grid-top-right[_ngcontent-%COMP%], .grid-bottom-left[_ngcontent-%COMP%], .grid-bottom-right[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .grid-top-left[_ngcontent-%COMP%] {\r\n    grid-area: top-left;\r\n  }\r\n  \r\n  .grid-top-right[_ngcontent-%COMP%] {\r\n    grid-area: top-right;\r\n  }\r\n  \r\n  .grid-bottom-left[_ngcontent-%COMP%] {\r\n    grid-area: bottom-left;\r\n  }\r\n  \r\n  .grid-bottom-right[_ngcontent-%COMP%] {\r\n    grid-area: bottom-right;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUMvQiw2RkFBNkY7RUFDL0Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QixnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxlQUFlO0lBQ2YseUVBQXlFO0lBQ3pFLDZCQUE2QjtJQUM3QixnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsMEVBQTBFO0lBQzFFLDZCQUE2QjtJQUM3QixnQ0FBZ0M7RUFDbEM7O0VBRUE7Ozs7SUFJRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFDQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFDQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA0ZnIgMmZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwidG9wLWxlZnQgLiB0b3AtcmlnaHRcIiBcImxlZnQgY29udGVudCByaWdodFwiIFwiYm90dG9tLWxlZnQgLiBib3R0b20tcmlnaHRcIjtcclxuICB9XHJcbiAgXHJcbiAgLmdyaWQtY29udGVudCB7XHJcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA1NiwgNTYpO1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgNnB4ICNGMjJGNDY7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCA2cHggI0YyMkY0NjtcclxuICB9XHJcbiAgXHJcbiAgLmdyaWQtbGVmdCB7XHJcbiAgICBncmlkLWFyZWE6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiKDU2LCA1NiwgNTYpIDAsIHRyYW5zcGFyZW50IDEwMCUpO1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgNnB4ICNGMjJGNDY7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCA2cHggI0YyMkY0NjtcclxuICB9XHJcbiAgXHJcbiAgLmdyaWQtcmlnaHQge1xyXG4gICAgZ3JpZC1hcmVhOiByaWdodDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDU2LCA1NiwgNTYpIDAsIHRyYW5zcGFyZW50IDEwMCUpO1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgNnB4ICNGMjJGNDY7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCA2cHggI0YyMkY0NjtcclxuICB9XHJcbiAgXHJcbiAgLmdyaWQtdG9wLWxlZnQsXHJcbiAgLmdyaWQtdG9wLXJpZ2h0LFxyXG4gIC5ncmlkLWJvdHRvbS1sZWZ0LFxyXG4gIC5ncmlkLWJvdHRvbS1yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZ3JpZC10b3AtbGVmdCB7XHJcbiAgICBncmlkLWFyZWE6IHRvcC1sZWZ0O1xyXG4gIH1cclxuICAuZ3JpZC10b3AtcmlnaHQge1xyXG4gICAgZ3JpZC1hcmVhOiB0b3AtcmlnaHQ7XHJcbiAgfVxyXG4gIC5ncmlkLWJvdHRvbS1sZWZ0IHtcclxuICAgIGdyaWQtYXJlYTogYm90dG9tLWxlZnQ7XHJcbiAgfVxyXG4gIC5ncmlkLWJvdHRvbS1yaWdodCB7XHJcbiAgICBncmlkLWFyZWE6IGJvdHRvbS1yaWdodDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _videochat_service__WEBPACK_IMPORTED_MODULE_4__["VideochatService"] }]; }, { rooms: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['rooms', { static: false }]
        }], camera: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['camera', { static: false }]
        }], settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['settings', { static: false }]
        }], participants: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['participants', { static: false }]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    //isLoader: boolean = false;
    constructor() {
    }
    ngAfterViewInit() {
        $(document).ready(function () {
            $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        });
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".form-group.required[_ngcontent-%COMP%]   .control-label[_ngcontent-%COMP%]:after {\r\n    content:\"*\";\r\n    color:red;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFNBQVM7RUFDWCIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwLnJlcXVpcmVkIC5jb250cm9sLWxhYmVsOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6XCIqXCI7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TS9w":
/*!*****************************************************!*\
  !*** ./src/app/shared/success/success.component.ts ***!
  \*****************************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SuccessComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.Message);
} }
function SuccessComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.Message);
} }
function SuccessComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.Message);
} }
class SuccessComponent {
    constructor() {
        this.Classes = "";
        this.Message = "";
        this._isSuccess = false;
        this._isWarning = false;
        this._isDanger = false;
    }
    set SetMessage(msg) {
        this.Message = msg;
    }
    set isSuccess(msg) {
        this._isSuccess = msg;
    }
    set isWarning(msg) {
        this._isWarning = msg;
    }
    set isDanger(msg) {
        this._isDanger = msg;
    }
}
SuccessComponent.ɵfac = function SuccessComponent_Factory(t) { return new (t || SuccessComponent)(); };
SuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuccessComponent, selectors: [["app-success"]], inputs: { SetMessage: "SetMessage", isSuccess: "isSuccess", isWarning: "isWarning", isDanger: "isDanger" }, decls: 3, vars: 3, consts: [["class", "shadow-sm alert alert-warning", "style", "border-left: 5px solid #efa31d;", 4, "ngIf"], ["class", "shadow-sm alert alert-success text-success", "style", "border-left: 5px solid;", 4, "ngIf"], ["class", "shadow-sm alert alert-danger text-danger", "style", "border-left: 5px solid;", 4, "ngIf"], [1, "shadow-sm", "alert", "alert-warning", 2, "border-left", "5px solid #efa31d"], [1, "fas", "fa-exclamation-circle", "mr-2"], [1, "shadow-sm", "alert", "alert-success", "text-success", 2, "border-left", "5px solid"], [1, "fas", "fa-check-circle", "mr-2"], [1, "shadow-sm", "alert", "alert-danger", "text-danger", 2, "border-left", "5px solid"], [1, "fas", "fa-times-circle", "mr-2"]], template: function SuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SuccessComponent_div_0_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SuccessComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SuccessComponent_div_2_Template, 4, 1, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._isWarning);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._isSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._isDanger);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWNjZXNzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-success',
                templateUrl: './success.component.html',
                styleUrls: ['./success.component.css']
            }]
    }], function () { return []; }, { SetMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isSuccess: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isWarning: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isDanger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "TYVA":
/*!**************************************!*\
  !*** ./src/app/admin/models/user.ts ***!
  \**************************************/
/*! exports provided: User, UserDTO, RegisterDTO, UserViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDTO", function() { return UserDTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDTO", function() { return RegisterDTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewModel", function() { return UserViewModel; });
class User {
}
class UserDTO {
}
class RegisterDTO {
    constructor(init) {
        Object.assign(this, init);
    }
}
class UserViewModel {
}


/***/ }),

/***/ "Tt2L":
/*!***********************************************************!*\
  !*** ./src/app/shared/coloredrow/coloredrow.component.ts ***!
  \***********************************************************/
/*! exports provided: ColoredrowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColoredrowComponent", function() { return ColoredrowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class ColoredrowComponent {
    constructor() {
        this.jobstatus = "";
        this.badgeClass = "";
    }
    set jobState(stateInt) {
        this.getJobStatus(stateInt);
    }
    getJobStatus(jobStatus) {
        switch (jobStatus) {
            case 0:
                this.jobstatus = "Open";
                this.badgeClass = "badge-success";
                break;
            case 1:
                this.jobstatus = "In Progress";
                this.badgeClass = "badge-info";
                break;
            case 2:
                this.jobstatus = "Completed";
                this.badgeClass = "badge-success";
                break;
            case 3:
                this.jobstatus = "Rejected";
                this.badgeClass = "badge-danger";
                break;
            case 4:
                this.jobstatus = "Cancelled";
                this.badgeClass = "badge-warning";
                break;
            default:
                this.jobstatus = "";
                this.badgeClass = "";
        }
    }
}
ColoredrowComponent.ɵfac = function ColoredrowComponent_Factory(t) { return new (t || ColoredrowComponent)(); };
ColoredrowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColoredrowComponent, selectors: [["app-coloredrow"]], inputs: { jobState: "jobState" }, decls: 2, vars: 2, consts: [[1, "badge", 3, "ngClass"]], template: function ColoredrowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.badgeClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.jobstatus, "\n");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xvcmVkcm93LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColoredrowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-coloredrow',
                templateUrl: './coloredrow.component.html',
                styleUrls: ['./coloredrow.component.css']
            }]
    }], function () { return []; }, { jobState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _admin_services_jwt_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/services/jwt.service */ "sLU9");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/admin.module */ "jkDv");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-loading-bar/core */ "lPP5");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-loading-bar/router */ "F34d");
/* harmony import */ var _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-loading-bar/http-client */ "XJCJ");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_about_AboutComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/about/AboutComponent */ "AgXD");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/contact/contact.component */ "G2Gn");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-logger */ "E3Zs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_web_rtc_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/web-rtc.service */ "hoN+");
/* harmony import */ var _components_audio_audio_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/audio/audio.component */ "z1zP");
/* harmony import */ var _components_rtccon_rtccon_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/rtccon/rtccon.component */ "I13E");
/* harmony import */ var _components_answer_answer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/answer/answer.component */ "KFQC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_job_job_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/job/job.component */ "NaU/");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _components_zoompagination_zoompagination_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/zoompagination/zoompagination.component */ "nJQ+");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/loader/loader.component */ "o7am");
/* harmony import */ var _components_sitelayout_sitelayout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/sitelayout/sitelayout.component */ "tNdB");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/chat/chat.component */ "3tD2");
/* harmony import */ var _test_video_video_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./test/video/video.component */ "wASb");
/* harmony import */ var _twilio_camera_camera_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./twilio/camera/camera.component */ "Dnd0");
/* harmony import */ var _twilio_home_home_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./twilio/home/home.component */ "R7NK");
/* harmony import */ var _twilio_participants_participants_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./twilio/participants/participants.component */ "EahW");
/* harmony import */ var _twilio_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./twilio/rooms/rooms.component */ "jfpJ");
/* harmony import */ var _twilio_settings_settings_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./twilio/settings/settings.component */ "N+i1");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _twilio_settings_device_select_device_select_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./twilio/settings/device-select/device-select.component */ "OKUQ");
/* harmony import */ var _services_interceptererrorhandling_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/interceptererrorhandling.service */ "MNkv");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");
/* harmony import */ var _shared_paginaton_paginaton_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/paginaton/paginaton.component */ "v9mL");
/* harmony import */ var _components_sessions_sessions_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/sessions/sessions.component */ "bpZD");
/* harmony import */ var _shared_coloredrow_coloredrow_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./shared/coloredrow/coloredrow.component */ "Tt2L");
/* harmony import */ var _shared_notfoundanyrecord_notfoundanyrecord_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./shared/notfoundanyrecord/notfoundanyrecord.component */ "A6sH");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "Lquv");
/* harmony import */ var _components_languages_languages_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/languages/languages.component */ "IhL1");
/* harmony import */ var _shared_success_success_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./shared/success/success.component */ "TS9w");















































function tokenGetter() {
    return localStorage.getItem("access_token");
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_web_rtc_service__WEBPACK_IMPORTED_MODULE_14__["WebRTCService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
            useClass: _admin_services_jwt_service__WEBPACK_IMPORTED_MODULE_0__["JwtService"],
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
            useClass: _services_interceptererrorhandling_service__WEBPACK_IMPORTED_MODULE_33__["InterceptererrorhandlingService"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__["LoadingBarModule"],
            _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__["LoadingBarRouterModule"],
            _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_6__["LoadingBarHttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"],
            _admin_admin_module__WEBPACK_IMPORTED_MODULE_1__["AdminModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__["BrowserAnimationsModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_35__["AutocompleteLibModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_31__["ToastrModule"].forRoot({
                timeOut: 5000,
                positionClass: 'toast-bottom-left',
                progressBar: true
            }),
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_20__["JwtModule"].forRoot({
                config: {
                    tokenGetter: tokenGetter
                }
            }),
            ngx_logger__WEBPACK_IMPORTED_MODULE_12__["LoggerModule"].forRoot({
                serverLoggingUrl: '/api/logs',
                level: ngx_logger__WEBPACK_IMPORTED_MODULE_12__["NgxLoggerLevel"].DEBUG,
                serverLogLevel: ngx_logger__WEBPACK_IMPORTED_MODULE_12__["NgxLoggerLevel"].ERROR
            })
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _components_about_AboutComponent__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
        _components_audio_audio_component__WEBPACK_IMPORTED_MODULE_15__["AudioComponent"],
        _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_22__["LoaderComponent"],
        _components_rtccon_rtccon_component__WEBPACK_IMPORTED_MODULE_16__["RtcconComponent"],
        _components_answer_answer_component__WEBPACK_IMPORTED_MODULE_17__["AnswerComponent"],
        _components_job_job_component__WEBPACK_IMPORTED_MODULE_19__["JobComponent"],
        _components_zoompagination_zoompagination_component__WEBPACK_IMPORTED_MODULE_21__["ZoompaginationComponent"],
        _components_sitelayout_sitelayout_component__WEBPACK_IMPORTED_MODULE_23__["SitelayoutComponent"],
        _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_24__["ChatComponent"],
        _test_video_video_component__WEBPACK_IMPORTED_MODULE_25__["VideoComponent"],
        _twilio_camera_camera_component__WEBPACK_IMPORTED_MODULE_26__["CameraComponent"],
        _twilio_home_home_component__WEBPACK_IMPORTED_MODULE_27__["HomeComponent"],
        _twilio_participants_participants_component__WEBPACK_IMPORTED_MODULE_28__["ParticipantsComponent"],
        _twilio_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_29__["RoomsComponent"],
        _twilio_settings_settings_component__WEBPACK_IMPORTED_MODULE_30__["SettingsComponent"],
        _twilio_settings_device_select_device_select_component__WEBPACK_IMPORTED_MODULE_32__["DeviceSelectComponent"],
        _shared_paginaton_paginaton_component__WEBPACK_IMPORTED_MODULE_36__["PaginatonComponent"],
        _components_sessions_sessions_component__WEBPACK_IMPORTED_MODULE_37__["SessionsComponent"],
        _shared_coloredrow_coloredrow_component__WEBPACK_IMPORTED_MODULE_38__["ColoredrowComponent"],
        _shared_notfoundanyrecord_notfoundanyrecord_component__WEBPACK_IMPORTED_MODULE_39__["NotfoundanyrecordComponent"],
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_40__["DashboardComponent"],
        _components_languages_languages_component__WEBPACK_IMPORTED_MODULE_41__["LanguagesComponent"],
        _shared_success_success_component__WEBPACK_IMPORTED_MODULE_42__["SuccessComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__["LoadingBarModule"],
        _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__["LoadingBarRouterModule"],
        _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_6__["LoadingBarHttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"],
        _admin_admin_module__WEBPACK_IMPORTED_MODULE_1__["AdminModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__["BrowserAnimationsModule"],
        angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_35__["AutocompleteLibModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_31__["ToastrModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_20__["JwtModule"], ngx_logger__WEBPACK_IMPORTED_MODULE_12__["LoggerModule"]], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _components_about_AboutComponent__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                    _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                    _components_audio_audio_component__WEBPACK_IMPORTED_MODULE_15__["AudioComponent"],
                    _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_22__["LoaderComponent"],
                    _components_rtccon_rtccon_component__WEBPACK_IMPORTED_MODULE_16__["RtcconComponent"],
                    _components_answer_answer_component__WEBPACK_IMPORTED_MODULE_17__["AnswerComponent"],
                    _components_job_job_component__WEBPACK_IMPORTED_MODULE_19__["JobComponent"],
                    _components_zoompagination_zoompagination_component__WEBPACK_IMPORTED_MODULE_21__["ZoompaginationComponent"],
                    _components_sitelayout_sitelayout_component__WEBPACK_IMPORTED_MODULE_23__["SitelayoutComponent"],
                    _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_24__["ChatComponent"],
                    _test_video_video_component__WEBPACK_IMPORTED_MODULE_25__["VideoComponent"],
                    _twilio_camera_camera_component__WEBPACK_IMPORTED_MODULE_26__["CameraComponent"],
                    _twilio_home_home_component__WEBPACK_IMPORTED_MODULE_27__["HomeComponent"],
                    _twilio_participants_participants_component__WEBPACK_IMPORTED_MODULE_28__["ParticipantsComponent"],
                    _twilio_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_29__["RoomsComponent"],
                    _twilio_settings_settings_component__WEBPACK_IMPORTED_MODULE_30__["SettingsComponent"],
                    _twilio_settings_device_select_device_select_component__WEBPACK_IMPORTED_MODULE_32__["DeviceSelectComponent"],
                    _shared_paginaton_paginaton_component__WEBPACK_IMPORTED_MODULE_36__["PaginatonComponent"],
                    _components_sessions_sessions_component__WEBPACK_IMPORTED_MODULE_37__["SessionsComponent"],
                    _shared_coloredrow_coloredrow_component__WEBPACK_IMPORTED_MODULE_38__["ColoredrowComponent"],
                    _shared_notfoundanyrecord_notfoundanyrecord_component__WEBPACK_IMPORTED_MODULE_39__["NotfoundanyrecordComponent"],
                    _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_40__["DashboardComponent"],
                    _components_languages_languages_component__WEBPACK_IMPORTED_MODULE_41__["LanguagesComponent"],
                    _shared_success_success_component__WEBPACK_IMPORTED_MODULE_42__["SuccessComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__["LoadingBarModule"],
                    _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__["LoadingBarRouterModule"],
                    _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_6__["LoadingBarHttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"],
                    _admin_admin_module__WEBPACK_IMPORTED_MODULE_1__["AdminModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__["BrowserAnimationsModule"],
                    angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_35__["AutocompleteLibModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_31__["ToastrModule"].forRoot({
                        timeOut: 5000,
                        positionClass: 'toast-bottom-left',
                        progressBar: true
                    }),
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_20__["JwtModule"].forRoot({
                        config: {
                            tokenGetter: tokenGetter
                        }
                    }),
                    ngx_logger__WEBPACK_IMPORTED_MODULE_12__["LoggerModule"].forRoot({
                        serverLoggingUrl: '/api/logs',
                        level: ngx_logger__WEBPACK_IMPORTED_MODULE_12__["NgxLoggerLevel"].DEBUG,
                        serverLogLevel: ngx_logger__WEBPACK_IMPORTED_MODULE_12__["NgxLoggerLevel"].ERROR
                    })
                ],
                exports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                ],
                providers: [
                    _services_web_rtc_service__WEBPACK_IMPORTED_MODULE_14__["WebRTCService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                        useClass: _admin_services_jwt_service__WEBPACK_IMPORTED_MODULE_0__["JwtService"],
                        multi: true
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                        useClass: _services_interceptererrorhandling_service__WEBPACK_IMPORTED_MODULE_33__["InterceptererrorhandlingService"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bRJT":
/*!*******************************!*\
  !*** ./src/app/models/job.ts ***!
  \*******************************/
/*! exports provided: Job, OfferAnswerClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Job", function() { return Job; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferAnswerClass", function() { return OfferAnswerClass; });
class Job {
    constructor() {
        this.jobID = 0;
        this.name = '';
        this.description = '';
        this.postedBy = '';
        this.acceptedBy = '';
        this.createdAt = new Date();
    }
}
class OfferAnswerClass {
    constructor() {
        this.username = "";
    }
}


/***/ }),

/***/ "bpZD":
/*!***********************************************************!*\
  !*** ./src/app/components/sessions/sessions.component.ts ***!
  \***********************************************************/
/*! exports provided: SessionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsComponent", function() { return SessionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_job__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/job */ "bRJT");
/* harmony import */ var src_app_admin_models_base_view_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin/models/base-view-model */ "gKIg");
/* harmony import */ var src_app_services_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/job.service */ "qLOZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_admin_services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin/services/token.service */ "xsTi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/loader/loader.component */ "o7am");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_paginaton_paginaton_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/paginaton/paginaton.component */ "v9mL");
/* harmony import */ var _shared_notfoundanyrecord_notfoundanyrecord_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/notfoundanyrecord/notfoundanyrecord.component */ "A6sH");
/* harmony import */ var _shared_coloredrow_coloredrow_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/coloredrow/coloredrow.component */ "Tt2L");














function SessionsComponent_app_notfoundanyrecord_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-notfoundanyrecord");
} }
function SessionsComponent_table_15_tr_14_td_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SessionsComponent_table_15_tr_14_td_10_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const j_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.showaCancelModal(j_r7.jobID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SessionsComponent_table_15_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-coloredrow", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SessionsComponent_table_15_tr_14_td_10_Template, 2, 0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](j_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("jobState", j_r7.jobState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", j_r7.postedBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, j_r7.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", j_r7.jobState === 0);
} }
function SessionsComponent_table_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Request for language");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Request State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Requested By");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Requested Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SessionsComponent_table_15_tr_14_Template, 11, 7, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.items);
} }
function SessionsComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your request has been cancelled. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SessionsComponent_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 43);
} }
function SessionsComponent_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SessionsComponent extends src_app_admin_models_base_view_model__WEBPACK_IMPORTED_MODULE_2__["BaseCrudApi"] {
    constructor(jobService, router, toastrService, tokenService) {
        super();
        this.jobService = jobService;
        this.router = router;
        this.toastrService = toastrService;
        this.tokenService = tokenService;
        this.job = new src_app_models_job__WEBPACK_IMPORTED_MODULE_1__["Job"]();
        this.selectedDate = new Date();
        this.cancelIsLoading = false;
        this.isCancelled = false;
        this.allowedRoles = this.tokenService.getUserRoles();
    }
    ngOnInit() {
        this.getItems();
    }
    getDate(date) {
    }
    getDay(day) {
    }
    getMonth(month) {
    }
    getMonthName(monthName) {
    }
    getYear(year) {
    }
    onCancelSubmitForm(form) {
        console.log(JSON.stringify(this.job));
        this.cancelIsLoading = true;
        this.add = this.jobService.cancelJob(this.job)
            .subscribe(res => {
            if (res.isSuccess) {
                // Make notification to user for saving data
                this.isCancelled = true;
                debugger;
            }
        }, (error) => {
            console.log(error.error);
            this.isError = true;
            this.errorMessage = error.message;
            this.cancelIsLoading = false;
            if (error.status == 401) {
                this.router.navigateByUrl("/Login");
            }
        }, () => {
            form.reset();
            this.cancelIsLoading = false;
            this.getItems();
        });
    }
    showaCancelModal(jobid) {
        this.job.jobID = jobid;
        this.isCancelled = false;
        $("#cancelModal").modal('show');
    }
    getItems(page = 1) {
        this.isLoading = true;
        this.add = this.jobService.getMyJobs(page, this.query)
            .subscribe(res => {
            if (res.isSuccess) {
                this.items = res.listModel,
                    this.pager = res.pager;
            }
            else {
                this.isError = true;
                this.errorMessage = res.message;
                this.toastrService.error(res.message, "Error: ");
            }
        }, (error) => {
            console.log(error.error);
            this.isError = true;
            this.errorMessage = error.message;
            if (error.status == 401) {
                this.router.navigateByUrl("/Login");
            }
        }, () => {
            this.isLoading = false;
        });
    }
    reset() {
        this.query = '';
        this.getItems();
    }
    ngOnDestroy() {
        this.dispose();
    }
}
SessionsComponent.ɵfac = function SessionsComponent_Factory(t) { return new (t || SessionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_admin_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"])); };
SessionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SessionsComponent, selectors: [["app-sessions"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 41, vars: 12, consts: [[1, "container", 2, "height", "100%"], [1, "row"], [1, "col-md-3"], [1, "col-md-6"], [1, "input-group", "mb-3"], ["type", "text", "required", "", "placeholder", "Search here. . .", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-search"], [1, "fas", "fa-sync-alt"], [3, "isLoading"], [4, "ngIf"], ["class", "table table-hover", 4, "ngIf"], [3, "pager", "isPaginationLoading", "nextPage"], ["id", "cancelModal", "tabindex", "-1", "role", "dialog", 1, "modal", "fixed-left", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-aside"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [3, "ngSubmit"], ["canceljobForm", "ngForm"], [1, "modal-body"], ["class", "alert alert-warning", 4, "ngIf"], [1, "form-group", "required"], ["type", "hidden", "name", "jobID", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "cancellationReason", "required", "", "minlength", "15", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "table", "table-hover"], ["scope", "col"], ["scope", "col", 1, "text-center"], ["class", "table-light", 4, "ngFor", "ngForOf"], [1, "table-light"], ["scope", "row"], [3, "jobState"], ["class", "text-center", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], [1, "text-center", 2, "cursor", "pointer", 3, "click"], [1, "fas", "fa-power-off", "text-danger"], [1, "alert", "alert-warning"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]], template: function SessionsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SessionsComponent_Template_input_ngModelChange_6_listener($event) { return ctx.query = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SessionsComponent_Template_button_click_8_listener() { return ctx.getItems(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SessionsComponent_Template_button_click_11_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-loader", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SessionsComponent_app_notfoundanyrecord_14_Template, 1, 0, "app-notfoundanyrecord", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SessionsComponent_table_15_Template, 15, 1, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-paginaton", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nextPage", function SessionsComponent_Template_app_paginaton_nextPage_16_listener($event) { return ctx.getItems($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cancel Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SessionsComponent_Template_form_ngSubmit_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); return _r2.form.valid && ctx.onCancelSubmitForm(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SessionsComponent_div_29_Template, 2, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Please provide reason for cancellation of request:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SessionsComponent_Template_input_ngModelChange_33_listener($event) { return ctx.job.jobID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SessionsComponent_Template_input_ngModelChange_34_listener($event) { return ctx.job.cancellationReason = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, SessionsComponent_span_39_Template, 1, 0, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SessionsComponent_span_40_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isLoading", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.items.length > 0) && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.items.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pager", ctx.pager)("isPaginationLoading", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCancelled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.job.jobID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.job.cancellationReason);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r2.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cancelIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cancelIsLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_paginaton_paginaton_component__WEBPACK_IMPORTED_MODULE_10__["PaginatonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MinLengthValidator"], _shared_notfoundanyrecord_notfoundanyrecord_component__WEBPACK_IMPORTED_MODULE_11__["NotfoundanyrecordComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_coloredrow_coloredrow_component__WEBPACK_IMPORTED_MODULE_12__["ColoredrowComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".modal[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]{ \r\n    width: 350px; max-width:80%; height: 100%; margin:0;transform: translate(0); transition: transform .2s;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{  height: inherit; border:0; border-radius: 0;}\r\n  .modal[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]{ overflow-y: auto }\r\n  .modal.fixed-left[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]{ margin-left:auto;  transform: translateX(100%); }\r\n  .modal.fixed-right[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]{ margin-right:auto; transform: translateX(-100%); }\r\n  .modal.show[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]{ transform: translateX(0);  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxRQUFRLENBQUMsdUJBQXVCLEVBQUUseUJBQXlCO0VBQ3hHO0VBQ0EsNENBQTRDLGVBQWUsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLENBQUM7RUFDeEYsdURBQXVELGlCQUFpQjtFQUN4RSx1Q0FBdUMsZ0JBQWdCLEdBQUcsMkJBQTJCLEVBQUU7RUFDdkYsd0NBQXdDLGlCQUFpQixFQUFFLDRCQUE0QixFQUFFO0VBQ3pGLGlDQUFpQyx3QkFBd0IsR0FBRyIsImZpbGUiOiJzZXNzaW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsIC5tb2RhbC1kaWFsb2ctYXNpZGV7IFxyXG4gICAgd2lkdGg6IDM1MHB4OyBtYXgtd2lkdGg6ODAlOyBoZWlnaHQ6IDEwMCU7IG1hcmdpbjowO3RyYW5zZm9ybTogdHJhbnNsYXRlKDApOyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xyXG4gIH1cclxuICAubW9kYWwgLm1vZGFsLWRpYWxvZy1hc2lkZSAubW9kYWwtY29udGVudHsgIGhlaWdodDogaW5oZXJpdDsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDA7fVxyXG4gIC5tb2RhbCAubW9kYWwtZGlhbG9nLWFzaWRlIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5eyBvdmVyZmxvdy15OiBhdXRvIH1cclxuICAubW9kYWwuZml4ZWQtbGVmdCAubW9kYWwtZGlhbG9nLWFzaWRleyBtYXJnaW4tbGVmdDphdXRvOyAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyB9XHJcbiAgLm1vZGFsLmZpeGVkLXJpZ2h0IC5tb2RhbC1kaWFsb2ctYXNpZGV7IG1hcmdpbi1yaWdodDphdXRvOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpOyB9XHJcbiAgLm1vZGFsLnNob3cgLm1vZGFsLWRpYWxvZy1hc2lkZXsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sessions',
                templateUrl: './sessions.component.html',
                styleUrls: ['./sessions.component.css']
            }]
    }], function () { return [{ type: src_app_services_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: src_app_admin_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "cR5Y":
/*!******************************************!*\
  !*** ./src/app/twilio/device.service.ts ***!
  \******************************************/
/*! exports provided: DeviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceService", function() { return DeviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");




class DeviceService {
    constructor() {
        this.deviceBroadcast = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        if (navigator && navigator.mediaDevices) {
            navigator.mediaDevices.ondevicechange = (_) => {
                this.deviceBroadcast.next(this.getDeviceOptions());
            };
        }
        this.$devicesUpdated = this.deviceBroadcast.asObservable();
        this.deviceBroadcast.next(this.getDeviceOptions());
    }
    isGrantedMediaPermissions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (navigator && navigator['permissions']) {
                try {
                    const result = yield navigator['permissions'].query({ name: 'camera' });
                    if (result) {
                        if (result.state === 'granted') {
                            return true;
                        }
                        else {
                            const isGranted = yield new Promise(resolve => {
                                result.onchange = (_) => {
                                    const granted = true; //_.target. === 'granted'; // Changed this
                                    if (granted) {
                                        resolve(true);
                                    }
                                };
                            });
                            return isGranted;
                        }
                    }
                }
                catch (e) {
                    // This is only currently supported in Chrome.
                    // https://stackoverflow.com/a/53155894/2410379
                    return true;
                }
            }
            return false;
        });
    }
    getDeviceOptions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const isGranted = yield this.isGrantedMediaPermissions();
            if (navigator && navigator.mediaDevices && isGranted) {
                let devices = yield this.tryGetDevices();
                if (devices.every(d => !d.label)) {
                    devices = yield this.tryGetDevices();
                }
                return devices;
            }
            return undefined;
        });
    }
    tryGetDevices() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const mediaDevices = yield navigator.mediaDevices.enumerateDevices();
            const devices = ['audioinput', 'audiooutput', 'videoinput'].reduce((options, kind) => {
                return mediaDevices.filter(device => device.kind === kind); // Changed this
            }, []);
            return devices;
        });
    }
}
DeviceService.ɵfac = function DeviceService_Factory(t) { return new (t || DeviceService)(); };
DeviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DeviceService, factory: DeviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DeviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    //apiUrl: 'https://localhost:44339/'
    apiUrl: 'https://zoomclone.azurewebsites.net/'
};


/***/ }),

/***/ "gKIg":
/*!*************************************************!*\
  !*** ./src/app/admin/models/base-view-model.ts ***!
  \*************************************************/
/*! exports provided: BaseViewModel, Pager, SubscriptionsContainer, BaseCrudApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseViewModel", function() { return BaseViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pager", function() { return Pager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsContainer", function() { return SubscriptionsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCrudApi", function() { return BaseCrudApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class BaseViewModel {
    constructor() {
        this.isSuccess = false;
        this.statusCode = 401;
        this.pager = new Pager();
    }
}
class Pager {
}
class SubscriptionsContainer {
    constructor() {
        this.subs = [];
    }
    set add(s) {
        this.subs.push(s);
    }
    dispose() {
        this.subs.forEach(s => s.unsubscribe());
    }
}
class BaseCrudApi {
    constructor() {
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isLoading = false;
        this.isError = false;
        this.isSaved = false;
        this.isSaving = false;
        this.items = [];
        this.query = '';
        this.pager = new Pager();
        this.pageNo = 1;
        this.myNumbers = [];
        this.allowedRoles = [];
        this.subs = [];
    }
    set add(s) {
        this.subs.push(s);
    }
    dispose() {
        this.subs.forEach(s => s.unsubscribe());
    }
}
BaseCrudApi.ɵfac = function BaseCrudApi_Factory(t) { return new (t || BaseCrudApi)(); };
BaseCrudApi.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BaseCrudApi });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseCrudApi, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
    }], null, null); })();


/***/ }),

/***/ "hoN+":
/*!*********************************************!*\
  !*** ./src/app/services/web-rtc.service.ts ***!
  \*********************************************/
/*! exports provided: WebRTCService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRTCService", function() { return WebRTCService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WebRTCService {
    // Screen Share //
    constructor(ngZone) {
        this.btnScreenShare = '';
        this.btnScreenShareColor = '';
        this.ngZone = ngZone;
    }
    createConnection() {
        console.log('createConnection');
        this.connection = new RTCPeerConnection();
        debugger;
    }
    createOffer() {
        debugger;
        var offer = this.connection.createOffer();
        // this.connection.setLocalDescription(offer)
        // .then(z => console.log(z));
        console.log('localDescription ', this.connection.localDescription);
        //Send offer to Server
        //hub.server.send(JSON.stringify({ 'offer': connection.localDescription }));
    }
    StartStopScreenShare() {
        if (this._screenTrack) {
            this._screenTrack.stop();
            this._screenTrack = undefined;
            this.btnScreenShare = 'Share Screen';
            return;
        }
        const mediaDevices = navigator.mediaDevices;
        var sc_stream = mediaDevices.getDisplayMedia({
            audio: false,
            video: { frameRate: 1 },
        })
            .then((stream) => {
            this._screenStream = stream;
            if (this._screenStream && this._screenStream.getVideoTracks().length > 0) {
                debugger;
                this.screenvideo.nativeElement.srcObject = this._screenStream;
                this.screenvideo.nativeElement.play();
            }
            // this.ngZone.run(()=>{
            //   this.btnScreenShare = "On Activate";
            //   this.btnScreenShareColor = 'text-success';
            // });
            // this._screenStream.oninactive = (eee: any) => {
            //   this.ngZone.run(() => {
            //     this.btnScreenShare = "On in active";
            //     this.btnScreenShareColor = 'text-danger';
            //   });
            //}
            // debugger;
            // console.log(stream);
            // console.log(this._screenStream);
        }).catch((error) => {
            console.log(error);
        });
    }
}
WebRTCService.ɵfac = function WebRTCService_Factory(t) { return new (t || WebRTCService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
WebRTCService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebRTCService, factory: WebRTCService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebRTCService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { screenvideo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['screenvideo']
        }] }); })();


/***/ }),

/***/ "jfpJ":
/*!*************************************************!*\
  !*** ./src/app/twilio/rooms/rooms.component.ts ***!
  \*************************************************/
/*! exports provided: RoomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsComponent", function() { return RoomsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _videochat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../videochat.service */ "yMH2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function RoomsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Add a room to begin. Other online participants can join or create rooms. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "active": a0 }; };
function RoomsComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoomsComponent_a_13_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const room_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onJoinRoom(room_r2.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const room_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r1.activeRoomName === room_r2.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", room_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", room_r2.participantCount, " / ", room_r2.maxParticipants, " ");
} }
class RoomsComponent {
    constructor(videoChatService) {
        this.videoChatService = videoChatService;
        this.roomChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.updateRooms();
            this.subscription =
                this.videoChatService
                    .$roomsUpdated
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.updateRooms()))
                    .subscribe();
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    onTryAddRoom() {
        if (this.roomName) {
            this.onAddRoom(this.roomName);
        }
    }
    onAddRoom(roomName) {
        this.roomName = null;
        this.roomChanged.emit(roomName);
    }
    onJoinRoom(roomName) {
        this.roomChanged.emit(roomName);
    }
    updateRooms() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.rooms = (yield this.videoChatService.getAllRooms());
        });
    }
}
RoomsComponent.ɵfac = function RoomsComponent_Factory(t) { return new (t || RoomsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_videochat_service__WEBPACK_IMPORTED_MODULE_3__["VideochatService"])); };
RoomsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RoomsComponent, selectors: [["app-rooms"]], inputs: { activeRoomName: "activeRoomName" }, outputs: { roomChanged: "roomChanged" }, decls: 14, vars: 4, consts: [[1, "jumbotron"], [1, "display-4"], [1, "fas", "fa-video"], [1, "list-group"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "input-group"], ["type", "text", "placeholder", "Room Name", "aria-label", "Room Name", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-lg", "btn-outline-secondary", "twitter-red", 3, "disabled", "click"], [1, "far", "fa-plus-square"], ["class", "list-group-item d-flex justify-content-between align-items-center", 4, "ngIf"], ["class", "list-group-item list-group-item-action d-flex justify-content-between align-items-center", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "lead"], [1, "list-group-item", "list-group-item-action", "d-flex", "justify-content-between", "align-items-center", 3, "ngClass", "click"], [1, "badge", "badge-primary", "badge-pill"]], template: function RoomsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Rooms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RoomsComponent_Template_input_ngModelChange_7_listener($event) { return ctx.roomName = $event; })("keydown.enter", function RoomsComponent_Template_input_keydown_enter_7_listener() { return ctx.onTryAddRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoomsComponent_Template_button_click_9_listener() { return ctx.onAddRoom(ctx.roomName); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RoomsComponent_div_12_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RoomsComponent_a_13_Template, 4, 6, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.roomName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.roomName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.rooms || !ctx.rooms.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.rooms);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb29tcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RoomsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-rooms',
                templateUrl: './rooms.component.html',
                styleUrls: ['./rooms.component.css']
            }]
    }], function () { return [{ type: _videochat_service__WEBPACK_IMPORTED_MODULE_3__["VideochatService"] }]; }, { roomChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], activeRoomName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "jkDv":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "5U7z");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-loading-bar/core */ "lPP5");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-loading-bar/router */ "F34d");
/* harmony import */ var _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-loading-bar/http-client */ "XJCJ");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logout/logout.component */ "+kne");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "9LZo");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notfound/notfound.component */ "rt+u");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./users/users.component */ "nRu7");















class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, providers: [], imports: [[
            // exported by some other module
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__["LoadingBarModule"],
            _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__["LoadingBarRouterModule"],
            _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_6__["LoadingBarHttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [// Components , directives and pipes that are part of current module.
        _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__["LogoutComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
        _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_12__["NotfoundComponent"],
        _users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"]], imports: [// List of modules so current module can use components that are already
        // exported by some other module
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__["LoadingBarModule"],
        _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__["LoadingBarRouterModule"],
        _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_6__["LoadingBarHttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]], exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__["LogoutComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
        _users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                    _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__["LogoutComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                    _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_12__["NotfoundComponent"],
                    _users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"]
                ],
                imports: [
                    // exported by some other module
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__["LoadingBarModule"],
                    _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_5__["LoadingBarRouterModule"],
                    _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_6__["LoadingBarHttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
                ],
                exports: [
                    _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                    _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__["LogoutComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                    _users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"]
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "kyOO":
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _admin_services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin/services/token.service */ "xsTi");






class LanguageService {
    constructor(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
    }
    getLanguages(page = 1, query = '') {
        let url = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}Language/GetLanguages?page=${page}&query=${query}`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retryWhen"])(notifier => notifier.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["scan"])((retryCount) => {
            if (retryCount >= 5) {
                throw notifier;
            }
            else {
                retryCount++;
                console.log(`Retrying Attempts: ${retryCount}`);
                return retryCount;
            }
        }, 0))));
    }
    createLanguage(language) {
        let url = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}Language/Create`;
        return this.http.post(url, language);
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_admin_services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"])); };
LanguageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _admin_services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "nJQ+":
/*!***********************************************************************!*\
  !*** ./src/app/components/zoompagination/zoompagination.component.ts ***!
  \***********************************************************************/
/*! exports provided: ZoompaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoompaginationComponent", function() { return ZoompaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ZoompaginationComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZoompaginationComponent_li_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.getByPager(ctx_r3.pager.currentPage - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ZoompaginationComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZoompaginationComponent_li_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const p_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.getByPager(p_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("page-item ", ctx_r1.pager.currentPage == p_r5 ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r5);
} }
function ZoompaginationComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZoompaginationComponent_li_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.getByPager(ctx_r8.pager.currentPage + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ZoompaginationComponent {
    constructor() {
        this.pagerNumber = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.myNumbers = [];
    }
    ngOnInit() {
        debugger;
        this.runIT();
    }
    runIT() {
        this.myNumbers = [];
        debugger;
        for (let page = this.pager.startPage; page <= this.pager.endPage; page++) {
            this.myNumbers.push(page);
        }
    }
    getByPager(pageNo) {
        this.pagerNumber.emit(pageNo);
    }
}
ZoompaginationComponent.ɵfac = function ZoompaginationComponent_Factory(t) { return new (t || ZoompaginationComponent)(); };
ZoompaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZoompaginationComponent, selectors: [["app-zoompagination"]], inputs: { pager: "pager" }, outputs: { pagerNumber: "pagerNumber" }, decls: 5, vars: 3, consts: [["aria-label", "Page navigation example"], [1, "pagination"], ["class", "page-item", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], [1, "page-item"], [1, "page-link", 3, "click"]], template: function ZoompaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ZoompaginationComponent_li_2_Template, 3, 0, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ZoompaginationComponent_li_3_Template, 3, 4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ZoompaginationComponent_li_4_Template, 3, 0, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pager.currentPage > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myNumbers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pager.currentPage < ctx.pager.totalPages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ6b29tcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZoompaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-zoompagination',
                templateUrl: './zoompagination.component.html',
                styleUrls: ['./zoompagination.component.css']
            }]
    }], function () { return []; }, { pager: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "nRu7":
/*!************************************************!*\
  !*** ./src/app/admin/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_base_view_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/base-view-model */ "gKIg");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user */ "TYVA");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/user.service */ "CHqn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/token.service */ "xsTi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function UsersComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your request has been cancelled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading . . .");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r5.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r5.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r5.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r5.userName);
} }
function UsersComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersComponent_div_15_div_1_Template, 11, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.items);
} }
function UsersComponent_nav_16_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_nav_16_li_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.getItems(ctx_r9.pager.currentPage - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersComponent_nav_16_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_nav_16_li_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const p_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.getItems(p_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r11 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("page-item ", ctx_r7.pager.currentPage == p_r11 ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r11);
} }
function UsersComponent_nav_16_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_nav_16_li_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.getItems(ctx_r14.pager.currentPage + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersComponent_nav_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UsersComponent_nav_16_li_2_Template, 3, 0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UsersComponent_nav_16_li_3_Template, 3, 4, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UsersComponent_nav_16_li_4_Template, 3, 0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.pager.currentPage > 1 && ctx_r3.pager.totalPages > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.myNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.pager.currentPage < ctx_r3.pager.totalPages);
} }
class UsersComponent extends _models_base_view_model__WEBPACK_IMPORTED_MODULE_1__["BaseCrudApi"] {
    constructor(userService, router, tokenService) {
        super();
        this.userService = userService;
        this.router = router;
        this.tokenService = tokenService;
        this.model = new _models_user__WEBPACK_IMPORTED_MODULE_2__["UserViewModel"]();
        this.allowedRoles = this.tokenService.getUserRoles();
    }
    ngOnInit() {
        console.log('Users components');
        this.getItems();
    }
    getItems(page = 1) {
        this.isLoading = true;
        this.add = this.userService.GetUsers(page, this.query)
            .subscribe(res => {
            if (res.isSuccess) {
                this.items = res.listModel,
                    this.pager = res.pager;
            }
            else {
                this.isError = true;
                this.errorMessage = res.message;
            }
        }, (error) => {
            console.error(JSON.stringify(error.error));
            this.isError = true;
            this.isLoading = false;
            this.errorMessage = error.message;
            if (error.status == 401) {
                this.router.navigateByUrl("/Login");
            }
        }, () => {
            this.isLoading = false;
        });
    }
    reset() {
        if (this.query !== '') {
            this.query = '';
            this.getItems();
        }
    }
    onPopup() {
        $("#modal_aside_left").modal('toggle');
        this.getItems();
    }
    hideModal() {
        $("#modal_aside_left").modal('hide');
    }
    ngOnDestroy() {
        this.dispose();
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 30, vars: 5, consts: [[1, "container"], [1, "row"], [1, "col-md-3"], [1, "col-md-6"], ["class", "shadow-sm alert alert-warning", "style", "border-left: 5px solid #efa31d;", 4, "ngIf"], [1, "input-group", "mb-3"], ["type", "text", "required", "", "placeholder", "Search here. . .", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-search"], [1, "fas", "fa-sync-alt"], [3, "ngIf"], ["class", "albums mb-3", 4, "ngIf"], ["aria-label", "Page navigation example", "style", "cursor: pointer;", 4, "ngIf"], ["id", "modal_aside_left", "tabindex", "-1", "role", "dialog", 1, "modal", "fixed-left", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-aside"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "id", "closemodal", 1, "btn", "btn-secondary", 3, "click"], [1, "shadow-sm", "alert", "alert-warning", 2, "border-left", "5px solid #efa31d"], [1, "fas", "fa-exclamation-circle", "mr-2"], [1, "albums", "mb-3"], ["class", "album", 4, "ngFor", "ngForOf"], [1, "album"], ["src", "/assets/user.png", 1, "album__artwork"], [1, "album__details"], [1, "album__artist"], [1, "album__desc"], ["aria-label", "Page navigation example", 2, "cursor", "pointer"], [1, "pagination"], ["class", "page-item", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], [1, "page-item"], [1, "page-link", 3, "click"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UsersComponent_div_4_Template, 4, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_7_listener($event) { return ctx.query = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_9_listener() { return ctx.getItems(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_12_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UsersComponent_ng_template_14_Template, 2, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UsersComponent_div_15_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UsersComponent_nav_16_Template, 5, 3, "nav", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_28_listener() { return ctx.hideModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pager.totalPages > 1 && !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".albums[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n    \r\n    \r\n    grid-gap: 20px;\r\n  }\r\n  .album[_ngcontent-%COMP%] {\r\n    background: rgba(109, 105, 105, 0.2);\r\n    box-shadow: 0 0 5px rgba(29, 22, 22, 0);\r\n    \r\n    display: grid;\r\n    grid-template-columns: 150px 1fr;\r\n    grid-gap: 10px;\r\n    align-items: center;\r\n    color: black;\r\n    font-weight: 100;\r\n  }\r\n  .album__artwork[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]{ \r\n    width: 350px; max-width:80%; height: 100%; margin:0;transform: translate(0); transition: transform .2s;\r\n  }\r\n  .modal[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{  height: inherit; border:0; border-radius: 0;}\r\n  .modal[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]{ overflow-y: auto }\r\n  .modal.fixed-left[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]{ margin-left:auto;  transform: translateX(100%); }\r\n  .modal.fixed-right[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]{ margin-right:auto; transform: translateX(-100%); }\r\n  .modal.show[_ngcontent-%COMP%]   .modal-dialog-aside[_ngcontent-%COMP%]{ transform: translateX(0);  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELGtEQUFrRDtJQUNsRCwwQ0FBMEM7SUFDMUMsY0FBYztFQUNoQjtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLHVDQUF1QztJQUN2QyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUVBO0lBQ0UsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLHVCQUF1QixFQUFFLHlCQUF5QjtFQUN4RztFQUNBLDRDQUE0QyxlQUFlLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDO0VBQ3hGLHVEQUF1RCxpQkFBaUI7RUFDeEUsdUNBQXVDLGdCQUFnQixHQUFHLDJCQUEyQixFQUFFO0VBQ3ZGLHdDQUF3QyxpQkFBaUIsRUFBRSw0QkFBNEIsRUFBRTtFQUN6RixpQ0FBaUMsd0JBQXdCLEdBQUciLCJmaWxlIjoidXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGJ1bXMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDFmcik7ICovXHJcbiAgICAvKiBncmlkOiBhdXRvLWZsb3cgMjVlbSAvIHJlcGVhdCgzLDFmcik7ICovXHJcbiAgICBncmlkLWdhcDogMjBweDtcclxuICB9XHJcbiAgLmFsYnVtIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTA5LCAxMDUsIDEwNSwgMC4yKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgyOSwgMjIsIDIyLCAwKTtcclxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNTBweCAxZnI7XHJcbiAgICBncmlkLWdhcDogMTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gIH1cclxuICAuYWxidW1fX2FydHdvcmsge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubW9kYWwgLm1vZGFsLWRpYWxvZy1hc2lkZXsgXHJcbiAgICB3aWR0aDogMzUwcHg7IG1heC13aWR0aDo4MCU7IGhlaWdodDogMTAwJTsgbWFyZ2luOjA7dHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7IHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7XHJcbiAgfVxyXG4gIC5tb2RhbCAubW9kYWwtZGlhbG9nLWFzaWRlIC5tb2RhbC1jb250ZW50eyAgaGVpZ2h0OiBpbmhlcml0OyBib3JkZXI6MDsgYm9yZGVyLXJhZGl1czogMDt9XHJcbiAgLm1vZGFsIC5tb2RhbC1kaWFsb2ctYXNpZGUgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHl7IG92ZXJmbG93LXk6IGF1dG8gfVxyXG4gIC5tb2RhbC5maXhlZC1sZWZ0IC5tb2RhbC1kaWFsb2ctYXNpZGV7IG1hcmdpbi1sZWZ0OmF1dG87ICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IH1cclxuICAubW9kYWwuZml4ZWQtcmlnaHQgLm1vZGFsLWRpYWxvZy1hc2lkZXsgbWFyZ2luLXJpZ2h0OmF1dG87IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IH1cclxuICAubW9kYWwuc2hvdyAubW9kYWwtZGlhbG9nLWFzaWRleyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7ICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "o7am":
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "position": a0 }; };
function LoaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0._isLoading ? "relative" : ""));
} }
class LoaderComponent {
    constructor() {
        this._isLoading = false;
    }
    set isLoading(isLoading) {
        this._isLoading = isLoading;
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], inputs: { isLoading: "isLoading" }, decls: 1, vars: 1, consts: [["style", "height: 70vh;", 3, "ngStyle", 4, "ngIf"], [2, "height", "70vh", 3, "ngStyle"], ["role", "status", 1, "spinner-border", "text-primary", 2, "position", "absolute", "top", "0", "bottom", "0", "left", "0", "right", "0", "margin", "auto"], [1, "sr-only"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 4, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".loader[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin: 0 auto;\r\n    width: 100px;\r\n}\r\n.loader[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    display: block;\r\n    padding-top: 100%;\r\n}\r\n.circular[_ngcontent-%COMP%] {\r\n    animation: rotate 2s linear infinite;\r\n    height: 100%;\r\n    transform-origin: center center;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n}\r\n.path[_ngcontent-%COMP%] {\r\n    stroke-dasharray: 1, 200;\r\n    stroke-dashoffset: 0;\r\n    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;\r\n    stroke-linecap: round;\r\n}\r\n@keyframes rotate {\r\n    100% {\r\n        transform: rotate(360deg);\r\n   }\r\n}\r\n@keyframes dash {\r\n    0% {\r\n        stroke-dasharray: 1, 200;\r\n        stroke-dashoffset: 0;\r\n   }\r\n    50% {\r\n        stroke-dasharray: 89, 200;\r\n        stroke-dashoffset: -35px;\r\n   }\r\n    100% {\r\n        stroke-dasharray: 89, 200;\r\n        stroke-dashoffset: -124px;\r\n   }\r\n}\r\n@keyframes color {\r\n    100%, 0% {\r\n        stroke: #d62d20;\r\n   }\r\n    40% {\r\n        stroke: #0057e7;\r\n   }\r\n    66% {\r\n        stroke: #008744;\r\n   }\r\n    80%, 90% {\r\n        stroke: #ffa700;\r\n   }\r\n}\r\n.showbox[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    padding: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQix3RUFBd0U7SUFDeEUscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSTtRQUNJLHlCQUF5QjtHQUM5QjtBQUNIO0FBQ0E7SUFDSTtRQUNJLHdCQUF3QjtRQUN4QixvQkFBb0I7R0FDekI7SUFDQztRQUNJLHlCQUF5QjtRQUN6Qix3QkFBd0I7R0FDN0I7SUFDQztRQUNJLHlCQUF5QjtRQUN6Qix5QkFBeUI7R0FDOUI7QUFDSDtBQUNBO0lBQ0k7UUFDSSxlQUFlO0dBQ3BCO0lBQ0M7UUFDSSxlQUFlO0dBQ3BCO0lBQ0M7UUFDSSxlQUFlO0dBQ3BCO0lBQ0M7UUFDSSxlQUFlO0dBQ3BCO0FBQ0g7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztBQUNmIiwiZmlsZSI6ImxvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG4ubG9hZGVyOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZy10b3A6IDEwMCU7XHJcbn1cclxuLmNpcmN1bGFyIHtcclxuICAgIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4ucGF0aCB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxLCAyMDA7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICAgIGFuaW1hdGlvbjogZGFzaCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlLCBjb2xvciA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcclxufVxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICB9XHJcbn1cclxuQGtleWZyYW1lcyBkYXNoIHtcclxuICAgIDAlIHtcclxuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxLCAyMDA7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcclxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1cHg7XHJcbiAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjRweDtcclxuICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgY29sb3Ige1xyXG4gICAgMTAwJSwgMCUge1xyXG4gICAgICAgIHN0cm9rZTogI2Q2MmQyMDtcclxuICAgfVxyXG4gICAgNDAlIHtcclxuICAgICAgICBzdHJva2U6ICMwMDU3ZTc7XHJcbiAgIH1cclxuICAgIDY2JSB7XHJcbiAgICAgICAgc3Ryb2tlOiAjMDA4NzQ0O1xyXG4gICB9XHJcbiAgICA4MCUsIDkwJSB7XHJcbiAgICAgICAgc3Ryb2tlOiAjZmZhNzAwO1xyXG4gICB9XHJcbn1cclxuLnNob3dib3gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogNSU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.css']
            }]
    }], function () { return []; }, { isLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "qFTZ":
/*!*******************************************!*\
  !*** ./src/app/services/notif.service.ts ***!
  \*******************************************/
/*! exports provided: NotifService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifService", function() { return NotifService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/signalr */ "6HpG");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");




class NotifService {
    constructor() {
        this.OfferReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.AnswerReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.IceCandidateReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.connectionEstablished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.connectionIsEstablished = false;
        this.startConnection = () => {
            this.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]()
                .withUrl(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "chart")
                .configureLogging(_microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information)
                .build();
            this.hubConnection.start()
                .then(() => console.log("Hub Connection started"))
                .catch(err => console.log('Error while starting connection: ' + err));
        };
    }
    SendOffer(Offer) {
        var _a;
        if (this.hubConnection.state == 'Connected') {
            (_a = this.hubConnection) === null || _a === void 0 ? void 0 : _a.invoke("SendOffer", Offer);
        }
        else {
            alert("Your connection state has been lost.");
        }
    }
    SendAnswer(Answer) {
        var _a;
        (_a = this.hubConnection) === null || _a === void 0 ? void 0 : _a.invoke("SendAnswer", Answer);
    }
    SendOnIceCandidate(IceCandidate) {
        var _a;
        (_a = this.hubConnection) === null || _a === void 0 ? void 0 : _a.invoke("SendOnIceCandidate", IceCandidate);
    }
    // Events registered on initializing
    registerOnServerEvents() {
        var _a, _b, _c, _d, _e;
        (_a = this.hubConnection) === null || _a === void 0 ? void 0 : _a.on("OfferReceived", (offer) => {
            this.OfferReceived.emit(offer);
        });
        (_b = this.hubConnection) === null || _b === void 0 ? void 0 : _b.on("AnswerReceived", (answer) => {
            this.AnswerReceived.emit(answer);
        });
        (_c = this.hubConnection) === null || _c === void 0 ? void 0 : _c.on("IceCandidateReceived", (IceCandidate) => {
            this.IceCandidateReceived.emit(IceCandidate);
        });
        (_d = this.hubConnection) === null || _d === void 0 ? void 0 : _d.on("disconnected", (messagefromserver) => {
            console.log(messagefromserver);
        });
        (_e = this.hubConnection) === null || _e === void 0 ? void 0 : _e.on("Connected", (messagefromserver) => {
            console.log(messagefromserver);
            this.connectionEstablished.emit(true);
        });
    }
    CloseConnection() {
        var _a;
        (_a = this.hubConnection) === null || _a === void 0 ? void 0 : _a.stop().then(() => console.log("Hub Connection Closed ")).catch(error => console.log("Error occurred: " + error));
    }
}
NotifService.ɵfac = function NotifService_Factory(t) { return new (t || NotifService)(); };
NotifService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotifService, factory: NotifService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qLOZ":
/*!*****************************************!*\
  !*** ./src/app/services/job.service.ts ***!
  \*****************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _admin_services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../admin/services/token.service */ "xsTi");






class JobService {
    constructor(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
    }
    getJobs(page = 1, query = '') {
        let url = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}Job/GetJobs?page=${page}&query=${query}`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(notifier => notifier.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((retryCount) => {
            if (retryCount >= 5) {
                throw notifier;
            }
            else {
                retryCount++;
                console.log(`Retrying Attempts: ${retryCount}`);
                return retryCount;
            }
        }, 0))));
    }
    getMyJobs(page = 1, query = '') {
        let url = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}Job/GetMyJobs?page=${page}&query=${query}`;
        return this.http.get(url);
    }
    createJob(job) {
        let url = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}Job/Create`;
        job.postedBy = this.tokenService.getUserName();
        job.createdAt = new Date();
        return this.http.post(url, job);
    }
    acceptJob(job) {
        let url = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}Job/AcceptJob`;
        job.acceptedAt = new Date();
        job.acceptedBy = this.tokenService.getUserName();
        return this.http.post(url, job);
    }
    assignJob(job) {
        let url = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}Job/AssignJob`;
        return this.http.post(url, job);
    }
    cancelJob(job) {
        let url = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}Job/CancelJob`;
        return this.http.post(url, job);
    }
    getIceServers() {
        let url = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}Notification/Get`;
        return this.http.get(url);
    }
}
JobService.ɵfac = function JobService_Factory(t) { return new (t || JobService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_admin_services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"])); };
JobService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JobService, factory: JobService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _admin_services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "rt+u":
/*!******************************************************!*\
  !*** ./src/app/admin/notfound/notfound.component.ts ***!
  \******************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) { return new (t || NotfoundComponent)(); };
NotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotfoundComponent, selectors: [["app-notfound"]], decls: 13, vars: 0, consts: [["id", "layoutError"], ["id", "layoutError_content"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-6"], [1, "text-center", "mt-4"], ["src", "/assets/error-404-monochrome.svg", 1, "mb-4", "img-error"], [1, "lead"], ["routerLink", "/Job"], [1, "fas", "fa-arrow-left", "mr-1"]], template: function NotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "This requested URL was not found on this server.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Return to Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3Rmb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotfoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notfound',
                templateUrl: './notfound.component.html',
                styleUrls: ['./notfound.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sLU9":
/*!***********************************************!*\
  !*** ./src/app/admin/services/jwt.service.ts ***!
  \***********************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "xsTi");




class JwtService {
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    intercept(req, next) {
        let isApiUrl = req.url.startsWith(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl);
        let Token = "Bearer ";
        if (this.tokenService.hasToken() && isApiUrl) {
            Token += this.tokenService.getUser().token;
        }
        req = req.clone({
            setHeaders: {
                Authorization: Token
            }
        });
        return next.handle(req);
    }
}
JwtService.ɵfac = function JwtService_Factory(t) { return new (t || JwtService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"])); };
JwtService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtService, factory: JwtService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "sjK5":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService, Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/signalr */ "6HpG");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");




class ChatService {
    constructor() {
        this.messageReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.connectionIDReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.datetimeReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.connectionEstablished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.connectionID = "";
        this.connectionIsEstablished = false;
    }
    createConnection(username) {
        this._hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]()
            .withUrl(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}MessageHub?username=${username}`)
            .withAutomaticReconnect([0, 5000, 10000, 15000, 20000, 30000])
            .configureLogging(_microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information)
            .build();
    }
    startConnection() {
        this._hubConnection
            .start()
            .then(() => {
            this.connectionIsEstablished = true;
            console.log(`Started service . . . ConnectionID: ${this._hubConnection.connectionId}`);
            this.connectionEstablished.emit(true);
        })
            .catch(err => {
            console.log('Error while establishing connection...');
        });
    }
    sendMessage(usernameTo, message) {
        this._hubConnection.invoke("SendMessage", usernameTo, message);
    }
    registerOnServerEvents() {
        this._hubConnection.on('MessageReceived', (data) => {
            this.messageReceived.emit(data);
        });
        this._hubConnection.on('onReceivedTime', (data) => {
            this.datetimeReceived.emit(data);
            console.log(JSON.stringify(data));
        });
        this._hubConnection.onreconnecting(() => {
            console.log("Please wait so we can establish the connection to the server . . .");
        });
        this._hubConnection.onreconnected(() => {
            console.log("Service has been start after recoonection. . . .");
        });
        this._hubConnection.onclose(() => {
            console.log("Service has been stopped. . . .");
        });
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
class Message {
    constructor() {
        this.MessageID = 0;
    }
}


/***/ }),

/***/ "tNdB":
/*!***************************************************************!*\
  !*** ./src/app/components/sitelayout/sitelayout.component.ts ***!
  \***************************************************************/
/*! exports provided: SitelayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitelayoutComponent", function() { return SitelayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_admin_services_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/admin/services/token.service */ "xsTi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class SitelayoutComponent {
    constructor(tokenService) {
        this.tokenService = tokenService;
        this.userName = "";
        this.isloggedin = false;
    }
    ngOnInit() {
        this.userName = this.tokenService.getUserName();
        this.isloggedin = this.tokenService.isAuthenticated();
    }
    ngAfterViewInit() {
        $(document).ready(function () {
            $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        });
    }
    onToggle() {
        $("#toggleme").toggleClass("sb-sidenav-toggled");
    }
}
SitelayoutComponent.ɵfac = function SitelayoutComponent_Factory(t) { return new (t || SitelayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_admin_services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"])); };
SitelayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SitelayoutComponent, selectors: [["app-sitelayout"]], decls: 81, vars: 1, consts: [[1, "sb-nav-fixed"], [1, "sb-topnav", "navbar", "navbar-expand", "navbar-light", "bg-light"], ["href", "", 1, "navbar-brand"], ["id", "sidebarToggle", "href", "#", 1, "btn", "btn-link", "btn-sm", "order-1", "order-lg-0"], [1, "fas", "fa-bars"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["id", "userDropdown", "href", "#", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fas", "fa-user", "fa-fw", "text-primary"], ["aria-labelledby", "userDropdown", 1, "dropdown-menu", "dropdown-menu-right"], ["href", "#", 1, "dropdown-item"], [1, "dropdown-divider"], ["routerLink", "/Logout", 1, "dropdown-item"], [1, "nav-link"], [2, "display", "inline-block", "height", "1.5rem", "letter-spacing", "1.5px", "border-right", "1px solid #593196"], ["href", "/Logout", 1, "nav-link", "text-primary", 2, "cursor", "pointer"], ["id", "layoutSidenav"], ["id", "layoutSidenav_nav"], ["id", "sidenavAccordion", 1, "sb-sidenav", "accordion", "sb-sidenav-light"], [1, "sb-sidenav-menu"], [1, "nav"], [1, "sb-sidenav-menu-heading"], ["routerLink", "/Dashboard", 1, "nav-link"], [1, "sb-nav-link-icon"], [1, "fas", "fa-tachometer-alt"], ["routerLink", "/Languages", 1, "nav-link"], [1, "fas", "fa-language"], ["routerLink", "/Sessions", 1, "nav-link"], [1, "fas", "fa-glasses"], ["href", "#", "data-toggle", "collapse", "data-target", "#collapseLayouts", "aria-expanded", "false", "aria-controls", "collapseLayouts", 1, "nav-link", "collapsed"], [1, "fas", "fa-columns"], [1, "sb-sidenav-collapse-arrow"], [1, "fas", "fa-angle-down"], ["id", "collapseLayouts", "aria-labelledby", "headingOne", "data-parent", "#sidenavAccordion", 1, "collapse"], [1, "sb-sidenav-menu-nested", "nav"], ["routerLink", "/Users", 1, "nav-link"], ["routerLink", "/Jobs", 1, "nav-link"], ["href", "charts.html", 1, "nav-link"], [1, "fas", "fa-chart-area"], [1, "sb-sidenav-footer"], [1, "small"], ["id", "layoutSidenav_content"], [1, "py-4", "bg-light", "mt-auto"], [1, "container-fluid"], [1, "d-flex", "align-items-center", "justify-content-between", "small"], [1, "text-muted"], ["href", "#"]], template: function SitelayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Beta 1.0.8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Activity Log");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nav", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Core");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Languages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " My sessions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Interface");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Layouts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "nav", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Addons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Charts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Logged in as:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "footer", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Copyright \u00A9 Your Website 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " \u00B7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userName, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaXRlbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SitelayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sitelayout',
                templateUrl: './sitelayout.component.html',
                styleUrls: ['./sitelayout.component.css']
            }]
    }], function () { return [{ type: src_app_admin_services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "tZre":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _admin_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin/services/token.service */ "xsTi");





class MessageService {
    constructor(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
    }
    getMessages(receiver = '') {
        let sender = this.tokenService.getUserName();
        let url = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}Messages/GetMessages?sender=${sender}&receiver=${receiver}`;
        return this.http.get(url);
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_admin_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"])); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _admin_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "v9mL":
/*!*********************************************************!*\
  !*** ./src/app/shared/paginaton/paginaton.component.ts ***!
  \*********************************************************/
/*! exports provided: PaginatonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatonComponent", function() { return PaginatonComponent; });
/* harmony import */ var _admin_models_base_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../admin/models/base-view-model */ "gKIg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function PaginatonComponent_nav_0_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginatonComponent_nav_0_li_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.getNextPage(ctx_r4._pager.currentPage - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PaginatonComponent_nav_0_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginatonComponent_nav_0_li_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const p_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.getNextPage(p_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("page-item ", ctx_r2._pager.currentPage == p_r6 ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r6);
} }
function PaginatonComponent_nav_0_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginatonComponent_nav_0_li_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.getNextPage(ctx_r9._pager.currentPage + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PaginatonComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PaginatonComponent_nav_0_li_2_Template, 3, 0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PaginatonComponent_nav_0_li_3_Template, 3, 4, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PaginatonComponent_nav_0_li_4_Template, 3, 0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0._pager.currentPage > 1 && ctx_r0._pager.totalPages > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.myNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0._pager.currentPage < ctx_r0._pager.totalPages);
} }
class PaginatonComponent {
    constructor() {
        this.myNumbers = [];
        this._pager = new _admin_models_base_view_model__WEBPACK_IMPORTED_MODULE_0__["Pager"]();
        this._isPaginationLoading = false;
        this.nextPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set isPaginationLoading(isPag) {
        this._isPaginationLoading = isPag;
    }
    set pager(pager) {
        this._pager = pager;
        this.runIT();
    }
    runIT() {
        this.myNumbers = [];
        if (this._pager != undefined && this._pager.currentPage > 0) {
            for (let page = this._pager.startPage; page <= this._pager.endPage; page++) {
                this.myNumbers.push(page);
            }
        }
    }
    getNextPage(page) {
        this.nextPage.emit(page);
    }
}
PaginatonComponent.ɵfac = function PaginatonComponent_Factory(t) { return new (t || PaginatonComponent)(); };
PaginatonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PaginatonComponent, selectors: [["app-paginaton"]], inputs: { isPaginationLoading: "isPaginationLoading", pager: "pager" }, outputs: { nextPage: "nextPage" }, decls: 1, vars: 1, consts: [["aria-label", "Page navigation example", "style", "cursor: pointer;", 4, "ngIf"], ["aria-label", "Page navigation example", 2, "cursor", "pointer"], [1, "pagination"], ["class", "page-item", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], [1, "page-item"], [1, "page-link", 3, "click"]], template: function PaginatonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PaginatonComponent_nav_0_Template, 5, 3, "nav", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._pager.totalPages > 1 && !ctx._isPaginationLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0b24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PaginatonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-paginaton',
                templateUrl: './paginaton.component.html',
                styleUrls: ['./paginaton.component.css']
            }]
    }], function () { return []; }, { isPaginationLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pager: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nextPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_languages_languages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/languages/languages.component */ "IhL1");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "Lquv");
/* harmony import */ var _components_sessions_sessions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sessions/sessions.component */ "bpZD");
/* harmony import */ var _admin_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/notfound/notfound.component */ "rt+u");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/chat/chat.component */ "3tD2");
/* harmony import */ var _admin_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/register/register.component */ "9LZo");
/* harmony import */ var _admin_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/logout/logout.component */ "+kne");
/* harmony import */ var _components_job_job_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/job/job.component */ "NaU/");
/* harmony import */ var _admin_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/login/login.component */ "5U7z");
/* harmony import */ var _components_answer_answer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/answer/answer.component */ "KFQC");
/* harmony import */ var _components_rtccon_rtccon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/rtccon/rtccon.component */ "I13E");
/* harmony import */ var _components_audio_audio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/audio/audio.component */ "z1zP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_about_AboutComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/about/AboutComponent */ "AgXD");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/contact/contact.component */ "G2Gn");
/* harmony import */ var _guards_videocandeactivate_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/videocandeactivate.service */ "w4Vo");
/* harmony import */ var _guards_canactiveguardservice_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guards/canactiveguardservice.service */ "Bxb2");
/* harmony import */ var _components_sitelayout_sitelayout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/sitelayout/sitelayout.component */ "tNdB");
/* harmony import */ var _test_video_video_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./test/video/video.component */ "wASb");
/* harmony import */ var _twilio_home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./twilio/home/home.component */ "R7NK");
/* harmony import */ var _admin_users_users_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/users/users.component */ "nRu7");
























const routes = [
    { path: '',
        component: _components_sitelayout_sitelayout_component__WEBPACK_IMPORTED_MODULE_18__["SitelayoutComponent"],
        children: [
            { path: 'Dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"] },
            { path: 'Languages', component: _components_languages_languages_component__WEBPACK_IMPORTED_MODULE_0__["LanguagesComponent"] },
            { path: 'Contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"] },
            { path: 'About', component: _components_about_AboutComponent__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"], canDeactivate: [_guards_videocandeactivate_service__WEBPACK_IMPORTED_MODULE_16__["VideocandeactivateService"]] },
            { path: 'Audio', component: _components_audio_audio_component__WEBPACK_IMPORTED_MODULE_11__["AudioComponent"] },
            { path: 'RTC', component: _components_rtccon_rtccon_component__WEBPACK_IMPORTED_MODULE_10__["RtcconComponent"] },
            { path: 'Answer', component: _components_answer_answer_component__WEBPACK_IMPORTED_MODULE_9__["AnswerComponent"] },
            { path: 'Chat', component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"] },
            { path: 'Users', component: _admin_users_users_component__WEBPACK_IMPORTED_MODULE_21__["UsersComponent"] },
            { path: 'Video', component: _test_video_video_component__WEBPACK_IMPORTED_MODULE_19__["VideoComponent"] },
            { path: 'TwilioHome', component: _twilio_home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"] },
            { path: 'Sessions', component: _components_sessions_sessions_component__WEBPACK_IMPORTED_MODULE_2__["SessionsComponent"] },
            { path: 'Jobs',
                component: _components_job_job_component__WEBPACK_IMPORTED_MODULE_7__["JobComponent"],
                canActivate: [_guards_canactiveguardservice_service__WEBPACK_IMPORTED_MODULE_17__["CanactiveguardserviceService"]],
                data: { allowedRoles: ['Admin', 'Visitor', 'Translator', 'Client'] } }
        ]
    },
    { path: 'Login', component: _admin_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'Logout', component: _admin_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"] },
    { path: 'Register', component: _admin_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: '**', component: _admin_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__["NotfoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(routes)],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "w4Vo":
/*!******************************************************!*\
  !*** ./src/app/guards/videocandeactivate.service.ts ***!
  \******************************************************/
/*! exports provided: VideocandeactivateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideocandeactivateService", function() { return VideocandeactivateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class VideocandeactivateService {
    constructor() { }
    canDeactivate(component, currentRoute, currentState, nextState) {
        return confirm("Are you sure you want to leave !");
    }
}
VideocandeactivateService.ɵfac = function VideocandeactivateService_Factory(t) { return new (t || VideocandeactivateService)(); };
VideocandeactivateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VideocandeactivateService, factory: VideocandeactivateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideocandeactivateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "wASb":
/*!***********************************************!*\
  !*** ./src/app/test/video/video.component.ts ***!
  \***********************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../video.service */ "4IWZ");
/* harmony import */ var _admin_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../admin/services/token.service */ "xsTi");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/job.service */ "qLOZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["localVideo"];
const _c1 = ["remoteVideo"];
const mediaConstraints = {
    audio: true,
    video: { width: 320, height: 320 }
};
const offerOptions = {
    offerToReceiveAudio: true,
    offerToReceiveVideo: true
};
const PEER_CONNECTION_CONFIG = {
    iceServers: [
        { urls: "stun:stun.services.mozilla.com" },
        { urls: "stun:stun.l.google.com:19302" },
        {
            username: "0kYXFmQL9xojOrUy4VFemlTnNPVFZpp7jfPjpB3AjxahuRe4QWrCs6Ll1vDc7TTjAAAAAGAG2whXZWJUdXRzUGx1cw==",
            credential: "285ff060-5a58-11eb-b269-0242ac140004",
            urls: [
                "turn:bn-turn1.xirsys.com:80?transport=udp",
                "turn:bn-turn1.xirsys.com:3478?transport=udp",
                "turn:bn-turn1.xirsys.com:80?transport=tcp",
                "turn:bn-turn1.xirsys.com:3478?transport=tcp",
                "turns:bn-turn1.xirsys.com:443?transport=tcp",
                "turns:bn-turn1.xirsys.com:5349?transport=tcp"
            ]
        }
    ]
};
class VideoComponent {
    constructor(videoService, ngZone, tokenService, jobService) {
        var _a, _b;
        this.videoService = videoService;
        this.ngZone = ngZone;
        this.tokenService = tokenService;
        this.jobService = jobService;
        this.isHubConnected = false;
        this.config = { iceServers: [] };
        this.iceCandidateArray = [];
        this.handleIceCandidateEvent = (event) => {
            console.log(`Local: handleIceCandidateEvent: ${JSON.stringify(event)}`);
            if (event.candidate) {
                this.videoService.sendMessage("aftab@gmail.com", {
                    type: 'ice-candidate',
                    data: event.candidate
                });
            }
        };
        this.handleIceConnectionStateChangeEvent = (event) => {
            console.log(`Local: handleIceConnectionStateChangeEvent: ${JSON.stringify(event)}`);
            switch (this.peerConnection.iceConnectionState) {
                case 'closed':
                case 'disconnected':
                case 'failed':
                    this.closeVideoCall();
                    break;
            }
        };
        this.handleSignalingStateEvent = (event) => {
            console.log(`Local: handleSignalingStateEvent: ${JSON.stringify(event)}`);
            switch (this.peerConnection.signalingState) {
                case 'closed':
                    this.closeVideoCall();
                    break;
                case 'stable':
                    break;
                //  this.videoService.sendMessage("aftab@gmail.com",
                //  {
                //    type: 'ice-candidate',
                //    data: this.iceCandidateArray
                //  });
            }
        };
        this.handleTrackEvent = (event) => {
            console.log("Local: handleTrackEvent " + " - " + JSON.stringify(event.streams[0].id) + " - " + JSON.stringify(event));
            this.remoteVideo.nativeElement.srcObject = new MediaStream([event.track]); //event.streams[0];
        };
        (_a = this.config.iceServers) === null || _a === void 0 ? void 0 : _a.push({ urls: 'stun:stun.services.mozilla.com' });
        (_b = this.config.iceServers) === null || _b === void 0 ? void 0 : _b.push({ urls: 'stun:stun.l.google.com:19302' });
        // this.jobService.getIceServers().subscribe(data => {
        //   console.log(JSON.stringify(data));
        //   data?.forEach(server => {
        //     this.config.iceServers?.push(server);
        //   });
        // });
    }
    ngOnInit() {
        this.videoService.createConnection(this.tokenService.getUserName());
        this.videoService.startConnection();
        this.videoService.registerOnServerEvents();
        this.subscribeToevent();
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.requestMediaDevices();
        });
    }
    requestMediaDevices() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.localStream = yield navigator.mediaDevices.getUserMedia(mediaConstraints);
            this.localVideo.nativeElement.srcObject = this.localStream;
        });
    }
    pauseLocalVideo() {
        var _a;
        (_a = this.localStream) === null || _a === void 0 ? void 0 : _a.getTracks().forEach(track => {
            track.enabled = false;
        });
    }
    startLocalVideo() {
        var _a;
        (_a = this.localStream) === null || _a === void 0 ? void 0 : _a.getTracks().forEach(track => {
            track.enabled = true;
        });
    }
    call() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.createPeerConnection();
            (_a = this.localStream) === null || _a === void 0 ? void 0 : _a.getTracks().forEach(track => {
                var _a;
                (_a = this.peerConnection) === null || _a === void 0 ? void 0 : _a.addTrack(track, this.localStream);
            });
        });
    }
    createPeerConnection() {
        this.peerConnection = new RTCPeerConnection(this.config);
        this.peerConnection.onnegotiationneeded = (e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(`onnegotiationneeded: ${JSON.stringify(e)}`);
            // send the offer to the other peer
            try {
                const offer = yield this.peerConnection.createOffer(offerOptions);
                console.log(`Created offer successfully.`);
                yield this.peerConnection.setLocalDescription(offer);
                console.log(`Offer setLocalDescription successfully.`);
                //Send data to signaling server
                this.videoService.sendMessage("aftab@gmail.com", {
                    type: 'offer',
                    data: this.peerConnection.localDescription
                });
                console.log(`Send offer successfully.`);
            }
            catch (error) {
                this.handleGetUserMediaError(error);
            }
        });
        this.peerConnection.onicecandidate = this.handleIceCandidateEvent;
        this.peerConnection.onicegatheringstatechange = this.handleIceConnectionStateChangeEvent;
        this.peerConnection.onsignalingstatechange = this.handleSignalingStateEvent;
        this.peerConnection.ontrack = this.handleTrackEvent;
    }
    closeVideoCall() {
        if (this.peerConnection) {
            this.peerConnection.onicecandidate = null;
            this.peerConnection.onicegatheringstatechange = null;
            this.peerConnection.onsignalingstatechange = null;
            this.peerConnection.ontrack = null;
        }
        this.peerConnection.getTransceivers().forEach(tra => {
            tra.stop();
        });
        this.peerConnection.close();
    }
    handleGetUserMediaError(e) {
        switch (e.name) {
            case 'NotFoundError':
                alert('No camera and/or microphone found');
                break;
            case 'SecurityError':
            case 'PermissionDeniedError':
                // Do nothing
                break;
            default:
                console.error(e);
                alert(`Error:  ${JSON.stringify(e.message)}`);
                break;
        }
        this.closeVideoCall();
    }
    subscribeToevent() {
        this.videoService.messageReceived.subscribe((msg) => {
            this.ngZone.run(() => {
                switch (msg.type) {
                    case 'offer':
                        this.handleOfferMessage(msg.data);
                        break;
                    case 'answer':
                        this.handleAnswerMessage(msg.data);
                        break;
                    case 'hangup':
                        this.handleHangupMessage(msg);
                        break;
                    case 'ice-candidate':
                        this.handleIceCandidateMessage(msg.data);
                        break;
                    default:
                        console.log("Unknown message of type " + msg.type);
                }
            });
        });
        this.videoService.isConnected.subscribe((isconnected) => {
            this.ngZone.run(() => {
                this.isHubConnected = isconnected;
            });
        });
    }
    handleOfferMessage(msg) {
        console.log(`Remote: Received Offer: ${JSON.stringify(msg)}`);
        if (!this.peerConnection) {
            this.createPeerConnection();
        }
        if (this.localStream) {
            this.startLocalVideo();
        }
        this.peerConnection.setRemoteDescription(new RTCSessionDescription(msg))
            .then(() => {
            console.log(`Remote: offer set as setRemoteDescription successfully`);
            this.localVideo.nativeElement.srcObject = this.localStream;
            this.localStream.getTracks().forEach(track => {
                this.peerConnection.addTrack(track, this.localStream);
            });
        })
            .then(() => {
            console.log(`Remote: created answer successfully`);
            return this.peerConnection.createAnswer();
        })
            .then((answer) => {
            console.log(`Remote: answer setLocalDescription successfully`);
            return this.peerConnection.setLocalDescription(answer);
        })
            .then(() => {
            this.videoService.sendMessage("srk@gmail.com", { type: 'answer', data: this.peerConnection.localDescription });
            console.log(`Remote: Answer send successfully`);
            // Send To server { type: 'answer' , data:  this.peerConnection.localDescription }
        })
            .catch(this.handleGetUserMediaError);
    }
    handleAnswerMessage(data) {
        console.log(`handleAnswerMessage: ${JSON.stringify(data)}`);
        console.log(`Answer Received successfully.`);
        this.peerConnection.setRemoteDescription(new RTCSessionDescription(data));
        console.log(`Answer setRemoteDescription successfully.`);
    }
    handleHangupMessage(msg) {
        this.closeVideoCall();
    }
    handleIceCandidateMessage(data) {
        if (data.candidate) {
            this.peerConnection.addIceCandidate(data)
                .then(() => console.log("addIceCandidate success"))
                .catch(err => console.log(`Adding Ice Candidate Error: ${err.name}`));
        }
    }
    hangup() {
        // Send Signaling Server hangup web socket call
        this.closeVideoCall();
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_admin_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"])); };
VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["app-video"]], viewQuery: function VideoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.localVideo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.remoteVideo = _t.first);
    } }, decls: 18, vars: 4, consts: [[1, "container"], [1, "row"], [1, "col-md-6"], [3, "autoplay", "muted"], ["localVideo", ""], [3, "autoplay"], ["remoteVideo", ""], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", 3, "ngClass", "click"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "video", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "video", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoComponent_Template_button_click_9_listener() { return ctx.startLocalVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoComponent_Template_button_click_12_listener() { return ctx.pauseLocalVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Pause");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoComponent_Template_button_click_14_listener() { return ctx.call(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Call");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoComponent_Template_button_click_16_listener() { return ctx.hangup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Pause");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoplay", true)("muted", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoplay", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.isHubConnected == true ? "btn-success" : "btn-danger");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlby5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-video',
                templateUrl: './video.component.html',
                styleUrls: ['./video.component.css']
            }]
    }], function () { return [{ type: _video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _admin_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }, { type: _services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"] }]; }, { localVideo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['localVideo']
        }], remoteVideo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['remoteVideo']
        }] }); })();


/***/ }),

/***/ "xsTi":
/*!*************************************************!*\
  !*** ./src/app/admin/services/token.service.ts ***!
  \*************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");



class TokenService {
    constructor(jwthelperservice) {
        this.jwthelperservice = jwthelperservice;
    }
    setUser(userDTO) {
        localStorage.setItem("user", JSON.stringify(userDTO));
        localStorage.setItem("access_token", userDTO.token);
    }
    getUser() {
        this.userDTO = JSON.parse(localStorage.getItem('user') || '{}');
        return this.userDTO;
    }
    hasToken() {
        let token = this.getUser().token;
        if (typeof token != undefined && token && token.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    removeUser() {
        localStorage.removeItem('user');
        localStorage.removeItem('access_token');
    }
    isAuthenticated() {
        let token = localStorage.getItem("access_token");
        if (this.jwthelperservice.isTokenExpired(token)) {
            return false; // Token is not valid
        }
        else {
            return true; // Token is valid
        }
    }
    getUserName() {
        return `${this.getUser().username}`;
    }
    isAuthorized(allowedRoles) {
        // check if the list of allowed roles is empty, if empty, authorize the user to access the page
        if (allowedRoles == null || allowedRoles.length === 0) {
            return true;
        }
        // get token from local storage or state management
        let token = localStorage.getItem('access_token');
        // decode token to read the payload details
        const decodeToken = this.jwthelperservice.decodeToken(token);
        // check if it was decoded successfully, if not the token is not valid, deny access
        if (!decodeToken) {
            console.log('Invalid token');
            return false;
        }
        // check if the user roles is in the list of allowed roles, return true if allowed and false if not allowed
        return allowedRoles.includes(decodeToken['role']);
    }
    getUserRoles() {
        // get token from local storage or state management
        let token = localStorage.getItem('access_token');
        // decode token to read the payload details
        if (!token) {
            return [];
        }
        const decodeToken = this.jwthelperservice.decodeToken(token);
        if (!decodeToken) {
            return [];
        }
        let array = [];
        let item = decodeToken['role'];
        if (Array.isArray(item)) {
            item.forEach(e => {
                array.push(e);
            });
        }
        else {
            array.push(item);
        }
        return array;
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"])); };
TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"] }]; }, null); })();


/***/ }),

/***/ "yMH2":
/*!*********************************************!*\
  !*** ./src/app/twilio/videochat.service.ts ***!
  \*********************************************/
/*! exports provided: VideochatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideochatService", function() { return VideochatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var twilio_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! twilio-video */ "3h4Y");
/* harmony import */ var twilio_video__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(twilio_video__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class VideochatService {
    constructor(http) {
        this.http = http;
        this.roomBroadcast = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"]();
        this.$roomsUpdated = this.roomBroadcast.asObservable();
    }
    getAuthToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const auth = yield this.http
                .get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}Video/GetToken`)
                .toPromise();
            return auth.token;
        });
    }
    getAllRooms() {
        return this.http
            .get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}Video/GetRooms`)
            .toPromise();
    }
    joinOrCreateRoom(name, tracks) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let room;
            try {
                const token = yield this.getAuthToken();
                room =
                    yield Object(twilio_video__WEBPACK_IMPORTED_MODULE_1__["connect"])(token, {
                        name,
                        tracks,
                        dominantSpeaker: true
                    });
            }
            catch (error) {
                console.error(`Unable to connect to Room: ${error.message}`);
            }
            finally {
                if (room) {
                    this.roomBroadcast.next(true);
                }
            }
            return room;
        });
    }
    nudge() {
        this.roomBroadcast.next(true);
    }
}
VideochatService.ɵfac = function VideochatService_Factory(t) { return new (t || VideochatService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
VideochatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: VideochatService, factory: VideochatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](VideochatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "z1zP":
/*!*****************************************************!*\
  !*** ./src/app/components/audio/audio.component.ts ***!
  \*****************************************************/
/*! exports provided: AudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioComponent", function() { return AudioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["audioCtr"];
const _c1 = ["ankorTag"];
function AudioComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AudioComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.StartRecording(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AudioComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AudioComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.StopRecording(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AudioComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AudioComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.PauseRecording(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AudioComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AudioComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.ResumeRecording(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AudioComponent {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this._recordedChunks = [];
        this.btnMuteUnmute = 'fas fa-microphone-slash';
        this.isAudioMute = true;
        this.isRecording = false;
        this.isResume = true;
    }
    ngAfterViewInit() {
        this.startWithAudio();
        // this.audioCtr.nativeElement.onplay(e =>{
        //   console.log(e);
        // });
    }
    StartRecording() {
        this.isRecording = true;
        if (this._myMediaStream == undefined) {
            return;
        }
        this.setupMediaRecorder(this._myMediaStream);
        this._mediaRecorder.start(1000);
    }
    ResumeRecording() {
        debugger;
        if (this._mediaRecorder.state == "inactive") {
            this._mediaRecorder.start();
            return;
        }
        this.isResume = true;
        this._mediaRecorder.resume();
    }
    PauseRecording() {
        debugger;
        if (this._mediaRecorder.state == "inactive") {
            return;
        }
        this.isResume = false;
        this._mediaRecorder.pause();
    }
    StopRecording() {
        this.isRecording = false;
        debugger;
        this._mediaRecorder.stop();
    }
    MuteUnmute() {
        debugger;
        if (!this._audioTrack)
            return;
        if (this._audioTrack.enabled == false) {
            this.btnMuteUnmute = "fas fa-microphone-slash";
            this._audioTrack.enabled = true;
            this.isAudioMute = true;
        }
        else {
            this.btnMuteUnmute = "fas fa-microphone";
            this._audioTrack.enabled = false;
            this.isAudioMute = false;
        }
        console.log(this._audioTrack);
    }
    startWithAudio() {
        navigator.mediaDevices.getUserMedia({ video: false, audio: true })
            .then((stream) => {
            this._myMediaStream = stream;
            debugger;
            this._audioTrack = stream.getAudioTracks()[0];
            this._audioTrack.onmute = (e) => {
                console.log("Muting Audio Track");
            };
            this._audioTrack.onunmute = (e) => {
                this.ngZone.run(() => {
                    console.log("Unmuting Audio Track");
                });
            };
            this.audioCtr.nativeElement.srcObject = stream;
            this.setupMediaRecorder(stream);
        })
            .catch(error => {
            alert(error);
        });
    }
    setupMediaRecorder(stream) {
        debugger;
        //var recordedChunks = [];
        this._mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
        this._mediaRecorder.ondataavailable = (e) => {
            console.log(e.data.size);
            if (e.data.size > 0)
                this._recordedChunks.push(e.data);
        };
        this._mediaRecorder.onstop = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            debugger;
            var blob = new Blob(this._recordedChunks, { type: 'video/webm' });
            let url = window.URL.createObjectURL(blob);
            this.ankorTag.nativeElement.href = url;
            this.ankorTag.nativeElement.target = '_blank';
            this.ankorTag.nativeElement.download = 'test.weba';
            this.ankorTag.nativeElement.click();
        });
        this._mediaRecorder.onstart = () => {
            console.log("On start");
        };
        this._mediaRecorder.onpause = () => {
            console.log("On pause");
        };
        this._mediaRecorder.onresume = () => {
            console.log("On resume");
        };
    }
}
AudioComponent.ɵfac = function AudioComponent_Factory(t) { return new (t || AudioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
AudioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AudioComponent, selectors: [["app-audio"]], viewQuery: function AudioComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.audioCtr = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ankorTag = _t.first);
    } }, decls: 15, vars: 6, consts: [[1, "container"], [1, "row", "mt-5"], [1, "col-md-4"], ["autoplay", "", "muted", "", "controls", ""], ["audioCtr", ""], [1, "col-md-6"], ["ankorTag", ""], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], [1, "btn", 3, "ngClass", "click"], [3, "ngClass"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], ["class", "btn btn-secondary", 3, "click", 4, "ngIf"], [1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-play"], [1, "btn", "btn-danger", 3, "click"], [1, "fas", "fa-stop"], [1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-pause"]], template: function AudioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "audio", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "a", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AudioComponent_Template_button_click_9_listener() { return ctx.MuteUnmute(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AudioComponent_button_11_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AudioComponent_button_12_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AudioComponent_button_13_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AudioComponent_button_14_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.isAudioMute === !true ? "btn-primary" : "btn-danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.btnMuteUnmute);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isRecording);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isRecording);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isResume && ctx.isRecording);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isResume && ctx.isRecording);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".btn[_ngcontent-%COMP%]:active, .btn[_ngcontent-%COMP%]:focus, .btn.active[_ngcontent-%COMP%] {\r\n  background-image: none;\r\n  outline: 0;\r\n  box-shadow: none;\r\n   outline: none !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLHNCQUFzQjtFQUN0QixVQUFVO0VBRUYsZ0JBQWdCO0dBQ3ZCLHdCQUF3QjtBQUMzQiIsImZpbGUiOiJhdWRpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bjphY3RpdmUsXHJcbi5idG46Zm9jdXMsXHJcbi5idG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AudioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-audio',
                templateUrl: './audio.component.html',
                styleUrls: ['./audio.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, { audioCtr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['audioCtr']
        }], ankorTag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['ankorTag']
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map