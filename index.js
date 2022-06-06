let id;
let container=document.getElementById("moive_name");
let box=document.getElementById("moive_list");

async function myFun(){
    try{
        const query=document.getElementById("query").value;

        let res= await fetch(`http://www.omdbapi.com/?apikey=8ffda9e1&s=${query}`);
        let data= await res.json();
        console.log("data",data);

        const moive=data.Search;
        return moive
       }
       catch(err)
       {
        console.log(err)
       }

    }
        
    function appendMoives(data){
    box.innerText=null;
    data.forEach(function(el,index){
           
           
    let p=document.createElement("h4");
    p.addEventListener("click",function(){
    showMoive(el,index)
    })

    p.innerText= el.Title;
    box.append(p)
    })
    }
    
    async function main(){
    let data=await myFun()

    if(data==undefined)

    {
        return false
    }
        appendMoives(data)
}

    function debounce(func,delay){
    if(id)
    {
        clearTimeout(id)
    }
    id= setTimeout(function(){
    func()
        },delay)
    }
        

    let arr=[];

    function showMoive(el,index){
        
    arr.push(el);
    console.log(arr);
        
    arr.map(function(el,index){
           
    container.innerText=null;

    let div=document.createElement("div");
    div.setAttribute("id","moiveDiv");

    let image=document.createElement("img");
    image.src=el.Poster;
              
    let title=document.createElement("h4");
    title.innerText=`Title: ${el.Title}`;

    let date= document.createElement("p");
    date.innerText=`Year: ${el.Year}`;
    date.setAttribute("id","date");

    div.append(image,title,date);
    container.append(div);
          
            
              
              
    })
         
    }

    let url="https://api.themoviedb.org/3/trending/all/day?api_key=0eaad18ad8092d58cef6b9db7c793e13" ;
    // let url ="https://api.themoviedb.org/3/movie/popular?api_key=0eaad18ad8092d58cef6b9db7c793e13&language=en-US&page=1";

    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(res){

    let data= res.results
    console.log(data)
    appendData(data)
    })
    .catch(function(err){
    console.log(err)
    })

    let trending= document.getElementById("trend");
    function appendData(data){

    data.map(function(el,index){

    let div=document.createElement("div")
    div.setAttribute("id","trendBox")
            
    let images=document.createElement("img")
    // image.src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo"
    images.src = `${el.backdrop_path || el.poster_path}`
    images.setAttribute("id","image")

    // let poster = document.createElement("img")
    // poster.src=`${el.backdrop_path || poster_path}`

    let name= document.createElement("h4")
    name.innerText=`Title: ${el.title || el.name}`

    let date=document.createElement("p")
    date.innerText=`Releasing On: ${el.release_date || el.first_air_date}`

    div.append(images,name,date)

    trending.append(div)

    })
        

}