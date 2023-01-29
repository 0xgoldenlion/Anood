<script>
  const d = new Date();
  let year = d.getFullYear();
</script>

<div class="home">
  <header>
    <div class="logo">
      <img src="im/logo-full.svg" />
    </div>
    <h1>Fully Decentralized Perpetuals Exchange</h1>
  </header>

  <div class="body">
    <section>
      <h2>Hello!</h2>
    </section>

    <section />

    <section />

    <section>
      <section class="dark" />
    </section>
  </div>

  <footer>
    <div class="copyright">CAP &copy; {year}</div>
  </footer>
</div>

<style>
  .home {
    font-size: 20px;
    padding: 0 var(--base-padding);
    margin: 0 auto;
    max-width: 800px;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: var(--primary);
  }
  header {
    padding-top: 100px;
  }

  header img {
    height: 64px;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  h1 {
    line-height: 1.218;
    font-size: 36px;
    font-weight: 600;
    letter-spacing: -0.045em;
    margin-top: 16px;
    margin-bottom: 64px;
  }

  h4 {
    margin-top: 16px;
    font-size: 16px;
    color: #aaa;
  }

  .button-wrapper {
    margin-bottom: 32px;
    margin-top: 48px;
  }
  .button {
    display: inline-block;
    padding: 16px 32px;
    border-radius: 50px;
    font-weight: 650;
    color: var(--primary-darkest);
    background-color: var(--primary);
    white-space: nowrap;
    font-size: 110%;
  }

  section {
    margin-bottom: 64px;
  }

  p,
  li {
    line-height: 1.618;
  }

  h2 {
    font-size: 32px;
    line-height: 1.618;
  }

  footer {
    border-top: 1px solid #333;
    padding: 24px 0;
    text-align: center;
  }

  .copyright {
    font-size: 80%;
    color: #777;
  }
</style>
