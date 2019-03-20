// 菲波那切数列Fibonacci sequence
function recurse(n){
    if(n<3){return 1}
    else{
        return add(n-1)+add(n-2)
    }
}