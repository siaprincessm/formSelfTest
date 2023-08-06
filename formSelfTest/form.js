let title = [
    {
        'value':'Ms.',
        'name':'Ms.'
    },
    {
        'value':'Mrs.',
        'name':'Mrs.'
    },
    {
        'value':'Mr.',
        'name':'Mr.'
    }
]

let region = [
    {
        'value':'Region1',
        'name':'Region 1 Ilocos Region'
    },
    {
        'value':'Region2',
        'name':'Region 2 Cagayan Valley'
    },
    {
        'value':'Region3',
        'name':'Region 3 Central Luzon'
    },
    {
        'value':'Region4',
        'name':'Region 4-A Calabarzon'
    },
    {
        'value':'Mimaropa',
        'name':'Mimaropa Region'
    },
    {
        'value':'Region5',
        'name':'Region 5 Bicol Region'
    },
    {
        'value':'Region6',
        'name':'Region 6 Western Visayan'
    },
    {
        'value':'Region7',
        'name':'Region 7 Central Visayas'
    },
    {
        'value':'Region8',
        'name':'Region 8 Eastern Visayas'
    },
    {
        'value':'Region9',
        'name':'Region 9 Zamboanga Peninsula'
    },
    {
        'value':'Region10',
        'name':'Region 10 Northern Mindanao'
    },
    {
        'value':'Region11',
        'name':'Region 11 Davao Region'
    },
    {
        'value':'Region12',
        'name':'Region 12 Soccksargen'
    },
    {
        'value':'Region13',
        'name':'Region 13 Caraga'
    },
    {
        'value':'NCR',
        'name':'National Capital Region'
    },
    {
        'value':'CAR',
        'name':'Cordillera Administrative Region'
    },
    {
        'value':'BARMM',
        'name':'Bangsamoro Autonomous Region in Muslim Mindanao'
    },
]

let selectedTitle = document.querySelector('#selectTitle');
    for ( let eachTitle of title){
        selectedTitle.innerHTML += `
            <option value="${eachTitle.value}">${eachTitle.name}</option>
        `
    }

let selectedRegion = document.querySelector('#region-address');
    for (let eachRegion of region){
        selectedRegion.innerHTML += `
            <option value="${eachRegion.value}">${eachRegion.name}</option>
        `
    }

let btn = document.querySelector('#submitBtn');
    btn.addEventListener('click', function(){
        alert("Submission successful")

        let firstNameRequired = false;
        let lastNameRequired = false;
        let middleinitialRequired = false;

        let firstName = documetn.querySelector('#firstName').value;
        if ( firstName === null ) {
            firstNameRequired = true;
        }
        let errorNameDiv = document.querySelector('#name')
            errorNameDiv.innerHTML ='';
    })

let btnNext = document.querySelector('#nextBtn');
    btnNext.addEventListener('click', function (){
        alert("Test next page")
    })

