export const getUserToken = (email) =>{
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res => res.json())
        .then(data =>{
            if(data.accessToken){
                console.log(data);
                localStorage.setItem('accessToken', data.accessToken);
            };
        })
    };