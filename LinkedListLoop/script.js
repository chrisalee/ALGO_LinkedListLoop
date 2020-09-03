// determine if a list has a loop, and return a boolean accordingly

hasLoop(){
  if(this.head==null){
    return false;
  }
  let runner = this.head, hasLoop=false;
  while(runner.next && hasLoop==false){
    if(!runner.candy){  //leaves a piece "candy" behind if been there
      runner.candy = true;
      runner = runner.next;
    }
    else{
      hasLoop=true;
    }
  }
  return true;
}

breakLoop(){
  if(this.head == null){
    return this;
  }
  let runner = this.head, minusCount = this.count;
  while(minusCount>0){
    runner.candy=null;
    runner=runner.next;
    minusCount--;
  }
  runner.next=null;
  return this;
}
