import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  constructor() { }

  exerLogProject: Project = {
    id: 1,
    title: "ExerLog",
    information: "This is an app built in android studio for tracking workouts."
  }

  ngOnInit() {
  }

}
