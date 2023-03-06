const url = "./data.json";
const textColors = [
  "text-light-red",
  "text-orangey-yellow",
  "text-green-teal",
  "text-cobalt-blue",
];
const backgroundColors = [
  "bg-red-transparent",
  "bg-orange-transparent",
  "bg-green-transparent",
  "bg-blue-transparent",
];
let parsedData;
const listItems = document.querySelectorAll("li");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    parsedData = data;
    console.log(parsedData);
    listItems.forEach((item, index) => {
      console.log(item, index);
      item.innerHTML = `
        <div class="flex justify-center items-center">
          <img src=${parsedData[index].icon} class="inline mr-2" alt="icon" />
          <span class="font-semibold ${textColors[index]}">${parsedData[index].category}</span>
        </div>
        <div class="font-semibold">
          <span>${parsedData[index].score}</span>
          <span class="text-gray-transparent">/ 100</span>
        </div>
      `;
      item.classList.add(backgroundColors[index]);
    });
  });
