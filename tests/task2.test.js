const axios = require('axios');

it("Create user", async () => {
    const response = await axios.post('https://reqres.in/api/users', {
        "name": "Xenia B.",
        "job": "tester"
    });
    console.log(response.data);
    expect(response.status).toEqual(201);
})

it("Get single user", async () => {
    const response = await axios.get('https://reqres.in/api/users/4', {
        "id": "4"
    });
    console.log(response.data);
    expect(response.status).toEqual(200);
})

it("Update user", async () => {
    const response = await axios.patch('https://reqres.in/api/users/4', {
        first_name: 'Evelyn'
    });
    console.log(response.data);
    expect(response.status).toEqual(200);
})

it("Delete user", async () => {
    const response = await axios.delete('https://reqres.in/api/users/4', {
        "id": "4"
    });
    console.log(response.data);
    expect(response.status).toEqual(204);
})
