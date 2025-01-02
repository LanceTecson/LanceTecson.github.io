const count = document.getElementById('visits-num');
async function incCount(){
    const response = await fetch("https://f7yqt07x7k.execute-api.us-east-1.amazonaws.com/cloud-resume-viewers-laolte");
    const data = await response.json();
    count.innerHTML = `${data}`;
}

incCount();