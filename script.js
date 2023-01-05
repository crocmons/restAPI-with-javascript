fetch(`https://app.codescreen.com/api/assessments/films`, {

method: 'GET',

headers: {

    'Authorization': '8c5996d5-fb89-46c9-8821-7063cfbc18b1',

}

})

.then(response => response.json())

.then(data => {

//console.log(data);
data.forEach((td)=>{
   const table = `
   <tr>
    <td>${td.name}</td>
    <td>${td.ratings}</td>
    <td>${td.date}</td>
    </tr>`
   
    `;
    document.querySelector('table').insertAdjacentHTML("beforeend",table);
})


})

.catch(err){
   console.log(err)
}