/* OPEN PAGE */

function openPage(pageId){

  document.getElementById(pageId).style.display = "block";

  document.body.classList.add("modal-open");

}

/* CLOSE PAGE */

function closePages(){

  document.querySelectorAll('.hidden-page').forEach(page => {

    page.style.display = "none";

  });

  document.body.classList.remove("modal-open");

}