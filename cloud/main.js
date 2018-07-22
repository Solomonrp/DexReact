// Cloud Code entry point

// Usuário
Parse.Cloud.define("getUserByID", function (request, response) {
    const user=request.user;
    response.success(user);
});

Parse.Cloud.define("getProjectsByUserID", function (request, response) {
    const user=request.user;
    var query = new Parse.Query(user);
    query.include("projects");
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

// Parse.Cloud.define("getFeatureProgressByFeatureID", function (request, response) {
//     response.success('ok');
//     response.error('not ok');
// });

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

