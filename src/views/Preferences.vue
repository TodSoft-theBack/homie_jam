<template>
  <div class="Preferences">
    <h1>This is the preferences page</h1>
    <label>Change current theme</label>
    <Switch :IsRound=false />
  </div>
</template>

<script>
import Switch from "../components/Switch"
export default {
  name: 'PreferencesView',
  components: {
    Switch
  }
}
</script>