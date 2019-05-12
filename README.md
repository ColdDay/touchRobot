# touchRobot
机器模拟移动端触碰点击，手指滑动

## Install
### NPM
```
npm install touch-robot
```
```
import touchRobot from 'touch-robot';
```
### CDN
```
<script type="text/javascript" src="./dist/touch-robot.min.js"></script>
```
### Usage
```
var robot = new touchRobot(dom);

robot.touchLeft();
```
## API
|方法（method）|描述（description）|
|----|----:|
touchLeft|左滑
touchRight|右滑
touchTop|上滑
touchBottom|下滑
touchTo|定点滑动，参数startX,startY,endX,endY
touchClick|触碰点击

## DEMO
#### [jQuery-slide滑块验证码]( http://www.jq22.com/demo/jQuery-slide20161116/ "超链接title")

![demo](https://user-gold-cdn.xitu.io/2019/5/11/16aa5eae36a0c99c?w=400&h=239&f=gif&s=465983 '滑块')

操作步骤

    step1
        将代码在控制台粘贴执行
    step2
        var robot = new touchRobot(document.querySelector('#btn'));
        robot.touchTo(0,0,400,0);

#### [swiper轮播](https://www.swiper.com.cn/demo/010-default.html )


![demo](https://user-gold-cdn.xitu.io/2019/5/11/16aa5e6cdcb01b97?w=400&h=221&f=gif&s=524749 'swiper')



操作步骤

    step1
        将代码在控制台粘贴执行
    step2
        var robot = new touchRobot(document.querySelector('.swiper-container'))
        robot.touchLeft()
        
