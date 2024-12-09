const count = document.getElementById("count");
async function incCount(){
    const response = await fetch("https://25o4fabqvoejwhjmru67x2625m0apzdt.lambda-url.us-east-1.on.aws");
    const data = await response.json();
    count.innerHTML = `Site Visits: ${data}`;
}

incCount();