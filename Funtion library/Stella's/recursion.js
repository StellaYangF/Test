// 菲波那切数列Fibonacci sequence
function recurse(n){
    if(n<3){return 1}
    else{
        return recurse(n-1)+recurse(n-2)
    }
}

// for loop
function rese(n){
    if(n<3) {
        return 1;
    }else{
        var f1=1,f2=2,fn;
        for(var i=3;i<=n;i++){
            fn=f1+f2;
            f1=f2;
            f2=fn;
        }
        return fn;
    }
}