webpackJsonp([34],{"+XFb":function(e,n,o){var t={"./advanced/multi-step-form/config.module":["rHp1",31,0],"./advanced/repeating-section/config.module":["AR2q",10,0],"./advanced/tabs/config.module":["+vh6",30,0],"./bootstrap-formly/select/config.module":["ktJe",29,0],"./bootstrap-formly/table-rows/config.module":["my9W",28,0],"./bootstrap-specific/advanced-layout/config.module":["NTat",27,0],"./bootstrap-specific/bootstrap-horizontal/config.module":["e26u",9,0],"./bootstrap-specific/input-add-ons/config.module":["So4c",26,0],"./examples/examples.module":["l77r",32],"./field-options/default-value/config.module":["FHty",25,0],"./field-options/expression-properties/config.module":["GHB2",24,0],"./field-options/hide-fields/config.module":["FIJC",23,0],"./field-options/model-options/config.module":["ELY8",22,0],"./form-options/form-state/config.module":["vLBn",21,0],"./form-options/reset-model/config.module":["k7rY",20,0],"./guides/guides.module":["HbOQ",4],"./introduction/config.module":["atEk",8,0],"./other/advanced-layout-flex/config.module":["FvFU",3,0],"./other/button/config.module":["3BOJ",7,0],"./other/cascaded-select/config.module":["n7lB",19,0],"./other/input-file/config.module":["BRIu",2,0],"./other/json-powered/config.module":["1IF6",1,0],"./other/nested-formly-forms/config.module":["e1hf",6,0],"./other/observable-select/config.module":["wCG0",5,0],"./validation/built-in-validations/config.module":["Rpnl",18,0],"./validation/custom-validation/config.module":["tRlj",17,0],"./validation/disable-submit-button/config.module":["1+WH",16,0],"./validation/force-show-error/config.module":["aKWz",15,0],"./validation/matching-two-fields/config.module":["i9vL",14,0],"./validation/toggle-required/config.module":["YHGE",13,0],"./validation/unique-value-async-validation/config.module":["JgBI",12,0],"./validation/validation-message/config.module":["K+8f",11,0]};function i(e){var n=t[e];return n?Promise.all(n.slice(1).map(o.e)).then(function(){return o(n[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}i.keys=function(){return Object.keys(t)},i.id="+XFb",e.exports=i},"//hz":function(e,n){e.exports=".docs-header-background {\n  overflow: hidden; }\n\n.docs-header-section {\n  text-align: center;\n  padding-top: 10px; }\n\n.docs-header-headline h1 {\n  font-size: 56px;\n  font-weight: 300;\n  line-height: 56px;\n  margin: 15px 5px; }\n\n.docs-header-headline h2 {\n  font-size: 18px;\n  font-weight: 300;\n  line-height: 28px;\n  margin: 15px 0 25px 0; }\n\n.docs-homepage-promo {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 16px; }\n\n.docs-homepage-promo h2 {\n    font-size: 25px;\n    font-weight: 400;\n    margin: 0 0 16px 0;\n    padding: 0; }\n\n.docs-homepage-promo p {\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 28px;\n    margin: 0 0 24px 0;\n    padding: 0; }\n\n.docs-homepage-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 920px;\n  margin: 10px 0; }\n\n.docs-homepage-row .docs-svg-image {\n  max-width: 90%; }\n\n.docs-homepage-reverse-row {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse; }\n\n.docs-header-start,\n.docs-homepage-bottom-start {\n  text-align: center;\n  margin: 60px 0; }\n\n.docs-homepage-promo-img,\n.docs-homepage-promo-desc {\n  width: 50%; }\n\n.docs-homepage-promo-img {\n  text-align: center; }\n\n.docs-homepage-promo-desc {\n  line-height: 2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n/**\n  * Rules for when the device is detected to be a small screen.\n  */\n\n@media (max-width: 720px) {\n  .docs-header-section {\n    padding-top: 15px; }\n  .docs-header-start,\n  .docs-homepage-bottom-start {\n    margin: 15px 0; }\n  .docs-homepage-row {\n    margin: 15px 0; } }\n"},0:function(e,n,o){e.exports=o("s7k+")},"1RlD":function(e,n){e.exports=":host {\n  display: block;\n  padding: 20px 0; }\n\n.docs-example-viewer-wrapper h3 {\n  margin-top: 10px; }\n\n.docs-example-viewer-title {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 8px 20px; }\n\n.docs-example-viewer-title-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.docs-example-source-copy {\n  position: absolute;\n  top: 8px;\n  display: none; }\n\n.docs-example-source-wrapper:hover .docs-example-source-copy {\n  display: inline-block; }\n\n.docs-example-source {\n  min-height: 150px; }\n\n.docs-example-viewer-body {\n  padding: 30px; }\n"},"G/7d":function(e,n){e.exports='<header class="docs-header-background">\n  <div class="docs-header-section">\n    <div class="docs-header-headline">\n      <h1 class="mat-h1"> Angular Formly</h1>\n      <h2>Dynamic Forms for ANGULAR</h2>\n    </div>\n    <div class="docs-header-start">\n      <a mat-raised-button class="docs-button" routerLink="/guide/getting-started">Get started</a>\n    </div>\n  </div>\n</header>\n\n<div class="docs-homepage-promo">\n  <div class="docs-homepage-row">\n    <div class="docs-homepage-promo-img"></div>\n    <div class="docs-homepage-promo-desc">\n      <h2>What is Formly</h2>\n      <p>\n        `ngx-formly` is an Angular module which has a Components to help customize and render JavaScript/JSON configured forms. The\n        `formly-form` Component and the `FormlyConfig` service are very powerful and bring unmatched maintainability to your applications\n        forms.\n      </p>\n    </div>\n  </div>\n  <div class="docs-homepage-row docs-homepage-reverse-row">\n    <div class="docs-homepage-promo-img"></div>\n    <div class="docs-homepage-promo-desc">\n      <h2>Simpler than cake</h2>\n      <p>\n        Do it yourself templates through `formlyConfig` service, and fully customizable for when you need to stay on-brand or just\n        have extra field type.\n      </p>\n    </div>\n  </div>\n  <div class="docs-homepage-row">\n    <div class="docs-homepage-promo-img"></div>\n    <div class="docs-homepage-promo-desc">\n      <h2>One developer, many frameworks</h2>\n      <p>\n        A single Web development team is now a cross-framework application powerhouse. Focus more energy on building better experiences,\n      and less energy on making experiences consistent across development teams and frameworks.\n      </p>\n    </div>\n  </div>\n  <div class="docs-homepage-row docs-homepage-reverse-row">\n    <div class="docs-homepage-promo-img"></div>\n    <div class="docs-homepage-promo-desc">\n      <h2>Optimized for Angular</h2>\n      <p>\n        Built by members of Amazing Angular Community to integrate seamlessly with Angular.\n      </p>\n    </div>\n  </div>\n  <div class="docs-homepage-bottom-start">\n    <a mat-raised-button class="docs-button" routerLink="/guide/getting-started">Get started</a>\n  </div>\n</div>\n\n\x3c!-- <app-footer></app-footer> --\x3e\n'},"M+ng":function(e,n){e.exports='<div class="docs-example-viewer-wrapper">\n  <div class="docs-example-viewer-title">\n    <div class="docs-example-viewer-title-spacer">{{ title }}</div>\n    <button mat-icon-button type="button" (click)="toggleSourceView()" [matTooltip]="\'View source\'">\n      <mat-icon>\n        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fit="" preserveAspectRatio="xMidYMid meet"\n          focusable="false">\n          <path fill="none" d="M0 0h24v24H0V0z"></path>\n          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>\n        </svg>\n      </mat-icon>\n    </button>\n  </div>\n\n  <div class="docs-example-viewer-source" *ngIf="showSource">\n    <mat-tab-group>\n      <mat-tab *ngFor="let f of example" [label]="f.file">\n        <div class="docs-example-source-wrapper">\n          <button mat-icon-button type="button" class="docs-example-source-copy" title="Copy example source" aria-label="Copy example source to clipboard"\n            (click)="copySource(textContent)">\n            <mat-icon class="fa fa-copy"></mat-icon>\n          </button>\n          <pre class="docs-example-source" [innerHtml]="f.content" #textContent></pre>\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n\n  <div class="docs-example-viewer-body">\n    <div class="alert alert-info" *ngIf="description" [innerHtml]="description"></div>\n    <ng-template #demo></ng-template>\n\n    <div *ngIf="demoComponentRef">\n      <h3>Form Data</h3>\n      <pre [style.display]="\'none\'">{{ model }}</pre>\n      <pre #modelPreview></pre>\n    </div>\n  </div>\n</div>\n'},gI3M:function(e,n){e.exports='<ngx-loading-bar [color]="\'#fafafa\'"></ngx-loading-bar>\n<mat-sidenav-container fullscreen>\n  <mat-toolbar color="primary" class="mat-elevation-z6">\n    <a mat-button routerLink="">\n      <img style="height: 26px; margin: 0 4px 3px 0;" src="https://material.angular.io/assets/img/homepage/angular-white-transparent.svg" alt="">\n      FORMLY\n    </a>\n\n    <a mat-button routerLink="guide">Guides</a>\n    <a mat-button routerLink="examples">Examples</a>\n\n    <span class="spacer" [style.flex]="\'1 1 auto\'"></span>\n\n    <a mat-button href="https://github.com/formly-js/ngx-formly">\n      <img style="height: 26px;" src="https://material.angular.io/assets/img/homepage/github-circle-white-transparent.svg" alt="">\n      GitHub\n    </a>\n  </mat-toolbar>\n\n  <router-outlet></router-outlet>\n</mat-sidenav-container>\n'},rNrE:function(e,n,o){"use strict";var t=o("TToO"),i=o("WT6e"),a=o("Xjw4"),r=o("7u3n"),s=o("kJ/S"),d=o("j06o"),l=o("z7Rf"),c=o("gsbp"),p=o("sqmn"),m=o("6GVX"),u=function(){function e(){}return e.prototype.copyText=function(e){this.createTextareaAndSelect(e);var n=document.execCommand("copy");return this.removeFake(),n},e.prototype.createTextareaAndSelect=function(e){this.textarea=document.createElement("textarea"),this.textarea.style.fontSize="12pt",this.textarea.classList.add("cdk-visually-hidden");var n=window.pageYOffset||document.documentElement.scrollTop;this.textarea.style.top=n+"px",this.textarea.setAttribute("readonly",""),this.textarea.value=e,document.body.appendChild(this.textarea),this.textarea.select(),this.textarea.setSelectionRange(0,this.textarea.value.length)},e.prototype.removeFake=function(){this.textarea&&(document.body.removeChild(this.textarea),this.textarea=null)},e=t.b([Object(i.B)()],e)}(),g=o("EvXz"),f=o.n(g),h=function(){function e(e,n){this.copier=e,this.componentFactoryResolver=n,this.showSource=!1}return Object.defineProperty(e.prototype,"model",{get:function(){var e=JSON.stringify(this.demoComponentRef.instance.model);if(this._prevModel!==e&&this.modelPreviewRef&&this.modelPreviewRef.nativeElement){this._prevModel=e;var n=new f.a(this.demoComponentRef.instance.model,5,{hoverPreviewEnabled:!0});this.modelPreviewRef.nativeElement.innerHTML="",this.modelPreviewRef.nativeElement.appendChild(n.render())}return this.demoComponentRef.instance.model},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){var e=this.componentFactoryResolver.resolveComponentFactory(this.component);this.demoComponentRef=this.demoRef.createComponent(e)},e.prototype.ngOnDestroy=function(){this.demoComponentRef&&this.demoComponentRef.destroy()},e.prototype.toggleSourceView=function(){this.showSource=!this.showSource},e.prototype.copySource=function(e){this.copier.copyText(e.innerText)},t.b([Object(i.E)(),t.d("design:type",Object)],e.prototype,"title",void 0),t.b([Object(i.E)(),t.d("design:type",Object)],e.prototype,"description",void 0),t.b([Object(i.E)(),t.d("design:type",Object)],e.prototype,"component",void 0),t.b([Object(i.E)(),t.d("design:type",Array)],e.prototype,"example",void 0),t.b([Object(i._10)("demo",{read:i._12}),t.d("design:type",i._12)],e.prototype,"demoRef",void 0),t.b([Object(i._10)("modelPreview"),t.d("design:type",i.u)],e.prototype,"modelPreviewRef",void 0),e=t.b([Object(i.n)({selector:"formly-example-viewer",template:o("M+ng"),styles:[o("1RlD")]}),t.d("design:paramtypes",[u,i.p])],e)}(),x=o("bfOx"),v=function(){function e(e){this.router=e}return e=t.b([Object(i.n)({selector:"formly-examples-viewer",template:'\n    <ng-container *ngIf="router.data | async as data">\n      <formly-example-viewer *ngFor="let example of data.examples"\n        [title]="example.title"\n        [description]="example.description"\n        [component]="example.component"\n        [example]="example.files">\n      </formly-example-viewer>\n    </ng-container>\n  '}),t.d("design:paramtypes",[x.a])],e)}(),b=function(){function e(){}return e=t.b([Object(i.J)({imports:[a.b,r.a,m.a,l.a,c.a],exports:[a.b,s.a,d.a,l.a,c.a,p.a,m.a,v],declarations:[h,v],providers:[u]})],e)}();o.d(n,"b",function(){return b}),o.d(n,"a",function(){return v})},"s7k+":function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=o("WT6e"),i=o("4PVY"),a=o("TToO"),r=o("OE0E"),s=o("Bj4q"),d=o("bfOx"),l=o("3Ui/"),c=o("rNrE"),p=function(){function e(){}return e=a.b([Object(t.n)({selector:"formly-app",template:o("gI3M")})],e)}(),m=function(){function e(){}return e=a.b([Object(t.n)({selector:"formly-app-home",template:o("G/7d"),styles:[o("//hz")]})],e)}(),u=function(){function e(){}return e=a.b([Object(t.J)({declarations:[p,m],imports:[r.a,s.a,c.b,l.a,d.g.forRoot([{path:"",component:m},{path:"guide",loadChildren:"./guides/guides.module#GuidesModule"},{path:"examples",loadChildren:"./examples/examples.module#ExamplesModule"}])],bootstrap:[p]})],e)}();Object(t._16)(),Object(i.a)().bootstrapModule(u).catch(function(e){return console.log(e)})}},[0]);