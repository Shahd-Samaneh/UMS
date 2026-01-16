
const creatUserForm = document.forms['addUser'];


creatUserForm.addEventListener("change", ()=>{
  const file =creatUserForm.image.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function(e){
    document.querySelector(".preview").setAttribute("src",e.target.result);
  }

})


creatUserForm.addEventListener("submit" , async(e)=>{
    e.preventDefault();
  const formData = new FormData(creatUserForm);
  console.log(formData);
    const response = await axios.post(`http://ums12.runasp.net/api/users`,formData)
    if(response.status==200)
      location.href=`./index.html`;
});