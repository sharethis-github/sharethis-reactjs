declare module "sharethis-reactjs" {
  type SharingNetwork =
    | "blogger"
    | "delicious"
    | "digg"
    | "email"
    | "facebook"
    | "flipboard"
    | "google"
    | "linkedin"
    | "livejournal"
    | "mailru"
    | "meneame"
    | "messenger"
    | "oknoklassniki"
    | "pinterest"
    | "print"
    | "reddit"
    | "sharethis"
    | "sms"
    | "stumbleupon"
    | "tumblr"
    | "twitter"
    | "vk"
    | "wechat"
    | "weibo"
    | "whatsapp"
    | "xing";

  type FollowNetwork = 
    | "blogger"
    | "digg"
    | "facebook"
    | "flipboard"
    | "github"
    | "instagram"
    | "medium"
    | "messenger"
    | "linkedin"
    | "oknoklassniki"
    | "patreon"
    | "pinterest"
    | "quora"
    | "reddit"
    | "snapchat"
    | "soundcloudm"
    | "spotify"
    | "telegram"
    | "tumblr"
    | "twitch"
    | "twitter"
    | "vk"
    | "wechat"
    | "weibo"
    | "yelp"
    | "youtube";

  type Reaction = 
    | "slight_smile"
    | "heart_eyes"
    | "laughing"
    | "astonished"
    | "sob"
    | "rage";

  type InlineShareButtonsConfig = {
    /** alignment of buttons */
    alignment: "center" | "left" | "right";
    /** set the color of buttons */
    color: "social" | "white";
    /** show/hide buttons */
    enabled: boolean;
    /** font size for the buttons */
    font_size: number;
    /** button labels */
    labels: "cta" | "counts" | null;
    /** which language to use */
    language: string;
    /** which networks to include */
    networks: SharingNetwork[];
    /** padding within buttons */
    padding: number;
    /** the corner radius on each button */
    radius: number;
    show_total: boolean;
    /** the size of each button */
    size: number;

    /** the url to share, defaults to current url */
    url?: string;
    /** the image to share, defaults to og:image or twitter:image */
    image?: string;
    /** the description to share, defaults to og:description or twitter:description */
    description?: string;
    /** the title to share, defaults to og:title or twitter:title */
    title?: string;
    /** the message to include (only for email sharing) */
    message?: string;
    /** the subject to include (only for email sharing) */
    subject?: string;
    /** the username to include (only for email sharing) */
    username?: string;
  };

  type InlineReactionButtonsConfig = {
    /** alignment of buttons */
    alignment: "center" | "left" | "right";
    /** show/hide buttons */
    enabled: boolean;
    /** which language to use */
    language: string;
    /** hide react counts less than min_count (INTEGER) */
    min_count: number;
    /** padding within buttons */
    padding: number;
    /** which reactions to include (see REACTIONS) */
    reactions: Reaction[];
    /** the corner radius on each button */
    radius: number;
    show_total: boolean;
    /** the size of each button */
    size: number;
  };

  type InlineFollowButtonsConfig = {
    /** call to action */
    action: string;
    /** show/hide call to action */
    action_enabled: boolean;
    /** position of call to action (left, top, right) */
    action_pos: string;
    /** alignment of buttons */
    alignment: "center" | "left" | "right";
    /** set the color of buttons */
    color: "social" | "white";
    /** show/hide buttons */
    enabled: boolean;
    /** which networks to include */
    networks: FollowNetwork[];
    /** padding within buttons */
    padding: number;
    /** social profile links for buttons */
    profiles: {[key in FollowNetwork]: string;};
    /** the corner radius on each button */
    radius: number;
    /** the size of each button */
    size: number;
  };

  type StickyShareButtonsConfig = {
    /** alignment of buttons */
    alignment: "center" | "left" | "right";
    /** set the color of buttons */
    color: "social" | "white";
    /** show/hide buttons */
    enabled: boolean;
    /** font size for the buttons */
    font_size: number;
    /** button labels */
    labels: "cta" | "counts" | null;
    /** which language to use */
    language: string;
    /** hide react counts less than min_count (INTEGER) */
    min_count: number;
    /** which networks to include */
    networks: SharingNetwork[];
    /** padding within buttons */
    padding: number;
    /** the corner radius on each button */
    radius: number;
    show_total: boolean;
    /** show/hide the buttons on mobile (true, false) */
    show_mobile: boolean;
    /** show/hide the toggle buttons (true, false) */
    show_toggle: boolean;
    /** the size of each button */
    size: number;
    /** offset in pixels from the top of the page */
    top: number;

    /** the url to share, defaults to current url */
    url?: string;
    /** the image to share, defaults to og:image or twitter:image */
    image?: string;
    /** the description to share, defaults to og:description or twitter:description */
    description?: string;
    /** the title to share, defaults to og:title or twitter:title */
    title?: string;
    /** the message to include (only for email sharing) */
    message?: string;
    /** the subject to include (only for email sharing) */
    subject?: string;
    /** the username to include (only for email sharing) */
    username?: string;
  };

  function InlineShareButtons({ config }: { config: InlineShareButtonsConfig });
  function InlineFollowButtons({ config }: { config: InlineFollowButtonsConfig });
  function InlineReactionButtons({ config }: { config: InlineReactionButtonsConfig });
  function StickyShareButtons({ config }: { config: StickyShareButtonsConfig});
}
