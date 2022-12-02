export const getUserToken = (email) =>{
        fetch(`https://phone-seeker-server.vercel.app/jwt?email=${email}`)
        .then(res => res.json())
        .then(data =>{
            if(data.accessToken){
                console.log(data);
                localStorage.setItem('accessToken', data.accessToken);
            };
        })
    };