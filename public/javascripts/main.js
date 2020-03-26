
function displayExample(liId){
     let liel = document.getElementById(`${liId}`)
     
    return function fn(divId){
        liel.addEventListener('click', evt =>
        {
            let elHandler = document.getElementById(`${divId}`);
            if(elHandler.style.display === "none"){
                elHandler.style.display = 'flex';
            }
            else{
                elHandler.style.display = "none"
            }  
        })
    }
}

let users = displayExample('li-users') ;
users('div-users');
let oneUser = displayExample('li-one-user') ;
oneUser('div-one-user');
let createUser = displayExample('li-create-user') ;
createUser('div-create-user');
let updateUser = displayExample('li-update-user') ;
updateUser('div-update-user');
let deleteUser = displayExample('li-delete-user') ;
deleteUser('div-delete-user');
let coffees = displayExample('li-coffees') ;
coffees('div-coffees');
let createCoffee = displayExample('li-create-coffee') ;
createCoffee('div-create-coffee');
let joinGroup = displayExample('li-join') ;
joinGroup('div-join');
let groups = displayExample('li-groups') ;
groups('div-groups');
let oneGroup = displayExample('li-one-group') ;
oneGroup('div-one-group');
let createGroup = displayExample('li-create-group') ;
createGroup('div-create-group');
let updateGroup = displayExample('li-update-group') ;
updateGroup('div-update-group');
let deleteGroup = displayExample('li-delete-group') ;
deleteGroup('div-delete-group');
let posts = displayExample('li-posts') ;
posts('div-posts');
let onePost = displayExample('li-one-post') ;
onePost('div-one-post');
let updatePost = displayExample('li-update-post') ;
updatePost('div-update-post');
let createPost = displayExample('li-create-post') ;
createPost('div-create-post');
let deletePost = displayExample('li-delete-post') ;
deletePost('div-delete-post');