// The 'for' loop

let i = 0;

for (let i = 0; i < 3; i++) {
    console.log(i);
}

console.log(i);


for (let n = 2; n < 10; n++) {
    if (n % 2 != 0) continue;

    console.log(n);
}

// Replace 'for' with 'while

for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }

let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
  }