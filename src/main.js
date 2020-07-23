let html = document.querySelector('#html');
let style = document.querySelector('#style')

let string = `/*你好，我是一名前端萌新
*为了展示我的基本功
*接下来我要为大家画一个八卦图
*首先画一个div
**/
#div1{
    border:1px solid #000;
    width:200px;
    height:200px;
}
/*接下来开始变化了
*把div变成一个圆圈圈
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,.5);
    border:none;
}
/*八卦由阴阳组成
*一黑一白
*/
#div1{
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 47%, rgba(255,255,255,1) 47%, rgba(0,0,0,1) 47%, rgba(0,0,0,1) 100%);
}
/*然后给这个圆圈圈
*加一个魔丸和一个灵珠
*/
#div1::before{
    width:100px;
    height:100px;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:#fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    left:50%;
    transform:translateX(-50%);
    bottom:0;
    border-radius:50%;
    background:#000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%);
}
/*至此,八卦图画完
*/
`;

let string2 = '';
let n = 0;

let step = () => {
    setTimeout(() => {
        //如果是回车就替换为br
        //如果不是回车就直接加字符串
        if (string[n] === '\n') {
            string2 += '<br>'
        } else if (string[n] === ' ') {
            string2 += '&nbsp;';
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        if (n < string.length - 1) {
            n = n + 1;
            window.scrollTo(0, 9999);
            html.scrollTo(0, 99999);
            step();
        } else {

        }
    }, 0)
}

step();