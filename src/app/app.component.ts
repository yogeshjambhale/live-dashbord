import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'live-dashbord';
  gaugeType1 = "semi" as const;
  gaugeValue1 = 240.32;
  gaugeLabel1 = "Voltage(V)";
  gaugeSize1 = 120

  gaugeType2 = "semi" as const;
  gaugeValue2 = 11.07;
  gaugeLabel2 = "Current(A)";
  gaugeSize2 = 120

  gaugeType3 = "semi" as const;
  gaugeValue3 = 0.17;
  gaugeLabel3 = "Power(kW)";
  gaugeSize3 = 120

  gaugeType4 = "semi" as const;
  gaugeValue4 = 30.04;
  gaugeLabel4 = "Power Factor";
  gaugeSize4 = 120

  gaugeType5 = "semi" as const;
  gaugeValue5 = 50.6;
  gaugeLabel5 = "Frequency(hz)";
  gaugeSize5 = 120

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(LoginComponent);
    
  }
}
