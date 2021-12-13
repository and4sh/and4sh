import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor()
  {
   // setTimeout( () => {

      //}, 500);
  }
  //interpolacja
  title = 'interpolation';
  sampleObj = {txt : 'from sample object'};
  shortIf = true;
  getTextFromFunction(): string
  {
    return 'from function';
  }

  get textFromPropert(): string
  {
    return 'from propert'
  }

  getAnonymusObject()
  {
    return {
      txt1: 'from anonymus',
      txt2: 'object'
    }
  }
  //change detection
  changeCounter = 0;
  changeDetectionSample()
  {
    this.changeCounter ++;
  }
  //pipe
  pipeSample = 'pipesample upper case from lower'
  currDate(): Date {
    return new Date();
  }
  //questionMark

  questionMarkMakeTest()
  {
    this.classTest = {
      a: "aaaaa",
      b: "bbbb",
      c: "bbbb"
      }
  }
  classTest =
  {
    a: 'nie wypał do obczajenia jak to wykorzystać',
    b: 'null',
    c: ''
  };

  //ngFor
  ngForTest = {
    jeden: '1XXX',
    dwa: '2XXX',
    trzy: '3XXX'
  };
  //eventy kontrolek
  onKeyUp(event: KeyboardEvent)
  {
    const target = event.target as HTMLInputElement
    console.log('wartosc input: ' + target.value);
    this.wayBind = target.value;
  }
  logOnConsole(text: string)
  {
    console.log(text);

  }
  //property binding
  propertBindBool: boolean =  true;
  //2way binding
  //wymaga w app.modules.ts import FormsModule
  public wayBind = 'aaaa';
  //ngif
  dzis = new Date().getDay();
}
