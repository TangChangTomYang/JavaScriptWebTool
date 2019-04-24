
/** 获取网页窗口的 可视大小*/
function clientSize() {
     if(window.innerHeight !== undefined){
         return {"width": window.innerWidth, "height":window.innerHeight};
     }
     else if (document.compatMode === "CSS1Compat") { // 有设置DTD 兼容声明
         return {"width" : document.documentElement.clientWidth, "height" : document.documentElement.clientHeight};
     }
     else {
         return {"width": document.body.clientWidth, "width" : document.body.clientHeight};
     }
}


/**获取当前鼠标的 pageX 和 pagaY*/
function touchPoint(event) {
    // pageX pageY 指的是鼠标 距离页面左边和上边的距离, 包含卷去的部分
    return {"x" : (event.pageX || pageOffset().x + event.clientX), "y": (event.pageY || pageOffset().y + event.clientY) };
}

/**
 * 获取当前窗口的偏移量
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function pageOffset() {
    return {x: (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop),
        y:(window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft)};
}


/*******移动节点操作相关*******************************************************/



function animateMove_H_callback(ele, target, callback) {
    if(target == ele.offsetLeft){
        if(callback != null){
            callback();
        }
        return;
    }
    if (callback != null && ele.timer > 0){
        return;
    }
    else {
        clearInterval(ele.timer);
    }
    ele.timer = setInterval(function () {

        var step = (target - ele.offsetLeft)/10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        ele.style.left = ele.offsetLeft + step + 'px';

        if (Math.abs(target - ele.offsetLeft) <= Math.abs(step)){
            ele.style.left = target + 'px';
            clearInterval(ele.timer);
            if(callback != null){
                callback();
            }
        }
    },25);
}


function animateMove_V_callback(ele, target,callback) {

    if(target == ele.offsetLeft){
        if(callback != null){
            callback(true);
        }
        return;
    }
    if (callback != null && ele.timer > 0){
        return;
    }
    else {
        clearInterval(ele.timer);
    }

    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target - ele.offsetTop)/10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        ele.style.top = ele.offsetTop + step + 'px';

        if (Math.abs(target - ele.offsetTop) <= Math.abs(step)){
            ele.style.top = target + 'px';
            clearInterval(ele.timer);
            if(callback != null){
                callback();
            }
        }
    },25);
}


function animateMove_H(ele, target) {
    animateMove_H_callback(ele, target,null);
}

function animateMove_V(ele, target) {
    animateMove_V_callback(ele,target,null );
}

/*******节点操作相关*******************************************************/

/**
 * 查找给定元素的第一个节点元素
 * @param ele
 * @returns {Element|*|Node}
 */
function getFirstChild(ele) {
    var node = ele.firstElementChild || ele.firstChild;
    return node;
}

/**
 * 查找给定元素的最后一个节点元素
 * @param ele
 * @returns {Element|*|Node}
 */
function  getLastChild(ele) {
    var node = ele.lastElementChild || ele.lastChild;
    return node;
}


/**
 * 查找给定元素的下一个兄弟元素节点
 * @param ele
 * @returns {Element|*|Node}
 */
function  getNextSibling(ele) {
    var node = ele.nextElementSibling || ele.nextSibling;
    return node;
}

/**
 * 查找给定元素的上一个兄弟元素节点
 * @param ele
 * @returns {Element|*|Node}
 */
function  getPreviousSibling(ele) {
    var node = ele.previousElementSibling || ele.previousSibling;
    return node ;
}


/**
 * 给定元素和索引值, 查找指定索引值的兄弟元素节点
 * @param ele
 * @param index
 * @returns {*|HTMLElement}
 */
function getSiblingOfIndex(ele, index) {
    return ele.parentNode.children[index];
}


/**
 * 查找给定元素的所有兄弟节点
 * @param ele
 * @returns {*|HTMLElement[]}
 */
function  getAllSiblings(ele) {
    return ele.parentNode.children;
}
