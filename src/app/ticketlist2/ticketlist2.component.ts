import { Component, OnInit } from '@angular/core';
import { JiraService } from '../services/jira.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Alert } from '../../../node_modules/@types/selenium-webdriver';
import { moment } from '../../../node_modules/ngx-bootstrap/chronos/test/chain';
import * as moment2 from 'moment';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-ticketlist2',
  templateUrl: './ticketlist2.component.html',
  styleUrls: ['./ticketlist2.component.css']
})
export class Ticketlist2Component implements OnInit {

  constructor( private jiraService: JiraService,
    private spinner: NgxSpinnerService ) { }
  alldevs: any = [
     
    {
      username: "don.melendez",
      name: "Don Melendez",
      teambrand: "Coral"
    },
    {
      username: "lester.duldulao",
      name: "Lester Duldulao",
      teambrand: "Ladbrokes"
    },
    {
      username: "lunar.cuenca",
      name: "Lunar Cuenca",
      teambrand: "Gala"
    },
    {
      username: "remo.lalata",
      name: "Remo Antonio Lalata",
      teambrand: "Ladbrokes"
    },
    {
      username: "jessica.gunay",
      name: "Jessica Gunay",
      teambrand: "Coral"
    },
    {
      username: "kevin.chavez",
      name: "Kevin Chavez",
      teambrand: "Cashcade"
    },
    {
      username: "francheska.rivano",
      name: "Francheska Rivano",
      teambrand: "Coral"
    },
    {
      username: "emma.bulos",
      name: "Emma Joy Bulos",
      teambrand: "Ladbrokes"
    },
    {
      username: "john.bero",
      name: "John Michael Bero",
      teambrand: "Ladbrokes"
    },
    {
      username: "julie.cabria",
      name: "Julie Cabria",
      teambrand: "Gala"
    },
    {
      username: "arjimson.santiano",
      name: "Arjimson Santiano",
      teambrand: "Gala"
    },
    {
      username: "lloyd.montero",
      name: "Lloyd Montero",
      teambrand: "Cashcade"
    },
    {
      username: "daryl.laraya",
      name: "Daryl Laraya",
      teambrand: "Gala"
    },
    {
      username: "kristine.molina",
      name: "Kristine Molina",
      teambrand: "Cashcade"
    },
    {
      username: "charles.maneja",
      name: "Charles Maneja",
      teambrand: "Ladbrokes"
    }
  ];
  show: boolean = true;
  searchdev: any = [];
  devname: any;
  devusername: any;
  p: number = 1;
  datestart: any; 
  dateend: any;
  exportdata: any = [];
  teambrand: any;

  devFilter: any = { summary: 'CRE-176994 - Premium European Roulette - Game Banner: Dev' };


  downloadFile(data: any) {

    this.exportdata.sort((a, b) => (a.Date > b.Date) ? 1 : -1);
    const replacer = (key, value) => value === null ? 'gfhgfh' : value; // specify how you want to handle null values here
    const header = Object.keys(this.exportdata[0]);    
     let csv = this.exportdata.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
     csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');
    console.log(csv);
    var blob = new Blob([csvArray], {type: 'text/csv' })
    saveAs(blob, "TicketSummaryReport.csv");

  }

  back(){
    console.log('we back');
    this.show = true;
  }

  onValueChange(value: Date): void {
   this.spinner.show();
    this.datestart = moment2(value[0], 'YYYY-MM-DD').format('YYYY-MM-DD');
    this.dateend = moment2(value[1], 'YYYY-MM-DD').format('YYYY-MM-DD');

    this.jiraService.ticketRecords(this.devusername, this.datestart, this.dateend).subscribe((jiradata: any) => {
      if(jiradata.success){
       
        //this.searchdev = 'asd';
        //console.log(this.searchdev);
     //  this.searchdev = jiradata.msg;
        this.searchdev = [];
        this.exportdata = [];

     jiradata.msg.issues.map(element => {
       var exportt = {
          Date: element.fields.duedate,
          TicketID: element.fields.summary,
          Type: this.teambrand,
          DueDate: element.fields.duedate,
          OriginalDueDate: element.fields.duedate,
          EstimatedWorkedTime: element.fields.timetracking.timeSpent,
          Status: element.fields.status.name,
          JiraLink: 'https://jira.egalacoral.com/browse/' + element.key
       }

       this.exportdata.push(exportt);
       this.searchdev.push(element);
     });

     
     

     this.spinner.hide();
       
      }
    })
  }

  ngOnInit() {
  }






  submit(dev){
    this.show = false;
    this.devname = dev.name;
    this.devusername = dev.username;
    this.teambrand = dev.teambrand;
    
  }

  onDateSelect(){
      
    
    }

    // this.dateend = undefined;
    // this.datestart = undefined;
    
  
}
