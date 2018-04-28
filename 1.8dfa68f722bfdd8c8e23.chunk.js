webpackJsonp([1],{"+935":function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button">Submit</button>\n  </formly-form>\n</form>\n'},"1IF6":function(n,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=a("TToO"),p=a("WT6e"),o=a("bfOx"),c=a("rNrE"),e=a("Xjw4"),u=a("ItHS"),l=a("7DMc"),i=a("/bvZ"),k=a("5Hax"),r=a("SALZ"),m=function(){function n(n){this.http=n}return n.prototype.getUserData=function(){return Object(r.a)([this.getUser(),this.getFields()])},n.prototype.getUser=function(){return this.http.get("assets/json-powered/user.json")},n.prototype.getFields=function(){return this.http.get("assets/json-powered/user-form.json")},n=t.b([Object(p.B)(),t.d("design:paramtypes",[u.a])],n)}(),g=function(){function n(n){var s=this;this.userService=n,this.form=new l.d({}),this.options={},this.userService.getUserData().subscribe(function(n){var a=n[0],t=n[1];s.model=a,s.fields=t})}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n=t.b([Object(p.n)({selector:"formly-app-example",template:a("+935")}),t.d("design:paramtypes",[m])],n)}(),f=function(){function n(){}return n=t.b([Object(p.J)({imports:[e.b,u.b,l.h,k.a,i.e.forRoot()],declarations:[g],providers:[m]})],n)}();a.d(s,"ConfigModule",function(){return d});var d=function(){function n(){}return n=t.b([Object(p.J)({imports:[c.b,f,o.g.forChild([{path:"",component:c.a,data:{examples:[{title:"JSON powered",description:"\n              This is an example of powering a form strictly by JSON. The common use case for this\n              would be to persist the form configuration in the database and then send the configuration\n              up to power the form. Notice that you can still use most features like <code>expressionProperties</code>\n              and <code>validators</code> even in a string form.\n            ",component:g,files:[{file:"app.component.html",content:a("OdyS")},{file:"app.component.ts",content:a("cwit")},{file:"user.service.ts",content:a("89i0")},{file:"user.json",content:a("BSWA")},{file:"user-form.json",content:a("kOVQ")},{file:"app.module.ts",content:a("XW7k")}]}]}}])]})],n)}()},"89i0":function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Injectable <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> HttpClient <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common/http\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Observable <span class="token punctuation" >}</span> from <span class="token string" >\'rxjs/Observable\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> forkJoin <span class="token punctuation" >}</span> from <span class="token string" >\'rxjs/observable/forkJoin\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Injectable</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >UserService</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >constructor</span><span class="token punctuation" >(</span><span class="token keyword" >private</span> http<span class="token punctuation" >:</span> HttpClient<span class="token punctuation" >)</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span>\n\n  <span class="token function" >getUserData</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >:</span> Observable<span class="token operator" >&lt;</span><span class="token keyword" >any</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token function" >forkJoin</span><span class="token punctuation" >(</span><span class="token punctuation" >[</span><span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >getUser</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >getFields</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >]</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n\n  <span class="token function" >getUser</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>http<span class="token punctuation" >.</span><span class="token keyword" >get</span><span class="token operator" >&lt;</span><span class="token punctuation" >{</span> firstName<span class="token punctuation" >:</span> <span class="token keyword" >string</span><span class="token punctuation" >,</span> lastName<span class="token punctuation" >:</span> <span class="token keyword" >string</span> <span class="token punctuation" >}</span><span class="token operator" >></span><span class="token punctuation" >(</span><span class="token string" >\'assets/json-powered/user.json\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n\n  <span class="token function" >getFields</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>http<span class="token punctuation" >.</span><span class="token keyword" >get</span><span class="token operator" >&lt;</span>FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token operator" >></span><span class="token punctuation" >(</span><span class="token string" >\'assets/json-powered/user-form.json\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},BSWA:function(n,s){n.exports='<span class="token punctuation" >{</span>\n  <span class="token string" >"firstName"</span><span class="token punctuation" >:</span> <span class="token string" >"Joan"</span><span class="token punctuation" >,</span>\n  <span class="token string" >"lastName"</span><span class="token punctuation" >:</span> <span class="token string" >"of Arc"</span>\n<span class="token punctuation" >}</span>\n'},OdyS:function(n,s){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},XW7k:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> HttpClientModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common/http\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> UserService <span class="token punctuation" >}</span> from <span class="token string" >\'./user.service\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    HttpClientModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  providers<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>UserService<span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},cwit:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> UserService <span class="token punctuation" >}</span> from <span class="token string" >\'./user.service\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  model<span class="token punctuation" >;</span>\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token keyword" >constructor</span><span class="token punctuation" >(</span><span class="token keyword" >private</span> userService<span class="token punctuation" >:</span> UserService<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>userService<span class="token punctuation" >.</span><span class="token function" >getUserData</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >.</span><span class="token function" >subscribe</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span><span class="token punctuation" >[</span>model<span class="token punctuation" >,</span> fields<span class="token punctuation" >]</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span>model <span class="token operator" >=</span> model<span class="token punctuation" >;</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span>fields <span class="token operator" >=</span> fields<span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>form<span class="token punctuation" >.</span>valid<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},kOVQ:function(n,s){n.exports='<span class="token punctuation" >[</span>\n  <span class="token punctuation" >{</span>\n    <span class="token string" >"key"</span><span class="token punctuation" >:</span> <span class="token string" >"firstName"</span><span class="token punctuation" >,</span>\n    <span class="token string" >"type"</span><span class="token punctuation" >:</span> <span class="token string" >"input"</span><span class="token punctuation" >,</span>\n    <span class="token string" >"templateOptions"</span><span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n      <span class="token string" >"label"</span><span class="token punctuation" >:</span> <span class="token string" >"First Name"</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span>\n    <span class="token string" >"key"</span><span class="token punctuation" >:</span> <span class="token string" >"lastName"</span><span class="token punctuation" >,</span>\n    <span class="token string" >"type"</span><span class="token punctuation" >:</span> <span class="token string" >"input"</span><span class="token punctuation" >,</span>\n    <span class="token string" >"templateOptions"</span><span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n      <span class="token string" >"label"</span><span class="token punctuation" >:</span> <span class="token string" >"Last Name"</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span>\n    <span class="token string" >"key"</span><span class="token punctuation" >:</span> <span class="token string" >"mac"</span><span class="token punctuation" >,</span>\n    <span class="token string" >"type"</span><span class="token punctuation" >:</span> <span class="token string" >"input"</span><span class="token punctuation" >,</span>\n    <span class="token string" >"templateOptions"</span><span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n      <span class="token string" >"label"</span><span class="token punctuation" >:</span> <span class="token string" >"Mac Address"</span><span class="token punctuation" >,</span>\n      <span class="token string" >"pattern"</span><span class="token punctuation" >:</span> <span class="token string" >"([0-9A-F]{2}[:-]){5}([0-9A-F]{2})"</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span>\n    <span class="token string" >"key"</span><span class="token punctuation" >:</span> <span class="token string" >"color"</span><span class="token punctuation" >,</span>\n    <span class="token string" >"type"</span><span class="token punctuation" >:</span> <span class="token string" >"radio"</span><span class="token punctuation" >,</span>\n    <span class="token string" >"templateOptions"</span><span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n      <span class="token string" >"label"</span><span class="token punctuation" >:</span> <span class="token string" >"Color Preference (try this out)"</span><span class="token punctuation" >,</span>\n      <span class="token string" >"options"</span><span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span>\n          <span class="token string" >"value"</span><span class="token punctuation" >:</span> <span class="token string" >"No Preference"</span><span class="token punctuation" >,</span>\n          <span class="token string" >"key"</span><span class="token punctuation" >:</span> <span class="token keyword" >null</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span>\n          <span class="token string" >"value"</span><span class="token punctuation" >:</span> <span class="token string" >"Green"</span><span class="token punctuation" >,</span>\n          <span class="token string" >"key"</span><span class="token punctuation" >:</span> <span class="token string" >"green"</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span>\n          <span class="token string" >"value"</span><span class="token punctuation" >:</span> <span class="token string" >"Blue"</span><span class="token punctuation" >,</span>\n          <span class="token string" >"key"</span><span class="token punctuation" >:</span> <span class="token string" >"blue"</span>\n        <span class="token punctuation" >}</span>\n      <span class="token punctuation" >]</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span>\n    <span class="token string" >"key"</span><span class="token punctuation" >:</span> <span class="token string" >"reason"</span><span class="token punctuation" >,</span>\n    <span class="token string" >"type"</span><span class="token punctuation" >:</span> <span class="token string" >"textarea"</span><span class="token punctuation" >,</span>\n    <span class="token string" >"templateOptions"</span><span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n      <span class="token string" >"label"</span><span class="token punctuation" >:</span> <span class="token string" >"Why?"</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token string" >"expressionProperties"</span><span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n      <span class="token string" >"templateOptions.label"</span><span class="token punctuation" >:</span> <span class="token string" >"\'Why did you choose \' + model.color + \'?\'"</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token string" >"hideExpression"</span><span class="token punctuation" >:</span> <span class="token string" >"!model.color"</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >]</span>\n'}});