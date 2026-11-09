/**
 * Default dark-theme colors for 12 apps, consolidated from the individual
 * per-app guides published June–August 2026. Contrast ratios are computed
 * from these hex values at render time (see getContrastRatio).
 *
 * iOS secondary/tertiary labels are semi-transparent in UIKit
 * (#EBEBF5 at 60% / 30%); they are stored here blended onto #000000
 * so contrast math reflects what users actually see.
 */
export const DARK_MODE_APPS = [
  {
    "id": "slack",
    "name": "Slack",
    "style": "Blue-gray",
    "bg": "#1A1D21",
    "surface": "#22252A",
    "text": "#FFFFFF",
    "text2": "#D1D2D3",
    "accent": "#1D9BD1",
    "accentName": "Slack blue",
    "why": "Slack layers near-neutral grays so channels and threads stay scannable, reserves blue for interactive elements, and uses green/red sparingly for semantic feedback. Team chat, dev tools, and internal dashboards borrow this hierarchy because users already understand it.",
    "tokens": [
      {
        "name": "Main background",
        "hex": "#1A1D21",
        "role": "Workspace canvas and message area",
        "kind": "surface"
      },
      {
        "name": "Sidebar / secondary",
        "hex": "#22252A",
        "role": "Channel list, left rail",
        "kind": "surface"
      },
      {
        "name": "Hover surface",
        "hex": "#2C2D30",
        "role": "Row hover, menu items",
        "kind": "surface"
      },
      {
        "name": "Elevated surface",
        "hex": "#383A3F",
        "role": "Modals, popovers, dividers",
        "kind": "surface"
      },
      {
        "name": "Text primary",
        "hex": "#FFFFFF",
        "role": "Messages, channel names",
        "kind": "text"
      },
      {
        "name": "Text secondary",
        "hex": "#D1D2D3",
        "role": "Timestamps, metadata",
        "kind": "text"
      },
      {
        "name": "Text muted",
        "hex": "#9B9B9B",
        "role": "Placeholders, hints",
        "kind": "text"
      },
      {
        "name": "Slack blue",
        "hex": "#1D9BD1",
        "role": "Links, info, primary actions",
        "kind": "accent"
      },
      {
        "name": "Success green",
        "hex": "#007A5A",
        "role": "Success states, confirmations",
        "kind": "accent"
      },
      {
        "name": "Danger red",
        "hex": "#E01E5A",
        "role": "Errors, mentions, alerts",
        "kind": "accent"
      },
      {
        "name": "Legacy aubergine",
        "hex": "#350D36",
        "role": "Classic Slack sidebar (older theme)",
        "kind": "surface"
      }
    ]
  },
  {
    "id": "ios",
    "name": "iOS",
    "style": "True black",
    "bg": "#000000",
    "surface": "#1C1C1E",
    "text": "#FFFFFF",
    "text2": "#8D8D93",
    "accent": "#0A84FF",
    "accentName": "system blue",
    "why": "Apple stacks true black with two elevated gray surfaces so hierarchy is clear without shadows. Tint blue appears only on interactive elements, and semantic reds/greens stay reserved for status. Mobile apps that want an “iPhone-native” feel copy this layered system.",
    "tokens": [
      {
        "name": "System background",
        "hex": "#000000",
        "role": "Base canvas (true black OLED)",
        "kind": "surface"
      },
      {
        "name": "Secondary background",
        "hex": "#1C1C1E",
        "role": "Grouped lists, elevated base",
        "kind": "surface"
      },
      {
        "name": "Tertiary background",
        "hex": "#2C2C2E",
        "role": "Cards inside secondary",
        "kind": "surface"
      },
      {
        "name": "Quaternary fill",
        "hex": "#3A3A3C",
        "role": "Fill accents, separators adjacent",
        "kind": "surface"
      },
      {
        "name": "Label",
        "hex": "#FFFFFF",
        "role": "Primary text",
        "kind": "text"
      },
      {
        "name": "Secondary label",
        "hex": "#8D8D93",
        "role": "Secondary text",
        "kind": "text",
        "note": "#EBEBF5 at 60% opacity, shown blended onto #000000"
      },
      {
        "name": "Tertiary label",
        "hex": "#47474A",
        "role": "Tertiary / placeholder text",
        "kind": "text",
        "note": "#EBEBF5 at 30% opacity, shown blended onto #000000"
      },
      {
        "name": "System blue",
        "hex": "#0A84FF",
        "role": "Tint, links, primary actions",
        "kind": "accent"
      },
      {
        "name": "System green",
        "hex": "#30D158",
        "role": "Success, positive",
        "kind": "accent"
      },
      {
        "name": "System red",
        "hex": "#FF453A",
        "role": "Destructive, errors",
        "kind": "accent"
      },
      {
        "name": "System orange",
        "hex": "#FF9F0A",
        "role": "Warnings, accents",
        "kind": "accent"
      },
      {
        "name": "System indigo",
        "hex": "#5E5CE6",
        "role": "Secondary brand tint",
        "kind": "accent"
      },
      {
        "name": "Separator",
        "hex": "#38383A",
        "role": "Hairline dividers",
        "kind": "border"
      }
    ]
  },
  {
    "id": "telegram",
    "name": "Telegram",
    "style": "Blue-gray",
    "bg": "#0E1621",
    "surface": "#17212B",
    "text": "#FFFFFF",
    "text2": "#7F8B99",
    "accent": "#2AABEE",
    "accentName": "Telegram blue",
    "why": "Telegram uses a cool blue-black canvas so message bubbles read clearly, reserves brand blue for accents, and separates sent vs received with different bubble depths. Messaging apps borrow this pattern because it scales across long chats without eye fatigue.",
    "tokens": [
      {
        "name": "Main background",
        "hex": "#0E1621",
        "role": "Chat canvas",
        "kind": "surface"
      },
      {
        "name": "Chat list / sidebar",
        "hex": "#17212B",
        "role": "Conversation list panel",
        "kind": "surface"
      },
      {
        "name": "Received bubble",
        "hex": "#182533",
        "role": "Incoming messages",
        "kind": "surface"
      },
      {
        "name": "Sent bubble",
        "hex": "#2B5278",
        "role": "Outgoing messages",
        "kind": "surface"
      },
      {
        "name": "Composer / input",
        "hex": "#17212B",
        "role": "Message input bar",
        "kind": "surface"
      },
      {
        "name": "Border / divider",
        "hex": "#0F1C26",
        "role": "Subtle separators",
        "kind": "border"
      },
      {
        "name": "Text primary",
        "hex": "#FFFFFF",
        "role": "Message body",
        "kind": "text"
      },
      {
        "name": "Text secondary",
        "hex": "#7F8B99",
        "role": "Timestamps, hints",
        "kind": "text"
      },
      {
        "name": "Telegram blue",
        "hex": "#2AABEE",
        "role": "Links, accents, brand",
        "kind": "accent"
      },
      {
        "name": "Online green",
        "hex": "#4DCD5E",
        "role": "Online status",
        "kind": "accent"
      },
      {
        "name": "Danger red",
        "hex": "#E53935",
        "role": "Errors, destructive",
        "kind": "accent"
      }
    ]
  },
  {
    "id": "spotify",
    "name": "Spotify",
    "style": "Neutral gray",
    "bg": "#121212",
    "surface": "#181818",
    "text": "#FFFFFF",
    "text2": "#B3B3B3",
    "accent": "#1DB954",
    "accentName": "Spotify green",
    "why": "Spotify optimizes for content: near-black neutrals let album art and playlists pop, the green accent appears only on interactive elements, and three layered surfaces create depth without shadows. Media, audio, and entertainment apps borrow this pattern because it keeps colorful content the focus.",
    "tokens": [
      {
        "name": "Main background",
        "hex": "#121212",
        "role": "App canvas behind everything",
        "kind": "surface"
      },
      {
        "name": "Card base",
        "hex": "#181818",
        "role": "Album cards, playlist tiles",
        "kind": "surface"
      },
      {
        "name": "Card hover",
        "hex": "#1A1A1A",
        "role": "Card hover state",
        "kind": "surface"
      },
      {
        "name": "Elevated surface",
        "hex": "#282828",
        "role": "Now-playing bar, menus, modals",
        "kind": "surface"
      },
      {
        "name": "Highlight / active",
        "hex": "#333333",
        "role": "Active rows, pressed states",
        "kind": "surface"
      },
      {
        "name": "Border / divider",
        "hex": "#292929",
        "role": "Subtle separators",
        "kind": "border"
      },
      {
        "name": "Text primary",
        "hex": "#FFFFFF",
        "role": "Track titles, headings",
        "kind": "text"
      },
      {
        "name": "Text subdued",
        "hex": "#B3B3B3",
        "role": "Artist names, metadata",
        "kind": "text"
      },
      {
        "name": "Text muted",
        "hex": "#A7A7A7",
        "role": "Timestamps, captions",
        "kind": "text"
      },
      {
        "name": "Spotify green",
        "hex": "#1DB954",
        "role": "Brand accent, primary buttons",
        "kind": "accent"
      },
      {
        "name": "Bright green",
        "hex": "#1ED760",
        "role": "Play button, hover accent",
        "kind": "accent"
      },
      {
        "name": "Green pressed",
        "hex": "#1AA34A",
        "role": "Pressed accent state",
        "kind": "accent"
      }
    ]
  },
  {
    "id": "chrome",
    "name": "Chrome",
    "style": "Neutral gray",
    "bg": "#202124",
    "surface": "#292A2D",
    "text": "#E8EAED",
    "text2": "#9AA0A6",
    "accent": "#8AB4F8",
    "accentName": "link blue",
    "why": "Chrome follows Material dark principles: cool mid-darks for long browsing sessions, blue reserved for interactive focus, and muted gray for secondary chrome so content stays primary. Browser UIs, settings apps, and Material-inspired dashboards borrow this hierarchy.",
    "tokens": [
      {
        "name": "Main background",
        "hex": "#202124",
        "role": "NTP and settings canvas",
        "kind": "surface"
      },
      {
        "name": "Toolbar",
        "hex": "#292A2D",
        "role": "Top chrome / toolbar",
        "kind": "surface"
      },
      {
        "name": "Surface / card",
        "hex": "#3C4043",
        "role": "Cards, menus, elevated panels",
        "kind": "surface"
      },
      {
        "name": "Hover",
        "hex": "#5F6368",
        "role": "Hover states, inactive icons",
        "kind": "surface"
      },
      {
        "name": "Border",
        "hex": "#5F6368",
        "role": "Dividers and outlines",
        "kind": "border"
      },
      {
        "name": "Text primary",
        "hex": "#E8EAED",
        "role": "Titles, primary labels",
        "kind": "text"
      },
      {
        "name": "Text secondary",
        "hex": "#9AA0A6",
        "role": "Captions, metadata",
        "kind": "text"
      },
      {
        "name": "Link / accent blue",
        "hex": "#8AB4F8",
        "role": "Links, selected tabs, focus",
        "kind": "accent"
      },
      {
        "name": "Google Blue",
        "hex": "#1A73E8",
        "role": "Primary buttons (Material)",
        "kind": "accent"
      },
      {
        "name": "Error red",
        "hex": "#F28B82",
        "role": "Errors, destructive hints",
        "kind": "accent"
      },
      {
        "name": "Success green",
        "hex": "#81C995",
        "role": "Success states",
        "kind": "accent"
      }
    ]
  },
  {
    "id": "notion",
    "name": "Notion",
    "style": "Neutral gray",
    "bg": "#191919",
    "surface": "#202020",
    "text": "#E6E6E6",
    "text2": "#9B9B9B",
    "accent": "#2383E2",
    "accentName": "blue accent",
    "why": "Notion optimizes for reading and writing: surfaces sit close in value so nothing competes with your content, text contrast stays high, and color is reserved for links and callout tags. Docs tools, wikis, and note apps borrow this restrained pattern because it reduces fatigue during long sessions.",
    "tokens": [
      {
        "name": "Main background",
        "hex": "#191919",
        "role": "Page canvas and editor",
        "kind": "surface"
      },
      {
        "name": "Sidebar background",
        "hex": "#202020",
        "role": "Left navigation rail",
        "kind": "surface"
      },
      {
        "name": "Hover surface",
        "hex": "#2F2F2F",
        "role": "Row hover, menu items",
        "kind": "surface"
      },
      {
        "name": "Elevated / card",
        "hex": "#252525",
        "role": "Popovers, cards, callouts",
        "kind": "surface"
      },
      {
        "name": "Border / divider",
        "hex": "#373737",
        "role": "Table lines, separators",
        "kind": "border"
      },
      {
        "name": "Text primary",
        "hex": "#E6E6E6",
        "role": "Body text (white at ~90%)",
        "kind": "text"
      },
      {
        "name": "Text secondary",
        "hex": "#9B9B9B",
        "role": "Placeholders, captions",
        "kind": "text"
      },
      {
        "name": "Text muted",
        "hex": "#6F6F6F",
        "role": "Disabled, hints",
        "kind": "text"
      },
      {
        "name": "Blue accent",
        "hex": "#2383E2",
        "role": "Links, primary buttons",
        "kind": "accent"
      },
      {
        "name": "Blue text callout",
        "hex": "#529CCA",
        "role": "Blue-colored text",
        "kind": "accent"
      },
      {
        "name": "Red callout",
        "hex": "#FF7369",
        "role": "Red text / tags",
        "kind": "accent"
      },
      {
        "name": "Yellow callout",
        "hex": "#FFDC49",
        "role": "Yellow highlight / tags",
        "kind": "accent"
      },
      {
        "name": "Green callout",
        "hex": "#4DAB9A",
        "role": "Green text / tags",
        "kind": "accent"
      }
    ]
  },
  {
    "id": "twitter",
    "name": "X (Twitter)",
    "style": "True black",
    "bg": "#000000",
    "surface": "#16181C",
    "text": "#E7E9EA",
    "text2": "#71767B",
    "accent": "#1D9BF0",
    "accentName": "X blue",
    "why": "Lights Out keeps the feed on true black so media and blue CTAs pop. Surfaces lift just enough for menus without gray mush, and secondary gray text keeps timestamps quiet. Social apps that want an “X-native” feel copy this high-contrast black + #1D9BF0 system.",
    "tokens": [
      {
        "name": "Lights Out background",
        "hex": "#000000",
        "role": "Main canvas (OLED black)",
        "kind": "surface"
      },
      {
        "name": "Elevated surface",
        "hex": "#16181C",
        "role": "Modals, menus, sticky bars",
        "kind": "surface"
      },
      {
        "name": "Hover / soft fill",
        "hex": "#1D1F23",
        "role": "Row hover, subtle chips",
        "kind": "surface"
      },
      {
        "name": "Border / divider",
        "hex": "#2F3336",
        "role": "Hairlines, card edges",
        "kind": "border"
      },
      {
        "name": "Primary text",
        "hex": "#E7E9EA",
        "role": "Tweets, names, body copy",
        "kind": "text"
      },
      {
        "name": "Secondary text",
        "hex": "#71767B",
        "role": "Handles, timestamps, meta",
        "kind": "text"
      },
      {
        "name": "X blue",
        "hex": "#1D9BF0",
        "role": "Links, buttons, follow CTA",
        "kind": "accent"
      },
      {
        "name": "Like / accent pink",
        "hex": "#F91880",
        "role": "Likes, heart states",
        "kind": "accent"
      },
      {
        "name": "Success green",
        "hex": "#00BA7C",
        "role": "Repost / positive states",
        "kind": "accent"
      }
    ]
  },
  {
    "id": "github",
    "name": "GitHub",
    "style": "Blue-gray",
    "bg": "#0D1117",
    "surface": "#161B22",
    "text": "#E6EDF3",
    "text2": "#8B949E",
    "accent": "#2F81F7",
    "accentName": "accent blue",
    "why": "GitHub layers cool near-black surfaces so code and diffs stay readable, reserves blue for navigation and links, and uses green/red/yellow/purple only for PR and issue semantics. Developer tools and internal dashboards borrow this system because millions of engineers already understand it.",
    "tokens": [
      {
        "name": "Page background",
        "hex": "#0D1117",
        "role": "Default dark canvas",
        "kind": "surface"
      },
      {
        "name": "Canvas / elevated",
        "hex": "#161B22",
        "role": "Cards, boxes, sidebars",
        "kind": "surface"
      },
      {
        "name": "Overlay / menu",
        "hex": "#1C2128",
        "role": "Dropdowns, popovers",
        "kind": "surface"
      },
      {
        "name": "Border default",
        "hex": "#30363D",
        "role": "Rules, table borders",
        "kind": "border"
      },
      {
        "name": "Border muted",
        "hex": "#21262D",
        "role": "Subtle separators",
        "kind": "border"
      },
      {
        "name": "Text primary",
        "hex": "#E6EDF3",
        "role": "Body, headings",
        "kind": "text"
      },
      {
        "name": "Text secondary",
        "hex": "#8B949E",
        "role": "Meta, captions",
        "kind": "text"
      },
      {
        "name": "Accent blue",
        "hex": "#2F81F7",
        "role": "Links, focus, primary actions",
        "kind": "accent"
      },
      {
        "name": "Success green",
        "hex": "#3FB950",
        "role": "Open PRs, success",
        "kind": "accent"
      },
      {
        "name": "Danger red",
        "hex": "#F85149",
        "role": "Closed, errors, delete",
        "kind": "accent"
      },
      {
        "name": "Attention yellow",
        "hex": "#D29922",
        "role": "Warnings, draft",
        "kind": "accent"
      },
      {
        "name": "Done purple",
        "hex": "#A371F7",
        "role": "Merged, done states",
        "kind": "accent"
      }
    ]
  },
  {
    "id": "reddit",
    "name": "Reddit",
    "style": "Blue-gray",
    "bg": "#0B1416",
    "surface": "#1A1A1B",
    "text": "#D7DADC",
    "text2": "#818384",
    "accent": "#FF4500",
    "accentName": "Reddit orange",
    "why": "Reddit keeps feeds scannable with near-black cards, reserves orange for brand and vote actions, and uses muted gray for metadata so titles stay primary. Community and social feed products borrow this structure because users already know upvote orange and card rhythm.",
    "tokens": [
      {
        "name": "Main background",
        "hex": "#0B1416",
        "role": "App canvas (new Reddit dark)",
        "kind": "surface"
      },
      {
        "name": "Card / post surface",
        "hex": "#1A1A1B",
        "role": "Posts, sidebars, panels",
        "kind": "surface"
      },
      {
        "name": "Elevated surface",
        "hex": "#272729",
        "role": "Menus, hover cards",
        "kind": "surface"
      },
      {
        "name": "Border / divider",
        "hex": "#343536",
        "role": "Separators between posts",
        "kind": "border"
      },
      {
        "name": "Text primary",
        "hex": "#D7DADC",
        "role": "Post titles, body",
        "kind": "text"
      },
      {
        "name": "Text muted",
        "hex": "#818384",
        "role": "Metadata, timestamps",
        "kind": "text"
      },
      {
        "name": "Reddit orange",
        "hex": "#FF4500",
        "role": "Brand accent, upvote active",
        "kind": "accent"
      },
      {
        "name": "Upvote orange",
        "hex": "#FF4500",
        "role": "Active upvote",
        "kind": "accent"
      },
      {
        "name": "Downvote blue",
        "hex": "#7193FF",
        "role": "Active downvote",
        "kind": "accent"
      },
      {
        "name": "Link blue",
        "hex": "#4FBCFF",
        "role": "Links in posts",
        "kind": "accent"
      },
      {
        "name": "NSFW pink",
        "hex": "#FF66AC",
        "role": "NSFW / spoiler accents",
        "kind": "accent"
      }
    ]
  },
  {
    "id": "vscode",
    "name": "VS Code",
    "style": "Neutral gray",
    "bg": "#1E1E1E",
    "surface": "#252526",
    "text": "#D4D4D4",
    "text2": "#808080",
    "accent": "#007ACC",
    "accentName": "status-bar blue",
    "why": "VS Code Dark+ is optimized for long coding sessions: mid-dark grays reduce glare, blue accents mark focus and status without saturating the editor, and semantic colors (red/yellow/green) stay reserved for diagnostics and git. Developer dashboards and IDEs borrow this hierarchy because millions of engineers already know it.",
    "tokens": [
      {
        "name": "Editor background",
        "hex": "#1E1E1E",
        "role": "Main code canvas (Dark+)",
        "kind": "surface"
      },
      {
        "name": "Sidebar",
        "hex": "#252526",
        "role": "File explorer, outline",
        "kind": "surface"
      },
      {
        "name": "Activity bar",
        "hex": "#333333",
        "role": "Left icon rail",
        "kind": "surface"
      },
      {
        "name": "Title bar",
        "hex": "#3C3C3C",
        "role": "Window chrome",
        "kind": "surface"
      },
      {
        "name": "Input / dropdown",
        "hex": "#3C3C3C",
        "role": "Search, command palette",
        "kind": "surface"
      },
      {
        "name": "Border",
        "hex": "#474747",
        "role": "Panel separators",
        "kind": "border"
      },
      {
        "name": "Text primary",
        "hex": "#D4D4D4",
        "role": "Editor foreground",
        "kind": "text"
      },
      {
        "name": "Text muted",
        "hex": "#808080",
        "role": "Comments-adjacent UI chrome",
        "kind": "text"
      },
      {
        "name": "Status bar",
        "hex": "#007ACC",
        "role": "Bottom bar (default blue)",
        "kind": "accent"
      },
      {
        "name": "Focus border",
        "hex": "#007FD4",
        "role": "Focused inputs",
        "kind": "border"
      },
      {
        "name": "Selection",
        "hex": "#264F78",
        "role": "Selected text background",
        "kind": "surface"
      },
      {
        "name": "Line highlight",
        "hex": "#2A2D2E",
        "role": "Current line",
        "kind": "surface"
      },
      {
        "name": "Error red",
        "hex": "#F14C4C",
        "role": "Errors, delete actions",
        "kind": "accent"
      },
      {
        "name": "Warning yellow",
        "hex": "#CCA700",
        "role": "Warnings",
        "kind": "accent"
      },
      {
        "name": "Git added green",
        "hex": "#89D185",
        "role": "Added lines in SCM",
        "kind": "accent"
      }
    ]
  },
  {
    "id": "linkedin",
    "name": "LinkedIn",
    "style": "True black",
    "bg": "#000000",
    "surface": "#1B1F23",
    "text": "#FFFFFF",
    "text2": "#B0B0B0",
    "accent": "#70B5F9",
    "accentName": "LinkedIn blue",
    "why": "LinkedIn keeps cards slightly lifted off pure black so the feed reads as a document stack, not a void. Cool blue accents stay reserved for actions, while gray meta text keeps hierarchy calm—ideal for professional dashboards and B2B product UI.",
    "tokens": [
      {
        "name": "Background",
        "hex": "#000000",
        "role": "Main canvas",
        "kind": "surface"
      },
      {
        "name": "Surface / card",
        "hex": "#1B1F23",
        "role": "Feed cards, nav, panels",
        "kind": "surface"
      },
      {
        "name": "Elevated fill",
        "hex": "#2A2E33",
        "role": "Hover, nested chips",
        "kind": "surface"
      },
      {
        "name": "Border / divider",
        "hex": "#38434F",
        "role": "Card edges, separators",
        "kind": "border"
      },
      {
        "name": "Primary text",
        "hex": "#FFFFFF",
        "role": "Names, headlines, body",
        "kind": "text"
      },
      {
        "name": "Secondary text",
        "hex": "#B0B0B0",
        "role": "Meta, timestamps, muted",
        "kind": "text"
      },
      {
        "name": "LinkedIn blue",
        "hex": "#70B5F9",
        "role": "Links, primary actions",
        "kind": "accent"
      },
      {
        "name": "Brand blue (logo)",
        "hex": "#0A66C2",
        "role": "Marketing / logo blue",
        "kind": "accent"
      },
      {
        "name": "Success green",
        "hex": "#057642",
        "role": "Positive / open-to-work cues",
        "kind": "accent"
      }
    ]
  },
  {
    "id": "figma",
    "name": "Figma",
    "style": "Neutral gray",
    "bg": "#1E1E1E",
    "surface": "#2C2C2C",
    "text": "#FFFFFF",
    "text2": "#B3B3B3",
    "accent": "#0D99FF",
    "accentName": "Figma blue",
    "why": "Figma keeps chrome mid-dark so frames and colors on the canvas stay the focus. Blue marks selection without flooding the UI, and purple is reserved for components—a semantic split designers learn quickly. Creative tools and design systems borrow this restraint so content, not chrome, leads.",
    "tokens": [
      {
        "name": "Toolbar / chrome",
        "hex": "#2C2C2C",
        "role": "Top bar, tool rails",
        "kind": "surface"
      },
      {
        "name": "Panel background",
        "hex": "#1E1E1E",
        "role": "Layers, properties, left/right panels",
        "kind": "surface"
      },
      {
        "name": "Canvas (artboard area)",
        "hex": "#1E1E1E",
        "role": "Dark canvas behind frames",
        "kind": "surface"
      },
      {
        "name": "Hover / selected row",
        "hex": "#383838",
        "role": "Layer hover, menu highlight",
        "kind": "surface"
      },
      {
        "name": "Border / divider",
        "hex": "#444444",
        "role": "Panel separators",
        "kind": "border"
      },
      {
        "name": "Text primary",
        "hex": "#FFFFFF",
        "role": "Labels, layer names",
        "kind": "text"
      },
      {
        "name": "Text secondary",
        "hex": "#B3B3B3",
        "role": "Hints, secondary labels",
        "kind": "text"
      },
      {
        "name": "Text muted",
        "hex": "#8C8C8C",
        "role": "Disabled, captions",
        "kind": "text"
      },
      {
        "name": "Figma blue",
        "hex": "#0D99FF",
        "role": "Selection, primary actions, links",
        "kind": "accent"
      },
      {
        "name": "Component purple",
        "hex": "#9747FF",
        "role": "Components, instances",
        "kind": "accent"
      },
      {
        "name": "Prototype purple",
        "hex": "#A259FF",
        "role": "Prototype connectors (brand-adjacent)",
        "kind": "accent"
      },
      {
        "name": "Error red",
        "hex": "#F24822",
        "role": "Errors, destructive",
        "kind": "accent"
      }
    ]
  }
];
