<template>
    <form class="row my-4 bg-dark p-3">
        <div class="form-group col-2 m-0">
            <select class="form-control" id="youtubeSearchType" v-model="searchType">
                <option value="playlist">playlist</option>
                <option value="video">video</option>
                <option value="channel">channel</option>
            </select>

        </div>
        <input type="text" v-model="searchTerm" class="col-6 mx-2" placeholder="Search Text, Term, Channel" id="youtubeSearchTerm">
        <button class="btn btn-primary col-2" id="youtubeSearchBtn" @click.prevent="submitRequest">Submit</button>
        <div id="resultWrapper">
        </div>
    </form>
</template>
<script>

const apiKey = 'AIzaSyDvtqDh6EkhAtqWVHysogZx7Iavz4BIPM0';
export default {
    data: function () {
        return {
            searchTerm: '',
            searchType: 'playlist'
        }    
    },
    methods: {
        submitRequest: function() {
            if (this.searchType == 'video') {
                if (sessionStorage.getItem(this.searchTerm)) {
                    displayThumbnails(JSON.parse(sessionStorage.getItem(this.searchTerm)));
                } else {
                    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${this.searchTerm}&key=${apiKey}`)
                        .then((res) => {
                            if (res.ok) {
                                return res.json();
                            }
                        }).then((json) => {
                            console.log(json);
                            // Display Thumbnails from recently fetched data.
                            sessionStorage.setItem(this.searchTerm, JSON.stringify(json.items));
                            displayThumbnails(json.items);
                        }).catch((error) => {
                            console.log(error);
                        });
                }
                
            } else {
                fetch(`https:www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=${apiKey}&part=snippet,contentDetails,statistics,status`)
                        .then((res) => {
                            if (res.ok) {
                                return res.json();
                            }
                        }).then((json) => {
                            console.log(json);
                        }).catch((error) => {
                            console.log(error);
                        });
            }
        
           
        }
    }
}

function createThumbnail(srcLink) {
    let img = document.createElement('img');
    img.classList = "offset-1 offset-sm-0 col-10 col-sm-4 col-md-3 col-lg-2 mb-3";
    img.src = srcLink;
    img.addEventListener('click', function() {
    });
    return img;
}
 function displayThumbnails(items) {
     // a web component
     console.log(items);
    let resultWrapper = document.getElementById('resultWrapper');
    resultWrapper.innerHTML = "";
    for (let i = 0; i < items.length; ++i) {
        if (i > 10) {
            break;
        }
    resultWrapper.appendChild(createThumbnail(items[i].snippet.thumbnails.default.url));
    }
 }
</script>
<style scoped>
    /deep/ img {
        width: 100%;
        height: 250px;
        transition: all .30s ease-in-out;
    }
    @media screen and (min-width: 845px) {
        /deep/ img:hover {
            transform: scale(1.1);
            border-radius: 10%;
            cursor: pointer;
        }		
    }
</style>