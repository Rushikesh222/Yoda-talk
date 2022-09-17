const inputText = document.querySelector(".textInput");
const btnCheck = document.querySelector(".btnCheck");
const outText = document.querySelector(".output");
const urlServer = "https://api.funtranslations.com/translate/yoda.json";

function errorHandler(error) {
  console.log("error is occur", error);
  alert("something is wrong in api");
}

function getTranslateURl(Text) {
  return urlServer + "?" + "text=" + Text;
}
function check() {
  var inputTxt = inputText.value;
  fetch(getTranslateURl(inputTxt))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outText.innerText = translatedText;
    })
    .catch(errorHandler);
}
btnCheck.addEventListener("click", check);
