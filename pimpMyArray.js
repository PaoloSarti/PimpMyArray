/**
 * Some functions to initialize and manipulate arrays with functional operators.
 */
exports.pimpMyArray = function(){
    /**
     * Returns an array of length n,
     * in which every element is obtained by applying the function f to the index.
     * The index goes from 0 to n-1.
     */
    Array.tabulate = function(n, f){
        var a = []
        for(var i = 0; i < n ; i++){
            a[i] = f(i)
        }
        return a
    }

    /**
     * Returns an array of length n,
     * in which every element is obtained by applying the function f to the previous element,
     * starting from the first argument.
     */
    Array.iterate = function(start, n, f){
        var a = [start]
        for(i=1;i<n;i++){
            a[i]=f(a[i-1])
        }
        return a
    }

    /**
     * Returns an array in which every element is obtained from the previous one by applying the f function starting from the first argument.
     * Every element (including the first one) should pass the "predicate" condition.
     * When the first element doesn't satisfy it, the array is returned
     */
    Array.iterateUntil = function(start,predicate,f){
        var a = []
        var cur=start
        for(var i=0; predicate(cur); i++) {
            a.push(cur)
            cur=f(cur)
        }
        return a
    }

    /**
     * Range of integers from start to end-1
     */
    Array.range = function(start, end){
        var a = []
        for(var i=0; start+i<end; i++){
            a[i]=start+i
        }
        return a
    }

    /**
     * Array of elements provided by the function f (invoked without parameters)
     */
    Array.fill = function(n, f){
        var a = []
        for(var i=0; i<n; i++){
            a[i]=f()
        }
        return a
    }


    /**
     * Groups the elements of the array using as key the result of function f applied to every element
     */
    Array.prototype.groupBy = function(f){
        var m = new Map()
        this.forEach(e=>{
            var key = f(e)
            if(m.has(key)){
                m.get(key).push(e)
            }
            else {
                m.set(key,[e])
            }
        })
        return m
    }

    /**
     * Returns a new array without the element specified by the given index
     */
    Array.prototype.remove= function(i){
        var a = []
        for(var j=0; j<this.length;j++){
            if(j!==i){
                a.push(this[j])
            }
        }
        return a
    }

    /**
     * Returns an array without the first n values.
     * If n<=0, then the new array is equal to the first one
     */
    Array.prototype.skip = function(n){
        var a1 = []
        for(var i = Math.max(n,0); i<this.length; i++){
            a1.push(this[i])
        }
        return a1
    }

    /**
     * Partitions the array into two arrays, that are returned as elements of another array.
     * The first element (index 0) is the array of the elements that satisfy the predicate
     */
    Array.prototype.partition = function(predicate){
        var a = [[],[]]
        this.forEach(e=>{
            if(predicate(e)){
                a[0].push(e)
            }
            else {
                a[1].push(e)
            }
        })
        return a
    }


    /**
     * 
     * Returns an array with the first n elements of the array.
     * If the array has length<n, then the new array is equal to the first one
     * If n<=0, an empty array is returned
     */
    Array.prototype.take = function(n){
        var a1 = []
        for(var i=0; (i<this.length && i<n); i++){
            a1[i]=this[i]
        }
        return a1
    }
}