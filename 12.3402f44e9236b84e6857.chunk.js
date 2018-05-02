webpackJsonp([12],{"1y/k":function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model = {\n    investments: [{}],\n  };\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'investments',\n      type: 'repeat',\n      fieldArray: {\n        fieldGroupClassName: 'row',\n        templateOptions: {\n          btnText: 'Add another investment',\n        },\n        fieldGroup: [\n          {\n            className: 'col-sm-4',\n            type: 'input',\n            key: 'investmentName',\n            templateOptions: {\n              label: 'Name of Investment:',\n              required: true,\n            },\n          },\n          {\n            type: 'input',\n            key: 'investmentDate',\n            className: 'col-sm-3',\n            templateOptions: {\n              type: 'date',\n              label: 'Date of Investment:',\n            },\n          },\n          {\n            type: 'input',\n            key: 'stockIdentifier',\n            className: 'col-sm-3',\n            templateOptions: {\n              label: 'Stock Identifier:',\n              addonRight: {\n                class: 'fa fa-code',\n                onClick: (to, fieldType, $event) => console.log(to, fieldType, $event),\n              },\n            },\n          },\n        ],\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},D9xe:function(n,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=a("WT6e"),p=a("7DMc"),o=function(){function n(){this.form=new p.FormGroup({}),this.model={investments:[{}]},this.options={},this.fields=[{key:"investments",type:"repeat",fieldArray:{fieldGroupClassName:"row",templateOptions:{btnText:"Add another investment"},fieldGroup:[{className:"col-sm-4",type:"input",key:"investmentName",templateOptions:{label:"Name of Investment:",required:!0}},{type:"input",key:"investmentDate",className:"col-sm-3",templateOptions:{type:"date",label:"Date of Investment:"}},{type:"input",key:"stockIdentifier",className:"col-sm-3",templateOptions:{label:"Stock Identifier:",addonRight:{class:"fa fa-code",onClick:function(n,s,a){return console.log(n,s,a)}}}}]}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Repeating Section",description:"\n              This demonstrates using\n              <code>formly-form</code> inside of a custom type in order to accomplish repeating fields.\n            ",component:o,files:[{file:"app.component.html",content:a("p6Mb"),filecontent:a("U1Ql")},{file:"app.component.ts",content:a("K5XC"),filecontent:a("1y/k")},{file:"app.module.ts",content:a("EVsz"),filecontent:a("qN0r")},{file:"repeat-section.type.ts",content:a("S0vt"),filecontent:a("E4By")}]}]},l=function(){},c=a("INQx"),u=a("cPG/"),i=a("OGTa"),r=a("z4JO"),k=a("WhiG"),m=a("XPYZ"),d=a("CoID"),f=a("QMRz"),y=a("SSjb"),g=a("tGRr"),b=a("qwng"),v=a("UFNd"),C=a("PV5Z"),F=a("fCQL"),x=a("Xjw4"),N=a("TToO"),O=function(n){function s(s){return n.call(this,s)||this}return N.__extends(s,n),s}(a("/bvZ").a),w=a("OiLZ"),M=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function h(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,11,"div",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n      "])),(n()(),t["\u0275eld"](2,0,null,null,8,"formly-group",[],null,null,null,u.c,u.b)),t["\u0275did"](3,16760832,null,0,F.a,[],{form:[0,"form"],field:[1,"field"],model:[2,"model"],options:[3,"options"]},null),(n()(),t["\u0275ted"](-1,0,["\n        "])),(n()(),t["\u0275eld"](5,0,null,0,4,"div",[["class","col-sm-2 d-flex align-items-center"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n          "])),(n()(),t["\u0275eld"](7,0,null,null,1,"button",[["class","btn btn-danger"],["type","button"]],null,[[null,"click"]],function(n,s,a){var t=!0;return"click"===s&&(t=!1!==n.component.remove(n.context.index)&&t),t},null,null)),(n()(),t["\u0275ted"](-1,null,["Remove"])),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275ted"](-1,0,["\n      "])),(n()(),t["\u0275ted"](-1,null,["\n    "]))],function(n,s){var a=s.component;n(s,3,0,a.formControl,s.context.$implicit,a.model[s.context.index],a.options)},null)}function T(n){return t["\u0275vid"](0,[(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275and"](16777216,null,null,1,null,h)),t["\u0275did"](2,802816,null,0,x.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](4,0,null,null,4,"div",[["style","margin:30px 0;"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n      "])),(n()(),t["\u0275eld"](6,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(n,s,a){var t=!0;return"click"===s&&(t=!1!==n.component.add()&&t),t},null,null)),(n()(),t["\u0275ted"](-1,null,["Add More Investments"])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275ted"](-1,null,["\n  "]))],function(n,s){n(s,2,0,s.component.field.fieldGroup)},null)}var R=t["\u0275ccf"]("formly-repeat-section",O,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-repeat-section",[],null,null,null,T,M)),t["\u0275did"](1,16760832,null,0,O,[w.a],null,null)],function(n,s){n(s,1,0)},null)},{form:"form",field:"field",model:"model",options:"options"},{},[]),D=a("dI39"),I=a("S3hu"),S=a("UJsg"),A=a("cIfd"),G=a("njCa"),U=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function E(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,12,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var p=!0,o=n.component;return"submit"===s&&(p=!1!==t["\u0275nov"](n,2).onSubmit(a)&&p),"reset"===s&&(p=!1!==t["\u0275nov"](n,2).onReset()&&p),"ngSubmit"===s&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](1,16384,null,0,p["\u0275bf"],[],null,null),t["\u0275did"](2,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](4,16384,null,0,p.NgControlStatusGroup,[p.ControlContainer],null,null),(n()(),t["\u0275ted"](-1,null,["\n  "])),(n()(),t["\u0275eld"](6,0,null,null,5,"formly-form",[],null,null,null,I.b,I.a)),t["\u0275did"](7,966656,null,0,S.a,[w.a,A.a,G.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,S.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](9,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"])),(n()(),t["\u0275ted"](-1,0,["\n  "])),(n()(),t["\u0275ted"](-1,null,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,7,0,a.model,a.form,a.fields,a.options)},function(n,s){var a=s.component;n(s,0,0,t["\u0275nov"](s,4).ngClassUntouched,t["\u0275nov"](s,4).ngClassTouched,t["\u0275nov"](s,4).ngClassPristine,t["\u0275nov"](s,4).ngClassDirty,t["\u0275nov"](s,4).ngClassValid,t["\u0275nov"](s,4).ngClassInvalid,t["\u0275nov"](s,4).ngClassPending),n(s,9,0,!a.form.valid)})}var B=t["\u0275ccf"]("formly-app-example",o,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,E,U)),t["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),j=a("9Sd6"),Z=a("XHgV"),L=a("1T37"),V=a("+j5Y"),P=a("U/+3"),q=a("Mcof"),z=a("7u3n"),J=a("6sdf"),W=a("z7Rf"),X=a("ItHS"),H=a("OE0E"),Q=a("iLnc"),$=a("ApVT"),_=a("bkcK"),K=a("Uo70"),Y=a("6GVX"),nn=a("gsbp"),sn=a("EPl/"),an=a("kJ/S"),tn=a("j06o"),pn=a("ZuzD"),on=a("sqmn"),en=a("255V"),ln=a("ixPN"),cn=a("rK2e"),un=function(){},rn=a("bfOx"),kn=a("ByAW"),mn=a("9N4v"),dn=a("ykPx"),fn=a("nwY2"),yn=a("TqLH"),gn=a("R2dV"),bn=a("JkuO"),vn=a("BILt"),Cn=a("H69Y"),Fn=a("j/TD"),xn=a("daWb"),Nn=a("Dm6n"),On=a("8F5j"),wn=a("WIBo"),Mn=a("MjWI");a.d(s,"ConfigModuleNgFactory",function(){return hn});var hn=t["\u0275cmf"](l,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,u.a,i.a,r.a,k.a,m.a,d.a,f.a,y.a,g.a,b.a,v.a,C.a,R,D.a,B]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,x.NgLocalization,x.NgLocaleLocalization,[t.LOCALE_ID,[2,x["\u0275a"]]]),t["\u0275mpd"](6144,j.b,null,[x.DOCUMENT]),t["\u0275mpd"](4608,j.c,j.c,[[2,j.b]]),t["\u0275mpd"](4608,Z.a,Z.a,[]),t["\u0275mpd"](5120,L.d,L.b,[[3,L.d],t.NgZone,Z.a]),t["\u0275mpd"](5120,L.g,L.f,[[3,L.g],Z.a,t.NgZone]),t["\u0275mpd"](4608,V.i,V.i,[L.d,L.g,t.NgZone,x.DOCUMENT]),t["\u0275mpd"](5120,V.e,V.j,[[3,V.e],x.DOCUMENT]),t["\u0275mpd"](4608,V.h,V.h,[L.g,x.DOCUMENT]),t["\u0275mpd"](5120,V.f,V.m,[[3,V.f],x.DOCUMENT]),t["\u0275mpd"](4608,V.c,V.c,[V.i,V.e,t.ComponentFactoryResolver,V.h,V.f,t.ApplicationRef,t.Injector,t.NgZone,x.DOCUMENT]),t["\u0275mpd"](5120,V.k,V.l,[V.c]),t["\u0275mpd"](4608,P.k,P.k,[Z.a]),t["\u0275mpd"](4608,P.j,P.j,[P.k,t.NgZone,x.DOCUMENT]),t["\u0275mpd"](136192,P.d,P.b,[[3,P.d],x.DOCUMENT]),t["\u0275mpd"](5120,P.n,P.m,[[3,P.n],[2,P.l],x.DOCUMENT]),t["\u0275mpd"](5120,P.i,P.g,[[3,P.i],t.NgZone,Z.a]),t["\u0275mpd"](4608,q.d,q.d,[Z.a]),t["\u0275mpd"](135680,q.a,q.a,[q.d,t.NgZone]),t["\u0275mpd"](5120,z.b,z.c,[V.c]),t["\u0275mpd"](4608,J.b,J.b,[]),t["\u0275mpd"](5120,W.d,W.a,[[3,W.d],[2,X.c],H.c,[2,x.DOCUMENT]]),t["\u0275mpd"](4608,Q.a,Q.a,[]),t["\u0275mpd"](4608,$.a,$.a,[]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275i"],p["\u0275i"],[]),t["\u0275mpd"](4608,G.b,G.b,[G.a]),t["\u0275mpd"](4608,A.a,A.a,[]),t["\u0275mpd"](4608,w.a,w.a,[G.b,A.a]),t["\u0275mpd"](512,x.CommonModule,x.CommonModule,[]),t["\u0275mpd"](512,j.a,j.a,[]),t["\u0275mpd"](512,_.g,_.g,[]),t["\u0275mpd"](512,Z.b,Z.b,[]),t["\u0275mpd"](512,L.c,L.c,[]),t["\u0275mpd"](512,V.g,V.g,[]),t["\u0275mpd"](256,K.f,!0,[]),t["\u0275mpd"](512,K.n,K.n,[[2,K.f]]),t["\u0275mpd"](512,P.a,P.a,[]),t["\u0275mpd"](512,q.c,q.c,[]),t["\u0275mpd"](512,z.e,z.e,[]),t["\u0275mpd"](512,K.x,K.x,[]),t["\u0275mpd"](512,J.c,J.c,[]),t["\u0275mpd"](512,Y.i,Y.i,[]),t["\u0275mpd"](512,W.c,W.c,[]),t["\u0275mpd"](512,nn.c,nn.c,[]),t["\u0275mpd"](512,sn.b,sn.b,[]),t["\u0275mpd"](512,an.h,an.h,[]),t["\u0275mpd"](512,tn.b,tn.b,[]),t["\u0275mpd"](512,K.o,K.o,[]),t["\u0275mpd"](512,K.v,K.v,[]),t["\u0275mpd"](512,pn.b,pn.b,[]),t["\u0275mpd"](512,on.c,on.c,[]),t["\u0275mpd"](512,en.a,en.a,[]),t["\u0275mpd"](512,p["\u0275ba"],p["\u0275ba"],[]),t["\u0275mpd"](512,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](512,ln.a,ln.a,[]),t["\u0275mpd"](512,cn.a,cn.a,[]),t["\u0275mpd"](512,un,un,[]),t["\u0275mpd"](512,rn.r,rn.r,[[2,rn.w],[2,rn.o]]),t["\u0275mpd"](512,l,l,[]),t["\u0275mpd"](256,z.a,{showDelay:0,hideDelay:0,touchendHideDelay:1500},[]),t["\u0275mpd"](256,an.a,!1,[]),t["\u0275mpd"](1024,G.a,function(){return[{types:[{name:"formly-group",component:F.a}]},{types:[{name:"input",component:kn.a,wrappers:["fieldset","label"]},{name:"checkbox",component:mn.a,wrappers:["fieldset"],defaultOptions:{templateOptions:{indeterminate:!0}}},{name:"radio",component:dn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:fn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:yn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:gn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"label",component:bn.a},{name:"description",component:vn.a},{name:"validation-message",component:Cn.a},{name:"fieldset",component:Fn.a},{name:"addons",component:xn.a}],manipulators:[{class:Nn.a,method:"run"},{class:On.a,method:"run"},{class:wn.a,method:"run"}]},{types:[{name:"formly-group",component:F.a}]},{types:[{name:"repeat",component:O}]}]},[]),t["\u0275mpd"](1024,rn.m,function(){return[[{path:"",component:Mn.a,data:e}]]},[])])})},E4By:function(n,s){n.exports='import { Component, OnInit } from \'@angular/core\';\nimport { FieldArrayType, FormlyFormBuilder } from \'@ngx-formly/core\';\n\n@Component({\n  selector: \'formly-repeat-section\',\n  template: `\n    <div *ngFor="let field of field.fieldGroup; let i = index;">\n      <formly-group\n        [model]="model[i]"\n        [field]="field"\n        [options]="options"\n        [form]="formControl">\n        <div class="col-sm-2 d-flex align-items-center">\n          <button class="btn btn-danger" type="button" (click)="remove(i)">Remove</button>\n        </div>\n      </formly-group>\n    </div>\n    <div style="margin:30px 0;">\n      <button class="btn btn-primary" type="button" (click)="add()">Add More Investments</button>\n    </div>\n  `,\n})\nexport class RepeatTypeComponent extends FieldArrayType {\n  constructor(builder: FormlyFormBuilder) {\n    super(builder);\n  }\n}\n'},EVsz:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> RepeatTypeComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./repeat-section.type\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      types<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'repeat\'</span><span class="token punctuation" >,</span> component<span class="token punctuation" >:</span> RepeatTypeComponent <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n    RepeatTypeComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},K5XC:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n    investments<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'investments\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'repeat\'</span><span class="token punctuation" >,</span>\n      fieldArray<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        fieldGroupClassName<span class="token punctuation" >:</span> <span class="token string" >\'row\'</span><span class="token punctuation" >,</span>\n        templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n          btnText<span class="token punctuation" >:</span> <span class="token string" >\'Add another investment\'</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        fieldGroup<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n          <span class="token punctuation" >{</span>\n            className<span class="token punctuation" >:</span> <span class="token string" >\'col-sm-4\'</span><span class="token punctuation" >,</span>\n            type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n            key<span class="token punctuation" >:</span> <span class="token string" >\'investmentName\'</span><span class="token punctuation" >,</span>\n            templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n              label<span class="token punctuation" >:</span> <span class="token string" >\'Name of Investment:\'</span><span class="token punctuation" >,</span>\n              required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span>\n            type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n            key<span class="token punctuation" >:</span> <span class="token string" >\'investmentDate\'</span><span class="token punctuation" >,</span>\n            className<span class="token punctuation" >:</span> <span class="token string" >\'col-sm-3\'</span><span class="token punctuation" >,</span>\n            templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n              type<span class="token punctuation" >:</span> <span class="token string" >\'date\'</span><span class="token punctuation" >,</span>\n              label<span class="token punctuation" >:</span> <span class="token string" >\'Date of Investment:\'</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span>\n            type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n            key<span class="token punctuation" >:</span> <span class="token string" >\'stockIdentifier\'</span><span class="token punctuation" >,</span>\n            className<span class="token punctuation" >:</span> <span class="token string" >\'col-sm-3\'</span><span class="token punctuation" >,</span>\n            templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n              label<span class="token punctuation" >:</span> <span class="token string" >\'Stock Identifier:\'</span><span class="token punctuation" >,</span>\n              addonRight<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n                <span class="token keyword" >class</span><span class="token punctuation" >:</span> <span class="token string" >\'fa fa-code\'</span><span class="token punctuation" >,</span>\n                onClick<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>to<span class="token punctuation" >,</span> fieldType<span class="token punctuation" >,</span> $event<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>to<span class="token punctuation" >,</span> fieldType<span class="token punctuation" >,</span> $event<span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n              <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},S0vt:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component<span class="token punctuation" >,</span> OnInit <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FieldArrayType<span class="token punctuation" >,</span> FormlyFormBuilder <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-repeat-section\'</span><span class="token punctuation" >,</span>\n  template<span class="token punctuation" >:</span> `\n    <span class="token operator" >&lt;</span>div <span class="token operator" >*</span>ngFor<span class="token operator" >=</span><span class="token string" >"let field of field.fieldGroup; let i = index;"</span><span class="token operator" >></span>\n      <span class="token operator" >&lt;</span>formly<span class="token operator" >-</span>group\n        <span class="token punctuation" >[</span>model<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"model[i]"</span>\n        <span class="token punctuation" >[</span>field<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"field"</span>\n        <span class="token punctuation" >[</span>options<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"options"</span>\n        <span class="token punctuation" >[</span>form<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"formControl"</span><span class="token operator" >></span>\n        <span class="token operator" >&lt;</span>div <span class="token keyword" >class</span><span class="token operator" >=</span><span class="token string" >"col-sm-2 d-flex align-items-center"</span><span class="token operator" >></span>\n          <span class="token operator" >&lt;</span>button <span class="token keyword" >class</span><span class="token operator" >=</span><span class="token string" >"btn btn-danger"</span> type<span class="token operator" >=</span><span class="token string" >"button"</span> <span class="token punctuation" >(</span>click<span class="token punctuation" >)</span><span class="token operator" >=</span><span class="token string" >"remove(i)"</span><span class="token operator" >></span>Remove<span class="token operator" >&lt;</span><span class="token operator" >/</span>button<span class="token operator" >></span>\n        <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n      <span class="token operator" >&lt;</span><span class="token operator" >/</span>formly<span class="token operator" >-</span>group<span class="token operator" >></span>\n    <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n    <span class="token operator" >&lt;</span>div style<span class="token operator" >=</span><span class="token string" >"margin:30px 0;"</span><span class="token operator" >></span>\n      <span class="token operator" >&lt;</span>button <span class="token keyword" >class</span><span class="token operator" >=</span><span class="token string" >"btn btn-primary"</span> type<span class="token operator" >=</span><span class="token string" >"button"</span> <span class="token punctuation" >(</span>click<span class="token punctuation" >)</span><span class="token operator" >=</span><span class="token string" >"add()"</span><span class="token operator" >></span>Add More Investments<span class="token operator" >&lt;</span><span class="token operator" >/</span>button<span class="token operator" >></span>\n    <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n  `<span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >RepeatTypeComponent</span> <span class="token keyword" >extends</span> <span class="token class-name" >FieldArrayType</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >constructor</span><span class="token punctuation" >(</span>builder<span class="token punctuation" >:</span> FormlyFormBuilder<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >super</span><span class="token punctuation" >(</span>builder<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},U1Ql:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n  </formly-form>\n</form>\n'},p6Mb:function(n,s){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span> <span class="token attr-name" >[disabled]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>!form.valid<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},qN0r:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\nimport { RepeatTypeComponent } from './repeat-section.type';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [\n        { name: 'repeat', component: RepeatTypeComponent },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    RepeatTypeComponent,\n  ],\n})\nexport class AppModule { }\n"}});