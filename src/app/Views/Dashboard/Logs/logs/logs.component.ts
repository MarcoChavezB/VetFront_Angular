import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserServiceService } from '../../../../Services/UserService/user-service.service';
import { log } from '../../../../Models/Logs';
import { UsershowComponent } from '../../../../Components/Usershow/usershow/usershow.component';
@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [CommonModule, UsershowComponent],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css'
})
export class LogsComponent {
  objectProd: any = {}
  mostrarcomp: boolean = false
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

    getuser(id: number){
      this.userser.getuserid(id).subscribe(
        (data) => {
          this.objectProd = data;
          this.mostrarcomp = true;
        },
        (error) => {
          console.log(error);
        }
      );
    }

    closeModify() {
      this.mostrarcomp = false;
    }
}
