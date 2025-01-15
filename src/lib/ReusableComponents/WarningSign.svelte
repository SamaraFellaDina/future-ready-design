 <script>
  import {IconLibrary} from '$lib'
  let grade = 'good'
 </script>

<div class={grade}>
  <IconLibrary name={grade}/>
  <slot></slot>
</div>


<style>
 div {
  --message-border-radius: 2em;
  --message-padding: 1em;
  border-radius: var(--message-border-radius);
  background-color: var(--color-status-fine);
  border: solid 2px var(--color-status-fine-border);
  padding: var(--message-padding);
  display: flex;
  align-items: center;
 }

 .good {
  background-color: var(--color-status-good);
  border: solid 2px var(--color-status-good-border);
  color: var(--color-status-good);
 }

.fine {
  background-color: var(--color-status-fine);
  border: solid 2px var(--color-status-fine-border);
}


</style>