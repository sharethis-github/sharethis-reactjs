# sharethis-reactjs 

![alt text][logo]

[logo]: https://s18955.pcdn.co/wp-content/uploads/2016/12/ShareThisLogo2x.png "ShareThis"

ShareThis official social media share buttons for React.
Visit www.sharethis.com for more technical support.

## Demo

[View the live demo here](https://sharethis-github.github.io/sharethis-reactjs/)


## Products

 - Inline Share Buttons
 - Sticky Share Buttons
 - Inline Reaction Buttons
 - Inline Follow Buttons

## Installation

```bash
npm install --save sharethis-reactjs
```

## How to use the buttons

```Javascript
import React from "react";
import {InlineReactionButtons} from 'sharethis-reactjs';
import {InlineShareButtons} from 'sharethis-reactjs';
import {StickyShareButtons} from 'sharethis-reactjs';
import {InlineFollowButtons} from 'sharethis-reactjs';

class App extends React.Component {

  render () {
    return (
      <div>
        <style dangerouslySetInnerHTML={{__html: `
          html, body {
            margin: 0;
            padding: 0;
            text-align: center;
          }
          h1 {
            font-size: 24px;
            font-weight: bold;
          }
          hr {
            margin-bottom: 40px;
            margin-top: 40px;
            width: 50%;
          }
        `}} />

        <h1>Inline Share Buttons</h1>
        <InlineShareButtons
          config={{
            alignment: 'center',  // alignment of buttons (left, center, right)
            color: 'social',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 16,        // font size for the buttons
            labels: 'cta',        // button labels (cta, counts, null)
            language: 'en',       // which language to use (see LANGUAGES)
            networks: [           // which networks to include (see SHARING NETWORKS)
              'whatsapp',
              'linkedin',
              'messenger',
              'facebook',
              'twitter'
            ],
            padding: 12,          // padding within buttons (INTEGER)
            radius: 4,            // the corner radius on each button (INTEGER)
            show_total: true,
            size: 40,             // the size of each button (INTEGER)

            // OPTIONAL PARAMETERS
            url: 'https://www.sharethis.com', // (defaults to current url)
            image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
            description: 'custom text',       // (defaults to og:description or twitter:description)
            title: 'custom title',            // (defaults to og:title or twitter:title)
            message: 'custom email text',     // (only for email sharing)
            subject: 'custom email subject',  // (only for email sharing)
            username: 'custom twitter handle' // (only for twitter sharing)
          }}
        />
        <hr />

        <h1>Inline Reaction Buttons</h1>
        <InlineReactionButtons
          config={{
            alignment: 'center',  // alignment of buttons (left, center, right)
            enabled: true,        // show/hide buttons (true, false)
            language: 'en',       // which language to use (see LANGUAGES)
            min_count: 0,         // hide react counts less than min_count (INTEGER)
            padding: 12,          // padding within buttons (INTEGER)
            reactions: [          // which reactions to include (see REACTIONS)
              'slight_smile',
              'heart_eyes',
              'laughing',
              'astonished',
              'sob',
              'rage'
            ],
            size: 48,             // the size of each button (INTEGER)
            spacing: 8,           // the spacing between buttons (INTEGER)

            // OPTIONAL PARAMETERS
            url: 'https://www.sharethis.com' // (defaults to current url)
          }}
        />
        <hr />

        <h1>Inline Follow Buttons</h1>
        <InlineFollowButtons
          config={{
            action: 'Follow us:', // call to action (STRING)
            action_enable: true,  // show/hide call to action (true, false)
            action_pos: 'bottom', // position of call to action (left, top, right)
            alignment: 'center',  // alignment of buttons (left, center, right)
            color: 'white',       // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            networks: [           // which networks to include (see FOLLOW NETWORKS)
              'twitter',
              'facebook',
              'instagram',
              'youtube'
            ],
            padding: 8,           // padding within buttons (INTEGER)
            profiles: {           // social profile links for buttons
              twitter: 'sharethis',
              facebook: 'sharethis',
              instagram: 'sharethis',
              youtube: '/channel/UCbM93niCmdc2RD9RZbLMP6A?view_as=subscriber'
            },
            radius: 9,            // the corner radius on each button (INTEGER)
            size: 32,             // the size of each button (INTEGER)
            spacing: 8            // the spacing between buttons (INTEGER)
          }}
        />
        <hr />

        <StickyShareButtons
          config={{
            alignment: 'left',    // alignment of buttons (left, right)
            color: 'social',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 16,        // font size for the buttons
            hide_desktop: false,  // hide buttons on desktop (true, false)
            labels: 'counts',     // button labels (cta, counts, null)
            language: 'en',       // which language to use (see LANGUAGES)
            min_count: 0,         // hide react counts less than min_count (INTEGER)
            networks: [           // which networks to include (see SHARING NETWORKS)
              'linkedin',
              'facebook',
              'twitter',
              'pinterest',
              'email'
            ],
            padding: 12,          // padding within buttons (INTEGER)
            radius: 4,            // the corner radius on each button (INTEGER)
            show_total: true,     // show/hide the total share count (true, false)
            show_mobile: true,    // show/hide the buttons on mobile (true, false)
            show_toggle: true,    // show/hide the toggle buttons (true, false)
            size: 48,             // the size of each button (INTEGER)
            top: 160,             // offset in pixels from the top of the page

            // OPTIONAL PARAMETERS
            url: 'https://www.sharethis.com', // (defaults to current url)
            image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
            description: 'custom text',       // (defaults to og:description or twitter:description)
            title: 'custom title',            // (defaults to og:title or twitter:title)
            message: 'custom email text',     // (only for email sharing)
            subject: 'custom email subject',  // (only for email sharing)
            username: 'custom twitter handle' // (only for twitter sharing)

          }}
        />

      </div>
    );
  }
};

// export
export default App;
```

---

## Sharing Networks

```
blogger, delicious, digg, email, facebook, flipboard, google, linkedin,
livejournal, mailru, meneame, messenger, oknoklassniki, pinterest, print,
reddit, sharethis, sms, stumbleupon, tumblr,  twitter, vk, wechat, weibo,
whatsapp, xing
```
![](https://raw.githubusercontent.com/sharethis-github/sharethis-reactjs/master/demo/img/sharing-networks.png)

---

## Follow Networks

```
blogger, digg, facebook, flipboard, googleplus, github, instagram, medium,
messenger, linkedin, oknoklassniki, patreon, pinterest, quora, reddit,
snapchat, soundcloudm, spotify, telegram, tumblr, twitch, twitter, vk, wechat,
weibo, yelp, youtube
```
![](https://raw.githubusercontent.com/sharethis-github/sharethis-reactjs/master/demo/img/follow-networks.png)

---

## Reactions

```
slight_smile, heart_eyes, laughing, astonished, sob, rage
```
![](https://raw.githubusercontent.com/sharethis-github/sharethis-reactjs/master/demo/img/reactions.png)

---

## Demo

```
 npm install
 npm run demo
```

  Open `localhost:5000`
  
