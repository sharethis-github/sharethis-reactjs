# sharethis-reactjs 

![alt text][logo]

[logo]: https://s18955.pcdn.co/wp-content/uploads/2016/12/ShareThisLogo2x.png "ShareThis"

ShareThis official social media share buttons for React.
Visit www.sharethis.com for more technical support.


## Products

- inline-share-buttons
- sticky-share-buttons

## Channels

  All channels in the list are supported by inline and sticky share buttons. Specify them in `networks` configuration.

  1. 'blogger'
  2. 'delicious'
  3. 'digg'
  4. 'email'
  5. 'facebook'
  6. 'flipboard'
  7. 'googleplus'
  8. 'linkedin'
  9. 'livejournal'
  10. 'mailru'
  11. 'meneame'
  12. 'messenger'
  13. 'odnoklassniki'
  14. 'pinterest'
  15. 'print'
  16. 'reddit'
  17. 'sharethis'
  18. 'sms'
  19. 'stumbleupon'
  20. 'tumblr'
  21. 'twitter'
  22. 'vk'
  23. 'wechat'
  24. 'weibo'
  25. 'whatsapp'
  26. 'xing'

## Configurations

| configs           | Type        | Default                         | Required |         description                |
| ----------------- | ----------- | ------------------------------- | -------- | -----------------------------------|
| id                | Number      |  0                              |  yes     | unique id to specify your single product, you can sequentially define it with your products|
| url               | String      |                                 |  yes     | The url you want to share for your product, otherwise the website will be crawled as default.|
| networks          | Array       |                                 |  yes     | An array of String of social media networks, see 'Channels' for supported networks.|
| alignment         | String      |  inline: `left`, sticky: `left` |  no      | The display position of products, `inline-share-buttons` can be specified at `left`, `center`, or `right`, `sticky-share-buttons` can be specified at `left` or `right`|
| description       | String      |                                 |  no      |                                    |
| font_size         | Number      |  inline: `12`, sticky: `16`     |  no      | The font size of your product network labels|
| fade_in           | Boolean     |  inline: `false`                |  no      |                                    |
| hide_desktop      | Boolean     |  sticky: `false`                |  no      | Hide the product in desktop        |
| image             | String      |                                 |  no      | The image for sharing, otherwise the `<meta>` tag with image name will be crawled as default|
| labels            | String      | inline: `cta`, sticky: `counts` |  no      | Display the name of networks with `cta` configuration, or display the counts with `counts`|
| language          | String      |   `en`                          |  no      | Configure language of the buttons, currently supporting `en`, `es`, `fr`, `it`, `ja`, `ko`, `pt`, `ru`, `zh`|
| mobile_breakpoint | Number      |  sticky: `0`                    |  no      | This specifies the width at which your sticky buttons will move from the side to the bottom of your users' screen|
| min_count         | Number      |  0                              |  no      | This is the minimum number of shares a page needs to have before we'll show your share counts|
| padding           | Number      |  inline: `10`, sticky: `12`     |  no      |                                    |
| radius            | Number      |  inline: `4`, sticky: `0`       |  no      |                                    |
| show_mobile       | Boolean     |                                 |  no      | Display on mobile or not           |
| show_toggle       | Boolean     |  sticky: `true`                 |  no      | Display toggle button or not       |
| show_total        | Boolean     |  `true`                         |  no      | Display total counts or not        |
| size              | Number      |  inline: `40`, sticky: `48`     |  no      |                                    |
| spacing           | Number      |  inline: `8`                    |  no      |                                    |
| title             | String      |                                 |  no      |                                    |


## Usage

1. import dependency
    ```
    import {InlineShareButtons} from 'sharethis-reactjs';
    ```

2. Initialize component properties
    ```
    const inlineShareButtonsConfig = {
      alignment: 'center',
      font_size: 16,
      labels: 'cta',
      language: 'en',
      id: 1,
      networks: ['whatsapp', 'linkedin', 'messenger', 'facebook', 'twitter'],
      padding: 12,
      radius: 4,
      show_total: true,
      size: 40,
      url: 'www.sharethis.com'
    };
    ```

3. Render button component
    ```
    <div>
      <InlineShareButtons
        config={inlineShareButtonsConfig}
      />
    </div>
        
    ```

## Demo

```
 npm install
 npm run demo
```

  Open `localhost:5000`
  