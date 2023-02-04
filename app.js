// On search, grab input value of search box and append a random image received from API that is returned matching search query
$("#search").on('click', async function(e){
    try {
        $('h1').removeClass('error');
        e.preventDefault();
        const random = Math.floor(Math.random() * 50);
        const request = await axios.get('http://api.giphy.com/v1/gifs/search', {
            params: {
            q: $('input').val(),
            api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
        }
    });
    $('#container').append(`<img src='${request.data.data[random].images.original.url}' alt='gif' class='gif'>`)
    console.log(request.data.data[random].images.original.url);
    } catch (error) {
        $('h1').addClass('error');
    }
})


// On clicking reset, empty container containing all gifs
$("#reset").on('click', function(e){
    e.preventDefault();
    $('#container').empty();
})