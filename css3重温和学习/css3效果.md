
#### 呼吸效果
```css
@-webkit-keyframes breathe{
	0%{ transform: scale(.95);-webkit-transform: scale(.95); }
	50%{ transform: scale(1.05); -webkit-transform: scale(1.05);}
	100%{ transform: scale(.95);-webkit-transform: scale(.95); }
}
@keyframes breathe{
	0%{ transform: scale(.95);-webkit-transform: scale(.95); }
	50%{ transform: scale(1.05); -webkit-transform: scale(1.05);}
	100%{ transform: scale(.95);-webkit-transform: scale(.95); }
}
p{
    -webkit-animation: breathe 1.5s infinite;
    animation: breathe 1.5s infinite;
}
```

#### 悬浮效果
```css
@keyframes floating {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(50px);
    }
    100% {
        transform: translateY(0px);
    }
}
p{
   animation: flotar 4s ease-in-out infinite;
}
```

#### 高光滑过
```sass
@keyframes jt-coms-height-bg-frame {
    0% {left: -20%;}
    30% {left: 120%;}
    100% {left: 120%;}
}
.jt-coms-height-bg-move {
    position: relative;
    overflow: hidden;
    &::after {
        content: '';
        position: absolute;
        top: 0%;
        left: 0;
        width: 50px;
        height: 100%;
        background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%);
        transform: skew(20deg);
        animation: 4s jt-coms-height-bg-frame infinite;
    }
}
```
