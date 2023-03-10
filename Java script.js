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

  let buttona = document.querySelectorAll('button.buttons');
  console.log(buttona)
  buttona[0].addEventListener('click', () => {
    myPhoto();
     });

 async function myPhoto() {
    const resp = await fetch('https://api.sampleapis.com/futurama/info');
    const json = await resp.json();
    document.querySelector('#futurama').innerHTML = json[0].synopsis;
        }
