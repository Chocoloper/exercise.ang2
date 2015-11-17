import { Component, View, bootstrap } from 'angular2/angular2';

@Component({
  selector: 'my-webApp'})
@View({
  templateUrl: 'views/webApp.html'
})
export class WebApp{
  constructor(){
  }
}

bootstrap(WebApp);
