<template>
  <footer class="w3-center">
    <!-- More links -->
    <Disqus :v-if="comments == true" />
    <SimpleNewsletter :v-if="email == true" />

    <!-- Self Promotion -->
    <div :v-if="sb == true">
    <ul style="list-style: none;">
      <li>
        <button class="w3-btn w3-border w3-border-orange w3-round-large" style="width: 215px;">
          <a href="https://www.patreon.com/avimehenwal">
            Support me on Patreon
          </a>
        </button>
      </li>
      or
      <li>
        <style>.bmc-button img{height: 34px !important;width: 35px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{padding: 7px 10px 7px 10px !important;line-height: 35px !important;height:51px !important;min-width:217px !important;text-decoration: none !important;display:inline-flex !important;color:#FFFFFF !important;background-color:#FF813F !important;border-radius: 5px !important;border: 1px solid transparent !important;padding: 7px 10px 7px 10px !important;font-size: 22px !important;letter-spacing: 0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Cookie', cursive !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#FFFFFF !important;}</style><link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/F1j07cV"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:15px;font-size:28px !important;">Buy me a coffee</span></a>
      </li>
    </ul>
    </div>



  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    email: true,
    comments: true,
    sb:true
  },
  data: () => {
    return {
      height: 100,
      width: 100
    }
  }

}
</script>

<style>

</style>