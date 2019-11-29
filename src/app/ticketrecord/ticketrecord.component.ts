import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import * as saveAs from 'file-saver';
import { JiraService } from '../services/jira.service';
import { elementEventFullName } from '../../../node_modules/@angular/core/src/view';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';
import { isArray } from 'util';

@Component({
  selector: 'app-ticketrecord',
  templateUrl: './ticketrecord.component.html',
  styleUrls: ['./ticketrecord.component.css']
})
export class TicketrecordComponent implements OnInit  {
  devNames: any[] = [];
  alltickets: any;
  alldevs: any = [];
  Devs: any = {};
  showSpinner: boolean = true;
  export: any[] = [];
  Neww: any[] = [];
  Reopenedd: any[] = [];

   date: Date = new Date();
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'yyyy-MM-dd',
        defaultOpen: false
    }
  constructor(
    private jiraService: JiraService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
   // this.spinner.show();
    
   this.insertandgetticket('');


  }

  


  onDateSelect(date){
    this.spinner.show();
    this.alldevs = [];
    var dateformat = moment(date).format('YYYY-MM-DD');

    this.insertandgetticket(dateformat);
  }

  
  downloadFile(data: any) {

    this.alldevs.sort((a, b) => (a.teambrand > b.teambrand) ? 1 : -1);
    const replacer = (key, value) => value === null ? 'gfhgfh' : value; // specify how you want to handle null values here
    const header = Object.keys(this.alldevs[0]);    
     let csv = this.alldevs.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
     csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');
    console.log(csv);
    var blob = new Blob([csvArray], {type: 'text/csv' })
    saveAs(blob, "TicketSummaryReport.csv");

  }



 

  insertandgetticket(date){
    this.spinner.show();
      this.jiraService.getAllticketToday(date).subscribe((jiradata: any) => {
        if(jiradata.success){
          
          this.alldevs = jiradata.msg;
          this.spinner.hide();
          //console.log(jiradata);
        }
      });
      
      
    // }
    // })
  }

  
  


  

}
