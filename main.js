const button = document.getElementsByClassName('btn');
const message = document.getElementsByClassName('paragh')


button[0].addEventListener('click', dadJoke);


async function dadJoke() {
  const fetchJoke = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept : 'application/json'
    }
  });
  const getJoke = await fetchJoke.json();
  message[0].innerHTML = getJoke.joke;
}
