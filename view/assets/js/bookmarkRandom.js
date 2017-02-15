var bookmarksContainer = document.getElementById('bookmarks')
var bookmarksList = document.getElementById('bm-list')
var xhr = new XMLHttpRequest()
var url = 'http://localhost:9200/api/bookmarks/'

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);

        generateBookmark(data)

    }
};

xhr.open("GET", url, true);
xhr.send();


generateBookmark = (data) => {
    var n = Math.floor(Math.random() * (data.bookmarks.length));
    var arrayURLs = []
    for (var i = 0; i < data.bookmarks.length; i++) {
        arrayURLs.push(data.bookmarks[n])
    }
    console.log(n)
    var bm = data.bookmarks[n]
    console.log(bm)

    var bmContainer = document.createElement("li")

    var bmRow = document.createElement("div")
    bmRow.classList.add("random-row")

    var bmCard = document.createElement("div")
    bmCard.classList.add("bm")
    bmCard.classList.add("card")


    var bmWrapper = document.createElement("div")
    bmWrapper.classList.add("wrapper")

    var bmDateAdded = document.createElement("div")
    bmDateAdded.classList.add("date-added")
    var bmDate = document.createElement("p")
    bmDate.classList.add("date")
    bmDate.innerHTML = bm.dateAdded
    bmDateAdded.appendChild(bmDate)

    var bmMetaData = document.createElement("div")
    bmMetaData.classList.add("data")
    var bmMetaDataContent = document.createElement("div")
    bmMetaDataContent.classList.add("content")

    var bmCategory = document.createElement("span")
    bmCategory.classList.add("category")

    var bmTitle = document.createElement("h1")
    bmTitle.classList.add("title")
    bmTitle.innerHTML = bm.title

    /* **************** */
    var bmTagCloud = document.createElement("div")
    bmTagCloud.classList.add("bm-tag-cloud")
    var bmT1 = document.createElement("input")
    var bmT2 = document.createElement("input")
    var bmT3 = document.createElement("input")
    var bmT4 = document.createElement("input")
    bmT1.type = "submit"
    bmT1.value = "thisisatag"
    bmT2.type = "submit"
    bmT2.value = "thisisatag"
    bmT3.type = "submit"
    bmT3.value = "thisisatag"
    bmT4.type = "submit"
    bmT4.value = "thisisatag"
    bmTagCloud.appendChild(bmT1)
    bmTagCloud.appendChild(bmT2)
    bmTagCloud.appendChild(bmT3)
    bmTagCloud.appendChild(bmT4)
        /*********** */

    // url
    var bmURL = document.createElement("a")
    bmURL.innerHTML = bm.url
    bmURL.classList.add('url')
    bmURL.setAttribute("href", bm.url)

    var bmNotesP = document.createElement("p")
    bmNotesP.textContent = "Going to catch the red dot today going to catch the red dot today under the bed, so poop on grasses ignore the squirrels, you'll never catch them anyway yet jump around on couch, meow constantly until given food, or burrow under covers. Kitty scratches couch bad kitty. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked! spit up on light gray carpet instead of adjacent linoleum so climb a tree, wait for a fireman jump to fireman then scratch his face for poop on grasses. Scratch the postman wake up lick paw wake up owner meow meow cats secretly make all the worlds muffins, and go into a room to decide you didn't want to be in there anyway."
    bmNotesP.classList.add("text")
    var bmLabel = document.createElement("label")
    bmLabel.classList.add("menu-button")


    var bmCheckBox = document.createElement("input")
    bmCheckBox.type = "checkbox"
    bmCheckBox.id = "show-menu"

    var bmCardMenuContent = document.createElement("ul")
    bmCardMenuContent.classList.add("menu-content")
    var bmCardMenuLi = document.createElement("li")
    var bmCardLiA1 = document.createElement("a")
    var bmCardMenuLi2 = document.createElement("li")
    var bmCardLiA2 = document.createElement("a")
    var bmCardMenuLi3 = document.createElement("li")
    var bmCardLiA3 = document.createElement("a")
    bmCardMenuLi.appendChild(bmCardLiA1)
    bmCardMenuLi2.appendChild(bmCardLiA2)
    bmCardMenuLi3.appendChild(bmCardLiA3)
    bmCardMenuContent.appendChild(bmCardMenuLi)
    bmCardMenuContent.appendChild(bmCardMenuLi2)
    bmCardMenuContent.appendChild(bmCardMenuLi3)


    bmMetaDataContent.appendChild(bmCategory)
    bmMetaDataContent.appendChild(bmTitle)
    bmMetaDataContent.appendChild(bmTagCloud)
    bmMetaDataContent.appendChild(bmURL)
    bmMetaDataContent.appendChild(bmNotesP)
    bmMetaDataContent.appendChild(bmLabel)

    bmContainer.classList.add('bm')
    bmMetaData.appendChild(bmMetaDataContent)
    bmWrapper.appendChild(bmDateAdded)
    bmWrapper.appendChild(bmMetaData)
    bmCard.appendChild(bmWrapper)
    bmRow.appendChild(bmCard)
    bmContainer.appendChild(bmRow)
    bookmarksList.appendChild(bmContainer)

    console.log(bm.title)

}