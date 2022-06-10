$.ajax({
    type: 'get',
    url: 'https://api.covid19api.com/summary',
    success: function (response) {
        for (var i = 0; i < response.Countries.length; i++) 
        {
            var TotalActive = response.Countries[i].TotalConfirmed - response.Countries[i].TotalRecovered
            var row = `<tr><td>${response.Countries[i].Country}</td>
                           <td>${response.Countries[i].TotalConfirmed}</td>
                           <td>${TotalActive}</td>
                           <td>${response.Countries[i].TotalRecovered}</td>
                           <td>${response.Countries[i].TotalDeaths}</td></tr>`
            $('#tbody').append(row)
        }
        $('#table').DataTable()
    },
    error: function () {
        var row = `<tr><td>Unavailble</td>
                       <td>Unavailble</td>
                       <td>Unavailble</td>
                       <td>Unavailble</td>
                       <td>Unavailble</td></tr>`
        $('#tbody').append(row)
    }
})