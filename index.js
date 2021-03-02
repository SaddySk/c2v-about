console.log('About > ClickToVisit.in');

let html, image, about;
let founder = document.getElementById('founder');
let html1 = `
<div class="row mt-5">
<!-- Image  -->
<div
  class="card me-5 col-md-5 border-0 "
  id="imageFounder1"
>
  <img src="assets/man.jpg" class="card-img-top" alt="Description" />
</div>
<!-- Paragraph -->
<div class="card mx-auto col-md-5 fs-5 text-center border-0">
  <div
    class="card-body align-items-center "
    id="aboutFounder1"
  >
    <p class="card-text lh-lg">
      2222222222222222222222222Deserunt necessitatibus tempore
      mollitia cupiditate asperiores distinctio, beatae esse! Esse
      excepturi, debitis, error ipsa necessitatibus ullam minus
      assumenda mollitia amet nulla earum!
    </p>
  </div>
</div>
</div>
`
let html2 = `
<div class="row mt-5">
<!-- Image  -->
<div
  class="card me-5 col-md-5 border-0 "
  id="imageFounder2"
>
  <img src="assets/man.jpg" class="card-img-top" alt="Description" />
</div>
<!-- Paragraph -->
<div class="card mx-auto col-md-5 fs-5 text-center border-0">
  <div
    class="card-body align-items-center "
    id="aboutFounder2"
  >
    <p class="card-text lh-lg">
      1111111111111111111111111Deserunt necessitatibus tempore
      mollitia cupiditate asperiores distinctio, beatae esse! Esse
      excepturi, debitis, error ipsa necessitatibus ullam minus
      assumenda mollitia amet nulla earum!
    </p>
  </div>
</div>
</div>
`
aboutFounders(1);

function aboutFounders(number) {
    html = ((number == 1) ? html1 : html2);
    
    founder.innerHTML = html;
    image = document.getElementById(`imageFounder${number}`);
    about = document.getElementById(`aboutFounder${number}`);
    image.classList.add('animate__animated', 'animate__fadeIn', 'animate__slow');
    about.classList.add('animate__animated', 'animate__backInRight', 'animate__slow');
    setTimeout(() => {
        image.classList.add('animate__animated', 'animate__fadeOut');
        about.classList.add('animate__animated', 'animate__backOutRight');
        setTimeout(() => {
            founder.innerHTML = '';
            number = ((number == 1) ? 2 : 1);
            aboutFounders(number);
        }, 1500);
    }, 30000);
}