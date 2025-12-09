import Snake  from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 控制游戏类
class GameControl{
    // 蛇
    snake: Snake
    // 食物
    food: Food
    // 积分区
    scorePanel: ScorePanel
    // 蛇的移动方向(按键的方向)
    direction: string = ''

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }

    // 游戏初始化
    init(){
        // 绑定键盘按下的事件
        document.addEventListener('keydown',this.keydownHandler.bind(this))
        // 调用run方法
        this.run()
    }

    // 键盘按下的回调函数
    /* event.key:
    *       ArrowUp
    *       ArrowDown
    *       ArrowLeft
    *       ArrowRight
    * */
    keydownHandler(event:KeyboardEvent){
        // 按键是否是合法的

        // 修改direction
        this.direction = event.key
    }

    // 蛇移动的方法
    run(){
        /*
        * 根据 this.direction 来使蛇的位置改变
        * 向上 top减少
        * 向下 top增加
        * 向左 left减少
        * 向右 left增加
        * */
        let X = this.snake.X
        let Y = this.snake.Y

        switch (this.direction){
            case "ArrowUp":
                // 向上移动
                Y -= 10
                break
            case "ArrowDown":
                // 向下移动
                Y += 10
                break
            case "ArrowLeft":
                // 向左移动
                X -= 10
                break
            case "ArrowRight":
                // 向右移动
                X += 10
                break
        }

        // 修改蛇的坐标
        this.snake.X = X
        this.snake.Y = Y

        // 开启一个定时调用
        setTimeout(this.run.bind(this),250 - (this.scorePanel.level - 1) * 25)
    }
}

export default GameControl;