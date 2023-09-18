async function callAPI(type, url = "", data ) {

    let reqInit = {
      method: type, 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem()
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