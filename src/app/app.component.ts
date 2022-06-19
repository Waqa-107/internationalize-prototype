import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'internationalize-prototype';
  supportedLanguages = ['local-en-US', 'local-es-US', 'loacl-es-HN'];

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(this.supportedLanguages);
    this.translateService.setDefaultLang('local-en-US');
  }
}
