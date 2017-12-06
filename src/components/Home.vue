<template>
  <div class="login-wrapper" transition="loginslide">
    <div class="login-header">
      <div class="c-slacklogo">
				<a class="c-slacklogo--white">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="50 0 576 270" width="125" aria-label="Slack" class="c-slacklogo--color svg-replaced" shape-rendering="geometricPrecision"><path fill="#ECB32D" d="M141.8 87.1c-1.9-5.7-8-8.8-13.7-7-5.7 1.9-8.8 8-7 13.7l28.1 86.4c1.9 5.3 7.7 8.3 13.2 6.7 5.8-1.7 9.3-7.8 7.4-13.4 0-.2-28-86.4-28-86.4z"></path><path fill="#63C1A0" d="M98.3 101.2c-1.9-5.7-8-8.8-13.7-7-5.7 1.9-8.8 8-7 13.7l28.1 86.4c1.9 5.3 7.7 8.3 13.2 6.7 5.8-1.7 9.3-7.8 7.4-13.4 0-.2-28-86.4-28-86.4z"></path><path fill="#E01A59" d="M177.2 158.6c5.7-1.9 8.8-8 7-13.7-1.9-5.7-8-8.8-13.7-7L84 166.1c-5.3 1.9-8.3 7.7-6.7 13.2 1.7 5.8 7.8 9.3 13.4 7.4.2 0 86.5-28.1 86.5-28.1z"></path><path fill="#331433" d="M102 183.1c5.6-1.8 12.9-4.2 20.7-6.7-1.8-5.6-4.2-12.9-6.7-20.7l-20.7 6.7 6.7 20.7z"></path><path fill="#D62027" d="M145.6 168.9c7.8-2.5 15.1-4.9 20.7-6.7-1.8-5.6-4.2-12.9-6.7-20.7l-20.7 6.7 6.7 20.7z"></path><path fill="#89D3DF" d="M163 115.1c5.7-1.9 8.8-8 7-13.7-1.9-5.7-8-8.8-13.7-7l-86.4 28.1c-5.3 1.9-8.3 7.7-6.7 13.2 1.7 5.8 7.8 9.3 13.4 7.4.2 0 86.4-28 86.4-28z"></path><path fill="#258B74" d="M87.9 139.5c5.6-1.8 12.9-4.2 20.7-6.7-2.5-7.8-4.9-15.1-6.7-20.7l-20.7 6.7 6.7 20.7z"></path><path fill="#819C3C" d="M131.4 125.4c7.8-2.5 15.1-4.9 20.7-6.7-2.5-7.8-4.9-15.1-6.7-20.7l-20.7 6.7 6.7 20.7z"></path><path fill="#2D333A" d="M264.8 109.8c3.8 1.7 4.1 2.9 1.1 8.6-3.1 5.8-3.8 6.2-7.6 4.7-4.7-2-10.8-3.5-14.7-3.5-6.4 0-10.6 2.3-10.6 5.8 0 11.5 36.6 5.3 36.6 29.7 0 12.3-10.6 20.5-26.4 20.5-8.3 0-18.6-2.8-25.7-6.4-3.5-1.8-3.8-2.8-.7-8.7 2.6-5.1 3.5-5.7 7.3-4.1 6 2.6 13.7 4.7 18.8 4.7 5.8 0 9.7-2.4 9.7-5.8 0-11.1-37.3-5.8-37.3-29.5 0-12.6 10.5-21 26.2-21 7.6-.1 16.9 2.1 23.3 5zM294.4 80.8V172c0 1.4-1.5 2.8-3.5 2.8h-9.6c-2.1 0-3.5-1.5-3.5-2.8V80.8c0-4.5 1.3-4.9 8.3-4.9 8-.1 8.3.5 8.3 4.9zM362.6 132v39.3c0 2.1-1.5 3.5-3.5 3.5h-9.5c-2.2 0-3.7-1.6-3.5-3.8l.1-4.2c-5.1 5.7-12.5 8.7-19.9 8.7-14.3 0-23.9-8.3-23.9-20.6 0-13.1 10.8-22 27.1-22 6.2 0 11.8 1.1 16.4 3v-4.5c0-7.2-5.7-11.5-15.4-11.5-4.5 0-10.1 1.8-14.5 4.4-3.4 1.9-4.2 1.8-7.9-3.7-3.6-5.5-3.5-6.5 0-8.8 6.7-4.3 15.7-7.1 24-7.1 18.7 0 30.5 10.1 30.5 27.3zm-44.2 22.8c0 4.7 4 7.8 9.9 7.8 7.2 0 13.8-3.5 17.6-9.4v-6.1c-3.8-1.5-8.5-2.3-12.6-2.3-9 0-14.9 4.2-14.9 10zM427.6 109.9c3.5 2 3.6 3.1-.2 9-3.6 5.6-4.2 5.9-8.1 4-2.9-1.5-7.6-2.8-11.4-2.8-12 0-20 7.9-20 19.9 0 12.4 8 20.8 20 20.8 4.2 0 9.4-1.6 12.8-3.5 3.5-2 4.2-1.9 7.9 3.5 3.3 5 3.3 6.2.3 8.3-5.4 3.7-13.8 6.5-21.3 6.5-22.2 0-37.1-14.2-37.1-35.6 0-21.2 14.9-35.3 37.3-35.3 6.8 0 14.8 2.3 19.8 5.2zM500.2 166.2c2.8 3.5 1.7 4.8-5.3 7.3-7.1 2.6-8.1 2.4-10.6-.8l-19.9-26.5-8.9 8.6V172c0 1.4-1.5 2.8-3.5 2.8h-9.6c-2.1 0-3.5-1.5-3.5-2.8V80.8c0-4.5 1.3-4.9 8.3-4.9 8.1 0 8.3.6 8.3 4.9v51.8l27.2-26.1c3-2.8 4.7-2.6 10 .9 5.9 3.8 6.3 4.9 3.5 7.6L476 134.8l24.2 31.4z"></path></svg>
				</a>
			</div>
      <ul class="c-nav__list">
        <li class="c-nav--primary__listitem v--desktop"><a>Why Slack?</a></li>
        <li class="c-nav--primary__listitem v--desktop"><a>定价</a></li>
        <li class="c-nav--primary__listitem v--desktop"><a>关于我们</a></li>
        <li class="c-nav--primary__listitem has-dropdown" aria-haspopup="true">
					<button id="nav_work_btn" class="c-button--nav">你的工作区</button>
				</li>
			</ul>
    </div>
    <main id="main">
      <section>
        <div class="o-hero page-home">
          <div class="o-hero__illustration bg-home">
            <img src="https://a.slack-edge.com/52353/marketing/img/home/home_illo.png" srcset="https://a.slack-edge.com/52353/marketing/img/home/home_illo.png 1x, https://a.slack-edge.com/52353/marketing/img/home/home_illo@2x.png 2x" alt="">
          </div>
          <header class="o-hero__header">
            <h1 class="o-hero__header__headline">Where Work Happens</h1>
            <p class="o-hero__header__copy u-margin-left--flush">When your team needs to kick off a project, hire a new employee, deploy some code, review a sales contract, finalize next year's budget, measure an A/B test, plan your next office opening, and more, Slack has you covered.</p>
			      <div class="o-hero__header__cta c-cta c-cta--signup">
	            <a  class="c-button v--left v--primary" @click="linklogin">Get started	</a>
					    <p class="u-margin-bottom--flush u-margin-top--medium display-as-mini" >Already using Slack? <a  @click="linklogin">Sign in</a>.	</p>
 						</div>
		      </header>
        </div>
      </section>
      <section class="o-section v--lighter-gray">
        <div class="o-content-container u-text--center">
          <h2 class="u-margin-top--flush">You’re in good company</h2>
          <p class="u-margin-bottom--x-large">Millions of people around the world have already made Slack the place where their work happens.</p>
          <p class="u-margin-bottom--x-large">
            <a class="c-button v--secondary">Discover why</a>
          </p>
        <div class="o-block-grid c-logowall v--three v--gapless">
          <figure class="c-logowall__item">
          <img src="https://a.slack-edge.com/c04e5/marketing/img/logos/company/airbnb.png" srcset="https://a.slack-edge.com/c04e5/marketing/img/logos/company/airbnb.png 1x, https://a.slack-edge.com/c04e5/marketing/img/logos/company/airbnb@2x.png 2x" width="150" alt="">
          </figure>
          <figure class="c-logowall__item">
          <img src="https://a.slack-edge.com/c04e5/marketing/img/logos/company/capital_one.png" srcset="https://a.slack-edge.com/c04e5/marketing/img/logos/company/capital_one.png 1x, https://a.slack-edge.com/c04e5/marketing/img/logos/company/capital_one@2x.png 2x" width="150" alt="">
          </figure>
          <figure class="c-logowall__item">
          <img src="https://a.slack-edge.com/c04e5/marketing/img/logos/company/harvard.png" srcset="https://a.slack-edge.com/c04e5/marketing/img/logos/company/harvard.png 1x, https://a.slack-edge.com/c04e5/marketing/img/logos/company/harvard@2x.png 2x" width="160" alt="">
          </figure>
          <figure class="c-logowall__item">
          <img src="https://a.slack-edge.com/4b6fe/marketing/img/logos/company/los-angeles-times.png" srcset="https://a.slack-edge.com/4b6fe/marketing/img/logos/company/los-angeles-times.png 1x, https://a.slack-edge.com/c04e5/marketing/img/logos/company/los-angeles-times@2x.png 2x" width="325" alt="">
          </figure>
          <figure class="c-logowall__item">
          <img src="https://a.slack-edge.com/c04e5/marketing/img/logos/company/oracle.png" srcset="https://a.slack-edge.com/c04e5/marketing/img/logos/company/oracle.png 1x, https://a.slack-edge.com/c04e5/marketing/img/logos/company/oracle@2x.png 2x" width="170" alt="">
          </figure>
          <figure class="c-logowall__item">
          <img src="https://a.slack-edge.com/c04e5/marketing/img/logos/company/ticketmaster.png" srcset="https://a.slack-edge.com/c04e5/marketing/img/logos/company/ticketmaster.png 1x, https://a.slack-edge.com/c04e5/marketing/img/logos/company/ticketmaster@2x.png 2x" width="170" alt="">
          </figure>
        </div>
        </div>
      </section>
      <section class="o-section c-cta c-cta--signup u-hide-on-print">
        <div class="o-content-container">
          <div class="o-row u-align--center">
          <div class="col-6 v--left">
            <h3 class="c-cta--signup__headline">Try it for free</h3>
            <p class="c-cta--signup__content">Already using Slack? <a>Sign in</a>.</p>
          </div>
          <div class="col-6 v--right" @click="linklogin">
            <a class="c-button v--primary"> Get started </a>
          </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="c-nav c-nav--footer">
      <div class="c-nav--footer__menu">
        <div class="o-content-container c-nav--footer__row">
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" viewbox="-101 331 132 132" width="54" height="54" aria-label="Slack" class="c-nav--footer__svgicon c-slackhash svg-replaced" shape-rendering="geometricPrecision">
          <path d="M-16.7 343.1c-1.9-5.7-8-8.8-13.7-7-5.7 1.9-8.8 8-7 13.7l28.1 86.4c1.9 5.3 7.7 8.3 13.2 6.7 5.8-1.7 9.3-7.8 7.4-13.4 0-.2-28-86.4-28-86.4z" fill="#ECB32D"></path>
          <path d="M-60.2 357.2c-1.9-5.7-8-8.8-13.7-7-5.7 1.9-8.8 8-7 13.7l28.1 86.4c1.9 5.3 7.7 8.3 13.2 6.7 5.8-1.7 9.3-7.8 7.4-13.4 0-.2-28-86.4-28-86.4z" fill="#63C1A0"></path>
          <path d="M18.7 414.6c5.7-1.9 8.8-8 7-13.7-1.9-5.7-8-8.8-13.7-7l-86.5 28.2c-5.3 1.9-8.3 7.7-6.7 13.2 1.7 5.8 7.8 9.3 13.4 7.4.2 0 86.5-28.1 86.5-28.1z" fill="#E01A59"></path>
          <path d="M-56.5 439.1c5.6-1.8 12.9-4.2 20.7-6.7-1.8-5.6-4.2-12.9-6.7-20.7l-20.7 6.7 6.7 20.7z" fill="#331433"></path>
          <path d="M-12.9 424.9c7.8-2.5 15.1-4.9 20.7-6.7-1.8-5.6-4.2-12.9-6.7-20.7l-20.7 6.7 6.7 20.7z" fill="#D62027"></path>
          <path d="M4.5 371.1c5.7-1.9 8.8-8 7-13.7-1.9-5.7-8-8.8-13.7-7l-86.4 28.1c-5.3 1.9-8.3 7.7-6.7 13.2 1.7 5.8 7.8 9.3 13.4 7.4.2 0 86.4-28 86.4-28z" fill="#89D3DF"></path>
          <path d="M-70.6 395.5c5.6-1.8 12.9-4.2 20.7-6.7-2.5-7.8-4.9-15.1-6.7-20.7l-20.7 6.7 6.7 20.7z" fill="#258B74"></path>
          <path d="M-27.1 381.4c7.8-2.5 15.1-4.9 20.7-6.7-2.5-7.8-4.9-15.1-6.7-20.7l-20.7 6.7 6.7 20.7z" fill="#819C3C"></path>
          </svg></a>
        <nav class="c-footer--wrap t-contains-subtle-links" role="navigation" aria-label="Footer Navigation">
          <div class="c-nav--footer__block">
          <p class="c-nav--footer__listheader">Company</p>
          <ul class="c-nav--footer__list">
            <li class="c-nav--footer__listitem"><a >About Us</a></li>
            <li class="c-nav--footer__listitem"><a>Careers</a></li>
            <li class="c-nav--footer__listitem"><a>Blog</a></li>
            <li class="c-nav--footer__listitem"><a>Press</a></li>
            <li class="c-nav--footer__listitem"><a>Brand Guidelines</a></li>
          </ul>
          </div>
          <div class="c-nav--footer__block">
          <p class="c-nav--footer__listheader">Product</p>
          <ul class="c-nav--footer__list">
            <li class="c-nav--footer__listitem"><a>Why Slack?</a></li>
            <li class="c-nav--footer__listitem"><a>Enterprise</a></li>
            <li class="c-nav--footer__listitem"><a>Customer Stories</a></li>
            <li class="c-nav--footer__listitem"><a>Pricing</a></li>
            <li class="c-nav--footer__listitem"><a>Security</a></li>
          </ul>
          </div>
          <div class="c-nav--footer__block">
          <p class="c-nav--footer__listheader">Resources</p>
          <ul class="c-nav--footer__list">
            <li class="c-nav--footer__listitem"><a>Download</a></li>
            <li class="c-nav--footer__listitem"><a>Help Center</a></li>
            <li class="c-nav--footer__listitem"><a>Guides</a></li>
            <li class="c-nav--footer__listitem"><a>Events</a></li>
            <li class="c-nav--footer__listitem"><a>App Directory</a></li>
            <li class="c-nav--footer__listitem"><a>API</a></li>
          </ul>
          </div>
          <div class="c-nav--footer__block">
          <p class="c-nav--footer__listheader">Extras</p>
          <ul class="c-nav--footer__list">
            <li class="c-nav--footer__listitem"><a>Podcast</a></li>
            <li class="c-nav--footer__listitem"><a>Slack Shop</a></li>
            <li class="c-nav--footer__listitem"><a>Slack at Work</a></li>
            <li class="c-nav--footer__listitem"><a>Slack Fund</a></li>
          </ul>
          </div>
        </nav>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { actions} from "../vuex/store";
//import Ws from "../api/client";
export default {
  vuex: {
    actions: actions,
    getters: {
      sessions: state => {
        return state.sessions;
      }
    }
  },
  components:{

  },
  data() {
    return {
      userInfo: {
        id: 0,
        user: {
		  	name: 'hah',
			img: '',
			wechat:'',
			Emeil:'',
			id: 0
        },
        messages: []
      }
    };
  },
  mounted() {
	  let _sessions = this.$store.state.loginUser;
	  this.userInfo.user =_sessions? _sessions : this.userInfo.user;
	  if(!_sessions.name){
		 // Ws.init();
	  }
  },
  methods: {
    linklogin() {
		if(this.userInfo.user.name!=''){
			this.$message.error('暂无登录信息');
      this.$router.push('/login')
		}else{
      this.$router.push('/wechat')
    }

      // 通过vuex保存用户信息到store
	  //Ws.login(this.userInfo);
    },
    getRandomImg() {
      var avatarPath = "/static/images/avatars/";
      var avatarStr = avatarPath + this.getRandomInt(1, 10) + ".jpeg";
      return avatarStr;
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
};
</script>

<style lang='scss' scoped>
/* 必需 */
.loginslide-transition {
  transition: all 0.3s ease;
  transform: translate(100%, 0);
}
/* .loginslide-enter 定义进入的开始状态 */
/* .loginslide-leave 定义离开的结束状态 */
.loginslide-leave,
.loginslide-enter {
  transform: translate(0%, 0);
}
a{
  cursor: pointer;
}
.login-wrapper {
  overflow-y: auto;
  background-color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;

  .login-header{
    width: 100%;
    height:70px;
    padding: 0;
    background-color: #fff;
    border-bottom: 1px solid #ebebeb;
    z-index: 1000;
    top: 0;
    padding: 0 4vw;
    position: fixed;
    display: flex;
    .c-nav__list{
      display: flex;
      .c-nav--primary__listitem{
        font-family: Slack-Averta,appleLogo,sans-serif;
        font-weight: 400;
        letter-spacing: normal;
        font-size: 1rem;
        display: inline-block;
        padding:.5rem 1rem;
        line-height: 2;
      }
      .c-nav--primary__listitem a{
        color: #5b5e6d;
        cursor: pointer;
        padding: 10px;
      }
      .c-button--nav{
        color: #6d6f7b;
        padding:0 10px;
        transition: all 420ms cubic-bezier(.165,.84,.44,1);
        box-shadow: inset 0 0 0 1px #323648;
        border-radius: 5px;
      }
    }
    >div{
      flex: 1;
    }
  }

  #main{
    margin-top: 150px;
    section:first-child{
          padding: 0 4vw;
    }
    .o-hero{
      display: flex;
    }
    .bg-home{
      justify-content: center;
      img{
        transform: scale(.9)
      }
    }
    .o-hero__header__headline {
      font-family: Slack-Tiempos,"Times New Roman",Georgia,serif;
      font-weight: 500;
      line-height: 1.05;
      letter-spacing: normal;
      font-size: 4.8rem;
      margin-bottom: 2rem;
      margin-top: 0;
      margin-left: 0;
    }
    .o-hero__header__copy {
      color: #5b5e6d;
      max-width: 48rem;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 2rem;
    }
    .o-hero__header__cta{
      width: 100%;
      height: auto;
    }
    .c-button {
      display: inline-block;
      // -webkit-appearance: none;
      // -moz-appearance: none;
      // appearance: none;
      background: 0 0;
      border: none;
      cursor: pointer;
      border-radius: 4px;
      text-align: center;
      font-family: Slack-Averta,appleLogo,sans-serif;
      font-weight: 700;
      letter-spacing: normal;
      font-size: .9rem;
      text-transform: uppercase;
      text-decoration: none;
      padding: 19px 40px 20px;
      transition: box-shadow 420ms cubic-bezier(.165,.84,.44,1),color 420ms cubic-bezier(.165,.84,.44,1),background 420ms cubic-bezier(.165,.84,.44,1);
    }
    .v--primary {
      background-color: #3f46ad;
      color: #fff;
    }
    .u-margin-bottom--flush {
      margin-top: 1rem;
      a{
        color: #3f46ad;
        border-bottom: 1px solid #3f46ad
      }
    }
    .v--lighter-gray {
      background-color: #f5f5f5;
    }
    .u-text--center {
      text-align: center!important;
    }
    .o-section {
      overflow: hidden;
      padding: 3rem 0;
      border-top: 1px solid #ebebeb;
    }
    .u-margin-top--flush {
      font-family: Slack-Tiempos,"Times New Roman",Georgia,serif;
      font-weight: 500;
      line-height: 1.2;
      letter-spacing: normal;
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .u-margin-bottom--x-large {
      margin-bottom: 2rem!important;
    }
    .v--secondary {
      background-color: #fff;
      color: #1c299d;
      box-shadow: inset 0 0 0 1px #9ba0d3;
    }
    .o-block-grid {
    display: grid;
    grid-gap: 1rem 2.43902439%;
    }
    .v--three {
    grid-template-columns: repeat(3,1fr);
    }
    .v--gapless {
    grid-gap: 0;
    }
    .c-logowall__item {
    border-right: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 0!important;
    margin-right: 0!important;
    padding: 2rem;
    border-right: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    text-align: center;
    min-height: 110px;
    }
    .c-logowall__item:nth-last-child(-n+3) {
        border-bottom: none;
        border-right:none;
    }
    .c-logowall__item:nth-last-child(-n+4) {
     border-right: 1px solid #ebebeb;
    }
    .c-logowall__item:nth-child(3n) {
    border-right: none;
    }
    .c-cta--signup {
    overflow: visible;
    width: 100%;
    }
    .o-section {
    overflow: hidden;
    padding: 3rem 0;
    border-top: 1px solid #ebebeb;
    }
    .o-content-container {
    padding: 0 4vw;
    }
    .u-align--center {
    align-items: center!important;
    }
    .o-row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -1.2195122%;
    }
    .v--left {
        text-align: left;
    }
    .v--right {
        text-align: right;
    }
    .col-6 {
        flex: 1;
    }
    .c-cta--signup__headline {
        font-size: 1.5rem;
    }
  }

  .c-nav--footer {
    border-top: 1px solid #ebebeb;
  }
  .c-nav--footer__menu {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  .c-nav--footer__row {
    display: flex;
    justify-content: space-between;
  }
  .o-content-container {
    padding: 0 4vw;
  }
  .c-footer--wrap:lang(en) {
    grid-template-columns: repeat(4,1fr);
  }
  .c-footer--wrap {
    width: 65.85365854%;
    display: flex;
    grid-gap: 1rem;
  }
  .c-nav--footer__block {
    flex: 1 ;
  }
  .c-nav--footer__listheader {
    font-family: Slack-Averta,appleLogo,sans-serif;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: normal;
    font-size: 1rem;
    text-transform: uppercase;
    color: #6d6f7b;
  }
  .c-nav--footer__listitem {
    font-family: Slack-Averta,appleLogo,sans-serif;
    font-weight: 400;
    line-height: 2.2;
    letter-spacing: normal;
    font-size: .875rem;
    a{
      text-decoration: none;
      color: #6d6f7b;
    }
  }



}
</style>
