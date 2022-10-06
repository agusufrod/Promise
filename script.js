// $('.search-button').on('click', function () {
// $.ajax({
//   url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=4bc675224b5144e0bcb1f83216534b65' + $('.input_keyword').val(),
//   success: (result) => {
//     const berita = result.articles;
//     let cards = '';
//     berita.forEach((b) => {
//       cards += showCard(b);
//     });

//     $('.berita-container').html(cards);

//     //ketika tombol di klik

//     $('.modal-detail-button').on('click', function () {
//       $.ajax({
//         url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=4bc675224b5144e0bcb1f83216534b65' + $(this).data('name'),
//         success: (b) => {
//           const beritaDetail = showberitaDetail(m);

//           $('.modal-body').html(beritaDetail);
//         },
//         error: (e) => {
//           console.log(e.responseText);
//         },
//       });
//     });
//   },
//   error: (e) => {
//     console.log(e.responseText);
//   },
// });
// });

// MENGGUNAKAN FETCH //

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function () {
  const inputKeyword = document.querySelector('.input-keyword');
  fetch('https://newsapi.org/v2/everything?apiKey=4bc675224b5144e0bcb1f83216534b65&q=' + inputKeyword.value)
    .then((response) => response.json())
    .then((response) => {
      const berita = response.articles;
      let cards = '';
      berita.forEach((b) => (cards += showCard(b)));
      const beritaContainer = document.querySelector('.berita-container');
      beritaContainer.innerHTML = cards;
    });
});

function showCard(b) {
  return `<div class="col-md-4 my-3">
  <div class="card">
    <img src="${b.urlToImage}" class="card-img-top"/>
    <div class="card-body">
      <h5 class="card-title">${b.author}</h5>
      <p class="card-text">${b.title}</p>
      <!--<a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#beritaDetailModal" data-name="${b.name}">Go somewhere</a>--> 
    </div>
  </div>
</div>`;
}

function showberitaDetail(b) {
  return `<div class="container-fluid">
  <div class="row">
    <div class="col-md-3">
      <img src="${b.urlToImage}" class="img-fluid" />
    </div>
    <div class="col-md">
      <ul class="list-group">
        <li class="list-group-item"><h4>${b.description}</h4></li>
        <li class="list-group-item"><strong>Published</strong>${b.published}</li>
        <li class="list-group-item"><strong>url</strong>${b.url}</li>
        <li class="list-group-item"><h4>Content</h4>${b.content}</li>
      </ul>
    </div>
  </div>
</div>`;
}
