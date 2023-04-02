const rows = document.querySelectorAll('tbody tr')

const years = []
let flag = true


for ( let i = 0; i < rows.length; i++ ) {
    const date = rows[i].querySelector('th').innerText
    const year = date.split(' ')[2]  

    if (years.length != 0) {
        if (years[years.length - 1].year == year) {
            changeColor(year, years[years.length - 1].color)
        } else {
            changeColor(year, !years[years.length - 1].color)
        }
    } else {
        changeColor(year, flag)
    }

    function changeColor(year, color) {
        const obj = {year, color}
        years.push(obj)
        if (obj.color) {
            rows[i].style.backgroundColor = 'red'
        }
    }  
}


console.log(years)



// let rows = document.querySelectorAll('tbody tr')

// let years = []
// let flag = true

// function changeColor() {
    
// }

// for (let i = 0; i < rows.length; i++ ) {
//     let date = rows[i].querySelector('th').innerText
//     let year = date.split(' ')[2]
    
//     if (years.length != 0) {
//         if (years[years.length - 1].year == year) {
//             let obj = {year, color: years[years.length - 1].color}
//             years.push(obj)
//             if (obj.color) {
//                 rows[i].style.backgroundColor = 'red'
//             }
//         } else {
//             let obj = {year, color: !years[years.length - 1].color}
//             years.push(obj)
//             if (obj.color) {
//                 rows[i].style.backgroundColor = 'red'
//             }
//         }
//     } else {
//         let obj = {year, color: flag}
//         years.push(obj)
//         if (obj.color) {
//             rows[i].style.backgroundColor = 'red'
//         }
//     }
// }


// console.log(years)

