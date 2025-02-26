//Resolving promises while Fetching Api data using Async/Await
async function getData(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error(`Http Error! ${response.status}`)    
    } 
    const data = await response.json();
    return data;
    }
    catch (error) {
        console.log("Error Occured", error);
        return null;   
    }
    
}