import React from 'react';


const About = () => {

    return (
      <div className="container about-page">
        <span>Thanks for using My Todos Online. The Simplest To Do App of the word!<br /></span>
        Created by <a target="_blank" href="https://www.linkedin.com/in/andrei-donati/">Andrei Donati</a> <br />
        You can see the source code at my <a target="_blank" href="https://github.com/andrei258258/my-todos-online">Github</a> <br />
        My Todos Online is inspered by <a target="_blank" href="dontpad.com">dontpad.com</a> <br />
        Support the project: <br />
        <a className="github-button" href="https://github.com/andrei258258/my-todos-online" data-icon="octicon-star" data-size="large" aria-label="Star andrei258258/my-todos-online on GitHub">Star on Github</a>
        <div className="paypal-btn">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="UZBYJR6MNAQFA" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_BR/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </div>
      </div>
    )

}

export default About;
