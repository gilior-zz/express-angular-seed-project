import './polyfills'
import {AppModuleNgFactory} from './app.module.ngfactory'
import {platformBrowser} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
enableProdMode();
platformBrowser().bootstrapModule(AppModuleNgFactory)