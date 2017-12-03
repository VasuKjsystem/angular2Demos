import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
