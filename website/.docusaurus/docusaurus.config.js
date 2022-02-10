export default {
  "title": "React DayPicker",
  "tagline": "Customizable date picker component for React",
  "url": "https://react-day-picker.js.org",
  "baseUrl": "/",
  "favicon": "images/favicon.ico",
  "organizationName": "gpbl",
  "projectName": "react-day-picker",
  "themeConfig": {
    "defaultMode": "light",
    "disableSwitch": false,
    "respectPrefersColorScheme": true,
    "image": "images/favicon.png",
    "navbar": {
      "title": "DayPicker",
      "logo": {
        "alt": "DayPicker Logo",
        "src": "images/logo.png"
      },
      "items": [
        {
          "to": "start",
          "label": "Documentation",
          "activeBaseRegex": "(start|basics|guides)",
          "position": "left"
        },
        {
          "to": "api/interfaces/daypickerbase",
          "label": "Component Props",
          "position": "left"
        },
        {
          "to": "api",
          "label": "API Reference",
          "activeBaseRegex": "!(api/interfaces/daypickerprops)",
          "position": "left"
        },
        {
          "to": "changelog",
          "label": "v8.0.0-beta.30",
          "position": "right"
        },
        {
          "href": "https://github.com/gpbl/react-day-picker",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "gtag": {
      "trackingID": "UA-68185118-1"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#000000",
          "backgroundColor": "#ffffff"
        },
        "styles": [
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(0, 128, 0)"
            }
          },
          {
            "types": [
              "builtin"
            ],
            "style": {
              "color": "rgb(0, 112, 193)"
            }
          },
          {
            "types": [
              "number",
              "variable",
              "inserted"
            ],
            "style": {
              "color": "rgb(9, 134, 88)"
            }
          },
          {
            "types": [
              "operator"
            ],
            "style": {
              "color": "rgb(0, 0, 0)"
            }
          },
          {
            "types": [
              "constant",
              "char"
            ],
            "style": {
              "color": "rgb(129, 31, 63)"
            }
          },
          {
            "types": [
              "tag"
            ],
            "style": {
              "color": "rgb(128, 0, 0)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(255, 0, 0)"
            }
          },
          {
            "types": [
              "deleted",
              "string"
            ],
            "style": {
              "color": "rgb(163, 21, 21)"
            }
          },
          {
            "types": [
              "changed",
              "punctuation"
            ],
            "style": {
              "color": "rgb(4, 81, 165)"
            }
          },
          {
            "types": [
              "function",
              "keyword"
            ],
            "style": {
              "color": "rgb(0, 0, 255)"
            }
          },
          {
            "types": [
              "class-name"
            ],
            "style": {
              "color": "rgb(38, 127, 153)"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "backgroundColor": "#2a2734",
          "color": "#9a86fd"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata",
              "punctuation"
            ],
            "style": {
              "color": "#6c6783"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "tag",
              "operator",
              "number"
            ],
            "style": {
              "color": "#e09142"
            }
          },
          {
            "types": [
              "property",
              "function"
            ],
            "style": {
              "color": "#9a86fd"
            }
          },
          {
            "types": [
              "tag-id",
              "selector",
              "atrule-id"
            ],
            "style": {
              "color": "#eeebff"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "#c4b9fe"
            }
          },
          {
            "types": [
              "boolean",
              "string",
              "entity",
              "url",
              "attr-value",
              "keyword",
              "control",
              "directive",
              "unit",
              "statement",
              "regex",
              "at-rule",
              "placeholder",
              "variable"
            ],
            "style": {
              "color": "#ffcc99"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "textDecorationLine": "line-through"
            }
          },
          {
            "types": [
              "inserted"
            ],
            "style": {
              "textDecorationLine": "underline"
            }
          },
          {
            "types": [
              "italic"
            ],
            "style": {
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "important",
              "bold"
            ],
            "style": {
              "fontWeight": "bold"
            }
          },
          {
            "types": [
              "important"
            ],
            "style": {
              "color": "#c4b9fe"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/distillery/Desktop/projects/blvd/github/react-day-picker/website/config/sidebar.ts",
          "showLastUpdateAuthor": false,
          "showLastUpdateTime": false,
          "routeBasePath": "/"
        },
        "theme": {
          "customCss": "/Users/distillery/Desktop/projects/blvd/github/react-day-picker/website/config/custom.css"
        }
      }
    ]
  ],
  "plugins": [
    [
      "docusaurus-plugin-typedoc",
      {
        "sidebar": {
          "sidebarFile": null
        },
        "entryPoints": [
          "../packages/react-day-picker/src/index.ts"
        ],
        "tsconfig": "../packages/react-day-picker/tsconfig.json",
        "allReflectionsHaveOwnDocument": true,
        "readme": "none",
        "disableSources": true,
        "out": "api",
        "hideBreadcrumbs": true,
        "hideInPageTOC": true,
        "indexTitle": "API Reference"
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};