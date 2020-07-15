import { TodoListService } from './todo-list.service';
import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task';
  bcount : any = 1;
  pcount: any = 1;
  currentButton :any;
  paraValue : any;
  constructor(private todo: TodoListService){

  }
  addButton(){
    var to = this.todo;
    var btn = document.createElement("BUTTON");   // Create a <button> element
    var bname;
    btn.innerHTML = "Day "+this.bcount;                   // Insert text
    btn.id = ""+this.bcount;
    document.getElementById("side-menu").appendChild(btn);
    document.getElementById(this.bcount).onclick = function(){
      bname = btn.id;
      console.log(bname);
      document.getElementById("todos").style.visibility = "visible";  
      try {
        for(var i =0; i< to.num[bname].length; i++){
          console.log("from loop" , to.num);
          var para = document.createElement("P");   // Create a <button> element
          // para.innerHTML = ""+to.num.a;                   // Insert text
          para.innerHTML = ""+to.num[btn.id];       
          para.id="para";            // Insert text
          document.getElementById("list").appendChild(para);
          para.style.backgroundColor = "cyan";
          para.style.width = "1cm";

          var del = document.createElement("BUTTON");   // Create a <button> element
          del.innerHTML = "remove";
          document.getElementById("list").appendChild(del);

          var ok = document.createElement("BUTTON");   // Create a <button> element
          ok.innerHTML = "add";
          document.getElementById("list").appendChild(ok);
        } 
      }
      catch (error) {
        var para = document.createElement("P");   // Create a <button> element
          // para.innerHTML = ""+to.num.a;                   // Insert text
          para.innerHTML = "Nothing for this day";                   // Insert text
          para.style.backgroundColor = "cyan";
          para.style.width = "fit-content";
          document.getElementById("list").appendChild(para);
      }
      
    };
    document.getElementById(this.bcount).style.backgroundColor = "red";
    this.currentButton = ""+btn.id;
    this.bcount++;
  }

   openSlideMenu(){
    // document.getElementById('side-menu').style.width = '250px';
    // document.getElementById('main').style.marginLeft = '250px';
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginRight = '250px';
  }

   closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }

  addItems(){
    var task = document.getElementById("todo-name").value;
    console.log("button "+this.currentButton+" "+task);
    this.todo.num[this.currentButton][parseInt(this.currentButton)+1] = task;
    console.log( this.todo.num[this.currentButton][parseInt(this.currentButton)+1]);
    console.log(this.todo.num[this.currentButton][2])
  }
}