const text = document.getElementById("input");
const search = document.getElementById("search");
const apiKey = "<your-api-key>";
const result = document.getElementById("results");
const loading = document.getElementById("loading");
const notFound = document.getElementById('not__found');

// Return API String
function returnApiKey(keyword) {
  const apivariable = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${keyword}?key=${apiKey}`;
  return apivariable;
}

// Adding eventlistener to search
search.addEventListener("click", async () => {
  const keyord = text.value;
  const apiString = returnApiKey(keyord);
  result.innerHTML = "";
  loading.style.display = "block";

  const data = await fetch(apiString)
    .then((res) => res.json())
    .then((data) => {
      return data[0];
    });
  // console.log(data);

  if (typeof data[0] === 'string') {
    console.log(data);
    loading.innerText = "No such word";

    return;
  } else {
    loading.style.display = "none";
    result.innerText = data.shortdef[0];
  }
});
