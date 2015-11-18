import { Component, View, bootstrap } from 'angular2/angular2';

@Component({
  selector: 'my-webApp',
  templateUrl: 'views/webApp.html'
})
export class WebApp{
  constructor(){
  }
}

bootstrap(WebApp);
