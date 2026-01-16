const getUse = async()=>{
const id= new URLSearchParams(location.search).get('userId');
const response = await axios.get(`http://ums12.runasp.net/api/users/${id}`)
if(response.status==200)
return response.data;
}
const displayUser= async()=>{
   const response = await getUse();
   document.querySelector(".userName").textContent=response.data.name;
   
   document.querySelector(".userEmail").textContent=response.data.email;
   
   document.querySelector(".userAge").textContent=response.data.age;
   console.log(response);
}


displayUser();