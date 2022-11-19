import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../user.service";
import {Produce} from "../../produce";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  produce: Produce[] = [];
  selected: number[] = [];

  error?: string;

  @ViewChild('requestForm') requestForm: NgForm;

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.requestForm = {} as NgForm;
  }

  onSubmit(): void {
    const distId: number = Number(this.route.snapshot.paramMap.get('id'));

    const produce: Array<{ produceId: number; quantity: number; }> = this.selected.map(produceId => ({
      produceId,
      quantity: 1
    }));

    this.userService.postConsumerRequest(distId, produce).subscribe(
      data => {
        // ...
      },
      err => {
        this.error = err.error.message;
      }
    );
  }

  onCheckboxChange(e: any, id: number): void {
    if (this.requestForm.submitted) {
      this.error = '';
      this.requestForm.resetForm();
    }
    const {checked} = e.target;
    if (checked) {
      this.selected.push(id);
    } else {
      this.selected = this.selected.filter(item => item !== id);
    }
  }

  ngOnInit(): void {
    this.userService.getProduce().subscribe(
      data => {
        this.produce = data;
      },
      err => {
        this.error = `Server error: "${err.statusText}"`;
      }
    );
  }
}
