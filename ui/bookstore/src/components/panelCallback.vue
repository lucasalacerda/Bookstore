<template>
 <div class="w3-panel w3-display-container">
  <span onclick="this.parentElement.style.display='none'"
  class="w3-button w3-display-topright">X</span>
  <p>Click on the X to close this panel.</p>
</div>
</template>

<script>

export default {
    name:'panelCallback',
    props: ["message"]
};
</script>