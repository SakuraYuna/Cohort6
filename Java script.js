let button = document.querySelector('#btnd');

button.addEventListener('click', () => {
 myFunc();
  });

async function myFunc() {
    let category = 'tXZkgbiGYJMfUw6vRamm3yupdu1F1ib7SOSYqdMi';
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${category}`);
    let data = await response.json();
    useApiData(data);
  }
  function useApiData(data) {
    document.querySelector('#btnd').innerHTML = data.explanation;
    document.querySelector('#btnd').innerHTML += `<img src = "${data.url}">`;
  }


 
 
  let buttona = document.querySelectorAll('.buttons');
 
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '42e8536214msh06baf16f79eb0f2p1425fcjsndbe984ccc6ba',
		'X-RapidAPI-Host': 'moon-phase.p.rapidapi.com'
	}
};

  function myPhoto() {
    fetch('https://moon-phase.p.rapidapi.com/moon_phase/', options)
	.then((res) => {
        return res.json();
    })
    .then((parsedRes) => {
        for(let i = 0; i < buttona.length; i++){
            buttona[i].innerHTML = parsedRes.value;
         }
        })
        }

    myPhoto();
