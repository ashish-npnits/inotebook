async function callAPI(type, url = "", data ) {

    let reqInit = {
      method: type, 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDZjNTViMTFhYmUxODllMGM2MjllOCIsImlhdCI6MTY5NDk0MjU1NX0.A11TOHSAc2REz_Q9cX1Lc_cIizHAe1lZJqnq4Z6Xaw4"
      },
      redirect: "follow", 
      referrerPolicy: "no-referrer"
    };

    if(data!=null)
    {
      reqInit.body = JSON.stringify(data);
    }

    const response = await fetch(url, reqInit);
    return response.json(); 
  }

export default callAPI;