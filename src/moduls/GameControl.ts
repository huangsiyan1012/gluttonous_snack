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
}

export default GameControl;