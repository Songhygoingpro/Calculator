// let plus = document.getElementById('plus');
//         let minus = document.getElementById('minus');
//         let multiply = document.getElementById('multiply');
//         let divide = document.getElementById('divide');
//         let equal = document.getElementById('equal');
//         let result = document.getElementById('result');

//         plus.addEventListener('click', function () {

//             // If result.value contains a plus sign, evaluate the expression and update result.textContent
//             if (result.value.includes('+') || result.value.includes('-')) {
//                 arr = result.value.split('');
//                 if(arr[arr.length-1] === '-' || arr[arr.length-1] === '='){
                    

//                     arr[arr.length -1]= '+';
//                     result.value = arr.join('');
//                 result.textContent = eval(result.value);
//                 result.value = result.textContent + '+';}
//             } else {
//                 result.value += '+';
//             }
//         });

//         minus.addEventListener('click', function () {

//             // If result.value contains a plus sign, evaluate the expression and update result.textContent
//             if (result.value.includes('-') || result.value.includes('+')) {
//                 result.textContent = eval(result.value);
//                 result.value = result.textContent + '-';
//             } else {
//                 result.value += '-';
//             }
//         });

//         equal.addEventListener('click', function () {
//             result.textContent = eval(result.value);
//             result.value = result.textContent
//         })