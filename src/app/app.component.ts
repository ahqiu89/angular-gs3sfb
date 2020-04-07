import { Component } from "@angular/core";
import { WorkflowService } from "./services/workflow.service";
import { Observable } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private _wf: WorkflowService) {
    console.log("render");
  }

  name = "Angular";
  workflows: any;
  employees = [];

  ngOnInit() {
    // this._wf.getWorkflows().subscribe(data => {
    //   this.workflows = data;
    //   console.log('data', data);
    // });

      this._wf.getEmployees().subscribe(data => {
      this.employees = data;
      console.log('data', data);
    });
  }
}
