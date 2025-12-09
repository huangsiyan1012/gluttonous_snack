// 定义记分牌类scorePanel
class ScrorePanel{
    // 记录分数和排名
     score = 0
     level = 1
    // 分数和排名所在的元素
    scoreElement: HTMLElement
    levelElement: HTMLElement

    // 等级最高限制
    maxLevel: number
    // 多少分升一级
    upScore:number
    constructor(maxLevel: number = 10, upScore:number = 10) {
        this.scoreElement = document.getElementById('score') as HTMLElement
        this.levelElement = document.getElementById('level') as HTMLElement
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 加分
    addScore() {
        this.scoreElement.innerHTML = `${this.score++}`
        if(this.score % this.upScore === 0){
            this.levelUp()
        }
    }

    // 升级
    levelUp(){
        if(this.level < this.maxLevel){
            this.levelElement.innerHTML = `${this.level++}`
        }
    }
}

export default ScrorePanel