// Cloud Code entry point

// Usuário
Parse.Cloud.define("getUserByID", function (request, response) {
    const user=request.user;
    response.success(user);
});

Parse.Cloud.define("getProjectsByUserID", function (request, response) {
    const user = request.user;
    var relation = user.relation('projects');
    var query = relation.query();
    query.find({
        success: function(projects) {
            console.log(projects);
            response.success(projects);
        },
        error:function(error){
            console.log(error);
            response.error(error);  
        }
    });
});

// Projeto
Parse.Cloud.define("getProjectByID", function (request, response) {
    var query = new Parse.Query("Project");
    query.get(request.params.id)({
        success: function(project) {
            console.log(project);
            response.success(project);
        },
        error:function(error){
            console.log(error);
            response.error(error);  
        }
    });
});

Parse.Cloud.define("getFeaturesByProjectID", function (request, response) {
    var query = new Parse.Query("Feature");
    query.equalTo("project", request.params.id);
    query.find({
        success: function(features) {
            console.log(features);
            response.success(features);
        },
        error:function(error){
            console.log(error);
            response.error(error);  
        }
    });
});

Parse.Cloud.define("getUserStoriesByProjectID", function (request, response) {
    var query = new Parse.Query("UserStory");
    query.equalTo("project", request.params.id);
    query.find({
        success: function(userStories) {
            console.log(userStories);
            response.success(userStories);
        },
        error:function(error){
            console.log(error);
            response.error(error);  
        }
    });
});

Parse.Cloud.define("getStoryTasksByProjectID", function (request, response) {
    var query = new Parse.Query("StoryTask");
    query.equalTo("project", request.params.id);
    query.find({
        success: function(storyTasks) {
            console.log(storyTasks);
            response.success(storyTasks);
        },
        error:function(error){
            console.log(error);
            response.error(error);  
        }
    })
});



Parse.Cloud.define("getProjectProgressByProjectId", async function (request, response) {
    var pipelineDone=[
        {match:{project: request.params.id}},
        {group: {objectId: "$task_type",countDone: {$sum: { $cond: ["$task_status", 1, 0] }}}}
    ]
    var pipelineTotal=[
        {match:{project: request.params.id}},
        {group: {objectId: "$task_type",countTotal: {$sum: 1}},}
    ]
    var progress ={};
    var p=0;
    progress.tasks=[];
    var progressTaskObj;
    var totalDone=0;
    var totalTasks=0;
    var query = new Parse.Query("StoryTask");
    try{
        var countDone=await query.aggregate(pipelineDone);
        var countTotal= await query.aggregate(pipelineTotal);
        for (let i=0; i<countTotal.length; i++){
            p=0;
            progressTaskObj={};

            totalDone=totalDone+countDone[i]['countDone'];
            totalTasks=totalTasks+countTotal[i]['countTotal'];

            taskProgress=(countDone[i]['countDone'] / countTotal[i]['countTotal']).toFixed(2);
            progressTaskObj.name=countTotal[i]['objectId'];
            progressTaskObj.value=taskProgress;

            progress.tasks.push(progressTaskObj)
        }
        progress['total']=(totalDone/totalTasks).toFixed(2);
        console.log(progress)
        response.success(progress);
    } catch(err){
        response.error(err);
        console.log(err)
    }
});

Parse.Cloud.define("getProjectStoryPointsByProjectID", function (request, response) {
    var pipeline = [
        {match:{project: request.params.id}},
        {group: { objectId: null, total: { $sum: '$story_points' } } }
    ];
    var query = new Parse.Query("UserStory");
    query.equalTo("project", request.params.id);
    query.aggregate(pipeline).then(function(res){
        console.log(res);
        response.success(res);
    }).catch(function(error) {
        console.log(error);
        response.error(error);  
    });
});

// Funcionalidade
Parse.Cloud.define("getFeatureByID", function (request, response) {
    var query = new Parse.Query("Feature");
    query.get(request.params.id)({
        success: function(feature) {
            console.log(feature);
            response.success(feature);
        },
        error:function(error){
            console.log(error);
            response.error(error);  
        }
    });
});

Parse.Cloud.define("getFeaturesWithFilters", function (request, response) {
    var query = new Parse.Query("Feature");
    for (let filter in request.params){
        query.equalTo(filter,request.params[filter]);
    }
    query.find({
        success: function(feature) {
            console.log(feature);
            response.success(feature);
        },
        error:function(error){
            console.log(error);
            response.error(error);  
        }
    });
});

Parse.Cloud.define("getUserStoriesByFeatureID", function (request, response) {
    var query = new Parse.Query("UserStory");
    query.equalTo("feature", request.params.id);
    query.find({
        success: function(userStories) {
            console.log(userStories);
            response.success(userStories);
        },
        error:function(error){
            console.log(error);
            response.error(error);  
        }
    });
});

Parse.Cloud.define("getStoryTasksByFeatureID", function (request, response) {
    var query = new Parse.Query("StoryTask");
    query.equalTo("feature", request.params.id);
    query.find({
        success: function(storyTask) {
            console.log(storyTask);
            response.success(storyTask);
        },
        error:function(error){
            console.log(error);
            response.error(error);  
        }
    });
});

Parse.Cloud.define("getFeatureProgressByFeatureId", async function (request, response) {
    var pipelineDone=[
        {match:{feature: request.params.id}},
        {group: {objectId: "$task_type",countDone: {$sum: { $cond: ["$task_status", 1, 0] }}}}
    ]
    var pipelineTotal=[
        {match:{feature: request.params.id}},
        {group: {objectId: "$task_type",countTotal: {$sum: 1}},}
    ]
    var progress ={};
    var p=0;
    progress.tasks=[];
    var progressTaskObj;
    var totalDone=0;
    var totalTasks=0;
    var query = new Parse.Query("StoryTask");
    try{
        var countDone=await query.aggregate(pipelineDone);
        var countTotal= await query.aggregate(pipelineTotal);
        for (let i=0; i<countTotal.length; i++){
            p=0;
            progressTaskObj={};

            totalDone=totalDone+countDone[i]['countDone'];
            totalTasks=totalTasks+countTotal[i]['countTotal'];

            taskProgress=(countDone[i]['countDone'] / countTotal[i]['countTotal']).toFixed(2);
            progressTaskObj.name=countTotal[i]['objectId'];
            progressTaskObj.value=taskProgress;

            progress.tasks.push(progressTaskObj)
        }
        progress['total']=(totalDone/totalTasks).toFixed(2);
        response.success(progress);
        console.log(progress);
    } catch(err){
        response.error(err);
        console.log(err);
    }
});

Parse.Cloud.define("getFeatureStoryPointsByFeatureID", function (request, response) {
    var pipeline = [
        {match:{feature: request.params.id}},
        {group: { objectId: null, total: { $sum: '$story_points' } } }
    ];
    var query = new Parse.Query("UserStory");
    query.equalTo("project", request.params.id);
    query.aggregate(pipeline).then(function(res){
        console.log(res);
        response.success(res);
    }).catch(function(error) {
        console.log(error);
        response.error(error);  
    });
});


// Histórias de Usuário
Parse.Cloud.define("getUserStoryByID", function (request, response) {
    var query = new Parse.Query("UserStory");
    query.get(request.params.id)({
        success: function(userStory) {
            console.log(userStory);
            response.success(userStory);
        },
        error:function(error){
            console.log(error);
            response.error(error);  
        }
    });
});

Parse.Cloud.define("getStoryTasksByUserStoryID", function (request, response) {
    var query = new Parse.Query("StoryTask");
    query.equalTo("feature", request.params.id);
    query.find({
        success: function(storyTask) {
            console.log(storyTask);
            response.success(storyTask);
        },
        error:function(error){
            console.log(error);
            response.error(error);  
        }
    });
});

// Parse.Cloud.define("getUserStoryProgressByUserStoryID", function (request, response) {
//     response.success('ok');
//     response.error('not ok');
// });

// Tarefas de Histórias de Usuário
Parse.Cloud.define("getStoryTaskByID", function (request, response) {
    var query = new Parse.Query("StoryTask");
    query.get(request.params.id)({
        success: function(storyTask) {
            console.log(storyTask);
            response.success(storyTask);
        },
        error:function(error){
            console.log(error);
            response.error(error);  
        }
    });
});

async function teste(){
    var pipelineDone=[
        {match:{project: 'LN8U15gPNj'}},
        {group: {objectId: "$task_type",countDone: {$sum: { $cond: ["$task_status", 1, 0] }}}}
    ]
    var pipelineTotal=[
        {match:{project: 'LN8U15gPNj'}},
        {group: {objectId: "$task_type",countTotal: {$sum: 1}},}
    ]
    var progress ={};
    var p=0;
    progress.tasks=[];
    var progressTaskObj;
    var totalDone=0;
    var totalTasks=0;
    var query = new Parse.Query("StoryTask");
    try{
        var countDone=await query.aggregate(pipelineDone);
        var countTotal= await query.aggregate(pipelineTotal);
        for (let i=0; i<countTotal.length; i++){
            p=0;
            progressTaskObj={};

            totalDone=totalDone+countDone[i]['countDone'];
            totalTasks=totalTasks+countTotal[i]['countTotal'];

            taskProgress=(countDone[i]['countDone'] / countTotal[i]['countTotal']).toFixed(2);
            progressTaskObj.name=countTotal[i]['objectId'];
            progressTaskObj.value=taskProgress;

            progress.tasks.push(progressTaskObj)
        }
        progress['total']=(totalDone/totalTasks).toFixed(2);
        console.log(progress)
    } catch(err){
        console.log(err)
    }
}
teste();
