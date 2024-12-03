<script>
  import { Wave } from '$lib';
</script>

<div class="spinner-box">
    <div class="big-orbit leo"> 
      <!-- <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Faf%2F52%2F70%2Faf52702337310d821f08dc8db63c9851.jpg&f=1&nofb=1&ipt=d1068ffb316b83af17defafe02e9cc301d30a5f08a5fa93da452d77189b3e95b&ipo=images" alt=""> -->
    </div>
    <div class="big-orbit2 leo2">
    </div>
    <div class="planet leo">
      <Wave />
      <div class="water-wave"></div>
    </div>
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
	width: 155px;
	height: 155px;
  border: 3px solid var(--color-blue);
  animation: spin3D 3s linear .2s infinite;
  rotate: 200deg;
}

.big-orbit2 {
	width: 145px;
	height: 145px;
  border: 3px solid var(--color-blue);
  animation: spin3D 3s linear .2s infinite;
  rotate: 200deg;
}

.planet{
  background-color: var(--color-status-fine-border);
  width: 100px;
  height: 100px;
  animation: unset;
  overflow-y: hidden;
  border: 2px solid indigo;
  
}

.planet::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    var(--color-blue),
    var(--color-lightblue),
    var(--color-blue),
    var(--color-lightblue),
    var(--color-blue),
    var(--color-lightblue),
    var(--color-blue),
    var(--color-lightblue)
  );
  background-size: 400%;
  /*opacity: 0;*/
  transition: 0.5s;
  animation: animate 20s linear infinite;
  z-index: -1;
  border-radius: 50%;
}

.planet::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    var(--color-blue),
    var(--color-lightblue),
    var(--color-blue),
    var(--color-lightblue),
    var(--color-blue),
    var(--color-lightblue),
    var(--color-blue),
    var(--color-lightblue)
  );
  background-size: 400%;
  /*opacity: 0;*/
  filter: blur(20px);
  transition: 0.5s;
  animation: animate 20s linear infinite;
  z-index: -1;
  border-radius: 50%;
}

.water-wave{
  background-color: indigo;
  height: 50%;
  width: 100%;
  position: absolute;
  top: 53%;
  border-radius: 0 0 50% 50%;
}


@supports (animation-timeline: scroll(y)) {
 
  .big-orbit, .big-orbit2 {
    animation: spin3D linear;
    animation-timeline: scroll(y); 
  }

  .planet::before, .planet::after{
    animation: animate linear;
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

@keyframes animate
{
	0%
	{
		background-position: 0 0;
	}
	50%
	{
		background-position: 300% 0;
	}
	100%
	{
		background-position: 0 0;
	}
}
</style>