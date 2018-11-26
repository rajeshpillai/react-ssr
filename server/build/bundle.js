/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Task = function (_React$Component) {
    _inherits(Task, _React$Component);

    function Task() {
        _classCallCheck(this, Task);

        return _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).apply(this, arguments));
    }

    _createClass(Task, [{
        key: "render",
        value: function render() {
            var currentTask = this.props.data ? this.props.data : {};
            return _react2.default.createElement(
                "div",
                { className: "current-task" },
                _react2.default.createElement(
                    "h3",
                    null,
                    currentTask.title
                ),
                _react2.default.createElement(
                    "span",
                    null,
                    currentTask.done
                )
            );
        }
    }]);

    return Task;
}(_react2.default.Component);

;
exports.default = Task;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var tasks = [{
    "id": 1,
    "title": "Task 1",
    "done": false,
    "edit": false,
    "rating": 5
}, {
    "id": 2,
    "title": "Task 2",
    "done": true,
    "edit": false,
    "rating": 0
}, {
    "id": 3,
    "title": "Task 3",
    "done": false,
    "edit": false,
    "rating": 2
}];

exports.default = tasks;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _render = __webpack_require__(5);

var _render2 = _interopRequireDefault(_render);

var _home = __webpack_require__(7);

var _home2 = _interopRequireDefault(_home);

var _task = __webpack_require__(1);

var _task2 = _interopRequireDefault(_task);

var _tasks = __webpack_require__(2);

var _tasks2 = _interopRequireDefault(_tasks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); // ROOT file of server

app.use(_express2.default.static('public'));

// Make our db accessible everywhere
app.use(function (req, res, next) {
    req.db = _tasks2.default;
    next();
});

app.get('/', function (req, res) {
    res.send((0, _render2.default)(_home2.default, { taskDB: _tasks2.default }));
});

app.get('/todos/:id', function (req, res) {
    var task = _tasks2.default.find(function (t) {
        return t.id == req.params.id;
    });
    console.log(task);
    res.send((0, _render2.default)(_home2.default, { currentTask: task }));
});

app.listen(3000, function () {
    console.log('Listening on port 3000....');
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Comp) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var content = (0, _server.renderToString)(_react2.default.createElement(Comp, props));
    return '\n        <html>\n        <head></head>\n        <body>\n            <div id="root">' + content + '</div>           \n            <script>\n            // WARNING: See the following for security issues around embedding JSON in HTML:\n            // http://redux.js.org/recipes/ServerRendering.html#security-considerations\n            window.__PRELOADED_STATE__ = ' + JSON.stringify(props).replace(/</g, '\\u003c') + '\n            </script>\n            <script src="/bundle.js"></script>\n        </body>\n        </html>\n     ';
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _task = __webpack_require__(1);

var _task2 = _interopRequireDefault(_task);

var _tasks = __webpack_require__(2);

var _tasks2 = _interopRequireDefault(_tasks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        console.log("home props", props);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.addTodo = _this.addTodo.bind(_this);
        _this.state = {
            newTask: "",
            tasks: _tasks2.default, // todo: read this from props
            currentTask: props.currentTask
        };
        return _this;
    }

    _createClass(Home, [{
        key: 'addTodo',
        value: function addTodo() {
            var newTask = {
                userId: 1, // hardcoded user
                id: +new Date(), // assign unique id, numeric date (quick fix)
                title: this.state.newTask, // grab newtodo from state
                completed: false
            };

            var tasks = [newTask].concat(_toConsumableArray(this.state.tasks));
            _tasks2.default.push(newTask);

            this.setState({
                tasks: tasks
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState({
                newTask: e.target.value
            });
        }
    }, {
        key: 'showTodo',
        value: function showTodo(e, todoId) {
            e.preventDefault();
            var todo = this.state.tasks.find(function (t) {
                return t.id === todoId;
            });
            //alert(JSON.stringify(todo));
            this.setState({
                currentTask: todo
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            console.log("state: ", this.state.tasks);
            var currentTask = this.state.currentTask;
            var taskListUI = this.state.tasks.map(function (task) {
                return _react2.default.createElement(
                    'li',
                    { key: task.id },
                    _react2.default.createElement(
                        'a',
                        { onClick: function onClick(e) {
                                return _this2.showTodo(e, task.id);
                            },
                            href: '/todos/' + task.id },
                        task.title
                    ),
                    _react2.default.createElement(
                        'a',
                        { title: 'open in new window',
                            href: '/todos/' + task.id,
                            target: '_blank' },
                        '\u2B1C'
                    )
                );
            });
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h2',
                    null,
                    'Task Application'
                ),
                _react2.default.createElement('input', { onChange: this.handleChange,
                    className: 'todo-input', type: 'text',
                    placeholder: 'what do you want to do today?',
                    value: this.state.newTask }),
                _react2.default.createElement(
                    'button',
                    { onClick: this.addTodo },
                    'new todo'
                ),
                taskListUI,
                currentTask && _react2.default.createElement(_task2.default, { data: currentTask })
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

;
exports.default = Home;

/***/ })
/******/ ]);