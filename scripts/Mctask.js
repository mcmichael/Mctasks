
class Mctask{

    constructor(id, name, description, date, hour){
        this.id = id;
        this.name = name;
        this.description = description;
        this.date = date;
        this.hour = hour;
    }

    get name(){
        return "The name of the tasks is " + this.name;
    }

    set name(nameParameter){
        this.name = nameParameter;
        return "The name was changed for "+ nameParameter;
    }


}


