google.discoverAPI({
url: 'https://videointelligence.googleapis.com/$discovery/rest'
}, function(serviceErr, videoService){
const requestBody ={
"auth":'video_api_key',
"resource":{
"inputUri":'your-gcs-video-filename',
'features':['LABEL_DETECTION','SHOT_CHANGE_DETECTION']
}
}

videoService.videos.annotate(requestBody, function(error,resp){
const operationId = resp.name;
google.discoverAPI({
url : url,
version: 'v1'
key : apiKey
},function(serviceErr, videoIntelligence){
const reqBody={
"auth": 'video_api_key',
 "name" : operationId
}
videoOntelligence.operations.get(reqBody,function(opErr,opResp){
  //annotations are in opkesp[`response`][`annotationReesults`]
));
});
});
});
