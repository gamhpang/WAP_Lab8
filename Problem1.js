function LinkedList(){
    this.list = [];
}

LinkedList.prototype.add = function(value){
    this.list.push(value);   
}


LinkedList.prototype.remove = function(value){
    const i = this.list.indexOf(value);
    if(i>-i){
       this.list.splice(i,1);
    }
}

LinkedList.prototype.print = function(){
    const result = this.list.join(',');
    console.log(`LinkedList{${result}}`);
}

let linkedlist = new LinkedList();

linkedlist.add(1);

linkedlist.add(2);

linkedlist.add(3);

linkedlist.print(); //Expected Result: LinkedList{1,2,3};

linkedlist.remove(2);

linkedlist.print(); //Expected Result: LinkedList{1,3};