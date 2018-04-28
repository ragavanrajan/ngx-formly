webpackJsonp([9],{"0Tib":function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model<span class="token punctuation" >:</span> <span class="token keyword" >any</span> <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'email\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      wrappers<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token string" >\'form-field-horizontal\'</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Email\'</span><span class="token punctuation" >,</span>\n        type<span class="token punctuation" >:</span> <span class="token string" >\'email\'</span><span class="token punctuation" >,</span>\n        placeholder<span class="token punctuation" >:</span> <span class="token string" >\'Formly is terrific!\'</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'password\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      wrappers<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token string" >\'form-field-horizontal\'</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Password\'</span><span class="token punctuation" >,</span>\n        type<span class="token punctuation" >:</span> <span class="token string" >\'password\'</span><span class="token punctuation" >,</span>\n        placeholder<span class="token punctuation" >:</span> <span class="token string" >\'Formly is terrific!\'</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},"2X8n":function(n,s){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span> <span class="token attr-name" >[disabled]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>!form.valid<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},"6yoJ":function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component<span class="token punctuation" >,</span> ViewChild<span class="token punctuation" >,</span> ViewContainerRef <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FieldWrapper <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-horizontal-wrapper\'</span><span class="token punctuation" >,</span>\n  template<span class="token punctuation" >:</span> `\n    <span class="token operator" >&lt;</span>div <span class="token keyword" >class</span><span class="token operator" >=</span><span class="token string" >"form-group row"</span><span class="token operator" >></span>\n      <span class="token operator" >&lt;</span>label <span class="token punctuation" >[</span>attr<span class="token punctuation" >.</span><span class="token keyword" >for</span><span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"id"</span> <span class="token keyword" >class</span><span class="token operator" >=</span><span class="token string" >"col-sm-2 col-form-label"</span> <span class="token operator" >*</span>ngIf<span class="token operator" >=</span><span class="token string" >"to.label"</span><span class="token operator" >></span>\n        <span class="token punctuation" >{</span><span class="token punctuation" >{</span> to<span class="token punctuation" >.</span>label <span class="token punctuation" >}</span><span class="token punctuation" >}</span>\n        <span class="token operator" >&lt;</span>ng<span class="token operator" >-</span>container <span class="token operator" >*</span>ngIf<span class="token operator" >=</span><span class="token string" >"to.required &amp;&amp; to.hideRequiredMarker !== true"</span><span class="token operator" >></span><span class="token operator" >*</span><span class="token operator" >&lt;</span><span class="token operator" >/</span>ng<span class="token operator" >-</span>container<span class="token operator" >></span>\n      <span class="token operator" >&lt;</span><span class="token operator" >/</span>label<span class="token operator" >></span>\n      <span class="token operator" >&lt;</span>div <span class="token keyword" >class</span><span class="token operator" >=</span><span class="token string" >"col-sm-10"</span><span class="token operator" >></span>\n        <span class="token operator" >&lt;</span>ng<span class="token operator" >-</span>template #fieldComponent<span class="token operator" >></span><span class="token operator" >&lt;</span><span class="token operator" >/</span>ng<span class="token operator" >-</span>template<span class="token operator" >></span>\n      <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n    <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n  `<span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >FormlyHorizontalWrapper</span> <span class="token keyword" >extends</span> <span class="token class-name" >FieldWrapper</span> <span class="token punctuation" >{</span>\n  @<span class="token function" >ViewChild</span><span class="token punctuation" >(</span><span class="token string" >\'fieldComponent\'</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span> read<span class="token punctuation" >:</span> ViewContainerRef <span class="token punctuation" >}</span><span class="token punctuation" >)</span> fieldComponent<span class="token punctuation" >:</span> ViewContainerRef<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n'},e26u:function(n,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=a("TToO"),p=a("WT6e"),o=a("bfOx"),e=a("rNrE"),c=a("Xjw4"),l=a("7DMc"),u=a("/bvZ"),i=a("5Hax"),r=function(){function n(){this.form=new l.d({}),this.model={},this.options={},this.fields=[{key:"email",type:"input",wrappers:["form-field-horizontal"],templateOptions:{label:"Email",type:"email",placeholder:"Formly is terrific!",required:!0}},{key:"password",type:"input",wrappers:["form-field-horizontal"],templateOptions:{label:"Password",type:"password",placeholder:"Formly is terrific!",required:!0}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n=t.b([Object(p.n)({selector:"formly-app-example",template:a("j/3a")})],n)}(),k=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return t.c(s,n),t.b([Object(p._10)("fieldComponent",{read:p._12}),t.d("design:type",p._12)],s.prototype,"fieldComponent",void 0),s=t.b([Object(p.n)({selector:"formly-horizontal-wrapper",template:'\n    <div class="form-group row">\n      <label [attr.for]="id" class="col-sm-2 col-form-label" *ngIf="to.label">\n        {{ to.label }}\n        <ng-container *ngIf="to.required && to.hideRequiredMarker !== true">*</ng-container>\n      </label>\n      <div class="col-sm-10">\n        <ng-template #fieldComponent></ng-template>\n      </div>\n    </div>\n  '})],s)}(u.c),m=function(){function n(){}return n=t.b([Object(p.J)({imports:[c.b,l.h,i.a,u.e.forRoot({wrappers:[{name:"form-field-horizontal",component:k}],validationMessages:[{name:"required",message:"This field is required"}]})],declarations:[r,k]})],n)}();a.d(s,"ConfigModule",function(){return d});var d=function(){function n(){}return n=t.b([Object(p.J)({imports:[e.b,m,o.g.forChild([{path:"",component:e.a,data:{examples:[{title:"Bootstrap Horizontal",description:"",component:r,files:[{file:"app.component.html",content:a("2X8n")},{file:"app.component.ts",content:a("0Tib")},{file:"app.module.ts",content:a("uhqU")},{file:"horizontal-wrapper.ts",content:a("6yoJ")}]}]}}])]})],n)}()},"j/3a":function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n  </formly-form>\n</form>\n'},uhqU:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyHorizontalWrapper <span class="token punctuation" >}</span> from <span class="token string" >\'./horizontal-wrapper\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      wrappers<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'form-field-horizontal\'</span><span class="token punctuation" >,</span> component<span class="token punctuation" >:</span> FormlyHorizontalWrapper <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      validationMessages<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'required\'</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> <span class="token string" >\'This field is required\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n    FormlyHorizontalWrapper<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'}});