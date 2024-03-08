import ArticlesList from "../components/ArticlesList";

function Blog() {
  const style = {
    backgroundImage: `url('https://github.com/NastasiaKarpenko/my-eire-app/blob/main/src/images/events/IMG_2.jpeg?raw=true')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <ArticlesList />
      <div className="blogImg" style={style}></div>
    </div>
  );
}

export default Blog;

// { const data = [
// {
//       header:"",
//       date: "",
//       short: "",
//       long: "",
//       img: "",
//     },
//     {
//       header:"",
//       date: "",
//       short: "",
//       long: "",
//       img: "",
//     },
//   ];

//   return (
//     <div>
//       <h2>To know more about Ireland</h2>
//       <div class="container-fluid main-background" id="main-content">
//         <h1>Blog</h1>

//         <div class="row mb-4 articles">
//             <div class="col-xl-4 col-lg-6 col-md-12">
//                 <img class="articleImage" alt="Lady works on her code" src="#">
//                 <div class="articleHeader"></div>
//                 <div class="articleDate"></div>
//                 <div class="articleShort"></div>
//                 <button class="articleMore">Learn More</button>
//             </div>

//             <div class="col-xl-4 col-lg-6 col-md-12">
//                 <img class="articleImage" alt="SEO Optimization for website" src="#">
//                 <div class="articleHeader"></div>
//                 <div class="articleDate"></div>
//                 <div class="articleShort"></div>
//                 <button class="articleMore">Learn More -></button>
//             </div>

//             <div class="col-xl-4 col-lg-6 col-md-12">
//                 <img class="articleImage" alt="Piece of code for website" src="#">
//                 <div class="articleHeader"></div>
//                 <div class="articleDate"></div>
//                 <div class="articleShort"></div>
//                 <button class="articleMore">Learn More -></button>
//             </div>
//         </div>

//         <div class="articleFull">
//             <div class="articleImageBig"></div>
//             <div class="articleWrapper">
//                 <div class="articleHeader"></div>
//                 <div class="articleDate"></div>
//                 <div class="articleLong"></div>
//                 <button class="articleClose">Close</button>
//             </div>
//         </div>

//     </div>

// function populateData() {
//   const articles = document.querySelector(".articles")
//   console.dir
//   for (let i = 0; i < data.length; i++) {
//     const article = articles.children[i]
//     const [img, header, date, short, button] = article.children;
//     img.src = data[i].img;
//     header.innerHTML = data[i].header;
//     date.innerHTML = data[i].date;
//     short.innerHTML = data[i].short;
//     button.dataset.number = i;
//   }
// };
// populateData();

// const articleFull = document.querySelector(".articleFull")
// const articleClose = document.querySelector(".articleClose")

// const articleImageBig = document.querySelector(".articleImageBig")
// const articleWrapper = document.querySelector(".articleWrapper")

// function handleMoreClick(e) {
//   const number = e.target.dataset.number
//   articleImageBig.style.backgroundImage = `url(${data[number].img})`
//   const [header, date, text] = articleWrapper.children;
//   header.innerHTML = data[number].header
//   date.innerHTML = data[number].date
//   text.innerHTML = data[number].long

//   articleWrapper.scrollTop = 0;
//   articleFull.style.visibility = "visible"
// }

// const articleMoreBtns = document.querySelectorAll(".articleMore")
// for (let i = 0; i < articleMoreBtns.length; i++) {
//   articleMoreBtns[i].addEventListener("click", handleMoreClick)
// }

// function handleArticleClose() {
//   articleFull.style.visibility = "hidden"
// }
// articleClose.addEventListener("click", handleArticleClose)

//     </div>
//   );
// }
