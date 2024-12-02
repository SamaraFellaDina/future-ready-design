<div class="spinner-box">
    <div class="big-orbit leo"> 
      <!-- <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Faf%2F52%2F70%2Faf52702337310d821f08dc8db63c9851.jpg&f=1&nofb=1&ipt=d1068ffb316b83af17defafe02e9cc301d30a5f08a5fa93da452d77189b3e95b&ipo=images" alt=""> -->
    </div>
    <div class="big-orbit2 leo2">
    </div>
    <div class="planet leo"></div>
  </div>

<style>
    .spinner-box {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: fixed;
  right: 230px;
}


.big-orbit {
	width: 165px;
	height: 165px;
  border: 1px solid var(--color-blue);
  animation: spin3D 3s linear .2s infinite;
  rotate: 200deg;
}

.big-orbit2 {
	width: 155px;
	height: 155px;
  border: 1px solid var(--color-blue);
  animation: spin3D 3s linear .2s infinite;
  rotate: 200deg;
}

.planet{
  background-color: var(--color-status-fine-border);
  width: 100px;
  height: 100px;
  animation: unset;
  z-index: -1;
  
}

@supports (animation-timeline: scroll(y)) {
 
  .big-orbit, .big-orbit2 {
    animation: spin3D linear;
    animation-timeline: scroll(y); 
  }
}

.leo {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
}

.leo2 {
  position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
 
}

@keyframes spin3D {
  from {
    transform: rotate3d(.5,.5,.5, 360deg);
  }
  to{
    transform: rotate3d(0deg);
  }
}
</style>