{
  "requires": true,
  "lockfileVersion": 1,
  "dependencies": {
    "ansi-regex": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
      "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8="
    },
    "async-limiter": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/async-limiter/-/async-limiter-1.0.1.tgz",
      "integrity": "sha512-csOlWGAcRFJaI6m+F2WKdnMKr4HhdhFVBk0H/QbJFMCr+uO2kwohwXQPxw/9OCxp05r5ghVBFSyioixx3gfkNQ=="
    },
    "camelcase": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-4.1.0.tgz",
      "integrity": "sha1-1UVjW+HjPFQmScaRc+Xeas+uNN0="
    },
    "cliui": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-3.2.0.tgz",
      "integrity": "sha1-EgYBU3qRbSmUD5NNo7SNWFo5IT0=",
      "requires": {
        "string-width": "^1.0.1",
        "strip-ansi": "^3.0.1",
        "wrap-ansi": "^2.0.0"
      },
      "dependencies": {
        "string-width": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
          "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
          "requires": {
            "code-point-at": "^1.0.0",
            "is-fullwidth-code-point": "^1.0.0",
            "strip-ansi": "^3.0.0"
          }
        }
      }
    },
    "code-point-at": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
      "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c="
    },
    "cross-spawn": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-5.1.0.tgz",
      "integrity": "sha1-6L0O/uWPz/b4+UUQoKVUu/ojVEk=",
      "requires": {
        "lru-cache": "^4.0.1",
        "shebang-command": "^1.2.0",
        "which": "^1.2.9"
      }
    },
    "decamelize": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
      "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA="
    },
    "discord.js": {
      "version": "11.5.1",
      "resolved": "https://registry.npmjs.org/discord.js/-/discord.js-11.5.1.tgz",
      "integrity": "sha512-tGhV5xaZXE3Z+4uXJb3hYM6gQ1NmnSxp9PClcsSAYFVRzH6AJH74040mO3afPDMWEAlj8XsoPXXTJHTxesqcGw==",
      "requires": {
        "long": "^4.0.0",
        "prism-media": "^0.0.3",
        "snekfetch": "^3.6.4",
        "tweetnacl": "^1.0.0",
        "ws": "^6.0.0"
      }
    },
    "ejs": {
      "version": "2.7.1",
      "resolved": "https://registry.npmjs.org/ejs/-/ejs-2.7.1.tgz",
      "integrity": "sha512-kS/gEPzZs3Y1rRsbGX4UOSjtP/CeJP0CxSNZHYxGfVM/VgLcv0ZqM7C45YyTj2DI2g7+P9Dd24C+IMIg6D0nYQ=="
    },
    "error-ex": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
      "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
      "requires": {
        "is-arrayish": "^0.2.1"
      }
    },
    "execa": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/execa/-/execa-0.7.0.tgz",
      "integrity": "sha1-lEvs00zEHuMqY6n68nrVpl/Fl3c=",
      "requires": {
        "cross-spawn": "^5.0.1",
        "get-stream": "^3.0.0",
        "is-stream": "^1.1.0",
        "npm-run-path": "^2.0.0",
        "p-finally": "^1.0.0",
        "signal-exit": "^3.0.0",
        "strip-eof": "^1.0.0"
      }
    },
    "find-up": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
      "integrity": "sha1-RdG35QbHF93UgndaK3eSCjwMV6c=",
      "requires": {
        "locate-path": "^2.0.0"
      }
    },
    "fs-extra": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-4.0.3.tgz",
      "integrity": "sha512-q6rbdDd1o2mAnQreO7YADIxf/Whx4AHBiRf6d+/cVT8h44ss+lHgxf1FemcqDnQt9X3ct4McHr+JMGlYSsK7Cg==",
      "requires": {
        "graceful-fs": "^4.1.2",
        "jsonfile": "^4.0.0",
        "universalify": "^0.1.0"
      }
    },
    "get-caller-file": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-1.0.3.tgz",
      "integrity": "sha512-3t6rVToeoZfYSGd8YoLFR2DJkiQrIiUrGcjvFX2mDw3bn6k2OtwHN0TNCLbBO+w8qTvimhDkv+LSscbJY1vE6w=="
    },
    "get-stream": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-3.0.0.tgz",
      "integrity": "sha1-jpQ9E1jcN1VQVOy+LtsFqhdO3hQ="
    },
    "graceful-fs": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.2.tgz",
      "integrity": "sha512-IItsdsea19BoLC7ELy13q1iJFNmd7ofZH5+X/pJr90/nRoPEX0DJo1dHDbgtYWOhJhcCgMDTOw84RZ72q6lB+Q=="
    },
    "hosted-git-info": {
      "version": "2.8.5",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.5.tgz",
      "integrity": "sha512-kssjab8CvdXfcXMXVcvsXum4Hwdq9XGtRD3TteMEvEbq0LXyiNQr6AprqKqfeaDXze7SxWvRxdpwE6ku7ikLkg=="
    },
    "invert-kv": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/invert-kv/-/invert-kv-1.0.0.tgz",
      "integrity": "sha1-EEqOSqym09jNFXqO+L+rLXo//bY="
    },
    "is-arrayish": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0="
    },
    "is-fullwidth-code-point": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
      "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
      "requires": {
        "number-is-nan": "^1.0.0"
      }
    },
    "is-stream": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
      "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ="
    },
    "isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA="
    },
    "jsonfile": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
      "integrity": "sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=",
      "requires": {
        "graceful-fs": "^4.1.6"
      }
    },
    "lcid": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/lcid/-/lcid-1.0.0.tgz",
      "integrity": "sha1-MIrMr6C8SDo4Z7S28rlQYlHRuDU=",
      "requires": {
        "invert-kv": "^1.0.0"
      }
    },
    "load-json-file": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-2.0.0.tgz",
      "integrity": "sha1-eUfkIUmvgNaWy/eXvKq8/h/inKg=",
      "requires": {
        "graceful-fs": "^4.1.2",
        "parse-json": "^2.2.0",
        "pify": "^2.0.0",
        "strip-bom": "^3.0.0"
      }
    },
    "locate-path": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",
      "integrity": "sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=",
      "requires": {
        "p-locate": "^2.0.0",
        "path-exists": "^3.0.0"
      }
    },
    "long": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/long/-/long-4.0.0.tgz",
      "integrity": "sha512-XsP+KhQif4bjX1kbuSiySJFNAehNxgLb6hPRGJ9QsUr8ajHkuXGdrHmFUTUUXhDwVX2R5bY4JNZEwbUiMhV+MA=="
    },
    "lru-cache": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.5.tgz",
      "integrity": "sha512-sWZlbEP2OsHNkXrMl5GYk/jKk70MBng6UU4YI/qGDYbgf6YbP4EvmqISbXCoJiRKs+1bSpFHVgQxvJ17F2li5g==",
      "requires": {
        "pseudomap": "^1.0.2",
        "yallist": "^2.1.2"
      }
    },
    "mem": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/mem/-/mem-1.1.0.tgz",
      "integrity": "sha1-Xt1StIXKHZAP5kiVUFOZoN+kX3Y=",
      "requires": {
        "mimic-fn": "^1.0.0"
      }
    },
    "mimic-fn": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
      "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ=="
    },
    "normalize-package-data": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
      "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",
      "requires": {
        "hosted-git-info": "^2.1.4",
        "resolve": "^1.10.0",
        "semver": "2 || 3 || 4 || 5",
        "validate-npm-package-license": "^3.0.1"
      }
    },
    "npm-run-path": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-2.0.2.tgz",
      "integrity": "sha1-NakjLfo11wZ7TLLd8jV7GHFTbF8=",
      "requires": {
        "path-key": "^2.0.0"
      }
    },
    "number-is-nan": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
      "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0="
    },
    "os-locale": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/os-locale/-/os-locale-2.1.0.tgz",
      "integrity": "sha512-3sslG3zJbEYcaC4YVAvDorjGxc7tv6KVATnLPZONiljsUncvihe9BQoVCEs0RZ1kmf4Hk9OBqlZfJZWI4GanKA==",
      "requires": {
        "execa": "^0.7.0",
        "lcid": "^1.0.0",
        "mem": "^1.1.0"
      }
    },
    "p-finally": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
      "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4="
    },
    "p-limit": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz",
      "integrity": "sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==",
      "requires": {
        "p-try": "^1.0.0"
      }
    },
    "p-locate": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",
      "integrity": "sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=",
      "requires": {
        "p-limit": "^1.1.0"
      }
    },
    "p-try": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
      "integrity": "sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M="
    },
    "parse-json": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",
      "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",
      "requires": {
        "error-ex": "^1.2.0"
      }
    },
    "path-exists": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
      "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU="
    },
    "path-key": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
      "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A="
    },
    "path-parse": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.6.tgz",
      "integrity": "sha512-GSmOT2EbHrINBf9SR7CDELwlJ8AENk3Qn7OikK4nFYAu3Ote2+JYNVvkpAEQm3/TLNEJFD/xZJjzyxg3KBWOzw=="
    },
    "path-type": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-2.0.0.tgz",
      "integrity": "sha1-8BLMuEFbcJb8LaoQVMPXI4lZTHM=",
      "requires": {
        "pify": "^2.0.0"
      }
    },
    "pify": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
      "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw="
    },
    "prism-media": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/prism-media/-/prism-media-0.0.3.tgz",
      "integrity": "sha512-c9KkNifSMU/iXT8FFTaBwBMr+rdVcN+H/uNv1o+CuFeTThNZNTOrQ+RgXA1yL/DeLk098duAeRPP3QNPNbhxYQ=="
    },
    "pseudomap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/pseudomap/-/pseudomap-1.0.2.tgz",
      "integrity": "sha1-8FKijacOYYkX7wqKw0wa5aaChrM="
    },
    "read-pkg": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-2.0.0.tgz",
      "integrity": "sha1-jvHAYjxqbbDcZxPEv6xGMysjaPg=",
      "requires": {
        "load-json-file": "^2.0.0",
        "normalize-package-data": "^2.3.2",
        "path-type": "^2.0.0"
      }
    },
    "read-pkg-up": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-2.0.0.tgz",
      "integrity": "sha1-a3KoBImE4MQeeVEP1en6mbO1Sb4=",
      "requires": {
        "find-up": "^2.0.0",
        "read-pkg": "^2.0.0"
      }
    },
    "require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I="
    },
    "require-main-filename": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-1.0.1.tgz",
      "integrity": "sha1-l/cXtp1IeE9fUmpsWqj/3aBVpNE="
    },
    "resolve": {
      "version": "1.12.0",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.12.0.tgz",
      "integrity": "sha512-B/dOmuoAik5bKcD6s6nXDCjzUKnaDvdkRyAk6rsmsKLipWj4797iothd7jmmUhWTfinVMU+wc56rYKsit2Qy4w==",
      "requires": {
        "path-parse": "^1.0.6"
      }
    },
    "semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
    },
    "set-blocking": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
      "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc="
    },
    "shebang-command": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
      "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
      "requires": {
        "shebang-regex": "^1.0.0"
      }
    },
    "shebang-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
      "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM="
    },
    "signal-exit": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.2.tgz",
      "integrity": "sha1-tf3AjxKH6hF4Yo5BXiUTK3NkbG0="
    },
    "snekfetch": {
      "version": "3.6.4",
      "resolved": "https://registry.npmjs.org/snekfetch/-/snekfetch-3.6.4.tgz",
      "integrity": "sha512-NjxjITIj04Ffqid5lqr7XdgwM7X61c/Dns073Ly170bPQHLm6jkmelye/eglS++1nfTWktpP6Y2bFXjdPlQqdw=="
    },
    "spdx-correct": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.0.tgz",
      "integrity": "sha512-lr2EZCctC2BNR7j7WzJ2FpDznxky1sjfxvvYEyzxNyb6lZXHODmEoJeFu4JupYlkfha1KZpJyoqiJ7pgA1qq8Q==",
      "requires": {
        "spdx-expression-parse": "^3.0.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "spdx-exceptions": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.2.0.tgz",
      "integrity": "sha512-2XQACfElKi9SlVb1CYadKDXvoajPgBVPn/gOQLrTvHdElaVhr7ZEbqJaRnJLVNeaI4cMEAgVCeBMKF6MWRDCRA=="
    },
    "spdx-expression-parse": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.0.tgz",
      "integrity": "sha512-Yg6D3XpRD4kkOmTpdgbUiEJFKghJH03fiC1OPll5h/0sO6neh2jqRDVHOQ4o/LMea0tgCkbMgea5ip/e+MkWyg==",
      "requires": {
        "spdx-exceptions": "^2.1.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "spdx-license-ids": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.5.tgz",
      "integrity": "sha512-J+FWzZoynJEXGphVIS+XEh3kFSjZX/1i9gFBaWQcB+/tmpe2qUsSBABpcxqxnAxFdiUFEgAX1bjYGQvIZmoz9Q=="
    },
    "string-width": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
      "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
      "requires": {
        "is-fullwidth-code-point": "^2.0.0",
        "strip-ansi": "^4.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg="
        },
        "is-fullwidth-code-point": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
          "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="
        },
        "strip-ansi": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
          "requires": {
            "ansi-regex": "^3.0.0"
          }
        }
      }
    },
    "strip-ansi": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
      "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
      "requires": {
        "ansi-regex": "^2.0.0"
      }
    },
    "strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM="
    },
    "strip-eof": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/strip-eof/-/strip-eof-1.0.0.tgz",
      "integrity": "sha1-u0P/VZim6wXYm1n80SnJgzE2Br8="
    },
    "tweetnacl": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-1.0.1.tgz",
      "integrity": "sha512-kcoMoKTPYnoeS50tzoqjPY3Uv9axeuuFAZY9M/9zFnhoVvRfxz9K29IMPD7jGmt2c8SW7i3gT9WqDl2+nV7p4A=="
    },
    "universalify": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
      "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg=="
    },
    "validate-npm-package-license": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
      "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
      "requires": {
        "spdx-correct": "^3.0.0",
        "spdx-expression-parse": "^3.0.0"
      }
    },
    "venv": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/venv/-/venv-1.0.1.tgz",
      "integrity": "sha512-qYTz9RglblAYMX6FsjyCjDD1p1vHAXMEKFj50ttWVVjb2B1jyp5cARGVDDeXFzkImtitKmB+riEkjZDezUEqQw==",
      "requires": {
        "ejs": "^2.5.7",
        "fs-extra": "^4.0.1",
        "yargs": "^8.0.2"
      }
    },
    "which": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
      "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
      "requires": {
        "isexe": "^2.0.0"
      }
    },
    "which-module": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
      "integrity": "sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho="
    },
    "wrap-ansi": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-2.1.0.tgz",
      "integrity": "sha1-2Pw9KE3QV5T+hJc8rs3Rz4JP3YU=",
      "requires": {
        "string-width": "^1.0.1",
        "strip-ansi": "^3.0.1"
      },
      "dependencies": {
        "string-width": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
          "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
          "requires": {
            "code-point-at": "^1.0.0",
            "is-fullwidth-code-point": "^1.0.0",
            "strip-ansi": "^3.0.0"
          }
        }
      }
    },
    "ws": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/ws/-/ws-6.2.1.tgz",
      "integrity": "sha512-GIyAXC2cB7LjvpgMt9EKS2ldqr0MTrORaleiOno6TweZ6r3TKtoFQWay/2PceJ3RuBasOHzXNn5Lrw1X0bEjqA==",
      "requires": {
        "async-limiter": "~1.0.0"
      }
    },
    "y18n": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-3.2.1.tgz",
      "integrity": "sha1-bRX7qITAhnnA136I53WegR4H+kE="
    },
    "yallist": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-2.1.2.tgz",
      "integrity": "sha1-HBH5IY8HYImkfdUS+TxmmaaoHVI="
    },
    "yargs": {
      "version": "8.0.2",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-8.0.2.tgz",
      "integrity": "sha1-YpmpBVsc78lp/355wdkY3Osiw2A=",
      "requires": {
        "camelcase": "^4.1.0",
        "cliui": "^3.2.0",
        "decamelize": "^1.1.1",
        "get-caller-file": "^1.0.1",
        "os-locale": "^2.0.0",
        "read-pkg-up": "^2.0.0",
        "require-directory": "^2.1.1",
        "require-main-filename": "^1.0.1",
        "set-blocking": "^2.0.0",
        "string-width": "^2.0.0",
        "which-module": "^2.0.0",
        "y18n": "^3.2.1",
        "yargs-parser": "^7.0.0"
      }
    },
    "yargs-parser": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-7.0.0.tgz",
      "integrity": "sha1-jQrELxbqVd69MyyvTEA4s+P139k=",
      "requires": {
        "camelcase": "^4.1.0"
      }
    }
  }
}
