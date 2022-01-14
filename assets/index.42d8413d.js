var w=Object.defineProperty;var _=(o,h,r)=>h in o?w(o,h,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[h]=r;var a=(o,h,r)=>(_(o,typeof h!="symbol"?h+"":h,r),r);import{d as x,r as f,o as S,a as y,c as p,b as d,t as k,u as v,F as M,p as C,e as P,f as R,g as T,h as b}from"./vendor.55611bcf.js";const I=function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}};I();var E=(o,h)=>{const r=o.__vccOpts||o;for(const[l,e]of h)r[l]=e;return r};const F=o=>(C("data-v-3d16366f"),o=o(),P(),o),H=F(()=>d("h1",{class:"title"},"Snake Game",-1)),L={class:"title-item"},A={class:"title-item"},B=x({setup(o){var h=f(null),r=f(null),l=f(null);let e,n=f(0),c=f(0);S(()=>{const u=new m;document.addEventListener("keydown",u.arrowPressed),u.start(),n.value=u.score});class m{constructor(t=20,i=window.innerWidth/20,s=window.innerHeight/20){a(this,"cRef");a(this,"ctx");a(this,"unit");a(this,"width");a(this,"height");a(this,"canvasColor");a(this,"color2");a(this,"snakeColor");a(this,"foodColor");a(this,"snake");a(this,"velocity");a(this,"timer");a(this,"food");a(this,"score");a(this,"playingMode");e=this,this.cRef=h.value,this.ctx=null,this.unit=t,this.width=i,this.height=s,this.canvasColor="rgba(128, 128, 128, 0.3)",this.color2="rgba(128, 128, 128, 0.5)",this.snakeColor="#1B5E20",this.foodColor="#ff0000",this.snake=[],this.velocity={x:1,y:0},this.timer=0,this.food={x:Math.random()*this.width,y:Math.random()*this.height},this.score=0,this.playingMode=!1}setup(){window.innerWidth>=1080?this.unit=40:window.innerWidth>=720?this.unit=30:this.unit=20,l.value.style.height=window.innerHeight-r.value.offsetHeight+"px";let t=1;window.innerWidth>=600&&(t=.8),this.cRef.width=Math.floor(window.innerWidth*t/this.unit)*this.unit,this.cRef.height=Math.floor((window.innerHeight-r.value.offsetHeight-10)/this.unit)*this.unit,this.width=Math.floor(this.cRef.width/this.unit),this.height=Math.floor(this.cRef.height/this.unit)}cleanTimer(){clearInterval(this.timer)}togglePausePlay(){this.playingMode?(this.playingMode=!1,this.timer&&this.cleanTimer()):(this.playingMode=!0,this.timer&&this.cleanTimer(),this.timer=setInterval(()=>this.moveNext(),150))}start(){this.setup();let t=Math.floor(this.width/2),i=Math.floor(this.height/2);this.snake=[],this.velocity={x:1,y:0},this.food={x:Math.random()*this.width,y:Math.random()*this.height},this.snake.push({x:t,y:i}),this.snake.push({x:t-1,y:i}),this.snake.push({x:t-2,y:i}),this.snake.push({x:t-3,y:i}),this.snake.push({x:t-4,y:i}),this.updateScore(),this.randomizeFood(),this.playingMode=!1,this.moveNext()}updateScore(){this.score=this.snake.length*10,n.value=this.score}didSnakeEat(){return this.snake[0].x===this.food.x&&this.snake[0].y===this.food.y?(this.randomizeFood(),this.updateScore(),!0):!1}restart(){c.value<n.value&&(c.value=n.value),this.cleanTimer(),this.playingMode=!1,this.start()}checkForMistakes(){if(this.snake[0].x<0||this.snake[0].x>=this.width||this.snake[0].y<0||this.snake[0].y>=this.height){this.restart();return}this.snake.forEach(t=>{if(this.snake[0]!==t&&this.snake[0].x===t.x&&this.snake[0].y===t.y){this.restart();return}})}moveNext(){var s;let t={x:this.snake[0].x,y:this.snake[0].y};t.x+=this.velocity.x,t.y+=this.velocity.y,this.snake.unshift(t),this.checkForMistakes(),this.didSnakeEat()||this.snake.pop(),(s=this.ctx)==null||s.clearRect(0,0,this.width*this.unit,this.height*this.unit),this.draw()}moveLeft(){this.snake[0].x-this.snake[1].x==0&&(this.velocity={x:-1,y:0})}moveRight(){this.snake[0].x-this.snake[1].x==0&&(this.velocity={x:1,y:0})}moveUp(){this.snake[0].y-this.snake[1].y==0&&(this.velocity={x:0,y:-1})}moveDown(){this.snake[0].y-this.snake[1].y==0&&(this.velocity={x:0,y:1})}randomizeFood(){this.food={x:Math.floor(Math.random()*this.width),y:Math.floor(Math.random()*this.height)},this.snake.forEach(t=>{t.x===this.food.x&&t.y===this.food.y&&this.randomizeFood()})}draw(){this.ctx=this.cRef.getContext("2d"),this.ctx.fillStyle=this.color2,this.ctx.fillRect(0,0,this.width*this.unit,this.height*this.unit),this.ctx.fillStyle=this.canvasColor;for(let t=0;t<this.width;t+=1)for(let i=0;i<this.height;i+=1)(t%2==0&&i%2==1||t%2==1&&i%2==0)&&this.ctx.fillRect(t*this.unit,i*this.unit,this.unit,this.unit);this.drawSnake(),this.drawFood()}drawSnake(){this.ctx.beginPath(),this.ctx.fillStyle=this.snakeColor;let t={x:0,y:0};this.snake.forEach((i,s)=>{s===0?(t.x=this.velocity.x,t.y=this.velocity.y,this.drawSnakeHead(i,t)):s===this.snake.length-1?(t.x=this.snake[s-1].x-this.snake[s].x,t.y=this.snake[s-1].y-this.snake[s].y,this.drawSnakeTail(i,t)):(t.x=this.snake[s-1].x-this.snake[s].x,t.y=this.snake[s-1].y-this.snake[s].y,this.drawSnakeBody(i,t))}),this.ctx.closePath()}rotateSnakePart(t,i){this.ctx.translate((t.x+.5)*this.unit,(t.y+.5)*this.unit);var s=0;i.x===1&&i.y===0?s=0:i.x===-1&&i.y===0?s=Math.PI:i.x===0&&i.y===1?s=Math.PI*.5:i.x===0&&i.y===-1&&(s=Math.PI*1.5),this.ctx.rotate(s),this.ctx.translate(-1*(t.x+.5)*this.unit,-1*(t.y+.5)*this.unit)}drawSnakeHead(t,i){this.ctx.save(),this.rotateSnakePart(t,i),this.ctx.fillStyle=this.snakeColor,this.ctx.beginPath(),this.ctx.moveTo(t.x*this.unit,(t.y+.2)*this.unit),this.ctx.lineTo((t.x+.2)*this.unit,t.y*this.unit),this.ctx.lineTo((t.x+1)*this.unit,(t.y+.3)*this.unit),this.ctx.lineTo((t.x+1)*this.unit,(t.y+.7)*this.unit),this.ctx.lineTo((t.x+.2)*this.unit,(t.y+1)*this.unit),this.ctx.lineTo(t.x*this.unit,(t.y+.8)*this.unit),this.ctx.closePath(),this.ctx.fill(),this.ctx.restore()}drawSnakeTail(t,i){this.ctx.save(),this.rotateSnakePart(t,i),this.ctx.fillStyle=this.snakeColor,this.ctx.beginPath(),this.ctx.moveTo(t.x*this.unit,(t.y+.5)*this.unit),this.ctx.lineTo((t.x+1)*this.unit,(t.y+.2)*this.unit),this.ctx.lineTo((t.x+1)*this.unit,(t.y+.8)*this.unit),this.ctx.closePath(),this.ctx.fill(),this.ctx.restore()}drawSnakeBody(t,i){this.ctx.save(),this.rotateSnakePart(t,i),this.ctx.fillStyle=this.snakeColor,this.ctx.beginPath(),this.ctx.moveTo(t.x*this.unit,(t.y+.2)*this.unit),this.ctx.bezierCurveTo((t.x+.3)*this.unit,(t.y+.4)*this.unit,(t.x+.6)*this.unit,(t.y-.1)*this.unit,(t.x+1)*this.unit,(t.y+.2)*this.unit),this.ctx.lineTo((t.x+1)*this.unit,(t.y+.8)*this.unit),this.ctx.bezierCurveTo((t.x+.6)*this.unit,(t.y+.6)*this.unit,(t.x+.3)*this.unit,(t.y+1)*this.unit,t.x*this.unit,(t.y+.8)*this.unit),this.ctx.closePath(),this.ctx.fill(),this.ctx.restore()}drawFood(){this.ctx.globalAlpha=.8;let t=this.ctx.createRadialGradient((this.food.x+.4)*this.unit,(this.food.y+.4)*this.unit,0,(this.food.x+.5)*this.unit,(this.food.y+.5)*this.unit,this.unit);t.addColorStop(0,"#aaaa00"),t.addColorStop(.1,"#999922"),t.addColorStop(.1,"#777733"),t.addColorStop(.2,"#441505"),t.addColorStop(.4,"#880101"),t.addColorStop(.9,"#cc0000"),t.addColorStop(1,this.foodColor),this.ctx.fillStyle=t,this.ctx.beginPath(),this.ctx.arc((this.food.x+.5)*this.unit,(this.food.y+.5)*this.unit,this.unit*.3,0,2*Math.PI),this.ctx.closePath(),this.ctx.fill()}arrowPressed(t){t.code==="KeyP"&&e.togglePausePlay(),e.playingMode&&(t.code==="ArrowUp"?e.moveUp():t.code==="ArrowDown"?e.moveDown():t.code==="ArrowLeft"?e.moveLeft():t.code==="ArrowRight"&&e.moveRight())}}return(u,t)=>(y(),p(M,null,[d("div",{class:"title-container",ref_key:"titleRef",ref:r},[H,d("span",L,"SCORE: "+k(v(n)),1),d("span",A,"HIGH SCORE: "+k(v(c)),1)],512),d("div",{class:"container",ref_key:"containerRef",ref:l},[d("canvas",{id:"snakeCanvas",ref_key:"canvasRef",ref:h},null,512)],512)],64))}});var N=E(B,[["__scopeId","data-v-3d16366f"]]);const O=x({setup(o){return(h,r)=>(y(),R(N))}}),g=T(O);g.use(b);g.mount("#app");