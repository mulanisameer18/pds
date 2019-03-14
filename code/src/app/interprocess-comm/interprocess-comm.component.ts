import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-interprocess-comm',
  templateUrl: './interprocess-comm.component.html',
  styleUrls: ['./interprocess-comm.component.scss']
})
export class InterprocessCommComponent implements OnInit {
  process = [{
      id: 'p1',
      status: 'idle'
    }, {
      id: 'p2',
      status: 'idle'
    }, {
      id: 'p3',
      status: 'idle'
    },
    {
      id: 'p4',
      status: 'idle'
    }, {
      id: 'p5',
      status: 'idle'
    }
  ];
  processCounter = 0;
  constructor() {}
  sharedResource = {
    counter: 0,
    status: 1,
    semaphore_id: null
  };

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

   async processing(i) {
    this.process[i].status = this.semaphore('lock') === 2 ? 'running' : 'waiting';
    console.log(this.process[i]);
    if (this.process[i].status === 'running') {
      setTimeout(() => {
        this.process[i].status = this.semaphore('release') === 1 ? 'done' : 'running';
        console.log(this.sharedResource.counter);
      }, 5000);
      return true;
    } else {
      this.processCounter++;
      // this.process[i].status = this.semaphore('lock') === 2 ? 'running' : 'waiting';
      setTimeout(() => this.processing(i), 2000 + (this.processCounter * 10));
    }

  }
}
