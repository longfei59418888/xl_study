
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


