#!/bin/bash
DATE=$(date +%Y%m%d)
FILENAME="dist/cx-youtube-no-playlist-${DATE}.zip"
if [ -f ${FILENAME} ]; then echo "Deleting existing file"; rm -f ${FILENAME}; fi;
zip -r -q -9 $FILENAME  _locales icons LICENSE manifest.json README.md background.js