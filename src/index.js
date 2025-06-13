function displayPoem(response) {
  new Typewriter(".poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 5,
    html: true,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let apiKey = "f4b51cbf6039365ob7atd180fe5e0c57";
  let userInput = document.querySelector(".instructions").value;
 let prompt = `Generate a poem about ${userInput}.`;
 let context ="You are a romantic poem expert. Write a romantic poem with exactly four lines. Each line must be a full sentence and should not exceed seven words. End each sentence with a full stop. Add a <br> tag after each sentence. Do not use any code formatting or quotes. End the poem with <br><strong>— SheCodes AI.</strong>";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector(".poem");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${userInput}...</div>`;

  
  poemElement.classList.remove("hidden")
  

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form-generator");
poemFormElement.addEventListener("submit", generatePoem);
