var formItem = {title:"Form Item Tes",button:{save:{target:"teacher/save/",icon:"fa fa-floppy-o",class:"btn btn-info btn-save",value:"",type:"btn-save-one"}},field:{indicator:{field:"indicator",type:"text",label:"Indikator",validation:"required",err:"Wajib diisi",data:""},answer:{field:"answer",type:"select",label:"Jawaban",validation:'required',err:"Wajib diisi",option:{source:["Opsi","A","B","C","D","E"]}},domain:{field:"domain",type:"select",option:{source:["Ranah","Pengetahuan (C1)","Pemahaman (C2)","Penerapan (C3)","Analisis (C4)","Sintesis (C5)","Evaluasi (C6)"]},label:"Ranah Pengetahuan",validation:'required',err:"Wajib diisi"},difficulty:{field:"difficulty",type:"select",label:"Tingkat Kesulitan",validation:'required min="'+minDateFormal+'" max="'+maxDateFormal+'"',err:message,option:{source:["Tingkat Kesulitan","Mudah","Sedang","Sulit"]}}}}
var formType = {teacher:{evaluation_item:true}}