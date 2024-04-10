const mdata = [
    {
        name: " MARVEL ",
        rating: " 9/10",
        cover: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-168092,resizemode-75,msid-105684519/news/international/us/marvel-upcoming-movies-in-2024-from-venom-3-to-deadpool-3-release-dates-of-all-films.jpg ",
        link: "http://www.primevideo.com"
    },

    {
        name: "FURIOSA ",
        rating: "9.5/10",
        cover: " https://images.news18.com/webstories/2023/12/MV5BNzg2YzY0NzgtN2Q1My00ZGVlLWIyZDgtZTM4NjdiOTFhMTJkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_-scaled.jpg ",
        link: "http://www.primevideo.com"
    },
    {
        name: " STEPHEN KING'S IT",
        rating: "9.8/10 ",
        cover: "https://media.gq-magazine.co.uk/photos/5d13a03d0c56cfe9f31d3a99/master/w_320%2Cc_limit/It-GQ-30Jul14_rex_b.jpg",
        link: "http://www.primevideo.com"
    },

    {
        name: " BHAKSHAK",
        rating: "10/10",
        cover: "https://static.tnn.in/thumb/msid-107173612,thumbsize-123372,width-1280,height-720,resizemode-75/107173612.jpg ",
        link: "http://www.primevideo.com"
    },

    {
        name: " DEVARA",
        rating: "9.6/10 ",
        cover: "https://img.mensxp.com/media/content/2023/Dec/Upcoming-South-films-ready-to-rule-of-Bollywood-in-2024-7_658e8d3caac1d.jpeg ",
        link: "http://www.primevideo.com"
    },
    {
        name: " THE CREATOR",
        rating: "9.9/10 ",
        cover: "https://lumiere-a.akamaihd.net/v1/images/p_disney_thecreator_v1_2776_cc1a5f09.jpeg ",
        link: "http://www.primevideo.com"
    },

]

mdata.map((value, i) => {
    document.querySelector('#result').innerHTML += `

    <div class="col-md-4" >
    <div class="card" style="width: 20rem; border:2px solid black;" >
  <img src="${value.cover}"  class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${value.name} </h5>
    <p class="card-text">Rating ${value.rating}</p>
    <a href="${value.link}" class="btn btn-primary">Watch now</a>
  </div>
</div>
</div>
    `
})