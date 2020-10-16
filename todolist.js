var num=0;
class ToDo{
    constructor(taseName,taskeDetail,time){
        this.taskNum=++num;
        this.taseName=taseName;
        this.taskeDetail=taskeDetail;
        this.time=time;
       

    }
    setName(name){
        this.taseName=name;
    }
    setInfo(newInfo){
        this.taskeDetail=newinfo;
    }
    setTime(time){
        this.time=time;
    }
    getTime(time){
        return this.time;
    }
  
    getName(){
        return this.taseName;
    }
    getinfo(){
        return this.taskeDetail;
    }
  
    getnum(){
        return this.taskNum;
    }
}

