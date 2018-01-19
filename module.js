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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _module = __webpack_require__(4);

var root = function (root) {
	if ((typeof root === 'undefined' ? 'undefined' : _typeof(root)) === 'object' && (root.self === root || root.global === global) && root) {
		return root;
	}
}(self || global || {});

var $ = function ($) {
	if (typeof $ === 'function') {
		return $;
	} else {
		throw 'You must import jQuery';
	}
}(root.jQuery);

$.fn[_module.ModuleName] = function () {
	var module = void 0;
	var args = Array.prototype.slice.call(arguments, 0);
	var method = args[0];
	var options = args.slice(1).length <= 0 ? undefined : args.slice(1, args.length);;
	var isReturnMethod = this.length === 1 && typeof method === 'string' && _module.ModuleReturns.indexOf(method) !== -1;
	var methodRunner = function methodRunner(method, options, uesReturn) {
		var $this = $(this);
		var module = $this.data(_module.ModuleName);
		if (!!module) {
			if (typeof method == 'string' && !uesReturn) {
				module[method].apply(module, options);
			} else if (typeof method == 'string' && !!uesReturn) {
				return module[method].apply(module, options);
			} else {
				throw 'unsupported options!';
			}
		} else {
			throw 'You must run first this plugin!';
		}
	};
	if (isReturnMethod) {
		return methodRunner.call(this, method, options, isReturnMethod);
	} else {
		return this.each(function () {
			var $this = $(this);
			var module = $this.data(_module.ModuleName);
			var opts = null;
			if (!!module) {
				methodRunner.call(this, method, options);
			} else {
				opts = $.extend(true, {}, _module.ModuleDefaults, (typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' && method, (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' && options);
				module = new _module.Module(this, opts);
				$this.data(_module.ModuleName, module);
				module.init();
			}
		});
	}
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModuleName = 'carousel';
var ModuleDefaults = {
    pageSize: 6,
    data: ['./imgs/img11.jpg', 'http://fakeimg.pl/350x300/?text=2', './imgs/img3.jpg', './imgs/img12.jpg', './imgs/img4.jpg', 'http://fakeimg.pl/350x300/?text=6', './imgs/img5.jpg', 'http://fakeimg.pl/400x300/?text=8', './imgs/img6.jpg', './imgs/img7.jpg', 'http://fakeimg.pl/350x350/?text=11', './imgs/img8.jpg', './imgs/img9.jpg', './imgs/img10.jpg', 'http://fakeimg.pl/350x300/?text=15']
};
var ModuleReturns = ['output', 'methods'];

var Module = function () {
    function Module(ele, options) {
        _classCallCheck(this, Module);

        this.ele = ele;
        this.$ele = $(ele);
        this.option = options;
        this.$Html = $('<img class="mainPic" src="http://fakeimg.pl/600x400/?text=Hello" alt="">' + '<div class="up" src="http://fakeimg.pl/350x200/?text=Hello" alt="">' + '<a class="up-left" style="text-decoration:none;"><</a>' + '<div class="upcontent"></div>' + '<a class="up-right" style="text-decoration:none;">></a>' + '</div>' + '<div class="img-down">' + '<div class="img-down_left">※客房以實際入住房型為主,圖片僅提供參考</div>' + '<div class="img-down_right">查看大圖<img src="./imgs/zoomIn.png" alt=""></div>' + '</div>');
        this.$Html2 = $('<div class="carousel_down">' + '<a class="down-left"> < </a>' + '<ul class="smallPic_ul">' + '</ul>' + '<a class="down-right"> > </a>' + '</div>');
    }

    _createClass(Module, [{
        key: 'init',
        value: function init() {
            var dataLength = this.option.data.length; //所有圖片的張數
            var smallPicSrc = this.option.data; //option抓到的圖片
            this.creatHtml();
            this.creatSmallPic();
            this.selectSmall();
            this.linkBigPic();
            this.onClickNext();
            this.onClickPrev();
            this.smallArrow();
            this.getSelectPic();
            this.onClickBigImg();
            return this;
        }
    }, {
        key: 'onClickBigImg',
        value: function onClickBigImg() {
            var onClickBigImgCallBack = this.option.onClickBigImg;
            $(".img-down_right").click(function ($bigimgBtn) {
                onClickBigImgCallBack($bigimgBtn);
            });
            return this;
        }
    }, {
        key: 'creatHtml',
        value: function creatHtml() {
            this.$ele.append(this.$Html);
            $('.col-lg-12').append(this.$Html2);
            return this;
        }
    }, {
        key: 'linkBigPic',
        value: function linkBigPic() {
            var selected = $(".smallPic").hasClass("select");
            if (selected === true) {
                var smallPicSrc = $('.select').attr("src");
                $(".mainPic").attr("src", smallPicSrc);
            }
            return this;
        }
    }, {
        key: 'creatSmallPic',
        value: function creatSmallPic() {
            if (0 < this.option.pageSize && this.option.pageSize <= 6) {
                for (var i = 0; i < this.option.pageSize; i++) {
                    var smallPic = '<li><img class="' + i + 'small smallPic" src="' + this.option.data[i] + '"></li>';
                    $('.smallPic_ul').append(smallPic);
                    $('.smallPic').attr(this.option.data[i]);
                    if (i % this.option.pageSize === 0) {
                        $('.smallPic').addClass("select");
                    }
                    // console.log(this.option.data[i]);//這樣可以抓出data圖片的路徑
                } //根據pageSize抓出小圖個數
            } else {
                alert('請將pageSize設定於1到6之間');
            }
            $('.smallPic:first').addClass('first'); //在每列第一張圖片加上'first'的class
            $('.smallPic:last').addClass('last'); //在每列最後一張圖片加上'Last'的class     
            return this;
        }
    }, {
        key: 'getSelectPic',
        value: function getSelectPic() {
            var smallPicId = $('.select').attr("class");
            var smallPicIdNum = parseInt($('.select').attr("class"));
            return this;
        }
    }, {
        key: 'selectSmall',
        value: function selectSmall() {
            $(".smallPic").on("click", function () {
                var smallPicSrc = this.src; //這裡的this指向觸發click事件的物件
                $(".smallPic").removeClass("select");
                $(this).addClass("select");
                $(".mainPic").attr("src", smallPicSrc);
            });
            return this;
        }
    }, {
        key: 'onClickNext',
        value: function onClickNext() {
            var optionData = this.option.data;
            var dataLength = this.option.data.length;
            var pageSize = this.option.pageSize;
            var onClickNextCallBack = this.option.onClickNext;
            $('.up-right').on("click", function ($nextBtn) {
                var lastIdNumber = parseInt($('.last').attr("class"));
                var selectNumber = parseInt($('.select').attr("class"));
                var firstIdNumber = parseInt($('.first').attr("class"));
                if (selectNumber !== lastIdNumber) {
                    var x = selectNumber + 1;
                    $(".smallPic").removeClass("select");
                    var nowSmall = $('.' + x++ + 'small');
                    nowSmall.addClass("select");
                    var nowSmallSrc = nowSmall.attr("src");
                    $(".mainPic").attr("src", nowSmallSrc);
                } else if (selectNumber == lastIdNumber && lastIdNumber < 14) {
                    $('.smallPic_ul').empty();
                    var changePage = firstIdNumber;
                    changePage += pageSize;
                    for (var i = 0 + changePage; i < pageSize + changePage && i < 15; i++) {
                        var smallPic = '<li><img class="' + i + 'small smallPic" src="' + optionData[i] + '"></li>';
                        $('.smallPic_ul').append(smallPic);
                        if (i % pageSize === 0) {
                            $('.smallPic').addClass("select");
                        }
                        var selected = $(".smallPic").hasClass("select");
                        if (selected === true) {
                            var smallPicSrc = $('.select').attr("src");
                            $(".mainPic").attr("src", smallPicSrc);
                        }
                        $(".smallPic").on("click", function () {
                            var smallPicSrc = this.src; //這裡的this指向觸發click事件的物件
                            $(".smallPic").removeClass("select");
                            $(this).addClass("select");
                            $(".mainPic").attr("src", smallPicSrc);
                        });
                    };
                    $('.smallPic:first').addClass('first'); //在每列第一張圖片加上'first'的class
                    $('.smallPic:last').addClass('last'); //在每列最後一張圖片加上'Last'的class 
                }
                onClickNextCallBack($nextBtn);
            });
            return this;
        }
    }, {
        key: 'onClickPrev',
        value: function onClickPrev() {
            var optionData = this.option.data;
            var dataLength = this.option.data.length;
            var pageSize = this.option.pageSize;
            var onClickPrevCallBack = this.option.onClickPrev;
            var x = 1;
            $('.up-left').on("click", function ($prevBtn) {
                var firstIdNumber = parseInt($('.first').attr("class"));
                var selectNumber = parseInt($('.select').attr("class"));
                if (selectNumber !== firstIdNumber) {
                    //抓零沒有用 要馬就抓first 所以還要有一個first的class
                    var x = selectNumber - 1;
                    $(".smallPic").removeClass("select");
                    var nowSmall = $('.' + x-- + 'small');
                    nowSmall.addClass("select");
                    var nowSmallSrc = nowSmall.attr("src");
                    $(".mainPic").attr("src", nowSmallSrc);
                } else if (selectNumber == firstIdNumber && firstIdNumber > 0) {
                    $('.smallPic_ul').empty();
                    var changePage = firstIdNumber;
                    changePage -= pageSize;
                    for (var i = 0 + changePage; i < pageSize + changePage; i++) {
                        var smallPic = '<li><img class="' + i + 'small smallPic" src="' + optionData[i] + '"></li>';
                        $('.smallPic_ul').append(smallPic);
                        if (i % pageSize === 0) {
                            $('.smallPic').addClass("select");
                        }
                        var selected = $(".smallPic").hasClass("select");
                        if (selected === true) {
                            var smallPicSrc = $('.select').attr("src");
                            $(".mainPic").attr("src", smallPicSrc);
                        }
                        $(".smallPic").on("click", function () {
                            var smallPicSrc = this.src; //這裡的this指向觸發click事件的物件
                            $(".smallPic").removeClass("select");
                            $(this).addClass("select");
                            $(".mainPic").attr("src", smallPicSrc);
                        });
                    }
                }
                $('.smallPic:first').addClass('first'); //在每列第一張圖片加上'first'的class
                $('.smallPic:last').addClass('last'); //在每列最後一張圖片加上'Last'的class     
                onClickPrevCallBack($prevBtn);
            });
            return this;
        }
    }, {
        key: 'smallArrow',
        value: function smallArrow() {
            var pageNumber = this.option.pageSize;
            var dataLength = this.option.data.length;
            var optionData = this.option.data;
            var lastPageNumber = dataLength % pageNumber;
            var onClickNextRoundCallBack = this.option.onClickNextRound;
            var onClickPrevRoundCallBack = this.option.onClickPrevRound;
            $(".down-right").on("click", function ($nextroundBtn) {
                var firstIdNumber = parseInt($('.first').attr("class"));
                var smallPicIdNum = parseInt($('.select').attr("class"));
                var lastIdNumber = parseInt($('.last').attr("class"));
                var changePage = firstIdNumber;
                if (lastIdNumber < 14) {
                    $('.smallPic_ul').empty();
                    changePage += pageNumber;
                    for (var i = 0 + changePage; i < pageNumber + changePage && i < 15; i++) {
                        var smallPic = '<li><img class="' + i + 'small smallPic" src="' + optionData[i] + '"></li>';
                        $('.smallPic_ul').append(smallPic);
                        if (i % pageNumber === 0) {
                            $('.smallPic').addClass("select");
                        }
                        var selected = $(".smallPic").hasClass("select");
                        if (selected === true) {
                            var smallPicSrc = $('.select').attr("src");
                            $(".mainPic").attr("src", smallPicSrc);
                        }
                        $(".smallPic").on("click", function () {
                            var smallPicSrc = this.src; //這裡的this指向觸發click事件的物件
                            $(".smallPic").removeClass("select");
                            $(this).addClass("select");
                            $(".mainPic").attr("src", smallPicSrc);
                        });
                    }
                } //測試中
                $('.smallPic:first').addClass('first'); //在每列第一張圖片加上'first'的class
                $('.smallPic:last').addClass('last'); //在每列最後一張圖片加上'Last'的class 
                onClickNextRoundCallBack($nextroundBtn);
            });

            $(".down-left").on("click", function ($lastroundBtn) {
                var firstIdNumber = parseInt($('.first').attr("class"));
                var changePage = firstIdNumber;
                var smallPicIdNum = parseInt($('.select').attr("class"));
                if (firstIdNumber > 0) {
                    $('.smallPic_ul').empty();
                    changePage -= pageNumber;
                    for (var i = 0 + changePage; i < pageNumber + changePage; i++) {
                        var smallPic = '<li><img class="' + i + 'small smallPic" src="' + optionData[i] + '"></li>';
                        $('.smallPic_ul').append(smallPic);
                        if (i % pageNumber === 0) {
                            $('.smallPic').addClass("select");
                        }
                        var selected = $(".smallPic").hasClass("select");
                        if (selected === true) {
                            var smallPicSrc = $('.select').attr("src");
                            $(".mainPic").attr("src", smallPicSrc);
                        }
                        $(".smallPic").on("click", function () {
                            var smallPicSrc = this.src; //這裡的this指向觸發click事件的物件
                            $(".smallPic").removeClass("select");
                            $(this).addClass("select");
                            $(".mainPic").attr("src", smallPicSrc);
                        });
                    }
                }
                $('.smallPic:first').addClass('first'); //在每列第一張圖片加上'first'的class
                $('.smallPic:last').addClass('last'); //在每列最後一張圖片加上'Last'的class     
                onClickPrevRoundCallBack($lastroundBtn);
            });
            return this;
        }
    }, {
        key: 'methods',
        value: function methods() {

            return this;
        }
    }, {
        key: 'output',
        value: function output() {
            return this;
        }
    }]);

    return Module;
}();

;

exports.ModuleName = ModuleName;
exports.ModuleDefaults = ModuleDefaults;
exports.ModuleReturns = ModuleReturns;
exports.Module = Module;

/***/ })
/******/ ]);