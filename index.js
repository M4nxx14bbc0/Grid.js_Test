var gridjs = window.gridjs;
new gridjs.Grid({
    columns: ['Name', 'Surname', 'E-mail'],
    search: true,
    data: [
        ['Manuel','Parra','mparrarodriguez95@gmail.com'],
        ['Francisco Antonio', 'Parra Rosas', 'frankyparra@hotmail.com'],
        ['Maura', 'Rodriguez Mergildo', 'maurarodriguez@hotmail.it']
    ]
}).render(document.getElementById('table'));