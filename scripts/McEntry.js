class McEntry extends McTasks{
    constructor(id,name,description,date,hour,types){
        super(id,name,description,date,hour);
        this.types = types;
        this.status = "N"; /*It means without status*/
    }
}