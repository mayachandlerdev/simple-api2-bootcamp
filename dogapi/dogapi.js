const btn = document.querySelector("button");
console.log(document.querySelector("img"))

btn.addEventListener('click', ()=> {


  fetch(`https://dog.ceo/api/breeds/image/random`)
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
    document.querySelector('img').src = response.message
    console.log(response)
  })
  .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
  });
});
