import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-mutual-exclusion',
  templateUrl: './mutual-exclusion.component.html',
  styleUrls: ['./mutual-exclusion.component.scss']
})
export class MutualExclusionComponent implements OnInit {
  process = [{
      id: 'p1',
      status: 'idle',
      timeOut: 5000
    }, {
      id: 'p2',
      status: 'idle',
      timeOut: 5000
    }, {
      id: 'p3',
      status: 'idle',
      timeOut: 5000
    },
    {
      id: 'p4',
      status: 'idle',
      timeOut: 5000
    }, {
      id: 'p5',
      status: 'idle',
      timeOut: 5000
    }
  ];
  processQueue = [];
  processCounter = 0;
  constructor() {}
  sharedResource = {
    counter: 0,
    status: 1,
    semaphore_id: null
  };

  addtoQ(i) {
    this.processQueue.push(i);
    // console.table(this.processQueue);
    // if (this.processQueue.length === 1) {
      this.processing(i);
    // }
  }

  semaphore(req: string) {
    if (this.sharedResource.status === 1 && req === 'lock') {
      this.sharedResource.counter++;
      this.sharedResource.status = 0;
      return 2;
    } else {
      if (this.sharedResource.status === 0 && req === 'release') {
        this.sharedResource.status = 1;
        return 1;
      } else {
        return 0;
      }
    }
  }

  ngOnInit() {}
/* 
  async processing(i) {
    console.log(this.processCounter);
    // let i = this.processCounter;
    console.table(this.process[i]);
    if (this.process[i].status === 'idle') {
      this.process[i].status = this.semaphore('lock') === 2 ? 'running' : 'waiting';
      console.log(this.process[i]);
    }
    if (this.process[this.processCounter].status === 'running') {
      setTimeout(() => {
        this.process[this.processCounter].status = this.semaphore('release') === 1 ? 'done' : 'running';
        console.log(this.sharedResource.counter);
        this.processCounter++;
      }, this.process[this.processCounter].timeOut);
    } else {
      this.process[this.processCounter].status = this.semaphore('lock') === 2 ? 'running' : 'waiting';
    }
  } */
  async processing(i) {
    console.log(this.processCounter);
    // let i = this.processCounter;
    console.table(this.process[i]);
    if (this.process[i].status === 'idle') {
      this.process[i].status = this.semaphore('lock') === 2 ? 'running' : 'waiting';
      console.log(this.process[i]);
    }
    if (this.process[this.processQueue[this.processCounter]].status === 'running') {
      setTimeout(() => {
        this.process[this.processQueue[this.processCounter]].status = this.semaphore('release') === 1 ? 'done' : 'running';
        console.log(this.sharedResource.counter);
        this.processCounter++;
        this.processing(this.processQueue[this.processCounter]);
      }, this.process[this.processQueue[this.processCounter]].timeOut);
    } else {
      this.process[this.processQueue[this.processCounter]].status = this.semaphore('lock') === 2 ? 'running' : 'waiting';
    }
  }
}
