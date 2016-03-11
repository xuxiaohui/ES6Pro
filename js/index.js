/**
 * Created by TK on 2016/2/9.
 */
var s = new Set();
s.add("hello").add("goodbye").add("hello");
console.log(s.size ===2);
console.log(s.has("hello"));