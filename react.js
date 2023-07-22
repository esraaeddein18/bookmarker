var bookmarkSite=document.getElementById('bookmarkName');
var bookmarkUrl=document.getElementById('WebsiteURL');
var bookmarkBtn=document.getElementById('submitBtn');
var table = document.getElementById("table");
var deleteBtns;
var visitBtns;
var bookmarks = [];


//local storage
if (localStorage.getItem("bookMarker")) {
  bookmarks = JSON.parse(localStorage.getItem("bookMarker"));
  for (var l= 0; l < bookmarks.length; l++) {
    displayBookmarks(x);
  }
}

//display
function displayBookmarks(index)
  var siteBookmark = `
              <tr>
                <td>${index+ 1}</td>
                <td>${bookmarks[index].siteName}</td>              
                <td>
                  <button class="btn btn-visit" data-index="${index}">
                    <i class="fa-solid fa-eye pe-2"></i>Visit</button>
                </td>
                <td>
                  <button class="btn btn-delete pe-2" data-index="${index}">
                    <i class="fa-solid fa-trash-can"></i>Delete</button>
                </td>
            </tr>
            `;

  table.innerHTML += siteBookmark;

  
  deleteBtns = document.querySelectorAll(".btn-delete");
  if (deleteBtns) {
    for (var i= 0; i< deleteBtns.length; i++) {
      deleteBtns[i].addEventListener("click", function (e) {
        deleteBookmark(e);
      });
    }
  }
  visitBtns = document.querySelectorAll(".btn-visit");
  if (visitBtns) {
    for (var h = 0; h < visitBtns.length; h++) {
      visitBtns[h].addEventListener("click", function (e) {
        visitWebsite(e);
      });
    }
  }


//clear function
function clearInput() {
    siteName.value = "";
    siteUrl.value = "";
  }

//submit btn
  submitBtn.addEventListener("click", function () {
      bookmarks.push(bookmark);
      localStorage.setItem("bookmarksList", JSON.stringify(bookmarks));
      displayBookmark(v);
  });

//delete
  function deleteBookmark( ) {
    bookmarks.splice(index, 1);
    for (var v = 0; v < bookmarks.length; v++) {
      displayBookmarks(v);
    }
    localStorage.setItem("bookmarksList", JSON.stringify(bookmarks));
  }


