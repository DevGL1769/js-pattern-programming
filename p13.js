let n = 5;

for(let i=1;i<=n;i++){
    for(let j=n;j>i;j--){
        process.stdout.write(" ");
    }

    process.stdout.write("* ");

    if(i<=n){
        
        for(let k=1;k<i-1;k++){
            process.stdout.write("  ");
        }

        if (i > 1) {
            process.stdout.write("* ");
        }
    }
    console.log();
}

for(let i=n-1;i>0;i--){

    for(let j=n;j>i;j--){
        process.stdout.write(" ");
    }

    process.stdout.write("* ");

    if(i<=n){
        
        for(let k=1;k<i-1;k++){
            process.stdout.write("  ");
        }

        if (i > 1) {
            process.stdout.write("*");
        }
    }
    console.log();
}