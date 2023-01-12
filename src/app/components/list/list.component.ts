import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  lista: string[] = [];
  inputVazio: boolean = false;

  onEnter(value: string){
  
  }

  addTarefa(value: string){

    if(value == ''){
      console.log("input vazio");
      this.inputVazio = true;
    }else{
      this.inputVazio = false;
      this.lista.push(value);
    }
    //console.log(value)
  }

  onDelete(index: number){
    this.lista.splice(index, 1);
    //console.log('index: '+ index);
  }
}
