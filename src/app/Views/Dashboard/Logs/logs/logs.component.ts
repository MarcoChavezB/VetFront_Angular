import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserServiceService } from '../../../../Services/UserService/user-service.service';
import { log } from '../../../../Models/Logs';
@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css'
})
export class LogsComponent {

  logs: log[] = []

  constructor(
    private readonly userser: UserServiceService,
    ) {}

    ngOnInit(): void {
      this.getlogs();
    }
    existlog: boolean = true;

    getlogs() {
      this.existlog = true;
      this.userser.getlogs().subscribe(
        (data) => {
          this.logs = data.data;
          if(this.logs.length == 0){
            this.existlog = false;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
}
