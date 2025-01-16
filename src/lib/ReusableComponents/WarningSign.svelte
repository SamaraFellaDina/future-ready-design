<script>
  import { IconLibrary } from '$lib';

  export let grade = '' || 'decent';

  let iconName = 'good';
  let gradeClass = 'good';

  if (grade === 'good') {
    iconName = 'good';
    gradeClass = 'good';
  } else if (grade === 'decent') {
    iconName = 'decent';
    gradeClass = 'decent';
  } else if (grade === 'fine') {
    iconName = 'fine';
    gradeClass = 'fine';
  } else {
    iconName = 'bad';
    gradeClass = 'bad';
  }
</script>

<div class={gradeClass}>
  <IconLibrary name={iconName} />
  <slot></slot>
</div>

<style>
  div {
    --message-border-radius: 2em;
    --message-padding: .5em;
    --message-gap: 0.3em;
    border-radius: var(--message-border-radius);
    background-color: var(--color-status-fine);
    border: solid 2px var(--color-status-fine-border);
    padding: var(--message-padding);

    display: flex;
    width: fit-content;
    gap: var(--message-gap);
    align-items: center;

    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-thin);
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
