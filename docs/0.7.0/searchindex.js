Search.setIndex({docnames:["R-api","cli","concepts","index","java_api/index","models","projects","python_api/index","python_api/mlflow","python_api/mlflow.azureml","python_api/mlflow.entities","python_api/mlflow.h2o","python_api/mlflow.keras","python_api/mlflow.mleap","python_api/mlflow.models","python_api/mlflow.projects","python_api/mlflow.pyfunc","python_api/mlflow.pytorch","python_api/mlflow.sagemaker","python_api/mlflow.sklearn","python_api/mlflow.spark","python_api/mlflow.tensorflow","python_api/mlflow.tracking","quickstart","rest-api","tracking","tutorial"],envversion:55,filenames:["R-api.rst","cli.rst","concepts.rst","index.rst","java_api/index.rst","models.rst","projects.rst","python_api/index.rst","python_api/mlflow.rst","python_api/mlflow.azureml.rst","python_api/mlflow.entities.rst","python_api/mlflow.h2o.rst","python_api/mlflow.keras.rst","python_api/mlflow.mleap.rst","python_api/mlflow.models.rst","python_api/mlflow.projects.rst","python_api/mlflow.pyfunc.rst","python_api/mlflow.pytorch.rst","python_api/mlflow.sagemaker.rst","python_api/mlflow.sklearn.rst","python_api/mlflow.spark.rst","python_api/mlflow.tensorflow.rst","python_api/mlflow.tracking.rst","quickstart.rst","rest-api.rst","tracking.rst","tutorial.rst"],objects:{"":{mlflow:[8,0,0,"-"]},"mlflow.azureml":{"export":[9,2,1,""],deploy:[9,2,1,""]},"mlflow.entities":{Experiment:[10,1,1,""],FileInfo:[10,1,1,""],Metric:[10,1,1,""],Param:[10,1,1,""],Run:[10,1,1,""],RunData:[10,1,1,""],RunInfo:[10,1,1,""],RunStatus:[10,1,1,""],RunTag:[10,1,1,""],SourceType:[10,1,1,""],ViewType:[10,1,1,""]},"mlflow.entities.Experiment":{ACTIVE_LIFECYCLE:[10,3,1,""],DEFAULT_EXPERIMENT_ID:[10,3,1,""],DELETED_LIFECYCLE:[10,3,1,""],artifact_location:[10,3,1,""],experiment_id:[10,3,1,""],from_proto:[10,4,1,""],lifecycle_stage:[10,3,1,""],name:[10,3,1,""],to_proto:[10,5,1,""]},"mlflow.entities.FileInfo":{file_size:[10,3,1,""],from_proto:[10,4,1,""],is_dir:[10,3,1,""],path:[10,3,1,""],to_proto:[10,5,1,""]},"mlflow.entities.Metric":{from_proto:[10,4,1,""],key:[10,3,1,""],timestamp:[10,3,1,""],to_proto:[10,5,1,""],value:[10,3,1,""]},"mlflow.entities.Param":{from_proto:[10,4,1,""],key:[10,3,1,""],to_proto:[10,5,1,""],value:[10,3,1,""]},"mlflow.entities.Run":{data:[10,3,1,""],from_dictionary:[10,4,1,""],from_proto:[10,4,1,""],info:[10,3,1,""],to_dictionary:[10,5,1,""],to_proto:[10,5,1,""]},"mlflow.entities.RunData":{from_dictionary:[10,4,1,""],from_proto:[10,4,1,""],metrics:[10,3,1,""],params:[10,3,1,""],tags:[10,3,1,""],to_proto:[10,5,1,""]},"mlflow.entities.RunInfo":{ACTIVE_LIFECYCLE:[10,3,1,""],DELETED_LIFECYCLE:[10,3,1,""],artifact_uri:[10,3,1,""],end_time:[10,3,1,""],entry_point_name:[10,3,1,""],experiment_id:[10,3,1,""],from_proto:[10,4,1,""],lifecycle_stage:[10,3,1,""],name:[10,3,1,""],run_uuid:[10,3,1,""],source_name:[10,3,1,""],source_type:[10,3,1,""],source_version:[10,3,1,""],start_time:[10,3,1,""],status:[10,3,1,""],to_proto:[10,5,1,""],user_id:[10,3,1,""]},"mlflow.entities.RunStatus":{FAILED:[10,3,1,""],FINISHED:[10,3,1,""],RUNNING:[10,3,1,""],SCHEDULED:[10,3,1,""],from_string:[10,6,1,""],is_terminated:[10,6,1,""],to_string:[10,6,1,""]},"mlflow.entities.RunTag":{from_proto:[10,4,1,""],key:[10,3,1,""],to_proto:[10,5,1,""],value:[10,3,1,""]},"mlflow.entities.SourceType":{JOB:[10,3,1,""],LOCAL:[10,3,1,""],NOTEBOOK:[10,3,1,""],PROJECT:[10,3,1,""],UNKNOWN:[10,3,1,""]},"mlflow.entities.ViewType":{ACTIVE_ONLY:[10,3,1,""],ALL:[10,3,1,""],DELETED_ONLY:[10,3,1,""],from_proto:[10,4,1,""],from_string:[10,4,1,""],to_proto:[10,4,1,""],to_string:[10,4,1,""]},"mlflow.h2o":{load_model:[11,2,1,""],log_model:[11,2,1,""],save_model:[11,2,1,""]},"mlflow.mleap":{MLeapSerializationException:[13,7,1,""],add_to_model:[13,2,1,""],log_model:[13,2,1,""],save_model:[13,2,1,""]},"mlflow.models":{Model:[14,1,1,""]},"mlflow.models.Model":{add_flavor:[14,5,1,""],load:[14,4,1,""],log:[14,4,1,""],save:[14,5,1,""],to_yaml:[14,5,1,""]},"mlflow.projects":{SubmittedRun:[15,1,1,""],run:[15,2,1,""]},"mlflow.projects.SubmittedRun":{cancel:[15,5,1,""],get_status:[15,5,1,""],run_id:[15,3,1,""],wait:[15,5,1,""]},"mlflow.pyfunc":{add_to_model:[16,2,1,""],get_module_loader_src:[16,2,1,""],load_pyfunc:[16,2,1,""],log_model:[16,2,1,""],save_model:[16,2,1,""],spark_udf:[16,2,1,""]},"mlflow.sagemaker":{"delete":[18,2,1,""],build_image:[18,2,1,""],deploy:[18,2,1,""],push_image_to_ecr:[18,2,1,""],run_local:[18,2,1,""]},"mlflow.sklearn":{load_model:[19,2,1,""],log_model:[19,2,1,""],save_model:[19,2,1,""]},"mlflow.tracking":{MlflowClient:[22,1,1,""],get_tracking_uri:[22,2,1,""],set_tracking_uri:[22,2,1,""]},"mlflow.tracking.MlflowClient":{create_experiment:[22,5,1,""],create_run:[22,5,1,""],delete_experiment:[22,5,1,""],delete_run:[22,5,1,""],download_artifacts:[22,5,1,""],get_experiment:[22,5,1,""],get_experiment_by_name:[22,5,1,""],get_run:[22,5,1,""],list_artifacts:[22,5,1,""],list_experiments:[22,5,1,""],list_run_infos:[22,5,1,""],log_artifact:[22,5,1,""],log_artifacts:[22,5,1,""],log_metric:[22,5,1,""],log_param:[22,5,1,""],restore_experiment:[22,5,1,""],restore_run:[22,5,1,""],set_tag:[22,5,1,""],set_terminated:[22,5,1,""]},mlflow:{ActiveRun:[8,1,1,""],active_run:[8,2,1,""],azureml:[9,0,0,"-"],create_experiment:[8,2,1,""],end_run:[8,2,1,""],entities:[10,0,0,"-"],get_artifact_uri:[8,2,1,""],h2o:[11,0,0,"-"],log_artifact:[8,2,1,""],log_artifacts:[8,2,1,""],log_metric:[8,2,1,""],log_param:[8,2,1,""],mleap:[13,0,0,"-"],models:[14,0,0,"-"],projects:[15,0,0,"-"],pyfunc:[16,0,0,"-"],run:[8,2,1,""],sagemaker:[18,0,0,"-"],set_experiment:[8,2,1,""],set_tag:[8,2,1,""],set_tracking_uri:[8,2,1,""],sklearn:[19,0,0,"-"],start_run:[8,2,1,""],tracking:[22,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","function","Python function"],"3":["py","attribute","Python attribute"],"4":["py","classmethod","Python class method"],"5":["py","method","Python method"],"6":["py","staticmethod","Python static method"],"7":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:function","3":"py:attribute","4":"py:classmethod","5":"py:method","6":"py:staticmethod","7":"py:exception"},terms:{"0x9f":26,"0xc6":23,"123456abc":18,"1bf3cca7f3814d8fac7be7874de1046d":26,"25t17":5,"4cc8883584b955ed01f38f68bc03af6d":26,"521aa8772a1941dfdb007bf532d19dd":26,"7c1a0d5c42844dcdb8f5191146925174":26,"96771d893a5e46159d9f3b49bf9013e2":19,"break":3,"byte":[0,23,24,26],"case":[0,6,15,23,25,26],"class":[0,5,7,8,10,14,15,22],"default":[0,1,2,5,6,8,15,16,18,22,23,24,25,26],"enum":[0,10],"export":[2,5,9,11,16,19,23,25],"final":25,"float":[0,6,8,10,24,26],"function":[2,3,6,7,11,14,16,18,23,26],"import":[5,8,13,16,18,19,23,25,26],"long":[5,6],"new":[0,1,2,6,8,15,18,24,25,26],"null":0,"public":25,"return":[0,6,8,10,15,16,22,23,24,25,26],"short":6,"static":[0,10],"throw":[0,1,24],"true":[0,8,15,16,18,26],"try":[0,2,23,26],"var":0,"while":[1,5,8,15],AND:24,AWS:[2,5,18,25],And:5,Being:2,DFS:24,For:[0,2,3,5,6,8,14,15,16,18,22,23,24,25,26],GCS:25,IDE:24,IDs:24,Not:[0,5],One:[0,10],That:15,The:[0,1,3,5,6,7,8,9,10,11,13,14,15,16,18,19,22,23,24,25,26],Their:0,Then:[6,25],There:[2,6,23,25],These:[0,5,6],Use:[1,6],Used:[0,8,15],Using:[5,6,24],With:6,__file__:26,__main__:23,__name__:23,_load_model_from_local_fil:23,_load_pyfunc:[5,16],_mlflow_object:10,_mlflowobject:10,abl:[23,25],about:[2,3,6,8,10,15,25,26],abov:25,abs:26,absolut:[6,16],abspath:26,accept:[18,26],access:[1,3,24,25],account:[5,6,9,18,25],accuraci:24,acid:26,across:[2,23],act:8,activ:[1,5,8,10,16,18,22,24,25],active_lifecycl:10,active_onli:[0,1,10,24],active_run:[8,25],activerun:[8,25],actual:5,add:[5,6,13,14,16,18],add_flavor:[5,14],add_to_model:[13,16],added:[5,11,13,16,18,19],adding:6,addit:[0,2,5,6,24,25],addition:[0,1,5,25],address:0,adopt:0,advantag:0,affect:[8,22],after:[0,24,26],again:[2,23,25,26],against:[6,22,26],age:16,agnost:3,aim:2,alcohol:26,algorithm:[2,6,25],all:[0,1,3,5,6,7,8,10,16,23,24,25,26],allow:[0,5,6,23,24,25],almeida:26,alon:2,along:[0,25],alpha:[3,6,23,26],alreadi:[0,1,18,23,24],also:[0,1,2,3,5,6,7,8,23,24,25,26],altern:[1,2,23,25],although:2,alwai:25,amazon:[0,1,18],among:0,analysi:25,analyz:26,anded_express:24,ani:[2,3,5,6,8,9,13,15,16,18,24,25],anoth:[2,6,24],anyon:[2,16],anywher:25,apach:[2,13,25,26],apart:5,api:[2,3,6,8,9,10,11,13,14,15,18,19,22,26],api_updateendpointweightsandcapac:18,api_vpcconfig:18,app_nam:[9,18],appear:23,appli:[0,1,2,5],applic:[0,5,8,9,18,22,23,25,26],approach:2,appropri:[0,8,13,19,22,24,25],arbitrari:[2,5],archiv:18,arg:[1,14],argument:[1,5,6,8,15,16,23,26],argv:26,around:[8,15,25],arrai:[5,24],artifact:[1,5,6,8,10,11,13,15,18,19,22,23,26],artifact_loc:[0,8,10,22,24],artifact_path:[0,8,11,13,14,16,19,22,24,25],artifact_uri:[8,10,22,24],as_funct:0,ascii:[23,26],assign:0,associ:[0,1,8,10,16,18,22,24],assum:[0,18],asynchron:[8,15],attach:0,attempt:[0,8],attribut:[0,5,8],authent:[0,8,15],author:0,autom:[6,25],automat:[0,2,6,8,18,25],avail:[0,5,6,10,13,18,25,26],avoid:[6,23,26],awar:5,aws:[18,25],aws_access_key_id:[0,25],aws_secret_access_kei:[0,25],axi:26,azur:[2,5,9],azure_storage_access_kei:25,azure_storage_connection_str:25,azureml:[1,7],back:[0,5,11,19],backend:[0,1,22],background:0,base:[0,2,6,8,10,11,13,14,15,19,22,25,26],batch:[2,5,11,19,26],becaus:[6,25],becom:18,been:[5,9,24,25],befor:[0,5,6,16],behind:25,being:[0,11,13,19,24],below:[0,23,26],benefit:5,best:[2,6,26],better:26,between:2,bin:[6,26],black:2,block:[0,8,15,25],bool:24,both:[6,25],boto3:18,bottom:26,box:2,branch:[6,8,15],brew:23,broadli:25,brows:0,browser:[0,26],bucket:[18,24,25],build:[2,4,5,8,15,18],build_imag:18,built:[2,14,18,25],c2a7325210ef4242bd4631cec8f92351:26,call:[0,5,6,8,9,15,16,22,25,26],caller:[5,8,9,16],came:2,can:[0,1,2,3,5,6,8,10,11,13,14,15,16,19,22,23,24,25,26],cancel:[6,15],cannot:[1,9,13,23],captur:2,care:0,cat:[5,16],caus:[23,26],central:23,cerdeira:26,chain:[2,6,8,15],challeng:2,chang:[2,3,8,22],channel:26,checkout:[9,18],child:0,chlorid:26,choic:[2,6,25],choos:5,chosen:24,chunk:0,citric:26,classif:13,classmethod:[10,14],claus:24,clear:1,cli:[0,1,3,5,8,22,24,25],click:26,client:[18,22,25],clone:[23,26],close:25,cloud:[2,5,6],cluster:[0,2,5,6,8,15],cluster_spec:[0,8,15],code:[0,2,3,5,6,10,16,22,23,24,25],code_path:16,codebas:2,codec:[23,26],column:26,com:[2,6,8,15,18,23,26],combin:[6,11,19],come:2,command:[2,3,5,9,15,23,25,26],command_nam:1,commerci:23,commit:[0,2,6,8,10,15,24,25],commmand:0,common:[2,5,7,25],commun:25,companion:[5,13],compar:[0,2,3,24,25],comparison:[24,25],compat:[0,5,13,18],complet:[0,5,8,15,24],complex:[0,26],compon:[5,6,16,25],comput:6,concept:[3,5],concurr:[8,15],conda:[0,2,5,6,8,9,15,16,19,23,26],conda_env:[0,6,11,16,19,26],configur:[5,16,18,23,25],conform:0,congratul:26,consol:[9,18],constant:[0,24],constraint:2,construct:[6,25],contact:25,contain:[0,2,5,6,8,9,10,13,15,16,18,23,24,25,26],content:[8,23],context:[8,25],continu:2,control:[0,6],conveni:[3,5],convent:[2,5,6,16,26],converg:25,convert:[0,5,6,22],coordin:6,cor:26,core:[2,6,25],correct:[0,5,18],correctli:[5,15],correspond:[0,10,18,22,25],cortez:26,cours:[6,25],cran:26,crate:26,creat:[5,6,8,13,15,16,18,22,25,26],create_experi:[8,22,25],create_model:18,create_run:[22,25],create_servic:5,createdatafram:13,creation:[6,24],creation_tim:24,credenti:[6,25],criteria:24,criterion:19,critic:23,cron:1,cross:6,crud:22,csv:[0,5,26],cudnn:6,curl:[23,26],current:[0,1,3,5,6,8,9,10,11,13,15,16,18,19,22,24,25,26],custom:[6,13,25],cycl:24,daemon:0,dag:2,daili:23,data:[0,1,3,5,6,8,10,13,16,19,22,23,26],data_fil:6,data_path:16,data_typ:6,databrick:[0,1,2,8,15,22,24,25,26],datafram:[0,5,13,16,19],dataset:[2,19,26],date:[0,5,24,26],datetim:14,dbf:[1,2,6,24],decid:6,decis:26,decisiontreeclassifi:19,declar:[0,6,23,25],decod:[23,26],decrib:19,default_artifact_root:0,default_experiment_id:10,defin:[0,2,5,10,15,16,18,23],definit:[5,16],delet:[10,18,22],delete_experi:22,delete_run:22,deleted_lifecycl:10,deleted_onli:[0,1,10,24],densiti:26,depend:[1,2,5,6,8,15,16,23,25,26],deploi:[2,3,5,9,18,26],deploy:[2,6,11,16,18,19],deployment_mode_add:18,deployment_mode_cr:18,deployment_mode_replac:18,deprec:[],describ:[0,2,5,6,8,10,24,25],descript:[0,23,24],descriptor:[0,2,24],design:[0,2],desir:[0,6,22],destin:0,detail:[1,6,14,24,25],detect:25,determin:[0,2,6,25],develop:[2,6,25],dictionari:[5,18,22],differ:[0,2,5,6,14,15,23,25],difficult:2,dimens:2,dioxid:26,dir:[16,25],directli:[5,16,22,23,25,26],directori:[0,1,2,5,6,8,9,10,15,16,18,22,23,24,25,26],dirnam:26,disabl:6,disk:25,distribut:[0,2,6,8,15,24],divers:[2,23],doc:[0,18],docker:[2,5,18,23,24],document:25,doe:[0,6,8,9,18,22,24,25],doing:[23,26],don:6,done:16,doubl:16,download:[2,6,8,15,22,25,26],download_artifact:22,downsid:0,downstream:[5,14,26],driver:6,drop:26,dst:[5,16],dst_path:16,due:25,duplic:26,dure:[0,4,24],each:[0,1,2,5,6,23,24,25,26],easi:[2,5,25],easili:[0,2,5,23,26],echo:0,ecr:[5,18],edit:9,effect:[0,8,22],effici:5,either:[1,5,6,8,10,15,16,18,23,24,25],elasticnet:26,els:26,elsevi:26,emit:16,empti:[8,22],enabl:[5,8,25,26],end:[3,6,8,10,24,25,26],end_run:[8,25],end_tim:[0,10,22,24],endpoint:[5,18,24,25],enforc:25,engin:[0,2],ensur:[0,23,25,26],entiti:[7,8,22,25],entri:[0,6,8,10,14,15,24,25,26],entry_point:[0,6,8,15,26],entry_point_nam:[0,8,10,22,24],env:[5,8,16],environ:[0,2,5,6,8,9,15,16,19,23,24,25,26],ephemer:25,epoch:10,equival:[0,6],error:[0,1,23,26],escap:6,especi:[2,5],etc:[0,8,10,15,22,24,25],etl:[0,24],eval_metr:26,evalu:[13,26],even:[2,25],everi:[0,2,16],everyth:9,exampl:[5,6,8,15,16,18,23,24,25,26],except:[13,18,25],exclus:8,execut:[0,2,4,8,15,18,24,25],execution_role_arn:18,executionexcept:[8,15],exist:[0,2,6,8,13,16,18,22,23,24,25],exit:[1,8,15,25],expect:[5,11,16,25],experi:[2,3,8,10,15,19,22,23,26],experiment_id:[0,8,10,15,22,24,25],experiment_nam:[0,8],explicitli:[0,6,25],expos:[7,8,15,25],express:[0,24],extend:0,extern:5,extra:14,fail:[0,10,18,24],fals:[0,8,15,16,18],famili:[0,26],familiar:26,fashion:23,fast:25,fatal:16,favorit:26,featur:[2,5,6,13,25,26],feed:25,fetch:[0,24],few:2,field:[0,6,24],file:[0,2,4,5,6,8,10,11,14,15,16,19,22,23,24,25,26],file_s:[10,24],file_stor:0,fileinfo:[10,22],filestor:[0,1,24],filesystem:[0,5,8,11,15,16,19,25],fill:4,filter:[10,24,26],find:25,finish:[0,8,10,15,22,24,26],first:[5,6,26],fit:[2,13,19,26],fix:[9,26],flag:25,flavor:[2,11,13,14,16,18,19,23],fluent:0,folder:[1,9,23],follow:[0,5,6,7,8,11,16,18,19,23,25,26],foo:23,form:[3,6,16,25],format:[0,2,3,6,11,13,14,16,19,23,25,26],formula:0,forward:16,found:[1,8,15],four:[5,6],frame:0,fraud:25,free:26,fresh:0,from:[0,1,2,3,5,6,8,9,11,13,14,15,16,18,19,22,23,24,25,26],from_dictionari:10,from_proto:10,from_str:10,full:25,funciton:0,futur:2,gaussian:26,gener:[1,5,6,9,11,16,19,23,24],get:[2,3,6,8,15,22],get_artifact_uri:[8,25],get_experi:22,get_experiment_by_nam:22,get_module_loader_src:16,get_run:22,get_statu:15,get_tracking_uri:[22,25],getit:0,getoutputcol:13,git:[0,1,2,6,8,10,15,23,24,25,26],git_password:[0,8,15],git_usernam:[0,8,15],github:[2,6,8,9,10,15,18,23,24,25,26],give:2,given:[0,1,5,6,8,14,16,22,24,25],glmnet:26,going:9,good:2,grab:0,greater:0,group:25,gunicorn:0,h20:11,h2o:[7,14],h2o_model:11,hadoop:13,handi:0,handl:[0,5,9],hardcod:16,has:[0,1,5,6,9,16,24,25,26],hash:[0,6,8,10,15,24,25,26],hashingtf:13,have:[0,2,5,6,13,14,16,18,23,25,26],hdf5:5,hello:[23,25],help:[0,1,2,5],here:[0,6,23],higher:22,histor:0,histori:[23,25],homebrew:23,host:[0,6,24,25],how:[2,5,6,14,16,23,25,26],howev:[0,5,6,25],html:[0,4,18],http:[0,1,6,8,15,18,22,23,24,25,26],httpd:25,httpuv:0,httr:0,human:[0,6,24],hyperparam:0,hyperparamet:[2,6,24,25,26],iam:[0,25],ident:[5,18,25],identif:0,identifi:[0,5,11,14,16,19,24,26],ifi:8,ignor:[5,8],illustr:23,imag:[5,18,24,25],image_url:18,implement:[1,8],impli:0,import_modul:[5,16],importlib:[5,16],impos:24,inact:18,inadvert:15,includ:[0,2,3,5,6,9,10,16,23,24],index:7,individu:[0,1,2,6,25],infer:[1,2,3,5,11,13,19,25,26],info:[5,10,16,24,25],inform:[5,6,8,15,16,18,23,25,26],infrastructur:[2,6],init:[5,11],initi:[10,18,24,26],initialis:11,inlin:0,input:[2,5,6,13,25],input_path:0,inputcol:13,insid:[0,5,6,16,25],inspect:6,instal:[6,8,15,25,26],instanc:[0,11,18],instance_count:18,instance_typ:18,instanti:1,instead:[0,8,15,23,25,26],int64:24,integ:[0,8,10,22],integr:[2,5],intel:6,intend:25,interact:[0,2,25],interest:25,interfac:[3,5,15,22,25,26],intern:[8,15],interpret:23,interrupt:[8,15],invoc:[23,26],invok:[6,16,26],involv:0,ipynb:26,iri:[0,19],is_crat:0,is_dir:[10,24],is_termin:10,iso:5,its:[0,2,5,6,8,14,16,18,23,25],itself:0,jar:5,java:[3,5,13],javadoc:4,job:[0,1,6,10,15,24],join:26,json:[0,6,8,15,23,26],jsonlit:0,jupyt:26,just:[2,5,6,25],keep:[0,2],kei:[0,2,3,5,6,8,10,22,23,24,25],kera:[7,14],kill:[0,15,24],kind:25,know:[2,6,26],kwarg:[11,14,16],l1_ratio:26,label:13,lambda:[0,26],land:0,languag:3,laptop:2,larg:[2,25],last:[0,24],last_update_tim:24,later:[0,2,24,25],latest:[6,18,24],latter:25,lattic:26,launch:[0,2,8,9,15],ldap:0,learn:[0,3,9,14,19,23,24,25,26],least:[0,6],len:26,less:[0,26],let:[2,5,6,23,25],level:[8,22],leverag:23,lib:23,librari:[0,2,3,5,6,16,23,26],life:24,lifecycl:[3,10,15],lifecycle_stag:[10,24],like:[0,6,8,22,24,25,26],limit:24,line:[3,5,6,23,25],linear:[5,6,16,26],linear_model:26,link:2,list:[2,5,6,10,16,18,22,25,26],list_artifact:22,list_experi:[22,25],list_run_info:22,listen:0,listexperi:24,load:[2,5,11,13,14,16,19,23,25,26],load_iri:19,load_model:[5,11,19],load_pyfunc:[5,16],loader:[5,16],loader_modul:[5,16],local:[0,1,2,6,8,9,10,11,13,14,15,16,18,19,22,23,24,25,26],local_dir:[8,22],local_path:[8,22],localhost:[1,23,24,26],locat:[0,1,6,8,19,22,24,25,26],lock:6,log:[2,5,8,11,13,14,16,19,22,23,26],log_artifact:[8,16,22,23,25],log_metr:[8,22,23,25,26],log_model:[5,11,13,16,19,26],log_param:[8,19,22,23,25,26],log_paramet:13,log_saved_model:5,logisticregress:13,longer:25,look:[6,8,23],loss:25,lost:2,lower:[8,22,26],machin:[0,3,5,6,9,14,24,25,26],maco:23,mae:26,mai:[5,15,16,22,23,25,26],main:[0,1,5,6,8,11,15,16,19,26],make:[0,2,4,5,6,19,25],manag:[1,2,3,6,8,15,22,23],mani:[0,2,5,23,26],manipul:26,manual:8,mapreduc:13,mark:[0,1,24],match:[24,26],mato:26,matrix:26,max:24,max_it:13,maxim:2,maximum:[0,24],maxit:13,mayb:[2,25],mean:[0,2,3,6,26],mean_absolute_error:26,mean_squared_error:26,measur:0,mechan:[1,5,13],member:15,messag:[1,16,23,26],meta:[0,1],metadata:[0,1,10,24,25,26],method:[0,5,8,11,15,16,24],meticul:2,metric:[2,6,8,10,22,23,25,26],metric_kei:24,mfs:18,microsoft:1,might:[5,6,9],millisecond:[0,10,24],mine:26,minim:2,minimum:19,minio:25,mkl:6,mleap:7,mleapserializationexcept:13,mlflow:[1,7,24,26],mlflow_active_run:0,mlflow_cli:0,mlflow_client:0,mlflow_client_create_experi:0,mlflow_client_create_run:0,mlflow_client_delete_experi:0,mlflow_client_delete_run:0,mlflow_client_download_artifact:0,mlflow_client_get_experi:0,mlflow_client_get_experiment_by_nam:0,mlflow_client_get_run:0,mlflow_client_list_artifact:0,mlflow_client_list_experi:0,mlflow_client_log_artifact:0,mlflow_client_log_metr:0,mlflow_client_log_param:0,mlflow_client_restore_experi:0,mlflow_client_restore_run:0,mlflow_client_set_tag:0,mlflow_client_set_termin:0,mlflow_conda_hom:6,mlflow_const:0,mlflow_create_experi:0,mlflow_end_run:0,mlflow_env:[5,16],mlflow_experiment_id:[8,25],mlflow_get_tracking_uri:0,mlflow_git_password:6,mlflow_git_usernam:6,mlflow_hom:[9,18],mlflow_instal:[0,23,26],mlflow_load_flavor:0,mlflow_load_model:0,mlflow_log:0,mlflow_log_artifact:[0,23],mlflow_log_metr:[0,23,26],mlflow_log_model:[0,26],mlflow_log_param:[0,23,26],mlflow_model:[11,13,19],mlflow_param:[0,26],mlflow_predict_flavor:0,mlflow_predict_model:0,mlflow_restore_snapshot:[0,26],mlflow_rfunc_predict:0,mlflow_rfunc_serv:[0,26],mlflow_roundtrip:0,mlflow_run:[0,26],mlflow_run_id:8,mlflow_s3_endpoint_url:25,mlflow_save_flavor:0,mlflow_save_model:0,mlflow_serv:0,mlflow_set_experi:0,mlflow_set_tag:0,mlflow_set_tracking_uri:0,mlflow_snapshot:[0,26],mlflow_sourc:0,mlflow_start_run:[0,26],mlflow_track:23,mlflow_tracking_uri:25,mlflow_ui:[0,23,26],mlflow_uninstal:0,mlflowclient:[22,25],mlflowexcept:13,mllib:13,mlmodel:[0,16,23,26],mlproject:[6,8,15,23,26],mlrun:[0,5,8,16,22,23,24,25,26],mnt:25,mode:[0,6,8,15,18],model:[2,3,6,7,9,11,13,16,18,19,24,25],model_path:[0,9,18,26],model_path_dir:13,model_sav:5,model_save_dir:13,model_select:26,modul:[5,7,8,9,10,11,13,14,15,16,18,19,22,25],modular:6,monitor:2,more:[0,5,6,18,23,24,25],moreov:2,most:[2,5,6,7],mount:25,move:[1,2],multi:[2,6],multipl:[0,2,5,6,14,15,24],multistep:[8,15,25],mung:26,must:[0,1,5,6,8,9,13,14,15,16,18,22,23,25,26],mutual:8,my_env:6,my_model:5,na_rm:0,name:[1,2,5,6,8,9,10,14,15,16,18,22,24,25,26],nativ:[5,6,11,19],ndarrai:16,necessari:[0,5,8,16,23],need:[0,2,5,6,9,25],nest:8,net:25,network:0,never:[0,24],newli:[0,24,25],next:[6,26],nfs:25,nginx:25,no_conda:0,non:[16,25],none:[0,8,9,10,11,14,15,16,18,19,22],normal:25,notat:0,note:[8,15,18],notebook:[0,2,10,24,25,26],notic:0,now:[23,24,26],nrow:26,number:[0,2,6,10,18,25],numer:[0,25,26],numpi:[5,16,26],object:[5,6,8,10,11,13,14,15,16,19,22,25],obtain:[2,25],offer:2,often:2,onc:[0,2,5,23,24,25],one:[0,5,6,8,18,22,23,25,26],oneof:24,ones:[6,25],onli:[0,2,5,6,8,15,24,25],open:[2,3,23,25,26],oper:0,option:[0,1,5,6,8,16,23,24,25],order:[3,5,8,23,25],ordin:[16,23,26],ordinari:0,org:0,organ:[1,2,6,7],origin:[0,10,24],other:[0,2,3,5,6,8,16,23,25,26],otherwis:[0,6,8,15],our:[13,23,26],out:[16,23,26],output:[0,1,2,5,6,9,16,23,25],output_path:0,outputcol:13,outsid:9,over:[6,8,24,25],own:[2,5,6,25],packag:[0,2,3,5,6,13,16,23,25],packrat:26,packratformat:26,packratvers:26,page:[0,2,26],pair:[0,22,23,24],panda:[5,16,19,25,26],pandas_df:19,parallel:[2,6],param1:23,param:[8,10,14,19],param_list:[0,26],param_nam:24,paramet:[1,2,3,5,8,9,10,11,13,14,15,16,18,19,22,23,24,25,26],parameter_nam:6,parent:[],parent_run_id:22,parquet:25,pars:16,part:2,particular:[0,2,5,9,25],pass:[0,5,6,8,11,14,15,16,23,25,26],password:[0,6,8,15,25],past:25,path:[0,1,5,6,8,9,10,11,13,14,15,16,18,19,22,23,24,25,26],perform:[0,2,5,6,25,26],perman:[0,1,22,24],permiss:[5,18],persist:[5,13,14,19,25],philosophi:2,physic:25,physicochem:26,pick:[1,8,22],pickl:[5,19,23,25,26],pickled_model:5,piec:[6,25],pip3:23,pip:[23,25,26],pipelin:[0,5,13,24],pipelinemodel:[5,13],pkl:[5,16,26],place:[0,6,25],placehold:4,platform:[2,3,6,23],png:25,point:[0,6,8,10,15,23,24,25,26],polici:0,port:[0,18,23,25],posit:[23,26],possibl:[2,5,6,25],post:[0,23,24,26],power:5,pre:18,preced:[8,25],prediciton:26,predict:[5,16,19,23,25,26],predicted_qu:26,predictor:26,prefer:[25,26],prefix:[0,8,22,24],prepackag:24,prepar:2,prepend:0,present:[5,6,16,18],preserv:18,preview:24,previou:5,price:18,primari:3,primarili:6,print:[0,25,26],printout:0,prior:[5,16],probabl:25,problem:2,process:[8,15,16],processx:0,produc:[2,11,16,19,26],product:[2,3,5,25],profil:[8,22,25],profilenam:[8,22,25],program:[3,6,23],project:[0,1,2,3,7,8,9,10,18,22,24,25,26],proper:0,properti:[6,25,26],proto:10,proto_view_typ:10,protocol:26,prototyp:26,provid:[0,1,2,5,6,8,9,11,13,14,15,16,18,19,22,23,24,25],proxi:25,pth:5,publicli:18,publish:[2,6],purpos:0,purrr:0,push:[5,18],push_image_to_ecr:18,put:[2,25],pyfunc:[1,5,7,11,14,18,19],pyfunc_udf:5,pypi:[23,26],pysftp:25,pyspark:13,python3:23,python:[0,2,3,6,8,9,13,15,16,19,22,23,25,26],python_funct:16,pytorch:[7,14],qualifi:[0,24],qualiti:26,quantit:26,queri:[24,26],queue:6,quickli:26,quickstart:3,quot:[0,6],r2_score:26,r_depend:0,r_model:26,r_wine:26,rais:[8,15,26],ran:25,random:6,random_st:26,randomli:0,rang:[2,23,26],rapidli:6,rather:[15,23,26],read:[2,3,6,26],read_csv:26,readabl:[0,6,24],readm:25,readthedoc:18,real:[5,6,26],realli:0,reason:[2,25],reat:0,receiv:6,recommend:[1,6,7,23,25],record:[0,3,24],refer:[0,5,16,18,25],referenc:[5,16],reg_param:13,region:[18,25],region_nam:18,regparam:13,regress:26,regular:6,rei:26,rel:[0,5,6,9,11,13,14,16,18,19,22,24],relat:[1,25],releas:[3,6],relev:25,reli:16,remain:[0,25],rememb:[2,25],remot:[5,8,15,22,23,24,26],remount:25,remov:0,repeatedli:6,replac:18,repo:[6,26],repons:9,report:[2,24],repositori:[1,2,6,8,15,23,26],repres:24,represent:14,reproduc:[0,2,3,6,23,26],request:[0,10,25],requir:[0,1,2,5,13,16,18,24,25,26],research:2,residu:26,resourc:[15,18],resource_already_exist:24,resource_does_not_exist:[0,24],rest:[2,3,5,10,22,23,25,26],restor:[22,26],restore_experi:22,restore_run:22,result:[0,2,3,6,16,18,23,25],result_typ:16,resum:8,retrain:2,retriev:[0,16,24],reus:[2,26],reusabl:[2,3,6,26],revers:25,right:[5,18],rlang:0,rmd:26,rmse:26,role:[18,25],root:[0,1,5,6,10,16,22,24,25,26],root_uri:24,roundtrip:0,rout:[18,24],rpc:[],rscript:0,rstudio:26,run1:[5,16],run:[2,5,8,9,10,11,13,14,15,16,18,19,22,26],run_data:10,run_id:[0,5,8,9,11,14,15,16,18,19,22,23],run_info:[10,24],run_loc:18,run_nam:[0,8,22,24],run_uuid:[0,1,8,10,24,25,26],run_view_typ:22,rundata:10,runinfo:[10,22],runner:15,runstatu:[10,22],runtag:[0,10,22],rversion:26,safe:15,safeti:25,sagemak:[2,7],same:[0,2,6,18,23,24,25,26],sampl:[13,23,26],sample_input:13,sample_input_df:13,satisfi:24,save:[2,5,11,13,14,16,19,26],save_model:[5,11,13,14,16,19],scalar:26,scale:2,schedul:[0,6,10,24],schema:[13,16],scheme:25,scienc:[2,6,23,25],scientist:[2,3,6,26],scikit:[19,23,25,26],scope:25,score:[0,5,8,26],screen:[0,1],script:[2,4,5,6,8,9,15,23],sdk:25,search:[0,25,26],second:[5,26],secret:0,section:[0,25],securitygroupid:18,see:[0,5,6,7,8,14,15,18,23,25,26],seed:6,select:[0,6,18,24],self:[0,5,16],sens:[5,16],separ:[6,25],seri:16,serial:[5,13,26],serv:[1,2,3,5,14,18,25],server:[2,5,8,22,23,24,26],servic:[0,16,18],session:[0,26],set:[2,5,6,8,9,11,13,15,18,19,22,25,26],set_env:0,set_experi:[8,25],set_tag:[8,22],set_termin:[22,25],set_tracking_uri:[8,22,25],setwd:26,sever:[0,2,5,6,25],share:[2,3,23,25],shell:[5,6,8,15],shlex:6,should:[0,5,6,8,15,16,19,23,24,25,26],show:[1,16,25],showcas:26,shown:0,sign:6,signatur:[5,16],similar:0,simpl:[0,1,6,23,26],simpli:[2,6],sinc:[3,10,22],singl:[0,6,24],site:23,size:[0,10,24],sk_model:19,sk_path_dir:19,sklearn:[1,7,14,16,23,26],sklearn_elasticnet_win:26,sklearn_iri:[5,16],sklearn_logistic_regress:23,sklearn_vers:5,small:0,softwar:26,solut:[2,5],some:[0,2,6,15,23,25,26],someth:26,sometim:[6,25],soon:6,sourc:[2,3,8,10,16,22,23,24,25,26],source_nam:[0,8,10,22,24],source_typ:[0,8,10,22,24],source_vers:[0,8,10,22,24],sourcetyp:[8,10],spark:[2,6,7,13,14,16,26],spark_df:5,spark_model:13,spark_udf:[5,16],sparkcontext:5,sparksess:16,spec:[6,16],special:6,specif:[0,1,2,5,6,8,15,25],specifi:[0,1,2,5,8,9,15,16,18,19,23,24,25,26],split:[6,26],splitter:19,sqrt:26,squar:26,src:6,src_path:16,ssh:[6,25],ssh_config:25,stacktrac:23,stage:[2,10,13,24],standalon:[2,25],standard:[0,2,5,6,26],start:[1,2,3,5,7,8,10,23,24,25],start_run:[8,22,25,26],start_tim:[0,10,22,24],stat:0,state:8,statement:25,static_prefix:0,statu:[0,8,10,15,22,24,25],status_str:10,stderr_callback:0,step:[2,5,6],stopdaemonizedserv:0,storag:[1,2,3,6],storage_dir:[0,8,15],store:[0,1,2,5,8,15,16,18,22,24],stream:[2,14],string:[0,5,6,8,10,16,22,24,25],structur:[5,16],sub:1,subclass:15,subcommand:1,subdirectori:[0,6,8,15,23],subfold:1,subject:3,submit:[6,25],submittedrun:[8,15],subnet:18,subprocess:15,subset:6,substitut:6,succeed:15,success:[8,22],sugar:26,suitabl:25,sulfur:26,sulphat:26,suppli:[0,14],support:[0,2,5,6,14,18,26],supported_deployment_flavor:18,suppress:16,suppress_warn:16,sure:25,swagger:26,symlink:25,syntax:8,sys:26,system:[2,6,11,19,23,24,25,26],tackl:[2,3,25],tag:[8,10,22],take:[0,1,2,6,8,22,23,24,25,26],target:[2,6,19],task:[0,2,25],team:[2,6,23],technic:0,tell:[2,26],temporari:6,tensorflow:[2,7,14,25],term:0,termin:[8,15,22],test:[0,5,6,13,26],test_df:13,test_i:26,test_x:26,text:[6,13],than:[6,15,23,24,26],the_dict:10,thei:[0,1,2,5,23],them:[0,1,2,5,6,23,25,26],themselv:0,therefor:[2,5],thi:[0,2,3,4,5,6,8,9,10,11,13,15,16,18,19,22,23,24,25,26],thing:2,those:18,thread:15,threadsaf:8,three:[2,3],through:[0,3,5,23,25,26],throughout:[23,25],thrown:[1,13,18],time:[0,2,5,6,8,10,22,24,25,26],time_cr:5,timeout:23,timestamp:[0,10,22,24],to_dictionari:10,to_proto:10,to_str:10,to_yaml:14,togeth:[2,5,6,24,25],token:13,tool:[2,6,11,14,19,23,25,26],torch:5,total:26,toupper:0,track:[1,2,3,5,6,7,8,16,24,26],tracking_uri:[0,22],traffic:18,train:[0,2,6,9,13,23,24,25],train_i:26,train_test_split:26,train_x:26,transfer:3,transform:[6,13],translat:22,trash:1,treat:6,tree:[5,16,19],trigger:0,tune:[2,6,25],tutori:[3,6,23],two:[0,5,6,25,26],txt:[0,23,26],type:[0,2,6,8,10,15,16,18,23,24,26],typic:[2,25],uci:26,udf:[5,16],unauthent:25,unchang:0,undeclar:6,under:[0,1,5,8,15,18,24,25],underli:[0,24],understand:5,understood:[5,14],unencrypt:25,unicodedecodeerror:[23,26],uniqu:[0,1,8,22,24],unix:[0,10,24],unknown:[0,10,24],unless:[1,22],unlik:22,unnecessari:16,unquot:0,unrel:15,unset:[0,8,24],unspecifi:[0,8,24],unsuccess:[8,15],unsupport:26,until:[8,15],updat:[0,6,16,18,22,23,25],updateendpointweightsandcapac:18,upgrad:6,upload:[5,24],upon:15,uri:[1,2,6,8,10,15,22,23,24,25,26],url:[24,25],usabl:25,usag:[1,25],use:[0,1,2,3,5,6,8,11,15,16,18,19,22,23,24,25,26],use_conda:[8,15],used:[0,1,2,5,8,10,15,16,18,22,24,25,26],useful:[2,5,6,25],user:[2,5,6,10,22,24,25,26],user_id:[0,10,22,24],usernam:[0,6,8,15],uses:[0,2,5,6,15,18,22,24,26],using:[1,2,3,5,6,8,13,14,15,18,23,25,26],usr:23,usual:[0,2,24],utc:5,utc_time_cr:14,util:[0,5,16],uuid:[0,8,10],valid:[0,1,5,6,8,14,16,24],valu:[5,6,8,10,13,18,22,23,24,25,26],valueerror:26,variabl:[0,6,8,15,25],varieti:[2,3,5,23,26],variou:[1,23,24,25],vector:0,vendor:2,verbos:0,veri:25,version:[0,1,2,3,5,6,8,9,15,19,23,25,26],via:[0,1,5,6,8,15,16,22,23,25,26],view:[1,5,24,26],view_str:10,view_typ:[0,10,24],viewtyp:10,visual:[2,25],volatil:26,vpc:18,vpc_config:18,vpcconfig:18,vpn:25,wai:[2,5,6,25],wait:[8,15],walk:23,want:[2,6,25],warn:16,wasb:25,web:0,weight:18,well:[2,6,23,25],went:2,west:18,what:[6,23],when:[0,2,5,6,8,13,15,18,23,24,25,26],where:[0,2,5,9,11,13,16,18,19,24],wherev:[23,25],whether:[2,8,10,15,24],which:[0,2,5,6,8,13,15,18,23,24,25,26],who:[10,24],whole:2,whose:24,wide:2,window:25,wine:26,wine_path:26,withcolumn:[5,16],within:[0,6,8,13,15,23,24,25,26],without:[0,2,5,8,15,23,25],won:0,word:13,work:[1,2,5,6,9,23,25,26],workbench:[5,9],worker:[0,23],workflow:[1,5,8,15,23,25],workspac:[8,22,25],world:[23,25],worri:6,would:[5,23,25,26],wrap:[0,8],wrapper:[0,8,15],write:[2,5,6,8,14,22,23,25],write_json:0,writelin:23,written:[0,2,5],www:0,xlarg:18,yaml:[0,1,2,5,6,14,26],yml:[5,16],you:[0,1,2,3,5,6,8,15,23,24,25],your:[0,2,5,6,23,25,26],zero:18},titles:["R API","Command-Line Interface","Concepts","MLflow Documentation","Java API","MLflow Models","MLflow Projects","Python API","mlflow","mlflow.azureml","mlflow.entities","mlflow.h2o","mlflow.keras","mlflow.mleap","mlflow.models","mlflow.projects","mlflow.pyfunc","mlflow.pytorch","mlflow.sagemaker","mlflow.sklearn","mlflow.spark","mlflow.tensorflow","mlflow.tracking","Quickstart","REST API","MLflow Tracking","Tutorial"],titleterms:{"case":2,"function":[0,1,5,25],NFS:25,One:25,The:2,Use:2,Using:23,activ:0,amazon:[5,25],anoth:0,apach:5,api:[0,4,5,7,23,24,25],argument:0,artifact:[0,24,25],azur:[1,25],azureml:[5,9],basic:25,big:2,blob:25,build:6,built:5,client:0,cloud:25,code:26,command:[0,1,6],compar:26,compon:2,concept:[2,25],connect:25,content:[0,1,5,6,24,25,26],crate:0,creat:[0,1,24],custom:5,data:[2,24,25],databrick:6,delet:[0,1,24],depend:0,deploy:5,detail:0,document:3,doubleclaus:[],download:[0,1,23],end:0,entiti:10,exampl:[0,2],execut:6,experi:[0,1,24,25],field:5,fileinfo:24,flavor:[0,5],floatclaus:24,format:5,gener:0,get:[0,24,25],googl:25,h2o:[5,11],histori:24,initi:0,instal:[0,23],interfac:[0,1],iter:6,java:4,kera:[0,5,12],launch:[6,25],learn:[1,2,5],line:[0,1],list:[0,1,24],load:0,local:5,log:[0,24,25],machin:[1,2],manag:25,metric:[0,24],metricsearchexpress:24,microsoft:5,mleap:[5,13],mlflow:[0,2,3,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25],mllib:5,mlmodel:5,model:[0,1,5,14,23,26],more:26,multipl:25,multistep:6,name:0,need:26,network:25,object:0,organ:25,over:0,overview:6,packag:26,param:[0,24],paramet:[0,6],parametersearchexpress:24,predict:0,process:0,program:25,programmat:25,project:[6,15,23],pyfunc:16,python:[1,5,7],python_funct:5,pytorch:[5,17],queri:25,quickli:6,quickstart:23,read:0,record:25,remot:[0,6,25],request:24,resourc:26,respons:24,rest:24,restor:[0,1,24],rfunc:0,run:[0,1,6,23,24,25],rundata:24,runinfo:24,runstatu:24,runtag:24,sagemak:[1,5,18],save:[0,23],scalabl:2,scikit:[1,5],script:0,search:24,searchexpress:24,section:1,seealso:0,serv:[0,23,26],server:[0,25],servic:25,set:[0,24],sftp:25,share:0,sklearn:[5,19],snapshot:0,sourc:0,sourcetyp:24,spark:[5,20],specifi:6,start:0,storag:[5,25],store:25,stringclaus:24,structur:24,support:25,syntax:6,tabl:[0,1,5,6,24,25,26],tag:[0,24],tensorflow:[5,21],termin:0,thi:1,tool:5,track:[0,22,23,25],train:26,tutori:26,uninstal:0,updat:24,uri:0,user:0,using:0,valu:0,view:23,viewtyp:24,what:26,where:25,workflow:[2,6],you:26}})