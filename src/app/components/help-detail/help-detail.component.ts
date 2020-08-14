import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-help-detail',
  templateUrl: './help-detail.component.html',
  styleUrls: ['./help-detail.component.css']
})
export class HelpDetailComponent implements OnInit {

  topic: string=null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let comp = this.route.snapshot.params.comp;
    this.topic = comp;
    console.log("Value of :comp is", comp);
  }

}
