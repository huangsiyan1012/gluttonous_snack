// 蛇类Snake
class Snake {
    // 存储蛇头的html元素
    head: HTMLElement
    // 蛇的身体(包括蛇头)
    bodies: HTMLCollection
    // 蛇的容器
    element: HTMLElement

    constructor() {
        this.element = document.getElementById('snake') as HTMLElement
        this.head = document.querySelector('#snake > div') as HTMLElement
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div')
    }

    // 获取蛇头的坐标
    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    // 设置蛇头坐标
    set X(value: number) {
        this.head.style.left = value + 'px'
    }
    set Y(value: number) {
        this.head.style.top = value + 'px'
    }

    // 设置蛇增加身体
    addBody(){
        // 向element容器中增加一个身体
        this.element.insertAdjacentHTML('beforeend', '<div></div>') // 第一个参数代表在element容器标签的结束标签前的位置，第二参数表示插入的是什么标签
    }
}

export default Snake