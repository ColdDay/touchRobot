


(function (win, doc) {
	"use strict";
    // 手势库
    var handWayPos = {
        right: ["111.421875 357.66796875", "119.23046875 356.52734375", "133.68359375 354.53515625", "151.03125 352.40234375", "167.1171875 351.3671875", "187.62890625 349.63671875", "204.53125 349.109375", "230.375 348.15234375", "253.5234375 347.546875", "267.16015625 347.3046875", "284.0625 347.3046875", "294.84375 347.3046875", "308.07421875 347.3046875", "315.2890625 347.3046875", "322.2109375 347.125", "325.03125 347.125", "327.00390625 347.125", "328.1640625 347.125", "329.20703125 347.125"],
        left: ["265.984375 432.171875", "259.65234375 431.46875", "248.8671875 430.1484375", "237.671875 428.80859375", "216.62890625 426.765625", "200.1328125 425.71875", "175.3984375 424.15625", "150.6640625 421.65234375", "135.796875 419.890625", "117.390625 417.6953125", "107.828125 416.8671875", "97.85546875 416.4453125", "93.00390625 416.2890625", "87.85546875 416.2890625", "85.03125 416.2890625", "82.38671875 416.2890625"],
        top: ["236.35546875 477.328125", "238.89453125 469.31640625", "241.078125 462.578125", "246.55859375 449.12109375", "253.87109375 432.59765625", "259.8515625 419.390625", "270.80859375 397.1640625", "284.19140625 373.3359375", "299.01171875 348.41015625", "311.41796875 330.68359375", "329.78125 305.734375", "344.3046875 284.89453125", "353.30078125 272.04296875", "363.17578125 257.62890625", "371.234375 245.03515625", "375.234375 238.1796875", "379.40625 230.4296875", "381.59375 226.05078125", "382.359375 224.51953125", "382.63671875 223.58984375", "382.63671875 223.359375", "382.63671875 223.28515625"],
        bottom: ["114.1328125 389.38671875", "115.85546875 395.25", "117.515625 404.8125", "119.15234375 417.23046875", "120.03125 428.015625", "120.5390625 443.2890625", "120.5390625 459.78515625", "121.0546875 475.875", "121.0546875 487.88671875", "121.0546875 501.52734375", "120.33984375 514.3515625", "119.95703125 522.1640625", "119.19140625 529.9765625", "118.70703125 535.125", "118.578125 537.94921875", "118.2109375 540.2578125", "118.015625 541.421875", "118.015625 542.0078125", "118.015625 542.2421875", "118.015625 542.3984375", "117.9375 542.3984375", "117.9375 542.4765625"]
    }
    handWay.prototype._getPos = function (type) {
        var rect = this.touchEle.getBoundingClientRect();
        var lines = [];
        if (type == 'left') {
            var startX = rect.x + rect.width;
            var startY = rect.y + rect.height / 2;
            var endX = rect.x + rect.width / 4;
            var endY = rect.y;
            lines = getXY(startX, startY, endX, endY, 'horizontal')
        } else if (type == 'right') {
            var startX = rect.x;
            var startY = rect.y + rect.height / 2;
            var endX = rect.x + rect.width;
            var endY = rect.y;
            lines = getXY(startX, startY, endX, endY, 'horizontal')
        } else if (type == 'top') {
            var startX = rect.x + randomFrom(rect.x, rect.x + rect.width);
            var startY = rect.y + rect.height / 2;
            var endX = rect.x + randomFrom(rect.x, rect.x + rect.width);
            var endY = rect.y;
            lines = getXY(startX, startY, endX, endY, 'vertical')
        } else if (type == 'bottom') {
            var startX = rect.x + randomFrom(rect.x, rect.x + rect.width);
            var startY = rect.y + rect.height / 2;
            var endX = rect.x + randomFrom(rect.x, rect.x + rect.width);
            var endY = rect.y + rect.height;
            lines = getXY(startX, startY, endX, endY, 'vertical')
        }
        return lines;
    }

    function getXY (x1,y1, x2,y2, stepX,stepY, direction) {
        var stepCount = 30;
        var stepX = (x2 - x1) / stepCount;
        var stepY = (y2 - y1) / stepCount;
        var stepPos = [];
        for(var i=0; i<stepCount; i++) {
            var x = x1 + stepX*i;
            if (direction == 'horizontal') {
                x = x + stepX*i/2
            }
            var y = y1 + stepY*i;
            if (direction == 'vertical') {
                y = y + stepY*i/2
            }
            stepPos.push(x + ' ' + y)
        }
        return stepPos;
    }
    // 获取区间随机整数
    function randomFrom(lowerValue, upperValue) {
        return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
    };
    
	function handWay(dom) {
        this.touchEle = dom;
    }
    handWay.prototype._touchMoveTo = function (posArray, curIndex, callback){
        var x = posArray[curIndex].split(' ')[0];
        var y = posArray[curIndex].split(' ')[1];
        this._triggerTouchEvent('touchmove', x, y);
        var _this = this;
        if (curIndex < posArray.length - 1) {
            setTimeout(function () {
                _this._touchMoveTo(posArray, ++curIndex, callback)
            }, 30 + curIndex)
        } else {
            callback && callback()
        } 
    }
    handWay.prototype._triggerTouchEvent = function (eventType, x, y) {
        // 获取目标元素的坐标、大小
        var rect = this.touchEle.getBoundingClientRect();
        var randomLen = randomFrom()
        var randomX = x || randomFrom(rect.left, rect.left + rect.width);
        var randomY = y || randomFrom(rect.top, rect.top + rect.height);
        // 构建touch对象
        var touch = new Touch({
          identifier: Date.now(),
          target: this.touchEle,
          clientX: randomX,
          clientY: randomY,
          pageY: randomY,
          pageX: randomX,
          radiusX: 2.5,
          radiusY: 2.5,
          rotationAngle: 10,
          force: 0.5
        });
        // 构建TouchEvent
        // 构建TouchEvent
        // 兼容老版浏览器
        var touchEvent = document.createEvent('UIEvent');
        touchEvent.initEvent(eventType, true, true); // eventType就是例如touchstart、touchend
        touchEvent.touches = [touch];
        touchEvent.targetTouches = [touch];
        touchEvent.changedTouches = [touch];
      
        // var touchEvent = new TouchEvent(eventType, {
        //     cancelable: true,
        //     bubbles: true,
        //     touches: [touch],
        //     targetTouches: [],
        //     changedTouches: [touch]
        // });
        this.touchEle.dispatchEvent(touchEvent);
    }
    handWay.prototype._mouseMoveTo = function (posArray, curIndex, callback){
        var x = posArray[curIndex].split(' ')[0];
        var y = posArray[curIndex].split(' ')[1];
        this._triggerMouseEvent('touchmove', x, y);
        var _this = this;
        if (curIndex < posArray.length - 1) {
            setTimeout(function () {
                _this._mouseMoveTo(posArray, ++curIndex, callback)
            }, 20)
        } else {
            callback && callback()
        } 
    }
    handWay.prototype._triggerMouseEvent = function (eventType, x, y) {
        // 获取目标元素的坐标、大小
        var rect = this.touchEle.getBoundingClientRect();
        var randomLen = randomFrom()
        var randomX = x || randomFrom(rect.left, rect.left + rect.width);
        var randomY = y || randomFrom(rect.top, rect.top + rect.height);
        // 构建touch对象
        var mouseEvent = new MouseEvent({
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: randomX,
            clientY: randomY
        });
        
        this.touchEle.dispatchEvent(mouseEvent);
    }
    handWay.prototype.mouse = function (type) {
        var posArray = handWayPos[type] || []
        var x = posArray[0].split(' ')[0];
        var y = posArray[0].split(' ')[1];
        this._triggerMouseEvent('mouseend', x, y);
        this._mouseMoveTo(posArray, 0, function() {
            var endX = posArray[posArray.length - 1].split(' ')[0];
            var endY = posArray[posArray.length - 1].split(' ')[1]
            this._triggerMouseEvent('mouseend', endX, endY);
        })   
    }
    handWay.prototype.touch = function (type) {
        var posArray = this._getPos(type) || [];
        console.log(111, posArray);
        var x = posArray[0].split(' ')[0];
        var y = posArray[0].split(' ')[1];
        this._triggerTouchEvent('touchstart', x, y);
        var _this = this;
        this._touchMoveTo(posArray, 0, function() {
            var endX = posArray[posArray.length - 1].split(' ')[0];
            var endY = posArray[posArray.length - 1].split(' ')[1]
            _this._triggerTouchEvent('touchend', endX, endY);
        })   
    }
    // startX, startY, endX, endY
    handWay.prototype.touchTo = function (startX, startY, endX, endY) {
        var posArray = getXY(startX, startY, endX, endY, 'horizontal')
        var x = posArray[0].split(' ')[0];
        var y = posArray[0].split(' ')[1];
        this._triggerTouchEvent('touchstart', x, y);
        var _this = this;
        this._touchMoveTo(posArray, 0, function() {
            var endX = posArray[posArray.length - 1].split(' ')[0];
            var endY = posArray[posArray.length - 1].split(' ')[1]
            _this._triggerTouchEvent('touchend', endX, endY);
        })   
    }
    // startX, startY, endX, endY
    handWay.prototype.mouseTo = function (startX, startY, endX, endY) {
        var posArray = getXY(startX, startY, endX, endY, 'horizontal')
        var x = posArray[0].split(' ')[0];
        var y = posArray[0].split(' ')[1];
        this._triggerMouseEvent('mouseend', x, y);
        var _this = this;
        this._mouseMoveTo(posArray, 0, function() {
            var endX = posArray[posArray.length - 1].split(' ')[0];
            var endY = posArray[posArray.length - 1].split(' ')[1]
            _this._triggerMouseEvent('mouseup', endX, endY);
        })   
    }
    // 
    handWay.prototype.touchClick = function () {        
        var rect = this.touchEle.getBoundingClientRect();
        var x = rect.x + randomFrom(rect.width/3, rect.width - rect.width/3)
        var y = rect.y + randomFrom(rect.height/3, rect.height - rect.height/3)
        this._triggerTouchEvent('touchstart', x, y);
        var _this = this;
        setTimeout(function(){
            _this._triggerTouchEvent('touchend', x, y);
            _this.touchEle.click();
        }, 250)
    }
    handWay.prototype.mouseClick = function () {        
        var rect = this.touchEle.getBoundingClientRect();
        var x = rect.x + randomFrom(rect.width/3, rect.width - rect.width/3)
        var y = rect.y + randomFrom(rect.height/3, rect.height - rect.height/3)
        this._triggerMouseEvent('mouseend', x, y);
        var _this = this;
        setTimeout(function(){
            _this._triggerMouseEvent('mouseup', x, y);
            _this.touchEle.click();
        }, 250)
    }
	//兼容CommonJs规范 
	if (typeof module !== 'undefined' && module.exports) {
		
	};
	//兼容AMD/CMD规范
	if (typeof define === 'function') define(function() { 
		return handWay; 
	});
	//注册全局变量，兼容直接使用script标签引入插件
	win.handWay = handWay;
 })(window, document)

// var xigua = new handWay(document.querySelectorAll('.td-pop-slidetrigger')[0])
// xigua.touchTo(10,10, 200,10)