//tabs
function openCity(evt, cityName) 
{
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) 
    {
    tabcontent[i].style.display = "none";
    }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) 
    {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("booksimg");
var modalImg = document.getElementById("img01");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;

}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("Table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

//lightbox
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//loader
    (function() {
      emailjs.init("b-OzHNB_lGVfvhlzc"); 
    })();

        document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();

      const templateParams = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
      };

      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
          alert('Message sent successfully!');
        }, function(error) {
          alert('Failed to send the message: ' + error.text);
        });
    });


  window.addEventListener('load', function () 
  {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    preloader.style.display = 'none';
    content.style.display = 'block';
  });

//search
  function filterTable(input, tableId) {
  const filter = input.value.toLowerCase();
  const table = document.getElementById(tableId);
  const rows = table.getElementsByTagName("tb")[0].getElementsByTagName("tr");

  for (let row of rows) {
    let text = row.textContent.toLowerCase();
    row.style.display = text.includes(filter) ? "" : "none";
  }
}

function sortTable(tableId, colIndex) {
  const table = document.getElementById(tableId);
  const tbody = table.tBodies[0];
  const rows = Array.from(tbody.rows);
  const isNumeric = !isNaN(rows[0].cells[colIndex].innerText.trim());
  let asc = table.getAttribute("data-sort-dir") !== "asc";

  rows.sort((a, b) => {
    let valA = a.cells[colIndex].innerText.trim();
    let valB = b.cells[colIndex].innerText.trim();
    if (isNumeric) {
      return asc ? valA - valB : valB - valA;
    } else {
      return asc ? valA.localeCompare(valB) : valB.localeCompare(valA);
    }
  });

  // Append sorted rows
  for (let row of rows) {
    tbody.appendChild(row);
  }

  // Toggle sort direction
  table.setAttribute("data-sort-dir", asc ? "asc" : "desc");
}

//image
    window.onload = function() {
      const img = document.getElementById('sec_img');
      img.classList.add('moved');
    };