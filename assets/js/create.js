
const creatUserForm = document.forms['addUser'];

creatUserForm.addEventListener("submit" , async(e)=>{
    e.preventDefault();
  const formData = new FormData(creatUserForm);
  console.log(formData);
    const response = await axios.post(`http://ums12.runasp.net/api/users`,formData)
});