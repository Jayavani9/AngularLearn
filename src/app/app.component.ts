import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
  public name = "Angular Learning !!"
  public topic = "Data Binding"

  public val = "";

  /*
  sum = (x: number, y: number): number => {
    return x + y;
  }
  
  ans = this.sum(9,8);
  */
  public imgsrc = "/assets/fl.jpeg"

  onClick(){
    document.write("Thank You for clicking !!");
  }
}

