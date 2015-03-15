angular.module('MainCtrl', []).controller('MainController', function(posts) {
    var vm = this;

    vm.$inject = ['posts']; // Inject 'posts' service by hands

    vm.title = "Saying box";

    vm.newPost = {};
    vm.verify = '';

    vm.posts = posts.posts;

    vm.addPost = function() {
        if(vm.verify !== '209' ) { vm.verify='Please input a right number' }
        if(!vm.newPost.message || vm.newPost.message === '' || vm.verify !== '209') { return; }
        posts.create(vm.newPost);
        vm.newPost = {};
        vm.verify = '';
    }
});