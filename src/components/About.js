import React from 'react';


const About = () => {

    return (
      <div className="container about-page">
        <span>Thanks for using My Todos Online. The Simplest To Do App of the word!<br /></span>
        You can see the source code at my <a target="_blank" href="">Github</a> <br />
        Created by <a target="_blank" href="">Andrei Donati</a> <br />
        My Todos Online is powered by React. <br />
        We are inspered by <a target="_blank" href="dontpad.com">dontpad.com</a> <br />
        You can support the project giving me a star on Github or with a
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
