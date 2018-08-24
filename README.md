# react-sharethis

ShareThis react.js plugins


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

| configs           | description | required or not | value                                        |
| ----------------- | ----------- | --------------- | -------------------------------------------- |
| id                |             | required        | int                                          |
| url               |             | required        | string                                       |
| title             |             |                 | string                                       |
| image             |             |                 |                                              |
| description       |             |                 |                                              |
| alignment         |             |                 | string: `left, center, right`                |
| font_size         |             |                 | int                                          |
| min_count         |             |                 | int                                          |
| language          |             |                 | string: `en, es, fr, it, ja, ko, pt, ru, zh` |
| networks          |             |                 | array                                        |
| padding           |             |                 | int                                          |
| radius            |             |                 | int                                          |
| show_total        |             |                 | boolean: `true, false`                       |
| size              |             |                 |                                              |
| spacing           |             |                 |                                              |
| use_native_counts |             |                 | boolean: `true, false`                       |


## usage

1. Initialize component properties
```
const inlineShareButtonsConfig = {
  alignment: 'center',
  font_size: 16,
  labels: 'cta',
  language: 'en',
  id: 1,
  networks: ['whatsapp', 'linkedin', 'youtube', 'facebook', 'twitter'],
  padding: 12,
  radius: 4,
  show_total: true,
  size: 40,
  url: url
};
```

2. Render button component
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
 npm build
 npm run demo
```