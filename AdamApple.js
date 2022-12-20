class Apple {
    khoiLuong=10;
    constructor() {
    }
    decrease(){
        console.log('khoi luong tao con lai la : ' + this.khoiLuong)
    }
    isEmpty(){
        if (this.khoiLuong == 0){
            return true
        } else {
            return false
        }
    }
    getWeight(){
        return this.khoiLuong
    }
}
class Human{
    name
    sex
    weght
    constructor(name, sex, weght) {
        this.name = name;
        this.sex = sex;
        this.weght = weght;
    }
    checkApple(apple){
      return apple.isEmpty()
    }
    eatApple(apple){
        apple.khoiLuong = apple.khoiLuong - 1;
    }
    say(string){
        console.log(this.name +": "+ string)
    }
}
let adam = new Human('Adam', 'man', 60)
let appleRed = new Apple()
adam.say('hai tao thoi')
    for (let i = 0; i < 10; i++) {
        if (adam.checkApple(appleRed)){
            adam.say('tao het roi,tim trai khac thoi')
            break
        } else {
            adam.eatApple(appleRed)
            adam.say('ngon qua ' + i)
            adam.weght += 1
            console.log(adam.weght)
            appleRed.decrease()
    }
}

