const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    answers[i].classList.toggle('hide-answer')
  });
}

const features = [
  {
    name : "Bookmark in one click",
    paragraph : "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    heading : "Simple Bookmarking",
    imageSrc: "./images/illustration-features-tab-1.svg"
  },
  {
    name : "Intelligent search",
    paragraph : "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    heading : "Speedy Searching",
    imageSrc: "./images/illustration-features-tab-2.svg"
  },
  {
    name : "Share your bookmarks",
    paragraph : "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    heading : "Easy Sharing",
    imageSrc: "./images/illustration-features-tab-3.svg"
  }
];

const btnFeatures = document.querySelectorAll('#features button');
let featureImg = document.getElementById('feature-img');
const featureName = document.getElementById('feature-heading');
const featureParagraph = document.getElementById('feature-paragraph');
let currIndex = 0;

const setFeatures = () => {
  const feature = features[currIndex];

  btnFeatures[currIndex].classList.add('selected');
  featureName.textContent = feature.name;
  featureParagraph.textContent = feature.paragraph;
  featureImg.src = feature.imageSrc;
};

const clearSelected = () => {
  for(let i = 0; i < btnFeatures.length; i++) {
    btnFeatures[i].classList.remove('selected');
  }
};

setFeatures();


for(let i = 0; i < btnFeatures.length; i++) {
  btnFeatures[i].addEventListener("click", () => {

    clearSelected();
    currIndex = i;
    setFeatures();

  });
}