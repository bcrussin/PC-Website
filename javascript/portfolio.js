let ids = {
  church: ["portfolio-church", "church-details"],
  lakeMonticello: ["portfolio-lake-monticello", "lake-monticello-details"],
  parkSt: ["portfolio-park-st", "park-st-details"],
  keyWest: ["portfolio-key-west", "key-west-details"],
};

let items = document.getElementsByClassName("portfolio-item");

document.getElementById(ids.church[0]).onclick = function () {
  itemClicked(ids.church[0], ids.church[1]);
};
document.getElementById(ids.lakeMonticello[0]).onclick = function () {
  itemClicked(ids.lakeMonticello[0], ids.lakeMonticello[1]);
};
document.getElementById(ids.parkSt[0]).onclick = function () {
  itemClicked(ids.parkSt[0], ids.parkSt[1]);
};
document.getElementById(ids.keyWest[0]).onclick = function () {
  itemClicked(ids.keyWest[0], ids.keyWest[1]);
};

function itemClicked(parentId, detailsId) {
  let parent = document.getElementById(parentId);
  let details = document.getElementById(detailsId);

  if (details.style.maxHeight == "" || details.style.maxHeight == "0px") {
    for (const [item, id] of Object.entries(ids)) {
      if (id[0] != parentId) {
        hideDetails(id[1], id[0], false);
      }
    }

    showDetails(detailsId, parentId);
  } else {
    hideDetails(detailsId, parentId);
  }
}

function hideDetailsIfOpen(detailsId, parentId) {
  let parent = document.getElementById(parentId);
  let details = document.getElementById(detailsId);

  if (details.style.maxHeight != "" && details.style.maxHeight != "0px") {
    hideDetails(detailsId, parentId);
    return true;
  }

  return false;
}

function showDetails(detailsId, parentId) {
  let details = document.getElementById(detailsId);
  let parent = document.getElementById(parentId);

  details.style.visibility = "visible";
  details.style.maxHeight = "none";
  var height = details.offsetHeight;
  details.style.maxHeight = "0px";

  setTimeout(function () {
    details.style.maxHeight = height + "px";
  }, 10);

  parent.style.opacity = "1";
  parent.style.backgroundColor = "#dddddd";

  for (let i = 0; i < items.length; i++) {
    if (items[i].id != parentId) {
      items[i].style.opacity = "0.3";
    }
  }
}

function hideDetails(detailsId, parentId, changeOpacity = true) {
  let details = document.getElementById(detailsId);
  let parent = document.getElementById(parentId);

  details.style.visibility = "hidden";
  details.style.maxHeight = "0px";

  if (changeOpacity) {
    setTimeout(function () {
      parent.style.backgroundColor = "transparent";
      for (let i = 0; i < items.length; i++) {
        if (items[i].id != parentId) {
          items[i].style.opacity = "1";
        }
      }
    }, 400);
  } else {
    parent.style.backgroundColor = "transparent";
  }
}
