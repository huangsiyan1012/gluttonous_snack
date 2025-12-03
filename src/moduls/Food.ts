// 定义食物类Food
class Food{
    // 定义属性表示食物所对应的元素
    element: HTMLElement

    constructor() {
        // 获取页面中的food元素
        this.element = document.getElementById('food') as HTMLElement
    }

    // 获取食物X轴坐标
    get X() {
        return this.element.offsetLeft
    }

    // 获取食物Y轴坐标
    get Y() {
        return this.element.offsetTop
    }

    // 修改食物的位置
    changePosition(){
        // 生成随机位置
        let top = Math.round(Math.random() * 39) * 10
        let left = Math.round(Math.random() * 39) * 10
        this.element.style.left = top + 'px'
        this.element.style.top = left + 'px'
    }
}

export  default Food