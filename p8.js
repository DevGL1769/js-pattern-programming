let n=4;

for(let i=0;i<n;i++){
    for(let j=0;j<n-i-1;j++){
        process.stdout.write(" ");
    }

    for(let j=0;j<i+1;j++){
        process.stdout.write("* ");
    }
    console.log();
}

for(let i=0;i<n;i++){

    for(let k=0;k<i;k++){
        process.stdout.write(" ");
    }
    
    for(let j=0;j<n-i-1;j++){
        process.stdout.write(" *");
    }
    console.log();
}