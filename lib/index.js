


(function (win, doc) {
	"use strict";
    // 手势库
    var touchRobotPos = {
        sign: ["118.7734375 88.3515625", "122.46875 84.65234375", "125.6484375 81.46875", "128.23828125 79.421875", "131.875 76.84375", "135.1640625 74.83984375", "137.7265625 73.42578125", "139.2578125 72.765625", "140.5625 72.5625", "141.375 72.5625", "141.95703125 72.5625", "142.34375 72.71484375", "142.8671875 73.23828125", "143.4375 74.1875", "143.83984375 75.4921875", "144.05859375 77.1328125", "144.27734375 78.7734375", "144.27734375 80.078125", "144.37109375 81.12109375", "144.71875 81.81640625", "145.1328125 82.23046875", "145.828125 82.4921875", "146.98828125 82.4921875", "148.29296875 82.1875", "151.20703125 81.2578125", "154.640625 79.82421875", "158.51171875 78.03515625", "161.29296875 76.70703125", "166.3515625 74.00390625", "170.66015625 72", "173.65625 70.6328125", "176.34765625 69.734375", "177.27734375 69.640625", "177.3515625 69.640625", "177.42578125 69.94921875", "177.42578125 71.921875", "177.42578125 75.19140625", "177.29296875 78.23828125", "177.29296875 82.18359375", "177.29296875 86.12890625", "177.29296875 88.6015625", "177.29296875 91.2421875", "177.29296875 93.21484375", "177.38671875 94.2578125", "177.38671875 94.83984375", "177.4609375 94.9921875", "177.53515625 94.9921875", "177.765625 94.8359375", "178.6015625 94.27734375", "180.54296875 92.9375", "183.4765625 90.9765625", "186.06640625 88.79296875", "189.76171875 85.86328125", "193.71484375 82.0703125", "196.54296875 78.94140625", "200.29296875 75.65625", "203.625 72.625", "205.94140625 70.16796875", "207.0703125 68.6953125", "207.625 67.94921875", "207.85546875 67.79296875", "208.0078125 67.79296875", "208.16015625 67.79296875", "208.91796875 68.55078125", "209.79296875 69.97265625", "210.76171875 72.15625", "211.59375 74.17578125", "212.22265625 75.54296875", "213.01171875 77.234375", "214.02734375 78.8125", "215.01171875 80.234375", "215.6875 81.19921875", "216.4921875 82.3046875", "217.6484375 83.25", "219.2265625 84.265625", "222.140625 85.19140625", "225.41015625 85.87109375", "227.71484375 86.11328125", "230.1875 86.11328125", "231.9921875 85.66015625", "234.5078125 84.52734375", "238.3046875 83.2109375", "246.12109375 80.08203125", "255.6640625 76.6875", "261.0625 74.66015625", "264.859375 73.1953125", "266.55078125 72.515625", "267.1328125 72.265625", "267.44140625 72.109375", "267.59375 72.109375", "267.59375 71.953125", "267.74609375 72.10546875"],
        right: ["111.421875 357.66796875", "119.23046875 356.52734375", "133.68359375 354.53515625", "151.03125 352.40234375", "167.1171875 351.3671875", "187.62890625 349.63671875", "204.53125 349.109375", "230.375 348.15234375", "253.5234375 347.546875", "267.16015625 347.3046875", "284.0625 347.3046875", "294.84375 347.3046875", "308.07421875 347.3046875", "315.2890625 347.3046875", "322.2109375 347.125", "325.03125 347.125", "327.00390625 347.125", "328.1640625 347.125", "329.20703125 347.125"],
        left: ["265.984375 432.171875", "259.65234375 431.46875", "248.8671875 430.1484375", "237.671875 428.80859375", "216.62890625 426.765625", "200.1328125 425.71875", "175.3984375 424.15625", "150.6640625 421.65234375", "135.796875 419.890625", "117.390625 417.6953125", "107.828125 416.8671875", "97.85546875 416.4453125", "93.00390625 416.2890625", "87.85546875 416.2890625", "85.03125 416.2890625", "82.38671875 416.2890625"],
        top: ["236.35546875 477.328125", "238.89453125 469.31640625", "241.078125 462.578125", "246.55859375 449.12109375", "253.87109375 432.59765625", "259.8515625 419.390625", "270.80859375 397.1640625", "284.19140625 373.3359375", "299.01171875 348.41015625", "311.41796875 330.68359375", "329.78125 305.734375", "344.3046875 284.89453125", "353.30078125 272.04296875", "363.17578125 257.62890625", "371.234375 245.03515625", "375.234375 238.1796875", "379.40625 230.4296875", "381.59375 226.05078125", "382.359375 224.51953125", "382.63671875 223.58984375", "382.63671875 223.359375", "382.63671875 223.28515625"],
        bottom: ["114.1328125 389.38671875", "115.85546875 395.25", "117.515625 404.8125", "119.15234375 417.23046875", "120.03125 428.015625", "120.5390625 443.2890625", "120.5390625 459.78515625", "121.0546875 475.875", "121.0546875 487.88671875", "121.0546875 501.52734375", "120.33984375 514.3515625", "119.95703125 522.1640625", "119.19140625 529.9765625", "118.70703125 535.125", "118.578125 537.94921875", "118.2109375 540.2578125", "118.015625 541.421875", "118.015625 542.0078125", "118.015625 542.2421875", "118.015625 542.3984375", "117.9375 542.3984375", "117.9375 542.4765625"]
    }
    touchRobot.prototype._getPos = function (type) {
        var rect = this.touchEle.getBoundingClientRect();
        var lines = [];
        if (type == 'left') {
            var maxHeight = 100; //垂直方向最大高度
            var minWidth = 300; // 水平方向最小距离
            var startX = randomFrom(rect.x + rect.width - rect.width/5, rect.x + rect.width);
            var startY = randomFrom(rect.y + rect.height / 5, rect.y + rect.height - rect.height/5);
            var endX = randomFrom(rect.x, rect.x + rect.width/5);
            var endY = randomFrom(startY - 50, startY + 50);
            if (Math.abs(endY - startY) > maxHeight) {
              endY = startY + randomFrom(-50, 50)
            }
            if (Math.abs(endX - startX) < minWidth) {
              endX = startX - minWidth;
            }
            lines = getXY(startX, startY, endX, endY, 'horizontal')
        } else if (type == 'right') {
            var maxHeight = 100; //垂直方向最大高度
            var minWidth = 300; // 水平方向最小距离
            var startX = randomFrom(rect.x, rect.x + rect.width/5);
            var startY = randomFrom(rect.y + rect.height / 5, rect.y + rect.height - rect.height/5);
            var endX = randomFrom(rect.x + rect.width - rect.width/5, rect.x + rect.width);
            var endY = randomFrom(startY - 50, startY + 50);
            if (Math.abs(endY - startY) > maxHeight) {
              endY = startY + randomFrom(-50, 50)
            }
            if (Math.abs(endX - startX) < minWidth) {
              endX = startX + minWidth;
            }
            lines = getXY(startX, startY, endX, endY, 'horizontal')
        } else if (type == 'top') {
          var maxWidth = 100; //水平方向最大高度
          var minHeight = 300; // 垂直方向小长度
          var startX = randomFrom(rect.x, rect.x + rect.width);
          var startY = randomFrom(rect.y + rect.height / 2, rect.y + rect.height - rect.height / 5);
          var endX = randomFrom(rect.x, rect.x + rect.width);
          var endY = randomFrom(rect.y, rect.y + rect.height / 2);
          if (Math.abs(endX - startX) > maxWidth) {
            endX = startX + randomFrom(-50, 50);
          }
          if (Math.abs(endY - startY) < minHeight) {
            endY = startY - minHeight;
          }
          lines = getXY(startX, startY, endX, endY, 'vertical')
        } else if (type == 'bottom') {
          var maxWidth = 100; //水平方向最大宽度
          var minHeight = 300; // 垂直方向小长度
          var startX = randomFrom(rect.x, rect.x + rect.width);
          var startY = randomFrom(rect.y + rect.height / 5, rect.y + rect.height / 2);
          var endX = randomFrom(rect.x, rect.x + rect.width);
          var endY = randomFrom(rect.y + rect.height / 2, rect.y + rect.height - rect.height / 5);
          
          if (Math.abs(endX - startX) > maxWidth) {
            endX = startX + randomFrom(-50, 50);
          }
          if (Math.abs(endY - startY) < minHeight) {
            endY = startY + minHeight;
          }
          lines = getXY(startX, startY, endX, endY, 'vertical');
        } else {
            lines = touchRobotPos[type] || []
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
    
	  function touchRobot(dom) {
        this.touchEle = dom;
    }
    touchRobot.prototype._touchMoveTo = function (posArray, curIndex, callback){
        var x = posArray[curIndex].split(' ')[0];
        var y = posArray[curIndex].split(' ')[1];
        this._triggerTouchEvent('touchmove', x, y);
        var _this = this;
        if (curIndex < posArray.length - 1) {
            setTimeout(function () {
                _this._touchMoveTo(posArray, ++curIndex, callback)
            }, 24)
        } else {
            callback && callback()
        } 
    }
    touchRobot.prototype._triggerTouchEvent = function (eventType, x, y) {
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

      var touchEvent = document.createEvent('UIEvent');
      touchEvent.initEvent(eventType, true, true);
      touchEvent.touches = [touch];
      touchEvent.targetTouches = [touch];
      touchEvent.changedTouches = [touch];
      this.touchEle.dispatchEvent(touchEvent);
    }

    touchRobot.prototype.touch = function (type) {
      var posArray = [];
      if (type instanceof Array) {
        posArray = type
      } else {
        posArray = this._getPos(type) || [];
      }
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
    touchRobot.prototype.touchLeft = function(){
      return this.touch('left')
    }
    touchRobot.prototype.touchTop = function(){
      return this.touch('top')
    }
    touchRobot.prototype.touchRight = function(){
      return this.touch('right')
    }
    touchRobot.prototype.touchBottom = function(){
      return this.touch('bottom')
    }
    // startX, startY, endX, endY
    touchRobot.prototype.touchTo = function (startX, startY, endX, endY) {
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
    // 触碰点击
    touchRobot.prototype.touchClick = function () {        
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
    //兼容CommonJs规范 
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = touchRobot;
    };
    //兼容AMD/CMD规范
    if (typeof define === 'function') define(function() { 
      return touchRobot; 
    });
    //注册全局变量，兼容直接使用script标签引入插件
    win.touchRobot = touchRobot;
 })(window, document)