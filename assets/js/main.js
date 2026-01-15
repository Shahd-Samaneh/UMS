const getUsers = async () => {
    const response = await axios.get(`http://ums12.runasp.net/api/users`);
    return response.data;
}

const displayUsers = async () => {
    const result = await getUsers();
    const users = result.users.map((user) => {
        return `
        <tr>
        <td><h2>${user.name}</h2></td>
        <td><img src="${user.imageUrl}"/></td>
        <td><button onclick=deleteUser(${user.id}) type="button" class="btn btn-danger">Delete User</button></td>
        </tr>
        `

    }).join(" ");
    document.querySelector(".users .usersData").innerHTML = users;
    console.log(users);
}

displayUsers();

const deleteUser = async(id)=>{
    const response = await axios.delete(`http://ums12.runasp.net/api/users/${id}`)
    console.log(response);
}