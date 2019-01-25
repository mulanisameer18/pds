import { Component, OnInit } from '@angular/core';
import { toASCII } from 'punycode';
export class task{
  taskId:number;
  duration:number
}
export class processor{
  processId:number;
  tasks:Array<number>
}

@Component({
  selector: 'app-load-balance',
  templateUrl: './load-balance.component.html',
  styleUrls: ['./load-balance.component.scss']
})


export class LoadBalanceComponent implements OnInit {

  processorArray=[];
  taskArray=[];
  constructor() { }

  ngOnInit() {
    this.createProcessor();
    this.createTask(5);
    this.roundRobin();
  }

  createProcessor(count:number=4)
  {
    
    while(count>0)
    {
      let newProcessor = new processor();
      let processorArraySize = this.processorArray.length;
      newProcessor={
        processId:processorArraySize,
        tasks:[]
      };
      this.processorArray.push(newProcessor);
      count--;
      console.log(newProcessor);
    }
  }

  createTask(count:number)
  {
    while(count>0)
    {
      let newTask = {};
      let processSize = this.taskArray.length;
      newTask={
        taskId:processSize,
        duration:5
      };
      this.taskArray.push(newTask);
      count--;
    }
  }

  roundRobin(reset=false)
  {
    console.log(this.processorArray);
    if(reset==true)
    {
      this.taskArray=[];
    }
    // this.createTask(5);
    let processorArraySize = this.processorArray.length;
    // console.log(processorArraySize);
    this.taskArray.forEach((e,i)=>{
      let location = i%processorArraySize;
      // console.log(location);
      let obj = this.processorArray[location];
      obj.tasks.push(e);
      // console.log(obj);
      
      this.processorArray[location]=obj;
      // console.log(this.processorArray[location]);
    });
    this.taskArray=[];

  }

  

}
