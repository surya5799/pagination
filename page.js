var main = [{
    fruitsName: "Orange",
    cost: 500,
    quantity: "1kg"
  },
  {
    fruitsName: "Apple",
    cost: 60,
    quantity: "2kg"
  },
  {
    fruitsName: "Graps",
    cost: 20,
    quantity: "3kg"
  },
  {
    fruitsName: "Mango",
    cost: 90,
    quantity: "4kg"
  },
  {
    fruitsName: "Banana",
    cost: 95,
    quantity: "7kg"
  },
  {
    fruitsName: "Cherry",
    cost: 105,
    quantity: "72kg"
  },
  {
    fruitsName: "Guava",
    cost: 910,
    quantity: "9kg"
  },
  {
    fruitsName: "Blueberry",
    cost: 100,
    quantity: "10kg"
  },
  {
    fruitsName: "Watermelon",
    cost: 110,
    quantity: "3kg"
  },
  {
    fruitsName: "Papaya",
    cost: 20,
    quantity: "1kg"
  },
  {
    fruitsName: "Orange",
    cost: 95,
    quantity: "7kg"
  },
  {
    fruitsName: "Apple",
    cost: 70,
    quantity: "1kg"
  },
  {
    fruitsName: "Graps",
    cost: 300,
    quantity: "10kg"
  },
  {
    fruitsName: "Mango",
    cost: 90,
    quantity: "2kg"
  },
  {
    fruitsName: "Banana",
    cost: 250,
    quantity: "5kg"
  },
  {
    fruitsName: "Cherry",
    cost: 100,
    quantity: "1kg"
  },
  {
    fruitsName: "Orange",
    cost: 500,
    quantity: "1kg"
  },
  {
    fruitsName: "Apple",
    cost: 60,
    quantity: "2kg"
  },
  {
    fruitsName: "Graps",
    cost: 20,
    quantity: "3kg"
  },
  {
    fruitsName: "Mango",
    cost: 90,
    quantity: "4kg"
  },

];

var fruits = main
var current_page = 1;
var records_per_page = 5;

let data = "";

// function myList(e) {
//   data = e.target.value;
//   console.log(data, "mylist");

//   changePage(1);
// }

//prev page function

function prevPage() {
  if (current_page > 1) {
    current_page--;
    changePage(current_page);
  }
}

//next page function
function nextPage() {
  if (current_page < numPages()) {
    current_page++;
    changePage(current_page);
  }
}
//select data function
function dropdown(e) {
  console.log(e.target.value);
  const setRow = e.target.value;
  records_per_page = setRow
  changePage(current_page);
}

function changePage(page) {

  const btn_next = document.getElementById("btn_next");
  const btn_prev = document.getElementById("btn_prev");
  const listing_table = document.getElementById("tbody");
  const page_span = document.getElementById("page");
  const search_value = document.getElementById('search_value')

  search_value.addEventListener('keyup', debounce(function (e) {
    data = e.target.value;
    changePage(1)
  }, 3000))

  // if (page < 1) page = 1;
  // if (page > numPages()) page = numPages();

  listing_table.innerHTML = "";
  if (!data == "") {
    fruits = fruits.filter((n) => {
      return n.fruitsName.toLowerCase().includes(data.toLowerCase())
    })
    pageButton.innerHTML = "";
  } else {
    fruits = main
    pageButton.innerHTML = "";
  }

    //table
    for (var i = (page - 1) * records_per_page; i < (page * records_per_page); i++) {
      var row = `<tr>
                          <td>${fruits[i].fruitsName}</td>
                          <td>${fruits[i].cost}</td>
                          <td>${fruits[i].quantity}</td>
                          </tr>`
      listing_table.innerHTML += row;
    }
    page_span.innerHTML = page + "of" + numPages();

    if (page == 1) {
      btn_prev.style.visibility = "hidden";
    } else {
      btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
      btn_next.style.visibility = "hidden";
    } else {
      btn_next.style.visibility = "visible";
    }
    gopage(numPages());

  }

  function numPages() {
    return Math.ceil(fruits.length / records_per_page);
  }

  //1,2 buttons
  function gopage(pages) {

    for (let i = 1; i <= pages; i++) {
      pageButton.innerHTML += `<button id="totalPage" onclick={totalPage(${i})} value="${i}">${i}</button>`
    }
  }

  function totalPage(page) {
    const pageButton = document.getElementById('pageButton')
    pageButton.innerHTML = "";
    changePage(page)
  }

  const debounce = (func, delay) => {
    let debounceTimer
    return function () {
      const context = this
      const args = arguments
      clearTimeout(debounceTimer)
      debounceTimer
        = setTimeout(() => func.apply(context, args), delay)
    }
  }
window.onload = function () {
  changePage(current_page);
};

