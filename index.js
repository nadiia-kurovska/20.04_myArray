// function MyArray() {
//     this.length = 0;
// }
class MyArray{
    constructor(){
        this.length = 0;
    }

    push(newElem){
        this[this.length] = newElem;
        this.length++;
        return this.length;
    }

    pop() {
        if(this.length > 0){
            const lastItem = this[this.length -1];
            delete this[--this.length];
            return lastItem;
        }
        return undefined;
    }

    shift(){
        if(this.length > 0) {
            const firstItem = this[0];
            delete this[0];
            this.length--;
            return firstItem;
        }
        return undefined;
    }

    unshift(newElem) {
        // let i = this[0]
        // i = this[i++];//not working yet
        this[0] = newElem;
        this.length++;
        return this.length;
    }

    forEach(arr){
        function addOne(){
            for(num of arr){
                num += 1;
        }
    }

    isMyArray(arr){
        if (arr instanceof MyArray){
            return arr
        }
        return undefined
    }

}



// function MyArrayProto(){
//     this.push = function (newElem){
//         this[this.length] = newElem;
//         this.length++;
//         return this.length;
//     };

//     this.pop = function () {

//         if(this.length > 0){
//             const lastItem = this[this.length -1];
//             delete this[--this.length];
//             return lastItem;
//         }
//         return undefined;
//     };

//     this.unshift = function(newElem){
//         this[0] = newElem;
//         this.length++;
//         return this.length;
//     };//how to save the first item of the initial array?

//     this.shift = function(){
//         if(this.length > 0) {
//             const firstItem = this[0];
//             delete this[0];
//             this.length--;
//             return firstItem;
//         }
//         return undefined;
//     };
// }

// MyArray.prototype = new MyArrayProto();

const myArr1 = new MyArray();

const arr = [];