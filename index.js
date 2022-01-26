let box = document.getElementById('box');

let API = async()=>{
    let response = await fetch("https://reqres.in/api/users?page=1");
    let file = await response.json();
    let info = file.data.map((element)=>{
        return `<li>
                    <div class="img"><img src="${element.avatar}" alt=""></div>  
                    <h2>${element.first_name} ${element.last_name}</h2>
                    <h3>${element.email}</h3>
                    <h3>User ID ${element.id}</h3>
                </li>`
    }).join('');
    box.innerHTML = info;
}

let navBtn = document.getElementById('nav-btn');
navBtn.addEventListener('click',()=>{
    box.innerHTML = `<h1 class='load'>Wait to Scanning users data</h1>`;
    setTimeout(() => {
        API()
    }, 3000);
})