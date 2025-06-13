function displayPoem(response) {
  new Typewriter(".poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 5,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let apiKey = "f4b51cbf6039365ob7atd180fe5e0c57";
  let userInput = document.querySelector(".instructions").value;
 let prompt = `Generate a poem about ${userInput}.`;
 let context =
   "You are a romantic poem expert. Write a romantic poem with exactly four lines. Each line must be a complete sentence with at most seven words. Separate each line using <br>. Do not include any code formatting or explanations. Only go to the next line after a fullstop. End the poem with <br><strong>— SheCodes AI.</strong>";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector(".poem");
  poemElement.innerHTML = "Generating a poem for you. Please wait...";

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form-generator");
poemFormElement.addEventListener("submit", generatePoem);
