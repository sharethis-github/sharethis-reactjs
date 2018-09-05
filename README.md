# sharethis-reactjs 

![alt text][logo]

[logo]: https://s18955.pcdn.co/wp-content/uploads/2016/12/ShareThisLogo2x.png "ShareThis"

ShareThis official social media share buttons for React.
Visit www.sharethis.com for more technical support.


## Products

- inline-share-buttons
- sticky-share-buttons

## Channels

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

| configs           | Type        | Default    | Required |         description                |
| ----------------- | ----------- | ---------- | -------- | -----------------------------------|
| id                | Number      |  0         |  yes     |                                    |
| url               | String      |            |  yes     |                                    |
| title             | String      |            |  no      |                                    |
| image             | String      |            |  no      |                                    |
| description       | String      |            |  no      |                                    |
| alignment         | String      |  `left`    |  no      |                                    |
| font_size         | Number      |  12        |  no      |                                    |
| min_count         | Number      |  0         |  no      |                                    |
| labels            | String      | `count`    |  no      |                                    |
| language          | String      |  `en`      |  no      |                                    |
| networks          | Array       |            |  yes     |                                    |
| padding           | Number      |  8         |  no      |                                    |
| radius            | Number      |  4         |  no      |                                    |
| show_total        | Boolean     |  `true     |  no      |                                    |
| size              | Number      |  40        |  no      |                                    |
| spacing           | Number      |  12        |  no      |                                    |


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