const card = document.querySelector('.card');

const getData = async () => {
    const uri = 'http://localhost:1337/webcasts';

    const response = await fetch(uri);

    //Convert to JSON to Array

    let list = await response.json();
    console.log(list);











    // list = list.data

    
    // list = Object.keys(list).map(keys => list);




    // list.forEach((x,index) => {
    //     console.log(x);
    // });
}

getData();

