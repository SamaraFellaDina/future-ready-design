 <script>
  import {IconLibrary} from '$lib'
  export let grade = ''
 </script>


<div class={grade}>
  <IconLibrary name='bad'/>
  <slot></slot>
</div>



<style>
 div {
  --message-border-radius: 2em;
  --message-padding: 1em;
  --message-gap:.3em;
  border-radius: var(--message-border-radius);
  background-color: var(--color-status-fine);
  border: solid 2px var(--color-status-fine-border);
  padding: var(--message-padding);

  display: flex;
  width: min-content;
  gap: var(--message-gap);
  align-items: center;
 }

 .good {
  background-color: var(--color-status-good);
  border: solid 2px var(--color-status-good-border);
  color: var(--color-status-good);
 }

 .decent {
  background-color: var(--color-status-decent);
  border: solid 2px var(--color-status-decent-border);
 }

.fine {
  background-color: var(--color-status-fine);
  border: solid 2px var(--color-status-fine-border);
}

.bad {
  background-color: var(--color-status-bad);
  border: solid 2px var(--color-status-bad-border);
}


</style>