<script>
  import Modal from "../modals/Modal.svelte";
  import Button from "../layout/Button.svelte";

  import { switchChains } from "../../lib/wallet";
</script>

<Modal title="Invalid Network" showHeader={true} showCancel={true}>
  <div class="note">Select Hyperspace as your wallet's network to trade or pool on Anood.</div>

  <Button
    wrap={true}
    onClick={() => {
      switchChains();
    }}
    label={`Switch to Hyperspace`}
  />
</Modal>

<style>
  .note {
    padding: var(--base-padding);
    line-height: 1.618;
  }
</style>
