const count = document.getElementById("count");
async function incCount(){
    const response = await fetch("https://qg4u5fglt8.execute-api.us-east-1.amazonaws.com/get-views");
    const data = await response.json();
    count.innerHTML = `Site Visits: ${data.views}`;
}

incCount();