# pulley-source-http
Pulley source for files downloaded over HTTP and HTTPS

## Overview
The Pulley `http` source allows users to fetch files by downloading them via HTTP or HTTPS.

## Options
* **url** - _Required_. URL of file to fetch.
* **filename** - Filename to assign to downloaded file. If omitted, filename is derived from `url`.

## Roadmap
This library is still in active development, does not have a stable API, and is missing key features that should be added before a `1.0.0` release.

* Better error management (library currently features _no_ error management)
* Options to configure headers and other request-specific settings
