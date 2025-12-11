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
        // 如果新的值和旧的值相同，则直接返回不再修改
        if(this.X === value){
            return
        }
        // X的合法范围(监测蛇是否撞墙)
        if(value < 0 || value > 390){
            throw new Error('哎呀~撞墙了~')
        }

        // 蛇在走的时候不能直接按反方向的建掉头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            // 禁止掉头，继续向反方向移动
            if(value > this.X){
                value = this.X - 10
            }else{
                value = this.X + 10
            }
        }

        // 移动身体
        this.moveBody()

        this.head.style.left = value + 'px'
        // 检查有没有撞到自己
        this.checkHeadBody()
    }
    set Y(value: number) {
        // 如果新的值和旧的值相同，则直接返回不再修改
        if(this.Y === value){
            return
        }
        // Y的合法范围(监测蛇是否撞墙)
        if(value < 0 || value > 390){
            throw new Error('哎呀~撞墙了~')
        }

        // 蛇在走的时候不能直接按反方向的建掉头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            // 禁止掉头，继续向反方向移动
            if(value > this.Y){
                value = this.Y - 10
            }else{
                value = this.Y + 10
            }
        }

        // 移动身体
        this.moveBody()

        this.head.style.top = value + 'px'
        // 检查有没有撞到自己
        this.checkHeadBody()

    }

    // 设置蛇增加身体
    addBody(){
        // 向element容器中增加一个身体
        this.element.insertAdjacentHTML('beforeend', '<div></div>') // 第一个参数代表在element容器标签的结束标签前的位置，第二参数表示插入的是什么标签
    }

    // 蛇身体移动的方法
    moveBody(){
        /*
        *   将后边的身体设置为前边身体的位置，其实就是后面一节身体要移动到前一节身体的位置
        * */
        // 获取所有的身体
        for(let i = this.bodies.length - 1; i > 0; i--){
            // 获取前一节身体
            const prevBody = this.bodies[i-1] as HTMLElement
            const currentBody = this.bodies[i] as HTMLElement
            const xPos = prevBody.offsetLeft
            const yPos = prevBody.offsetTop
                
            // 将值设置到当前身体上
            currentBody.style.left = xPos + 'px'
            currentBody.style.top = yPos + 'px'
        }
    }

    // 检查头和身体有没有撞上
    checkHeadBody(){
        // 获取所有的身体，检查是否有和蛇头相同的
        for(let i = 1; i < this.bodies.length; i++){
            if(this.X === (this.bodies[i] as HTMLElement).offsetLeft  && this.Y === (this.bodies[i] as HTMLElement).offsetTop){
                // 撞到了
                throw new Error("撞到自己了~~")
            }
        }
    }
}


export default Snake