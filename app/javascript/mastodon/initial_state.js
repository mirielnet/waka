// @ts-check

/**
 * @typedef Emoji
 * @property {string} shortcode
 * @property {string} static_url
 * @property {string} url
 */

/**
 * @typedef AccountField
 * @property {string} name
 * @property {string} value
 * @property {string} verified_at
 */

/**
 * @typedef Account
 * @property {string} acct
 * @property {string} avatar
 * @property {string} avatar_static
 * @property {boolean} bot
 * @property {string} created_at
 * @property {boolean=} discoverable
 * @property {string} display_name
 * @property {Emoji[]} emojis
 * @property {AccountField[]} fields
 * @property {number} followers_count
 * @property {number} following_count
 * @property {boolean} group
 * @property {string} header
 * @property {string} header_static
 * @property {string} id
 * @property {string=} last_status_at
 * @property {boolean} locked
 * @property {string} note
 * @property {number} statuses_count
 * @property {string} url
 * @property {string} username
 */

/**
 * @typedef {[code: string, name: string, localName: string]} InitialStateLanguage
 */

/**
 * @typedef InitialStateMeta
 * @property {string} access_token
 * @property {boolean=} advanced_layout
 * @property {boolean} auto_play_gif
 * @property {boolean} activity_api_enabled
 * @property {string} admin
 * @property {boolean} bookmark_category_needed
 * @property {boolean=} boost_modal
 * @property {boolean=} delete_modal
 * @property {boolean=} disable_swiping
 * @property {string=} disabled_account_id
 * @property {string} display_media
 * @property {boolean} display_media_expand
 * @property {string} domain
 * @property {string} dtl_tag
 * @property {boolean} enable_emoji_reaction
 * @property {boolean} enable_login_privacy
 * @property {boolean} enable_local_privacy
 * @property {boolean} enable_dtl_menu
 * @property {boolean=} expand_spoilers
 * @property {boolean} hide_blocking_quote
 * @property {boolean} hide_recent_emojis
 * @property {boolean} limited_federation_mode
 * @property {string} locale
 * @property {string | null} mascot
 * @property {string=} me
 * @property {string=} moved_to_account_id
 * @property {string=} owner
 * @property {boolean} profile_directory
 * @property {boolean} registrations_open
 * @property {boolean} reduce_motion
 * @property {string} repository
 * @property {boolean} search_enabled
 * @property {boolean} trends_enabled
 * @property {boolean} show_emoji_reaction_on_timeline
 * @property {boolean} show_quote_in_home
 * @property {boolean} show_quote_in_public
 * @property {string} simple_timeline_menu
 * @property {boolean} single_user_mode
 * @property {string} source_url
 * @property {string} streaming_api_base_url
 * @property {boolean} timeline_preview
 * @property {string} title
 * @property {boolean} show_trends
 * @property {boolean} trends_as_landing_page
 * @property {boolean} unfollow_modal
 * @property {boolean} use_blurhash
 * @property {boolean=} use_pending_items
 * @property {string} version
 * @property {string} sso_redirect
 */

/**
 * @typedef InitialState
 * @property {Record<string, Account>} accounts
 * @property {InitialStateLanguage[]} languages
 * @property {boolean=} critical_updates_pending
 * @property {InitialStateMeta} meta
 */

const element = document.getElementById('initial-state');
/** @type {InitialState | undefined} */
const initialState = element?.textContent && JSON.parse(element.textContent);

/** @type {string} */
const initialPath = document.querySelector("head meta[name=initialPath]")?.getAttribute("content") ?? '';
/** @type {boolean} */
export const hasMultiColumnPath = initialPath === '/'
  || initialPath === '/getting-started'
  || initialPath === '/home'
  || initialPath.startsWith('/deck');

/**
 * @template {keyof InitialStateMeta} K
 * @param {K} prop
 * @returns {InitialStateMeta[K] | undefined}
 */
const getMeta = (prop) => initialState?.meta && initialState.meta[prop];

export const activityApiEnabled = getMeta('activity_api_enabled');
export const autoPlayGif = getMeta('auto_play_gif');
export const bookmarkCategoryNeeded = getMeta('bookmark_category_needed');
export const boostModal = getMeta('boost_modal');
export const deleteModal = getMeta('delete_modal');
export const disableSwiping = getMeta('disable_swiping');
export const disabledAccountId = getMeta('disabled_account_id');
export const displayMedia = getMeta('display_media');
export const displayMediaExpand = getMeta('display_media_expand');
export const domain = getMeta('domain');
export const dtlTag = getMeta('dtl_tag');
export const enableEmojiReaction = getMeta('enable_emoji_reaction');
export const enableLocalPrivacy = getMeta('enable_local_privacy');
export const enableLoginPrivacy = getMeta('enable_login_privacy');
export const enableDtlMenu = getMeta('enable_dtl_menu');
export const expandSpoilers = getMeta('expand_spoilers');
export const forceSingleColumn = !getMeta('advanced_layout');
export const hideBlockingQuote = getMeta('hide_blocking_quote');
export const hideRecentEmojis = getMeta('hide_recent_emojis');
export const limitedFederationMode = getMeta('limited_federation_mode');
export const mascot = getMeta('mascot');
export const me = getMeta('me');
export const movedToAccountId = getMeta('moved_to_account_id');
export const owner = getMeta('owner');
export const profile_directory = getMeta('profile_directory');
export const reduceMotion = getMeta('reduce_motion');
export const registrationsOpen = getMeta('registrations_open');
export const repository = getMeta('repository');
export const searchEnabled = getMeta('search_enabled');
export const trendsEnabled = getMeta('trends_enabled');
export const showEmojiReactionOnTimeline = getMeta('show_emoji_reaction_on_timeline');
export const showQuoteInHome = getMeta('show_quote_in_home');
export const showQuoteInPublic = getMeta('show_quote_in_public');
export const showTrends = getMeta('show_trends');
export const simpleTimelineMenu = getMeta('simple_timeline_menu');
export const singleUserMode = getMeta('single_user_mode');
export const source_url = getMeta('source_url');
export const timelinePreview = getMeta('timeline_preview');
export const title = getMeta('title');
export const trendsAsLanding = getMeta('trends_as_landing_page');
export const unfollowModal = getMeta('unfollow_modal');
export const useBlurhash = getMeta('use_blurhash');
export const usePendingItems = getMeta('use_pending_items');
export const version = getMeta('version');
export const languages = initialState?.languages;
export const criticalUpdatesPending = initialState?.critical_updates_pending;
// @ts-expect-error
export const statusPageUrl = getMeta('status_page_url');
export const sso_redirect = getMeta('sso_redirect');

export default initialState;
