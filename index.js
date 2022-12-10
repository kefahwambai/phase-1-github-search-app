let form = document.getElementById('github-form');
form.addEventListener('submit', function(e){
    e.preventDefault()

    let search = document.getElementById('search').value
    let originalName = search.split(' ').join('')
    console.log(originalName)

    let fetchUsers = fetch('https://api.github.com/search/users?q='+originalName)
    .then(response => response.json())
    .then((data) => {
        let searchOutput = '<h2>User Information</h2>';
        let item = data.items;

       let user = item.filter((item) => {
          return item.login.toLowerCase() === originalName.toLowerCase();
        })[0];    
       console.log(user)

       if (user.length === 0) {
        searchOutput += '<p>User not found.</p>'
       } else {
        let userArray = (typeof user === 'object') ? [user] : user;

        userArray.map( function(users){
            searchOutput += `
        
        <h3><p><a href = '${user.repos_url}'</a>${user.login}</p></h3>
        <img src = '${user.avatar_url}'>
        <br>
        

        
        `;
        console.log(searchOutput)
        document.getElementById('user-list').innerHTML = searchOutput;
        })
       }

       
    })
})
 
    



