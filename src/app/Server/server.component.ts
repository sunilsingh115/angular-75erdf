import { Component,OnInit } from '@angular/core';

@Component({
  selector : 'app-server',
  //selector :'[app-server]',
  //selector : '.app-server',
  templateUrl: '../Server/server.component.html',
  styleUrls:['../app.component.css']
})
export class ServerComponent implements OnInit{
  ServerID: number = 10;
  allowNewServer:boolean = false;
  ServerStatus: string ='offline'; 
  constructor(){
    setTimeout(() =>{      
      this.allowNewServer = true;      
    },2000)
  } 
  ngOnInit(){
  }
}
